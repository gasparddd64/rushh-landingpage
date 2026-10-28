import type { Article } from "./types";

export const telesecretariat: Article = {
  path: "/ressources/telesecretariat-humain-ou-ia",
  cover: {
    src: "/ressources/telesecretariat-humain-ou-ia.png",
    width: 1600,
    height: 840,
    alt: "Illustration comparant trois parcours d'un appel : réception humaine selon les disponibilités, logiciel IA à configurer et suivre, et Standard Rushh conçu, déployé et suivi, pris en charge pour l'agence.",
  },
  title: "Télésecrétariat humain ou IA en immobilier | Rushh",
  description:
    "Télésecrétariat humain, logiciel IA à configurer ou service IA pris en charge : comparaison honnête de trois organisations pour les appels d'une agence.",
  h1: "Télésecrétariat humain ou standard téléphonique IA : que choisir en immobilier ?",
  answer:
    "Il n'existe pas de meilleur choix universel. Un télésecrétariat humain convient quand les échanges demandent de la nuance. Un logiciel IA à configurer convient si vous voulez piloter vous-même et avez le temps de le maintenir. Un service IA pris en charge, comme celui de Rushh, convient si vous voulez déléguer la conception et le suivi. Beaucoup d'agences finiront par combiner humain et IA.",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  sections: [
    {
      id: "trois-modeles",
      h2: "Quels sont les trois modèles ?",
      blocks: [
        {
          t: "p",
          text: "Ce guide compare des modèles types, pas des offres précises : horaires, périmètre et outils varient selon les prestataires.",
        },
        {
          t: "ul",
          items: [
            "**A. Télésecrétariat humain** : des opérateurs répondent aux appels au nom de l'agence, selon des consignes. Horaires et périmètre dépendent du prestataire.",
            "**B. Logiciel IA à configurer soi-même** : une plateforme d'agent vocal que l'agence paramètre, teste et fait évoluer. Selon l'éditeur, un accompagnement peut être proposé.",
            "**C. Service IA entièrement pris en charge** : le prestataire conçoit, configure, teste, déploie et suit le standard selon les règles de l'agence. C'est le modèle de Rushh.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Ces frontières ne sont pas étanches : certains éditeurs de logiciel accompagnent leurs clients, certains télésecrétariats s'appuient sur des outils numériques. Vérifiez toujours ce que propose le fournisseur précis que vous étudiez.",
        },
      ],
    },
    {
      id: "comparatif",
      h2: "Comment comparer les trois modèles ?",
      blocks: [
        {
          t: "table",
          caption: "Comparaison des trois modèles selon neuf critères",
          head: ["Critère", "A. Télésecrétariat humain", "B. Logiciel IA à configurer", "C. Service IA pris en charge"],
          rows: [
            [
              "Couverture et disponibilité",
              "Plages horaires définies par le prestataire, parfois étendues",
              "Pas de plage liée à des opérateurs ; disponibilité du service et de la téléphonie à vérifier",
              "Selon le contrat ; Rushh annonce une prise en charge 24 h/24 selon les règles validées",
            ],
            [
              "Qualification des demandes",
              "Dépend de la précision des consignes et de la formation des opérateurs",
              "Dépend des scénarios que vous construisez et testez",
              "Scénarios construits et testés par le prestataire avec vous",
            ],
            [
              "Cas complexes",
              "Un humain s'adapte en général plus naturellement à l'imprévu",
              "Cas hors scénario à prévoir dans les règles de reprise humaine",
              "Règles d'escalade définies avec le prestataire",
            ],
            [
              "Configuration et maintenance",
              "Consignes à fournir et à mettre à jour",
              "À votre charge, sauf accompagnement proposé par l'éditeur",
              "Prises en charge par le prestataire ; vous fournissez les éléments et validez",
            ],
            [
              "Transmission des informations",
              "Messages ou comptes rendus selon le format convenu",
              "Selon les connexions que vous configurez",
              "Selon la configuration et les connexions validées",
            ],
            [
              "Supervision et correction",
              "Retours à faire au prestataire ; contrôle variable",
              "À votre charge : écouter, relire, corriger",
              "Suivi et ajustements par le prestataire",
            ],
            [
              "Confidentialité",
              "À vérifier : traitement, sous-traitance, durée de conservation",
              "À vérifier : traitement, sous-traitance, durée de conservation",
              "À vérifier : traitement, sous-traitance, durée de conservation",
            ],
            [
              "Facteurs de coût",
              "Selon le prestataire : abonnement, volume d'appels ou plages couvertes",
              "Licence ou usage, plus votre temps de configuration et de maintenance",
              "Sur devis chez Rushh : le périmètre et l'organisation déterminent le devis",
            ],
            [
              "Reprise humaine",
              "Les opérateurs sont humains ; transfert vers votre équipe selon les consignes",
              "À configurer : transfert, message",
              "Selon vos règles : transfert, message ou rendez-vous",
            ],
          ],
          note: "Lecture : chaque cellule décrit un modèle type, avec la mention « selon » lorsque la réponse dépend du fournisseur. Aucun tarif n'est indiqué.",
        },
      ],
    },
    {
      id: "humain",
      h2: "Quand l'humain est-il préférable ?",
      blocks: [
        {
          t: "p",
          text: "Un télésecrétariat humain est souvent le bon choix lorsque :",
        },
        {
          t: "ul",
          items: [
            "les appels sont sensibles ou émotionnels, ou demandent une vraie écoute ;",
            "vos appelants attendent un interlocuteur humain dès les premières secondes ;",
            "vos situations changent trop souvent pour être décrites en règles ;",
            "le volume est faible et les demandes très variées.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Ce sont des critères de décision, pas des certitudes : testez avec vos propres appels avant de trancher.",
        },
      ],
    },
    {
      id: "logiciel-ou-service",
      h2: "Logiciel à configurer ou service pris en charge ?",
      blocks: [
        {
          t: "p",
          text: "Un **logiciel IA à configurer** peut convenir si votre équipe a le temps de construire, tester et faire évoluer ses scénarios, et souhaite garder le contrôle du paramétrage.",
        },
        {
          t: "p",
          text: "Un **service IA pris en charge** peut convenir si vous préférez expliquer votre organisation et laisser un prestataire s'occuper de la conception, des tests et du suivi. C'est l'approche de Rushh : standard téléphonique alimenté par intelligence artificielle, pour les appels entrants uniquement, avec une mise en service visée sous 5 jours ouvrés après réception des éléments (objectif indicatif) et une tarification sur devis. Voir [l'offre Rushh](/offre).",
        },
        {
          t: "p",
          text: "Dans les deux cas, l'IA ne remplace pas votre équipe : elle applique les règles validées et transmet le reste. Rushh n'est pas la seule solution possible, et ce guide ne prétend pas qu'elle convienne à toutes les agences.",
        },
      ],
    },
    {
      id: "hybride",
      h2: "Quand combiner humain et IA ?",
      blocks: [
        {
          t: "p",
          text: "Une approche hybride a du sens quand les besoins varient selon l'heure ou selon le type d'appel. Deux exemples d'organisation :",
        },
        {
          t: "ul",
          items: [
            "l'IA prend le premier niveau quand l'équipe est indisponible, et transmet les cas complexes à un humain ;",
            "un télésecrétariat humain couvre certains créneaux, et un standard IA en couvre d'autres.",
          ],
        },
        {
          t: "callout",
          kind: "hypo",
          text: "L'intérêt d'une combinaison dépend de vos volumes et de vos créneaux. Mesurez-le plutôt que de le supposer : le guide [Appels manqués en agence immobilière](/ressources/appels-manques-immobilier) propose une méthode et un tableau de suivi.",
        },
      ],
    },
    {
      id: "transparence-ia",
      h2: "Informer l'appelant qu'il parle à une IA",
      blocks: [
        {
          t: "callout",
          kind: "fact",
          text: "L'article 50, paragraphe 1, du règlement (UE) 2024/1689 dispose que les fournisseurs veillent à ce que les systèmes d'IA destinés à interagir directement avec des personnes physiques soient conçus et développés de manière que ces personnes soient informées qu'elles interagissent avec un système d'IA, sauf si cela ressort clairement du point de vue d'une personne physique normalement informée et raisonnablement attentive et avisée, compte tenu des circonstances et du contexte d'utilisation. Il ne s'applique pas aux systèmes d'IA dont la loi autorise l'utilisation à des fins de prévention ou de détection des infractions pénales, d'enquêtes ou de poursuites, sous garanties appropriées, sauf s'ils sont mis à la disposition du public pour signaler une infraction pénale (source : texte officiel, voir Sources).",
        },
        {
          t: "callout",
          kind: "fact",
          text: "L'article 113 prévoit que le règlement est applicable à partir du 2 août 2026, avec des exceptions qu'il énumère : elles visent d'autres dispositions que l'article 50 (chapitres I et II, chapitre III section 4, chapitres V, VII et XII, article 78, article 6 paragraphe 1). La Commission européenne indique de son côté que le règlement est applicable depuis le 2 août 2026 (source : EUR-Lex et Commission européenne).",
        },
        {
          t: "p",
          text: "Cette obligation vise les fournisseurs de systèmes d'IA ; d'autres règles peuvent s'appliquer à une agence selon sa situation et ses usages. Ce guide présente le texte de façon générale : il ne constitue pas un avis juridique individuel.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Quel que soit le fournisseur, demandez comment l'appelant est informé qu'il échange avec une IA, et faites valider votre organisation par votre conseil juridique.",
        },
      ],
    },
    {
      id: "questions",
      h2: "Dix questions à poser avant de choisir",
      blocks: [
        {
          t: "checklist",
          items: [
            "Quelles sont les plages horaires exactes, jours fériés compris ?",
            "Qui configure, teste et fait évoluer le service ?",
            "Que se passe-t-il quand un appel sort du scénario prévu ?",
            "Comment les informations me sont-elles transmises, et sous quel format ?",
            "Avec quels outils (agenda, logiciel métier) la connexion est-elle réellement validée ?",
            "Qui écoute ou relit les appels, et comment corrige-t-on une erreur ?",
            "Où les données sont-elles traitées, par qui, et combien de temps sont-elles conservées ?",
            "Comment l'appelant est-il informé qu'il parle à une IA ?",
            "Puis-je tester avec mes propres cas avant de m'engager ?",
            "Quelles sont les conditions de sortie ?",
          ],
        },
        {
          t: "p",
          text: "Pour tester Rushh avec vos propres phrases, appelez la [ligne de démonstration](/demonstrations) : il s'agit d'une agence fictive à Paris.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "EUR-Lex : règlement (UE) 2024/1689 (Journal officiel du 12 juillet 2024)",
      url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      usedFor: "Texte officiel : article 50, paragraphe 1, et article 113 (application à partir du 2 août 2026). Consulté le 28 octobre 2026.",
    },
    {
      label: "Commission européenne (AI Act Service Desk) : article 50, obligations de transparence",
      url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50",
      usedFor: "Version consolidée au 27 juillet 2026 : même règle et mêmes exceptions pour le paragraphe 1. Page consultée le 28 octobre 2026.",
    },
    {
      label: "Commission européenne : cadre réglementaire de l'intelligence artificielle",
      url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      usedFor: "Application du règlement depuis le 2 août 2026, avec quelques exceptions. Page consultée le 28 octobre 2026.",
    },
  ],
  sourcesNote:
    "Les comparaisons entre modèles sont des descriptions types, sans nom de fournisseur ni tarif. Les recommandations sont des pratiques proposées par Rushh. Rushh est l'éditeur de ce guide et l'un des modèles décrits : lisez les critères avec cette réserve.",
  related: [
    {
      href: "/ressources/appels-manques-immobilier",
      label: "Appels manqués en agence immobilière",
      text: "Mesurer vos appels manqués avant de choisir une organisation.",
    },
    {
      href: "/vs/joe-ai",
      label: "Rushh ou Joe AI",
      text: "Un comparatif factuel entre deux services IA, sources datées.",
    },
  ],
  cta: {
    title: "Voir un standard téléphonique IA pris en charge",
    text: "Appelez la ligne de démonstration ou demandez une démonstration personnalisée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
