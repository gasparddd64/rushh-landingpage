import { CATALOGUE } from "./catalogue";
import { CATEGORIES, FEATURED_PATH } from "./categories";

const SITE_URL = "https://www.rushh.fr";

export const CATALOGUE_TITLE = "Blog Rushh immo : guides et comparatifs pour les appels d'agence";
export const CATALOGUE_DESCRIPTION =
  "Guides, comparatifs et méthodes pour les appels entrants des agences immobilières : appels manqués, qualification, standards téléphoniques IA.";

/** Miroir Markdown de /ressources (le Blog), généré depuis les mêmes données que la page. */
export function catalogueToMarkdown(): string {
  const entry = (e: (typeof CATALOGUE)[number]) => `- [${e.title}](${SITE_URL}${e.path}) : ${e.summary}`;
  const featured = CATALOGUE.find((e) => e.path === FEATURED_PATH);
  const parts = [
    "# Le Blog Rushh : guides et comparatifs pour les appels de votre agence immobilière",
    "Mesurer les appels manqués, qualifier les demandes, comparer les standards téléphoniques IA : des contenus sourcés et datés, utiles quel que soit le fournisseur choisi. Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu, configuré et suivi pour les professionnels de l'immobilier. Tarification sur devis.",
  ];
  if (featured) parts.push("## À lire en premier", entry(featured));
  for (const c of CATEGORIES) {
    parts.push(`## ${c.label}`, c.description, CATALOGUE.filter((e) => e.category === c.id).map(entry).join("\n"));
  }
  parts.push(`Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Ligne de démonstration](${SITE_URL}/demonstrations)`);
  return parts.join("\n\n") + "\n";
}
