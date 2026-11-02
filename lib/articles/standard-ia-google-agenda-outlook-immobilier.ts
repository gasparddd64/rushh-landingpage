import type { Article } from "./types";

const CONSULTED = "Consulté le 2 novembre 2026.";

export const standardIaAgenda: Article = {
  path: "/ressources/standard-ia-google-agenda-outlook-immobilier",
  category: "guides",
  cover: {
    src: "/ressources/standard-ia-google-agenda-outlook-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Un parcours en cinq étapes : appel entrant, qualification, vérification de l'agenda, puis soit réservation d'un créneau disponible, soit transmission à l'équipe quand aucun créneau n'est confirmé.",
  },
  title: "Standard IA avec Google Agenda et Outlook : le parcours | Rushh",
  description:
    "Appel, qualification, vérification de l'agenda, réservation ou transmission : préparer Google Agenda ou Outlook pour un standard IA immobilier.",
  shortTitle: "Standard IA, Google Agenda et Outlook",
  summary: "Le parcours d'un appel jusqu'au rendez-vous, et comment préparer son agenda pour qu'il soit fiable.",
  h1: "Comment un standard téléphonique IA s'appuie-t-il sur Google Agenda ou Outlook pour fixer un rendez-vous ?",
  answer:
    "Un standard téléphonique IA peut proposer un rendez-vous à partir de votre agenda si celui-ci est accessible et correctement préparé : il qualifie l'appel, consulte les disponibilités, puis réserve un créneau ou transmet la demande à l'équipe. Google Agenda et Outlook exposent chacun une fonction de consultation des disponibilités. Rien n'est réservé sans créneau confirmé : s'il n'y en a pas, la demande est transmise avec une préférence horaire.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "probleme",
      h2: "Le problème : un rendez-vous pris au téléphone n'est utile que s'il est fiable",
      blocks: [
        {
          t: "p",
          text: "Un propriétaire veut faire estimer son bien, un acquéreur souhaite visiter, un client demande à déplacer un rendez-vous. Si l'agenda n'est pas consulté, le créneau proposé est une hypothèse : il peut croiser une visite déjà prévue ou une absence. Un rendez-vous manqué coûte plus cher que quelques minutes de rappel.",
        },
        {
          t: "p",
          text: "Ce guide complète le [guide sur la prise de rendez-vous par IA](/ressources/prise-rendez-vous-ia-immobilier) : il ne reprend pas les trois actions (répondre, qualifier, réserver), mais détaille ce qu'il faut préparer dans Google Agenda ou Outlook et ce qui se passe quand le créneau n'est pas disponible.",
        },
      ],
    },
    {
      id: "parcours",
      h2: "Le parcours d'un appel jusqu'au rendez-vous",
      blocks: [
        {
          t: "ol",
          items: [
            "**Appel entrant.** Le standard décroche et accueille l'appelant. Il l'informe qu'il s'adresse à un assistant, selon la règle de l'agence.",
            "**Qualification.** Il identifie le motif : estimation, visite, déplacement d'un rendez-vous, autre. Il recueille le bien concerné, le nom et un numéro de rappel.",
            "**Vérification de l'agenda.** Si le scénario autorise la réservation, il consulte les disponibilités de la personne ou du service concerné, sur une plage définie à l'avance.",
            "**Réservation.** Si un créneau est libre et conforme aux règles (durée, délai, horaires), il le propose, puis l'enregistre une fois accepté par l'appelant.",
            "**Confirmation.** L'appelant reçoit la confirmation prévue par l'agence, et l'équipe voit le rendez-vous dans son agenda avec le motif.",
            "**Sinon, transmission.** Si aucun créneau n'est disponible ou si la demande sort des règles, la demande est transmise à l'équipe avec la préférence horaire de l'appelant.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Règle de prudence : un rendez-vous n'est annoncé comme pris que lorsqu'un créneau a été confirmé dans l'agenda. Dans tous les autres cas, l'appelant entend que sa demande est transmise et quand il sera rappelé.",
        },
      ],
    },
    {
      id: "fonctions",
      h2: "Ce que Google Agenda et Outlook permettent techniquement",
      blocks: [
        {
          t: "p",
          text: "Google propose une requête de disponibilités (freeBusy) qui renvoie les plages occupées d'un ou plusieurs agendas sur une période donnée, avec une autorisation de lecture. Microsoft propose, dans Microsoft Graph, une fonction équivalente (getSchedule) qui renvoie les informations de disponibilité de personnes ou de ressources.",
        },
        {
          t: "p",
          text: "Un point de vigilance côté Microsoft : d'après la documentation, cette fonction n'est pas prise en charge pour les comptes Microsoft personnels, seulement pour les comptes professionnels ou scolaires. Le type de compte utilisé par l'agence compte donc avant tout projet. Ces fonctions sont des briques techniques : leur usage dans un standard dépend de l'intégration réalisée et des accès accordés.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "Aucune connexion n'est « native » ni prête à l'emploi : chaque intégration d'agenda se configure avec les accès de l'agence. Chez Rushh, elle est étudiée sur mesure avec vous, sous réserve des droits d'accès.",
        },
      ],
    },
    {
      id: "preparer",
      h2: "Préparer son agenda avant d'activer la réservation",
      blocks: [
        {
          t: "table",
          caption: "Les réglages d'agenda à décider avant la mise en service",
          head: ["Réglage", "Question à trancher", "Erreur fréquente"],
          rows: [
            ["Un agenda par personne ou par service", "Qui reçoit quel type de rendez-vous ?", "Réserver sur un agenda collectif que personne ne consulte"],
            ["Types de rendez-vous", "Estimation, visite, signature : quelle durée chacun ?", "Une durée unique pour tous les motifs"],
            ["Horaires réservables", "Quelles plages le standard peut-il proposer ?", "Ouvrir toute la journée, déjeuner compris"],
            ["Délai de prévenance", "À partir de quand un créneau peut-il être proposé ?", "Proposer un créneau dans l'heure"],
            ["Temps de trajet entre deux visites", "Quel intervalle minimum ?", "Enchaîner deux visites sans marge"],
            ["Absences et congés", "Sont-ils saisis dans l'agenda consulté ?", "Compter sur un message d'équipe plutôt que sur l'agenda"],
          ],
          note: "Modèle à adapter à votre organisation. Un agenda incomplet produit des rendez-vous incomplets : la fiabilité vient de la préparation.",
        },
      ],
    },
    {
      id: "indisponibilite",
      h2: "Les cas d'indisponibilité et ce que l'appelant entend",
      blocks: [
        {
          t: "table",
          caption: "Six situations d'indisponibilité et la suite à donner",
          head: ["Situation", "Ce que fait le standard", "Ce que l'appelant entend", "Ce que reçoit l'équipe"],
          rows: [
            ["Aucun créneau libre sur la plage ouverte", "Propose d'autres jours, sinon transmet", "Qu'aucun créneau n'est confirmé et qu'on le rappellera", "Demande avec préférences horaires"],
            ["Agenda inaccessible (panne, accès retiré)", "Ne réserve pas, prend une préférence", "Que la demande est transmise", "Demande, avec mention de l'indisponibilité"],
            ["Demande hors règles (délai trop court, motif non prévu)", "Transmet à l'équipe", "Qu'un collaborateur reviendra vers lui", "Demande et motif"],
            ["Appelant qui veut annuler ou déplacer", "Recueille la demande, ne modifie que si la règle l'autorise", "La suite prévue par l'agence", "Demande de modification"],
            ["Deux appelants sur le même créneau", "Réserve le premier, propose un autre au second", "Un autre créneau ou une transmission", "Rendez-vous enregistré et demande en attente"],
            ["Demande ambiguë (bien non identifié)", "Pose une question de clarification, sinon transmet", "Qu'on le rappellera pour préciser", "Message avec les éléments recueillis"],
          ],
          note: "Les formulations sont indicatives. Aucun cas ne conduit à annoncer un rendez-vous sans créneau confirmé.",
        },
      ],
    },
    {
      id: "tester",
      h2: "Tester avant de réserver pour de bon",
      blocks: [
        {
          t: "checklist",
          items: [
            "Un appel estimation avec un créneau libre : le rendez-vous apparaît dans le bon agenda, au bon motif",
            "Un appel visite sans créneau libre : la demande est transmise, rien n'est enregistré",
            "Un appel pendant une absence saisie : aucun créneau n'est proposé",
            "Un appel pour déplacer un rendez-vous : le comportement correspond à la règle écrite",
            "Un appel avec l'agenda volontairement inaccessible : l'appelant entend une transmission, pas une confirmation",
            "Un fuseau horaire et un changement d'heure vérifiés",
          ],
        },
        {
          t: "p",
          text: "Les informations d'un rendez-vous (nom, numéro, bien) doivent rester limitées au besoin : la CNIL rappelle le principe de minimisation des données. L'intitulé inscrit dans l'agenda n'a pas à contenir plus que nécessaire.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA peut-il garantir un rendez-vous ?" },
        {
          t: "p",
          text: "Non. Il réserve uniquement si un créneau est confirmé dans l'agenda consulté et si la demande respecte les règles. Sinon, il transmet.",
        },
        { t: "h3", text: "Faut-il choisir entre Google Agenda et Outlook ?" },
        {
          t: "p",
          text: "Non : le choix dépend de l'outil que l'agence utilise déjà. Les deux exposent une fonction de consultation des disponibilités, avec des conditions d'accès différentes.",
        },
        { t: "h3", text: "Qui configure la connexion à l'agenda ?" },
        {
          t: "p",
          text: "Avec Rushh, la mise en place est prise en charge par l'équipe, avec vos accès, et testée avant la mise en service.",
        },
        { t: "h3", text: "Que se passe-t-il si l'agenda n'est pas à jour ?" },
        {
          t: "p",
          text: "Les créneaux proposés seront inexacts : la préparation de l'agenda et la saisie des absences sont la condition d'un rendez-vous fiable.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Google Calendar API : Freebusy: query",
      url: "https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query",
      usedFor: `Requête de disponibilités renvoyant les plages occupées d'agendas sur une période donnée, avec des paramètres de période et d'agendas. ${CONSULTED}`,
    },
    {
      label: "Microsoft Graph : calendar: getSchedule",
      url: "https://learn.microsoft.com/en-us/graph/api/calendar-getschedule?view=graph-rest-1.0",
      usedFor: `Fonction renvoyant les informations de disponibilité de personnes ou de ressources ; comptes Microsoft personnels non pris en charge en accès délégué. ${CONSULTED}`,
    },
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: `Limiter les informations inscrites dans un rendez-vous au besoin de la finalité. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode : les réglages et les cas d'indisponibilité sont des modèles à adapter. Il ne présente aucune intégration comme native, certifiée ou disponible sans configuration, et ne promet aucun rendez-vous sans créneau confirmé. Les conditions d'accès des fournisseurs peuvent évoluer : vérifiez leur documentation. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Une connexion d'agenda mise en place pour vous, testée avant ouverture",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, applique vos règles de rendez-vous : types, durées, horaires, délais. Quand l'agenda de l'agence est accessible, Rushh étudie avec vous une connexion sur mesure, sous réserve des accès. Sinon, la demande est transmise avec le motif et la préférence de l'appelant.",
    points: [
      "Des scénarios de rendez-vous personnalisés : estimation, visite, déplacement",
      "Une connexion à Google Agenda ou Outlook étudiée sur mesure, sous réserve des droits d'accès",
      "Une transmission structurée quand aucun créneau n'est confirmé",
      "Disponibilité 24 h/24 et 7 j/7 pour recevoir les demandes, y compris hors horaires",
      "Une prestation entièrement prise en charge, avec des tests avant la mise en service",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/integrations", label: "Les intégrations" },
    ],
  },
  related: [
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA dans l'immobilier",
      text: "Répondre, qualifier et réserver : trois actions distinctes.",
    },
    {
      href: "/ressources/appel-vendeur-estimation-immobiliere",
      label: "Appel vendeur pour une estimation",
      text: "Qualifier le projet et fixer le rendez-vous.",
    },
    {
      href: "/ressources/standard-telephonique-ia-apimo",
      label: "Standard téléphonique IA et Apimo",
      text: "Une connexion à un logiciel métier, étudiée sur mesure.",
    },
  ],
  cta: {
    title: "Testez la prise de rendez-vous au téléphone",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et demandez une estimation puis une visite : vous jugerez la qualification et la suite donnée quand un créneau n'est pas confirmé. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
