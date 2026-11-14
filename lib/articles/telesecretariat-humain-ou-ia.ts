import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const telesecretariat: Article = {
  path: "/ressources/telesecretariat-humain-ou-ia",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/telesecretariat-humain-ou-ia.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux façons de prendre en charge les appels d'une agence, un secrétariat humain et un standard téléphonique IA, comparées sur la qualification et le suivi.",
  },
  title: "Télésecrétariat humain ou IA en immobilier | Rushh",
  description:
    "Secrétariat humain ou standard téléphonique IA : trois questions pour choisir comment prendre en charge les appels entrants d'une agence immobilière.",
  shortTitle: "Télésecrétariat humain ou standard IA",
  summary: "Trois questions pour choisir entre un secrétariat humain et un standard téléphonique IA.",
  h1: "Télésecrétariat humain ou standard téléphonique IA : que choisir en immobilier ?",
  answer:
    "Secrétariat humain ou standard téléphonique IA : le bon choix dépend de ce que vous attendez après le décrochage, pas du décrochage lui-même.",
  datePublished: "2026-10-28",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Votre agence ne peut pas décrocher à chaque appel. Deux solutions reviennent souvent : confier l'accueil à un secrétariat humain, ou à un standard téléphonique IA."
    },
    {
      "t": "p",
      "text": "Les deux répondent. La vraie question est ce que devient la demande ensuite."
    }
  ],
  sections: [
    {
      "id": "choix",
      "h2": "Trois questions pour choisir",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Quand les appels arrivent-ils ?"
        },
        {
          "t": "p",
          "text": "Un secrétariat humain répond selon ses [horaires et les prestations prévues](/ressources/permanence-telephonique-agence-immobiliere). Si vos appels arrivent le soir, le week-end ou en rafale pendant les visites, vérifiez ce qui est réellement couvert."
        },
        {
          "t": "h3",
          "text": "2. Que doit comprendre celui qui décroche ?"
        },
        {
          "t": "p",
          "text": "Une estimation, une visite, un dossier locatif et une urgence de copropriété ne demandent pas les mêmes questions. Plus votre métier est spécifique, plus la qualification compte."
        },
        {
          "t": "h3",
          "text": "3. Où retrouvez-vous la demande ensuite ?"
        },
        {
          "t": "p",
          "text": "Un message transmis par e-mail ou une note se perd vite. Chaque demande devrait pouvoir être retrouvée avec son motif, ses coordonnées, son résumé et son statut."
        },
        {
          "t": "statement",
          "text": "Les deux modèles ne s'excluent pas : certaines agences gardent un accueil humain pour certains appels et confient le reste à [un standard IA](/ressources/repondeur-ou-standard-ia-agence-immobiliere)."
        },
        {
          "t": "p",
          "text": "Avec un standard IA, pensez aussi à l'information des appelants : voir le [guide RGPD](/ressources/standard-telephonique-ia-immobilier-rgpd)."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un soir de semaine",
      "blocks": [
        {
          "t": "p",
          "text": "Il est 19 h 30. Un propriétaire appelle pour faire estimer son appartement, puis un acquéreur demande à visiter un bien vu en ligne."
        },
        {
          "t": "p",
          "text": "Un télésecrétariat humain comme un standard IA peuvent qualifier ces appels selon la prestation choisie. Pour ce même scénario, comparez les horaires couverts, les informations recueillies, la possibilité de réserver un rendez-vous, la transmission à l'équipe et le suivi de chaque demande."
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
          "text": "Il répond aux appels entrants 24 h/24 et 7 j/7, directement ou par renvoi d'appel. Il identifie les vendeurs, acquéreurs, locataires, bailleurs et prestataires, peut prendre un rendez-vous sur un agenda connecté ou transférer l'appel à un collaborateur."
        },
        {
          "t": "p",
          "text": "Chaque demande est classée dans la plateforme métier Rushh, avec ses coordonnées, son résumé et son statut."
        },
        {
          "t": "p",
          "text": "Notre équipe prend en charge la conception, la configuration, les connexions, les tests, l'installation, la maintenance et les ajustements. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Voyez comment Rushh prend vos appels",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh répond, qualifie et organise les demandes de votre agence."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Voyez comment Rushh prend vos appels", text: "", links: [] },
};
