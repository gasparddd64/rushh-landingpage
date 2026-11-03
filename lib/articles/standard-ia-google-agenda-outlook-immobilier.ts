import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const standardIaAgenda: Article = {
  path: "/ressources/standard-ia-google-agenda-outlook-immobilier",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/standard-ia-google-agenda-outlook-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Illustration : le parcours d'un appel jusqu'au rendez-vous, du standard IA à l'agenda Google ou Outlook, avec confirmation à l'appelant.",
  },
  title: "Standard IA avec Google Agenda et Outlook : le parcours | Rushh",
  description:
    "Comment un standard téléphonique IA fixe un rendez-vous grâce à Google Agenda ou Outlook : consulter les disponibilités, réserver, confirmer.",
  shortTitle: "Standard IA, Google Agenda et Outlook",
  summary: "Consulter l'agenda, réserver, confirmer : le parcours d'un rendez-vous pris par un standard IA.",
  h1: "Comment un standard téléphonique IA s'appuie-t-il sur Google Agenda ou Outlook pour fixer un rendez-vous ?",
  answer:
    "Un standard IA fixe un rendez-vous en consultant l'agenda connecté, en proposant un créneau compatible avec vos règles, puis en le confirmant.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "[Un rendez-vous pris au téléphone](/ressources/prise-rendez-vous-ia-immobilier) n'a de valeur que s'il est fiable : le créneau proposé doit être réellement libre."
    },
    {
      "t": "p",
      "text": "C'est le rôle de l'agenda connecté."
    }
  ],
  sections: [
    {
      "id": "parcours",
      "h2": "Le parcours d'un appel jusqu'au rendez-vous",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Comprendre la demande"
        },
        {
          "t": "p",
          "text": "Estimation, visite, échange avec un négociateur : le motif détermine le type de rendez-vous et la personne concernée."
        },
        {
          "t": "h3",
          "text": "2. Consulter l'agenda"
        },
        {
          "t": "p",
          "text": "Le standard consulte les disponibilités de l'agenda connecté, par exemple Google Agenda ou Outlook, selon les durées et les horaires définis par l'agence."
        },
        {
          "t": "h3",
          "text": "3. Réserver et confirmer"
        },
        {
          "t": "p",
          "text": "Quand l'appelant choisit un créneau, celui-ci est enregistré dans l'agenda. Une confirmation peut être envoyée par SMS ou e-mail."
        },
        {
          "t": "h3",
          "text": "4. Transmettre si nécessaire"
        },
        {
          "t": "p",
          "text": "Si aucun créneau ne convient ou si la demande sort du cadre, elle est transmise à l'équipe avec les informations recueillies."
        },
        {
          "t": "statement",
          "text": "Un rendez-vous n'est annoncé comme pris que lorsqu'il est confirmé dans l'agenda."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : une estimation proposée pendant une visite",
      "blocks": [
        {
          "t": "p",
          "text": "Un propriétaire appelle pendant que le négociateur visite un bien. Le standard consulte l'agenda, propose deux créneaux d'estimation, et enregistre celui que le propriétaire choisit."
        },
        {
          "t": "p",
          "text": "Le négociateur retrouve le rendez-vous dans son agenda, avec le motif de l'appel."
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
          "text": "Rushh peut prendre des rendez-vous directement sur des agendas connectés, comme Google Agenda ou Outlook, selon les scénarios configurés et vos règles. Il peut envoyer une confirmation par SMS ou e-mail."
        },
        {
          "t": "p",
          "text": "Les demandes sont classées dans la plateforme métier Rushh, avec coordonnées, résumé et statut. Notre équipe prend en charge la configuration, les connexions et les tests. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Faites prendre vos rendez-vous sans interrompre vos journées",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh réserve des rendez-vous sur l'agenda de votre agence."
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
      "label": "Google Calendar API : Freebusy: query",
      "url": "https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query",
      "usedFor": "Consultation des plages occupées d'un agenda Google."
    },
    {
      "label": "Microsoft Graph : calendar: getSchedule",
      "url": "https://learn.microsoft.com/en-us/graph/api/calendar-getschedule?view=graph-rest-1.0",
      "usedFor": "Consultation des disponibilités d'un agenda Outlook."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Faites prendre vos rendez-vous sans interrompre vos journées", text: "", links: [] },
};
