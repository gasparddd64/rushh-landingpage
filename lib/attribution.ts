/**
 * Attribution des réservations Calendly et hygiène des URL envoyées à GA4. Fonctions pures, sans accès au navigateur.
 * - Les UTM entrants (réels) sont conservés tels quels ; sans UTM, la source est marquée « inconnue » (jamais inventée).
 * - Aucune donnée personnelle ne doit partir vers GA4 : les URL de retour de Calendly portent nom, e-mail, etc.
 */
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type Utm = Partial<Record<UtmKey, string>>;

const UTM_VALUE = /^[\p{L}\p{N}_.\-+~ ]{1,100}$/u;

/** Valeur UTM acceptée : courte, sans caractère exotique, jamais une adresse e-mail ni un numéro de téléphone. */
export function cleanUtmValue(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  const v = raw.trim();
  if (!UTM_VALUE.test(v)) return undefined;
  if (v.includes("@") || /\d{9,}/.test(v.replace(/[\s.\-+]/g, ""))) return undefined;
  return v;
}

/** UTM présents dans une query string (« ?utm_source=… ») ; null s'il n'y a aucune source ou aucun medium valide. */
export function readInboundUtm(search: string): Utm | null {
  const params = new URLSearchParams(search);
  const out: Utm = {};
  for (const k of UTM_KEYS) {
    const v = cleanUtmValue(params.get(k));
    if (v) out[k] = v;
  }
  return out.utm_source || out.utm_medium || out.utm_campaign ? out : null;
}

export function pageSlug(pathname: string): string {
  const slug = pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "_");
  return (slug || "home").slice(0, 80);
}

/**
 * UTM du lien Calendly. Avec des UTM entrants, ils sont transmis tels quels (la vraie source n'est pas écrasée).
 * Sans UTM entrants, la source est explicitement « inconnue » et la page du clic est indiquée dans utm_content.
 * Les UTM déjà présents dans le lien sont toujours respectés.
 */
export function withAttribution(href: string, pathname: string, inbound: Utm | null): string {
  try {
    const u = new URL(href);
    const set = (k: UtmKey, v: string) => {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    };
    if (inbound) {
      for (const k of UTM_KEYS) if (inbound[k]) set(k, inbound[k]!);
    } else {
      set("utm_source", "rushh.fr");
      set("utm_medium", "site_cta");
      set("utm_campaign", "source_inconnue");
      set("utm_content", pageSlug(pathname));
    }
    return u.toString();
  } catch {
    return href;
  }
}

const PII_PARAM = /(^|_)(e?mail|name|nom|prenom|phone|tel|mobile|invitee|answer|reminder|guest|address)|^a\d+$/i;
/** Pages dont l'URL peut contenir des données personnelles : on n'y conserve que les UTM valides. */
const QUERY_STRIPPED_PATHS = ["/confirmation"];

/** URL envoyée à GA4 (page_location) : sans paramètre personnel, ni valeur ressemblant à un e-mail. */
export function sanitizeAnalyticsUrl(href: string): string {
  try {
    const u = new URL(href);
    const keepUtmOnly = QUERY_STRIPPED_PATHS.some((p) => u.pathname === p || u.pathname.startsWith(`${p}/`));
    for (const key of [...u.searchParams.keys()]) {
      const value = u.searchParams.get(key) ?? "";
      const isUtm = (UTM_KEYS as readonly string[]).includes(key);
      if (isUtm) {
        const clean = cleanUtmValue(value);
        if (clean) u.searchParams.set(key, clean);
        else u.searchParams.delete(key);
      } else if (keepUtmOnly || PII_PARAM.test(key) || value.includes("@")) {
        u.searchParams.delete(key);
      }
    }
    u.hash = "";
    return u.toString();
  } catch {
    return href.split("?")[0].split("#")[0];
  }
}

/** Texte libre issu d'une URL (ex. nom du type d'événement) : court, sans e-mail ni chiffres longs. */
export function cleanFreeText(raw: string | null | undefined): string | undefined {
  const v = (raw ?? "").replace(/\s+/g, " ").trim().slice(0, 60);
  if (!v || v.includes("@") || /\d{6,}/.test(v) || /[<>{}]/.test(v)) return undefined;
  return v;
}
