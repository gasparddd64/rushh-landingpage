import { describe, expect, it } from "vitest";
import {
  build404Markdown,
  getMarkdownPage,
  isKnownRoute,
  wantsMarkdown,
} from "./agent-content";

describe("wantsMarkdown", () => {
  it("returns false when there is no Accept header", () => {
    expect(wantsMarkdown(null)).toBe(false);
    expect(wantsMarkdown(undefined)).toBe(false);
  });

  it("returns false when Accept does not mention text/markdown", () => {
    expect(wantsMarkdown("text/html")).toBe(false);
    expect(wantsMarkdown("*/*")).toBe(false);
  });

  it("returns true for a plain text/markdown Accept header", () => {
    expect(wantsMarkdown("text/markdown")).toBe(true);
  });

  it("returns true when markdown is listed without an explicit html preference", () => {
    expect(wantsMarkdown("text/markdown, */*;q=0.1")).toBe(true);
  });

  it("prefers markdown when its quality is at least as high as html", () => {
    expect(wantsMarkdown("text/markdown;q=0.9, text/html;q=0.8")).toBe(true);
    expect(wantsMarkdown("text/markdown, text/html")).toBe(true);
  });

  it("defers to html when html is explicitly preferred over markdown", () => {
    expect(wantsMarkdown("text/markdown;q=0.5, text/html;q=0.9")).toBe(false);
  });
});

describe("getMarkdownPage", () => {
  it("returns the homepage markdown for /", () => {
    const page = getMarkdownPage("/");
    expect(page).not.toBeNull();
    expect(page?.markdown).toContain("Rushh");
    expect(page?.markdown.length).toBeGreaterThan(20);
  });

  it("normalizes a trailing slash", () => {
    expect(getMarkdownPage("/about/")).toEqual(getMarkdownPage("/about"));
  });

  it("returns null for a page with no markdown representation", () => {
    expect(getMarkdownPage("/this-page-does-not-exist")).toBeNull();
  });
});

describe("isKnownRoute", () => {
  it("treats markdown pages as known routes", () => {
    expect(isKnownRoute("/")).toBe(true);
    expect(isKnownRoute("/contact")).toBe(true);
  });

  it("treats the removed prospecting mock-up routes as unknown", () => {
    for (const path of ["/dashboard", "/inbox", "/campaigns", "/prospects"]) {
      expect(isKnownRoute(path)).toBe(false);
      expect(getMarkdownPage(path)).toBeNull();
    }
  });

  it("treats an arbitrary path as unknown", () => {
    expect(isKnownRoute("/__ora-404-probe-1jfjtn6l")).toBe(false);
  });
});

describe("/offre", () => {
  it("is a known route with a Markdown mirror", () => {
    expect(isKnownRoute("/offre")).toBe(true);
    expect(getMarkdownPage("/offre")?.markdown).toContain("# L'offre Rushh");
  });

  it("states quote-based pricing, the official lead time, and shows no price", () => {
    const md = getMarkdownPage("/offre")?.markdown ?? "";
    expect(md).toContain("sur devis");
    expect(md).toContain("5 jours ouvrés après réception des éléments");
    expect(md).not.toMatch(/€|euros?\b/i);
  });
});

describe("/vs/joe-ai", () => {
  const md = () => getMarkdownPage("/vs/joe-ai")?.markdown ?? "";

  it("mirrors the comparison page with its own H1", () => {
    expect(md()).toContain("# Rushh ou Joe AI : quelle solution pour les appels de votre agence immobilière ?");
  });

  it("cites the primary Joe AI source with its verification date", () => {
    expect(md()).toContain("https://www.getjoe-ai.com/");
    expect(md()).toContain("28 octobre 2026");
  });

  it("acknowledges Joe AI support, keeps quote-based pricing and shows no Rushh price", () => {
    expect(md()).toContain("Joe AI propose lui aussi de l'accompagnement et de la personnalisation");
    expect(md()).toContain("Sur devis");
    expect(md()).toContain("5 jours ouvrés après réception des éléments");
    expect(md()).not.toMatch(/€|euros?\b/i);
  });

  it("links to /offre, /integrations and the home page", () => {
    expect(md()).toContain("/offre");
    expect(md()).toContain("/integrations");
  });
});

const NEW_PAGES: Array<[string, string]> = [
  ["/demonstrations", "# Et si vous testiez le Standard Rushh vous-même ?"],
  ["/solutions/transaction-immobiliere", "# Standard téléphonique IA pour les appels vendeurs et acquéreurs"],
  ["/solutions/mandataires-immobiliers", "# Standard téléphonique IA pour mandataires immobiliers"],
  ["/solutions/gestion-locative", "# Standard téléphonique IA pour la gestion locative"],
  ["/solutions/syndics", "# Standard téléphonique IA pour syndics de copropriété"],
  ["/solutions/multi-sites", "# Un standard téléphonique IA adapté aux réseaux et groupes d'agences immobilières"],
];

describe.each(NEW_PAGES)("%s", (path, h1) => {
  const md = () => getMarkdownPage(path)?.markdown ?? "";

  it("is a known route with a Markdown mirror and its own H1", () => {
    expect(isKnownRoute(path)).toBe(true);
    expect(md()).toContain(h1);
    expect(md().match(/^# /gm)).toHaveLength(1);
  });

  it("states quote-based pricing, links the Calendly, and shows no Rushh price or Hektor", () => {
    expect(md()).toContain("Tarification sur devis");
    expect(md()).toContain("https://calendly.com/gaspard-david/demo");
    expect(md()).not.toMatch(/euros?\b/i);
    expect(md()).not.toMatch(/hektor/i);
  });
});

describe("new pages specifics", () => {
  it("/demonstrations exposes the demo number and the fictional-agency disclaimer", () => {
    const md = getMarkdownPage("/demonstrations")?.markdown ?? "";
    expect(md).toContain("01 76 63 57 09");
    expect(md).toContain("tel:+33176635709");
    expect(md).toContain("agence immobilière fictive");
    expect(md).toContain("dépendent de la configuration de la ligne");
  });

  it("transaction labels its scenarios as fictional and promises no mandate", () => {
    const md = getMarkdownPage("/solutions/transaction-immobiliere")?.markdown ?? "";
    expect(md).toContain("exemples fictifs");
    expect(md).toContain("Aucun mandat ni rendez-vous n'est garanti");
    expect(md).toContain("5 jours ouvrés après réception des éléments");
  });

  it("syndics states its limits (no diagnosis, no emergency handling)", () => {
    const md = getMarkdownPage("/solutions/syndics")?.markdown ?? "";
    expect(md).toContain("aucun diagnostic technique");
    expect(md).toContain("ne remplace pas les services d'urgence");
    expect(md).toContain("connexion validée");
  });

  it("multi-sites claims no completed deployment and flags its example as illustrative", () => {
    const md = getMarkdownPage("/solutions/multi-sites")?.markdown ?? "";
    expect(md).toContain("Exemple illustratif");
    expect(md).toContain("aucune référence client");
  });
});

describe("build404Markdown", () => {
  it("includes the requested path and links to discovery resources", () => {
    const body = build404Markdown("/nope");
    expect(body.length).toBeGreaterThanOrEqual(20);
    expect(body).toContain("/nope");
    expect(body).toContain("/sitemap.xml");
    expect(body).toContain("/llms.txt");
  });
});
