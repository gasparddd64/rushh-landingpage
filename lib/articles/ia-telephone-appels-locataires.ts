import type { Article } from "./types";
import { demoSection, example, p, section, statement, ul } from "./blocks";

export const iaAppelsLocataires: Article = {
  path: "/ressources/ia-telephone-appels-locataires",
  bare: true,
  category: "guides",
  title: "IA au téléphone pour les locataires en place | Rushh",
  description:
    "Demandes courantes, incidents et urgences : comment une IA répond aux locataires en cours de bail et oriente vers le bon gestionnaire.",
  shortTitle: "Une IA pour les appels de locataires",
  summary: "Demandes courantes, incidents et urgences d'un locataire en cours de bail.",
  h1: "IA au téléphone pour les locataires en place : demandes courantes, urgences et orientation",
  answer:
    "Une IA peut répondre au locataire en cours de bail, noter sa demande, appliquer la consigne prévue en cas d'urgence et orienter vers le bon gestionnaire.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Un locataire en place appelle rarement pour le plaisir : une panne, un document, une question sur son bail."),
    p("Le traitement doit être rapide, et surtout bien orienté. Ce guide concerne le locataire en cours de bail, pas le candidat qui visite."),
  ],
  sections: [
    section(
      "demandes",
      "Trois familles d'appels",
      ul([
        "L'information : quittance, date de loyer, contact du gestionnaire.",
        "L'incident : fuite, panne de chauffage, serrure bloquée.",
        "L'urgence : tout ce qui touche la sécurité des personnes ou du logement.",
      ]),
      statement("Chaque famille appelle une suite différente : c'est ce que l'IA doit distinguer dès les premiers mots."),
    ),
    section(
      "exemple",
      "Exemple : une panne un dimanche",
      example(
        "Un locataire signale une panne de chauffage un dimanche soir. L'IA note le logement, la nature du problème et les coordonnées, puis applique la consigne prévue par l'agence pour ce type de situation. Le gestionnaire retrouve la demande lundi, ou est prévenu tout de suite si la règle l'indique.",
      ),
    ),
    section(
      "regles",
      "Les règles à définir avec l'agence",
      ul([
        "Quels incidents sont urgents, et qui prévenir dans ce cas.",
        "Quelles informations l'IA peut donner, et lesquelles sont réservées à une personne.",
        "À qui transmettre selon le logement ou le portefeuille.",
      ]),
      p("Pour la méthode de qualification, voir [qualifier les appels de locataires et de bailleurs](/ressources/qualifier-appels-locataires-bailleurs). Pour les propriétaires, voir [l'IA et les appels de bailleurs](/ressources/ia-telephone-appels-bailleurs)."),
    ),
    section(
      "rushh",
      "Comment Rushh répond aux locataires",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il identifie le locataire, recueille le motif et applique les règles définies avec votre agence : transmission, transfert à un collaborateur ou suivi. Les demandes sont classées dans la plateforme métier Rushh, et peuvent être reliées à votre [logiciel de gestion](/integrations) lorsque son API et vos autorisations le permettent. Voir la solution [gestion locative](/solutions/gestion-locative).",
      ),
    ),
    demoSection("Donnez une réponse à chaque locataire", "Découvrez comment Rushh prend en charge les appels de vos locataires."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Donnez une réponse à chaque locataire", text: "", links: [] },
};
