import type { Article } from "./types";

const CONSULTED = "Consulté le 28 octobre 2026.";

export const vsFonio: Article = {
  path: "/vs/fonio",
  category: "comparatifs",
  cover: {
    src: "/ressources/vs-fonio.png",
    width: 1600,
    height: 840,
    alt: "Deux parcours d'appel comparés, une plateforme à configurer avec accompagnement optionnel et une prestation gérée, qui mènent au même résultat : un appel qualifié et transmis à l'équipe.",
  },
  title: "Alternative à Fonio pour l'immobilier : Rushh ou Fonio ? | Rushh",
  description:
    "Fonio ou Rushh pour les appels d'une agence immobilière ? Comparaison sourcée, consultée le 28 octobre 2026 : positionnement, accompagnement, tarifs.",
  shortTitle: "Rushh ou Fonio : que choisir ?",
  summary:
    "Une plateforme à configurer face à une prestation gérée : accompagnement, canaux et tarification.",
  h1: "Alternative à Fonio pour l'immobilier : Rushh ou Fonio, que choisir pour les appels de votre agence ?",
  answer:
    "Fonio est une plateforme d'assistants téléphoniques IA qui propose des pages dédiées à l'immobilier, une création en libre-service et des forfaits d'accompagnement payants. Rushh est une prestation entièrement gérée, spécialisée dans les appels entrants des professionnels de l'immobilier. Les deux répondent aux appels, qualifient et peuvent transférer ou prendre un rendez-vous ; la différence porte surtout sur qui conçoit et suit le standard, sur la spécialisation immobilière et sur le modèle de tarification.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "fonio",
      h2: "Ce que Fonio propose, d'après son site",
      blocks: [
        {
          t: "p",
          text: "Fonio présente une plateforme d'assistants téléphoniques IA, avec des pages dédiées aux agences immobilières et à la gestion immobilière. Voici ce que ces pages indiquent.",
        },
        {
          t: "ul",
          items: [
            "**Appels** : l'assistant répond 24 h/24 aux acheteurs, aux locataires et aux vendeurs, traite la demande lui-même ou transfère l'appel à l'agence ou à un agent.",
            "**Qualification** : il pose des questions prédéfinies (budget, solvabilité, urgence, projet, type de bien) et recueille les coordonnées.",
            "**Rendez-vous** : il propose des créneaux de visite d'après l'agenda connecté et enregistre la réservation.",
            "**Gestion locative et syndic** : Fonio décrit la prise en charge de questions sur les charges, de signalements de maintenance et d'urgences comme une panne de chauffage.",
            "**Autres canaux et appels sortants** : WhatsApp et chat web sont proposés, et les appels sortants figurent dans les conditions des forfaits voix.",
            "**Création** : elle se fait en ligne, avec la mention « aucune connaissance technique requise », et un assistant « prêt à être testé en 30 secondes ».",
            "**Accompagnement** : une page « Configurations » propose des forfaits où un expert de Fonio intervient, de 30 minutes par mois à un suivi continu, et des configurations complexes sur devis.",
            "**Données** : hébergement « sur des serveurs sécurisés dans l'UE », mentions « conforme au RGPD » et « conforme à l'EU AI Act » (déclarations de Fonio).",
          ],
        },
        {
          t: "callout",
          kind: "fact",
          text: "Fonio ne se limite donc pas à un outil à configurer seul, et il propose bien la réservation de rendez-vous et le transfert d'appel. Sources et dates en fin de page ; ces informations sont déclarées par le fournisseur.",
        },
      ],
    },
    {
      id: "rushh",
      h2: "Ce que Rushh propose",
      blocks: [
        {
          t: "ul",
          items: [
            "**Appels entrants** : le Standard décroche, identifie le motif, recueille les informations utiles, puis transmet à l'équipe selon les règles validées avec l'agence.",
            "**Prestation entièrement gérée** : Rushh analyse le fonctionnement de l'agence, configure les scénarios, personnalise, connecte les outils compatibles, teste, met en service, puis assure le suivi, le support et la maintenance. L'agence ne configure pas elle-même un logiciel.",
            "**Spécialisation immobilière** : scénarios pour la transaction, la gestion locative, le syndic et les réseaux d'agences. Voir les pages [mandataires](/solutions/mandataires-immobiliers), [gestion locative](/solutions/gestion-locative) et [syndics](/solutions/syndics).",
            "**Rendez-vous et outils** : rendez-vous et transfert selon le périmètre validé ; connexions possibles à Google Calendar, Outlook, Apimo et Whise, selon le contexte technique et confirmées avec l'agence.",
            "**Mise en service** : visée sous 5 jours ouvrés après réception des éléments nécessaires, à titre indicatif. Tarification sur devis.",
            "**Limites** : Rushh ne fait pas d'appels sortants et ne couvre ni SMS, ni WhatsApp, ni chat web.",
          ],
        },
      ],
    },
    {
      id: "differences",
      h2: "Les différences de positionnement, critère par critère",
      blocks: [
        {
          t: "table",
          caption: "Fonio et Rushh comparés sur huit critères",
          head: ["Critère", "Fonio", "Rushh"],
          rows: [
            [
              "Modèle de service",
              "Plateforme créée en ligne ; accompagnement par un expert en option payante",
              "Prestation entièrement gérée : conception, configuration, tests, déploiement et suivi par Rushh",
            ],
            [
              "Spécialisation",
              "Plateforme généraliste, avec des pages dédiées à l'immobilier et à la gestion immobilière",
              "Spécialisé dans les appels des professionnels de l'immobilier",
            ],
            [
              "Qui configure",
              "Le client, avec la possibilité d'acheter du temps d'expert ou une configuration complexe",
              "Rushh, à partir de l'analyse du fonctionnement de l'agence",
            ],
            [
              "Canaux",
              "Voix, WhatsApp et chat web ; appels sortants dans les forfaits voix",
              "Appels entrants uniquement",
            ],
            [
              "Intégrations immobilières citées",
              "Stora, onOffice, Win-CASA, Hostaway, Aareon PowerHaus, Objego, entre autres ; Make, n8n et API ; Apimo et Whise non cités sur les pages consultées",
              "Google Calendar, Outlook, Apimo et Whise, selon le contexte technique",
            ],
            [
              "Mise en service",
              "Test annoncé en 30 secondes ; durée de mise en place non détaillée sur la page immobilier",
              "Visée sous 5 jours ouvrés après réception des éléments, à titre indicatif",
            ],
            [
              "Tarification",
              "Publique : voix à partir de 99 € par mois (1 000 minutes), 299 € (3 600 minutes), à partir de 539 € ; hors taxes, facturation annuelle. Accompagnement de 99 € à 899 € par mois, configuration complexe à partir de 1 000 €",
              "Sur devis",
            ],
            [
              "Données (déclaré)",
              "Hébergement dans l'UE ; conforme au RGPD et à l'EU AI Act",
              "Conditions d'hébergement et sous-traitants précisés sur demande et dans le contrat (DPA)",
            ],
          ],
          note: "Fonio : pages officielles listées en fin de page, tarifs relevés le 28 octobre 2026. Rushh : pages /offre, /integrations et /privacy de ce site.",
        },
      ],
    },
    {
      id: "contextes",
      h2: "Dans quels contextes chaque approche peut convenir",
      blocks: [
        {
          t: "table",
          caption: "Situations pour lesquelles chaque approche peut convenir",
          head: ["Situation", "Approche qui peut convenir", "Pourquoi"],
          rows: [
            [
              "Vous voulez publier un budget clair et créer vous-même votre assistant",
              "Fonio",
              "Tarifs publics, création en ligne et possibilité d'ajouter de l'accompagnement",
            ],
            [
              "Vous voulez des appels sortants, WhatsApp ou un chat web",
              "Fonio",
              "Ces canaux figurent dans son offre ; Rushh ne les propose pas",
            ],
            [
              "Votre agence utilise un logiciel que Fonio cite",
              "Fonio",
              "Il figure sur les pages consultées ; confirmez la connexion avec le fournisseur",
            ],
            [
              "Vous voulez déléguer la conception, les tests et le suivi des appels entrants",
              "Rushh",
              "C'est le modèle d'une prestation entièrement gérée",
            ],
            [
              "Vous utilisez Apimo ou Whise",
              "Rushh, ou Fonio après vérification",
              "Rushh les cite ; Fonio ne les cite pas sur les pages consultées, mais propose une demande d'intégration",
            ],
            [
              "Votre organisation mêle transaction, gestion locative et syndic",
              "Les deux, après un test",
              "Fonio décrit des offres pour l'agence et la gestion immobilière ; Rushh construit des scénarios par métier avec vous. Seul un test sur vos appels tranche",
            ],
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Dans les deux cas, demandez un test avec vos propres scénarios d'appels avant de vous engager : le [guide de sélection](/ressources/choisir-standard-telephonique-ia-immobilier) en propose une liste.",
        },
      ],
    },
    {
      id: "accompagnement",
      h2: "Accompagnement : où se situe la différence ?",
      blocks: [
        {
          t: "p",
          text: "Dire que Fonio est « un outil DIY » serait inexact : il vend des heures d'expert et des configurations complexes. Dire que Rushh est « un simple logiciel » le serait aussi : l'agence n'en configure aucun. La différence se situe ailleurs.",
        },
        {
          t: "ul",
          items: [
            "**Chez Fonio**, l'accompagnement est une option que le client choisit et achète à la carte, par forfait de temps ou par projet, sur une plateforme qu'il pilote.",
            "**Chez Rushh**, la conception, la configuration, les tests, la mise en service et le suivi font partie de la prestation, dont le périmètre est défini dans le devis.",
          ],
        },
        {
          t: "p",
          text: "Pour situer ces deux logiques parmi les autres solutions du marché, voir le [comparatif des standards téléphoniques IA pour l'immobilier](/comparatif/standards-telephoniques-ia-immobilier). Pour une comparaison avec un autre service accompagné, voir [Rushh ou Joe AI](/vs/joe-ai) ; pour une offre immobilière annonçant aussi des appels sortants, [Rushh ou Volubilimo](/vs/volubilimo).",
        },
      ],
    },
    {
      id: "questions",
      h2: "Dix questions à poser à Fonio comme à Rushh",
      blocks: [
        {
          t: "checklist",
          items: [
            "Pouvez-vous tester mon logiciel métier exact, et qui paie l'intégration ?",
            "Que couvre précisément l'accompagnement : conception, tests, évolutions ?",
            "Qui modifie les scénarios quand mon organisation change, et sous quel délai ?",
            "Quels frais s'ajoutent aux tarifs affichés : minutes, numéros, opérateur, intégration ?",
            "Comment un appel hors scénario est-il traité ?",
            "Comment l'appelant est-il informé qu'il parle à une IA ?",
            "Où les données sont-elles traitées, par qui, et combien de temps sont-elles conservées ?",
            "Quel contrat de sous-traitance (DPA) est fourni ?",
            "Que se passe-t-il en cas de panne du service ?",
            "Quelles sont les conditions de sortie ?",
          ],
        },
        {
          t: "p",
          text: "Pour entendre Rushh sur vos propres phrases, appelez la [ligne de démonstration](/demonstrations) : il s'agit d'une agence fictive à Paris.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Fonio : assistant téléphonique IA pour les agences immobilières",
      url: "https://www.fonio.ai/fr/assistant-telephonique-ia/assistant-telephonique-ia-agences-immobilieres/",
      usedFor: `Appels, qualification, visites, transfert, création en ligne, hébergement dans l'UE déclaré. ${CONSULTED}`,
    },
    {
      label: "Fonio : assistant téléphonique IA pour la gestion immobilière",
      url: "https://www.fonio.ai/fr/assistants-telephoniques-ia/gestion-immobiliere",
      usedFor: `Gestion locative et syndic, urgences, logiciels immobiliers nommés, « Laissez-nous gérer la configuration ». ${CONSULTED}`,
    },
    {
      label: "Fonio : intégrations",
      url: "https://www.fonio.ai/fr/integrations",
      usedFor: `Logiciels immobiliers nommés, Make, n8n, demande d'intégration. ${CONSULTED}`,
    },
    {
      label: "Fonio : tarifs",
      url: "https://www.fonio.ai/fr/tarifs",
      usedFor: `Forfaits voix, WhatsApp et chat web, appels sortants, prix hors taxes, facturation annuelle. ${CONSULTED}`,
    },
    {
      label: "Fonio : configurations (Care et Setups)",
      url: "https://www.fonio.ai/fr/configurations",
      usedFor: `Forfaits d'accompagnement par un expert, de 99 € à 899 € par mois, configuration complexe à partir de 1 000 €. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de Rushh : appels entrants, prestation gérée, délai indicatif et tarification sur devis.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Google Calendar, Outlook, Apimo et Whise, selon le contexte technique.",
    },
  ],
  sourcesNote:
    "Toutes les informations sur Fonio proviennent de ses pages officielles, consultées le 28 octobre 2026 : ce sont des déclarations commerciales, que nous n'avons pas vérifiées par un test. Les tarifs, hors taxes, peuvent changer. L'absence d'une fonction sur une page ne prouve pas qu'elle n'existe pas. Les repères par situation et les questions sont des recommandations de Rushh. Rushh édite cette page et en est partie prenante. Pour corriger une information, écrivez à hello@rushh.fr.",
  rushh: {
    title: "Quand Rushh est pertinent face à Fonio",
    text: "Fonio propose une plateforme polyvalente, avec création en libre-service et accompagnement en option. Rushh propose une prestation gérée de bout en bout, centrée sur les appels entrants de l'immobilier. Si vous ne voulez ni configurer, ni tester, ni suivre vous-même votre standard, c'est le contexte où Rushh est le plus pertinent.",
    points: [
      "Vous préférez déléguer la conception et le suivi du standard plutôt que de les piloter",
      "Votre besoin porte sur les appels entrants d'une agence, d'un mandataire ou d'un cabinet immobilier",
      "Vous voulez retrouver chaque appel comme une opportunité suivie : résumé, statut, attribution",
      "Vous souhaitez un devis établi selon votre organisation plutôt qu'une grille de forfaits",
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
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Questions à poser, scénarios à tester, checklist de décision.",
    },
    {
      href: "/vs/joe-ai",
      label: "Rushh ou Joe AI",
      text: "Un autre comparatif factuel, avec un service accompagné.",
    },
  ],
  cta: {
    title: "Comparez les deux sur le même appel",
    text: "Appelez la ligne de démonstration Rushh, puis jouez le même scénario avec une démonstration de Fonio : la voix, la rapidité et la suite donnée se jugent à l'oreille. Tarification Rushh sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    ],
  },
};
