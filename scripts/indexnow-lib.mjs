// Logique pure d'IndexNow (sans effet de bord) : testée dans indexnow.test.mjs.
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export const HOST = "www.rushh.fr";
export const ORIGIN = `https://${HOST}`;
export const ENDPOINT = "https://api.indexnow.org/IndexNow";
export const MAX_URLS_PER_REQUEST = 10000; // limite du protocole

// Chemins publics à ne jamais soumettre (privés, tests, techniques).
const EXCLUDED_PREFIXES = ["/api", "/_next", "/test", "/tests", "/confirmation", "/dashboard"];

/** Clé = fichier public/<clé>.txt dont le contenu est identique au nom (8–128 car. [a-zA-Z0-9-]). */
export function findKey(publicDir) {
  const found = readdirSync(publicDir).flatMap((f) => {
    const m = /^([A-Za-z0-9-]{8,128})\.txt$/.exec(f);
    if (!m) return [];
    return readFileSync(path.join(publicDir, f), "utf8").trim() === m[1] ? [m[1]] : [];
  });
  if (found.length !== 1) throw new Error(`Clé IndexNow : ${found.length} fichier(s) valide(s) dans public/ (attendu : 1)`);
  return found[0];
}

/** Normalise une URL ; retourne null si elle ne doit pas être soumise. */
export function normalizeUrl(raw) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" || u.host !== HOST) return null;
  if (/\.(md|txt|xml|json|png|jpe?g|webp|svg|ico|css|js)$/i.test(u.pathname)) return null;
  if (EXCLUDED_PREFIXES.some((p) => u.pathname === p || u.pathname.startsWith(`${p}/`))) return null;
  const pathname = u.pathname.length > 1 ? u.pathname.replace(/\/+$/, "") : "/";
  return ORIGIN + (pathname === "/" ? "" : pathname);
}

/** Déduplique + filtre. */
export function cleanUrls(list) {
  return [...new Set(list.map(normalizeUrl).filter(Boolean))];
}

export function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

export function chunk(list, size = MAX_URLS_PER_REQUEST) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

export function buildPayload(key, urls) {
  return { host: HOST, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList: urls };
}

/**
 * Fichier modifié (chemin git) -> route publique, ou null.
 * Seules les pages dont l'URL est déterminée sans ambiguïté sont mappées.
 */
export function fileToRoute(file) {
  if (file === "app/page.tsx") return "/";
  let m = /^app\/((?:[a-z0-9-]+\/)*[a-z0-9-]+)\/page\.tsx$/.exec(file);
  if (m && !m[1].startsWith("(") && !m[1].includes("(")) return `/${m[1]}`;
  m = /^lib\/articles\/([a-z0-9-]+)\.ts$/.exec(file);
  if (m && !["types", "index", "markdown", "articles.test"].includes(m[1])) return `/ressources/${m[1]}`;
  return null;
}

/** Fichiers partagés dont la modification peut changer beaucoup de pages (→ soumission manuelle recommandée). */
export function isSharedFile(file) {
  return /^(app\/(layout\.tsx|globals\.css|.*\.css)|components\/|lib\/(seo|agent-content)\.ts)/.test(file) && fileToRoute(file) === null;
}
