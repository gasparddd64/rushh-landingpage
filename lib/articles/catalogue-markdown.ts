import { ARTICLES } from "./index";
import { CATEGORIES, FEATURED_PATH } from "./categories";
import { formatFrenchDate } from "./types";

const SITE_URL = "https://www.rushh.fr";

export const CATALOGUE_TITLE = "Ressources : guides et comparatifs pour les appels d'agence | Rushh";
export const CATALOGUE_DESCRIPTION =
  "Guides, comparatifs et méthodes pour les appels entrants des agences immobilières : appels manqués, qualification, standards téléphoniques IA.";

/** Miroir Markdown de /ressources, généré depuis les mêmes données que la page. */
export function catalogueToMarkdown(): string {
  const entry = (a: (typeof ARTICLES)[number]) =>
    `- [${a.h1}](${SITE_URL}${a.path}) : ${a.description} Publié le ${formatFrenchDate(a.datePublished)}.`;
  const featured = ARTICLES.find((a) => a.path === FEATURED_PATH);
  const parts = [
    "# Guides et comparatifs pour les appels de votre agence immobilière",
    "Mesurer les appels manqués, qualifier les demandes, comparer les standards téléphoniques IA : des contenus sourcés et datés, utiles quel que soit le fournisseur choisi. Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu, configuré et suivi pour les professionnels de l'immobilier. Tarification sur devis.",
  ];
  if (featured) parts.push("## À la une", entry(featured));
  for (const c of CATEGORIES) {
    parts.push(`## ${c.label}`, c.description, ARTICLES.filter((a) => a.category === c.id).map(entry).join("\n"));
  }
  parts.push(`Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Ligne de démonstration](${SITE_URL}/demonstrations)`);
  return parts.join("\n\n") + "\n";
}
