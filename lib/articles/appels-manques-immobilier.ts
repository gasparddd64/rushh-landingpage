import type { Article } from "./types";

export const appelsManques: Article = {
  path: "/ressources/appels-manques-immobilier",
  cover: {
    src: "/ressources/appels-manques-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Illustration : une ligne d'appel qui s'interrompt puis reprend, et aboutit à une fiche « Demande vendeur », estimation à Paris 11e, demande à transmettre.",
  },
  category: "guides",
  title: "Appels manqués en agence immobilière : les mesurer | Rushh",
  description:
    "Comment identifier, mesurer et réduire les appels manqués d'une agence immobilière : journal d'appels, motifs, rappels, tableau de suivi et checklist.",
  shortTitle: "Mesurer et réduire les appels manqués",
  summary:
    "Un journal d'appels, des motifs et un tableau de suivi pour savoir ce que vous perdez vraiment.",
  h1: "Appels manqués en agence immobilière : comment éviter de perdre des opportunités ?",
  answer:
    "Pour réduire les appels manqués, mesurez-les d'abord : exportez le journal d'appels de votre ligne, séparez les appels décrochés des appels manqués, classez les motifs que vous connaissez, désignez qui rappelle et dans quel délai, puis comparez la même période après chaque changement d'organisation. Un appel manqué n'est pas automatiquement une opportunité perdue : c'est une demande dont il faut vérifier l'issue.",
  datePublished: "2026-10-28",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "pourquoi",
      h2: "Pourquoi une agence manque-t-elle des appels ?",
      blocks: [
        {
          t: "p",
          text: "Un appel manqué est un appel entrant qui n'est pas décroché, ou que l'appelant abandonne avant d'avoir une réponse. Dans une agence, les causes sont rarement mystérieuses :",
        },
        {
          t: "ul",
          items: [
            "les négociateurs sont en visite, en rendez-vous ou déjà au téléphone ;",
            "plusieurs appels arrivent en même temps sur un seul numéro ;",
            "les appels tombent pendant la pause du midi, en soirée ou le week-end ;",
            "un renvoi d'appel est mal configuré, ou un mobile est éteint ;",
            "une absence ou un congé n'a pas été anticipé dans l'organisation.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Ne supposez pas la cause : lisez-la dans vos données. Le journal d'appels montre à quels créneaux vous manquez des appels, et donc laquelle de ces causes domine chez vous.",
        },
      ],
    },
    {
      id: "appel-manque-ou-opportunite-perdue",
      h2: "Un appel manqué est-il une opportunité perdue ?",
      blocks: [
        {
          t: "p",
          text: "Non, pas automatiquement. Deux notions doivent rester séparées :",
        },
        {
          t: "ul",
          items: [
            "**Appel manqué** : un appel entrant qui n'a pas été décroché. C'est un fait mesurable dans votre journal d'appels.",
            "**Demande perdue** : une demande qui n'a abouti à aucune suite (ni rappel, ni réponse, ni rendez-vous). C'est une issue, que seul un suivi permet de constater.",
          ],
        },
        {
          t: "p",
          text: "Un appel manqué peut être un démarchage, une erreur de numéro, un prestataire, ou un appelant qui rappelle quelques minutes plus tard. Il peut aussi être une vraie demande de visite ou d'estimation. Tant que vous n'avez pas suivi son issue, vous ne savez pas laquelle de ces situations vous avez en face de vous.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "N'attribuez pas de montant (commission, mandat) à un appel manqué. Sans suivi de l'issue, ce montant serait une estimation sans méthode.",
        },
      ],
    },
    {
      id: "journal-d-appels",
      h2: "Comment récupérer et analyser son journal d'appels ?",
      blocks: [
        {
          t: "ol",
          items: [
            "**Identifiez les sources.** Opérateur, solution de téléphonie, mobiles des négociateurs, renvois : listez par où arrivent réellement les appels.",
            "**Exportez une période représentative.** Plusieurs semaines complètes valent mieux qu'une journée, pour inclure des semaines calmes et des semaines chargées.",
            "**Gardez les colonnes utiles.** Date, heure, numéro, durée, décroché ou non, ligne appelée.",
            "**Regroupez par créneau.** Par exemple : matin, pause du midi, après-midi, soirée, week-end.",
            "**Repérez les répétitions.** Un même numéro qui appelle plusieurs fois sans réponse mérite un rappel prioritaire.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Un journal d'appels contient des numéros de téléphone : traitez-le avec la même prudence que vos fichiers clients et limitez-en l'accès aux personnes qui en ont besoin.",
        },
      ],
    },
    {
      id: "motifs",
      h2: "Comment classer les motifs d'appel ?",
      blocks: [
        {
          t: "p",
          text: "Pour un appel manqué, le motif n'est connu que si l'appelant a laissé un message, a rappelé ou a été joint. Dans les autres cas, notez « motif inconnu » plutôt que de le deviner. Quelques catégories suffisent pour commencer :",
        },
        {
          t: "ul",
          items: [
            "demande de visite ;",
            "estimation ou projet de vente ;",
            "renseignement sur un bien ou une annonce ;",
            "suivi d'un dossier en cours ;",
            "prestataire, fournisseur ou démarchage ;",
            "motif inconnu.",
          ],
        },
      ],
    },
    {
      id: "rappels",
      h2: "Qui rappelle, et dans quel délai ?",
      blocks: [
        {
          t: "p",
          text: "Un appel manqué sans responsable désigné reste un appel manqué. Fixez trois règles simples :",
        },
        {
          t: "ul",
          items: [
            "**Un responsable par créneau** : une personne identifiée tient la liste des appels à rappeler.",
            "**Un délai cible** : à définir selon votre agence, par exemple dans la même demi-journée.",
            "**Un nombre de tentatives** : par exemple deux tentatives sur deux jours, puis le statut « sans réponse ».",
          ],
        },
        {
          t: "p",
          text: "Ces valeurs sont des exemples à adapter. Ce qui compte, c'est que chaque appel à rappeler ait un nom, un délai et un statut.",
        },
      ],
    },
    {
      id: "tableau-de-suivi",
      h2: "Un tableau de suivi à reprendre",
      blocks: [
        {
          t: "p",
          text: "Ce tableau tient dans n'importe quel tableur. Une ligne par appel manqué ou par demande suivie :",
        },
        {
          t: "table",
          caption: "Modèle de suivi des appels (exemples fictifs)",
          head: ["Date", "Créneau", "Statut d'appel", "Motif connu", "Rappel", "Suite donnée"],
          rows: [
            ["12/05", "12 h – 14 h", "Manqué", "Demande de visite (message vocal)", "Rappelé à 14 h 20", "Visite proposée jeudi"],
            ["12/05", "17 h – 19 h", "Manqué", "Inconnu", "À rappeler", "—"],
            ["13/05", "9 h – 12 h", "Décroché", "Estimation", "Sans objet", "Transmis au négociateur"],
          ],
          note: "Exemple fictif : ces lignes illustrent le format, pas des données réelles.",
        },
      ],
    },
    {
      id: "organisations",
      h2: "Quelle organisation choisir pour réduire les appels manqués ?",
      blocks: [
        {
          t: "p",
          text: "Plusieurs organisations sont possibles. Aucune n'est la bonne pour toutes les agences : le journal d'appels indique à quels créneaux vous avez besoin d'aide.",
        },
        {
          t: "table",
          caption: "Organisations possibles pour les appels entrants",
          head: ["Organisation", "Utile quand", "Limite à connaître"],
          rows: [
            ["Renvoi vers un mobile ou rotation interne", "Les manques sont ponctuels et l'équipe est réactive", "Repose sur la disponibilité des personnes"],
            ["Messagerie vocale et rappel", "Les appelants acceptent de laisser un message", "Certains appelants raccrochent sans message"],
            ["Télésecrétariat humain", "Les échanges demandent de la nuance", "Plages horaires et périmètre définis par le prestataire"],
            ["Standard téléphonique IA", "Les appels tombent quand l'équipe est indisponible", "Appliquent les règles validées, avec reprise humaine pour le reste"],
          ],
        },
        {
          t: "p",
          text: "Pour comparer en détail le télésecrétariat humain et les standards IA, lisez [Télésecrétariat humain ou standard téléphonique IA](/ressources/telesecretariat-humain-ou-ia).",
        },
        {
          t: "p",
          text: "Rushh propose l'une de ces options : un standard téléphonique alimenté par intelligence artificielle, pour les appels entrants uniquement, conçu, configuré, testé et suivi par Rushh selon vos règles. Voir [l'offre Rushh](/offre) (tarification sur devis) et, pour les appels vendeurs et acquéreurs pendant les visites, la page [transaction immobilière](/solutions/transaction-immobiliere).",
        },
      ],
    },
    {
      id: "mesurer",
      h2: "Comment mesurer l'évolution après un changement ?",
      blocks: [
        {
          t: "p",
          text: "Trois indicateurs suffisent, à calculer sur la même durée et les mêmes créneaux avant et après le changement :",
        },
        {
          t: "ul",
          items: [
            "**Taux d'appels manqués** : appels manqués divisés par appels entrants.",
            "**Part des appels rappelés dans le délai cible** : parmi les appels à rappeler, ceux rappelés à temps.",
            "**Part des motifs connus** : parmi les appels manqués, ceux dont vous avez pu identifier le motif.",
          ],
        },
        {
          t: "callout",
          kind: "hypo",
          text: "Avec peu d'appels par semaine, une variation d'un ou deux appels n'est probablement pas un signal. Comparez des périodes assez longues, et notez les événements qui ont pu influencer le volume (congés, nouvelle annonce, changement d'horaires).",
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist à appliquer cette semaine",
      blocks: [
        {
          t: "checklist",
          items: [
            "Lister tous les numéros et renvois par lesquels arrivent les appels.",
            "Exporter le journal d'appels de plusieurs semaines complètes.",
            "Séparer appels décrochés et appels manqués.",
            "Regrouper les appels manqués par créneau.",
            "Repérer les numéros qui ont appelé plusieurs fois sans réponse.",
            "Rappeler ces numéros en priorité.",
            "Noter le motif lorsqu'il est connu, « inconnu » sinon.",
            "Désigner un responsable des rappels par créneau.",
            "Fixer un délai cible et un nombre de tentatives.",
            "Copier le tableau de suivi et le remplir chaque jour.",
            "Fixer une date pour comparer la période suivante.",
          ],
        },
      ],
    },
  ],
  sources: [],
  sourcesNote:
    "Ce guide ne s'appuie sur aucune statistique externe. Les exemples sont fictifs et les délais proposés sont des exemples à adapter ; les recommandations sont des pratiques proposées par Rushh, pas des obligations. Les informations sur l'offre Rushh sont celles de la page L'offre Rushh.",
  rushh: {
    title: "Ce que devient un appel que vous ne pouvez pas prendre",
    text: "Un propriétaire ou un acquéreur appelle pendant une visite : Rushh décroche, recueille le motif et les informations utiles, puis transmet une demande exploitable. Vous voyez ce qu'il reste à faire, au lieu d'un numéro non lu.",
    points: [
      "Prise en charge selon vos règles : tous les appels, appels manqués, ligne occupée ou hors horaires",
      "Qualification : motif, projet et coordonnées indiquées par l'appelant",
      "Rendez-vous sur un agenda connecté, ou demande transmise à votre équipe",
      "Suivi : résumé et statut de chaque appel dans la plateforme Rushh",
    ],
    links: [
      { href: "/solutions/transaction-immobiliere", label: "Voir la page transaction immobilière" },
      { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou standard téléphonique IA",
      text: "Comparer les organisations possibles pour prendre les appels.",
    },
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier les appels vendeurs et acquéreurs",
      text: "Quelles informations recueillir quand une demande arrive.",
    },
  ],
  cta: {
    title: "Voir comment Rushh prend les appels pendant vos visites",
    text: "Testez la ligne de démonstration ou demandez une démonstration personnalisée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
