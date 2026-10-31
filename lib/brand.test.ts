import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BRAND_NAME, BRAND_SHORT, ORG_ID, WEBSITE_ID, orgRef, websiteRef } from "./brand";

function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (f === "node_modules" || f.startsWith(".")) return [];
    if (statSync(p).isDirectory()) return sources(p);
    return /\.(ts|tsx)$/.test(f) && !/\.test\./.test(f) ? [p] : [];
  });
}

describe("brand consistency (SEO/GEO)", () => {
  it("one public name, one short name, one organisation id", () => {
    expect(BRAND_NAME).toBe("Rushh immo");
    expect(BRAND_SHORT).toBe("Rushh");
    expect(orgRef["@id"]).toBe(ORG_ID);
    expect(websiteRef["@id"]).toBe(WEBSITE_ID);
    expect(orgRef.name).toBe(BRAND_NAME);
  });

  it("page, article and catalogue structured data reference the single organisation and website", () => {
    const read = (f: string) => readFileSync(join(process.cwd(), f), "utf8");
    expect(read("components/solutions/kit.tsx")).toContain("isPartOf: websiteRef");
    expect(read("components/solutions/kit.tsx")).toContain("about: orgRef");
    expect(read("components/resources/ArticlePage.tsx")).toContain("author: orgRef");
    expect(read("components/resources/ArticlePage.tsx")).toContain("publisher: orgRef");
    expect(read("app/ressources/page.tsx")).toContain("isPartOf: websiteRef");
    expect(read("app/offre/page.tsx")).toContain("provider: orgRef");
    const home = read("app/page.tsx");
    expect(home.match(/"@id": ORG_ID/g)).toHaveLength(2); // Organization et LocalBusiness : un seul nœud fusionné
    expect(home).toContain('"@id": WEBSITE_ID');
  });

  it("no source file declares an organisation, website or siteName called just « Rushh »", () => {
    const bad = /(name|siteName)\s*"?\s*:\s*"Rushh"/;
    for (const dir of ["app", "components", "lib"]) {
      for (const f of sources(join(process.cwd(), dir))) {
        expect(readFileSync(f, "utf8"), f).not.toMatch(bad);
      }
    }
  });
});
