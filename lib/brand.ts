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

export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

/** Référence à l'entreprise décrite en détail sur l'accueil (même @id : le graphe fusionne les nœuds). */
export const orgRef = { "@type": "Organization", "@id": ORG_ID, name: BRAND_NAME, url: SITE } as const;
export const websiteRef = { "@type": "WebSite", "@id": WEBSITE_ID, name: BRAND_NAME, url: SITE } as const;
