import { describe, expect, it } from "vitest";
import { getMarkdownPage } from "../agent-content";
import * as mandataires from "./mandataires-immobiliers";
import * as gestionLocative from "./gestion-locative";
import sitemap from "../../app/sitemap";

const PAGES = [
  { name: "mandataires", mod: mandataires, own: ["mandataires immobiliers"], other: "/solutions/gestion-locative" },
  { name: "gestion locative", mod: gestionLocative, own: ["gestion locative"], other: "/solutions/syndics" },
];

describe.each(PAGES)("page $name", ({ mod, own }) => {
  const md = mod.toMarkdown();

  it("a un title et une description à longueur raisonnable, et un miroir Markdown enregistré", () => {
    expect(mod.TITLE.length).toBeLessThanOrEqual(65);
    expect(mod.DESCRIPTION.length).toBeGreaterThan(80);
    expect(mod.DESCRIPTION.length).toBeLessThanOrEqual(165);
    expect(getMarkdownPage(mod.PATH)?.markdown).toBe(md);
    expect(own.every((k) => mod.TITLE.toLowerCase().includes(k))).toBe(true);
  });

  it("expose chaque question de la FAQ dans le Markdown, entre 5 et 7 questions", () => {
    expect(mod.FAQ.length).toBeGreaterThanOrEqual(5);
    expect(mod.FAQ.length).toBeLessThanOrEqual(7);
    for (const f of mod.FAQ) {
      expect(md).toContain(`### ${f.q}`);
      expect(md).toContain(f.a);
    }
  });

  it("respecte les règles commerciales", () => {
    expect(md).toContain("Tarification sur devis");
    expect(md).toContain("5 jours ouvrés après réception des éléments");
    expect(md).toContain("exemple fictif");
    expect(md).not.toMatch(/€|euros?\b|\d\s?%/i);
    expect(md.replace("n'est garanti", "").replace("garantit-il", "")).not.toMatch(/garanti|100 ?%|hébergé|hébergement|hektor/i);
    expect(md).not.toMatch(/appels? sortants?|démarchage|nous rappelons|rappelle le client/i);
    expect(md).not.toMatch(/témoignage|étude de cas/i);
  });

  it("ne cite que les intégrations confirmées", () => {
    expect(md).not.toMatch(/\b(salesforce|hubspot|sage|hektor|netty|periode|gercop)\b/i);
  });
});

describe("différenciation", () => {
  it("la gestion locative ne ressemble pas à la page syndics et cite ses limites d'urgence", () => {
    const md = gestionLocative.toMarkdown();
    expect(md).toContain("Il ne diagnostique pas un danger.");
    expect(md).toContain("Il ne promet aucune intervention automatique.");
    expect(md).toContain("ne sélectionne pas les candidats");
    // la copropriété n'est évoquée que pour renvoyer vers la page syndics (FAQ de différenciation)
    const outsideFaq = md.split("## Questions fréquentes")[0];
    expect(outsideFaq).not.toMatch(/copropri|syndic/i);
  });

  it("le mandataire n'invente ni estimation ni promesse", () => {
    const md = mandataires.toMarkdown();
    expect(md).toContain("Aucun mandat ni rendez-vous n'est garanti");
    expect(md).toContain("ne donne ni estimation");
  });
});

describe("sitemap", () => {
  it("contient les deux nouvelles URL canoniques", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toContain("https://www.rushh.fr/solutions/mandataires-immobiliers");
    expect(urls).toContain("https://www.rushh.fr/solutions/gestion-locative");
    expect(new Set(urls).size).toBe(urls.length);
  });
});
