import type { Article } from "./types";
import { demoSection, example, p, section, statement, ul } from "./blocks";

export const iaAppelsBailleurs: Article = {
  path: "/ressources/ia-telephone-appels-bailleurs",
  bare: true,
  category: "guides",
  title: "IA au téléphone pour les bailleurs : répondre sans saturer",
  description:
    "Suivi, démarches, travaux : comment une IA répond aux propriétaires bailleurs d'une agence et soulage le gestionnaire sans lui faire perdre le lien.",
  shortTitle: "Une IA pour les appels de bailleurs",
  summary: "Suivi, démarches et travaux : répondre aux propriétaires sans saturer le gestionnaire.",
  h1: "IA téléphonique pour bailleurs : recevoir les appels de propriétaires sans saturer le gestionnaire",
  answer:
    "Une IA peut accueillir le bailleur, noter l'objet de son appel et le transmettre au bon gestionnaire, en ne donnant que les informations prévues par l'agence.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Un propriétaire bailleur confie son bien à l'agence et attend un suivi : un loyer, un locataire, des travaux."),
    p("Ses appels sont moins nombreux que ceux des locataires, mais ils comptent : c'est lui qui renouvelle ou retire le mandat de gestion."),
  ],
  sections: [
    section(
      "motifs",
      "Pourquoi un bailleur appelle",
      ul([
        "Le suivi : loyers perçus, relances, relation avec le locataire.",
        "Les démarches : documents, déclarations, attestations.",
        "Les travaux : devis, intervention, validation.",
        "La délégation : changer d'interlocuteur ou de périmètre.",
      ]),
      statement("Un bailleur veut une réponse claire sur son bien, pas un standard qui le renvoie."),
    ),
    section(
      "exemple",
      "Exemple : un bailleur s'inquiète d'un loyer en retard",
      example(
        "Un bailleur appelle pour un loyer attendu. L'IA note son nom, le bien concerné et sa question, lui indique que le gestionnaire le rappellera, et transmet la demande avec un résumé. Elle ne communique pas d'information sur le dossier que l'agence n'a pas autorisée.",
      ),
    ),
    section(
      "regles",
      "Les règles à fixer",
      ul([
        "Quelles informations l'IA peut donner, et lesquelles restent réservées au gestionnaire.",
        "Qui rappelle, et dans quel délai.",
        "Comment reconnaître un bailleur de l'agence avant de le renseigner.",
      ]),
      p("Pour les locataires, voir [l'IA et les appels de locataires](/ressources/ia-telephone-appels-locataires). La méthode de qualification est dans [qualifier les appels de gestion locative](/ressources/qualifier-appels-locataires-bailleurs)."),
    ),
    section(
      "rushh",
      "Comment Rushh répond aux bailleurs",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il identifie le bailleur, recueille le motif et applique les règles définies avec votre agence : transmission ou transfert à un collaborateur. Chaque demande est classée dans la plateforme métier Rushh avec son résumé. Voir la solution [gestion locative](/solutions/gestion-locative) et [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Gardez le lien avec vos propriétaires", "Découvrez comment Rushh prend en charge les appels de vos bailleurs."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Gardez le lien avec vos propriétaires", text: "", links: [] },
};
