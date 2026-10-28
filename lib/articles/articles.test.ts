import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../../app/sitemap";
import { getMarkdownPage, isKnownRoute } from "../agent-content";
import { ARTICLES, type Article, type Block } from "./index";
import { articleToMarkdown } from "./markdown";

const REQUIRED_LINKS: Record<string, string[]> = {
  "/ressources/appels-manques-immobilier": ["/solutions/transaction-immobiliere", "/offre"],
  "/ressources/telesecretariat-humain-ou-ia": ["/offre", "/demonstrations"],
  "/ressources/qualification-appels-vendeurs-acquereurs": ["/solutions/transaction-immobiliere", "/demonstrations"],
};

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
    expect(t).not.toMatch(/€|euros?\b/i);
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

  it("has a cover file whose declared size matches the real PNG, with a descriptive alt text", () => {
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
