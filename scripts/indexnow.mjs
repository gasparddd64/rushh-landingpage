#!/usr/bin/env node
// Soumission IndexNow (https://www.indexnow.org/documentation) pour www.rushh.fr.
//
//   node scripts/indexnow.mjs --all [--dry-run]            toutes les URL HTML du sitemap en production
//   node scripts/indexnow.mjs --urls <url|/chemin> ...     URL précises (créées, modifiées ou supprimées)
//   node scripts/indexnow.mjs --changed <base> [head] [--dry-run]
//                                                          pages dont le fichier source a changé entre deux commits
//   node scripts/indexnow.mjs --since-deploy [sha]         idem, depuis le dernier déploiement Production réussi (API GitHub) ;
//                                                          repli sur --all si la base est introuvable ou si un fichier partagé a changé
//
// Sans --dry-run, la requête est réellement envoyée. Une URL supprimée doit déjà répondre 404/410 en production.
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ENDPOINT, ORIGIN, buildPayload, chunk, cleanUrls, findKey, fileToRoute, isSharedFile, parseSitemap,
} from "./indexnow-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const rest = args.filter((a) => a !== "--dry-run");
const mode = rest[0];

const GH_API = "https://api.github.com/repos/gasparddd64/rushh-landingpage";
const ghHeaders = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};
const git = (...a) => execFileSync("git", a, { cwd: root, encoding: "utf8" });

/** SHA du dernier déploiement Production réussi, hors déploiement courant ; null si introuvable ou absent du dépôt local. */
async function lastDeployedSha(current) {
  const res = await fetch(`${GH_API}/deployments?environment=Production&per_page=30`, { headers: ghHeaders });
  if (!res.ok) throw new Error(`API GitHub deployments : HTTP ${res.status}`);
  for (const d of await res.json()) {
    if (d.sha === current) continue;
    const st = await fetch(d.statuses_url, { headers: ghHeaders });
    if (!st.ok) throw new Error(`API GitHub statuses : HTTP ${st.status}`);
    if (!(await st.json()).some((s) => s.state === "success")) continue;
    try {
      git("cat-file", "-e", `${d.sha}^{commit}`);
      return d.sha;
    } catch {
      return null; // base absente de l'historique local (force-push ?) : on ne devine pas
    }
  }
  return null;
}

const toAbs = (u) => (u.startsWith("/") ? ORIGIN + (u === "/" ? "" : u) : u);

async function fromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml : HTTP ${res.status}`);
  return cleanUrls(parseSitemap(await res.text()));
}

async function collect() {
  if (mode === "--all") return fromSitemap();
  if (mode === "--urls") {
    if (rest.length < 2) throw new Error("--urls : aucune URL fournie");
    return cleanUrls(rest.slice(1).map(toAbs));
  }
  if (mode === "--changed" || mode === "--since-deploy") {
    let base, head = "HEAD";
    if (mode === "--changed") {
      [base, head = "HEAD"] = rest.slice(1);
      if (!base) throw new Error("--changed : commit de base requis");
    } else {
      head = rest[1] ?? git("rev-parse", "HEAD").trim();
      try {
        base = await lastDeployedSha(head);
      } catch (e) {
        console.warn(`Base de comparaison indisponible (${e.message}).`);
      }
      if (!base) {
        console.warn("Aucun déploiement Production précédent exploitable : repli sur toutes les URL du sitemap.");
        return fromSitemap();
      }
      console.log(`Base : dernier déploiement Production réussi ${base.slice(0, 7)} -> ${head.slice(0, 7)}`);
    }
    // A/M/D/R : les pages supprimées ou renommées sont soumises aussi (l'ancienne URL doit répondre 404/410).
    const files = git("diff", "--name-only", "--no-renames", base, head).split("\n").filter(Boolean);
    const shared = files.filter(isSharedFile);
    if (shared.length) {
      if (mode === "--since-deploy") {
        console.warn(`Fichiers partagés modifiés (${shared.length}) : impact non déterminable, repli sur toutes les URL du sitemap.`);
        return fromSitemap();
      }
      console.warn(`Fichiers partagés modifiés (${shared.length}) : impact non déterminable, ajoute au besoin --urls ou --all.`);
    }
    return cleanUrls(files.map(fileToRoute).filter(Boolean).map(toAbs));
  }
  throw new Error("Usage : --all | --urls <url…> | --changed <base> [head]  (+ --dry-run)");
}

const key = findKey(path.join(root, "public"));
const urls = await collect();
if (!urls.length) {
  console.log("Aucune URL à soumettre.");
  process.exit(0);
}
console.log(`${urls.length} URL :\n${urls.join("\n")}`);

if (dryRun) {
  console.log(`\n[dry-run] payload : ${JSON.stringify({ ...buildPayload(key, ["…"]), urlList: `${urls.length} URL` })}`);
  process.exit(0);
}

// Vérifie que le fichier de clé est bien en ligne avant d'appeler l'API.
const keyRes = await fetch(`${ORIGIN}/${key}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== key) {
  console.error(`Fichier de clé introuvable ou différent sur ${ORIGIN}/${key}.txt (déploiement pas encore en ligne ?)`);
  process.exit(1);
}

let failed = false;
for (const part of chunk(urls)) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(buildPayload(key, part)),
  });
  // 200 = reçu, 202 = reçu (validation de la clé en cours). 4xx/5xx : voir la spécification.
  console.log(`IndexNow -> HTTP ${res.status} (${part.length} URL)`);
  if (res.status !== 200 && res.status !== 202) failed = true;
}
process.exit(failed ? 1 : 0);
