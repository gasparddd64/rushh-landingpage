import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const vsAirAgent: Article = {
  path: "/vs/airagent",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-airagent.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux offres pour les appels d'une agence immobilière, celle d'AirAgent selon son site et une prestation de standard entièrement prise en charge, comparées sur vos propres appels.",
  },
  title: "Rushh ou AirAgent : comparer pour une agence immobilière",
  description:
    "AirAgent ou Rushh pour les appels d'une agence immobilière : deux façons d'équiper une agence, et comment choisir.",
  shortTitle: "Rushh ou AirAgent : que choisir ?",
  summary: "Deux façons d'équiper une agence pour ses appels.",
  h1: "Rushh ou AirAgent : quelle solution pour les appels d'une agence immobilière ?",
  answer:
    "AirAgent et Rushh proposent chacun une offre pour les appels des agences immobilières ; elles diffèrent surtout par la façon de démarrer et de faire évoluer le standard.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "AirAgent et Rushh répondent tous deux aux appels des agences : réponse à toute heure, qualification, rendez-vous."
    },
    {
      "t": "p",
      "text": "Ils diffèrent surtout par la façon de démarrer et de faire évoluer le standard."
    }
  ],
  sections: [
    {
      "id": "question",
      "h2": "Ce qu'AirAgent met en avant",
      "blocks": [
        {
          "t": "p",
          "text": "D'après [sa page immobilier](https://airagent.fr/immobilier/), consultée le 31 octobre 2026, AirAgent propose une offre pour les appels des agences immobilières : réponse, qualification et prise de rendez-vous. Les modalités de mise en place, d'accompagnement et de connexion sont à vérifier auprès du fournisseur."
        },
        {
          "t": "p",
          "text": "C'est une offre à regarder si vous cherchez un outil que votre équipe pilote elle-même."
        }
      ]
    },
    {
      "id": "criteres",
      "h2": "Deux façons de démarrer",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "Démarrer vite, en autonomie : l'agence configure, teste et ajuste ses scénarios, avec l'accompagnement que le fournisseur propose.",
            "Déléguer : un prestataire conçoit, configure, teste et suit le standard."
          ]
        },
        {
          "t": "statement",
          "text": "Aucune des deux n'est meilleure en soi : tout dépend du temps que votre équipe souhaite y consacrer."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : l'ajout d'un nouveau type d'appel",
      "blocks": [
        {
          "t": "p",
          "text": "Une agence veut distinguer les appels de gestion locative. Avec un outil à piloter soi-même, quelqu'un de l'équipe crée le nouveau scénario."
        },
        {
          "t": "p",
          "text": "En [prestation gérée](/ressources/choisir-standard-telephonique-ia-immobilier), l'agence décrit le besoin et le prestataire l'intègre."
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
          "text": "Rushh prend en charge la conception, la configuration, les connexions, les tests, l'installation, la maintenance et les ajustements. Il est centré sur les appels entrants et envoie aussi des SMS et des e-mails automatiques, selon les scénarios. Il peut se connecter à des agendas et à des [logiciels immobiliers](/integrations) via leur API, selon les autorisations."
        },
        {
          "t": "p",
          "text": "Les demandes sont organisées dans la plateforme métier Rushh par type d'opportunité, avec coordonnées, résumé, statut et suivi. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Choisissez la façon de démarrer qui vous convient",
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
      "label": "AirAgent : page immobilier",
      "url": "https://airagent.fr/immobilier/",
      "usedFor": "Offre pour les agences immobilières (réponse, qualification, rendez-vous). Consulté le 31 octobre 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Choisissez la façon de démarrer qui vous convient", text: "", links: [] },
};
