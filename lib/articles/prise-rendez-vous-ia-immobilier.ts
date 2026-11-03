import type { Article } from "./types";

/** Texte validé : à reproduire tel quel, sans reformulation (voir `bare` dans types.ts). */
export const priseRendezVous: Article = {
  path: "/ressources/prise-rendez-vous-ia-immobilier",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/prise-rendez-vous-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Un appel vendeur et un appel acquéreur passent par la vérification de l'agenda : soit la disponibilité est vérifiée et le créneau enregistré, soit la demande est transmise à l'équipe.",
  },
  title: "Prise de rendez-vous par IA dans l'immobilier | Rushh",
  description:
    "Comprendre la demande, consulter l'agenda, confirmer le rendez-vous : comment un standard téléphonique IA organise les rendez-vous d'une agence.",
  shortTitle: "Prise de rendez-vous par IA en immobilier",
  summary: "Comprendre la demande, trouver un créneau, confirmer : comment l'IA prend des rendez-vous en agence.",
  h1: "Prise de rendez-vous par IA : comment ça fonctionne dans l'immobilier ?",
  answer:
    "Un standard téléphonique IA permet de transformer une demande entrante en rendez-vous, sans interrompre les agents immobiliers.",
  datePublished: "2026-10-29",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Un propriétaire appelle pour faire estimer son appartement. Un acquéreur souhaite visiter un bien. Mais votre équipe est en rendez-vous, en déplacement ou déjà au téléphone."
    },
    {
      "t": "p",
      "text": "Dans ces situations, attendre qu'un négociateur soit disponible pour rappeler peut ralentir la prise de rendez-vous, voire faire perdre une opportunité."
    },
    {
      "t": "p",
      "text": "Un standard téléphonique IA permet de transformer une demande entrante en rendez-vous, sans interrompre les agents immobiliers."
    },
    {
      "t": "p",
      "text": "Mais comment fonctionne réellement cette prise de rendez-vous automatisée ?"
    }
  ],
  sections: [
    {
      "id": "fonctionnement",
      "h2": "Comment une IA peut-elle prendre des rendez-vous ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une prise de rendez-vous efficace repose sur trois étapes : comprendre la demande, trouver un créneau disponible et confirmer le rendez-vous."
        },
        {
          "t": "h3",
          "text": "1. Comprendre et qualifier la demande"
        },
        {
          "t": "p",
          "text": "Avant de proposer un créneau, le standard doit identifier pourquoi la personne appelle."
        },
        {
          "t": "p",
          "text": "Pour une [estimation immobilière](/ressources/appel-vendeur-estimation-immobiliere), il peut recueillir le type de bien, sa localisation et le projet du propriétaire."
        },
        {
          "t": "p",
          "text": "Pour une visite, il doit identifier le bien concerné, comprendre la demande de l'acquéreur et recueillir ses disponibilités."
        },
        {
          "t": "p",
          "text": "Cette [qualification](/ressources/qualification-appels-vendeurs-acquereurs) permet d'orienter l'appel vers le bon type de rendez-vous, sans poser des questions inutiles."
        },
        {
          "t": "h3",
          "text": "2. Consulter les disponibilités de l'agenda"
        },
        {
          "t": "p",
          "text": "Une fois le besoin identifié, le standard consulte les disponibilités de l'[agenda connecté](/ressources/standard-ia-google-agenda-outlook-immobilier)."
        },
        {
          "t": "p",
          "text": "Il peut ainsi proposer un créneau adapté au type de rendez-vous : estimation, visite ou échange avec un négociateur."
        },
        {
          "t": "p",
          "text": "Les horaires, les durées et les personnes concernées dépendent de l'organisation de l'agence."
        },
        {
          "t": "p",
          "text": "L'objectif est de proposer un rendez-vous compatible avec les disponibilités réelles de l'équipe."
        },
        {
          "t": "h3",
          "text": "3. Réserver et confirmer le rendez-vous"
        },
        {
          "t": "p",
          "text": "Lorsque l'appelant choisit un créneau disponible, celui-ci est enregistré dans l'agenda."
        },
        {
          "t": "p",
          "text": "Une confirmation peut ensuite être envoyée par SMS ou par e-mail, avec les informations utiles : date, heure et objet du rendez-vous."
        },
        {
          "t": "p",
          "text": "L'équipe dispose également du contexte de la demande pour préparer l'échange."
        },
        {
          "t": "p",
          "text": "Si la situation nécessite l'intervention d'un collaborateur ou qu'aucun créneau ne peut être confirmé, le standard peut transmettre la demande avec les informations recueillies."
        },
        {
          "t": "statement",
          "text": "Le principe : réserver directement lorsque c'est possible, et organiser une suite claire dans les autres situations."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un propriétaire appelle pendant une visite",
      "blocks": [
        {
          "t": "p",
          "text": "Vous êtes en visite avec un acquéreur lorsqu'un propriétaire contacte votre agence pour faire estimer sa maison."
        },
        {
          "t": "p",
          "text": "Plutôt que de tomber sur un répondeur, il échange avec un standard IA."
        },
        {
          "t": "p",
          "text": "Le standard identifie sa demande, recueille les informations utiles sur le bien et consulte les disponibilités de votre agenda."
        },
        {
          "t": "p",
          "text": "Le propriétaire choisit un créneau d'estimation, le rendez-vous est enregistré et une confirmation lui est envoyée."
        },
        {
          "t": "p",
          "text": "Pendant ce temps, vous poursuivez votre visite sans interruption."
        },
        {
          "t": "statement",
          "text": "Résultat : le propriétaire a obtenu un rendez-vous et vous retrouvez les informations nécessaires pour préparer votre estimation."
        },
        {
          "t": "p",
          "text": "Cet exemple illustre un parcours possible lorsque l'agenda est connecté et que la réservation est autorisée."
        }
      ]
    },
    {
      "id": "pourquoi",
      "h2": "Pourquoi automatiser les rendez-vous immobiliers ?",
      "blocks": [
        {
          "t": "p",
          "text": "La prise de rendez-vous ne consiste pas uniquement à remplir un agenda."
        },
        {
          "t": "p",
          "text": "Elle permet aussi de :"
        },
        {
          "t": "ul",
          "items": [
            "Répondre plus rapidement aux vendeurs et aux acquéreurs.",
            "Éviter les rappels inutiles pour trouver un créneau.",
            "Réduire les interruptions pendant les visites et les estimations.",
            "Qualifier les demandes avant qu'elles arrivent aux négociateurs.",
            "Organiser le suivi commercial des opportunités entrantes."
          ]
        },
        {
          "t": "p",
          "text": "L'intérêt est de faire avancer les projets dès le premier appel, tout en laissant les professionnels se concentrer sur leur activité."
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Comment Rushh prend en charge vos rendez-vous",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."
        },
        {
          "t": "p",
          "text": "Il applique ce fonctionnement aux appels entrants de votre agence."
        },
        {
          "t": "p",
          "text": "Lorsqu'un vendeur ou un acquéreur appelle, Rushh peut identifier son projet, recueillir les informations utiles, consulter votre agenda connecté et réserver un rendez-vous selon vos règles."
        },
        {
          "t": "p",
          "text": "Il peut ensuite envoyer une confirmation par SMS ou e-mail."
        },
        {
          "t": "p",
          "text": "Et la prise de rendez-vous ne s'arrête pas à votre calendrier."
        },
        {
          "t": "p",
          "text": "Dans la plateforme métier Rushh, les demandes sont organisées par type d'opportunité : vendeur, acquéreur, locataire, bailleur ou autre interlocuteur."
        },
        {
          "t": "p",
          "text": "Vous retrouvez les coordonnées de l'appelant, le résumé de sa demande, son statut et les informations utiles à son suivi."
        },
        {
          "t": "p",
          "text": "Rushh peut également se connecter à votre [logiciel immobilier](/integrations) lorsque son API et les autorisations disponibles le permettent."
        },
        {
          "t": "h3",
          "text": "Une installation entièrement prise en charge"
        },
        {
          "t": "p",
          "text": "Notre équipe configure les scénarios, les règles de rendez-vous, les connexions nécessaires et les tests."
        },
        {
          "t": "p",
          "text": "Le standard est ensuite suivi et ajusté en fonction du fonctionnement de votre agence."
        },
        {
          "t": "p",
          "text": "Vous n'avez pas à configurer vous-même un système de réservation : Rushh s'en charge."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Obtenez des rendez-vous sans interrompre vos journées",
      "blocks": [
        {
          "t": "p",
          "text": "Vos prochains vendeurs et acquéreurs peuvent appeler pendant que vous êtes déjà occupé."
        },
        {
          "t": "p",
          "text": "Avec une prise de rendez-vous automatisée, leurs demandes peuvent avancer sans attendre votre disponibilité."
        },
        {
          "t": "button",
          "label": "Tester le standard par téléphone",
          "href": "/demonstrations"
        },
        {
          "t": "p",
          "text": "Découvrez comment Rushh qualifie les appels et organise les rendez-vous pour votre agence immobilière."
        }
      ]
    }
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Obtenez des rendez-vous sans interrompre vos journées", text: "", links: [] },
};
