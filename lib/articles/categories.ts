/**
 * Filtres du catalogue /blog (URL /ressources). Pour en ajouter un : l'ajouter ici, puis y rattacher au moins une
 * publication (un test refuse les catégories vides). Les identifiants sont internes : aucune URL de catégorie.
 */
export const CATEGORIES = [
  {
    id: "guides",
    label: "Guides & conseils",
    cardLabel: "Guide",
    description: "Mesurer les appels manqués, qualifier les demandes, organiser les rendez-vous et choisir avec méthode.",
  },
  {
    id: "comparatifs",
    label: "Comparatifs",
    cardLabel: "Comparatif",
    description: "Rushh face aux autres standards téléphoniques IA : sources datées et critères explicites, sans classement.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const categoryLabel = (id: CategoryId): string => CATEGORIES.find((c) => c.id === id)!.label;
export const categoryCardLabel = (id: CategoryId): string => CATEGORIES.find((c) => c.id === id)!.cardLabel;

/** Publication mise en avant en tête du Blog. */
export const FEATURED_PATH = "/comparatif/standards-telephoniques-ia-immobilier";
