import type { Article } from "./types";

const CONSULTED = "Consulté le 29 octobre 2026.";

export const vsVolubilimo: Article = {
  path: "/vs/volubilimo",
  category: "comparatifs",
  cover: {
    src: "/ressources/volubilimo.png",
    width: 1600,
    height: 840,
    alt: "Deux parcours comparés, Rushh et Volubilimo, qui convergent vers le même test : vos propres appels. Aucun classement n'est établi entre les deux approches.",
  },
  title: "Rushh ou Volubilimo : comparer deux standards IA immobiliers",
  description:
    "Rushh ou Volubilimo pour l'immobilier ? Comparez appels entrants, rendez-vous, intégrations, accompagnement et périmètre avant de choisir.",
  shortTitle: "Rushh ou Volubilimo : deux approches comparées",
  summary:
    "Deux offres immobilières aux fonctions proches : ce qui les distingue vraiment, sans classement.",
  h1: "Rushh et Volubilimo : comparer deux approches du standard téléphonique IA immobilier",
  answer:
    "Rushh et Volubilimo revendiquent tous deux une spécialisation immobilière et des fonctions qui se recoupent : appels, qualification, rendez-vous, transmission. Volubilimo annonce un périmètre plus large, avec des appels sortants. Rushh se concentre sur les appels entrants, dans une prestation entièrement gérée : conception, tests, mise en service et suivi. Aucun classement ici : la démonstration et le contrat doivent départager.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "cadre",
      h2: "Deux offres qui se ressemblent plus qu'elles ne s'opposent",
      blocks: [
        {
          t: "p",
          text: "Rushh et Volubilimo s'adressent tous deux aux professionnels de l'immobilier qui veulent mieux traiter leurs appels. Les deux offres ne doivent donc pas être présentées comme « une solution immobilière » face à « un outil générique » : elles revendiquent toutes les deux une spécialisation immobilière.",
        },
        {
          t: "p",
          text: "Pour choisir, il faut regarder ce qui se passe après l'appel, les fonctions réellement activées, les responsabilités de configuration et le niveau de suivi que chaque contrat prévoit.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "Informations sur Volubilimo d'après son site officiel, consulté le 29 octobre 2026. Les caractéristiques et les conditions commerciales sont susceptibles de changer ; demandez une confirmation écrite au fournisseur.",
        },
      ],
    },
    {
      id: "commun",
      h2: "Ce que les deux solutions ont en commun",
      blocks: [
        {
          t: "p",
          text: "Volubilimo annonce sur son site la prise en charge des appels, la qualification des demandes, la prise de rendez-vous, les transferts et les synthèses. Rushh propose également un standard pour les appels immobiliers entrants, la qualification, les rendez-vous selon la configuration et la transmission des informations. Les deux marques revendiquent donc des fonctions qui se recoupent.",
        },
        {
          t: "p",
          text: "Un comparatif sérieux ne peut pas attribuer à Rushh l'exclusivité de la prise de rendez-vous ou de l'intégration CRM.",
        },
      ],
    },
    {
      id: "perimetres",
      h2: "Comparaison des périmètres annoncés",
      blocks: [
        {
          t: "table",
          caption: "Rushh et Volubilimo comparés sur huit critères",
          head: ["Critère", "Rushh", "Volubilimo, selon son site"],
          rows: [
            ["Spécialisation immobilière", "Oui", "Oui"],
            ["Appels entrants", "Oui, cœur de l'offre", "Oui"],
            ["Appels sortants automatisés", "Non proposés", "Annoncés"],
            ["Qualification de demandes", "Oui, scénarios adaptés à l'agence", "Annoncée"],
            ["Rendez-vous", "Selon les règles et les accès aux agendas", "Annoncés, avec Google et Outlook"],
            [
              "Intégrations avec les logiciels immobiliers",
              "Apimo et Whise parmi les outils envisagés selon le déploiement ; vérifier les flux",
              "Plusieurs logiciels immobiliers cités, dont Apimo et Whise ; vérifier les flux",
            ],
            [
              "Installation",
              "Conçue, paramétrée, testée et suivie par Rushh",
              "Installation rapide et accompagnement par une équipe CSM annoncés",
            ],
            ["Tarification", "Sur devis", "Packs et facturation à la durée d'appel publiés par Volubilimo, à vérifier à la date du choix"],
          ],
          note: "Volubilimo : site officiel, consulté le 29 octobre 2026. Rushh : pages /offre et /integrations de ce site.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "Volubilimo décrit aussi un accompagnement humain, une assistance à l'intégration et des mises à jour de scripts. Il serait donc inexact de le qualifier de simple logiciel laissé à configurer seul.",
        },
      ],
    },
    {
      id: "difference",
      h2: "La différence principale : le périmètre et les engagements concrets",
      blocks: [
        {
          t: "p",
          text: "Rushh concentre son offre sur les appels entrants des professionnels immobiliers. Sa proposition est une externalisation opérationnelle du téléphone : conception des parcours, personnalisation, tests, déploiement, surveillance du bon fonctionnement et évolutions prises en charge. C'est ce choix de périmètre qui permet de soigner ce qui s'entend au décroché : une voix naturelle, des échanges réactifs et des scénarios écrits pour les situations immobilières.",
        },
        {
          t: "p",
          text: "Volubilimo annonce un périmètre plus large, avec des appels sortants et des fonctions de relance. Son site décrit aussi un accompagnement par une équipe CSM, des conseils de configuration et une aide aux intégrations. La nature exacte de cet accompagnement doit être appréciée dans le devis ou le contrat, plutôt que déduite d'une page marketing.",
        },
        {
          t: "p",
          text: "Pour une agence qui veut uniquement déléguer les appels entrants, la question devient : quels scénarios sont inclus, qui les fait évoluer, comment les incidents sont corrigés, et quelles actions sont réellement opérationnelles sur les outils de l'agence ?",
        },
      ],
    },
    {
      id: "integrations",
      h2: "Intégrations : ne pas se fier aux seuls logos",
      blocks: [
        {
          t: "p",
          text: "Les deux offres peuvent évoquer Apimo et Whise. Cela ne dit pas si un prestataire peut lire une fiche bien, créer un contact, ajouter un compte rendu, dédupliquer les informations ou réserver un rendez-vous dans le logiciel. Chaque action dépend des API, des droits, des contrats et de la configuration.",
        },
        {
          t: "p",
          text: "Avant de choisir, demandez une démonstration sur vos situations : appel vendeur, demande de visite avec référence ambiguë, locataire signalant un problème, agent indisponible, agenda sans créneau. Demandez ce qui est enregistré, à quel endroit et qui corrige un échec.",
        },
      ],
    },
    {
      id: "couts",
      h2: "Comment comparer les coûts sans se tromper ?",
      blocks: [
        {
          t: "p",
          text: "Une facture dépend du volume et de la durée des appels, des services de configuration, des dépassements, des notifications, des éventuelles options et du niveau d'assistance. Volubilimo mentionne des packs et une facturation à la durée d'appel sur son site ; les conditions exactes doivent être confirmées au moment de la décision. Rushh communique ses conditions sur devis.",
        },
        {
          t: "p",
          text: "Comparer uniquement une minute d'appel ne suffit pas si l'un des prestataires prend en charge davantage de configuration ou si certains flux métiers nécessitent une prestation supplémentaire.",
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
              "Vous voulez déléguer les appels entrants à un prestataire qui conçoit et fait fonctionner le standard",
              "Rushh",
              "Prestation entièrement gérée, centrée sur les appels entrants immobiliers, sans campagne d'appels sortants",
            ],
            [
              "Vous voulez aussi des appels sortants, des relances et un back-office",
              "Volubilimo",
              "Ces fonctions figurent dans son offre ; Rushh ne les propose pas. Vérifiez les modalités exactes",
            ],
            [
              "Vous hésitez entre les deux",
              "Les deux, après un test",
              "Seule une démonstration sur vos propres appels permet de comparer la voix, la réactivité et la suite donnée",
            ],
          ],
        },
        {
          t: "p",
          text: "Ces orientations ne sont pas un classement. La démonstration, le contrat, les droits API et la qualité de l'exécution doivent départager les propositions.",
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
            "Qui rédige et corrige les scénarios après le lancement ?",
            "Quelles demandes peuvent générer un vrai rendez-vous et lesquelles nécessitent une confirmation humaine ?",
            "Les écritures dans Apimo ou Whise ont-elles été testées dans notre environnement ?",
            "Comment la solution traite-t-elle un bien mal identifié ou un appel urgent ?",
            "Que comprend précisément l'abonnement et comment sont calculés les dépassements ?",
            "Quelles sont les règles d'enregistrement, de conservation et de suppression des données d'appel ?",
          ],
        },
        {
          t: "p",
          text: "Pour entendre Rushh sur vos propres phrases, appelez la [ligne de démonstration](/demonstrations) : il s'agit d'une agence fictive à Paris. Pour situer ces deux offres parmi les autres, voir le [comparatif des standards téléphoniques IA](/comparatif/standards-telephoniques-ia-immobilier), la comparaison [Rushh ou Fonio](/vs/fonio) et [Rushh ou Joe AI](/vs/joe-ai).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Volubilimo est-il réservé à l'immobilier ?" },
        { t: "p", text: "Son site présente explicitement une offre dédiée aux professionnels immobiliers." },
        { t: "h3", text: "Volubilimo propose-t-il des appels sortants ?" },
        {
          t: "p",
          text: "Oui, son site annonce des appels entrants et sortants ; il faut vérifier les conditions d'activation et d'usage.",
        },
        { t: "h3", text: "Volubilimo propose-t-il un accompagnement ?" },
        {
          t: "p",
          text: "Oui, son site annonce une équipe CSM, des conseils de configuration et une aide à l'intégration. Les engagements précis relèvent du contrat.",
        },
        { t: "h3", text: "Rushh propose-t-il des campagnes d'appels sortants ?" },
        { t: "p", text: "Non. Rushh se concentre sur les appels entrants immobiliers." },
        { t: "h3", text: "Les deux solutions peuvent-elles utiliser Apimo ou Whise ?" },
        {
          t: "p",
          text: "Les outils sont évoqués dans leurs offres ; il faut confirmer les opérations, autorisations et tests réels pour chaque client.",
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
      label: "Volubilimo : site officiel",
      url: "https://www.volubilimo.com/",
      usedFor: `Appels entrants et sortants, qualification, rendez-vous, transferts, synthèses, intégrations citées, accompagnement par une équipe CSM, packs et facturation. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de Rushh : appels entrants, prestation gérée et tarification sur devis.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Google Calendar, Outlook, Apimo et Whise, selon le contexte technique.",
    },
  ],
  sourcesNote:
    "Source principale : site officiel de Volubilimo, consulté le 29 octobre 2026. Les descriptions de Rushh proviennent de son offre et de ses choix de périmètre. Les déclarations commerciales de Volubilimo ne sont pas des performances vérifiées indépendamment, et l'absence d'une fonction sur une page ne prouve pas qu'elle n'existe pas. Les orientations par situation et les questions sont des recommandations de Rushh. Rushh édite cette page et en est partie prenante. Pour corriger une information, écrivez à hello@rushh.fr.",
  rushh: {
    title: "Quand Rushh est pertinent face à Volubilimo",
    text: "Rushh fait un choix de périmètre : les appels entrants des professionnels de l'immobilier, traités de bout en bout par une équipe qui conçoit, teste, met en service et suit le standard. Si ce que vous voulez entendre au décroché, c'est une voix naturelle, des échanges réactifs et des scénarios pensés pour l'immobilier, sans configurer vous-même, c'est le contexte où Rushh est le plus pertinent.",
    points: [
      "Qualité vocale : une voix naturelle, que vous jugez vous-même sur la ligne de démonstration",
      "Réactivité des échanges : à vérifier à l'oreille, sur vos propres phrases",
      "Spécialisation immobilière : transaction, gestion locative, syndic, réseaux",
      "Prestation 100 % prise en charge : conception, tests, mise en service et suivi par Rushh",
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
      text: "Cinq solutions comparées sur huit critères, sources datées.",
    },
    {
      href: "/vs/fonio",
      label: "Rushh ou Fonio",
      text: "Une plateforme à configurer face à une prestation gérée.",
    },
    {
      href: "/vs/joe-ai",
      label: "Rushh ou Joe AI",
      text: "Un autre comparatif factuel, avec un service accompagné.",
    },
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA",
      text: "Estimation, visite, agenda : ce qu'il faut vérifier.",
    },
  ],
  cta: {
    title: "Comparez la voix et la réactivité sur vos propres appels",
    text: "Appelez la ligne de démonstration Rushh, puis jouez le même scénario avec une démonstration de Volubilimo : la voix, la réactivité et la suite donnée se jugent à l'oreille. Tarification Rushh sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
