import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../../app/sitemap";
import { getMarkdownPage, isKnownRoute } from "../agent-content";
import { ARTICLES, CATEGORIES, FEATURED_PATH, type Article, type Block } from "./index";
import { CATALOGUE } from "./catalogue";
import { articleToMarkdown } from "./markdown";

const REQUIRED_LINKS: Record<string, string[]> = {
  "/ressources/appels-manques-immobilier": ["/solutions/transaction-immobiliere", "/offre"],
  "/ressources/telesecretariat-humain-ou-ia": ["/offre", "/demonstrations"],
  "/ressources/qualification-appels-vendeurs-acquereurs": ["/solutions/transaction-immobiliere", "/demonstrations", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/comparatif/standards-telephoniques-ia-immobilier": ["/offre", "/demonstrations", "/vs/fonio", "/vs/joe-ai", "/vs/volubilimo", "/ressources/choisir-standard-telephonique-ia-immobilier"],
  "/vs/fonio": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/ressources/choisir-standard-telephonique-ia-immobilier", "/vs/joe-ai", "/vs/volubilimo"],
  "/ressources/choisir-standard-telephonique-ia-immobilier": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/ressources/telesecretariat-humain-ou-ia", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/ressources/prise-rendez-vous-ia-immobilier": ["/offre", "/demonstrations", "/ressources/qualification-appels-vendeurs-acquereurs", "/ressources/choisir-standard-telephonique-ia-immobilier"],
  "/ressources/cout-standard-telephonique-ia-immobilier": ["/offre", "/demonstrations", "/ressources/choisir-standard-telephonique-ia-immobilier", "/comparatif/standards-telephoniques-ia-immobilier", "/ressources/telesecretariat-humain-ou-ia"],
  "/ressources/permanence-telephonique-agence-immobiliere": ["/offre", "/demonstrations", "/solutions/transaction-immobiliere", "/solutions/gestion-locative", "/solutions/syndics", "/ressources/telesecretariat-humain-ou-ia"],
  "/ressources/appel-vendeur-estimation-immobiliere": ["/demonstrations", "/solutions/transaction-immobiliere", "/ressources/qualification-appels-vendeurs-acquereurs", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/ressources/standard-telephonique-ia-apimo": ["/offre", "/integrations", "/ressources/qualification-appels-vendeurs-acquereurs"],
  "/ressources/standard-telephonique-ia-whise": ["/offre", "/integrations", "/ressources/choisir-standard-telephonique-ia-immobilier", "/ressources/standard-telephonique-ia-apimo"],
  "/vs/airagent": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio", "/vs/joe-ai", "/vs/volubilimo"],
  "/vs/vokai": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio", "/vs/joe-ai", "/vs/volubilimo"],
  "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere": ["/offre", "/demonstrations", "/ressources/cout-standard-telephonique-ia-immobilier", "/ressources/appels-manques-immobilier", "/ressources/prise-rendez-vous-ia-immobilier", "/ressources/permanence-telephonique-agence-immobiliere"],
  "/ressources/renvoi-appel-ou-decroche-ia-immobilier": ["/offre", "/demonstrations", "/ressources/permanence-telephonique-agence-immobiliere", "/ressources/appels-agence-immobiliere-soir-week-end", "/ressources/choisir-standard-telephonique-ia-immobilier"],
  "/ressources/filtrer-demarchage-telephonique-agence-immobiliere": ["/offre", "/demonstrations", "/ressources/qualification-appels-vendeurs-acquereurs", "/ressources/permanence-telephonique-agence-immobiliere", "/ressources/choisir-standard-telephonique-ia-immobilier"],
  "/ressources/appels-agence-immobiliere-soir-week-end": ["/offre", "/demonstrations", "/ressources/permanence-telephonique-agence-immobiliere", "/ressources/renvoi-appel-ou-decroche-ia-immobilier", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/ressources/qualifier-appels-locataires-bailleurs": ["/offre", "/demonstrations", "/solutions/gestion-locative", "/integrations", "/ressources/permanence-telephonique-agence-immobiliere"],
  "/ressources/standard-syndic-appels-urgents": ["/offre", "/demonstrations", "/solutions/syndics", "/ressources/permanence-telephonique-agence-immobiliere", "/ressources/standard-telephonique-ia-immobilier-rgpd"],
  "/ressources/standard-ia-google-agenda-outlook-immobilier": ["/offre", "/demonstrations", "/integrations", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/ressources/standard-telephonique-ia-immobilier-rgpd": ["/offre", "/demonstrations", "/privacy"],
  "/ressources/repondeur-ou-standard-ia-agence-immobiliere": ["/offre", "/demonstrations", "/ressources/appels-manques-immobilier", "/ressources/standard-telephonique-ia-immobilier-rgpd"],
  "/vs/volubilimo": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio", "/vs/joe-ai", "/ressources/prise-rendez-vous-ia-immobilier"],
};

// Pages au texte validé : seuls les liens présents dans le texte (ou posés sur ses mots) sont exigés.
const BARE_LINKS: Record<string, string[]> = {
  "/comparatif/standards-telephoniques-ia-immobilier": ["/demonstrations", "/vs/fonio", "/vs/joe-ai"],
  "/ressources/qualification-appels-vendeurs-acquereurs": ["/demonstrations", "/solutions/transaction-immobiliere", "/ressources/prise-rendez-vous-ia-immobilier"],
  "/ressources/prise-rendez-vous-ia-immobilier": ["/demonstrations", "/integrations", "/ressources/qualification-appels-vendeurs-acquereurs", "/ressources/standard-ia-google-agenda-outlook-immobilier", "/ressources/appel-vendeur-estimation-immobiliere"],
  "/ressources/appel-vendeur-estimation-immobiliere": ["/demonstrations", "/solutions/transaction-immobiliere", "/ressources/qualification-appels-vendeurs-acquereurs", "/ressources/prise-rendez-vous-ia-immobilier", "/ressources/standard-ia-google-agenda-outlook-immobilier"],
  "/ressources/permanence-telephonique-agence-immobiliere": ["/demonstrations", "/solutions/transaction-immobiliere", "/solutions/gestion-locative", "/ressources/standard-syndic-appels-urgents", "/ressources/telesecretariat-humain-ou-ia", "/ressources/appels-manques-immobilier"],
  "/ressources/appels-manques-immobilier": ["/demonstrations", "/ressources/telesecretariat-humain-ou-ia", "/ressources/permanence-telephonique-agence-immobiliere"],
};

// Pages qui citent légitimement des prix publics de concurrents (sourcés) ; les prix Rushh restent interdits partout.
const COMPETITOR_PRICE_PAGES = new Set(["/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio"]);
// Page pédagogique dont la simulation est chiffrée en euros FICTIFS : ni tarif Rushh ni tarif concurrent.
const FICTIONAL_PRICE_PAGES = new Set(["/ressources/cout-standard-telephonique-ia-immobilier", "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere"]);

/** Texte de ce qui concerne Rushh : tout le texte hors cellules concurrentes, plus les lignes/colonnes Rushh des tableaux. */
function rushhText(a: Article): string {
  const parts: string[] = [a.title, a.description, a.h1, a.answer, a.sourcesNote, ...(a.rushh ? [a.rushh.text, ...a.rushh.points] : []), a.cta.text];
  for (const s of a.sections) {
    parts.push(s.h2);
    for (const b of s.blocks) {
      if (b.t === "table") {
        const rushhCol = b.head.indexOf("Rushh");
        for (const r of b.rows) {
          if (r[0] === "Rushh") parts.push(r.join(" "));
          else if (rushhCol > 0) parts.push(r[rushhCol]);
        }
      } else if (b.t === "p" || b.t === "callout" || b.t === "h3") {
        // une phrase qui cite Rushh ne doit pas contenir de prix
        parts.push(...b.text.split(/(?<=[.!?])\s+/).filter((x) => /Rushh/.test(x)));
      } else if (b.t === "ul" || b.t === "ol" || b.t === "checklist") {
        parts.push(...b.items.filter((x) => /Rushh/.test(x)));
      }
    }
  }
  return parts.join("\n");
}

function allText(a: Article): string {
  const blockText = (b: Block): string => {
    switch (b.t) {
      case "p":
      case "h3":
      case "callout":
      case "statement":
        return b.text;
      case "button":
        return `${b.label} [x](${b.href})`;
      case "ul":
      case "ol":
      case "checklist":
        return b.items.join(" ");
      case "table":
        return [b.caption, ...b.head, ...b.rows.flat(), b.note ?? ""].join(" ");
      case "fiche":
        return [b.title, ...b.rows.flat(), b.note ?? ""].join(" ");
      case "detail":
        return [b.summary, ...b.blocks.map(blockText)].join(" ");
      case "rushh":
        return [b.title, b.text, ...(b.points ?? []), b.link ? `[x](${b.link.href})` : ""].join(" ");
    }
  };
  const intro = (a.intro ?? []).map(blockText);
  const extra = [...intro, ...(a.keyPoints ?? []), a.rushhBrief ?? "", ...(a.verdict ? [...a.verdict.rushhIf, ...a.verdict.otherIf] : [])];
  const rushh = a.rushh ? [a.rushh.title, a.rushh.text, ...a.rushh.points] : [];
  return [a.title, a.description, a.h1, a.answer, ...extra, a.sourcesNote, ...rushh, a.cta.title, a.cta.text, ...a.sections.flatMap((s) => [s.h2, s.takeaway ?? "", ...s.blocks.map(blockText)])].join("\n");
}

function internalLinks(a: Article): string[] {
  const text =
    allText(a) +
    a.related.map((r) => `[x](${r.href})`).join("") +
    a.cta.links.map((l) => `[x](${l.href})`).join("") +
    (a.rushh?.links ?? []).map((l) => `[x](${l.href})`).join("");
  return [...text.matchAll(/\]\((\/[^)#]*)\)/g)].map((m) => m[1]);
}

describe.each(ARTICLES.map((a) => [a.path, a] as const))("guide %s", (path, a) => {
  it("is a known route with a Markdown mirror generated from the same data", () => {
    expect(isKnownRoute(path)).toBe(true);
    expect(getMarkdownPage(path)?.markdown).toBe(articleToMarkdown(a));
  });

  it("has exactly one H1 and the requested heading", () => {
    const md = articleToMarkdown(a);
    expect(md.match(/^# /gm)).toHaveLength(1);
    expect(md).toContain(`# ${a.h1}`);
  });

  it("keeps title and description within search display limits and distinct from the H1", () => {
    expect(a.title.length).toBeLessThanOrEqual(70);
    expect(a.description.length).toBeLessThanOrEqual(155);
    expect(a.title).not.toBe(a.h1);
  });

  it("has real, valid dates and a consistent modification date", () => {
    expect(a.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(a.dateModified >= a.datePublished).toBe(true);
    if (a.bare) return; // texte validé : aucune date ajoutée au texte (les dates restent dans le JSON-LD)
    expect(articleToMarkdown(a)).toMatch(/Publié le \d+(er)? \w+ \d{4}/);
  });

  it("links to the pages required by the brief, and every internal link resolves", () => {
    const links = internalLinks(a);
    for (const required of a.bare ? (BARE_LINKS[path] ?? ["/demonstrations"]) : REQUIRED_LINKS[path]) expect(links).toContain(required);
    for (const l of links) expect(isKnownRoute(l), l).toBe(true);
  });

  it("shows no Rushh price, no Hektor, no guarantee wording", () => {
    const t = allText(a);
    // aucun montant en euros sur aucune page : ni tarif Rushh, ni tarif d'agent vocal concurrent, ni simulation
    expect(t).not.toMatch(/€|euros?\b/i);
    if (COMPETITOR_PRICE_PAGES.has(path) && !a.bare) expect(t).toMatch(/Sur devis|Tarification personnalisée/);
    expect(t).not.toMatch(/hektor/i);
    expect(t.replace(/rien ne garantit/gi, "")).not.toMatch(/garantit|garanti(e|s)? (de|un|des)/i);
  });

  it("lists every cited source URL in the Markdown mirror", () => {
    const md = articleToMarkdown(a);
    for (const s of a.sources) {
      expect(s.url.startsWith("https://")).toBe(true);
      expect(md).toContain(s.url);
    }
  });

  it("has a cover file whose declared size matches the real PNG, with a descriptive alt text (when a cover exists)", () => {
    if (!a.cover) {
      expect(articleToMarkdown(a)).not.toContain("![");
      return;
    }
    const buf = readFileSync(join(process.cwd(), "public", a.cover.src));
    expect(buf.subarray(1, 4).toString()).toBe("PNG");
    expect(buf.readUInt32BE(16)).toBe(a.cover.width);
    expect(buf.readUInt32BE(20)).toBe(a.cover.height);
    expect(a.cover.alt.length).toBeGreaterThan(60);
    if (!a.bare) expect(articleToMarkdown(a)).toContain(`](https://www.rushh.fr${a.cover.src})`);
    expect(buf.length).toBeLessThan(150_000);
  });

  it("is listed in the sitemap", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toContain(`https://www.rushh.fr${path}`);
  });
});

describe("guide-specific requirements", () => {
  const get = (p: string) => ARTICLES.find((a) => a.path === p)!;

  it("missed-calls guide keeps the validated four-step method and its four-row Rushh table", () => {
    const a = get("/ressources/appels-manques-immobilier");
    expect(a.bare).toBe(true);
    const steps = a.sections.flatMap((s) => s.blocks).filter((b) => b.t === "h3" && /^[1-4]\. /.test(b.text));
    expect(steps).toHaveLength(4);
    const table = a.sections.flatMap((s) => s.blocks).find((b) => b.t === "table");
    expect(table && table.t === "table" && table.head).toEqual(["La méthode", "Ce que fait Rushh"]);
    expect(table && table.t === "table" && table.rows).toHaveLength(4);
    expect(articleToMarkdown(a)).not.toMatch(/journal d'appels|Tableau de suivi|Sources et méthode/i);
  });

});

describe("catalogue /ressources (le Blog)", () => {
  const md = getMarkdownPage("/ressources")?.markdown ?? "";

  it("is a known route with a Markdown mirror, one H1, and links to all twenty-five publications", () => {
    expect(isKnownRoute("/ressources")).toBe(true);
    expect(md.match(/^# /gm)).toHaveLength(1);
    expect(md).toContain("# Le Blog Rushh");
    expect(ARTICLES).toHaveLength(25);
    expect(CATALOGUE).toHaveLength(25);
    for (const e of CATALOGUE) expect(md).toContain(`(https://www.rushh.fr${e.path})`);
    expect(sitemap().map((e) => e.url)).toContain("https://www.rushh.fr/ressources");
  });

  it("has no empty or unknown category, and the featured publication exists", () => {
    for (const c of CATEGORIES) expect(CATALOGUE.some((e) => e.category === c.id), c.id).toBe(true);
    for (const e of CATALOGUE) expect(CATEGORIES.map((c) => c.id), e.path).toContain(e.category);
    expect(CATALOGUE.map((e) => e.path)).toContain(FEATURED_PATH);
  });

  it("offers the three filters: all (25), guides (19), comparatifs (6)", () => {
    expect(CATEGORIES.map((c) => c.label)).toEqual(["Guides & conseils", "Comparatifs"]);
    const by = (c: string) => CATALOGUE.filter((e) => e.category === c).map((e) => e.path).sort();
    expect(by("guides")).toEqual([
      "/ressources/appel-vendeur-estimation-immobiliere",
      "/ressources/appels-agence-immobiliere-soir-week-end",
      "/ressources/appels-manques-immobilier",
      "/ressources/choisir-standard-telephonique-ia-immobilier",
      "/ressources/cout-standard-telephonique-ia-immobilier",
      "/ressources/filtrer-demarchage-telephonique-agence-immobiliere",
      "/ressources/permanence-telephonique-agence-immobiliere",
      "/ressources/prise-rendez-vous-ia-immobilier",
      "/ressources/qualification-appels-vendeurs-acquereurs",
      "/ressources/qualifier-appels-locataires-bailleurs",
      "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere",
      "/ressources/renvoi-appel-ou-decroche-ia-immobilier",
      "/ressources/repondeur-ou-standard-ia-agence-immobiliere",
      "/ressources/standard-ia-google-agenda-outlook-immobilier",
      "/ressources/standard-syndic-appels-urgents",
      "/ressources/standard-telephonique-ia-apimo",
      "/ressources/standard-telephonique-ia-immobilier-rgpd",
      "/ressources/standard-telephonique-ia-whise",
      "/ressources/telesecretariat-humain-ou-ia",
    ]);
    expect(by("comparatifs")).toEqual([
      "/comparatif/standards-telephoniques-ia-immobilier",
      "/vs/airagent",
      "/vs/fonio",
      "/vs/joe-ai",
      "/vs/vokai",
      "/vs/volubilimo",
    ]);
  });

  it("lists Joe AI with its real URL, a cover, and no invented date", () => {
    const joe = CATALOGUE.find((e) => e.path === "/vs/joe-ai")!;
    expect(joe).toBeDefined();
    expect(ARTICLES.some((a) => a.path === "/vs/joe-ai")).toBe(true);
    expect(Object.keys(joe)).not.toContain("date");
    expect(joe.category).toBe("comparatifs");
  });

  it("gives every card a cover that matches the real PNG, a short title and an editorial summary distinct from the meta description", () => {
    for (const e of CATALOGUE) {
      const buf = readFileSync(join(process.cwd(), "public", e.cover.src));
      expect(buf.readUInt32BE(16), e.path).toBe(e.cover.width);
      expect(buf.readUInt32BE(20), e.path).toBe(e.cover.height);
      expect(e.cover.alt.length).toBeGreaterThan(60);
      expect(e.title.length, e.path).toBeLessThanOrEqual(50);
      expect(e.summary.length, e.path).toBeLessThanOrEqual(130);
      const a = ARTICLES.find((x) => x.path === e.path);
      if (a) expect(e.summary, e.path).not.toBe(a.description);
    }
  });

  it("mirrors no Rushh price", () => {
    expect(md).not.toMatch(/€|euros?\b/i);
  });
});

describe("article endings", () => {
  it("merges the Rushh block and the closing invitation into one block, with no separate final CTA in the mirror", () => {
    for (const a of ARTICLES.filter((x) => !x.bare)) {
      const md = articleToMarkdown(a);
      expect(md, a.path).toContain(`### ${a.cta.title}`);
      expect(md, a.path).not.toContain(`\n## ${a.cta.title}`);
      expect(md.indexOf("## Comment Rushh répond"), a.path).toBeLessThan(md.indexOf(`### ${a.cta.title}`));
      expect(md.indexOf(`### ${a.cta.title}`), a.path).toBeLessThan(md.indexOf("## Sources et méthode"));
    }
  });
});

describe("catalogue card titles and dates", () => {
  it("short titles stay short and never replace the SEO H1/title", () => {
    for (const a of ARTICLES.filter((x) => x.shortTitle)) {
      expect(a.shortTitle!.length, a.path).toBeLessThanOrEqual(70);
      expect(a.shortTitle).not.toBe(a.h1);
      expect(articleToMarkdown(a)).toContain(`# ${a.h1}`);
    }
  });

  it("keeps the real first-publication dates: the three first guides were published on 2026-10-28, the later ones are not backdated", () => {
    const published = (p: string) => ARTICLES.find((a) => a.path === p)!.datePublished;
    expect(published("/ressources/appels-manques-immobilier")).toBe("2026-10-28");
    expect(published("/ressources/telesecretariat-humain-ou-ia")).toBe("2026-10-28");
    expect(published("/ressources/qualification-appels-vendeurs-acquereurs")).toBe("2026-10-28");
    for (const p of ["/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio", "/ressources/choisir-standard-telephonique-ia-immobilier", "/ressources/prise-rendez-vous-ia-immobilier", "/vs/volubilimo"]) {
      expect(published(p) > "2026-10-28", p).toBe(true);
    }
    for (const p of ["/ressources/cout-standard-telephonique-ia-immobilier", "/ressources/permanence-telephonique-agence-immobiliere", "/ressources/appel-vendeur-estimation-immobiliere", "/ressources/standard-telephonique-ia-apimo", "/ressources/standard-telephonique-ia-whise", "/vs/airagent", "/vs/vokai", "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere"]) {
      expect(published(p), p).toBe("2026-10-31");
    }
    for (const p of ["/ressources/renvoi-appel-ou-decroche-ia-immobilier", "/ressources/filtrer-demarchage-telephonique-agence-immobiliere", "/ressources/appels-agence-immobiliere-soir-week-end", "/ressources/qualifier-appels-locataires-bailleurs", "/ressources/standard-syndic-appels-urgents", "/ressources/standard-ia-google-agenda-outlook-immobilier", "/ressources/standard-telephonique-ia-immobilier-rgpd", "/ressources/repondeur-ou-standard-ia-agence-immobiliere"]) {
      expect(published(p), p).toBe("2026-11-02");
    }
  });
});

describe("validated-text page /comparatif/standards-telephoniques-ia-immobilier", () => {
  const a = ARTICLES.find((x) => x.path === "/comparatif/standards-telephoniques-ia-immobilier")!;
  const md = articleToMarkdown(a);

  it("mirrors the validated text and nothing from the removed comparison", () => {
    for (const phrase of [
      "Quel standard téléphonique IA choisir pour l'immobilier ?",
      "Rushh va plus loin que la simple réception téléphonique",
      "Un appel vendeur ne doit pas finir en simple message",
      "[Réserver une démonstration](https://www.rushh.fr/demonstrations)",
      "Une solution personnalisée, entièrement prise en charge par notre équipe.",
    ]) expect(md).toContain(phrase);
    const all = `${md}\n${a.title}\n${a.description}\n${a.summary}`;
    expect(all).not.toMatch(/Alopeak|Volubilimo|AirAgent|VOKAI|sur devis|consulté le|Sources et méthode|À lire aussi|huit critères|cinq solutions|ni SMS|appels entrants uniquement/i);
  });

  it("keeps a single H1, no source list and no automatic editorial blocks", () => {
    expect(md.match(/^# /gm)).toHaveLength(1);
    expect(a.sources).toHaveLength(0);
    expect(md).not.toMatch(/En bref|Comment Rushh répond/);
  });
});

describe("refonte éditoriale : règles communes aux pages au texte réécrit", () => {
  // pages déjà validées mot pour mot : protégées, hors de ces règles
  const PROTECTED = new Set([
    "/comparatif/standards-telephoniques-ia-immobilier",
    "/ressources/appels-manques-immobilier",
    "/ressources/qualification-appels-vendeurs-acquereurs",
    "/ressources/prise-rendez-vous-ia-immobilier",
    "/ressources/appel-vendeur-estimation-immobiliere",
    "/ressources/permanence-telephonique-agence-immobiliere",
  ]);
  const bare = ARTICLES.filter((x) => x.bare && !PROTECTED.has(x.path));
  const wc = (md: string) => md.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).length;

  it("covers the 19 rewritten pages (18 guides/comparisons + Joe AI), all articles being now in the new format", () => {
    expect(bare).toHaveLength(19);
    expect(ARTICLES.every((x) => x.bare)).toBe(true);
  });

  it("stays short, with one demo button and no table", () => {
    for (const a of bare) {
      const md = articleToMarkdown(a);
      expect(wc(md), a.path).toBeLessThanOrEqual(800);
      expect(a.sections.flatMap((s) => s.blocks).filter((b) => b.t === "button"), a.path).toHaveLength(1);
      expect(md, a.path).not.toContain("|---|");
    }
  });

  it("never mentions a trial, a delay, a price, a contract, hosting, sub-processors or certifications", () => {
    for (const a of bare) {
      const md = `${a.title}\n${a.description}\n${articleToMarkdown(a)}`;
      // le guide RGPD cite l'article 28 (sous-traitant) : sans aucune affirmation sur Rushh
      const re = a.path === "/ressources/standard-telephonique-ia-immobilier-rgpd"
        ? /période d'essai|essai gratuit|jours ouvrés|mise en service|€|\beuros?\b|sur devis|\bDPA\b|hébergement|certifi|garantit|garantie de résultat|\bnatif|officiel(le)? /i
        : /période d'essai|essai gratuit|jours ouvrés|mise en service|€|\beuros?\b|sur devis|\bDPA\b|hébergement|sous-traitan|certifi|garantit|garantie de résultat|\bnatif|officiel(le)? /i;
      expect(md, a.path).not.toMatch(re);
    }
  });

  it("does not claim Rushh is limited to a voicemail, nor lists competitor prices", () => {
    for (const a of bare) {
      const md = articleToMarkdown(a);
      expect(md, a.path).not.toMatch(/simple répondeur|ni SMS|uniquement des appels entrants/i);
    }
  });

  it("competitor pages cite the competitor's official site with a consultation date", () => {
    for (const [p, host] of [["/vs/fonio", "fonio.ai"], ["/vs/volubilimo", "volubilimo.com"], ["/vs/airagent", "airagent.fr"], ["/vs/vokai", "vokai.fr"], ["/vs/joe-ai", "getjoe-ai.com"]]) {
      const md = articleToMarkdown(ARTICLES.find((x) => x.path === p)!);
      expect(md, p).toContain(host);
      expect(md, p).toMatch(/consultée? le \d+ (octobre|novembre) 2026/);
    }
  });
});

describe("/vs/joe-ai (comparatif refondu)", () => {
  const a = ARTICLES.find((x) => x.path === "/vs/joe-ai")!;
  const md = articleToMarkdown(a);

  it("serves the validated Markdown with absolute Rushh links and no Claude URL", () => {
    const served = getMarkdownPage(a.path);
    expect(served?.markdown).toBe(md);
    expect(isKnownRoute(a.path)).toBe(true);
    for (const path of ["/offre", "/demonstrations", "/ressources/choisir-standard-telephonique-ia-immobilier"]) {
      expect(md).toContain(`](https://www.rushh.fr${path})`);
    }
    expect(md).not.toMatch(/claude\.ai|\]\(\//i);
  });

  it("preserves the creation date from Git and exposes one canonical sitemap entry", () => {
    // 94ab765 (2026-09-18): Add /vs/joe-ai comparison page.
    expect(a.datePublished).toBe("2026-09-18");
    expect(a.dateModified).toBe("2026-11-03");
    const entries = sitemap().filter((entry) => entry.url === "https://www.rushh.fr/vs/joe-ai");
    expect(entries).toHaveLength(1);
    expect(entries[0].lastModified).toEqual(new Date(a.dateModified));
  });

  it("is short, follows the validated structure and stays favourable without disparaging Joe AI", () => {
    expect(md.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).length).toBeLessThanOrEqual(500);
    expect(md).toContain("## Ce que propose Joe AI");
    expect(md).toContain("## Pourquoi choisir Rushh");
    expect(md).toContain("consulté le 3 novembre 2026");
    expect(md).not.toMatch(/générique|uniquement en libre-service|\bessais?\b|\bjours\b|délai|€|sur devis|\|---\|/i);
  });

  it("presents Rushh as inbound-call focused with appointments, live transfer, automatic SMS and e-mails, and a business platform", () => {
    for (const t of ["agenda connecté", "transfère l'appel en direct", "SMS et des e-mails automatiques", "plateforme métier", "alternative à Joe AI"]) expect(md).toContain(t);
    expect(md).not.toMatch(/voix uniquement|uniquement la voix/i);
  });
});
