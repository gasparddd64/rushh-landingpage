import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const vsVolubilimo: Article = {
  path: "/vs/volubilimo",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/volubilimo.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux standards téléphoniques IA pour l'immobilier comparés sur leur périmètre et sur la façon dont les demandes sont suivies.",
  },
  title: "Rushh ou Volubilimo : comparer deux standards IA immobiliers",
  description:
    "Rushh ou Volubilimo pour les appels d'une agence immobilière : deux solutions spécialisées, et les points à regarder pour choisir.",
  shortTitle: "Rushh ou Volubilimo : que choisir ?",
  summary: "Deux solutions spécialisées en immobilier : les points à regarder pour choisir.",
  h1: "Rushh et Volubilimo : comparer deux approches du standard téléphonique IA immobilier",
  answer:
    "Rushh et Volubilimo sont toutes deux spécialisées en immobilier ; la comparaison se joue sur le périmètre et sur le suivi des demandes.",
  datePublished: "2026-10-29",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Rushh et Volubilimo ont un point commun : toutes deux se présentent comme spécialisées dans l'immobilier."
    },
    {
      "t": "p",
      "text": "Reste à savoir ce que chacune apporte à votre agence."
    }
  ],
  sections: [
    {
      "id": "question",
      "h2": "Ce que Volubilimo annonce",
      "blocks": [
        {
          "t": "p",
          "text": "D'après [son site](https://www.volubilimo.com/), consulté le 29 octobre 2026, Volubilimo prend en charge des appels entrants et sortants, qualifie, prend des rendez-vous, transfère les appels, produit des synthèses et s'appuie sur une équipe d'accompagnement."
        },
        {
          "t": "p",
          "text": "Si vous cherchez aussi des appels sortants, cette offre mérite d'être regardée."
        }
      ]
    },
    {
      "id": "choix",
      "h2": "Quel choix selon votre besoin ?",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "**Volubilimo**, si vous cherchez aussi des appels sortants.",
            "**Rushh**, si vous voulez déléguer entièrement la prise en charge de vos appels entrants et retrouver chaque demande classée dans une plateforme métier."
          ]
        },
        {
          "t": "statement",
          "text": "Dans les deux cas, [une démonstration sur vos propres scénarios](/ressources/choisir-standard-telephonique-ia-immobilier) départage mieux que n'importe quelle [liste de fonctionnalités](/comparatif/standards-telephoniques-ia-immobilier)."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un appel vendeur pendant une visite",
      "blocks": [
        {
          "t": "p",
          "text": "Le propriétaire est qualifié et un rendez-vous d'estimation lui est proposé. Le plus important se joue après : l'équipe retrouve-t-elle la demande, son résumé et sa prochaine action ?"
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Ce que Rushh apporte",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."
        },
        {
          "t": "p",
          "text": "Rushh prend en charge l'ensemble du projet : conception, configuration, connexions, tests, installation, maintenance et ajustements. Les demandes sont classées dans une plateforme métier, par type d'opportunité : vendeur, acquéreur, locataire, bailleur ou prestataire, avec coordonnées, résumé, statut et suivi."
        },
        {
          "t": "p",
          "text": "Il est centré sur les appels entrants, 24 h/24 et 7 j/7 : qualification, rendez-vous sur agendas connectés, transfert vers un humain. Il envoie aussi des SMS et des e-mails automatiques, selon les scénarios. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Faites la comparaison sur vos appels",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh prend en charge les appels entrants de votre agence."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [
    {
      "label": "Volubilimo : site officiel",
      "url": "https://www.volubilimo.com/",
      "usedFor": "Appels entrants et sortants, qualification, rendez-vous, transferts, synthèses, accompagnement. Consulté le 29 octobre 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Faites la comparaison sur vos appels", text: "", links: [] },
};
