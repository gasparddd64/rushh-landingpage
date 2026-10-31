/**
 * Nom de marque pour le référencement. Une seule entreprise, un seul identifiant (@id) dans toutes les données
 * structurées : « Rushh immo » est le nom public, « Rushh » le nom court (alternateName). Le service reste le
 * « Standard Rushh ». Ne pas créer d'autre entité « Rushh » à part.
 */
export const SITE = "https://www.rushh.fr";
export const BRAND_NAME = "Rushh immo";
export const BRAND_SHORT = "Rushh";
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

/** Référence à l'entreprise décrite en détail sur l'accueil (même @id : le graphe fusionne les nœuds). */
export const orgRef = { "@type": "Organization", "@id": ORG_ID, name: BRAND_NAME, url: SITE } as const;
export const websiteRef = { "@type": "WebSite", "@id": WEBSITE_ID, name: BRAND_NAME, url: SITE } as const;
