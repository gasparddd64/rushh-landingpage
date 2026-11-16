import type { Article } from "./types";
import { demoSection, ol, p, section, statement, ul } from "./blocks";

export const testAgentVocal: Article = {
  path: "/ressources/test-agent-vocal-ia-immobilier",
  bare: true,
  category: "guides",
  title: "Tester un agent vocal IA immobilier : 8 appels scénarios",
  description:
    "Un protocole simple pour tester un agent vocal ou un standard IA avant de l'adopter : huit appels à passer et une grille de vérification.",
  shortTitle: "Tester un agent vocal IA : 8 appels",
  summary: "Huit appels à passer et une grille pour juger un agent vocal avant de s'engager.",
  h1: "Comment tester un agent vocal IA immobilier avant de l'adopter : 8 appels scénarios",
  answer:
    "Testez un agent vocal avec huit appels réalistes (vendeur pressé, annonce, locataire, urgence, silence, accent, question imprévue, transfert) et notez ce que vous observez.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Une démonstration bien préparée se passe toujours bien. Ce qui compte, c'est la façon dont l'agent réagit aux appels qu'il n'attend pas."),
    p("Voici huit appels à passer vous-même, et ce qu'il faut regarder."),
  ],
  sections: [
    section(
      "scenarios",
      "Les huit appels à passer",
      ol([
        "Le vendeur pressé, qui veut un négociateur tout de suite.",
        "L'acquéreur qui donne une référence d'annonce, puis la corrige.",
        "Le locataire qui signale une panne.",
        "L'urgence : une fuite ou une porte bloquée.",
        "Le silence : vous ne répondez pas pendant quelques secondes.",
        "L'accent ou une phrase mal articulée.",
        "La demande imprévue, sans rapport avec l'agence.",
        "Le transfert : vous demandez à parler à une personne.",
      ]),
    ),
    section(
      "grille",
      "Ce qu'il faut observer",
      ul([
        "Le délai avant la première réponse et la fluidité des échanges.",
        "L'annonce claire que l'appelant parle à une IA.",
        "La justesse des informations notées dans la fiche de l'appel.",
        "Le comportement face à l'imprévu : il transmet ou il invente ?",
        "La qualité du transfert : l'humain reçoit-il un résumé ?",
      ]),
      statement("Notez ce que vous observez plutôt qu'un score : c'est la comparaison qui compte."),
    ),
    section(
      "suite",
      "Pour aller plus loin",
      p("Le guide [réceptionniste IA](/ressources/receptionniste-ia-agence-immobiliere) détaille comment tester un service, et [choisir un standard](/ressources/choisir-standard-telephonique-ia-immobilier) propose les critères de décision."),
    ),
    section(
      "rushh",
      "Tester Rushh",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier. Notre équipe règle le standard avec vous, teste les parcours et ajuste ensuite. Voir [l'offre Rushh](/offre)."),
    ),
    demoSection("Passez vos propres appels", "Testez Rushh avec les scénarios de cette liste."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Passez vos propres appels", text: "", links: [] },
};
