import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const agentVocalIa: Article = {
  path: "/ressources/agent-vocal-ia-immobilier",
  bare: true,
  category: "guides",
  title: "Agent vocal IA immobilier : fonctionnement et limites | Rushh",
  description:
    "Ce que fait un agent vocal IA quand un vendeur ou un acquéreur appelle une agence immobilière : déroulé d'un appel, limites et conseils de test.",
  shortTitle: "Agent vocal IA : comment ça marche ?",
  summary: "Le déroulé d'un appel, ce que l'IA fait et ne fait pas, et comment le tester.",
  h1: "Agent vocal IA immobilier : comment répond-il aux appels d'une agence ?",
  answer:
    "Un agent vocal IA décroche les appels d'une agence, comprend la demande, pose les questions utiles et organise la suite : rendez-vous, transfert ou transmission.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Agent vocal, assistant vocal, IA vocale, agent téléphonique : ces mots désignent la même famille d'outils, une IA qui parle au téléphone."),
    p("Dans une agence immobilière, elle sert surtout à ne plus laisser un vendeur ou un acquéreur sans réponse."),
  ],
  sections: [
    section(
      "deroule",
      "Ce qui se passe pendant un appel",
      ol([
        "L'agent décroche et annonce l'agence, sans temps d'attente.",
        "Il comprend le motif : estimation, visite, renseignement, question d'un locataire.",
        "Il pose les quelques questions utiles : bien concerné, projet, disponibilités, coordonnées.",
        "Il organise la suite : rendez-vous, transfert à un collaborateur ou transmission avec un résumé.",
      ]),
      statement("L'objectif n'est pas de bavarder, mais de faire avancer la demande dès le premier appel."),
    ),
    section(
      "exemple",
      "Exemple : un propriétaire appelle un jeudi à 18 h 40",
      example(
        "Le négociateur est en visite, l'agence est fermée. Un propriétaire explique qu'il souhaite faire estimer un appartement. L'agent lui pose trois questions, propose un créneau d'estimation et lui annonce qu'il sera rappelé. Dans l'agence, la demande attend, résumée et classée.",
      ),
    ),
    section(
      "limites",
      "Ses limites",
      ul([
        "Il applique les règles définies : sans règle pour une situation, il transmet à une personne.",
        "Il ne remplace pas un conseil d'agent sur un prix ou un projet complexe.",
        "L'appelant parle à une IA : l'annoncer clairement fait partie d'une bonne pratique.",
      ]),
      p("Un agent vocal se juge sur des appels réels : voyez comment [le tester avant de s'engager](/ressources/test-agent-vocal-ia-immobilier)."),
    ),
    section(
      "rushh",
      "Comment Rushh applique cette approche",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier. Voir [ce qu'est Rushh](/ressources/rushh-standard-telephonique-ia-immobilier)."),
      p(
        "Notre équipe prend en charge la conception, la configuration, les connexions, les tests, la maintenance et les ajustements. Rushh répond aux appels entrants, peut prendre un rendez-vous sur un agenda connecté ou transférer l'appel en direct, et classe chaque demande dans sa plateforme métier. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Écoutez comment votre agence serait décrochée", "Découvrez comment Rushh répond aux appels de vos vendeurs et de vos acquéreurs."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Écoutez comment votre agence serait décrochée", text: "", links: [] },
};
