import { describe, expect, it } from "vitest";
import { CONSENT_TTL_MS, parseConsent } from "./consent";

const NOW = 1_800_000_000_000;

describe("parseConsent", () => {
  it("returns null when nothing is stored (no choice yet → banner, no analytics)", () => {
    expect(parseConsent(null, NOW)).toBeNull();
    expect(parseConsent("", NOW)).toBeNull();
  });

  it("reads a valid accept and a valid refusal", () => {
    expect(parseConsent(JSON.stringify({ analytics: true, at: NOW - 1000 }), NOW)).toEqual({ analytics: true, at: NOW - 1000 });
    expect(parseConsent(JSON.stringify({ analytics: false, at: NOW - 1000 }), NOW)?.analytics).toBe(false);
  });

  it("expires a choice after about 6 months, so the question is asked again", () => {
    expect(parseConsent(JSON.stringify({ analytics: true, at: NOW - CONSENT_TTL_MS - 1 }), NOW)).toBeNull();
    expect(parseConsent(JSON.stringify({ analytics: true, at: NOW - CONSENT_TTL_MS + 60_000 }), NOW)).not.toBeNull();
  });

  it("rejects malformed or tampered values instead of treating them as consent", () => {
    expect(parseConsent("not json", NOW)).toBeNull();
    expect(parseConsent(JSON.stringify({ analytics: "yes", at: NOW }), NOW)).toBeNull();
    expect(parseConsent(JSON.stringify({ analytics: true }), NOW)).toBeNull();
    expect(parseConsent(JSON.stringify({ analytics: true, at: NOW + 10 * 60_000 }), NOW)).toBeNull();
  });
});
