import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const vsJoeAi: Article = {
  path: "/vs/joe-ai",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-joe-ai.png",
    width: 1600,
    height: 840,
    alt: "Deux services d'appel comparés, Rushh centré sur les appels entrants et Joe AI proposant plusieurs canaux, qui convergent vers le même test : vos propres appels. Aucun classement n'est établi.",
  },
  title: "Rushh ou Joe AI : comparatif pour agences immobilières | Rushh",
  description:
    "Joe AI ou Rushh pour les appels d'une agence immobilière : un agent multicanal et un standard entièrement géré, centré sur les appels entrants.",
  shortTitle: "Rushh ou Joe AI : quelle solution ?",
  summary: "Un agent multicanal face à un standard spécialisé dans les appels entrants, entièrement géré par l'équipe Rushh.",
  h1: "Rushh ou Joe AI : quelle solution pour les appels de votre agence immobilière ?",
  answer:
    "Joe AI propose une solution immobilière multicanale ; Rushh est un standard spécialisé dans les appels entrants, entièrement conçu, configuré, déployé et suivi par son équipe.",
  datePublished: "2026-09-18",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Vous comparez Rushh à Joe AI, ou cherchez une alternative à Joe AI pour les appels de votre agence ? Les deux s'adressent aux professionnels de l'immobilier et accompagnent leurs clients dans la mise en place."
    },
    {
      "t": "p",
      "text": "La vraie question est ce que vous voulez confier : plusieurs canaux de relation client, ou la prise en charge complète de vos appels entrants."
    }
  ],
  sections: [
    {
      "id": "joe",
      "h2": "Ce que propose Joe AI",
      "blocks": [
        {
          "t": "p",
          "text": "D'après [son site](https://www.getjoe-ai.com/), consulté le 3 novembre 2026, Joe AI est un agent conversationnel pour l'immobilier. Il répond et relance par téléphone, SMS, WhatsApp, e-mail et sur le site de l'agence, qualifie les demandes, propose des rendez-vous de visite et d'estimation, se connecte à des logiciels métier listés sur son site et accompagne la prise en main."
        },
        {
          "t": "p",
          "text": "Il propose aussi des paramétrages par métier : transaction, gérance, syndic, location. Si votre besoin dépasse le téléphone, cette offre mérite d'être regardée."
        }
      ]
    },
    {
      "id": "criteres",
      "h2": "Trois critères pour choisir",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "**Les canaux dont vous avez besoin :** le téléphone seul, ou aussi la messagerie et le site web ?",
            "**Le suivi des demandes :** comment retrouvez-vous chaque demande, avec son résumé et son statut, après l'appel ?",
            "**Qui s'occupe de la technique :** configuration, connexions, tests, ajustements : l'agence, le fournisseur, ou les deux ?"
          ]
        },
        {
          "t": "statement",
          "text": "[Une démonstration sur vos propres scénarios](/ressources/choisir-standard-telephonique-ia-immobilier) départage mieux qu'une liste de fonctionnalités."
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Pourquoi choisir Rushh",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier. Son terrain, c'est l'appel entrant, 24 h/24 et 7 j/7 : il répond, qualifie, prend des rendez-vous sur votre agenda connecté et transfère l'appel en direct à un collaborateur quand c'est nécessaire."
        },
        {
          "t": "p",
          "text": "Il envoie aussi des SMS et des e-mails automatiques, selon vos scénarios, et classe chaque demande dans sa plateforme métier : coordonnées, résumé, statut et suivi de l'opportunité."
        },
        {
          "t": "p",
          "text": "Vous n'avez rien à gérer : conception, configuration, connexions à vos outils, tests, installation, maintenance et suivi sont assurés par notre équipe. Voir [l'offre Rushh](/offre)."
        },
        {
          "t": "statement",
          "text": "Une agence qui veut externaliser ses appels entrants et retrouver des opportunités qualifiées, sans gérer la technique, a une bonne raison de choisir Rushh."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Comparez sur vos propres appels",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh prend en charge les appels de votre agence."
        },
        {
          "t": "button",
          "label": "Réserver une démonstration",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [
    {
      "label": "Joe AI : site officiel",
      "url": "https://www.getjoe-ai.com/",
      "usedFor": "Canaux (téléphone, SMS, WhatsApp, e-mail, site web), qualification, rendez-vous, paramétrages par métier, intégrations listées, accompagnement. Consulté le 3 novembre 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Comparez sur vos propres appels", text: "", links: [] },
};
