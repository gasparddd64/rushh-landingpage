/**
 * Modèle de contenu des guides /ressources/*.
 * Un même objet alimente le rendu React ET le miroir Markdown : les deux restent identiques par construction.
 * Syntaxe inline des textes : **gras** et [texte](url) uniquement.
 */

import type { CategoryId } from "./categories";

export type CalloutKind = "fact" | "example" | "reco" | "hypo";

export type Block =
  | { t: "p"; text: string }
  /** Phrase d'appui mise en valeur (gras dans le texte source). */
  | { t: "statement"; text: string }
  /** Bouton d'action : lien interne rendu comme un bouton. */
  | { t: "button"; label: string; href: string }
  /** Détail secondaire replié (<details> natif : le contenu reste dans le HTML). */
  | { t: "detail"; summary: string; blocks: Block[] }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "h3"; text: string }
  | { t: "callout"; kind: CalloutKind; text: string }
  | { t: "checklist"; items: string[] }
  | { t: "table"; caption: string; head: string[]; rows: string[][]; note?: string }
  | { t: "fiche"; title: string; rows: [string, string][]; note?: string }
  /** Encadré « Comment Rushh gère cette situation » : lie une situation du guide à une capacité de Rushh. */
  | { t: "rushh"; title: string; text: string; points?: string[]; link?: { href: string; label: string } };

export interface ArticleSection {
  id: string;
  h2: string;
  /** Idée à retenir de la section, visible sous le titre même quand le détail est replié. */
  takeaway?: string;
  /** Détail replié par défaut (<details> natif : le contenu reste dans le HTML). */
  fold?: boolean;
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
  /** Résumé éditorial de 1 à 2 lignes pour les cartes du catalogue (distinct de la meta description). */
  summary?: string;
  /** Réponse directe, affichée avant tout le reste. */
  answer: string;
  datePublished: string;
  dateModified: string;
  /**
   * Page au texte validé mot pour mot : le rendu n'ajoute aucun texte éditorial (pas de « En bref », de sommaire,
   * de sources, de légende, de lectures associées ni de bloc Rushh automatique).
   */
  bare?: boolean;
  /** Textes d'introduction, sous le H1 (pages `bare`). */
  intro?: Block[];
  sections: ArticleSection[];
  sources: ArticleSource[];
  sourcesNote: string;
  /** « À retenir » : 3 points au plus, dans la carte de tête, sous la réponse directe. */
  keyPoints?: string[];
  /** Comparatifs : « Choisir selon votre situation », deux listes courtes affichées en tête de page. */
  verdict?: { otherName: string; rushhIf: string[]; otherIf: string[] };
  /** Remplace RUSHH_BRIEF dans la carte de tête (une phrase). */
  rushhBrief?: string;
  /** Bloc « Comment Rushh répond à ce besoin », affiché après le corps du guide. */
  rushh?: { title: string; text: string; points: string[]; links: { href: string; label: string }[] };
  related: { href: string; label: string; text: string }[];
  cta: { title: string; text: string; links: { href: string; label: string }[] };
}

/** Présentation Rushh affichée dans la carte de tête de chaque page (remplaçable par article via rushhBrief). */
export const RUSHH_BRIEF =
  "standard téléphonique IA spécialisé immobilier, 24 h/24 : il qualifie chaque appel, le classe dans sa plateforme métier et propose un rendez-vous. Installation et suivi inclus.";

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
