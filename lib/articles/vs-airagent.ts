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
    "AirAgent ou Rushh pour les appels d'une agence immobilière : accompagnement, connexions et suivi à comparer.",
  shortTitle: "Rushh ou AirAgent : que choisir ?",
  summary: "Accompagnement, connexions et suivi : les périmètres à comparer pour votre agence.",
  h1: "Rushh ou AirAgent : quelle solution pour les appels d'une agence immobilière ?",
  answer:
    "AirAgent et Rushh proposent chacun une offre pour les appels des agences immobilières ; comparez le périmètre de configuration, de connexion et de suivi proposé.",
  datePublished: "2026-10-31",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "AirAgent et Rushh répondent tous deux aux appels des agences : réponse à toute heure, qualification, rendez-vous."
    },
    {
      "t": "p",
      "text": "Comparez les modalités de prise en charge et leur adaptation aux besoins de votre agence."
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
          "text": "AirAgent présente aussi une [configuration par ses experts](https://airagent.fr/alternative-a-ringcentral/). La configuration autonome n'est donc pas une obligation pour le client."
        }
      ]
    },
    {
      "id": "criteres",
      "h2": "Les périmètres à comparer",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "Mise en place : qui conçoit les scénarios immobiliers, réalise les connexions et valide les tests avec l'agence ?",
            "Suivi : qui ajuste les règles, avec quel accompagnement et dans quel périmètre convenu ?"
          ]
        },
        {
          "t": "statement",
          "text": "Comparez ces éléments sur votre organisation et sur les prestations effectivement proposées."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : l'ajout d'un nouveau type d'appel",
      "blocks": [
        {
          "t": "p",
          "text": "Une agence veut distinguer les appels de gestion locative. Elle demande à chaque prestataire comment ce scénario sera conçu, testé puis ajusté."
        },
        {
          "t": "p",
          "text": "Chez Rushh, l'agence décrit le besoin et notre équipe prend en charge le scénario et ses tests. Chez AirAgent, elle vérifie le périmètre de l'accompagnement proposé."
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
          "label": "Tester le standard par téléphone",
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
