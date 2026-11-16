import type { Article } from "./types";
import { demoSection, example, p, section, statement, ul } from "./blocks";

export const agentVocalCoproprietaires: Article = {
  path: "/ressources/agent-vocal-ia-appels-coproprietaires",
  bare: true,
  category: "guides",
  title: "Agent vocal IA et copropriétaires : du renseignement à l'urgence",
  description:
    "Comment un agent vocal IA répond aux copropriétaires d'un syndic : questions courantes, priorisation des signalements et transmission au gestionnaire.",
  shortTitle: "Une IA pour les appels de copropriétaires",
  summary: "Questions courantes, signalements et priorisation pour un syndic de copropriété.",
  h1: "Un agent vocal IA pour les appels des copropriétaires : du simple renseignement au signalement urgent",
  answer:
    "Un agent vocal peut recevoir les copropriétaires, noter leur demande, distinguer le courant de l'urgent et transmettre au gestionnaire selon les règles du syndic.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Un syndic reçoit des appels de natures très différentes : une question sur une assemblée générale, un ascenseur en panne, un dégât des eaux."),
    p("Le tri compte autant que la réponse."),
  ],
  sections: [
    section(
      "types",
      "Les appels à distinguer",
      ul([
        "Le renseignement : charges, assemblée générale, documents.",
        "Le signalement : parties communes, bruit, dégradation.",
        "L'urgence : fuite, panne bloquante, sécurité.",
        "Le suivi : état d'un dossier ou d'une intervention en cours.",
      ]),
      statement("Une même réponse pour tous les appels ne sert ni le copropriétaire ni le gestionnaire."),
    ),
    section(
      "exemple",
      "Exemple : un signalement en soirée",
      example(
        "Un copropriétaire signale une fuite dans les parties communes un mardi soir. L'agent note l'immeuble, la nature du problème et les coordonnées, puis applique la consigne d'urgence du syndic : prévenir le gestionnaire d'astreinte ou déclencher la procédure prévue.",
      ),
    ),
    section(
      "regles",
      "Les règles à prévoir",
      ul([
        "Ce qui est traité comme urgent, et qui est prévenu.",
        "Les informations que l'agent peut donner sur une copropriété.",
        "Les circuits propres à chaque immeuble ou portefeuille.",
      ]),
      p("Les urgences font l'objet d'un guide à part : [standard de syndic et appels urgents](/ressources/standard-syndic-appels-urgents). L'IA applique vos procédures sans les remplacer."),
    ),
    section(
      "rushh",
      "Comment Rushh répond aux copropriétaires",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il identifie l'appelant, recueille le motif et applique les règles définies avec votre cabinet : transmission, transfert à un collaborateur ou suivi. Les demandes sont classées dans la plateforme métier Rushh. Voir la solution pour les [syndics](/solutions/syndics) et [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Triez les appels de vos copropriétaires", "Découvrez comment Rushh prend en charge les appels de votre syndic."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Triez les appels de vos copropriétaires", text: "", links: [] },
};
