import type { Article } from "./types";

export const standardApimo: Article = {
  path: "/ressources/standard-telephonique-ia-apimo",
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-apimo.png",
    width: 1600,
    height: 840,
    alt: "Un appel entrant traverse le standard Rushh puis atteint une fiche dans le logiciel Apimo, par une connexion API conditionnée aux droits accordés à l'agence ; en l'absence de droits, un repli transmet la demande à l'équipe sans connexion.",
  },
  title: "Standard téléphonique IA et Apimo : connexion sur mesure | Rushh",
  description:
    "Connecter un standard téléphonique IA à Apimo : ce que documente l'API, les droits nécessaires, les cas d'usage, les validations et le repli.",
  shortTitle: "Standard téléphonique IA et Apimo",
  summary: "Ce que l'API Apimo documente, quels droits sont nécessaires et ce qu'une connexion sur mesure permet.",
  h1: "Comment connecter un standard téléphonique IA au CRM Apimo ?",
  answer:
    "Rushh réalise sur mesure des connexions avec les logiciels immobiliers accessibles par API, dont Apimo lorsque l'agence dispose des accès et des droits nécessaires. Les actions possibles (créer un lead, le rattacher à une annonce, mettre à jour une fiche) dépendent de ces droits et d'une validation avec l'agence. Il ne s'agit pas d'un plug-in universel présenté comme natif ou certifié.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "api-apimo",
      h2: "Ce que documente réellement l'API Apimo",
      blocks: [
        {
          t: "p",
          text: "Apimo présente son API comme destinée aux prestataires immobiliers. D'après sa page d'introduction, elle donne accès en lecture à des informations sur l'agence, ses annonces, ses contacts et certains de ses paramètres, et permet d'envoyer des informations, par exemple des leads, « en fonction de vos droits ». La page renvoie vers une documentation détaillée de l'API et vers un référentiel des données immobilières.",
        },
        {
          t: "p",
          text: "Ce qui est documenté publiquement dans cette introduction ne dit pas tout : elle ne précise pas la procédure d'obtention des accès ni la liste complète des ressources et des droits. Ne présumez donc ni qu'une action est possible, ni qu'elle ne l'est pas : elle se confirme avec l'agence et avec Apimo.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "Ce guide se limite à ce que la documentation publique d'Apimo énonce (annonces, contacts, leads, paramètres, droits) et à la manière dont une connexion sur mesure se prépare. Il ne décrit pas de ressource que cette documentation ne mentionne pas. Page consultée le 31 octobre 2026.",
        },
      ],
    },
    {
      id: "parcours",
      h2: "Parcours d'un appel vendeur et d'un appel acquéreur",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Parcours fictifs, qui décrivent une configuration possible lorsque les droits sont accordés. Ils ne décrivent pas un client réel.",
        },
        { t: "h3", text: "Un appel vendeur" },
        {
          t: "p",
          text: "Un propriétaire appelle pour une estimation. Le standard recueille le projet, le secteur, le type de bien et le moyen de le rappeler. Si l'agence a ouvert le droit d'envoyer des leads, une fiche peut être créée dans Apimo avec ces informations et le motif de l'appel. Sinon, la demande est transmise à l'équipe par le canal de repli prévu (notification ou e-mail).",
        },
        { t: "h3", text: "Un appel acquéreur" },
        {
          t: "p",
          text: "Un acquéreur appelle au sujet d'une annonce. Si le bien peut être identifié (référence donnée par l'appelant, ou lecture des annonces autorisée), le lead peut être rattaché à cette annonce. Si le bien est ambigu, le standard le dit et transmet la demande sans choisir à la place de l'acquéreur.",
        },
      ],
    },
    {
      id: "droits",
      h2: "Lecture des biens, leads, demandes et agendas : droits nécessaires",
      blocks: [
        {
          t: "p",
          text: "Le tableau ci-dessous associe chaque action souhaitée à ce qu'elle suppose. Il distingue ce que la documentation publique d'Apimo mentionne de ce qui reste à confirmer avec l'agence et avec Apimo. Il ne préjuge pas de la configuration de votre compte.",
        },
        {
          t: "table",
          caption: "Actions possibles, données requises et validations (modèle à confirmer avec votre accès)",
          head: ["Action souhaitée", "Données requises", "Droit Apimo", "Validation préalable", "Repli sans connexion"],
          rows: [
            [
              "Créer un lead à partir d'un appel",
              "Identité, moyen de contact, motif, secteur ou bien",
              "Envoi d'informations de type lead, mentionné « en fonction de vos droits »",
              "Droit accordé à l'agence, test sur des données de test",
              "Notification ou e-mail structuré à l'équipe",
            ],
            [
              "Rattacher un lead à une annonce",
              "Référence ou identification du bien",
              "Lecture des annonces, mentionnée par la documentation ; droit à confirmer",
              "Règle de rattachement, gestion des cas ambigus",
              "Le motif et la référence figurent dans le message transmis",
            ],
            [
              "Retrouver un contact existant",
              "Nom, téléphone ou e-mail",
              "Lecture des contacts, mentionnée par la documentation ; droit à confirmer",
              "Règle anti-doublon, base légale et information des personnes",
              "L'équipe vérifie manuellement si le contact existe déjà",
            ],
            [
              "Consulter ou écrire un agenda",
              "Disponibilités, créneaux, règles de réservation",
              "Non mentionné par la page d'introduction : à vérifier auprès d'Apimo",
              "Voir si l'agenda se connecte plutôt par Google Calendar ou Outlook",
              "Demande de rendez-vous à confirmer par l'équipe",
            ],
          ],
          note: "Une action absente de la documentation publique n'est pas forcément impossible, et une action mentionnée peut dépendre du compte. Demandez une confirmation écrite pour votre version et vos droits.",
        },
      ],
    },
    {
      id: "validation",
      h2: "Ce qui doit être validé avec l'agence",
      blocks: [
        {
          t: "ul",
          items: [
            "**Les accès** : qui, chez l'agence ou son groupe, peut demander et accorder les droits d'API, et à quel périmètre.",
            "**Les actions autorisées** : créer, rattacher ou mettre à jour, et ce qui reste en lecture seule.",
            "**Les données** : quelles informations d'appel partent dans Apimo, et lesquelles n'y vont pas.",
            "**Les doublons** : comment éviter deux fiches pour la même personne ou le même bien.",
            "**Les règles de validation humaine** : les appels dont la fiche doit être relue avant de devenir un lead actif.",
            "**Le suivi** : qui est alerté si la connexion échoue, et comment la demande est transmise en attendant.",
          ],
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist d'intégration sans casser le CRM",
      blocks: [
        {
          t: "checklist",
          items: [
            "Les droits d'API sont accordés par écrit pour chaque action prévue",
            "Les premiers essais utilisent des données de test, pas la base réelle",
            "Un repli est actif : si la connexion échoue, la demande part par notification ou e-mail",
            "Les règles anti-doublon sont testées sur des cas réalistes (même appelant, deux biens)",
            "Les informations envoyées respectent le principe de minimisation",
            "Un point de contrôle est prévu après les premiers jours de mise en service",
          ],
        },
        {
          t: "p",
          text: "Pour évaluer ce qu'une connexion annoncée recouvre réellement chez n'importe quel fournisseur, voir la liste de questions du guide [choisir un standard téléphonique IA](/ressources/choisir-standard-telephonique-ia-immobilier). Pour les connexions d'agenda, voir [prise de rendez-vous par IA](/ressources/prise-rendez-vous-ia-immobilier).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Rushh est-il partenaire officiel d'Apimo ?" },
        {
          t: "p",
          text: "Rushh ne se présente pas comme partenaire officiel d'Apimo. La connexion est réalisée sur mesure, avec les accès et droits que l'agence obtient pour son compte.",
        },
        { t: "h3", text: "Existe-t-il un plug-in natif ou certifié ?" },
        {
          t: "p",
          text: "Rushh ne présente pas cette connexion comme native, certifiée ou prête à l'emploi. Elle est conçue et testée avec chaque agence.",
        },
        { t: "h3", text: "Toutes les agences Apimo peuvent-elles être connectées ?" },
        {
          t: "p",
          text: "Cela dépend des accès, des permissions et des possibilités techniques réelles du compte. Sans accès, le standard fonctionne avec une transmission par notification ou e-mail.",
        },
        { t: "h3", text: "Faut-il une connexion pour utiliser un standard IA ?" },
        {
          t: "p",
          text: "Non. La qualification et la transmission structurée des appels fonctionnent sans connexion au logiciel. La connexion évite de ressaisir les informations.",
        },
        { t: "h3", text: "Quelles autres connexions sont possibles ?" },
        {
          t: "p",
          text: "Les possibilités sont étudiées avec chaque agence : voir la page [Intégrations](/integrations) pour les connexions envisagées.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Apimo : API 3, documentation",
      url: "https://apimo.com/api/webservice",
      usedFor:
        "Présentation de l'API pour les prestataires immobiliers : annonces, contacts, leads et paramètres, envoi d'informations selon les droits. La page d'introduction ne détaille pas les ressources ni la procédure d'accès. Consulté le 31 octobre 2026.",
    },
    {
      label: "Apimo : l'API pour les prestataires immobiliers",
      url: "https://apimo.com/api",
      usedFor: "Public visé (prestataires immobiliers) et accès dépendant des droits. Consulté le 31 octobre 2026.",
    },
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les données envoyées dans le logiciel à ce qui est nécessaire. Consulté le 31 octobre 2026.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Connexions envisagées par Rushh, selon le contexte technique de chaque agence.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode et se limite aux informations publiques d'Apimo à la date de consultation. Rushh n'est pas partenaire officiel d'Apimo et ne présente pas la connexion comme native, certifiée ou prête à l'emploi : ce qui est possible dépend des accès, des permissions et des possibilités techniques réelles de chaque agence. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Une connexion Apimo conçue avec votre agence, pas un plug-in générique",
    text: "Rushh réalise sur mesure les connexions aux logiciels immobiliers qui disposent d'une API accessible, avec les droits nécessaires. L'équipe Rushh définit avec l'agence les actions à connecter, les valide sur des données de test, prévoit un repli si la connexion tombe, puis suit le dispositif après la mise en service.",
    points: [
      "Une connexion API réalisée sur mesure lorsque l'agence dispose des accès et des droits",
      "Des actions limitées à ce qui est autorisé, testées avant l'ouverture à la base réelle",
      "Un repli par notification ou e-mail si la connexion n'est pas disponible",
      "Une prestation entièrement prise en charge : vous donnez les accès et validez les règles",
    ],
    links: [
      { href: "/integrations", label: "Voir les intégrations" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier les appels vendeurs et acquéreurs",
      text: "Les informations d'appel qui alimentent une fiche.",
    },
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA",
      text: "Agenda et créneaux : ce qui peut être confirmé.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Les questions à poser sur toute intégration annoncée.",
    },
  ],
  cta: {
    title: "Parlez de votre logiciel et de vos accès",
    text: "Réservez une démonstration adaptée à votre agence : nous regardons avec vous ce qui peut être connecté, avec quels droits, et ce qui reste en transmission simple. Tarification sur devis.",
    links: [
      { href: "/integrations", label: "Intégrations" },
      { href: "/demonstrations", label: "Ligne de démonstration" },
    ],
  },
};
