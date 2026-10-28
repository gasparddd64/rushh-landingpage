/**
 * Catégories du catalogue /ressources. Pour en ajouter une : l'ajouter ici, puis y rattacher au moins un article
 * (un test refuse les catégories vides).
 */
export const CATEGORIES = [
  {
    id: "appels-qualification",
    label: "Appels & qualification",
    description: "Mesurer les appels manqués et qualifier les demandes des vendeurs et des acquéreurs.",
  },
  {
    id: "standards-ia-comparatifs",
    label: "Standards IA & comparatifs",
    description: "Comparer les organisations et les solutions de standard téléphonique IA, et choisir avec méthode.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const categoryLabel = (id: CategoryId): string => CATEGORIES.find((c) => c.id === id)!.label;

/** Article mis à la une en tête de /ressources. */
export const FEATURED_PATH = "/comparatif/standards-telephoniques-ia-immobilier";
