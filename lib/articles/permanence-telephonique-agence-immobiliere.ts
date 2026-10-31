import type { Article } from "./types";

export const permanenceTelephonique: Article = {
  path: "/ressources/permanence-telephonique-agence-immobiliere",
  category: "guides",
  cover: {
    src: "/ressources/permanence-telephonique-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Quatre motifs d'appel, estimation, visite, dossier locatif et syndic, partent d'un même standard et suivent chacun une règle de transmission différente : prévenir tout de suite, laisser un message ou rappeler dans la journée.",
  },
  title: "Permanence téléphonique immobilière : organiser les appels | Rushh",
  description:
    "Organiser l'accueil téléphonique d'une agence : appels urgents, interne, prestataire ou IA, matrice de transfert par motif, visites et heures de fermeture.",
  shortTitle: "Organiser la permanence téléphonique d'une agence",
  summary: "Quels appels traiter, qui prévenir, quand : une matrice de transfert par motif avant de choisir un mode.",
  h1: "Comment organiser une permanence téléphonique efficace en agence immobilière ?",
  answer:
    "Une permanence téléphonique efficace commence par des décisions, pas par un outil : quels appels traiter, à quelles heures, dans quel ordre de priorité, qui prévenir et comment transmettre. Ces règles s'appliquent ensuite au mode retenu : équipe interne, prestataire humain ou standard IA. Aucun mode n'est supérieur dans l'absolu, et beaucoup d'agences en combinent plusieurs.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "urgent",
      h2: "Les appels qui ne peuvent pas attendre",
      blocks: [
        {
          t: "p",
          text: "Tous les appels n'ont pas la même urgence. Un acquéreur qui appelle pour un bien vu en annonce peut passer à une autre agence dans l'heure. Un propriétaire qui veut faire estimer son bien accepte volontiers un rappel dans la journée, pourvu qu'il soit annoncé. Un copropriétaire qui signale un dégât des eaux ne peut pas attendre le lendemain.",
        },
        {
          t: "p",
          text: "Avant de comparer des solutions, classez vos motifs d'appel en trois niveaux : à traiter immédiatement, à rappeler dans la journée, à enregistrer simplement. Cette hiérarchie est celle que vous demanderez ensuite à votre équipe, à un prestataire ou à un standard IA d'appliquer.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Relevez pendant deux semaines les motifs réels de vos appels. Le guide sur les [appels manqués](/ressources/appels-manques-immobilier) propose une grille de suivi : sans ces données, la hiérarchie reste une intuition.",
        },
      ],
    },
    {
      id: "organisations",
      h2: "Trois organisations possibles : interne, prestataire humain, IA",
      blocks: [
        {
          t: "p",
          text: "Il n'y a pas de modèle idéal. Chacun répond mieux à certaines contraintes, et les horaires couverts varient d'un prestataire à l'autre : certains télésecrétariats indiquent par exemple une couverture du lundi au samedi de 8 h à 20 h, alors que d'autres laissent les soirées et le dimanche sans réponse, selon leurs sites.",
        },
        {
          t: "table",
          caption: "Trois organisations de permanence téléphonique, selon six critères",
          head: ["Critère", "Équipe interne", "Prestataire humain", "Standard IA"],
          rows: [
            ["Couverture soir et week-end", "Rarement, sauf astreinte", "Selon les horaires du prestataire", "Selon la configuration retenue"],
            ["Pic d'appels simultanés", "Limité par les personnes disponibles", "Limité par les opératrices disponibles", "Dépend du nombre d'appels simultanés prévu au contrat"],
            ["Connaissance de vos dossiers", "Complète", "Celle des consignes transmises", "Celle des consignes et des connexions configurées"],
            ["Nuance sur un cas délicat", "Forte", "Forte, selon la formation", "À encadrer par des règles de transmission claires"],
            ["Mise en place", "Immédiate", "Brief, paramétrage, tests", "Conception, tests, mise en service"],
            ["Variation du coût avec le volume", "Peu variable, coût de temps", "Souvent lié aux appels traités", "Selon le modèle tarifaire du fournisseur"],
          ],
          note: "Tableau de repères, sans classement. Les situations réelles dépendent de l'offre et de la configuration de chaque fournisseur.",
        },
        {
          t: "p",
          text: "Pour comparer plus en détail un service humain et un standard IA, voir le guide [télésecrétariat humain ou standard IA](/ressources/telesecretariat-humain-ou-ia). Ici, l'enjeu est l'organisation : quel que soit le mode, les règles de la section suivante doivent exister.",
        },
      ],
    },
    {
      id: "matrice",
      h2: "Une matrice de transfert par motif d'appel",
      blocks: [
        {
          t: "p",
          text: "La matrice ci-dessous associe quatre motifs d'appel fréquents à une priorité, à la personne à prévenir et à la manière de la prévenir. C'est un modèle de départ, à adapter à votre équipe : une agence de transaction, un service de gestion et un syndic n'ont pas les mêmes urgences.",
        },
        {
          t: "table",
          caption: "Matrice de transfert par motif d'appel (modèle à adapter)",
          head: ["Motif", "Priorité", "Qui prévenir, et comment", "Ce que la permanence fait et ne fait pas"],
          rows: [
            [
              "Estimation (vendeur)",
              "Rappel dans la journée",
              "Le négociateur du secteur, par notification avec le motif et le moment de rappel souhaité",
              "Recueille le projet et le secteur ; n'annonce ni prix ni promesse de mandat",
            ],
            [
              "Visite (acquéreur)",
              "Immédiate si la visite est proche, sinon dans la journée",
              "Le négociateur du bien, par notification ou appel direct selon vos règles",
              "Identifie le bien et le moyen de joindre l'acquéreur ; ne confirme un créneau que si l'agenda le permet",
            ],
            [
              "Dossier locatif (gestion)",
              "Dans la journée",
              "Le gestionnaire du dossier, par message structuré",
              "Note la demande et l'identité ; ne donne pas d'information sur le dossier d'un tiers",
            ],
            [
              "Incident en copropriété (syndic)",
              "Immédiate si la situation est urgente",
              "L'astreinte ou le gestionnaire défini par le syndic, par appel puis message",
              "Applique la consigne d'escalade fixée par le syndic ; ne pose pas de diagnostic et ne promet pas d'intervention",
            ],
          ],
          note: "Les niveaux de priorité et les personnes à prévenir sont des exemples fictifs : c'est votre organisation qui les fixe, pas l'outil.",
        },
      ],
    },
    {
      id: "visites-fermeture",
      h2: "Que prévoir pendant les visites et après la fermeture ?",
      blocks: [
        {
          t: "p",
          text: "Pendant une visite, l'agent ne peut pas répondre : c'est le cas typique où l'appel est perdu ou laissé en attente. Après fermeture, la question est différente : faut-il simplement enregistrer un message, ou joindre quelqu'un ? Définissez deux règles distinctes, car elles ne se résument pas à « décrocher plus ».",
        },
        {
          t: "ul",
          items: [
            "**Pendant les visites** : décider à partir de combien de sonneries l'appel est repris par la permanence, et quels motifs justifient d'interrompre l'agent.",
            "**Le soir et le week-end** : lister les rares motifs qui déclenchent une alerte (urgence en copropriété, par exemple) et ceux qui attendent le lendemain avec un message clair.",
            "**Jours fériés et congés** : prévoir qui est joignable, et le message d'accueil correspondant.",
            "**Le numéro de l'agence** : selon l'opérateur, un renvoi d'appel conditionnel (après quelques sonneries ou en cas d'occupation) permet de conserver le numéro actuel. La possibilité exacte dépend de l'opérateur et du contrat.",
          ],
        },
      ],
    },
    {
      id: "cinq-decisions",
      h2: "Mise en place en cinq décisions",
      blocks: [
        {
          t: "ol",
          items: [
            "**Les motifs à traiter** : estimation, visite, location, syndic, autres, avec le niveau de priorité de chacun.",
            "**Les horaires de couverture** : heures d'ouverture, visites, soirs, week-ends, congés.",
            "**Les destinataires** : une personne ou un agenda par motif, et une solution de repli si elle est absente.",
            "**Le format de transmission** : notification, e-mail ou fiche dans votre logiciel, avec les informations minimales attendues.",
            "**Le test** : appeler la permanence comme le ferait un client, plusieurs fois, avec les cas difficiles, avant la mise en service.",
          ],
        },
        {
          t: "checklist",
          items: [
            "Une hiérarchie des appels écrite, pas seulement connue de l'équipe",
            "Une personne responsable de la permanence et un remplaçant",
            "Un message d'accueil conforme à ce que la permanence fait réellement",
            "Un point de contrôle après deux semaines pour corriger les règles",
          ],
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Faut-il choisir entre humain et IA ?" },
        {
          t: "p",
          text: "Pas nécessairement. Certaines agences gardent leur équipe aux heures d'ouverture et confient les appels hors horaires ou en cas d'occupation à un service extérieur. L'important est que les règles de transmission soient les mêmes.",
        },
        { t: "h3", text: "Une permanence doit-elle répondre à tous les appels ?" },
        {
          t: "p",
          text: "Elle doit répondre à ceux que vous avez décidé de traiter, avec une suite connue. Un appel de démarchage, par exemple, peut recevoir une réponse brève et ne pas être transmis.",
        },
        { t: "h3", text: "Que faire de l'enregistrement des appels ?" },
        {
          t: "p",
          text: "Si les appels sont enregistrés, la personne doit en être informée et des durées de conservation doivent être définies. La CNIL donne des repères sur l'écoute et l'enregistrement des appels sur le lieu de travail ; faites valider votre organisation par votre conseil.",
        },
        { t: "h3", text: "Une IA peut-elle gérer un appel urgent de syndic ?" },
        {
          t: "p",
          text: "Elle peut appliquer la consigne d'escalade que le syndic a définie, par exemple prévenir l'astreinte. Elle ne décide pas elle-même de la gravité d'une situation et ne promet pas d'intervention.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Optilib : télésecrétariat immobilier",
      url: "https://www.optilib.com/telesecretariat-immobilier",
      usedFor:
        "Exemple de prestataire humain : appels de visite, d'estimation, de gestion locative et d'urgence de copropriété, couverture indiquée du lundi au samedi de 8 h à 20 h, transmission par e-mail ou transfert. Page sans date de publication visible. Consulté le 31 octobre 2026. Aucun tarif n'est repris.",
    },
    {
      label: "Tala : standard téléphonique immobilier",
      url: "https://www.tala-assistant.com/blog/standard-telephonique-immobilier",
      usedFor:
        "Exemple de fournisseur : couverture horaire des services humains et mise en place par renvoi d'appel conditionnel. Article publié le 23 avril 2026 et mis à jour le 20 juillet 2026, consulté le 31 octobre 2026. Aucun tarif ni chiffre de perte d'appels n'est repris.",
    },
    {
      label: "CNIL : l'écoute et l'enregistrement des appels sur le lieu de travail",
      url: "https://www.cnil.fr/fr/lecoute-et-lenregistrement-des-appels-sur-le-lieu-de-travail",
      usedFor:
        "Repères sur l'information des personnes et la conservation des enregistrements. La CNIL signale elle-même que cette page est en cours de mise à jour : vérifiez la version en vigueur. Consulté le 31 octobre 2026.",
    },
  ],
  sourcesNote:
    "Ce guide propose une méthode d'organisation, pas un résultat mesuré : les matrices et les priorités sont des modèles à adapter. Les horaires et services des prestataires cités sont ceux de leurs sites à la date de consultation et peuvent changer. Rushh édite cette page et en est partie prenante ; il n'est pas présenté comme la meilleure option dans tous les cas.",
  rushh: {
    title: "Vos règles de transmission, appliquées à chaque appel entrant",
    text: "Rushh conçoit, configure, teste, déploie et suit un standard téléphonique IA spécialisé dans les appels entrants de l'immobilier. Les règles décrites dans ce guide (motifs, priorités, destinataires, escalade) sont celles que vous définissez avec l'équipe Rushh, qui les traduit en scénarios et les teste avant la mise en service.",
    points: [
      "Des scénarios écrits pour l'immobilier : estimation, visite, location, copropriété",
      "Vos règles de priorité et d'escalade appliquées, sans diagnostic ni promesse faite à votre place",
      "Une transmission structurée à la bonne personne, avec le motif et le contexte",
      "Une prestation entièrement prise en charge : vous validez les règles, Rushh s'occupe du reste",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/solutions/transaction-immobiliere",
      label: "Standard pour la transaction",
      text: "Estimations et visites pendant que l'équipe est sur le terrain.",
    },
    {
      href: "/solutions/gestion-locative",
      label: "Standard pour la gestion locative",
      text: "Demandes de locataires et de bailleurs, transmission au gestionnaire.",
    },
    {
      href: "/solutions/syndics",
      label: "Standard pour les syndics",
      text: "Messages et escalade définis par le syndic.",
    },
  ],
  cta: {
    title: "Écoutez comment un appel est pris et transmis",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et jouez une demande d'estimation, de visite ou un incident : la prise en charge et la suite donnée se jugent à l'oreille. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
