import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const qualifierLocatairesBailleurs: Article = {
  path: "/ressources/qualifier-appels-locataires-bailleurs",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/qualifier-appels-locataires-bailleurs.png",
    width: 1600,
    height: 840,
    alt: "Illustration : les appels d'un locataire et d'un bailleur en gestion locative, qualifiés puis orientés vers le bon gestionnaire.",
  },
  title: "Qualifier les appels de locataires et de bailleurs | Rushh",
  description:
    "Comment qualifier les appels de locataires et de bailleurs en gestion locative : identifier le motif, recueillir l'essentiel, orienter.",
  shortTitle: "Qualifier les appels de gestion locative",
  summary: "Locataire ou bailleur : identifier le motif, recueillir l'essentiel, orienter.",
  h1: "Comment qualifier les appels des locataires et des bailleurs en gestion locative ?",
  answer:
    "En gestion locative, qualifier un appel consiste à identifier l'appelant et son motif, recueillir l'essentiel et orienter vers le bon gestionnaire.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "En gestion locative, les appels se ressemblent peu : un locataire signale un problème, un bailleur demande où en est son dossier, un candidat veut visiter."
    },
    {
      "t": "p",
      "text": "Les traiter de la même façon fait perdre du temps à tout le monde."
    }
  ],
  sections: [
    {
      "id": "methode",
      "h2": "Trois étapes pour qualifier",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Identifier l'appelant"
        },
        {
          "t": "p",
          "text": "Locataire, bailleur, candidat ou prestataire : la suite dépend de la réponse."
        },
        {
          "t": "h3",
          "text": "2. Comprendre le motif"
        },
        {
          "t": "p",
          "text": "Panne, loyer, visite, état des lieux, dossier : un motif précis permet d'orienter vers le bon gestionnaire."
        },
        {
          "t": "h3",
          "text": "3. Recueillir seulement l'essentiel"
        },
        {
          "t": "p",
          "text": "Le logement concerné, les coordonnées et les éléments utiles au traitement : rien de plus que ce qui sert la suite."
        },
        {
          "t": "statement",
          "text": "Une demande claire se traite plus vite qu'un message à décrypter."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : une fuite signalée par un locataire",
      "blocks": [
        {
          "t": "p",
          "text": "Un locataire appelle pour une fuite dans sa salle de bains pendant que le gestionnaire est en rendez-vous."
        },
        {
          "t": "p",
          "text": "La demande est qualifiée : logement, nature du problème, coordonnées. Elle est transmise au [gestionnaire concerné](/solutions/gestion-locative), ou suit la consigne prévue pour les situations urgentes."
        }
      ]
    },
    {
      "id": "motifs",
      "h2": "Les motifs à distinguer",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "Panne ou urgence dans le logement.",
            "Loyer, quittance ou question administrative.",
            "Visite et candidature.",
            "État des lieux et fin de bail.",
            "Question d'un bailleur sur son bien ou son dossier."
          ]
        },
        {
          "t": "p",
          "text": "Chaque motif appelle une suite différente : c'est ce qui rend la qualification utile."
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
          "text": "Il identifie les locataires, bailleurs et prestataires, recueille le motif et les informations utiles, puis applique les règles définies avec votre agence : transmission, transfert à un collaborateur ou suivi."
        },
        {
          "t": "p",
          "text": "Chaque demande est organisée dans la plateforme métier Rushh, avec ses coordonnées, son résumé et son statut. Rushh peut aussi se connecter à votre [logiciel de gestion](/integrations) lorsque son API et vos autorisations le permettent. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Donnez un interlocuteur à chaque appel de gestion locative",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh qualifie les appels de vos locataires et de vos bailleurs."
        },
        {
          "t": "button",
          "label": "Tester le standard par téléphone",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Donnez un interlocuteur à chaque appel de gestion locative", text: "", links: [] },
};
