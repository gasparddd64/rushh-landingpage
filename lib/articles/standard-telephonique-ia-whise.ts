import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const standardWhise: Article = {
  path: "/ressources/standard-telephonique-ia-whise",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-whise.png",
    width: 1600,
    height: 840,
    alt: "Illustration : un standard téléphonique IA qui transmet les informations d'un appel vers le logiciel Whise, sur la base d'une connexion API sur mesure.",
  },
  title: "Standard téléphonique IA et Whise : connexion sur mesure | Rushh",
  description:
    "Comment connecter un standard téléphonique IA à Whise : ce qu'une connexion API sur mesure permet, et ce qui se passe sans connexion.",
  shortTitle: "Standard IA et Whise : la connexion",
  summary: "Une connexion API sur mesure : ce qu'elle permet, et ce qui se passe sans.",
  h1: "Comment connecter un standard téléphonique IA à Whise ?",
  answer:
    "Un standard IA peut échanger avec Whise grâce à son API, lorsque l'accès et les autorisations le permettent ; la connexion se définit sur mesure.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Les informations recueillies au téléphone ne servent que si l'équipe les retrouve dans son logiciel."
    },
    {
      "t": "p",
      "text": "Pour une agence qui utilise Whise, comment relier le standard à ses outils ?"
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
          "text": "Quelles informations l'équipe souhaite-t-elle retrouver dans Whise, et lesquelles faut-il lire pour mieux répondre à l'appelant ?"
        },
        {
          "t": "h3",
          "text": "2. Vérifier l'accès"
        },
        {
          "t": "p",
          "text": "Une connexion n'est possible que si un accès technique est disponible et si les autorisations nécessaires ont effectivement été accordées. Cet accès se demande auprès de Whise (voir sa [marketplace](https://www.whise.eu/fr-fr/marketplace/)) ; lecture et écriture dépendent des droits obtenus."
        },
        {
          "t": "h3",
          "text": "3. Tester avant d'activer"
        },
        {
          "t": "p",
          "text": "Les tests utilisent des données de test, avant toute utilisation sur la base réelle."
        },
        {
          "t": "statement",
          "text": "Chaque agence a son organisation : la connexion se construit avec elle."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : une demande d'acquéreur",
      "blocks": [
        {
          "t": "p",
          "text": "Un acquéreur appelle au sujet d'une annonce. Le standard identifie la demande, recueille ses coordonnées et ses disponibilités, puis les transmet au logiciel lorsque la connexion est en place."
        },
        {
          "t": "p",
          "text": "Sans connexion, la demande est consultable dans la plateforme du standard."
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
          "text": "Rushh peut se connecter à [votre logiciel immobilier](/integrations), dont Whise, lorsqu'un accès technique est disponible et que les autorisations nécessaires sont accordées, en lecture et en écriture selon ces droits. La connexion est réalisée sur mesure, selon l'organisation de votre agence."
        },
        {
          "t": "p",
          "text": "Les demandes sont organisées dans la plateforme métier Rushh. Notre équipe prend en charge les connexions, les tests et les ajustements. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Parlez de votre logiciel avec l'équipe Rushh",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh peut s'adapter aux outils de votre agence."
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
      "label": "Whise : marketplace et partenaires",
      "url": "https://www.whise.eu/fr-fr/marketplace/",
      "usedFor": "Connexions proposées autour du logiciel Whise."
    },
    {
      "label": "Whise : contact",
      "url": "https://www.whise.eu/fr-fr/contact/",
      "usedFor": "Point de contact pour demander un accès."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Parlez de votre logiciel avec l'équipe Rushh", text: "", links: [] },
};
