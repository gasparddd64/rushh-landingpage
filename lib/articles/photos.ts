/**
 * Photos d'en-tête des articles du blog (en plus des vignettes illustrées du catalogue).
 * Source : Unsplash, licence Unsplash (usage commercial libre, attribution non obligatoire mais indiquée).
 * Choisies sans visage reconnaissable ni marque visible. Les pages de comparaison de marques (/vs/*, comparatif)
 * n'ont pas de photo : leur vignette montre les logos Rushh et concurrent.
 */
import type { ArticleCover } from "./types";

export interface ArticlePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Identifiant de la photo sur unsplash.com/photos/<id>. */
  unsplashId: string;
}

export const ARTICLE_PHOTOS: Record<string, ArticlePhoto> = {
  "/ressources/appels-manques-immobilier": { src: "/ressources/photos/appels-manques-immobilier.jpg", width: 1920, height: 1008, unsplashId: "Dkn8-zPIbwo",
    alt: "Téléphone de bureau posé sur un bureau dans un open space lumineux." },
  "/ressources/telesecretariat-humain-ou-ia": { src: "/ressources/photos/telesecretariat-humain-ou-ia.jpg", width: 1920, height: 1008, unsplashId: "cFJcDGUWnes",
    alt: "Comptoir d'accueil d'un bureau lumineux avec un téléphone de bureau et une plante." },
  "/ressources/qualification-appels-vendeurs-acquereurs": { src: "/ressources/photos/qualification-appels-vendeurs-acquereurs.jpg", width: 1920, height: 1008, unsplashId: "MhqUBTxQ3Hw",
    alt: "Deux personnes examinent un formulaire à une table, avec un smartphone et une tablette posés à côté." },
  "/ressources/choisir-standard-telephonique-ia-immobilier": { src: "/ressources/photos/choisir-standard-telephonique-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "NuFUbftUu_s",
    alt: "Ordinateur portable, carnet de notes, smartphone et tasse de café sur un bureau sombre." },
  "/ressources/prise-rendez-vous-ia-immobilier": { src: "/ressources/photos/prise-rendez-vous-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "FoKO4DpXamQ",
    alt: "Agenda ouvert sur un bureau, page mensuelle vierge." },
  "/ressources/cout-standard-telephonique-ia-immobilier": { src: "/ressources/photos/cout-standard-telephonique-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "DJ7bWa-Gwks",
    alt: "Bureau en bois avec ordinateur portable, carnet, stylos et tasse de café." },
  "/ressources/permanence-telephonique-agence-immobiliere": { src: "/ressources/photos/permanence-telephonique-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "G02qPcVXfQc",
    alt: "Entrée lumineuse d'un bureau avec une horloge murale et un poste de travail." },
  "/ressources/appel-vendeur-estimation-immobiliere": { src: "/ressources/photos/appel-vendeur-estimation-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "YE7nAeaWS4w",
    alt: "Façade claire d'une maison de ville aux fenêtres encadrées de vert." },
  "/ressources/standard-telephonique-ia-apimo": { src: "/ressources/photos/standard-telephonique-ia-apimo.jpg", width: 1920, height: 1008, unsplashId: "j4uuKnN43_M",
    alt: "Ordinateur portable et tasse de café sur une table en bois." },
  "/ressources/standard-telephonique-ia-whise": { src: "/ressources/photos/standard-telephonique-ia-whise.jpg", width: 1920, height: 1008, unsplashId: "mY3_bvR74fI",
    alt: "Bureau près d'une fenêtre avec ordinateur portable et mug noir." },
  "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere": { src: "/ressources/photos/rentabilite-standard-telephonique-ia-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "cckf4TsHAuw",
    alt: "Ordinateur portable, bloc-notes, stylo et smartphone sur une table en bois." },
  "/ressources/renvoi-appel-ou-decroche-ia-immobilier": { src: "/ressources/photos/renvoi-appel-ou-decroche-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "WQqViZ_Zd8M",
    alt: "Gros plan sur un téléphone de bureau IP à écran." },
  "/ressources/filtrer-demarchage-telephonique-agence-immobiliere": { src: "/ressources/photos/filtrer-demarchage-telephonique-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "KrPulSdUetk",
    alt: "Cadenas fermé sur une porte métallique turquoise." },
  "/ressources/appels-agence-immobiliere-soir-week-end": { src: "/ressources/photos/appels-agence-immobiliere-soir-week-end.jpg", width: 1920, height: 1008, unsplashId: "SsdXH3G_4p4",
    alt: "Immeubles aux toits de zinc éclairés par la lumière dorée de fin de journée." },
  "/ressources/qualifier-appels-locataires-bailleurs": { src: "/ressources/photos/qualifier-appels-locataires-bailleurs.jpg", width: 1920, height: 1008, unsplashId: "V5CdVpVUR0w",
    alt: "Porte noire numérotée sur une façade bleue, encadrée de plantes en pots." },
  "/ressources/standard-syndic-appels-urgents": { src: "/ressources/photos/standard-syndic-appels-urgents.jpg", width: 1920, height: 1008, unsplashId: "JTIXEWZyoOQ",
    alt: "Balcons végétalisés d'un immeuble d'habitation moderne." },
  "/ressources/standard-ia-google-agenda-outlook-immobilier": { src: "/ressources/photos/standard-ia-google-agenda-outlook-immobilier.jpg", width: 1920, height: 1008, unsplashId: "SwHvzwEzCfA",
    alt: "Agenda papier, smartphone et tablette affichant un calendrier de rendez-vous sur un bureau blanc." },
  "/ressources/standard-telephonique-ia-immobilier-rgpd": { src: "/ressources/photos/standard-telephonique-ia-immobilier-rgpd.jpg", width: 1920, height: 1008, unsplashId: "FnA5pAzqhMM",
    alt: "Cadenas à code posé sur un clavier d'ordinateur, à côté de cartes." },
  "/ressources/repondeur-ou-standard-ia-agence-immobiliere": { src: "/ressources/photos/repondeur-ou-standard-ia-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "_geAgtjqLzY",
    alt: "Ancien téléphone de bureau blanc à cordon spiralé." },
  "/ressources/messages-repondeur-agence-immobiliere": { src: "/ressources/photos/messages-repondeur-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "_tSiBShAbJ8",
    alt: "Téléphone à cadran noir posé sur une table reflétante." },
  "/ressources/rushh-standard-telephonique-ia-immobilier": { src: "/ressources/photos/rushh-standard-telephonique-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "tUcVQwXsNck",
    alt: "Hall d'accueil contemporain avec comptoir en bois et pierre et plantes vertes." },
  "/ressources/receptionniste-ia-agence-immobiliere": { src: "/ressources/photos/receptionniste-ia-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "IApne9_bauM",
    alt: "Bureau vitré lumineux avec plantes vertes et postes de travail." },
  "/ressources/automatiser-appels-entrants-agence-immobiliere": { src: "/ressources/photos/automatiser-appels-entrants-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "TILwnyF2xcw",
    alt: "Bureau vu du dessus avec ordinateur portable, smartphone, carnet et lunettes." },
  "/ressources/externalisation-appels-telephoniques-agence-immobiliere": { src: "/ressources/photos/externalisation-appels-telephoniques-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "ZCDA1-cih6o",
    alt: "Salle de bureau lumineuse avec table blanche, fauteuils noirs et grandes baies vitrées." },
  "/ressources/secretaire-telephonique-ia-immobilier": { src: "/ressources/photos/secretaire-telephonique-ia-immobilier.jpg", width: 1920, height: 1008, unsplashId: "jRhiHiVOyfU",
    alt: "Téléphone de bureau gris posé sur un bureau, à côté d'un pot à crayons." },
  "/ressources/script-accueil-telephonique-agence-immobiliere": { src: "/ressources/photos/script-accueil-telephonique-agence-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "OQMZwNd3ThU",
    alt: "Mains d'une personne écrivant avec un stylo sur une feuille de papier." },
  "/ressources/gerer-appels-pendant-visites-immobilieres": { src: "/ressources/photos/gerer-appels-pendant-visites-immobilieres.jpg", width: 1920, height: 1008, unsplashId: "bqUZEAeWuok",
    alt: "Main tenant un trousseau de clés dans l'entrée d'un appartement lumineux." },
  "/ressources/standard-telephonique-ia-mandataire-immobilier": { src: "/ressources/photos/standard-telephonique-ia-mandataire-immobilier.jpg", width: 1920, height: 1008, unsplashId: "Ebj87ehFNNU",
    alt: "Main tenant un trousseau de clés devant un arrière-plan flou." },
  "/ressources/standard-telephonique-ia-multilingue-immobilier": { src: "/ressources/photos/standard-telephonique-ia-multilingue-immobilier.jpg", width: 1920, height: 1008, unsplashId: "nXt5HtLmlgE",
    alt: "Globe terrestre posé sur un comptoir en bois, éclairé par une lumière chaude." },
  "/ressources/sms-confirmation-visite-immobiliere": { src: "/ressources/photos/sms-confirmation-visite-immobiliere.jpg", width: 1920, height: 1008, unsplashId: "9_SaFlgwFdA",
    alt: "Mains tenant un smartphone, plan rapproché sur fond clair." },
  "/ressources/appels-annonces-seloger-portails-immobiliers": { src: "/ressources/photos/appels-annonces-seloger-portails-immobiliers.jpg", width: 1920, height: 1008, unsplashId: "3v0aQxhZtVk",
    alt: "Immeuble haussmannien d'angle avec un lampadaire et des arbres." },
};

/**
 * Image principale d'un article, partout où il est présenté (catalogue du blog, accueil, partage) :
 * sa photo lorsqu'il en a une, sinon sa vignette (pages de comparaison : logos Rushh et concurrent).
 */
export function primaryImage(a: { path: string; cover?: ArticleCover }): ArticleCover {
  const ph = ARTICLE_PHOTOS[a.path];
  if (ph) return { src: ph.src, width: ph.width, height: ph.height, alt: ph.alt };
  return a.cover!;
}
