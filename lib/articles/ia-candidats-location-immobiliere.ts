import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const iaCandidatsLocation: Article = {
  path: "/ressources/ia-candidats-location-immobiliere",
  bare: true,
  category: "guides",
  title: "IA et candidats à la location : répondre aux appels d'annonces",
  description:
    "Comment une IA répond aux candidats locataires qui appellent sur une annonce : disponibilité, critères, visite et dossier, avec les garde-fous RGPD.",
  shortTitle: "Une IA pour les candidats à la location",
  summary: "Annonce, critères, visite, dossier : répondre aux candidats locataires.",
  h1: "IA pour candidatures locatives : répondre aux appels sur les annonces de location",
  answer:
    "Une IA peut vérifier la disponibilité du logement, noter les critères du candidat et proposer une visite, sans décider elle-même de l'éligibilité du dossier.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Le candidat à la location n'est pas le locataire en place : il ne connaît pas l'agence et veut savoir, vite, si le logement est encore disponible."),
    p("Sur une annonce attractive, les appels s'enchaînent en quelques heures."),
  ],
  sections: [
    section(
      "parcours",
      "Le parcours d'un appel de candidat",
      ol([
        "L'annonce visée : adresse ou référence du logement.",
        "La disponibilité : le logement est-il encore libre, à quelle date ?",
        "Les critères : situation, date d'entrée souhaitée, nombre d'occupants.",
        "La suite : une visite proposée, ou les consignes pour déposer un dossier.",
      ]),
      statement("L'IA organise le premier contact : la décision sur le dossier reste à l'agence."),
    ),
    section(
      "exemple",
      "Exemple : un appel sur un studio",
      example(
        "Un candidat appelle pour un studio publié le matin même. L'IA confirme l'annonce visée, note sa date d'entrée souhaitée, lui propose une visite collective et lui indique comment constituer son dossier. L'agence retrouve les coordonnées et la fiche de l'appel.",
      ),
    ),
    section(
      "rgpd",
      "Les garde-fous",
      ul([
        "Ne demander que les informations utiles à ce stade : pas de pièces justificatives par téléphone.",
        "Informer l'appelant qu'il parle à une IA et de l'usage de ses données.",
        "Ne pas annoncer d'acceptation ou de refus : l'IA ne se prononce pas sur un dossier.",
      ]),
      p("Voir le guide [IA et RGPD](/ressources/standard-telephonique-ia-immobilier-rgpd). Pour les appels des locataires en place, voir [l'IA et les locataires](/ressources/ia-telephone-appels-locataires)."),
    ),
    section(
      "rushh",
      "Comment Rushh traite les candidats",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il identifie le candidat, recueille ses critères, peut proposer une visite sur votre agenda connecté, envoyer une confirmation par SMS ou e-mail et transférer l'appel en direct lorsque la règle le prévoit. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Répondez aux candidats pendant que l'annonce est fraîche", "Découvrez comment Rushh prend en charge les appels sur vos annonces de location."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Répondez aux candidats pendant que l'annonce est fraîche", text: "", links: [] },
};
