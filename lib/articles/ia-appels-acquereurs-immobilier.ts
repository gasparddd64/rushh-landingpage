import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const iaAppelsAcquereurs: Article = {
  path: "/ressources/ia-appels-acquereurs-immobilier",
  bare: true,
  category: "guides",
  title: "IA et appels d'acquéreurs : qualifier une demande de visite",
  description:
    "Comment une IA traite l'appel d'un acquéreur sur une annonce : bien concerné, informations utiles et rendez-vous de visite sans interrompre le négociateur.",
  shortTitle: "Une IA pour les appels d'acquéreurs",
  summary: "De l'appel sur une annonce à la visite : qualifier sans interrompre le négociateur.",
  h1: "Une IA qui répond aux acquéreurs : qualifier une demande de visite sans interrompre le négociateur",
  answer:
    "Une IA peut identifier le bien visé par l'acquéreur, recueillir quelques informations utiles et proposer une visite, ou transmettre la demande au négociateur.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("L'appel d'un acquéreur arrive souvent pendant une visite, quand le négociateur ne peut pas répondre."),
    p("Voici comment une IA traite cet appel, et jusqu'où elle va."),
  ],
  sections: [
    section(
      "parcours",
      "Du bien visé à la visite",
      ol([
        "Le bien concerné : l'IA demande la référence ou l'adresse de l'annonce.",
        "Le projet : achat ou investissement, délai, secteur recherché.",
        "Les informations utiles : budget et financement, tels que l'acquéreur les indique.",
        "La suite : une visite proposée sur l'agenda, ou la demande transmise au négociateur.",
      ]),
      p("Les informations sur le budget sont déclaratives : l'IA les note, elle ne juge pas la solvabilité de l'acquéreur."),
    ),
    section(
      "exemple",
      "Exemple : l'appel sur une annonce un samedi matin",
      example(
        "Un acquéreur appelle pour un trois-pièces vu en ligne. L'IA identifie l'annonce, note son projet et son financement, et lui propose deux créneaux de visite. Le négociateur, en visite ailleurs, retrouve la demande en fin de matinée."
      ),
    ),
    section(
      "garde-fous",
      "Les garde-fous",
      ul([
        "Si le bien n'est plus disponible, l'IA le dit selon les informations dont elle dispose, ou transmet la question.",
        "Une question sur le prix ou la négociation revient au négociateur.",
        "Chaque demande est enregistrée avec ses coordonnées pour être suivie.",
      ]),
      p("Les appels qui arrivent après la publication d'une annonce sont détaillés dans le guide sur les [appels des portails immobiliers](/ressources/appels-annonces-seloger-portails-immobiliers). Quand plusieurs acquéreurs appellent ensemble, voir les [pics d'appels après une annonce](/ressources/appels-simultanes-annonce-immobiliere) ; côté propriétaires, les [appels vendeurs](/ressources/ia-appels-vendeurs-immobilier)."),
    ),
    section(
      "rushh",
      "Comment Rushh traite l'appel d'un acquéreur",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il qualifie l'acquéreur, peut proposer un rendez-vous sur un agenda connecté, transférer l'appel en direct ou envoyer une confirmation par SMS ou e-mail, selon les règles définies avec votre agence. Voir [qualifier vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs) et [l'offre Rushh](/offre).",
      ),
      statement("Le négociateur garde le contact commercial : l'IA prépare le terrain."),
    ),
    demoSection("Gardez vos acquéreurs, même pendant une visite", "Découvrez comment Rushh répond aux acquéreurs pendant que votre équipe est en visite."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Gardez vos acquéreurs, même pendant une visite", text: "", links: [] },
};
