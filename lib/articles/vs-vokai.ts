import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const vsVokai: Article = {
  path: "/vs/vokai",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-vokai.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux offres de standard téléphonique IA dédiées à l'immobilier, comparées sur la qualification, les connexions et la prise en charge.",
  },
  title: "Rushh ou VOKAI : comparer deux standards IA immobiliers",
  description:
    "VOKAI ou Rushh pour les appels d'une agence immobilière : deux offres dédiées à l'immobilier, et les points à regarder pour choisir.",
  shortTitle: "Rushh ou VOKAI : que choisir ?",
  summary: "Deux offres dédiées à l'immobilier : les points à regarder pour choisir.",
  h1: "Rushh ou VOKAI : comparer deux solutions pour les appels immobiliers",
  answer:
    "VOKAI et Rushh proposent toutes deux une offre dédiée à l'immobilier ; elles se comparent sur la qualification, les connexions et la prise en charge.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "VOKAI et Rushh s'adressent toutes deux aux agences immobilières et prennent en charge les appels entrants."
    },
    {
      "t": "p",
      "text": "Pour choisir, mieux vaut regarder ce que chacune fait de l'appel."
    }
  ],
  sections: [
    {
      "id": "question",
      "h2": "Ce que VOKAI annonce",
      "blocks": [
        {
          "t": "p",
          "text": "D'après [sa page immobilier](https://vokai.fr/agents-vocaux/immobilier), consultée le 31 octobre 2026, VOKAI qualifie les vendeurs et les acquéreurs, y compris sur le financement, prend des rendez-vous, envoie une fiche bien par SMS et annonce une API pour plusieurs [logiciels immobiliers](/integrations)."
        },
        {
          "t": "p",
          "text": "Ces fonctions sont proches de ce qu'attend une agence : l'enjeu est de voir laquelle correspond à votre organisation."
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
            "**VOKAI**, si les fonctions qu'il détaille (qualification du financement, fiche bien par SMS) correspondent à votre organisation.",
            "**Rushh**, si vous voulez une prestation entièrement prise en charge, avec des scénarios propres à votre agence et chaque demande classée dans une plateforme métier."
          ]
        },
        {
          "t": "statement",
          "text": "Dans les deux cas, [une démonstration sur vos propres scénarios](/ressources/choisir-standard-telephonique-ia-immobilier) départage mieux que n'importe quelle liste de fonctionnalités."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un acquéreur appelle pour une annonce",
      "blocks": [
        {
          "t": "p",
          "text": "Le standard identifie l'annonce, recueille les disponibilités de l'acquéreur et propose une visite ou transmet la demande."
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
          "text": "Rushh prend en charge l'ensemble du projet : conception, configuration, connexions, tests, installation, maintenance et ajustements, avec des scénarios propres à chaque agence. Les demandes sont classées dans une plateforme métier par type d'opportunité, avec coordonnées, résumé, statut et suivi."
        },
        {
          "t": "p",
          "text": "Il est centré sur les appels entrants, 24 h/24 et 7 j/7 : qualification de vendeurs, acquéreurs, locataires, bailleurs et prestataires, rendez-vous sur agendas connectés, transfert vers un humain. Il envoie aussi des SMS et des e-mails automatiques, selon les scénarios. Il peut se connecter à votre logiciel immobilier lorsque son API et vos autorisations le permettent. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Comparez sur vos propres scénarios",
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
      "label": "VOKAI : agents vocaux pour l'immobilier",
      "url": "https://vokai.fr/agents-vocaux/immobilier",
      "usedFor": "Qualification vendeur et acquéreur, financement, fiche bien par SMS, API annoncée. Consulté le 31 octobre 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Comparez sur vos propres scénarios", text: "", links: [] },
};
