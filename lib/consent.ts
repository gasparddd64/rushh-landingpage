/**
 * Consentement aux statistiques (Google Analytics 4).
 * Règles appliquées (CNIL) : aucun script ni cookie avant le choix, refuser aussi simple qu'accepter,
 * choix modifiable à tout moment, choix conservé 6 mois puis redemandé.
 */
import { sanitizeAnalyticsUrl } from "./attribution";

export const GA_ID = "G-0EZB9K3J95";
export const CONSENT_KEY = "rushh_consent_v1";
export const CONSENT_TTL_MS = 182 * 24 * 60 * 60 * 1000; // ~6 mois
/** Données techniques mémorisées localement avec consentement (supprimées au refus ou au retrait). */
export const SESSION_KEYS = ["rushh_utm_v1", "rushh_booked_v1"];
export const LOCAL_KEYS = ["rushh_confirmation_refs_v1"];
export const OPEN_CONSENT_EVENT = "rushh:open-consent";
export const CONSENT_CHANGE_EVENT = "rushh:consent-change";

export interface ConsentChoice {
  analytics: boolean;
  at: number;
}

export function parseConsent(raw: string | null, now: number = Date.now()): ConsentChoice | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw) as Partial<ConsentChoice>;
    if (typeof v.analytics !== "boolean" || typeof v.at !== "number") return null;
    if (now - v.at > CONSENT_TTL_MS || v.at > now + 60_000) return null;
    return { analytics: v.analytics, at: v.at };
  } catch {
    return null;
  }
}

export function readConsent(): ConsentChoice | null {
  try {
    return parseConsent(window.localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics, at: Date.now() }));
  } catch {
    /* stockage indisponible : le choix vaut pour la page seulement */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

type GAWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean | undefined;
};

/** Charge GA4 uniquement après consentement. */
export function loadAnalytics(): void {
  const w = window as unknown as GAWindow;
  w[`ga-disable-${GA_ID}`] = false;
  if (document.getElementById("ga4-script")) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  // page_location nettoyée : les URL de retour de Calendly contiennent nom, e-mail, etc.
  w.gtag("config", GA_ID, { page_location: sanitizeAnalyticsUrl(window.location.href) });
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

/** Stoppe toute collecte et supprime les cookies GA4 déposés. */
export function disableAnalytics(): void {
  const w = window as unknown as GAWindow;
  w[`ga-disable-${GA_ID}`] = true;
  try {
    for (const k of SESSION_KEYS) window.sessionStorage.removeItem(k);
    for (const k of LOCAL_KEYS) window.localStorage.removeItem(k);
  } catch {
    /* stockage indisponible */
  }
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n.startsWith("_gat"));
  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const n of names) {
    document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    for (const d of domains) document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
  }
}
