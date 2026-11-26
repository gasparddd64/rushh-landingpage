import type { Article } from "./types";
import { demoSection, p, section, statement, ul } from "./blocks";

export const standardPetiteAgence: Article = {
  path: "/ressources/standard-ia-petite-agence-sans-assistante",
  bare: true,
  category: "guides",
  title: "Petite agence sans assistante : externaliser ses appels ?",
  description:
    "Une agence immobilière de 1 à 5 personnes peut-elle se passer d'assistante ? Les options pour couvrir les appels et ce qui reste à la charge de l'agence.",
  shortTitle: "Petite agence : faut-il externaliser les appels ?",
  summary: "Équipe de 1 à 5 : trois façons de couvrir les appels et ce qui reste à votre charge.",
  h1: "Petite agence immobilière sans assistante : faut-il externaliser ses appels ?",
  answer:
    "Dans une agence de 1 à 5 personnes, chaque appel pris interrompt quelqu'un ; externaliser consiste à confier la première réponse à un service, humain ou IA.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Dans une petite agence, le négociateur est aussi l'accueil. Chaque appel pris interrompt une visite, un rendez-vous ou un dossier."),
    p("La question n'est pas seulement de répondre, mais de choisir qui répond, et à quel moment."),
  ],
  sections: [
    section(
      "scenarios",
      "Trois façons de couvrir les appels",
      ul([
        "Vous répondez vous-même : vous gardez le contact, mais vous interrompez votre travail et manquez les appels pendant les visites.",
        "Une assistante ou un télésecrétariat humain : une voix humaine, selon les horaires et le contrat. Voir [télésecrétariat humain ou IA](/ressources/telesecretariat-humain-ou-ia).",
        "Un standard IA géré : il répond à toute heure et classe les demandes ; l'appelant sait qu'il parle à une IA.",
      ]),
      statement("Le bon choix dépend de ce que vous refusez de manquer : un appel de vendeur ou un simple renseignement ?"),
    ),
    section(
      "decision",
      "Ce qui reste à l'agence",
      ul([
        "Décrire vos priorités : quels appels doivent vous parvenir tout de suite.",
        "Valider les règles de transfert et les créneaux de rendez-vous.",
        "Rappeler ou recevoir les demandes préparées.",
      ]),
      p("Un négociateur indépendant a des besoins proches : voir le guide pour les [mandataires](/ressources/standard-telephonique-ia-mandataire-immobilier). Pour les horaires de réponse, voir la [permanence téléphonique](/ressources/permanence-telephonique-agence-immobiliere). Pour un service réglé à votre place, voir le [standard IA sur mesure](/ressources/standard-telephonique-ia-sur-mesure-immobilier) ; pour écarter les appels commerciaux, [filtrer le démarchage](/ressources/filtrer-demarchage-telephonique-agence-immobiliere)."),
    ),
    section(
      "rushh",
      "Comment Rushh convient à une petite agence",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "L'équipe Rushh prend en charge la conception, la configuration, les tests et le suivi : l'agence n'a rien à paramétrer. Rushh peut répondre directement ou intervenir quand personne ne décroche, proposer un rendez-vous sur un agenda connecté et transférer l'appel en direct. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Retrouvez du temps sans perdre d'appels", "Découvrez comment Rushh répond aux appels de votre agence pendant que vous travaillez."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Retrouvez du temps sans perdre d'appels", text: "", links: [] },
};
