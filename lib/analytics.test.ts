import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CONSENT_KEY, GA_ID } from "./consent";
import { classifyHref, cleanLabel, currentInboundUtm, rememberInboundUtm, trackBookingOnce, trackConfirmationReturn, trackEvent } from "./analytics";
import { parseConfirmationParams } from "./confirmation";

function fakeStorage(init: Record<string, string> = {}) {
  const m = new Map(Object.entries(init));
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) };
}

function setup(consent: boolean | null, gaLoaded = true) {
  const gtag = vi.fn();
  const local = fakeStorage(consent === null ? {} : { [CONSENT_KEY]: JSON.stringify({ analytics: consent, at: Date.now() }) });
  const win: Record<string, unknown> = { localStorage: local, sessionStorage: fakeStorage() };
  if (gaLoaded) win.gtag = gtag;
  vi.stubGlobal("window", win);
  return { gtag, win };
}

describe("classifyHref", () => {
  it("recognises the Calendly demo link, with or without query/trailing slash", () => {
    expect(classifyHref("https://calendly.com/gaspard-david/demo")).toBe("demo_cta_click");
    expect(classifyHref("https://calendly.com/gaspard-david/demo/?utm_source=x")).toBe("demo_cta_click");
  });
  it("recognises the demo phone number only", () => {
    expect(classifyHref("tel:+33176635709")).toBe("demo_phone_click");
    expect(classifyHref("tel:+33 1 76 63 57 09")).toBe("demo_phone_click");
    expect(classifyHref("tel:+33517948549")).toBeNull();
  });
  it("ignores every other link", () => {
    expect(classifyHref("/offre")).toBeNull();
    expect(classifyHref("https://calendly.com/autre/demo")).toBeNull();
    expect(classifyHref("https://example.com/calendly.com/gaspard-david/demo")).toBeNull();
    expect(classifyHref(null)).toBeNull();
  });
});

describe("labels", () => {
  it("derives a bounded label", () => {
    expect(cleanLabel("  Réserver   une\n démo ")).toBe("Réserver une démo");
    expect(cleanLabel("x".repeat(200)).length).toBe(60);
  });
});

describe("consent gating", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("sends nothing before a choice, after a refusal, or if GA4 is not loaded", () => {
    for (const [consent, loaded] of [[null, true], [false, true], [true, false]] as const) {
      const { gtag } = setup(consent, loaded);
      expect(trackEvent("demo_cta_click", { page_path: "/" })).toBe(false);
      expect(trackBookingOnce({ booking_source: "calendly_redirect" })).toBe(false);
      expect(gtag).not.toHaveBeenCalled();
    }
  });

  it("sends nothing when GA is disabled by a withdrawal in the same session", () => {
    const { gtag, win } = setup(true);
    win[`ga-disable-${GA_ID}`] = true;
    expect(trackEvent("demo_phone_click")).toBe(false);
    expect(gtag).not.toHaveBeenCalled();
  });

  it("sends one event with consent and drops a repeated click within a second", () => {
    const { gtag } = setup(true);
    expect(trackEvent("demo_cta_click", { page_path: "/offre", link_url: "calendly_demo", cta_text: "" })).toBe(true);
    expect(trackEvent("demo_cta_click", { page_path: "/offre", link_url: "calendly_demo" })).toBe(false);
    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith("event", "demo_cta_click", { page_path: "/offre", link_url: "calendly_demo" });
    vi.advanceTimersByTime(1500);
    expect(trackEvent("demo_cta_click", { link_url: "calendly_demo" })).toBe(true);
  });

  it("counts a booking once per session, whatever the source", () => {
    const { gtag } = setup(true);
    expect(trackBookingOnce({ booking_source: "calendly_redirect" })).toBe(true);
    vi.advanceTimersByTime(5000);
    expect(trackBookingOnce({ booking_source: "calendly_embed" })).toBe(false);
    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag.mock.calls[0][1]).toBe("demo_booked");
  });

  it("counts a return from Calendly once per reference and never as demo_booked", () => {
    const { gtag } = setup(true);
    expect(trackConfirmationReturn("abc12345-uuid", { event_type: "Demo" })).toBe(true);
    vi.advanceTimersByTime(5000);
    expect(trackConfirmationReturn("abc12345-uuid")).toBe(false);
    expect(trackConfirmationReturn("other-ref-9999")).toBe(true);
    expect(gtag.mock.calls.map((c) => c[1])).toEqual(["demo_booking_return", "demo_booking_return"]);
    expect(JSON.stringify(gtag.mock.calls)).not.toContain("abc12345");
  });

  it("sends no return event without consent", () => {
    const { gtag } = setup(false);
    expect(trackConfirmationReturn("abc12345-uuid")).toBe(false);
    expect(gtag).not.toHaveBeenCalled();
  });
});

describe("/confirmation URL signal", () => {
  it("only a well-formed Calendly reference triggers tracking; e-mail or date alone do not", () => {
    expect(parseConfirmationParams({ invitee_uuid: "AAAA1111-bbbb" }).bookingRef).toBe("AAAA1111-bbbb");
    expect(parseConfirmationParams({ invitee_email: "a@b.fr", start_time: "2026-11-02T10:00:00Z" }).bookingRef).toBeUndefined();
    expect(parseConfirmationParams({ invitee_uuid: "<script>alert(1)</script>" }).bookingRef).toBeUndefined();
    expect(parseConfirmationParams({}).bookingRef).toBeUndefined();
  });
});

describe("inbound UTM and consent", () => {

  function setupUrl(consent: boolean | null, search: string) {
    const { win } = setup(consent);
    win.location = { search };
    return win;
  }

  it("uses the UTM of the current page without needing any storage", () => {
    const win = setupUrl(null, "?utm_source=newsletter&utm_medium=email&utm_campaign=nov");
    expect(currentInboundUtm()).toEqual({ utm_source: "newsletter", utm_medium: "email", utm_campaign: "nov" });
    rememberInboundUtm();
    expect((win.sessionStorage as { getItem: (k: string) => string | null }).getItem("rushh_utm_v1")).toBeNull();
  });

  it("remembers the first source of the session only with consent, and never overwrites it", () => {
    const win = setupUrl(true, "?utm_source=google&utm_medium=cpc");
    rememberInboundUtm();
    win.location = { search: "?utm_source=autre&utm_medium=x" };
    rememberInboundUtm();
    win.location = { search: "" };
    expect(currentInboundUtm()).toEqual({ utm_source: "google", utm_medium: "cpc" });
  });

  it("does not read a remembered source after a refusal", () => {
    const win = setupUrl(true, "?utm_source=google&utm_medium=cpc");
    rememberInboundUtm();
    win.localStorage = { getItem: () => JSON.stringify({ analytics: false, at: Date.now() }), setItem: () => {} };
    win.location = { search: "" };
    expect(currentInboundUtm()).toBeNull();
  });
});
