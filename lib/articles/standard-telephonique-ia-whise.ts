import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const standardWhise: Article = {
  path: "/ressources/standard-telephonique-ia-whise",
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-whise.png",
    width: 1600,
    height: 840,
    alt: "Un appel traverse le standard Rushh puis rencontre deux étapes avant d'atteindre le logiciel Whise : les accès accordés à l'agence et la validation éventuelle de Whise. Sans ces deux conditions, un repli transmet la demande à l'équipe.",
  },
  title: "Standard téléphonique IA et Whise : connexion sur mesure | Rushh",
  description:
    "Connecter un standard téléphonique IA à Whise : ce que dit la page partenaires, accès et validation nécessaires, cas d'usage et repli sans connexion.",
  shortTitle: "Standard téléphonique IA et Whise",
  summary: "Ce que Whise indique publiquement, quels accès et quelles validations une connexion sur mesure suppose.",
  h1: "Comment connecter un standard téléphonique IA à Whise ?",
  answer:
    "Rushh prend en charge la connexion sur mesure avec les logiciels immobiliers accessibles par API, dont Whise lorsque les accès nécessaires sont obtenus. Whise présente un parcours partenaires fondé sur des tests techniques validés par ses équipes : une connexion se prépare donc avec l'agence, avec Whise, et avec un repli prévu si les accès ne sont pas accordés. Elle n'est pas présentée comme native, certifiée ou prête à l'emploi.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "whise-indique",
      h2: "Ce que Whise indique publiquement",
      blocks: [
        {
          t: "p",
          text: "La page « Marketplace » de Whise s'adresse aux partenaires : agences web et marketing, prestataires de produits ou de services, portails. Elle explique que l'API permet à ces partenaires de proposer leurs services aux agents immobiliers directement sur la plateforme Whise, que l'API est documentée et que les partenaires peuvent la tester avec leurs développeurs aussi longtemps que nécessaire.",
        },
        {
          t: "p",
          text: "Le parcours décrit comporte trois étapes : des tests techniques, que Whise valide ; un test commercial auprès d'agents ; puis, une fois ces étapes passées, la possibilité pour chaque agence d'acheter le produit ou le service. La page cite aussi, parmi les intégrations déjà proposées aux utilisateurs, des catégories comme la téléphonie et les SMS, sans détailler leurs fonctions.",
        },
        {
          t: "callout",
          kind: "fact",
          text: `Informations tirées de la page Marketplace de Whise et de sa page de contact, qui indique une adresse dédiée aux partenaires API. Whise ne détaille pas publiquement les ressources accessibles ni les droits associés. ${CONSULTED} Ces conditions peuvent changer : demandez une confirmation écrite.`,
        },
      ],
    },
    {
      id: "differences",
      h2: "Connexion sur mesure et parcours partenaire : deux choses à ne pas confondre",
      blocks: [
        {
          t: "p",
          text: "Le parcours partenaires de Whise vise des services proposés à l'ensemble de ses utilisateurs. Une connexion sur mesure pour une agence donnée relève d'un autre cadre : les accès que l'agence obtient pour son propre compte, et ce que Whise autorise. Savoir quel cadre s'applique à votre agence se confirme auprès de Whise.",
        },
        {
          t: "p",
          text: "Cette distinction explique pourquoi Rushh ne se présente pas comme partenaire officiel de Whise et ne parle pas de plug-in natif ou certifié. Ce que Rushh propose est une prestation : étudier avec l'agence ce qui peut être connecté, réaliser la connexion lorsque les accès existent, la tester, la suivre, et prévoir un repli.",
        },
      ],
    },
    {
      id: "cas-usage",
      h2: "Cas d'usage d'un standard connecté à Whise",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Parcours fictifs, qui décrivent une configuration possible lorsque les accès et validations sont obtenus. Ils ne décrivent pas un client réel.",
        },
        { t: "h3", text: "Un appel vendeur" },
        {
          t: "p",
          text: "Un propriétaire appelle pour une estimation. Le standard recueille le projet, le secteur, le type de bien et le moyen de le rappeler. Si l'écriture dans le logiciel est autorisée, la demande peut y être enregistrée avec son motif. Sinon, elle est transmise à l'équipe par notification ou e-mail.",
        },
        { t: "h3", text: "Un appel acquéreur sur une annonce" },
        {
          t: "p",
          text: "Un acquéreur appelle au sujet d'un bien. Si le bien peut être identifié sans ambiguïté, la demande peut lui être rattachée ; si plusieurs biens correspondent, le standard le signale et transmet la demande sans choisir à la place de l'appelant.",
        },
        { t: "h3", text: "Un appel hors horaires" },
        {
          t: "p",
          text: "Le standard enregistre la demande, annonce un rappel et laisse la suite à l'équipe. La fiche est prête à l'ouverture de l'agence, sous réserve que la connexion existe.",
        },
      ],
    },
    {
      id: "acces",
      h2: "Accès, droits et validations : ce qu'il faut clarifier",
      blocks: [
        {
          t: "table",
          caption: "Actions possibles et points à confirmer pour une connexion à Whise (modèle à adapter)",
          head: ["Action souhaitée", "Données requises", "Ce que Whise indique", "À confirmer", "Repli sans connexion"],
          rows: [
            [
              "Enregistrer une demande issue d'un appel",
              "Identité, moyen de contact, motif, secteur ou bien",
              "Les ressources et droits ne sont pas détaillés publiquement",
              "Accès API de l'agence, droit d'écriture, test sur des données de test",
              "Notification ou e-mail structuré à l'équipe",
            ],
            [
              "Rattacher la demande à un bien",
              "Référence ou identification du bien",
              "Non détaillé publiquement",
              "Droit de lecture des biens, règle de rattachement",
              "La référence et le motif figurent dans le message transmis",
            ],
            [
              "Retrouver un contact existant",
              "Nom, téléphone ou e-mail",
              "Non détaillé publiquement",
              "Droit de lecture des contacts, règle anti-doublon, information des personnes",
              "L'équipe vérifie manuellement",
            ],
            [
              "Consulter ou écrire un agenda",
              "Disponibilités, créneaux, règles de réservation",
              "Non détaillé publiquement",
              "Voir si l'agenda se connecte par Google Calendar ou Outlook",
              "Demande de rendez-vous à confirmer par l'équipe",
            ],
          ],
          note: "Ce tableau ne dit pas ce qui est possible chez Whise : il liste ce qu'il faut faire confirmer. Une action non décrite publiquement n'est pas forcément impossible.",
        },
        {
          t: "ul",
          items: [
            "**Qui demande les accès** : l'agence, son groupe ou le prestataire, selon le cadre que Whise indique.",
            "**La validation de Whise** : si le parcours partenaires s'applique, des tests techniques sont validés par Whise avant ouverture.",
            "**Les délais** : ils dépendent de Whise et de l'agence ; aucun délai ne peut être annoncé ici.",
            "**Le suivi** : qui est alerté si la connexion échoue, et comment la demande est transmise en attendant.",
          ],
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist d'intégration sans casser le logiciel",
      blocks: [
        {
          t: "checklist",
          items: [
            "Les accès sont accordés par écrit pour chaque action prévue",
            "Les premiers essais utilisent des données de test, jamais la base réelle",
            "Un repli est actif : si la connexion échoue, la demande part par notification ou e-mail",
            "Les doublons de contacts et de biens sont testés sur des cas réalistes",
            "Les informations envoyées respectent le principe de minimisation",
            "Un point de contrôle est prévu après les premiers jours de mise en service",
          ],
        },
        {
          t: "p",
          text: "Pour poser les bonnes questions à tout fournisseur qui annonce une intégration, voir le guide [choisir un standard téléphonique IA](/ressources/choisir-standard-telephonique-ia-immobilier). La même démarche pour un autre logiciel est décrite dans [le standard IA connecté à Apimo](/ressources/standard-telephonique-ia-apimo).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Rushh est-il partenaire officiel de Whise ?" },
        {
          t: "p",
          text: "Rushh ne se présente pas comme partenaire officiel de Whise. Il réalise la connexion sur mesure, avec les accès et validations obtenus pour chaque agence.",
        },
        { t: "h3", text: "Existe-t-il un plug-in natif ou certifié ?" },
        {
          t: "p",
          text: "Rushh ne présente pas cette connexion comme native, certifiée ou prête à l'emploi : elle est conçue et testée avec chaque agence.",
        },
        { t: "h3", text: "Faut-il une connexion pour utiliser un standard IA ?" },
        {
          t: "p",
          text: "Non. La qualification et la transmission structurée des appels fonctionnent sans connexion au logiciel ; la connexion évite de ressaisir les informations.",
        },
        { t: "h3", text: "Whise valide-t-il les connexions ?" },
        {
          t: "p",
          text: "Pour son parcours partenaires, Whise indique valider les tests techniques. Ce qui s'applique à votre agence se confirme directement auprès de Whise.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Whise : marketplace et partenaires",
      url: "https://www.whise.eu/fr-fr/marketplace/",
      usedFor: `Public visé par le parcours partenaires, API documentée et testable, trois étapes dont une validation technique par Whise, intégrations existantes citées (téléphonie, SMS). ${CONSULTED}`,
    },
    {
      label: "Whise : contact",
      url: "https://www.whise.eu/fr-fr/contact/",
      usedFor: `Existence d'un contact dédié aux partenaires API ; la page ne décrit pas de procédure d'accès. ${CONSULTED}`,
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
    "Ce guide se limite aux informations publiques de Whise à la date de consultation et ne décrit aucune ressource que ces pages ne mentionnent pas. Rushh n'est pas partenaire officiel de Whise et ne présente pas la connexion comme native, certifiée ou prête à l'emploi : ce qui est possible dépend des accès, des validations et des possibilités techniques réelles de chaque agence. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Une connexion à Whise étudiée avec votre agence, avec un repli si les accès manquent",
    text: "Rushh prend en charge la connexion sur mesure avec les logiciels immobiliers accessibles par API. L'équipe Rushh étudie avec l'agence les actions à connecter, les valide sur des données de test, prévoit un repli et suit le dispositif après la mise en service : l'agence n'a pas à construire l'intégration elle-même.",
    points: [
      "Une prestation entièrement prise en charge : étude, connexion, tests et suivi par Rushh",
      "Des actions limitées à ce qui est autorisé et testé avant ouverture à la base réelle",
      "Un repli par notification ou e-mail si la connexion n'est pas disponible",
      "Aucune promesse de connexion native ou certifiée : ce qui est possible se confirme avec vous",
    ],
    links: [
      { href: "/integrations", label: "Voir les intégrations" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/ressources/standard-telephonique-ia-apimo",
      label: "Standard IA connecté à Apimo",
      text: "La même démarche pour un autre logiciel immobilier.",
    },
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier les appels vendeurs et acquéreurs",
      text: "Les informations d'appel qui alimentent une fiche.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Les questions à poser sur toute intégration annoncée.",
    },
  ],
  cta: {
    title: "Parlez de votre logiciel et de vos accès",
    text: "Réservez une démonstration adaptée à votre agence : nous regardons avec vous ce qui peut être connecté à Whise, avec quels accès, et ce qui reste en transmission simple. Tarification sur devis.",
    links: [
      { href: "/integrations", label: "Intégrations" },
      { href: "/demonstrations", label: "Ligne de démonstration" },
    ],
  },
};
