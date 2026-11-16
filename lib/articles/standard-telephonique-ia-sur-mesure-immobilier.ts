import type { Article } from "./types";
import { demoSection, example, ol, p, section, statement, ul } from "./blocks";

export const standardSurMesure: Article = {
  path: "/ressources/standard-telephonique-ia-sur-mesure-immobilier",
  bare: true,
  category: "guides",
  title: "Standard téléphonique IA sur mesure pour une agence | Rushh",
  description:
    "Un standard téléphonique IA prêt à fonctionner, sans le paramétrer soi-même : les étapes que l'équipe prend en charge pour une agence immobilière.",
  shortTitle: "Standard IA sur mesure : ce que fait l'équipe",
  summary: "Audit, règles, tests, suivi : ce qu'un service géré fait à votre place.",
  h1: "Standard téléphonique IA sur mesure : que fait l'équipe à votre place ?",
  answer:
    "Un standard IA sur mesure est installé, réglé et suivi par un prestataire : l'agence décrit ses besoins, valide les règles et n'a rien à paramétrer.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Un logiciel de standard IA en libre-service demande du temps : écrire les scénarios, tester, ajuster."),
    p("Un service sur mesure déplace ce travail vers le prestataire. Encore faut-il savoir ce qu'il recouvre."),
  ],
  sections: [
    section(
      "etapes",
      "Les étapes du travail de l'équipe",
      ol([
        "Écouter vos appels types : qui appelle, pourquoi, à quel moment.",
        "Écrire les règles : questions posées, rendez-vous proposés, cas de transfert.",
        "Configurer le standard et les connexions utiles : agenda, logiciel métier.",
        "Tester avec des appels fictifs et corriger avant d'ouvrir la ligne.",
        "Superviser les premiers appels réels.",
        "Maintenir et ajuster quand l'agence évolue.",
      ]),
      statement("Le sur mesure n'est pas un réglage de plus : c'est un travail continu, fait par quelqu'un d'autre."),
    ),
    section(
      "exemple",
      "Exemple : l'agence ajoute la gestion locative",
      example(
        "Une agence de transaction reprend un portefeuille de gestion locative. Elle décrit les nouveaux appels : fuites, quittances, états des lieux. Le prestataire adapte les règles, teste les nouveaux parcours, puis suit les premiers appels.",
      ),
    ),
    section(
      "charge",
      "Ce qui reste à votre charge",
      ul([
        "Décrire votre organisation et vos priorités.",
        "Valider les règles et les tests.",
        "Prévenir l'équipe de ce qui change dans la façon de traiter les appels.",
      ]),
      p("Pour comparer avec le libre-service et le télésecrétariat, voir [externaliser ses appels](/ressources/externalisation-appels-telephoniques-agence-immobiliere)."),
    ),
    section(
      "rushh",
      "Comment Rushh le met en pratique",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Notre équipe prend en charge la conception, la personnalisation, les connexions, les tests, l'installation, le suivi, la maintenance et les ajustements. Les connexions dépendent des API et des autorisations disponibles. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Voyez ce que serait votre standard", "Découvrez comment Rushh adapte le standard à l'organisation de votre agence."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Voyez ce que serait votre standard", text: "", links: [] },
};
