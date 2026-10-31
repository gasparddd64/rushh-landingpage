import { describe, expect, it } from "vitest";
import { cleanFreeText, cleanUtmValue, pageSlug, readInboundUtm, sanitizeAnalyticsUrl, withAttribution } from "./attribution";

const DEMO = "https://calendly.com/gaspard-david/demo";

describe("withAttribution", () => {
  it("keeps the real inbound source instead of replacing it with rushh.fr", () => {
    const u = new URL(withAttribution(DEMO, "/offre", { utm_source: "google", utm_medium: "cpc", utm_campaign: "agences" }));
    expect(u.searchParams.get("utm_source")).toBe("google");
    expect(u.searchParams.get("utm_medium")).toBe("cpc");
    expect(u.searchParams.get("utm_campaign")).toBe("agences");
    expect(u.searchParams.has("utm_content")).toBe(false);
  });

  it("flags the source as unknown when there is no inbound UTM, and records the page", () => {
    const u = new URL(withAttribution(DEMO, "/solutions/transaction-immobiliere/", null));
    expect(u.searchParams.get("utm_source")).toBe("rushh.fr");
    expect(u.searchParams.get("utm_medium")).toBe("site_cta");
    expect(u.searchParams.get("utm_campaign")).toBe("source_inconnue");
    expect(u.searchParams.get("utm_content")).toBe("solutions_transaction-immobiliere");
    expect(pageSlug("/")).toBe("home");
  });

  it("never overwrites a UTM already present in the link", () => {
    const u = new URL(withAttribution(`${DEMO}?utm_source=mail`, "/", null));
    expect(u.searchParams.get("utm_source")).toBe("mail");
  });
});

describe("UTM hygiene", () => {
  it("reads valid UTM and rejects e-mail-like or phone-like values", () => {
    expect(readInboundUtm("?utm_source=linkedin&utm_medium=social")).toEqual({ utm_source: "linkedin", utm_medium: "social" });
    expect(readInboundUtm("?foo=bar")).toBeNull();
    expect(readInboundUtm("?utm_source=jean@example.com&utm_medium=email")).toEqual({ utm_medium: "email" });
    expect(cleanUtmValue("0612345678")).toBeUndefined();
    expect(cleanUtmValue("<script>")).toBeUndefined();
    expect(cleanFreeText("Démo Rushh")).toBe("Démo Rushh");
    expect(cleanFreeText("jean@example.com")).toBeUndefined();
  });
});

describe("sanitizeAnalyticsUrl", () => {
  it("removes every personal parameter from a Calendly return URL, keeping valid UTM only", () => {
    const url =
      "https://www.rushh.fr/confirmation?invitee_uuid=AAAA1111bbbb&invitee_email=jean%40example.com&invitee_full_name=Jean+Dupont&answer_1=0612345678&event_start_time=2026-11-02T10%3A00%3A00Z&utm_source=rushh.fr&utm_medium=site_cta#x";
    const out = sanitizeAnalyticsUrl(url);
    expect(out).toBe("https://www.rushh.fr/confirmation?utm_source=rushh.fr&utm_medium=site_cta");
    expect(out).not.toMatch(/jean|dupont|example|0612|AAAA/i);
  });

  it("removes personal-looking parameters on any other page, and keeps harmless ones", () => {
    const out = sanitizeAnalyticsUrl("https://www.rushh.fr/offre?email=a%40b.fr&ref=x&nom=Dupont&q=agence&utm_campaign=ok");
    expect(out).toBe("https://www.rushh.fr/offre?ref=x&q=agence&utm_campaign=ok");
    expect(sanitizeAnalyticsUrl("https://www.rushh.fr/?x=jean%40b.fr")).toBe("https://www.rushh.fr/");
  });
});
