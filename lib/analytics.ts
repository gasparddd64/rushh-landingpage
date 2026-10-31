/**
 * Mesure des conversions (GA4), soumise au consentement.
 * Règles : aucun événement sans consentement valide ni sans GA4 chargé ; pas de file d'attente (un événement
 * survenu avant le choix est perdu, jamais rejoué) ; aucune donnée personnelle dans les paramètres.
 */
import { type Utm, readInboundUtm } from "./attribution";
import { GA_ID, readConsent } from "./consent";

export type ConversionEvent = "demo_cta_click" | "demo_phone_click" | "demo_booked" | "demo_booking_return";

const CALENDLY_DEMO_URL = "https://calendly.com/gaspard-david/demo";
const DEMO_PHONE_DIGITS = "33176635709";
const DEDUPE_MS = 1000;
const BOOKED_KEY = "rushh_booked_v1";

/** Quel type de conversion un lien représente, d'après son href (null = pas une conversion). */
export function classifyHref(href: string | null | undefined): ConversionEvent | null {
  if (!href) return null;
  const h = href.trim();
  if (h.toLowerCase().startsWith("tel:")) {
    return h.replace(/\D/g, "").endsWith(DEMO_PHONE_DIGITS) ? "demo_phone_click" : null;
  }
  try {
    const u = new URL(h, "https://www.rushh.fr");
    if (u.hostname === "calendly.com" && u.pathname.replace(/\/$/, "") === new URL(CALENDLY_DEMO_URL).pathname) {
      return "demo_cta_click";
    }
  } catch {
    /* href invalide : ignoré */
  }
  return null;
}

export function cleanLabel(text: string | null | undefined): string {
  return (text ?? "").replace(/\s+/g, " ").trim().slice(0, 60);
}

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean | undefined;
};

/** Vrai seulement si l'utilisateur a accepté les statistiques et que GA4 est chargé. */
export function analyticsActive(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as unknown as GtagWindow;
  return readConsent()?.analytics === true && typeof w.gtag === "function" && w[`ga-disable-${GA_ID}`] !== true;
}

const lastSent = new Map<string, number>();

/** Envoie un événement GA4 si (et seulement si) le consentement est accordé. Retourne true si envoyé. */
export function trackEvent(name: ConversionEvent, params: Record<string, string | number | undefined> = {}): boolean {
  if (!analyticsActive()) return false;
  const clean: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== "") clean[k] = v;
  const key = `${name}|${clean.link_url ?? ""}`;
  const now = Date.now();
  if (now - (lastSent.get(key) ?? 0) < DEDUPE_MS) return false;
  lastSent.set(key, now);
  (window as unknown as GtagWindow).gtag!("event", name, clean);
  return true;
}

/** Réservation signalée par Calendly lui-même (widget intégré) : un seul `demo_booked` par session. */
export function trackBookingOnce(params: Record<string, string | number | undefined>): boolean {
  if (!analyticsActive()) return false;
  try {
    if (window.sessionStorage.getItem(BOOKED_KEY)) return false;
  } catch {
    /* sessionStorage indisponible : le garde-fou de répétition de trackEvent s'applique */
  }
  const sent = trackEvent("demo_booked", params);
  if (sent) {
    try {
      window.sessionStorage.setItem(BOOKED_KEY, "1");
    } catch {
      /* ignoré */
    }
  }
  return sent;
}

const RETURN_KEY = "rushh_confirmation_refs_v1";
const RETURN_MAX = 20;

/**
 * Retour sur /confirmation depuis Calendly. Une URL peut être forgée ou rechargée : ce n'est PAS une preuve de
 * réservation, donc un événement distinct de `demo_booked` (réservée aux signaux réellement reçus de Calendly).
 * Dédupliqué par référence Calendly (mémorisée localement, avec consentement seulement) ; la référence n'est
 * jamais envoyée à GA4.
 */
export function trackConfirmationReturn(ref: string, params: Record<string, string | number | undefined> = {}): boolean {
  if (!analyticsActive()) return false;
  let seen: string[] = [];
  try {
    const raw = window.localStorage.getItem(RETURN_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) seen = parsed.filter((x): x is string => typeof x === "string");
  } catch {
    /* stockage illisible : on repart d'une liste vide */
  }
  if (seen.includes(ref)) return false;
  const sent = trackEvent("demo_booking_return", params);
  if (sent) {
    try {
      window.localStorage.setItem(RETURN_KEY, JSON.stringify([...seen, ref].slice(-RETURN_MAX)));
    } catch {
      /* ignoré */
    }
  }
  return sent;
}

const UTM_STORE_KEY = "rushh_utm_v1";

/**
 * UTM à transmettre à Calendly : ceux de la page courante, sinon (avec consentement seulement) ceux mémorisés
 * pour la session. Sans consentement, rien n'est lu ni écrit dans le stockage.
 */
export function currentInboundUtm(): Utm | null {
  const here = readInboundUtm(window.location.search);
  if (here) return here;
  if (readConsent()?.analytics !== true) return null;
  try {
    const raw = window.sessionStorage.getItem(UTM_STORE_KEY);
    return raw ? readInboundUtm(new URLSearchParams(JSON.parse(raw) as Record<string, string>).toString()) : null;
  } catch {
    return null;
  }
}

/** Mémorise la première source de la session (consentement requis). Ne remplace jamais une source déjà connue. */
export function rememberInboundUtm(): void {
  if (readConsent()?.analytics !== true) return;
  const here = readInboundUtm(window.location.search);
  if (!here) return;
  try {
    if (!window.sessionStorage.getItem(UTM_STORE_KEY)) window.sessionStorage.setItem(UTM_STORE_KEY, JSON.stringify(here));
  } catch {
    /* ignoré */
  }
}
