import type { Article } from "./types";

/** Texte validé : à reproduire tel quel, sans reformulation (voir `bare` dans types.ts). */
export const comparatif: Article = {
  path: "/comparatif/standards-telephoniques-ia-immobilier",
  category: "comparatifs",
  bare: true,
  cover: {
    src: "/ressources/comparatif-standards-telephoniques-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Illustration de la page Quel standard téléphonique IA choisir pour l'immobilier.",
  },
  title: "Quel standard téléphonique IA choisir pour l'immobilier ? | Rushh",
  description:
    "Répondre aux appels, faire avancer les demandes, exploiter chaque opportunité : ce qui compte dans un standard téléphonique IA pour l'immobilier.",
  shortTitle: "Quel standard téléphonique IA choisir ?",
  summary:
    "Répondre, faire avancer les demandes, exploiter chaque opportunité : ce qui compte dans un standard téléphonique IA.",
  h1: "Quel standard téléphonique IA choisir pour l'immobilier ?",
  answer:
    "Tous les standards téléphoniques IA promettent de répondre à vos appels. Mais décrocher ne suffit pas : ce qui compte, c'est ce que deviennent vos demandes après l'appel.",
  datePublished: "2026-10-29",
  dateModified: "2026-11-03",
  intro: [
    {
      t: "p",
      text: "Tous les standards téléphoniques IA promettent de répondre à vos appels. Mais décrocher ne suffit pas : ce qui compte, c'est ce que deviennent vos demandes après l'appel.",
    },
    {
      t: "statement",
      text: "Rushh va plus loin que la simple réception téléphonique : chaque appel est qualifié, organisé et transformé en opportunité exploitable pour votre activité.",
    },
  ],
  sections: [
    {
      id: "ce-qui-compte",
      h2: "Ce qui compte vraiment dans un standard téléphonique IA",
      blocks: [
        { t: "p", text: "Un standard efficace doit faire trois choses :" },
        { t: "h3", text: "1. Répondre à vos appels" },
        {
          t: "p",
          text: "Quand vous êtes en visite, en rendez-vous ou indisponible, vos clients doivent pouvoir joindre votre agence.",
        },
        { t: "h3", text: "2. Faire avancer les demandes" },
        {
          t: "p",
          text: "Un vendeur veut une estimation. Un acquéreur souhaite visiter un bien. Un locataire a une question. Le standard doit comprendre leur besoin, recueillir les bonnes informations et organiser la suite.",
        },
        { t: "h3", text: "3. Vous permettre d'exploiter chaque opportunité" },
        {
          t: "p",
          text: "Répondre au téléphone n'a que peu d'intérêt si les informations se perdent ensuite. Les demandes doivent être organisées, accessibles et prêtes à être traitées.",
        },
      ],
    },
    {
      id: "pourquoi-rushh",
      h2: "Pourquoi choisir Rushh immo ?",
      blocks: [
        {
          t: "p",
          text: "Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu pour les professionnels de l'immobilier.",
        },
        { t: "p", text: "Il ne se contente pas de décrocher." },
        {
          t: "table",
          caption: "",
          head: ["Ce que fait Rushh", "Ce que cela change pour vous"],
          rows: [
            ["Répond aux appels entrants 24 h/24 et 7 j/7", "Vous restez joignable pendant vos visites, vos rendez-vous et après la fermeture."],
            ["Identifie et qualifie les demandes", "Vous distinguez immédiatement vendeurs, acquéreurs, locataires, bailleurs et prestataires."],
            ["Prend des rendez-vous", "Les demandes peuvent avancer sans attendre votre prochain rappel."],
            ["Envoie des SMS et des e-mails", "Les confirmations et informations utiles sont transmises automatiquement."],
            ["Se connecte à vos outils", "Les informations peuvent circuler avec votre logiciel immobilier lorsque son API le permet."],
            ["Organise les opportunités dans sa plateforme métier", "Vous retrouvez les demandes, leurs coordonnées, leur résumé et leur statut au même endroit."],
          ],
        },
        { t: "h3", text: "Un standard adapté à votre fonctionnement" },
        { t: "p", text: "Chaque professionnel de l'immobilier travaille différemment." },
        {
          t: "p",
          text: "Rushh est configuré selon votre organisation, vos types d'appels, vos agendas et vos outils.",
        },
        {
          t: "statement",
          text: "Notre équipe prend en charge la conception, l'installation, les tests, le suivi et les ajustements.",
        },
        {
          t: "p",
          text: "Vous n'avez pas à apprendre à configurer un nouveau logiciel pour que votre téléphone fonctionne.",
        },
      ],
    },
    {
      id: "autres-solutions",
      h2: "Et les autres solutions ?",
      blocks: [
        {
          t: "p",
          text: "Des solutions comme [Joe AI](/vs/joe-ai), [Fonio](/vs/fonio), AInora ou Orateur proposent également des fonctionnalités de réception téléphonique par intelligence artificielle.",
        },
        {
          t: "p",
          text: "Selon les offres, elles permettent notamment de qualifier des appels, de prendre des rendez-vous ou de connecter différents outils.",
        },
        {
          t: "statement",
          text: "Ces fonctionnalités ne suffisent donc pas, à elles seules, à départager les solutions.",
        },
        {
          t: "p",
          text: "La vraie question est ce que vous souhaitez obtenir de votre standard, et la manière dont il s'intègre à votre activité.",
        },
        {
          t: "p",
          text: "Chez Rushh, nous avons choisi de réunir la prise en charge des appels immobiliers, l'organisation des opportunités commerciales et un service entièrement géré.",
        },
      ],
    },
    {
      id: "appel-vendeur",
      h2: "Un appel vendeur ne doit pas finir en simple message",
      blocks: [
        {
          t: "p",
          text: "Un propriétaire appelle pour faire estimer son appartement pendant que vous êtes en visite.",
        },
        { t: "p", text: "Avec Rushh :" },
        {
          t: "ol",
          items: [
            "Le standard décroche et identifie une demande d'estimation.",
            "Il recueille les informations utiles sur le projet.",
            "Il peut proposer un rendez-vous sur votre agenda connecté.",
            "La demande apparaît dans la plateforme Rushh, classée comme opportunité vendeur, avec ses coordonnées et son résumé.",
          ],
        },
        {
          t: "statement",
          text: "Vous ne récupérez pas simplement un numéro à rappeler. Vous retrouvez une demande qualifiée, avec une prochaine action identifiable.",
        },
        {
          t: "p",
          text: "Le même principe s'applique aux demandes acquéreurs, locataires, bailleurs et aux autres appels de votre activité.",
        },
      ],
    },
    {
      id: "pour-vous",
      h2: "Un standard qui fonctionne pour vous, pas l'inverse",
      blocks: [
        {
          t: "p",
          text: "Rushh est conçu pour prendre en charge le téléphone entrant sans ajouter une nouvelle charge de travail à vos équipes.",
        },
        { t: "p", text: "Vous continuez vos visites, vos rendez-vous et votre prospection." },
        {
          t: "p",
          text: "De notre côté, nous configurons et faisons évoluer le standard en fonction de votre organisation.",
        },
        {
          t: "statement",
          text: "Votre métier, c'est l'immobilier. Le nôtre, c'est de faire en sorte que vos appels ne vous interrompent plus et que les opportunités ne passent pas inaperçues.",
        },
      ],
    },
    {
      id: "test",
      h2: "Faites le test avec Rushh",
      blocks: [
        {
          t: "p",
          text: "Découvrez comment Rushh prend en charge les appels, qualifie les demandes et organise les opportunités pour les professionnels de l'immobilier.",
        },
        { t: "button", label: "Réserver une démonstration", href: "/demonstrations" },
        { t: "p", text: "Une solution personnalisée, entièrement prise en charge par notre équipe." },
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Faites le test avec Rushh", text: "", links: [] },
};
