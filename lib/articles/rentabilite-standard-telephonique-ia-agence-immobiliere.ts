import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const rentabiliteStandard: Article = {
  path: "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Illustration : de l'estimation des appels non récupérés à la rentabilité nette d'un standard téléphonique IA : rendez-vous et affaires, marge par affaire, coût de la solution.",
  },
  title: "Un standard téléphonique IA est-il rentable pour une agence ? | Rushh",
  description:
    "Un standard téléphonique IA est-il rentable pour votre agence ? Gain potentiel, rentabilité nette, marge par affaire : méthode simple, exemple fictif.",
  shortTitle: "Un standard IA est-il rentable ?",
  summary: "Gain potentiel, rentabilité nette : une méthode simple, avec un exemple fictif.",
  h1: "Un standard téléphonique IA est-il rentable pour une agence immobilière ?",
  answer:
    "La rentabilité d'un standard téléphonique IA se calcule à partir de vos propres appels : le gain potentiel (appels non récupérés, marge par affaire), puis la rentabilité nette une fois le coût de la solution retranché.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Personne ne peut promettre une rentabilité à votre place : elle dépend de vos appels, de vos horaires et de la valeur de vos affaires."
    },
    {
      "t": "p",
      "text": "Mais on peut l'estimer, en distinguant deux notions : le gain potentiel, puis la rentabilité nette, une fois le coût de la solution retranché."
    }
  ],
  sections: [
    {
      "id": "calcul",
      "h2": "Un calcul simple en quatre étapes",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Compter les appels non récupérés"
        },
        {
          "t": "p",
          "text": "Sur quelques semaines, relevez les [appels commerciaux restés sans suite](/ressources/appels-manques-immobilier) : estimation, projet de vente, visite."
        },
        {
          "t": "h3",
          "text": "2. Estimer ce qui aurait pu aboutir"
        },
        {
          "t": "p",
          "text": "Quelle part de ces appels aurait débouché sur un rendez-vous, puis quelle part des rendez-vous devient une affaire ? Utilisez vos propres taux."
        },
        {
          "t": "h3",
          "text": "3. Retenir la marge par affaire"
        },
        {
          "t": "p",
          "text": "Retenez la marge que dégage une affaire pour votre agence, et non son chiffre d'affaires, sans extrapoler."
        },
        {
          "t": "h3",
          "text": "4. Retrancher le coût de la solution"
        },
        {
          "t": "p",
          "text": "Comparez le gain potentiel au [coût de la solution](/ressources/cout-standard-telephonique-ia-immobilier) sur la même période : la différence est la rentabilité nette."
        },
        {
          "t": "statement",
          "text": "Gain potentiel = appels non récupérés × part qui aboutit à un rendez-vous × part de rendez-vous qui devient une affaire × marge par affaire."
        },
        {
          "t": "statement",
          "text": "Rentabilité nette = gain potentiel − coût de la solution."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple entièrement fictif",
      "blocks": [
        {
          "t": "p",
          "text": "Les chiffres ci-dessous sont inventés, uniquement pour illustrer le calcul : remplacez-les par les vôtres."
        },
        {
          "t": "ul",
          "items": [
            "20 appels commerciaux non récupérés sur un mois.",
            "Un appel sur quatre aurait débouché sur un rendez-vous : 5 rendez-vous.",
            "Un rendez-vous sur cinq devient une affaire : 1 affaire."
          ]
        },
        {
          "t": "p",
          "text": "Gain potentiel du mois : 1 affaire × la marge par affaire (M). Rentabilité nette : M − le coût du mois (C). Si M dépasse C, le calcul est positif ; sinon, il ne l'est pas."
        },
        {
          "t": "p",
          "text": "Le gain potentiel est une estimation, pas un gain réalisé."
        }
      ]
    },
    {
      "id": "pieges",
      "h2": "Trois erreurs à éviter",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "Compter tous les appels manqués comme des affaires perdues.",
            "Extrapoler à partir d'une semaine exceptionnelle.",
            "Comparer des périodes qui ne sont pas équivalentes."
          ]
        },
        {
          "t": "p",
          "text": "Une estimation prudente, fondée sur quelques semaines d'appels, vaut mieux qu'un chiffre spectaculaire."
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Comment Rushh aide à récupérer ces appels",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."
        },
        {
          "t": "p",
          "text": "Il répond 24 h/24 et 7 j/7, qualifie la demande, peut proposer un rendez-vous sur un agenda connecté ou transférer l'appel à un collaborateur. Chaque demande est classée dans la plateforme métier Rushh, avec ses coordonnées, son résumé et son statut."
        },
        {
          "t": "p",
          "text": "La tarification est une proposition personnalisée, définie avec votre agence : voir [l'offre Rushh](/offre). Rushh ne promet aucun résultat commercial."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Faites le calcul avec vos propres appels",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh prend en charge les appels entrants de votre agence."
        },
        {
          "t": "button",
          "label": "Réserver une démonstration",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Faites le calcul avec vos propres appels", text: "", links: [] },
};
