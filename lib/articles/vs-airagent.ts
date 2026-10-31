import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const vsAirAgent: Article = {
  path: "/vs/airagent",
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-airagent.png",
    width: 1600,
    height: 840,
    alt: "Deux parcours comparés, un agent vocal à lancer soi-même et une prestation prise en charge, qui convergent vers le même test : vos propres appels. Aucun classement n'est établi entre les deux approches.",
  },
  title: "Rushh ou AirAgent : comparer pour une agence immobilière",
  description:
    "Rushh ou AirAgent pour vos appels d'agence ? Spécialisation, mise en place, personnalisation, intégrations et accompagnement comparés d'après leurs sites.",
  shortTitle: "Rushh ou AirAgent : deux approches comparées",
  summary: "Un agent vocal à lancer vite face à une prestation gérée : ce qui les distingue, d'après leurs sites.",
  h1: "Rushh ou AirAgent : quelle solution pour les appels d'une agence immobilière ?",
  answer:
    "AirAgent et Rushh proposent tous deux une offre pour les appels des agences immobilières : réponse 24 h/24, qualification et prise de rendez-vous. AirAgent met en avant un lancement en quelques minutes et des connexions par Google Agenda, Cal.com, Zapier ou Make. Rushh fait un autre choix : une prestation entièrement prise en charge, centrée sur l'immobilier et sur les appels entrants, avec des connexions API sur mesure. Aucun classement ici : l'essai sur vos appels départage.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "cadre",
      h2: "Deux offres pour les appels immobiliers, deux façons de les mettre en place",
      blocks: [
        {
          t: "p",
          text: "AirAgent possède une page consacrée à l'immobilier : il serait inexact de le présenter comme un outil purement généraliste. Rushh est, de son côté, entièrement tourné vers l'immobilier. La vraie différence n'est donc pas « immobilier ou non », mais la manière dont chaque offre est mise en place et exploitée.",
        },
        {
          t: "callout",
          kind: "fact",
          text: `Informations sur AirAgent d'après sa page immobilier. La page ne porte pas de date de publication visible. Ses caractéristiques et conditions peuvent changer ; demandez une confirmation écrite. ${CONSULTED}`,
        },
      ],
    },
    {
      id: "commun",
      h2: "Ce que les deux solutions ont en commun",
      blocks: [
        {
          t: "p",
          text: "AirAgent annonce sur sa page un agent vocal qui répond 24 h/24, qualifie les demandes en distinguant acquéreurs, vendeurs, investisseurs et locataires, réserve des visites ou des estimations en vérifiant un calendrier connecté, et transfère les appels à la bonne personne. Rushh propose, pour les appels entrants immobiliers, une réponse, une qualification, des rendez-vous selon la configuration et une transmission structurée. Les fonctions se recoupent : aucune de ces deux listes ne donne un avantage exclusif à l'une des offres.",
        },
      ],
    },
    {
      id: "perimetres",
      h2: "Comparaison des périmètres annoncés",
      blocks: [
        {
          t: "table",
          caption: "Rushh et AirAgent comparés sur neuf critères",
          head: ["Critère", "Rushh", "AirAgent, selon sa page immobilier"],
          rows: [
            ["Offre dédiée à l'immobilier", "Oui, toute l'offre est conçue pour l'immobilier", "Oui, une page immobilier existe ; la plateforme n'est pas décrite comme réservée à ce secteur"],
            ["Appels entrants", "Oui, cœur de l'offre", "Oui, cas d'usage principal"],
            ["Appels sortants", "Non proposés", "Évoqués dans le menu (appels en masse, prospection), sans détail sur la page"],
            ["Qualification", "Scénarios écrits avec l'agence selon ses règles", "Questions personnalisables, orientation selon le profil de l'appelant"],
            ["Rendez-vous", "Selon les règles et les accès aux agendas", "Visites et estimations, avec vérification d'un calendrier connecté"],
            ["Connexions annoncées", "API sur mesure avec les logiciels immobiliers accessibles, selon les accès ; Google Calendar et Outlook", "Google Agenda, Cal.com, Zapier, Make ; aucun logiciel immobilier nommé sur la page"],
            ["Mise en place", "Prestation entièrement prise en charge : conception, configuration, tests, déploiement et suivi par Rushh", "Inscription en libre-service et lancement annoncé « en quelques minutes » ; démonstration avec un conseiller possible"],
            ["Essai", "Ligne de démonstration, agence fictive à Paris", "Démarrage gratuit annoncé, sans engagement"],
            ["Tarification", "Sur devis", "Une page dédiée existe ; aucun montant sur la page immobilier"],
          ],
          note: "AirAgent : page immobilier du site officiel, consultée le 31 octobre 2026. Rushh : pages /offre et /integrations de ce site.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "AirAgent annonce aussi la possibilité de configurer plusieurs langues et une conformité RGPD. Rushh n'avance pas d'équivalent sur ces points dans ce comparatif : demandez-les à chaque fournisseur.",
        },
      ],
    },
    {
      id: "differences",
      h2: "Les différences vérifiables d'approche",
      blocks: [
        {
          t: "ul",
          items: [
            "**Spécialisation** : toute l'offre de Rushh est écrite pour les situations immobilières (transaction, gestion locative, syndic). AirAgent propose l'immobilier au sein d'une plateforme qui n'y est pas réservée : plusieurs témoignages de sa page proviennent d'autres secteurs.",
            "**Personnalisation** : Rushh écrit les scénarios avec chaque agence. AirAgent permet de personnaliser les questions posées, ce qu'une agence réalise elle-même ou avec un conseiller.",
            "**Prise en charge** : chez Rushh, la conception, les tests, la mise en service et le suivi sont assurés par l'équipe. AirAgent propose un lancement en libre-service, avec un accompagnement possible (démonstration, preuve de concept « généralement » proposée, selon sa page).",
            "**Intégrations** : Rushh réalise sur mesure des connexions avec les logiciels immobiliers accessibles par API, lorsque l'agence dispose des accès et des droits. La page AirAgent décrit des connexions à des outils génériques ; la liaison à un CRM passe, d'après elle, par Zapier ou Make.",
          ],
        },
        {
          t: "p",
          text: "Ces différences ne disent rien de la qualité de la voix ni de la compréhension des appels : les deux sites revendiquent des échanges naturels, et seule une écoute sur vos propres situations permet de les comparer.",
        },
      ],
    },
    {
      id: "contextes",
      h2: "Dans quel cas privilégier quelle approche ?",
      blocks: [
        {
          t: "table",
          caption: "Situations pour lesquelles chaque approche peut convenir",
          head: ["Situation", "Approche à étudier", "Pourquoi"],
          rows: [
            [
              "Vous voulez déléguer la conception, les tests et le suivi du standard",
              "Rushh",
              "Prestation entièrement gérée, centrée sur les appels entrants immobiliers, avec connexions API sur mesure",
            ],
            [
              "Vous voulez lancer un agent vous-même, rapidement, avec un essai gratuit",
              "AirAgent",
              "Inscription en libre-service et démarrage gratuit annoncés ; à vérifier sur son site",
            ],
            [
              "Vous voulez relier le standard à des outils génériques ou à plusieurs langues",
              "AirAgent, à vérifier",
              "Zapier, Make, Cal.com et plusieurs langues sont annoncés ; confirmez ce qui s'applique à votre cas",
            ],
            [
              "Vous hésitez",
              "Les deux, après un test",
              "Seule une écoute sur vos propres appels compare la voix, la réactivité et la suite donnée",
            ],
          ],
        },
        {
          t: "p",
          text: "Ces orientations ne sont pas un classement. La démonstration, le contrat et la qualité de l'exécution doivent départager les propositions.",
        },
      ],
    },
    {
      id: "questions",
      h2: "Six questions à poser avant de signer",
      blocks: [
        {
          t: "checklist",
          items: [
            "Qui rédige, teste et corrige les scénarios après le lancement ?",
            "Quelles demandes peuvent générer un vrai rendez-vous, et lesquelles attendent une confirmation humaine ?",
            "Comment la connexion avec notre logiciel immobilier est-elle réalisée, et qui la maintient ?",
            "Que se passe-t-il pour un bien mal identifié, un appel urgent ou un agenda sans créneau ?",
            "Que comprend l'abonnement, et comment sont facturés les dépassements ?",
            "Quelles sont les règles d'enregistrement, de conservation et de suppression des données d'appel ?",
          ],
        },
        {
          t: "p",
          text: "Pour entendre Rushh sur vos propres phrases, appelez la [ligne de démonstration](/demonstrations) : une agence fictive à Paris. Pour situer ces deux offres, voir le [comparatif des standards téléphoniques IA](/comparatif/standards-telephoniques-ia-immobilier), puis [Rushh ou Fonio](/vs/fonio), [Rushh ou Joe AI](/vs/joe-ai) et [Rushh ou Volubilimo](/vs/volubilimo).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "AirAgent est-il généraliste ?" },
        {
          t: "p",
          text: "AirAgent propose une page dédiée à l'immobilier, avec un cas d'usage de qualification et de rendez-vous. Ses témoignages et sa présentation montrent aussi d'autres secteurs : ce n'est pas un outil réservé à l'immobilier.",
        },
        { t: "h3", text: "AirAgent propose-t-il des appels sortants ?" },
        {
          t: "p",
          text: "Son menu évoque des appels en masse et de la prospection commerciale, sans détail sur la page immobilier. Vérifiez les modalités auprès d'AirAgent.",
        },
        { t: "h3", text: "Rushh propose-t-il des campagnes d'appels sortants ?" },
        { t: "p", text: "Non. Rushh se concentre sur les appels entrants immobiliers." },
        { t: "h3", text: "AirAgent peut-il se connecter à mon logiciel immobilier ?" },
        {
          t: "p",
          text: "Sa page immobilier ne nomme pas de logiciel immobilier et décrit une liaison avec un CRM par Zapier ou Make. Demandez une confirmation pour votre logiciel.",
        },
        { t: "h3", text: "Comment essayer Rushh ?" },
        {
          t: "p",
          text: "Une [ligne de démonstration](/demonstrations) permet de tester des situations immobilières fictives ; la page [offre](/offre) explique le fonctionnement entièrement géré.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "AirAgent : page immobilier",
      url: "https://airagent.fr/immobilier/",
      usedFor: `Réponse 24 h/24, qualification, prise de rendez-vous, transfert, connexions citées (Google Agenda, Cal.com, Zapier, Make), personnalisation des questions, lancement en libre-service, démonstration et preuve de concept, démarrage gratuit. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de Rushh : appels entrants, prestation gérée et tarification sur devis.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Google Calendar, Outlook et logiciels immobiliers, selon le contexte technique.",
    },
  ],
  sourcesNote:
    "Source principale : page immobilier du site officiel d'AirAgent, consultée le 31 octobre 2026, sans date de publication visible. Les descriptions de Rushh proviennent de son offre et de ses choix de périmètre. Les déclarations commerciales d'AirAgent ne sont pas des performances vérifiées indépendamment, et l'absence d'une fonction sur une page ne prouve pas qu'elle n'existe pas. Les orientations par situation et les questions sont des recommandations de Rushh. Rushh édite cette page et en est partie prenante. Pour corriger une information, écrivez à hello@rushh.fr.",
  rushh: {
    title: "Quand Rushh est pertinent face à AirAgent",
    text: "Rushh fait un choix de périmètre : les appels entrants des professionnels de l'immobilier, traités de bout en bout par une équipe qui conçoit, teste, met en service et suit le standard. Si vous voulez déléguer plutôt que configurer vous-même, avec des scénarios écrits pour vos situations et des connexions API réalisées sur mesure, c'est le contexte où Rushh est le plus pertinent.",
    points: [
      "Spécialisation immobilière : transaction, gestion locative, syndic, réseaux",
      "Personnalisation : des scénarios écrits avec vous, selon vos règles",
      "Prestation 100 % prise en charge : conception, tests, mise en service et suivi par Rushh",
      "Intégrations API sur mesure avec les logiciels immobiliers accessibles, selon les accès",
    ],
    links: [
      { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
      { href: "/offre", label: "Voir l'offre Rushh" },
    ],
  },
  related: [
    {
      href: "/comparatif/standards-telephoniques-ia-immobilier",
      label: "Comparatif des standards téléphoniques IA",
      text: "Les offres du marché comparées sur huit critères, sources datées.",
    },
    {
      href: "/vs/volubilimo",
      label: "Rushh ou Volubilimo",
      text: "Deux offres immobilières aux fonctions proches.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "La méthode de sélection avant de comparer des marques.",
    },
  ],
  cta: {
    title: "Comparez la voix et la réactivité sur vos propres appels",
    text: "Appelez la ligne de démonstration Rushh, puis jouez le même scénario avec l'essai d'AirAgent : la voix, la réactivité et la suite donnée se jugent à l'oreille. Tarification Rushh sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
