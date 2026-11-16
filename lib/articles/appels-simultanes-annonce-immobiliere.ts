import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const appelsSimultanes: Article = {
  path: "/ressources/appels-simultanes-annonce-immobiliere",
  bare: true,
  category: "guides",
  title: "Pics d'appels après une annonce : répondre à tous",
  description:
    "Une annonce attractive déclenche plusieurs appels en même temps. Comment une agence répond à tous les acquéreurs sans saturer son équipe.",
  shortTitle: "Pics d'appels : répondre à plusieurs acquéreurs",
  summary: "Plusieurs appels en même temps après une annonce : comment ne perdre personne.",
  h1: "Pics d'appels après une annonce : comment une agence répond à plusieurs acquéreurs en même temps",
  answer:
    "Quand plusieurs acquéreurs appellent en même temps, une agence perd ceux qui tombent sur une ligne occupée ; un standard qui répond à chaque appel évite ce goulot.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Une annonce bien placée peut provoquer dix appels dans la matinée, parfois en même temps."),
    p("Avec une seule ligne et un négociateur en visite, les derniers appelants tombent sur une sonnerie, puis sur une autre agence."),
  ],
  sections: [
    section(
      "probleme",
      "Ce qui se passe quand les appels s'accumulent",
      ul([
        "Une ligne occupée renvoie l'appelant vers une agence concurrente.",
        "Les messages laissés sont rappelés tard, parfois après la visite.",
        "L'équipe rappelle sans savoir quel bien est concerné.",
      ]),
    ),
    section(
      "methode",
      "Une organisation pour les pics",
      ol([
        "Répondre à chaque appel, même lorsque plusieurs arrivent ensemble.",
        "Identifier le bien visé dès le début.",
        "Regrouper les demandes par bien et noter l'ordre d'arrivée.",
        "Proposer des créneaux de visite ou répartir vers les négociateurs concernés.",
      ]),
      statement("L'important n'est pas de tout traiter en direct, mais de ne perdre aucun appelant."),
    ),
    section(
      "exemple",
      "Exemple : un deux-pièces publié à 9 h",
      example(
        "À 9 h 15, quatre acquéreurs appellent pour le même deux-pièces. Chacun est accueilli, son projet est noté et une visite lui est proposée. À midi, le négociateur retrouve les quatre demandes regroupées sur le même bien.",
      ),
      p("Voir aussi les [appels issus des portails](/ressources/appels-annonces-seloger-portails-immobiliers) et le guide [acquéreurs et IA](/ressources/ia-appels-acquereurs-immobilier)."),
    ),
    section(
      "rushh",
      "Comment Rushh gère les pics d'appels",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il répond aux appels entrants, qualifie chaque acquéreur, peut proposer des visites sur un agenda connecté et classe les demandes dans sa plateforme métier. La capacité d'appels simultanés se vérifie avec l'équipe pour votre volume. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Gardez chaque acquéreur, même en plein pic", "Découvrez comment Rushh répond aux appels d'une annonce attractive."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Gardez chaque acquéreur, même en plein pic", text: "", links: [] },
};
