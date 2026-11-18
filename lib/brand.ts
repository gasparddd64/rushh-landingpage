/**
 * Nom de marque pour le référencement. Une seule entreprise, un seul identifiant (@id) dans toutes les données
 * structurées : « Rushh immo » est le nom public, « Rushh » le nom court (alternateName). Le service reste le
 * « Standard Rushh ». Ne pas créer d'autre entité « Rushh » à part.
 */
export const SITE = "https://www.rushh.fr";
export const BRAND_NAME = "Rushh immo";
export const BRAND_SHORT = "Rushh";
/**
 * Image de présentation officielle de la marque (1200 × 630) : logo Rushh, nom et positionnement.
 * C'est l'image par défaut d'Open Graph, de Twitter et de la propriété `image` de l'entreprise (Schema.org).
 * Le logo carré (`LOGO_URL`) reste la valeur de `Organization.logo` : ne pas les confondre.
 */
export const OG_IMAGE = {
  path: "/og-rushh-standard-telephonique-ia-immobilier.png",
  url: `${SITE}/og-rushh-standard-telephonique-ia-immobilier.png`,
  width: 1200,
  height: 630,
  alt: "Rushh : standard téléphonique IA pour les professionnels de l'immobilier, conçu, configuré, testé et suivi par l'équipe Rushh.",
} as const;
export const LOGO_URL = `${SITE}/logo-rushh-og.png`;

/** Visuels de marque (logo Rushh + une phrase), montrés sur /offre et déclarés dans Schema.org et le sitemap. */
export const BRAND_VISUALS = [
  {
    path: "/marque/rushh-logo-ne-laissez-plus-passer-opportunite.png",
    width: 1600,
    height: 900,
    alt: "Logo Rushh et la phrase « Ne laissez plus passer la moindre opportunité ».",
    caption: "Rushh, le standard téléphonique IA des agences immobilières.",
  },
  {
    path: "/marque/rushh-logo-appels-agence-immobiliere.png",
    width: 1600,
    height: 900,
    alt: "Logo Rushh et la phrase « Rushh répond aux appels de votre agence immobilière, à toute heure ».",
    caption: "Rushh répond aux appels de votre agence, à toute heure.",
  },
  {
    path: "/marque/rushh-logo-configure-teste-suivi.png",
    width: 1600,
    height: 900,
    alt: "Logo Rushh et la phrase « Conçu, configuré, testé et suivi par l'équipe Rushh ».",
    caption: "Une prestation entièrement prise en charge par l'équipe Rushh.",
  },
] as const;

export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

/** Référence à l'entreprise décrite en détail sur l'accueil (même @id : le graphe fusionne les nœuds). */
export const orgRef = { "@type": "Organization", "@id": ORG_ID, name: BRAND_NAME, url: SITE } as const;
export const websiteRef = { "@type": "WebSite", "@id": WEBSITE_ID, name: BRAND_NAME, url: SITE } as const;
