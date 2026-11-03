import type { Article } from "./types";

/** Texte validé : à reproduire tel quel, sans reformulation (voir `bare` dans types.ts). */
export const qualification: Article = {
  path: "/ressources/qualification-appels-vendeurs-acquereurs",
  bare: true,
  cover: {
    src: "/ressources/qualification-appels-vendeurs-acquereurs.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux appels entrants, un vendeur qui demande une estimation et un acquéreur qui recherche un bien, convergent vers une qualification puis une demande qualifiée avec une prochaine action.",
  },
  category: "guides",
  title: "Qualifier un appel vendeur ou acquéreur : méthode | Rushh",
  description:
    "Comment qualifier un appel vendeur ou acquéreur en agence immobilière : les informations à recueillir, la méthode commune et son application avec Rushh.",
  shortTitle: "Qualifier un appel vendeur ou acquéreur",
  summary: "Les informations à recueillir quand un vendeur ou un acquéreur appelle, et la méthode : qualifier, agir, suivre.",
  h1: "Comment qualifier les appels vendeurs et acquéreurs en agence immobilière ?",
  answer:
    "Un propriétaire appelle pour faire estimer son bien. Un acquéreur souhaite visiter un appartement. Dans les deux cas, décrocher ne suffit pas : encore faut-il comprendre leur projet et organiser la suite.",
  datePublished: "2026-10-28",
  dateModified: "2026-11-03",
  intro: [
    {
      t: "p",
      text: "Un propriétaire appelle pour faire estimer son bien. Un acquéreur souhaite visiter un appartement. Dans les deux cas, décrocher ne suffit pas : encore faut-il comprendre leur projet et organiser la suite.",
    },
    {
      t: "p",
      text: "Une bonne qualification transforme un simple appel en opportunité identifiée, avec les bonnes informations et une prochaine action claire.",
    },
  ],
  sections: [
    {
      id: "pourquoi",
      h2: "Pourquoi qualifier les appels entrants ?",
      blocks: [
        {
          t: "p",
          text: "Dans une [agence immobilière](/solutions/transaction-immobiliere), tous les appels n'ont pas le même objectif.",
        },
        {
          t: "p",
          text: "Un vendeur peut vouloir connaître la valeur de son bien, préparer une vente ou simplement se renseigner. Un acquéreur peut appeler pour une annonce précise ou rechercher un bien correspondant à ses critères.",
        },
        {
          t: "p",
          text: "Sans qualification, le négociateur doit souvent rappeler pour comprendre la demande, reposer les mêmes questions et organiser la suite.",
        },
        {
          t: "p",
          text: "L'objectif est simple : savoir qui appelle, ce qu'il recherche et quelle action doit suivre.",
        },
      ],
    },
    {
      id: "vendeur",
      h2: "Comment qualifier un appel vendeur ?",
      blocks: [
        {
          t: "p",
          text: "Lorsqu'un propriétaire contacte votre agence, quatre informations permettent de comprendre l'essentiel de son projet.",
        },
        { t: "h3", text: "1. Le bien et sa localisation" },
        {
          t: "p",
          text: "S'agit-il d'une maison, d'un appartement ou d'un autre type de bien ? Dans quelle ville ou quel secteur se trouve-t-il ?",
        },
        {
          t: "p",
          text: "Ces informations permettent d'identifier le bien concerné et de vérifier s'il correspond au secteur d'activité de l'agence.",
        },
        { t: "h3", text: "2. La nature du projet" },
        { t: "p", text: "Le propriétaire souhaite-t-il vendre, obtenir une estimation ou simplement se renseigner ?" },
        { t: "p", text: "La réponse permet d'adapter la suite de l'échange." },
        { t: "h3", text: "3. Le calendrier envisagé" },
        { t: "p", text: "La vente est-elle prévue rapidement, dans quelques mois ou à plus long terme ?" },
        { t: "p", text: "Cela aide à comprendre l'avancement du projet et à organiser le suivi." },
        { t: "h3", text: "4. Les coordonnées et la prochaine étape" },
        {
          t: "p",
          text: "Recueillez les coordonnées utiles et, lorsque cela correspond à la demande, proposez un [rendez-vous d'estimation](/ressources/appel-vendeur-estimation-immobiliere).",
        },
        {
          t: "statement",
          text: "Résultat : une demande vendeur identifiée, avec un projet clair et une prochaine action à organiser.",
        },
      ],
    },
    {
      id: "acquereur",
      h2: "Comment qualifier un appel acquéreur ?",
      blocks: [
        { t: "p", text: "Pour un acquéreur, les questions sont différentes." },
        { t: "h3", text: "1. Identifier le bien ou la recherche" },
        { t: "p", text: "L'appel concerne-t-il une annonce précise ou une recherche plus générale ?" },
        {
          t: "p",
          text: "S'il s'agit d'une recherche, identifiez les critères principaux : secteur, type de bien et caractéristiques souhaitées.",
        },
        { t: "h3", text: "2. Comprendre le budget et le financement" },
        {
          t: "p",
          text: "Le budget recherché permet de mieux cerner les biens susceptibles de correspondre au projet.",
        },
        {
          t: "p",
          text: "Lorsque c'est pertinent, vous pouvez également demander où en est l'acquéreur dans son financement, sans transformer ce premier échange en étude financière.",
        },
        { t: "h3", text: "3. Connaître le calendrier du projet" },
        {
          t: "p",
          text: "L'acquéreur souhaite-t-il acheter rapidement ou commence-t-il ses recherches ? Souhaite-t-il organiser une visite ?",
        },
        { t: "h3", text: "4. Organiser la suite" },
        {
          t: "p",
          text: "Recueillez ses coordonnées et ses disponibilités pour proposer une visite ou transmettre sa demande au bon interlocuteur.",
        },
        {
          t: "statement",
          text: "Résultat : une demande acquéreur qualifiée, avec des critères identifiés et une prochaine étape précise.",
        },
      ],
    },
    {
      id: "methode",
      h2: "La méthode commune : qualifier, agir et suivre",
      blocks: [
        {
          t: "p",
          text: "Qu'il s'agisse d'un vendeur ou d'un acquéreur, une qualification efficace repose sur trois principes :",
        },
        {
          t: "ul",
          items: [
            "**Comprendre :** identifier le motif de l'appel et recueillir les informations réellement utiles.",
            "**Agir :** proposer un rendez-vous, transmettre l'appel ou organiser un suivi adapté.",
            "**Suivre :** conserver les informations, le statut de la demande et la prochaine action.",
          ],
        },
        {
          t: "p",
          text: "Une qualification ne doit pas devenir un interrogatoire. Les questions doivent rester naturelles et adaptées au projet exprimé.",
        },
        {
          t: "p",
          text: "Le plus important n'est pas la quantité d'informations collectées, mais la capacité de l'agence à exploiter la demande après l'appel.",
        },
      ],
    },
    {
      id: "rushh",
      h2: "Comment Rushh applique cette méthode",
      blocks: [
        {
          t: "p",
          text: "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier.",
        },
        {
          t: "p",
          text: "Il prend en charge les appels entrants et adapte ses questions selon le projet de l'interlocuteur.",
        },
        { t: "h3", text: "Exemple : un propriétaire appelle pendant une visite" },
        {
          t: "p",
          text: "Vous accompagnez un acquéreur lorsqu'un propriétaire appelle pour obtenir une estimation.",
        },
        {
          t: "p",
          text: "Rushh décroche, identifie la demande vendeur, recueille le type de bien, sa localisation et le calendrier envisagé.",
        },
        {
          t: "p",
          text: "Selon les scénarios configurés et les disponibilités de votre [agenda connecté](/ressources/prise-rendez-vous-ia-immobilier), il peut directement proposer un rendez-vous d'estimation.",
        },
        {
          t: "p",
          text: "La demande est ensuite classée dans la plateforme métier Rushh, avec les coordonnées du propriétaire, le résumé de l'appel et son statut.",
        },
        {
          t: "statement",
          text: "Votre équipe retrouve une opportunité vendeur identifiée, sans avoir interrompu sa visite ni devoir reprendre toute la conversation.",
        },
        {
          t: "p",
          text: "Le même fonctionnement s'applique aux acquéreurs : identification de l'annonce ou des critères de recherche, qualification du projet et organisation de la suite.",
        },
        {
          t: "p",
          text: "Rushh peut également transmettre les informations à votre [logiciel immobilier](/integrations) lorsque son API et les autorisations disponibles le permettent.",
        },
        {
          t: "p",
          text: "Notre équipe prend en charge la configuration, les tests, l'installation et le suivi du standard selon le fonctionnement de votre agence.",
        },
      ],
    },
    {
      id: "demonstration",
      h2: "Transformez vos appels en opportunités exploitables",
      blocks: [
        {
          t: "p",
          text: "Un appel qualifié permet à votre équipe de comprendre immédiatement le projet de son interlocuteur et de savoir quelle action entreprendre.",
        },
        {
          t: "p",
          text: "Avec Rushh, cette qualification peut être réalisée dès le premier appel, même lorsque vos collaborateurs sont indisponibles.",
        },
        { t: "button", label: "Réserver une démonstration", href: "/demonstrations" },
        { t: "p", text: "Découvrez comment Rushh qualifie les demandes vendeurs et acquéreurs pour votre agence." },
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Transformez vos appels en opportunités exploitables", text: "", links: [] },
};
