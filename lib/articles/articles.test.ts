import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../../app/sitemap";
import { getMarkdownPage, isKnownRoute } from "../agent-content";
import { ARTICLES, CATEGORIES, FEATURED_PATH, type Article, type Block } from "./index";
import { articleToMarkdown } from "./markdown";

const REQUIRED_LINKS: Record<string, string[]> = {
  "/ressources/appels-manques-immobilier": ["/solutions/transaction-immobiliere", "/offre"],
  "/ressources/telesecretariat-humain-ou-ia": ["/offre", "/demonstrations"],
  "/ressources/qualification-appels-vendeurs-acquereurs": ["/solutions/transaction-immobiliere", "/demonstrations"],
  "/comparatif/standards-telephoniques-ia-immobilier": ["/offre", "/demonstrations", "/vs/fonio", "/vs/joe-ai", "/ressources/choisir-standard-telephonique-ia-immobilier"],
  "/vs/fonio": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/ressources/choisir-standard-telephonique-ia-immobilier", "/vs/joe-ai"],
  "/ressources/choisir-standard-telephonique-ia-immobilier": ["/offre", "/demonstrations", "/comparatif/standards-telephoniques-ia-immobilier", "/ressources/telesecretariat-humain-ou-ia"],
};

// Pages qui citent légitimement des prix publics de concurrents (sourcés) ; les prix Rushh restent interdits partout.
const COMPETITOR_PRICE_PAGES = new Set(["/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio"]);

/** Texte de ce qui concerne Rushh : tout le texte hors cellules concurrentes, plus les lignes/colonnes Rushh des tableaux. */
function rushhText(a: Article): string {
  const parts: string[] = [a.title, a.description, a.h1, a.answer, a.sourcesNote];
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
        return b.text;
      case "ul":
      case "ol":
      case "checklist":
        return b.items.join(" ");
      case "table":
        return [b.caption, ...b.head, ...b.rows.flat(), b.note ?? ""].join(" ");
      case "fiche":
        return [b.title, ...b.rows.flat(), b.note ?? ""].join(" ");
    }
  };
  return [a.title, a.description, a.h1, a.answer, a.sourcesNote, ...a.sections.flatMap((s) => [s.h2, ...s.blocks.map(blockText)])].join("\n");
}

function internalLinks(a: Article): string[] {
  const text = allText(a) + a.related.map((r) => `[x](${r.href})`).join("") + a.cta.links.map((l) => `[x](${l.href})`).join("");
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
    expect(articleToMarkdown(a)).toMatch(/Publié le \d+(er)? \w+ \d{4}/);
  });

  it("links to the pages required by the brief, and every internal link resolves", () => {
    const links = internalLinks(a);
    for (const required of REQUIRED_LINKS[path]) expect(links).toContain(required);
    for (const l of links) expect(isKnownRoute(l), l).toBe(true);
  });

  it("shows no Rushh price, no Hektor, no guarantee wording", () => {
    const t = allText(a);
    if (COMPETITOR_PRICE_PAGES.has(path)) {
      expect(rushhText(a)).not.toMatch(/€|euros?\b/i);
      expect(t).toContain("Sur devis");
    } else {
      expect(t).not.toMatch(/€|euros?\b/i);
    }
    expect(t).not.toMatch(/hektor/i);
    expect(t).not.toMatch(/garantit|garanti(e|s)? (de|un|des)/i);
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
    expect(articleToMarkdown(a)).toContain(`](https://www.rushh.fr${a.cover.src})`);
    expect(buf.length).toBeLessThan(150_000);
  });

  it("is listed in the sitemap", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toContain(`https://www.rushh.fr${path}`);
  });
});

describe("guide-specific requirements", () => {
  const get = (p: string) => ARTICLES.find((a) => a.path === p)!;

  it("missed-calls guide provides the tracking table with the six requested columns", () => {
    const table = get("/ressources/appels-manques-immobilier").sections
      .flatMap((s) => s.blocks)
      .find((b) => b.t === "table" && b.head.length === 6);
    expect(table && table.t === "table" && table.head).toEqual(["Date", "Créneau", "Statut d'appel", "Motif connu", "Rappel", "Suite donnée"]);
  });

  it("comparison guide compares the three models on nine criteria and cites its legal source", () => {
    const a = get("/ressources/telesecretariat-humain-ou-ia");
    const table = a.sections.flatMap((s) => s.blocks).find((b) => b.t === "table" && b.head.length === 4);
    expect(table && table.t === "table" && table.rows).toHaveLength(9);
    expect(a.sources.map((s) => s.url)).toContain("https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50");
    expect(a.sources.map((s) => s.url)).toContain("https://eur-lex.europa.eu/eli/reg/2024/1689/oj");
    expect(allText(a)).toContain("2 août 2026");
    expect(allText(a)).toContain("avis juridique individuel");
    expect(allText(a)).toContain("Rushh n'est pas la seule solution possible");
  });

  it("qualification guide has two clearly fictional fiches and cites the CNIL", () => {
    const a = get("/ressources/qualification-appels-vendeurs-acquereurs");
    const fiches = a.sections.flatMap((s) => s.blocks).filter((b) => b.t === "fiche");
    expect(fiches).toHaveLength(2);
    for (const f of fiches) expect(f.t === "fiche" && f.note).toContain("fictif");
    expect(a.sources.map((s) => s.url)).toContain("https://www.cnil.fr/fr/definition/minimisation");
  });
});

describe("catalogue /ressources", () => {
  const md = getMarkdownPage("/ressources")?.markdown ?? "";

  it("is a known route with a Markdown mirror, one H1, and links to every publication", () => {
    expect(isKnownRoute("/ressources")).toBe(true);
    expect(md.match(/^# /gm)).toHaveLength(1);
    expect(ARTICLES).toHaveLength(6);
    for (const a of ARTICLES) expect(md).toContain(`(https://www.rushh.fr${a.path})`);
    expect(sitemap().map((e) => e.url)).toContain("https://www.rushh.fr/ressources");
  });

  it("has no empty or unknown category, and the featured article exists", () => {
    for (const c of CATEGORIES) expect(ARTICLES.some((a) => a.category === c.id), c.id).toBe(true);
    for (const a of ARTICLES) expect(CATEGORIES.map((c) => c.id), a.path).toContain(a.category);
    expect(ARTICLES.map((a) => a.path)).toContain(FEATURED_PATH);
  });

  it("distributes the six publications as briefed", () => {
    const by = (c: string) => ARTICLES.filter((a) => a.category === c).map((a) => a.path).sort();
    expect(by("appels-qualification")).toEqual([
      "/ressources/appels-manques-immobilier",
      "/ressources/qualification-appels-vendeurs-acquereurs",
    ]);
    expect(by("standards-ia-comparatifs")).toEqual([
      "/comparatif/standards-telephoniques-ia-immobilier",
      "/ressources/choisir-standard-telephonique-ia-immobilier",
      "/ressources/telesecretariat-humain-ou-ia",
      "/vs/fonio",
    ]);
  });

  it("gives every publication a cover, and keeps article URLs unchanged", () => {
    for (const a of ARTICLES) expect(a.cover, a.path).toBeDefined();
  });

  it("mirrors no Rushh price", () => {
    expect(md).not.toMatch(/€|euros?\b/i);
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
    for (const p of ["/comparatif/standards-telephoniques-ia-immobilier", "/vs/fonio", "/ressources/choisir-standard-telephonique-ia-immobilier"]) {
      expect(published(p) > "2026-10-28", p).toBe(true);
    }
  });
});
