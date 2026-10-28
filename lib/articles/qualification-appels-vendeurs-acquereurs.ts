import type { Article } from "./types";

export const qualification: Article = {
  path: "/ressources/qualification-appels-vendeurs-acquereurs",
  cover: {
    src: "/ressources/qualification-appels-vendeurs-acquereurs.png",
    width: 1600,
    height: 840,
    alt: "Illustration : deux appels entrants, un vendeur qui demande une estimation et un acquéreur qui recherche un bien, convergent vers une qualification puis une fiche de contact identifié, demande qualifiée, transmise à l'équipe.",
  },
  category: "appels-qualification",
  title: "Qualifier un appel vendeur ou acquéreur : méthode | Rushh",
  description:
    "Quelles informations recueillir et transmettre quand un vendeur ou un acquéreur appelle ? Méthode, informations utiles et deux fiches modèles fictives.",
  h1: "Comment qualifier les appels vendeurs et acquéreurs en agence immobilière ?",
  answer:
    "Qualifier un appel, c'est identifier son motif, recueillir uniquement les informations utiles à la prochaine action, puis les transmettre au négociateur dans un résumé structuré, avec une prochaine étape claire. Pour un vendeur : le bien, sa localisation, le projet et le souhait d'estimation. Pour un acquéreur : l'annonce ou la recherche, les critères, le projet et la demande de visite. Ne collectez pas plus que nécessaire.",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  sections: [
    {
      id: "definition",
      h2: "Que veut dire qualifier un appel ?",
      blocks: [
        {
          t: "p",
          text: "Qualifier un appel, c'est comprendre la demande et recueillir de quoi y donner suite. Ce n'est pas décider : accepter un mandat, fixer un prix ou valider un projet d'achat restent des décisions humaines.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Règle de travail : chaque information demandée doit servir la prochaine action (rappeler, proposer un rendez-vous, organiser une visite, transférer). Si elle ne sert à rien à ce stade, ne la demandez pas.",
        },
      ],
    },
    {
      id: "motif",
      h2: "Identifier le motif avant de poser des questions",
      blocks: [
        {
          t: "p",
          text: "Laissez d'abord l'appelant dire pourquoi il appelle, avec ses mots, puis reformulez pour confirmer. Les questions viennent ensuite, dans l'ordre utile à ce motif. Les motifs se classent en quelques familles :",
        },
        {
          t: "ul",
          items: [
            "souhait de vendre ou demande d'estimation ;",
            "recherche d'un bien à acheter ;",
            "demande d'information sur une annonce ;",
            "demande de visite ;",
            "suivi d'un dossier en cours ;",
            "message à transmettre à un collaborateur.",
          ],
        },
      ],
    },
    {
      id: "ne-pas-redemander",
      h2: "Éviter de redemander ce qui a déjà été dit",
      blocks: [
        {
          t: "p",
          text: "Faire répéter son projet à l'appelant quand le négociateur le rappelle fait perdre du temps à tout le monde. Trois habitudes l'évitent :",
        },
        {
          t: "ul",
          items: [
            "noter au fil de la conversation, pas à la fin ;",
            "transmettre un résumé complet avec la demande, pour que le négociateur démarre avec le contexte ;",
            "lorsque l'appelant est déjà connu, relier l'appel à son dossier si votre organisation le permet.",
          ],
        },
      ],
    },
    {
      id: "vendeur",
      h2: "Quelles informations recueillir auprès d'un vendeur ?",
      blocks: [
        {
          t: "table",
          caption: "Informations à recueillir lors d'un premier appel vendeur",
          head: ["Information", "Pourquoi", "Niveau"],
          rows: [
            ["Nom et moyen de rappel", "Pouvoir rappeler", "Indispensable"],
            ["Nature du bien (appartement, maison…)", "Orienter vers le bon négociateur", "Indispensable"],
            ["Localisation (commune ou quartier)", "Vérifier le secteur couvert", "Indispensable"],
            ["Projet (vente, estimation, simple renseignement)", "Définir la prochaine action", "Indispensable"],
            ["Calendrier envisagé", "Prioriser le rappel", "Utile"],
            ["Souhait d'estimation", "Proposer un rendez-vous d'estimation", "Utile"],
            ["Origine de l'appel (annonce, recommandation…)", "Suivre d'où viennent les demandes", "Utile"],
            ["Adresse exacte, détails financiers du ménage", "Rarement nécessaire au premier appel", "À éviter à ce stade"],
          ],
          note: "Recommandation pratique : le niveau « indispensable » peut varier selon votre organisation.",
        },
      ],
    },
    {
      id: "acquereur",
      h2: "Quelles informations recueillir auprès d'un acquéreur ?",
      blocks: [
        {
          t: "table",
          caption: "Informations à recueillir lors d'un premier appel acquéreur",
          head: ["Information", "Pourquoi", "Niveau"],
          rows: [
            ["Nom et moyen de rappel", "Pouvoir rappeler", "Indispensable"],
            ["Annonce concernée ou recherche en cours", "Savoir de quel bien ou de quelle recherche il s'agit", "Indispensable"],
            ["Critères (type de bien, secteur, nombre de pièces)", "Orienter la réponse du négociateur", "Indispensable"],
            ["Demande de visite et disponibilités", "Organiser la suite", "Indispensable si visite demandée"],
            ["Projet (résidence principale, investissement)", "Adapter la conversation", "Utile"],
            ["Budget", "Vérifier l'adéquation, si l'appelant souhaite l'indiquer", "Utile, facultatif"],
            ["Plan de financement, revenus, situation personnelle", "À aborder plus tard, si nécessaire", "À éviter à ce stade"],
          ],
          note: "Recommandation pratique : un appelant peut préférer ne pas donner son budget au premier appel ; notez « non communiqué ».",
        },
      ],
    },
    {
      id: "minimisation",
      h2: "Quelles informations éviter, et pourquoi ?",
      blocks: [
        {
          t: "callout",
          kind: "fact",
          text: "Le RGPD demande que les données personnelles collectées soient « adéquates, pertinentes et limitées » à ce qui est nécessaire pour la finalité du traitement : c'est le principe de minimisation, tel que le définit la CNIL (voir Sources).",
        },
        {
          t: "p",
          text: "Appliqué à un appel, le principe se traduit simplement : demandez ce qui sert la prochaine action, rien de plus. Sauf nécessité claire, ne recueillez pas d'informations sur la santé, la situation familiale détaillée ou les revenus lors d'un premier appel.",
        },
      ],
    },
    {
      id: "resume",
      h2: "Comment structurer un résumé pour le négociateur ?",
      blocks: [
        {
          t: "p",
          text: "Un bon résumé se lit en quinze secondes et se termine par une action. Reprenez ces champs, dans cet ordre :",
        },
        {
          t: "ol",
          items: [
            "Date et heure de l'appel.",
            "Appelant : nom et moyen de rappel.",
            "Motif, formulé en une phrase.",
            "Bien ou recherche concernée.",
            "Informations utiles recueillies.",
            "Ce qui a été indiqué à l'appelant.",
            "Prochaine action, responsable et échéance.",
            "Point d'attention, et transfert humain nécessaire ou non.",
          ],
        },
      ],
    },
    {
      id: "fiches",
      h2: "Deux fiches modèles à reprendre",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Ces deux fiches sont fictives : elles montrent le format, pas de vrais appelants. Reprenez les champs, pas les valeurs.",
        },
        {
          t: "fiche",
          title: "Fiche 1 : appel vendeur, projet d'estimation",
          rows: [
            ["Date et heure", "Mardi, 16 h 40"],
            ["Appelant", "Mme D. (exemple fictif), rappel au numéro affiché"],
            ["Motif", "Souhaite faire estimer sa maison avant de décider de vendre"],
            ["Bien", "Maison de 5 pièces, environ 110 m² (indiqués par l'appelante), à Rennes"],
            ["Informations utiles", "Projet de vente envisagé dans les six mois ; maison actuellement occupée"],
            ["Indiqué à l'appelante", "Un négociateur la rappellera pour proposer un rendez-vous d'estimation"],
            ["Prochaine action", "Rappeler pour proposer un rendez-vous, avant jeudi midi"],
            ["Point d'attention", "Préfère être rappelée en fin de journée. Transfert humain : non"],
          ],
          note: "Exemple fictif.",
        },
        {
          t: "fiche",
          title: "Fiche 2 : appel acquéreur, demande de visite",
          rows: [
            ["Date et heure", "Jeudi, 11 h 05"],
            ["Appelant", "M. L. (exemple fictif), rappel au numéro affiché"],
            ["Motif", "Souhaite visiter un appartement vu en annonce"],
            ["Bien concerné", "T3 de l'annonce n° A-1042 (référence fictive)"],
            ["Informations utiles", "Recherche une résidence principale ; budget non communiqué ; disponible samedi matin"],
            ["Indiqué à l'appelant", "Les disponibilités de visite seront confirmées par le négociateur"],
            ["Prochaine action", "Confirmer la visite de samedi matin et rappeler l'appelant, avant vendredi 17 h"],
            ["Point d'attention", "Aucun. Transfert humain : non"],
          ],
          note: "Exemple fictif.",
        },
      ],
    },
    {
      id: "prochaine-action",
      h2: "Quelle prochaine action définir ?",
      blocks: [
        {
          t: "p",
          text: "Chaque fiche se termine par une action, un responsable et une échéance. Les actions possibles sont peu nombreuses :",
        },
        {
          t: "ul",
          items: [
            "transmettre au négociateur pour un rappel ;",
            "proposer un rendez-vous (estimation, visite) selon vos règles ;",
            "transférer l'appel à un collaborateur ;",
            "répondre à une question simple et clore la demande.",
          ],
        },
      ],
    },
    {
      id: "transfert",
      h2: "Quand transférer à un humain ?",
      blocks: [
        {
          t: "p",
          text: "Prévoyez à l'avance les situations qui passent directement à une personne :",
        },
        {
          t: "ul",
          items: [
            "l'appelant demande à parler à un humain ;",
            "il s'agit d'un litige, d'une réclamation ou d'un appelant mécontent ;",
            "la demande concerne un dossier en cours avec un négociateur identifié ;",
            "la demande sort des scénarios prévus ;",
            "la situation paraît urgente ou sensible.",
          ],
        },
        {
          t: "p",
          text: "Si un appelant doit savoir qu'il échange avec une IA, voir [Télésecrétariat humain ou standard téléphonique IA](/ressources/telesecretariat-humain-ou-ia).",
        },
      ],
    },
    {
      id: "avec-rushh",
      h2: "Et avec un standard téléphonique IA ?",
      blocks: [
        {
          t: "p",
          text: "Ces fiches et ces règles de transfert peuvent être configurées dans un standard téléphonique alimenté par intelligence artificielle. Chez Rushh, elles sont définies avec vous, testées avant la mise en service, et appliquées selon la configuration et les connexions validées. Le Standard recueille et transmet : il ne prend aucune décision immobilière importante à votre place, et il ne promet ni mandat ni rendez-vous.",
        },
        {
          t: "p",
          text: "Voir comment cela s'applique à la vente et à l'achat sur la page [transaction immobilière](/solutions/transaction-immobiliere), ou testez un appel sur la [ligne de démonstration](/demonstrations).",
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist : vérifier vos trois derniers appels",
      blocks: [
        {
          t: "checklist",
          items: [
            "Reprendre trois appels vendeurs ou acquéreurs récents.",
            "Vérifier que le motif est écrit en une phrase.",
            "Vérifier que chaque information notée a servi la prochaine action.",
            "Supprimer les champs que personne n'utilise.",
            "Contrôler que chaque fiche se termine par une action, un responsable et une échéance.",
            "Lister les situations à transférer directement à un humain.",
          ],
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : définition de la minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Principe selon lequel les données doivent être « adéquates, pertinentes et limitées » à ce qui est nécessaire. Page consultée le 28 octobre 2026.",
    },
  ],
  sourcesNote:
    "Les fiches sont des exemples fictifs ; les listes d'informations sont des recommandations pratiques de Rushh, à adapter à votre organisation. Ce guide n'est pas un avis juridique.",
  related: [
    {
      href: "/ressources/appels-manques-immobilier",
      label: "Appels manqués en agence immobilière",
      text: "Mesurer et rappeler les appels que vous n'avez pas pu prendre.",
    },
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou standard téléphonique IA",
      text: "Choisir qui prend vos appels entrants.",
    },
  ],
  cta: {
    title: "Voir ces fiches appliquées à un appel réel",
    text: "Appelez la ligne de démonstration, ou demandez une démonstration personnalisée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
