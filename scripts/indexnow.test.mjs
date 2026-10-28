import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildPayload, chunk, cleanUrls, fileToRoute, findKey, isSharedFile, normalizeUrl, parseSitemap,
} from "./indexnow-lib.mjs";

describe("indexnow", () => {
  it("normalise, filtre et déduplique", () => {
    expect(cleanUrls([
      "https://www.rushh.fr", "https://www.rushh.fr/", "https://www.rushh.fr/offre/", "https://www.rushh.fr/offre",
      "https://www.rushh.fr/offre.md", "https://rushh.fr/offre", "http://www.rushh.fr/offre", "https://www.rushh.fr/test/x",
      "https://www.rushh.fr/confirmation", "https://www.rushh.fr/llms.txt", "n'importe quoi",
    ])).toEqual(["https://www.rushh.fr", "https://www.rushh.fr/offre"]);
    expect(normalizeUrl("https://www.rushh.fr/offre?x=1")).toBe("https://www.rushh.fr/offre");
  });
  it("lit le sitemap", () => {
    expect(parseSitemap("<urlset><url><loc>https://www.rushh.fr/a</loc></url><url><loc> https://www.rushh.fr/b </loc></url></urlset>"))
      .toEqual(["https://www.rushh.fr/a", "https://www.rushh.fr/b"]);
  });
  it("découpe par lots", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("construit le payload officiel", () => {
    expect(buildPayload("k".repeat(16), ["https://www.rushh.fr/a"])).toEqual({
      host: "www.rushh.fr", key: "kkkkkkkkkkkkkkkk", keyLocation: `https://www.rushh.fr/${"k".repeat(16)}.txt`, urlList: ["https://www.rushh.fr/a"],
    });
  });
  it("associe fichiers et routes", () => {
    expect(fileToRoute("app/page.tsx")).toBe("/");
    expect(fileToRoute("app/offre/page.tsx")).toBe("/offre");
    expect(fileToRoute("app/solutions/syndics/page.tsx")).toBe("/solutions/syndics");
    expect(fileToRoute("lib/articles/appels-manques-immobilier.ts")).toBe("/ressources/appels-manques-immobilier");
    expect(fileToRoute("lib/articles/types.ts")).toBeNull();
    expect(fileToRoute("app/(x)/page.tsx")).toBeNull();
    expect(fileToRoute("components/sections/Nav.tsx")).toBeNull();
    expect(isSharedFile("components/sections/Nav.tsx")).toBe(true);
    expect(isSharedFile("app/offre/page.tsx")).toBe(false);
  });
  it("trouve la clé uniquement si nom = contenu", () => {
    const d = mkdtempSync(path.join(os.tmpdir(), "inow-"));
    writeFileSync(path.join(d, "robots.txt"), "x");
    writeFileSync(path.join(d, "abcdef1234567890.txt"), "abcdef1234567890");
    expect(findKey(d)).toBe("abcdef1234567890");
    writeFileSync(path.join(d, "bbbbbbbbbbbbbbbb.txt"), "autre-chose");
    expect(findKey(d)).toBe("abcdef1234567890");
  });
});
