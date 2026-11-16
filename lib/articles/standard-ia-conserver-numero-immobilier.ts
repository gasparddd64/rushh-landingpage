import type { Article } from "./types";
import { demoSection, ol, p, section, statement, ul } from "./blocks";

export const standardConserverNumero: Article = {
  path: "/ressources/standard-ia-conserver-numero-immobilier",
  bare: true,
  category: "guides",
  title: "Garder son numéro avec un standard téléphonique IA immobilier",
  description:
    "Peut-on garder le numéro de l'agence avec un standard IA ? Renvoi immédiat, renvoi conditionnel et décrochage direct : le parcours, simplement.",
  shortTitle: "Garder son numéro avec un standard IA",
  summary: "Renvoi immédiat ou conditionnel : comment conserver le numéro de l'agence.",
  h1: "Peut-on garder son numéro avec un standard téléphonique IA immobilier ?",
  answer:
    "Oui, en général : l'agence garde son numéro et le renvoie vers le standard, tout le temps ou seulement quand personne ne décroche. Les modalités se vérifient avec l'opérateur.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Changer de numéro serait une mauvaise idée : il figure sur vos annonces, vos cartes de visite et dans la mémoire de vos clients."),
    p("Un standard IA n'oblige pas à le changer : il se branche derrière votre numéro."),
  ],
  sections: [
    section(
      "modes",
      "Trois façons de brancher le standard",
      ol([
        "Le renvoi immédiat : chaque appel est dirigé vers le standard dès la première sonnerie.",
        "Le renvoi conditionnel : le standard prend l'appel si la ligne est occupée, si personne ne répond ou si l'agence est fermée.",
        "Le décrochage direct : le standard répond à tous les appels et transfère ceux qui doivent arriver à une personne.",
      ]),
      p("La différence entre renvoi et décrochage direct est détaillée dans [renvoi d'appel ou décroche IA](/ressources/renvoi-appel-ou-decroche-ia-immobilier)."),
    ),
    section(
      "points",
      "Les points à vérifier",
      ul([
        "Le réglage du renvoi se fait chez votre opérateur : demandez comment l'activer et le retirer.",
        "Le numéro affiché de l'appelant : il doit rester visible pour le rappel.",
        "La réversibilité : vous pouvez revenir à un fonctionnement sans standard.",
        "L'information de l'appelant : il doit savoir qu'il parle à une IA.",
      ]),
      statement("Le numéro reste le vôtre : seul le chemin de l'appel change."),
    ),
    section(
      "rushh",
      "Comment Rushh s'installe derrière votre numéro",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Rushh peut répondre directement aux appels ou intervenir par renvoi d'appel. Notre équipe prend en charge la configuration, les tests et le suivi, et vous indique les réglages à demander à votre opérateur. Il peut transférer un appel en direct vers votre équipe selon les règles définies avec vous. Voir [l'offre Rushh](/offre).",
      ),
    ),
    demoSection("Gardez votre numéro, changez la façon de décrocher", "Découvrez comment Rushh s'intègre à la ligne de votre agence."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Gardez votre numéro, changez la façon de décrocher", text: "", links: [] },
};
