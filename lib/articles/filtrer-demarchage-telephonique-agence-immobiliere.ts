import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const filtrerDemarchage: Article = {
  path: "/ressources/filtrer-demarchage-telephonique-agence-immobiliere",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/filtrer-demarchage-telephonique-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Illustration : un standard qui trie les appels d'une agence, entre vraies demandes à transmettre et démarchage à écarter, avec une règle de prudence.",
  },
  title: "Filtrer le démarchage téléphonique en agence immobilière | Rushh",
  description:
    "Comment filtrer le démarchage téléphonique d'une agence immobilière sans perdre un vrai appel : une règle simple, des questions utiles, un exemple.",
  shortTitle: "Filtrer le démarchage sans perdre un vrai appel",
  summary: "Trier le démarchage sans écarter un vendeur ou un acquéreur : la règle de prudence.",
  h1: "Comment filtrer le démarchage téléphonique d'une agence immobilière sans perdre un vrai appel ?",
  answer:
    "Pour filtrer le démarchage, identifiez le motif de chaque appel et, dans le doute, transmettez : mieux vaut un appel de trop qu'un vendeur perdu.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "[Les appels de démarchage](/ressources/permanence-telephonique-agence-immobiliere) prennent du temps à une équipe déjà sollicitée. Mais les écarter trop vite fait courir un risque : perdre un vrai vendeur ou un vrai acquéreur."
    },
    {
      "t": "p",
      "text": "Des règles explicites permettent de filtrer les appels. En cas de doute, la demande est conservée pour vérification humaine."
    }
  ],
  sections: [
    {
      "id": "methode",
      "h2": "Trois réflexes pour trier",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Demander le motif de l'appel"
        },
        {
          "t": "p",
          "text": "Une question courte suffit : « C'est pour quel sujet ? ». Un démarchage s'identifie souvent à son motif, pas à son numéro."
        },
        {
          "t": "h3",
          "text": "2. Laisser la place au doute"
        },
        {
          "t": "p",
          "text": "Si le motif est flou ou ressemble à une demande réelle, la demande est transmise. Le filtre ne doit jamais écarter un appel douteux sans le signaler."
        },
        {
          "t": "h3",
          "text": "3. Garder une trace"
        },
        {
          "t": "p",
          "text": "Les appels écartés comme les appels transmis doivent rester consultables, avec leur motif, pour corriger les règles."
        },
        {
          "t": "statement",
          "text": "Un bon filtre protège le temps de l'équipe sans jamais décider à la place d'un humain dans les cas incertains."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un appel ambigu",
      "blocks": [
        {
          "t": "p",
          "text": "Une personne appelle « au sujet d'un bien ». Elle peut être un prestataire qui démarche, ou un propriétaire qui hésite à vendre."
        },
        {
          "t": "p",
          "text": "Dans le doute, la demande est [qualifiée et transmise](/ressources/qualification-appels-vendeurs-acquereurs) avec son résumé : l'équipe tranche en quelques secondes."
        }
      ]
    },
    {
      "id": "jamais",
      "h2": "Les appels à ne jamais écarter",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "Un propriétaire que vous ne connaissez pas encore.",
            "Un numéro masqué ou inconnu.",
            "Un motif flou ou incomplet.",
            "Un locataire, un bailleur ou un prestataire déjà en relation avec l'agence."
          ]
        },
        {
          "t": "p",
          "text": "Dans ces cas, la demande est qualifiée et transmise, même si elle semble douteuse."
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
          "text": "Il identifie les vendeurs, acquéreurs, locataires, bailleurs et prestataires, recueille le motif de l'appel et applique les règles définies avec votre agence : transmettre, transférer ou classer."
        },
        {
          "t": "p",
          "text": "Les demandes à traiter sont consignées dans la plateforme métier Rushh, avec leurs coordonnées, leur résumé et leur statut. Vos équipes ne traitent que ce qui mérite leur attention."
        },
        {
          "t": "p",
          "text": "Notre équipe prend en charge la conception, la configuration, les connexions, les tests, l'installation, la maintenance et les ajustements. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Gardez votre équipe sur les vraies demandes",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh trie, qualifie et organise les appels de votre agence."
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
  cta: { title: "Gardez votre équipe sur les vraies demandes", text: "", links: [] },
};
