import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const vsVokai: Article = {
  path: "/vs/vokai",
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-vokai.png",
    width: 1600,
    height: 840,
    alt: "Deux offres immobilières comparées pour les appels entrants, Rushh et VOKAI, qui convergent vers le même test : vos propres appels. Aucun classement n'est établi entre les deux.",
  },
  title: "Rushh ou VOKAI : comparer deux standards IA immobiliers",
  description:
    "Rushh ou VOKAI pour vos appels immobiliers ? Qualification, intégrations, mise en place, support et modèle de service comparés d'après leurs sites.",
  shortTitle: "Rushh ou VOKAI : deux offres immobilières",
  summary: "Deux offres dédiées à l'immobilier : ce qu'elles annoncent, et où elles diffèrent, sans classement.",
  h1: "Rushh ou VOKAI : comparer deux solutions pour les appels immobiliers",
  answer:
    "VOKAI et Rushh proposent tous deux une offre dédiée à l'immobilier pour les appels entrants : qualification des vendeurs et des acquéreurs, rendez-vous, transmission. VOKAI détaille une qualification de financement, une fiche bien envoyée par SMS et une API annoncée pour plusieurs logiciels immobiliers. Rushh fait un autre choix : une prestation entièrement prise en charge, avec des scénarios écrits pour chaque agence et des connexions API sur mesure. Aucun classement ici : l'essai sur vos appels départage.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "cadre",
      h2: "Deux offres immobilières pour les appels entrants",
      blocks: [
        {
          t: "p",
          text: "VOKAI possède une offre explicitement dédiée à l'immobilier, centrée sur les appels entrants : son agent décroche quand les négociateurs sont en visite et filtre le démarchage. Rushh se situe sur le même terrain. Il ne s'agit donc pas d'opposer « une solution immobilière » à « un outil générique » : la comparaison porte sur la manière dont chaque offre est construite et exploitée.",
        },
        {
          t: "callout",
          kind: "fact",
          text: `Informations sur VOKAI d'après sa page dédiée aux agences immobilières, qui ne porte pas de date de publication visible. Ses caractéristiques, chiffres et conditions peuvent changer ; demandez une confirmation écrite. ${CONSULTED}`,
        },
      ],
    },
    {
      id: "commun",
      h2: "Ce que les deux solutions ont en commun",
      blocks: [
        {
          t: "p",
          text: "VOKAI annonce la qualification différenciée des vendeurs et des acquéreurs, la prise de rendez-vous d'estimation, la proposition de créneaux de visite, un filtre de démarchage et des offres multi-agences. Rushh propose lui aussi, pour les appels immobiliers entrants, la qualification, les rendez-vous selon la configuration, la transmission des informations et le traitement d'appels pendant les visites. Un comparatif honnête ne peut donc pas attribuer à Rushh l'exclusivité de la qualification, du rendez-vous ni de l'intégration à un logiciel métier.",
        },
      ],
    },
    {
      id: "perimetres",
      h2: "Comparaison des périmètres annoncés",
      blocks: [
        {
          t: "table",
          caption: "Rushh et VOKAI comparés sur dix critères",
          head: ["Critère", "Rushh", "VOKAI, selon sa page immobilier"],
          rows: [
            ["Offre dédiée à l'immobilier", "Oui", "Oui"],
            ["Appels entrants", "Oui, cœur de l'offre", "Oui, cœur de la page"],
            ["Appels sortants", "Non proposés", "Aucun usage sortant décrit pour l'immobilier : le démarchage reçu est filtré"],
            ["Qualification vendeur et acquéreur", "Scénarios écrits avec l'agence, selon ses règles", "Qualification différenciée annoncée, avec des questions de financement pour les acquéreurs"],
            ["Rendez-vous", "Selon les règles et les accès aux agendas", "Estimation vendeur et créneaux de visite proposés, avec Google Calendar cité"],
            ["Fiche bien par SMS", "Non décrite sur cette page", "Annoncée"],
            ["Intégrations", "API sur mesure avec les logiciels immobiliers accessibles, selon les accès ; Google Calendar et Outlook", "API annoncée comme « native » pour plusieurs logiciels immobiliers, dont Apimo ; autre CRM intégré dans une offre « Enterprise »"],
            ["Mise en place et support", "Prestation entièrement prise en charge : conception, configuration, tests, déploiement et suivi par Rushh", "Non décrits sur la page ; une démonstration et un audit gratuits de 30 minutes sont proposés"],
            ["Multi-agences", "Oui, selon la configuration", "Annoncé"],
            ["Tarification", "Sur devis", "Tarifs publiés sur le site de VOKAI, non repris ici"],
          ],
          note: "VOKAI : page immobilier du site officiel, consultée le 31 octobre 2026. Rushh : pages /offre et /integrations de ce site. Les chiffres et témoignages de la page VOKAI ne sont pas repris : nous ne les avons pas vérifiés.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "VOKAI décrit des cas d'usage que Rushh ne met pas en avant dans ce comparatif : questions de financement pour les acquéreurs, envoi d'une fiche bien par SMS, orientation vers un courtier partenaire. Si ces fonctions comptent pour vous, demandez-les à chaque fournisseur.",
        },
      ],
    },
    {
      id: "differences",
      h2: "Les différences vérifiables de modèle de service",
      blocks: [
        {
          t: "ul",
          items: [
            "**Modèle de service** : Rushh est une prestation entièrement prise en charge : l'équipe conçoit les parcours, les teste, met en service le standard et le suit. La page VOKAI présente surtout des fonctions et une démonstration ; la manière dont l'offre est mise en place et suivie n'y est pas décrite, ce qui doit être précisé dans le devis.",
            "**Personnalisation** : Rushh écrit les scénarios avec chaque agence. VOKAI annonce une qualification différenciée par profil ; le degré de personnalisation par agence relève de son contrat.",
            "**Intégrations** : VOKAI annonce une API « native » pour une liste de logiciels immobiliers, dont Apimo, et d'autres CRM selon son offre Enterprise. Rushh réalise sur mesure des connexions avec les logiciels immobiliers accessibles par API, lorsque l'agence dispose des accès et des droits, sans se limiter à une liste fermée ; il ne qualifie aucune connexion de native ou de certifiée.",
            "**Spécialisation** : les deux offres sont dédiées à l'immobilier ; elle ne départage donc pas les deux solutions.",
          ],
        },
        {
          t: "p",
          text: "Ces différences ne disent rien de la qualité de la voix ni de la compréhension des appels : les deux sites revendiquent des échanges réactifs, et seule une écoute sur vos propres situations permet de les comparer. Rushh ne revendique ici aucune supériorité technique.",
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
              "Prestation entièrement gérée, avec scénarios écrits pour votre agence et connexions API sur mesure",
            ],
            [
              "Vous voulez une qualification de financement et une fiche bien envoyée par SMS",
              "VOKAI, à vérifier",
              "Ces fonctions figurent sur sa page ; confirmez ce qui est activé dans votre contrat",
            ],
            [
              "Votre logiciel figure parmi ceux pour lesquels VOKAI annonce une API",
              "VOKAI, à vérifier",
              "Faites confirmer les opérations réellement disponibles et testées",
            ],
            [
              "Votre logiciel n'est pas dans une liste, ou votre organisation est atypique",
              "Rushh, à vérifier",
              "Connexion API étudiée sur mesure selon les accès, avec un repli si ceux-ci manquent",
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
          text: "Ces orientations ne sont pas un classement. La démonstration, le contrat, les droits d'accès et la qualité de l'exécution doivent départager les propositions.",
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
            "Que comprend précisément la connexion à notre logiciel, et a-t-elle été testée sur notre environnement ?",
            "Quelles demandes donnent un vrai rendez-vous, et lesquelles attendent une confirmation humaine ?",
            "Comment le standard traite-t-il un bien mal identifié, un appel urgent ou un agenda sans créneau ?",
            "Que comprend l'abonnement, et comment sont facturés les dépassements ou les connexions supplémentaires ?",
            "Quelles sont les règles d'enregistrement, de conservation et de suppression des données d'appel ?",
          ],
        },
        {
          t: "p",
          text: "Pour entendre Rushh sur vos propres phrases, appelez la [ligne de démonstration](/demonstrations) : une agence fictive à Paris. Pour situer ces deux offres, voir le [comparatif des standards téléphoniques IA](/comparatif/standards-telephoniques-ia-immobilier), puis [Rushh ou Volubilimo](/vs/volubilimo), [Rushh ou Fonio](/vs/fonio) et [Rushh ou Joe AI](/vs/joe-ai).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "VOKAI est-il spécialisé dans l'immobilier ?" },
        {
          t: "p",
          text: "Il présente une offre explicitement dédiée aux agences immobilières. Rushh l'est aussi : la spécialisation ne départage pas les deux.",
        },
        { t: "h3", text: "VOKAI propose-t-il des appels sortants pour l'immobilier ?" },
        {
          t: "p",
          text: "Sa page immobilier ne décrit pas d'usage sortant : elle décrit des appels reçus, avec un filtre de démarchage. Vérifiez auprès de VOKAI.",
        },
        { t: "h3", text: "Rushh propose-t-il des campagnes d'appels sortants ?" },
        { t: "p", text: "Non. Rushh se concentre sur les appels entrants immobiliers." },
        { t: "h3", text: "Quelle est la différence principale ?" },
        {
          t: "p",
          text: "Le modèle de service : Rushh est une prestation entièrement prise en charge avec connexions sur mesure ; la page VOKAI met l'accent sur les fonctions et les intégrations annoncées. Le contrat précise ce que chaque fournisseur assure réellement.",
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
      label: "VOKAI : agents vocaux pour l'immobilier",
      url: "https://vokai.fr/agents-vocaux/immobilier",
      usedFor: `Appels entrants, qualification vendeur et acquéreur, rendez-vous, fiche bien par SMS, filtre de démarchage, multi-agences, intégrations annoncées, démonstration et audit gratuits. Les chiffres et témoignages de la page ne sont pas repris. ${CONSULTED}`,
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
    "Source principale : page immobilier du site officiel de VOKAI, consultée le 31 octobre 2026, sans date de publication visible. Les descriptions de Rushh proviennent de son offre et de ses choix de périmètre. Les déclarations commerciales de VOKAI, notamment ses chiffres et témoignages, ne sont pas des performances vérifiées indépendamment et ne sont pas reprises ; l'absence d'une fonction sur une page ne prouve pas qu'elle n'existe pas. Les orientations par situation et les questions sont des recommandations de Rushh. Rushh édite cette page et en est partie prenante. Pour corriger une information, écrivez à hello@rushh.fr.",
  rushh: {
    title: "Quand Rushh est pertinent face à VOKAI",
    text: "Rushh fait un choix de modèle : une prestation entièrement prise en charge pour les appels entrants des professionnels de l'immobilier, avec des scénarios écrits pour chaque agence et des connexions API réalisées sur mesure lorsque les accès existent. Si vous voulez déléguer plutôt que choisir parmi des fonctions prédéfinies, c'est le contexte où Rushh est le plus pertinent.",
    points: [
      "Personnalisation : des scénarios écrits avec vous, selon vos règles",
      "Prestation 100 % prise en charge : conception, tests, mise en service et suivi par Rushh",
      "Intégrations API sur mesure, sans liste fermée, selon les accès et les droits",
      "Une voix et une réactivité à juger vous-même sur la ligne de démonstration",
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
      href: "/vs/airagent",
      label: "Rushh ou AirAgent",
      text: "Un agent à lancer vite face à une prestation gérée.",
    },
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA",
      text: "Estimation, visite, agenda : ce qu'il faut vérifier.",
    },
  ],
  cta: {
    title: "Comparez la voix et la réactivité sur vos propres appels",
    text: "Appelez la ligne de démonstration Rushh, puis jouez le même scénario avec la démonstration de VOKAI : la voix, la réactivité et la suite donnée se jugent à l'oreille. Tarification Rushh sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
