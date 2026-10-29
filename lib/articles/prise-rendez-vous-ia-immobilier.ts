import type { Article } from "./types";

export const priseRendezVous: Article = {
  path: "/ressources/prise-rendez-vous-ia-immobilier",
  category: "appels-qualification",
  cover: {
    src: "/ressources/prise-rendez-vous-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Un appel vendeur et un appel acquéreur passent par la vérification de l'agenda : soit la disponibilité est vérifiée et le créneau enregistré, soit la demande est transmise à l'équipe pour confirmation.",
  },
  title: "Prise de rendez-vous par IA dans l'immobilier | Rushh",
  description:
    "Comment un standard téléphonique IA qualifie les appels entrants et organise les rendez-vous immobiliers : estimation, visite, agenda et confirmation.",
  shortTitle: "Prise de rendez-vous par IA dans l'immobilier",
  h1: "Prise de rendez-vous par IA : comment ça fonctionne dans l'immobilier ?",
  answer:
    "Un standard téléphonique IA peut recevoir l'appel, comprendre la demande, recueillir les informations utiles et, si les règles et l'agenda le permettent, enregistrer un rendez-vous. Sans agenda accessible ni créneau fiable, il doit présenter la demande comme « à confirmer » et la transmettre à l'équipe, sans inventer de réservation.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "contexte",
      h2: "Un téléphone, des demandes très différentes",
      blocks: [
        {
          t: "p",
          text: "Un vendeur appelle pendant une visite. Un acquéreur veut réserver un créneau pour découvrir un appartement. Un propriétaire souhaite parler à l'agence au sujet de son mandat. Le téléphone concentre des demandes très différentes, souvent au moment où l'agent ne peut pas décrocher.",
        },
        {
          t: "p",
          text: "Un standard téléphonique alimenté par intelligence artificielle peut recevoir ces appels, identifier la demande, recueillir des informations utiles et, si les règles et les agendas le permettent, organiser un rendez-vous. La difficulté réelle ne réside pas dans le fait de prononcer « c'est réservé », mais dans la fiabilité de chaque étape.",
        },
      ],
    },
    {
      id: "trois-actions",
      h2: "Répondre, qualifier et réserver : trois actions différentes",
      blocks: [
        {
          t: "p",
          text: "Répondre consiste à accueillir l'appelant. Qualifier consiste à comprendre son intention : estimation, visite, demande concernant un bien ou suivi de dossier. Réserver exige davantage : un agenda accessible, un créneau disponible, les bonnes autorisations et des règles de confirmation claires. Un simple message transmis à l'agent n'est pas un rendez-vous confirmé.",
        },
        {
          t: "p",
          text: "Cette distinction évite deux erreurs fréquentes : perdre une opportunité faute de suite donnée, ou créer un faux rendez-vous en promettant un créneau non vérifié.",
        },
      ],
    },
    {
      id: "cinq-etapes",
      h2: "Les cinq étapes d'un rendez-vous correctement pris",
      blocks: [
        { t: "h3", text: "1. Reconnaître le motif de l'appel" },
        {
          t: "p",
          text: "Une estimation de maison, une visite d'appartement et un renseignement sur un dossier de location ne suivent pas le même parcours. Le standard doit identifier rapidement le sujet sans poser à tous les appelants le même questionnaire.",
        },
        { t: "h3", text: "2. Recueillir uniquement les informations utiles" },
        {
          t: "p",
          text: "Pour un vendeur, il peut être pertinent de noter le secteur, le type de bien et le motif de la prise de contact. Pour une visite, il faut identifier le bien concerné et le moyen de joindre l'acquéreur. Lorsque des informations ont déjà été données, inutile de les demander deux fois. Les informations personnelles doivent être limitées aux besoins du service.",
        },
        { t: "h3", text: "3. Appliquer les règles du professionnel" },
        {
          t: "p",
          text: "Un mandataire peut accepter des créneaux d'estimation directement. Une agence peut exiger qu'un négociateur confirme certaines visites. Un gestionnaire peut réserver des rendez-vous seulement pour certains motifs. Le standard doit suivre ces règles, et non imposer une façon de travailler unique.",
        },
        { t: "h3", text: "4. Vérifier le calendrier" },
        {
          t: "p",
          text: "Si un agenda compatible est connecté et que le scénario autorise l'action, le système peut rechercher un créneau disponible et l'enregistrer. Sans accès ou sans disponibilité fiable, il doit prendre une préférence horaire et transmettre une demande à confirmer. Il ne doit pas annoncer une réservation fictive.",
        },
        { t: "h3", text: "5. Confirmer et transmettre" },
        {
          t: "p",
          text: "Une confirmation utile précise la date, l'heure, l'objet du rendez-vous et les éventuelles modalités. L'équipe immobilière reçoit les éléments de contexte dont elle a besoin. Le canal de notification dépend des fonctionnalités activées et des choix du client.",
        },
      ],
    },
    {
      id: "situations",
      h2: "Trois situations immobilières concrètes",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Les exemples suivants sont fictifs : ils illustrent des configurations possibles, pas des résultats de clients Rushh.",
        },
        { t: "h3", text: "Estimation d'un appartement" },
        {
          t: "p",
          text: "Un propriétaire souhaite faire estimer un T3 à Paris. Le standard relève le secteur et les informations nécessaires, puis propose un créneau d'échange si l'agenda le permet. Sinon, il transmet la demande à l'équipe avec une préférence horaire. L'agent sait pourquoi rappeler.",
        },
        { t: "h3", text: "Visite d'un bien" },
        {
          t: "p",
          text: "Un acquéreur appelle pour un appartement vu en annonce. Plusieurs biens peuvent correspondre à sa description. Le standard vérifie l'identification du bien avant de parler d'une visite. Selon la configuration, il propose un créneau autorisé ou enregistre la demande pour confirmation humaine.",
        },
        { t: "h3", text: "Appel pendant une visite" },
        {
          t: "p",
          text: "Un client rappelle au sujet d'un dossier en cours. Proposer automatiquement un rendez-vous serait inadapté. Il vaut mieux qualifier le message, identifier le bon interlocuteur et transmettre le contexte sans interrompre inutilement la visite en cours.",
        },
      ],
    },
    {
      id: "preparer",
      h2: "Ce qu'il faut préparer avant d'activer la réservation",
      blocks: [
        {
          t: "p",
          text: "Le professionnel définit les catégories de rendez-vous, les durées, les horaires, les délais entre visites, les personnes ou agendas concernés et les situations nécessitant une validation humaine. Il faut aussi tester les indisponibilités d'agenda, les annulations, les demandes ambiguës et les appels hors secteur.",
        },
        {
          t: "p",
          text: "Le renvoi d'appel et la réponse directe sont deux modes possibles selon l'opérateur et la configuration. Les connexions à Google Calendar ou Outlook dépendent des accès et du scénario effectivement déployé.",
        },
        {
          t: "checklist",
          items: [
            "Catégories de rendez-vous (estimation, visite, autre) et durée de chacune",
            "Horaires, délais entre deux visites, agendas et personnes concernés",
            "Situations qui exigent une validation humaine",
            "Test d'un agenda sans créneau, d'une annulation, d'une demande ambiguë et d'un appel hors secteur",
          ],
        },
      ],
    },
    {
      id: "indicateurs",
      h2: "Quels indicateurs ont du sens ?",
      blocks: [
        {
          t: "p",
          text: "Il faut distinguer les appels pris en charge, les demandes qualifiées, les rendez-vous réellement inscrits au calendrier et les demandes de rappel. Un appel traité n'est pas automatiquement un rendez-vous, et un rendez-vous n'assure pas un mandat.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Une IA peut-elle confirmer une visite ?" },
        {
          t: "p",
          text: "Oui, si le bien, les disponibilités et les règles de réservation sont connus et que l'outil connecté permet l'enregistrement. Sinon, elle doit présenter la demande comme restant à confirmer.",
        },
        { t: "h3", text: "Peut-elle organiser un rendez-vous d'estimation ?" },
        { t: "p", text: "Oui, selon les consignes de qualification et l'accès à l'agenda du professionnel." },
        { t: "h3", text: "Faut-il changer le numéro de l'agence ?" },
        { t: "p", text: "Pas nécessairement : un renvoi d'appel peut convenir selon l'opérateur et l'installation retenue." },
        { t: "h3", text: "Que se passe-t-il quand l'agenda est indisponible ?" },
        { t: "p", text: "Le standard doit enregistrer une demande ou proposer un rappel, sans inventer de créneau." },
        { t: "h3", text: "Quels agendas sont envisageables ?" },
        { t: "p", text: "Notamment Google Calendar et Outlook, selon les accès et la configuration validée." },
        { t: "h3", text: "Est-ce que cela apporte plus de mandats ?" },
        {
          t: "p",
          text: "Aucun résultat n'est promis. Le standard améliore la prise en charge des demandes, mais les résultats commerciaux dépendent de nombreux facteurs.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les informations personnelles recueillies au strict besoin du service. Consulté le 28 octobre 2026.",
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Connexions d'agenda possibles, selon le contexte technique.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode, pas un résultat mesuré : les situations sont fictives et les recommandations sont celles de Rushh, à adapter à votre organisation. Les fonctions réellement disponibles (agenda, notifications, connexions) dépendent de la configuration validée avec chaque client. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Du bon appel au bon rendez-vous, sans que vous configuriez quoi que ce soit",
    text: "Rushh conçoit, configure, teste, déploie et suit un standard téléphonique IA spécialisé dans les appels entrants de l'immobilier, adapté à l'organisation du professionnel. L'objectif : donner à chaque appel une suite utile, avec une voix naturelle et des échanges réactifs. Rendez-vous lorsque c'est possible, transmission structurée lorsqu'une décision humaine est nécessaire.",
    points: [
      "Des scénarios écrits pour l'immobilier : estimation, visite, suivi de dossier, appel pendant une visite",
      "Vos règles appliquées : quels motifs donnent un rendez-vous, lesquels attendent une validation humaine",
      "Une demande à confirmer présentée comme telle, jamais une réservation inventée",
      "Une prestation entièrement prise en charge : vous n'avez pas à construire les scénarios techniques",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier les appels vendeurs et acquéreurs",
      text: "Les informations à recueillir selon le profil de l'appelant.",
    },
    {
      href: "/ressources/appels-manques-immobilier",
      label: "Appels manqués en agence immobilière",
      text: "Mesurer ce qu'il advient des appels sans réponse.",
    },
    {
      href: "/solutions/mandataires-immobiliers",
      label: "Standard pour mandataires",
      text: "Estimations et visites pendant que vous êtes en rendez-vous.",
    },
  ],
  cta: {
    title: "Écoutez un appel d'estimation ou de visite",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et jouez une demande de visite ou d'estimation : la voix, la réactivité et la suite donnée se jugent à l'oreille. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
