import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const vsFonio: Article = {
  path: "/vs/fonio",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-fonio.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux façons d'équiper une agence pour ses appels, les niveaux d'accompagnement de Fonio et la prestation immobilière entièrement gérée de Rushh.",
  },
  title: "Alternative à Fonio pour l'immobilier : Rushh ou Fonio ? | Rushh",
  description:
    "Fonio ou Rushh pour les appels d'une agence immobilière ? Les niveaux d'accompagnement de Fonio et la prestation immobilière entièrement gérée de Rushh.",
  shortTitle: "Rushh ou Fonio : que choisir ?",
  summary: "Les niveaux d'accompagnement de Fonio et la prestation immobilière entièrement gérée de Rushh.",
  h1: "Alternative à Fonio pour l'immobilier : Rushh ou Fonio, que choisir pour les appels de votre agence ?",
  answer:
    "Fonio propose une plateforme d'assistants IA avec différents niveaux d'accompagnement ; Rushh assure entièrement la conception et le suivi d'un standard spécialisé dans l'immobilier.",
  datePublished: "2026-10-29",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Fonio et Rushh [répondent tous deux aux appels](/comparatif/standards-telephoniques-ia-immobilier) d'une agence immobilière. Ils qualifient les demandes et prennent des rendez-vous."
    },
    {
      "t": "p",
      "text": "La vraie question est de savoir [qui conçoit, configure et fait évoluer le standard](/ressources/choisir-standard-telephonique-ia-immobilier)."
    }
  ],
  sections: [
    {
      "id": "question",
      "h2": "Quel périmètre d'accompagnement choisir ?",
      "blocks": [
        {
          "t": "p",
          "text": "D'après [le site de Fonio](https://www.fonio.ai/fr/integrations), consulté le 28 octobre 2026, c'est une plateforme configurable d'assistants IA. Elle propose plusieurs canaux, dont la voix, WhatsApp et le chat web, des connexions à des outils et un accompagnement par un expert, proposé en option : elle n'est donc pas réservée aux agences qui configurent seules."
        },
        {
          "t": "p",
          "text": "Ses [offres de configuration et de suivi](https://www.fonio.ai/fr/configurations/) permettent aussi de faire appel à des experts, selon le niveau d'accompagnement choisi."
        },
        {
          "t": "statement",
          "text": "Comparez le périmètre de conception, de connexion, de tests et de suivi inclus dans chaque proposition."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : une agence qui change ses horaires",
      "blocks": [
        {
          "t": "p",
          "text": "Une agence modifie ses horaires et ses règles de transfert. Chez Fonio, la prise en charge des mises à jour dépend du niveau d'accompagnement choisi."
        },
        {
          "t": "p",
          "text": "Chez Rushh, l'agence décrit le changement et notre équipe ajuste le standard dans le périmètre convenu."
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
          "text": "Rushh prend en charge la conception, la configuration, les connexions, les tests, l'installation, la maintenance et les ajustements. Il est centré sur les appels entrants, 24 h/24 et 7 j/7 : il qualifie vendeurs, acquéreurs, locataires, bailleurs et prestataires, prend des rendez-vous sur agendas connectés et peut transférer un appel à un humain. Il envoie aussi des SMS et des e-mails automatiques, selon les scénarios."
        },
        {
          "t": "p",
          "text": "Chaque demande est organisée dans la plateforme métier Rushh par type d'opportunité, avec coordonnées, résumé, statut et suivi. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Comparez avec vos propres appels",
      "blocks": [
        {
          "t": "p",
          "text": "Écoutez comment Rushh prend en charge les appels de votre agence."
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
      "label": "Fonio : assistant téléphonique IA pour les agences immobilières",
      "url": "https://www.fonio.ai/fr/assistant-telephonique-ia/assistant-telephonique-ia-agences-immobilieres/",
      "usedFor": "Présentation de l'offre pour l'immobilier. Consulté le 28 octobre 2026."
    },
    {
      "label": "Fonio : tarifs",
      "url": "https://www.fonio.ai/fr/tarifs",
      "usedFor": "Canaux proposés (voix, WhatsApp, chat web). Consulté le 28 octobre 2026."
    },
    {
      "label": "Fonio : configurations (Care et Setups)",
      "url": "https://www.fonio.ai/fr/configurations",
      "usedFor": "Accompagnement par un expert en option. Consulté le 28 octobre 2026."
    },
    {
      "label": "Fonio : intégrations",
      "url": "https://www.fonio.ai/fr/integrations",
      "usedFor": "Connexions à des outils. Consulté le 28 octobre 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Comparez avec vos propres appels", text: "", links: [] },
};
