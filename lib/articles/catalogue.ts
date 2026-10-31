import { ARTICLES } from "./index";
import { categoryCardLabel, categoryLabel, type CategoryId } from "./categories";
import type { ArticleCover } from "./types";

/** Carte du catalogue Blog : une publication, qu'elle soit un article ou une page existante. */
export interface CatalogueEntry {
  path: string;
  title: string;
  summary: string;
  category: CategoryId;
  cover: ArticleCover;
}

/**
 * Pages qui figurent au catalogue sans être des articles : leur contenu, leur URL et leurs données structurées
 * restent ceux de la page elle-même ; le catalogue ne porte que la carte (et aucune date).
 */
const PAGES: CatalogueEntry[] = [
  {
    path: "/vs/joe-ai",
    title: "Rushh ou Joe AI : quelle solution ?",
    summary: "Une offre multicanale face à un service centré sur les appels entrants, d'après leurs sites officiels.",
    category: "comparatifs",
    cover: {
      src: "/ressources/vs-joe-ai.png",
      width: 1600,
      height: 840,
      alt: "Deux services d'appel comparés, Rushh centré sur les appels entrants et Joe AI proposant plusieurs canaux, qui convergent vers le même test : vos propres appels. Aucun classement n'est établi.",
    },
  },
];

/** Ordre de lecture : du constat à la décision, puis les comparaisons de marques. */
const ORDER = [
  "/ressources/appels-manques-immobilier",
  "/ressources/qualification-appels-vendeurs-acquereurs",
  "/ressources/prise-rendez-vous-ia-immobilier",
  "/ressources/appel-vendeur-estimation-immobiliere",
  "/ressources/permanence-telephonique-agence-immobiliere",
  "/ressources/choisir-standard-telephonique-ia-immobilier",
  "/ressources/cout-standard-telephonique-ia-immobilier",
  "/ressources/standard-telephonique-ia-apimo",
  "/ressources/telesecretariat-humain-ou-ia",
  "/comparatif/standards-telephoniques-ia-immobilier",
  "/vs/joe-ai",
  "/vs/fonio",
  "/vs/volubilimo",
];

function build(): CatalogueEntry[] {
  const all: CatalogueEntry[] = [
    ...ARTICLES.map((a) => ({
      path: a.path,
      title: a.shortTitle ?? a.h1,
      summary: a.summary ?? a.description,
      category: a.category,
      cover: a.cover!,
    })),
    ...PAGES,
  ];
  return ORDER.map((p) => all.find((e) => e.path === p)!);
}

export const CATALOGUE: CatalogueEntry[] = build();

export { categoryCardLabel, categoryLabel };
