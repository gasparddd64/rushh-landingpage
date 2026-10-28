/**
 * Modèle de contenu des guides /ressources/*.
 * Un même objet alimente le rendu React ET le miroir Markdown : les deux restent identiques par construction.
 * Syntaxe inline des textes : **gras** et [texte](url) uniquement.
 */

import type { CategoryId } from "./categories";

export type CalloutKind = "fact" | "example" | "reco" | "hypo";

export type Block =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "h3"; text: string }
  | { t: "callout"; kind: CalloutKind; text: string }
  | { t: "checklist"; items: string[] }
  | { t: "table"; caption: string; head: string[]; rows: string[][]; note?: string }
  | { t: "fiche"; title: string; rows: [string, string][]; note?: string };

export interface ArticleSection {
  id: string;
  h2: string;
  blocks: Block[];
}

export interface ArticleSource {
  label: string;
  url: string;
  /** Ce que la source atteste dans le guide. */
  usedFor: string;
}

export interface ArticleCover {
  /** Chemin dans /public. */
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Article {
  path: string;
  cover?: ArticleCover;
  /** Identifiant d'une catégorie de lib/articles/categories.ts. */
  category: CategoryId;
  title: string;
  description: string;
  h1: string;
  /** Titre court pour les cartes du catalogue (le H1 et le title SEO ne changent pas). */
  shortTitle?: string;
  /** Réponse directe, affichée avant tout le reste. */
  answer: string;
  datePublished: string;
  dateModified: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
  sourcesNote: string;
  related: { href: string; label: string; text: string }[];
  cta: { title: string; text: string; links: { href: string; label: string }[] };
}

export const CALLOUT_LABEL: Record<CalloutKind, string> = {
  fact: "Fait vérifié",
  example: "Exemple fictif",
  reco: "Recommandation pratique",
  hypo: "Hypothèse",
};

export const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export function formatFrenchDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d === 1 ? "1er" : d} ${FRENCH_MONTHS[m - 1]} ${y}`;
}
