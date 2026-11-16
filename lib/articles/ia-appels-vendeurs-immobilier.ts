import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const iaAppelsVendeurs: Article = {
  path: "/ressources/ia-appels-vendeurs-immobilier",
  bare: true,
  category: "guides",
  title: "IA et appels vendeurs en immobilier : du contact à l'estimation",
  description:
    "Comment une IA traite l'appel d'un propriétaire vendeur : questions posées, règles de transfert et rendez-vous d'estimation proposé à l'agence.",
  shortTitle: "Une IA pour les appels de vendeurs",
  summary: "Du premier contact au rendez-vous d'estimation : le parcours d'un appel vendeur.",
  h1: "Une IA qui répond aux appels vendeurs : du premier contact au rendez-vous d'estimation",
  answer:
    "Une IA peut accueillir un vendeur, recueillir les informations sur son bien et proposer un rendez-vous d'estimation, en transférant à une personne selon les règles de l'agence.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Un appel de vendeur est souvent le début d'un mandat : c'est ce que l'agence ne veut pas manquer."),
    p("Voici le parcours d'un tel appel quand une IA décroche, et les règles qui décident de la suite."),
  ],
  sections: [
    section(
      "parcours",
      "Le parcours d'un appel vendeur",
      ol([
        "Accueil : l'IA annonce l'agence et laisse le propriétaire expliquer sa demande.",
        "Projet : type de bien, localisation, délai envisagé, estimation seule ou projet de vente.",
        "Vérification des règles : le bien est-il dans votre secteur, le projet relève-t-il de votre activité ?",
        "Suite : proposition d'un rendez-vous d'estimation, ou transmission au négociateur.",
        "Fiche : coordonnées, résumé et statut sont enregistrés pour l'équipe.",
      ]),
    ),
    section(
      "exemple",
      "Exemple : un propriétaire pressé",
      example(
        "Un propriétaire rappelle pour la deuxième fois : il veut parler à un négociateur, pas à une IA. La règle prévue dans ce cas : prendre ses coordonnées, noter l'urgence et transférer ou faire rappeler en priorité.",
      ),
    ),
    section(
      "escalade",
      "Quand passer la main à une personne",
      ul([
        "Le vendeur demande explicitement un interlocuteur humain.",
        "La situation sort du cadre : litige, succession, bien atypique.",
        "Une consigne de l'agence l'impose pour certains types de biens ou de clients.",
      ]),
      p("Les questions qu'un négociateur pose lui-même sont détaillées dans le guide [appel vendeur et estimation](/ressources/appel-vendeur-estimation-immobiliere) ; ici, il s'agit du parcours quand l'IA décroche. Voir aussi [qualifier vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs)."),
      statement("Une IA bien réglée ne retient pas le vendeur : elle le fait avancer, ou le passe à quelqu'un."),
    ),
    section(
      "rushh",
      "Comment Rushh traite un appel vendeur",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il identifie le vendeur, recueille les informations utiles, peut proposer un rendez-vous sur votre agenda connecté ou transférer l'appel en direct, selon les règles définies avec votre agence. La demande est classée dans la plateforme métier Rushh. Voir la solution pour la [transaction immobilière](/solutions/transaction-immobiliere) et [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Ne laissez plus un vendeur sans réponse", "Découvrez comment Rushh prend en charge les appels de vos propriétaires vendeurs."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Ne laissez plus un vendeur sans réponse", text: "", links: [] },
};
