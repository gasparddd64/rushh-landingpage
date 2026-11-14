import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const standardSyndicUrgents: Article = {
  path: "/ressources/standard-syndic-appels-urgents",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/standard-syndic-appels-urgents.png",
    width: 1600,
    height: 840,
    alt: "Illustration : un appel urgent de copropriété pris en charge par un standard téléphonique IA, qui recueille les faits et sollicite la personne prévue.",
  },
  title: "Standard IA pour syndic : gérer les appels urgents | Rushh",
  description:
    "Appels urgents d'un syndic et standard téléphonique IA : recueillir les faits, appliquer vos consignes, solliciter la bonne personne.",
  shortTitle: "Standard IA et appels urgents de syndic",
  summary: "Recueillir les faits et solliciter la bonne personne selon vos consignes.",
  h1: "Comment gérer les appels urgents d'un syndic avec un standard téléphonique IA ?",
  answer:
    "Pour les appels urgents d'un syndic, le standard recueille les faits et sollicite la personne prévue par vos consignes ; il ne pose pas de diagnostic.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Une fuite dans les parties communes, un ascenseur bloqué, une porte d'immeuble qui ne ferme plus : les copropriétaires appellent quand ils en ont besoin, parfois la nuit."
    },
    {
      "t": "p",
      "text": "Un appel urgent mal acheminé coûte cher. Une organisation claire évite l'improvisation."
    }
  ],
  sections: [
    {
      "id": "methode",
      "h2": "Une organisation en trois temps",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Définir ce qui est urgent"
        },
        {
          "t": "p",
          "text": "Écrivez à l'avance les situations qui justifient de solliciter quelqu'un immédiatement, et celles qui peuvent attendre l'ouverture."
        },
        {
          "t": "h3",
          "text": "2. Recueillir les faits utiles"
        },
        {
          "t": "p",
          "text": "Immeuble, adresse, nature du problème, coordonnées de l'appelant. Le standard recueille ; il ne diagnostique pas et ne promet aucune intervention."
        },
        {
          "t": "h3",
          "text": "3. Solliciter la bonne personne"
        },
        {
          "t": "p",
          "text": "Selon votre consigne : astreinte, gestionnaire, prestataire désigné. En copropriété, le syndic peut agir en urgence pour les travaux nécessaires à la sauvegarde de l'immeuble, comme le prévoit la [loi du 10 juillet 1965](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000880200) : c'est à vous de définir qui décide."
        },
        {
          "t": "statement",
          "text": "Pour chaque situation urgente, la consigne dit qui solliciter, dans quel ordre, et quoi faire si la personne ne répond pas."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : une fuite dans les parties communes",
      "blocks": [
        {
          "t": "p",
          "text": "Un copropriétaire appelle un dimanche soir : de l'eau coule dans le hall."
        },
        {
          "t": "p",
          "text": "Le standard recueille l'adresse de l'immeuble, la nature du problème et les coordonnées. Selon la consigne, il sollicite l'astreinte et transmet le résumé au gestionnaire."
        }
      ]
    },
    {
      "id": "consignes",
      "h2": "Les consignes à écrire",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "La liste des situations urgentes.",
            "La personne à solliciter en premier.",
            "Ce que le standard dit à l'appelant, sans promettre d'intervention.",
            "Ce qui attend [l'ouverture du cabinet](/ressources/permanence-telephonique-agence-immobiliere)."
          ]
        },
        {
          "t": "p",
          "text": "Le standard applique ce que vous avez défini : il ne décide pas à votre place."
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
          "text": "Il répond 24 h/24 et 7 j/7, identifie les [copropriétaires](/solutions/syndics) et prestataires, recueille les informations utiles et suit les consignes définies avec votre cabinet : transfert d'appel en direct vers un humain, SMS ou e-mail, transmission au gestionnaire."
        },
        {
          "t": "p",
          "text": "Chaque demande est classée dans la plateforme métier Rushh, avec ses coordonnées, son résumé et son statut. Notre équipe prend en charge la configuration, les tests et le suivi. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Donnez une suite à chaque appel urgent",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh prend en charge les appels de votre cabinet de syndic."
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
      "label": "Légifrance : loi n° 65-557 du 10 juillet 1965",
      "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000880200",
      "usedFor": "Article 18 : pouvoir du syndic de faire procéder, en cas d'urgence, aux travaux nécessaires à la sauvegarde de l'immeuble."
    },
    {
      "label": "ANIL : travaux et majorités en copropriété",
      "url": "https://www.anil.org/votre-besoin/gerer-un-bien/copropriete/travaux-et-majorites/",
      "usedFor": "Travaux urgents nécessaires à la sauvegarde de l'immeuble, à l'initiative du syndic."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Donnez une suite à chaque appel urgent", text: "", links: [] },
};
