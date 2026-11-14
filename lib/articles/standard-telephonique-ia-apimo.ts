import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const standardApimo: Article = {
  path: "/ressources/standard-telephonique-ia-apimo",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-apimo.png",
    width: 1600,
    height: 840,
    alt: "Illustration : un standard téléphonique IA qui transmet les informations d'un appel vers le CRM Apimo, sur la base d'une connexion API sur mesure.",
  },
  title: "Standard téléphonique IA et Apimo : connexion sur mesure | Rushh",
  description:
    "Comment connecter un standard téléphonique IA au CRM Apimo : ce qu'une connexion API sur mesure permet, et ce qui se passe sans connexion.",
  shortTitle: "Standard IA et Apimo : la connexion",
  summary: "Une connexion API sur mesure : ce qu'elle permet, et ce qui se passe sans.",
  h1: "Comment connecter un standard téléphonique IA au CRM Apimo ?",
  answer:
    "Un standard IA peut échanger avec Apimo grâce à son API, lorsque l'accès et les autorisations le permettent ; la connexion se définit sur mesure.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Un standard téléphonique recueille des informations utiles : motif, coordonnées, projet. Reste à les retrouver là où travaille l'équipe, dans le CRM."
    },
    {
      "t": "p",
      "text": "Pour une agence qui utilise Apimo, la question est donc : comment relier les deux ?"
    }
  ],
  sections: [
    {
      "id": "methode",
      "h2": "Connecter en trois temps",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Définir ce qui doit circuler"
        },
        {
          "t": "p",
          "text": "Créer un contact ? Rattacher un appel à un bien ? Lire une information ? Mieux vaut commencer par les actions utiles à l'équipe."
        },
        {
          "t": "h3",
          "text": "2. Vérifier l'accès"
        },
        {
          "t": "p",
          "text": "La connexion repose sur l'[API Apimo](https://apimo.com/api), dans la limite de l'accès et des autorisations dont dispose l'agence. Lecture et écriture dépendent de ces droits."
        },
        {
          "t": "h3",
          "text": "3. Tester avant d'activer"
        },
        {
          "t": "p",
          "text": "Les tests se font avec des données de test, avant toute utilisation sur la base réelle."
        },
        {
          "t": "statement",
          "text": "Une connexion se construit selon votre organisation : il n'existe pas de branchement universel."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un appel vendeur",
      "blocks": [
        {
          "t": "p",
          "text": "Un propriétaire appelle pour une estimation. Le standard recueille le bien et les coordonnées, puis transmet les informations au CRM lorsque la connexion est en place."
        },
        {
          "t": "p",
          "text": "Sans connexion, la demande reste disponible dans la plateforme du standard, prête à être reprise."
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Comment Rushh applique cette méthode",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."
        },
        {
          "t": "p",
          "text": "Rushh peut se connecter à [votre logiciel immobilier](/integrations), dont Apimo, via une API accessible, en lecture et en écriture selon les autorisations. Cette connexion est réalisée sur mesure, selon l'[organisation de votre agence](/ressources/qualification-appels-vendeurs-acquereurs)."
        },
        {
          "t": "p",
          "text": "Les demandes sont organisées dans la plateforme métier Rushh, avec coordonnées, résumé, statut et suivi. Notre équipe prend en charge les connexions, les tests et les ajustements. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Parlez de votre CRM avec l'équipe Rushh",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh peut s'adapter aux outils de votre agence."
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
      "label": "Apimo : l'API pour les prestataires immobiliers",
      "url": "https://apimo.com/api",
      "usedFor": "Présentation de l'API Apimo."
    },
    {
      "label": "Apimo : API 3, documentation",
      "url": "https://apimo.com/api/webservice",
      "usedFor": "Documentation de l'API Apimo."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Parlez de votre CRM avec l'équipe Rushh", text: "", links: [] },
};
