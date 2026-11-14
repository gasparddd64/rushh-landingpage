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
const PAGES: CatalogueEntry[] = [];

/** Ordre de lecture : du constat à la décision, puis les comparaisons de marques. */
const ORDER = [
  "/ressources/appels-manques-immobilier",
  "/ressources/qualification-appels-vendeurs-acquereurs",
  "/ressources/prise-rendez-vous-ia-immobilier",
  "/ressources/appel-vendeur-estimation-immobiliere",
  "/ressources/permanence-telephonique-agence-immobiliere",
  "/ressources/renvoi-appel-ou-decroche-ia-immobilier",
  "/ressources/appels-agence-immobiliere-soir-week-end",
  "/ressources/filtrer-demarchage-telephonique-agence-immobiliere",
  "/ressources/qualifier-appels-locataires-bailleurs",
  "/ressources/standard-syndic-appels-urgents",
  "/ressources/standard-ia-google-agenda-outlook-immobilier",
  "/ressources/messages-repondeur-agence-immobiliere",
  "/ressources/repondeur-ou-standard-ia-agence-immobiliere",
  "/ressources/choisir-standard-telephonique-ia-immobilier",
  "/ressources/cout-standard-telephonique-ia-immobilier",
  "/ressources/standard-telephonique-ia-apimo",
  "/ressources/standard-telephonique-ia-whise",
  "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere",
  "/ressources/telesecretariat-humain-ou-ia",
  "/ressources/rushh-standard-telephonique-ia-immobilier",
  "/ressources/receptionniste-ia-agence-immobiliere",
  "/ressources/automatiser-appels-entrants-agence-immobiliere",
  "/ressources/externalisation-appels-telephoniques-agence-immobiliere",
  "/ressources/secretaire-telephonique-ia-immobilier",
  "/ressources/standard-telephonique-ia-immobilier-rgpd",
  "/comparatif/standards-telephoniques-ia-immobilier",
  "/vs/joe-ai",
  "/vs/fonio",
  "/vs/volubilimo",
  "/vs/airagent",
  "/vs/vokai",
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
