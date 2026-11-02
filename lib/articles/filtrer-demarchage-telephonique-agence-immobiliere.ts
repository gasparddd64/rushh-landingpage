import type { Article } from "./types";

export const filtrerDemarchage: Article = {
  path: "/ressources/filtrer-demarchage-telephonique-agence-immobiliere",
  category: "guides",
  cover: {
    src: "/ressources/filtrer-demarchage-telephonique-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Un appel entrant passe par une question centrale, qui appelle et pourquoi, puis se dirige vers cinq suites : vendeur, acquéreur, locataire ou bailleur, prestataire connu, ou démarchage, qui reçoit un message ou un refus poli. En cas de doute, l'appel est transmis.",
  },
  title: "Filtrer le démarchage téléphonique en agence immobilière | Rushh",
  description:
    "Distinguer démarchage, vendeurs, acquéreurs, prestataires et appels importants : cinq profils, un arbre de qualification, des règles écrites.",
  shortTitle: "Filtrer le démarchage sans perdre un vrai appel",
  summary: "Cinq profils d'appelants, quatre questions et des règles écrites pour trier sans rater un appel utile.",
  h1: "Comment filtrer le démarchage téléphonique d'une agence immobilière sans perdre un vrai appel ?",
  answer:
    "Pour filtrer le démarchage sans perdre un vrai appel, qualifiez avant de refuser : qui appelle, pour quelle raison, et avec qui il veut parler. Cinq profils couvrent la plupart des cas : vendeurs, acquéreurs, locataires ou bailleurs, prestataires connus et démarchage. En cas de doute, la règle sûre est de prendre un message ou de transmettre, jamais de raccrocher. Aucun filtre n'est parfait : ce qui compte est la règle écrite et la revue régulière des appels écartés.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "probleme",
      h2: "Le problème : un appel de démarchage ressemble parfois à un vrai appel",
      blocks: [
        {
          t: "p",
          text: "Une agence reçoit des appels de vendeurs, d'acquéreurs, de locataires, de prestataires et de commerciaux. Ces derniers interrompent un agent pendant une visite ou monopolisent une ligne, mais certains se présentent comme des clients ou évoquent une annonce. À l'inverse, un vrai vendeur qui hésite à donner son nom peut être pris pour un solliciteur.",
        },
        {
          t: "p",
          text: "Refuser en bloc est donc risqué, et tout transmettre fait perdre du temps. La méthode ci-dessous consiste à qualifier d'abord, puis à décider de la suite avec des règles écrites. Elle s'applique qu'un collègue ou un standard téléphonique IA prenne l'appel.",
        },
      ],
    },
    {
      id: "profils",
      h2: "Cinq profils d'appelants et la suite à leur donner",
      blocks: [
        {
          t: "table",
          caption: "Cinq profils d'appelants, signaux et suite conseillée",
          head: ["Profil", "Signaux fréquents", "Suite à donner", "À ne pas faire"],
          rows: [
            [
              "Vendeur ou propriétaire",
              "Parle de son bien, d'une estimation, d'un projet de vente",
              "Qualifier le projet, proposer un rendez-vous ou un rappel",
              "Le traiter comme un démarcheur parce qu'il hésite à se présenter",
            ],
            [
              "Acquéreur",
              "Évoque une annonce, une visite, un budget",
              "Identifier le bien et le moyen de le joindre, transmettre vite",
              "Ignorer un appel sur une annonce récente",
            ],
            [
              "Locataire ou bailleur",
              "Signale un incident, demande une quittance, parle d'un logement géré",
              "Qualifier selon l'urgence, transmettre au gestionnaire",
              "Répondre sur un dossier à un tiers non identifié",
            ],
            [
              "Prestataire ou partenaire connu",
              "Nomme un collaborateur, un chantier, une intervention en cours",
              "Transmettre à la personne concernée, avec le message",
              "Le confondre avec une prospection",
            ],
            [
              "Démarchage commercial",
              "Propose un service, demande « le responsable », ne cite aucun dossier",
              "Répondre poliment, proposer un message écrit ou décliner selon la règle de l'agence",
              "Raccrocher sans suite ou laisser sonner jusqu'à épuisement",
            ],
          ],
          note: "Modèle à adapter à votre organisation. Les signaux sont des indices, pas des preuves : en cas de doute, prendre un message est la règle prudente.",
        },
      ],
    },
    {
      id: "arbre",
      h2: "Un arbre de qualification en quatre questions",
      blocks: [
        {
          t: "ol",
          items: [
            "**Qui appelle ?** Un particulier, un professionnel, un partenaire connu. L'appelant le dit lui-même ; on ne le devine pas.",
            "**Pourquoi appelle-t-il ?** Le motif oriente vers l'un des cinq profils. Une demande liée à un bien, un dossier ou un rendez-vous est présumée utile.",
            "**Cite-t-il un dossier, un bien ou un interlocuteur ?** Si oui, transmettre. Si non et que la demande est commerciale, passer à la règle de démarchage.",
            "**Quelle suite ?** Rendez-vous, rappel, transmission, message ou refus poli. Une suite est toujours annoncée à l'appelant.",
          ],
        },
        {
          t: "callout",
          kind: "example",
          text: "Cas limites fictifs. Un appelant dit « j'appelle au sujet de l'annonce » mais ne cite aucun bien : demander laquelle, puis transmettre ou prendre un message. Un appelant demande « le directeur » sans autre précision : proposer de transmettre un message plutôt que de refuser. Un appelant dit être « votre prestataire » sans nommer de chantier : prendre le message et le faire vérifier.",
        },
      ],
    },
    {
      id: "regles",
      h2: "Les règles à écrire avant de filtrer",
      blocks: [
        {
          t: "ul",
          items: [
            "**La liste des interlocuteurs connus** : prestataires, partenaires, fournisseurs que l'agence veut toujours transmettre.",
            "**La réponse standard au démarchage** : une phrase polie, sans promesse de rappel, avec la possibilité de laisser un message écrit.",
            "**La règle du doute** : en cas d'incertitude, prendre un message ou transmettre. Ne jamais refuser un appel dont le motif est incertain.",
            "**La limite à ne pas dépasser** : ce que l'agence refuse de faire au téléphone, par exemple communiquer des informations sur un dossier à un tiers.",
            "**Le point de revue** : une fois par semaine, relire les appels écartés pour corriger les règles.",
          ],
        },
        {
          t: "p",
          text: "Les informations recueillies doivent rester limitées au besoin : la CNIL rappelle le principe de minimisation des données. Pour un appel écarté, un motif et un horaire suffisent souvent.",
        },
      ],
    },
    {
      id: "mesure",
      h2: "Mesurer sans se tromper de chiffre",
      blocks: [
        {
          t: "table",
          caption: "Tableau de revue hebdomadaire du filtrage",
          head: ["Indicateur", "Comment le lire", "Piège à éviter"],
          rows: [
            ["Appels transmis", "Nombre d'appels envoyés à l'équipe", "Croire qu'un taux de transmission bas est un bon signe"],
            ["Appels écartés", "Nombre d'appels refusés ou orientés vers un message", "Ne jamais relire ce qui a été écarté"],
            ["Faux refus relevés", "Appels écartés qui auraient dû être transmis, repérés à la relecture", "Compter seulement les réclamations reçues"],
            ["Messages laissés", "Demandes écrites des solliciteurs", "Les laisser sans lecture ni tri"],
          ],
          note: "Aucun taux de filtrage n'est promis dans ce guide : il dépend de vos appels et de vos règles.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA peut-il filtrer parfaitement le démarchage ?" },
        {
          t: "p",
          text: "Non. Il applique les règles de qualification définies avec l'agence et laisse un message ou transmet en cas de doute. Un filtrage parfait n'existe pas : c'est la revue régulière qui limite les erreurs.",
        },
        { t: "h3", text: "Faut-il bloquer le numéro d'un démarcheur ?" },
        {
          t: "p",
          text: "Cela relève de votre opérateur et de votre organisation. Le plus simple est de définir une réponse standard et un message écrit, sans conserver plus de données que nécessaire.",
        },
        { t: "h3", text: "Comment éviter de refuser un vrai vendeur ?" },
        {
          t: "p",
          text: "En qualifiant d'abord le motif, et en prenant un message si celui-ci est incertain. Un appel qui évoque un bien, une estimation ou un projet de vente n'est jamais écarté.",
        },
        { t: "h3", text: "Que faire d'un appel qui hésite entre deux profils ?" },
        {
          t: "p",
          text: "Appliquer la règle du doute : prendre un message ou transmettre à la personne la plus proche du sujet.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les informations recueillies sur un appelant au besoin de la finalité. Consulté le 31 octobre 2026.",
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode : les profils, signaux et cas limites sont des modèles fictifs à adapter. Aucun taux de filtrage ni chiffre de marché n'est avancé, et aucun filtre n'est présenté comme parfait. Ce texte n'est pas un avis juridique. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Des scénarios de qualification écrits avec vous, pour trier sans rien jeter",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, qualifie chaque appel entrant avant de décider de la suite. Les cinq profils de ce guide deviennent des scénarios sur mesure : vos interlocuteurs connus, votre réponse au démarchage, votre règle du doute. Un message est pris ou l'appel transmis lorsque la demande n'est pas claire.",
    points: [
      "Des scénarios de qualification écrits pour votre agence, pas un filtre générique",
      "Vos règles appliquées : interlocuteurs à toujours transmettre, réponse au démarchage, règle du doute",
      "Une transmission structurée avec le motif de l'appel",
      "Une prestation entièrement prise en charge, avec des tests avant la mise en service",
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
      text: "Les informations utiles selon le profil de l'appelant.",
    },
    {
      href: "/ressources/permanence-telephonique-agence-immobiliere",
      label: "Organiser la permanence téléphonique",
      text: "Qui prévenir, et quand, selon le motif d'appel.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Dix scénarios à tester avant de signer.",
    },
  ],
  cta: {
    title: "Testez le standard sur un appel de démarchage",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et jouez un vendeur, un acquéreur, puis un commercial : vous jugerez la qualification et la suite donnée à chacun. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
