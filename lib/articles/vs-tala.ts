import type { Article } from "./types";
import { demoSection, p, section, statement, ul } from "./blocks";

export const vsTala: Article = {
  path: "/vs/tala",
  bare: true,
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-tala-logos-v2.png",
    width: 1600,
    height: 840,
    alt: "Illustration : les logos de Rushh et de Tala face à face, pour comparer deux services de permanence téléphonique IA pour les agences immobilières.",
  },
  title: "Rushh ou Tala : comparer pour une agence immobilière",
  description:
    "Tala ou Rushh pour les appels d'une agence immobilière : mise en place, rendez-vous, transferts et suivi, les points à comparer.",
  shortTitle: "Rushh ou Tala : que choisir ?",
  summary: "Mise en place, rendez-vous, transferts et suivi : ce qu'il faut comparer pour votre agence.",
  h1: "Rushh ou Tala : quelle permanence téléphonique IA pour une agence immobilière ?",
  answer:
    "Tala et Rushh proposent chacun une permanence téléphonique IA pour les agences immobilières ; comparez la mise en place, les connexions et le suivi prévus.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Tala et Rushh répondent tous deux aux appels des agences immobilières : réponse à toute heure, qualification, rendez-vous."),
    p("La différence se joue surtout sur la façon de démarrer, sur les connexions prévues et sur qui s'occupe des réglages."),
  ],
  sections: [
    section(
      "question",
      "Ce que Tala met en avant",
      p(
        "D'après [sa page immobilier](https://www.tala-assistant.com/immobilier), consultée le 16 novembre 2026, Tala répond aux appels 24 h/24, qualifie les vendeurs, les acquéreurs et les locataires, et réserve, confirme ou déplace des visites.",
      ),
      p(
        "Le service peut aussi transférer l'appel vers le bon négociateur avec un résumé, produire un compte rendu après chaque appel et rechercher un bien dans Immofacile pendant la conversation. La page présente la configuration des scénarios et le branchement de l'agenda comme des étapes du démarrage.",
      ),
    ),
    section(
      "criteres",
      "Les points à comparer",
      ul([
        "Mise en place : qui écrit les scénarios, qui branche l'agenda et qui valide les tests ?",
        "Connexions : quels logiciels et quels agendas sont reliés, et dans quel périmètre ?",
        "Suivi : qui ajuste les règles quand l'agence change d'organisation ?",
        "Appelants : vendeurs, acquéreurs, locataires, bailleurs, quels parcours sont prévus pour chacun ?",
        "Transfert : dans quels cas l'appel passe-t-il à une personne, et avec quelles informations ?",
      ]),
      statement("Comparez ces éléments sur votre organisation, avec les mêmes appels de test pour chaque service."),
    ),
    section(
      "exemple",
      "Exemple : un nouveau parcours pour les appels de gestion locative",
      p(
        "Une agence veut que les appels de ses locataires soient traités autrement que ceux des acquéreurs. Elle demande à chaque prestataire qui conçoit ce parcours, comment il est testé, puis comment il est ajusté.",
      ),
      p(
        "Chez Rushh, l'agence décrit le besoin et notre équipe conçoit, teste et ajuste le parcours. Chez Tala, elle vérifie quelle part de la configuration lui revient.",
      ),
    ),
    section(
      "rushh",
      "Ce que Rushh apporte",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Notre équipe prend en charge la conception, la configuration, les connexions, les tests, l'installation, la maintenance et les ajustements. Rushh est centré sur les appels entrants : il peut prendre un rendez-vous sur un agenda connecté, transférer un appel en direct vers un collaborateur, envoyer des SMS et des e-mails automatiques selon les scénarios, et se connecter à des [logiciels immobiliers](/integrations) via leur API, selon les autorisations.",
      ),
      p(
        "Les demandes sont organisées dans la plateforme métier Rushh, avec coordonnées, résumé et statut. Voir [l'offre Rushh](/offre) et le [comparatif des standards IA](/comparatif/standards-telephoniques-ia-immobilier). D'autres comparaisons : [Fonio](/vs/fonio), [Joe AI](/vs/joe-ai), [AirAgent](/vs/airagent), [VOKAI](/vs/vokai).",
      ),
    ),
    demoSection(
      "Choisissez la façon de démarrer qui vous convient",
      "Découvrez comment Rushh prend en charge les appels de votre agence.",
    ),
  ],
  sources: [
    {
      label: "Tala : page immobilier",
      url: "https://www.tala-assistant.com/immobilier",
      usedFor: "Offre pour les agences immobilières (appels, qualification, visites, transferts, Immofacile). Consulté le 16 novembre 2026.",
    },
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Choisissez la façon de démarrer qui vous convient", text: "", links: [] },
};
