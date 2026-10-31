import type { Article } from "./types";

export const rentabiliteStandard: Article = {
  path: "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere",
  category: "guides",
  cover: {
    src: "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Une balance compare le coût mensuel d'un standard téléphonique IA et la valeur d'une affaire conclue grâce à un appel, avec la formule du seuil de rentabilité : coût mensuel divisé par la valeur d'une affaire.",
  },
  title: "Un standard téléphonique IA est-il rentable pour une agence ? | Rushh",
  description:
    "Seuil de rentabilité d'un standard téléphonique IA, calculé avec vos données : coût mensuel, valeur d'une affaire, appels perdus et test.",
  shortTitle: "Un standard IA est-il rentable pour votre agence ?",
  summary: "Une formule de seuil de rentabilité à remplir avec vos données, sans chiffre de marché ni promesse de résultat.",
  h1: "Un standard téléphonique IA est-il rentable pour une agence immobilière ?",
  answer:
    "Pour savoir si un standard téléphonique IA est rentable, ne partez pas de statistiques de marché : partez du seuil de rentabilité de votre agence. Il se calcule avec quatre données que vous possédez : le coût mensuel du standard, la valeur moyenne d'une affaire, le taux de transformation d'un rendez-vous et le nombre d'appels réellement perdus. Le calcul dit combien d'affaires il faut récupérer pour couvrir le coût, pas combien vous en récupérerez.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "question",
      h2: "La bonne question : combien d'affaires faut-il récupérer ?",
      blocks: [
        {
          t: "p",
          text: "Une agence qui hésite à déléguer ses appels se demande souvent : « Combien vais-je gagner ? ». Personne ne peut répondre sérieusement à cette question à votre place : le résultat dépend de vos appels, de votre secteur et de votre équipe. La question que vous pouvez traiter avec vos propres données est inverse : combien d'affaires supplémentaires faut-il pour que le standard couvre son coût ?",
        },
        {
          t: "p",
          text: "Ce guide ne cherche pas à mesurer vos appels manqués ; la méthode est décrite dans le guide sur les [appels manqués](/ressources/appels-manques-immobilier). Il ne détaille pas non plus la formation du coût d'un devis, traitée dans le guide sur le [coût d'un standard IA](/ressources/cout-standard-telephonique-ia-immobilier). Il relie les deux : à partir de ces deux données, savoir si l'opération a un sens.",
        },
      ],
    },
    {
      id: "donnees",
      h2: "Les quatre données à sortir de votre agence",
      blocks: [
        {
          t: "table",
          caption: "Grille à remplir avec vos propres données",
          head: ["Donnée", "Où la trouver", "À ne pas faire"],
          rows: [
            [
              "1. Coût mensuel du standard",
              "Le devis, lissé sur la durée d'engagement (installation comprise)",
              "Comparer sur le prix affiché : voir le guide sur le coût",
            ],
            [
              "2. Valeur moyenne d'une affaire",
              "Vos honoraires nets moyens, après la part du négociateur ou du mandataire, sur les douze derniers mois",
              "Utiliser un prix de vente moyen du marché ou des honoraires bruts",
            ],
            [
              "3. Taux de transformation d'un rendez-vous",
              "Le nombre de rendez-vous d'estimation ou de visite divisé par les affaires conclues, sur vos propres dossiers",
              "Reprendre un taux entendu en formation ou publié par un tiers",
            ],
            [
              "4. Appels perdus qui comptaient",
              "Votre journal d'appels : les appels sans suite dont le motif était une estimation, une visite ou un mandat",
              "Compter tous les appels manqués comme des opportunités perdues",
            ],
          ],
          note: "Si vous ne disposez pas d'une de ces données, mesurez-la pendant quelques semaines avant de décider : la méthode figure dans le guide sur les appels manqués.",
        },
      ],
    },
    {
      id: "formule",
      h2: "La formule du seuil de rentabilité",
      blocks: [
        {
          t: "p",
          text: "Seuil en affaires par mois = coût mensuel du standard ÷ valeur moyenne d'une affaire. Seuil en rendez-vous par mois = seuil en affaires ÷ taux de transformation d'un rendez-vous. Le premier résultat est généralement inférieur à une affaire par mois : il se lit alors en nombre de mois couverts par une seule affaire.",
        },
        {
          t: "callout",
          kind: "example",
          text: "Exemple entièrement fictif. Les montants et les taux ci-dessous sont inventés pour montrer le calcul : ce ne sont ni des tarifs de Rushh ni des tarifs de concurrents, et ils ne décrivent aucun résultat réel. Ne les utilisez pas comme repère.",
        },
        {
          t: "table",
          caption: "Exemple fictif de seuil de rentabilité",
          head: ["Hypothèse fictive", "Valeur", "Calcul"],
          rows: [
            ["Coût mensuel du standard", "240 €", "Donnée 1"],
            ["Valeur moyenne d'une affaire (honoraires nets)", "3 600 €", "Donnée 2"],
            ["Taux de transformation d'un rendez-vous", "1 sur 5", "Donnée 3"],
            ["Seuil en affaires", "0,067 affaire par mois", "240 ÷ 3 600"],
            ["Une seule affaire couvre", "15 mois de coût", "3 600 ÷ 240"],
            ["Valeur d'un rendez-vous", "720 €", "3 600 ÷ 5"],
            ["Seuil en rendez-vous", "1 rendez-vous tous les 3 mois", "240 ÷ 720 = 0,33 par mois"],
          ],
          note: "Calculs fictifs. Un seuil bas ne prouve pas que le standard fera récupérer ces rendez-vous : il dit seulement ce qu'il faut récupérer pour que l'opération soit neutre.",
        },
      ],
    },
    {
      id: "erreurs",
      h2: "Trois erreurs de calcul fréquentes",
      blocks: [
        {
          t: "ul",
          items: [
            "**Tout appel manqué n'est pas une affaire perdue.** Beaucoup d'appelants rappellent, d'autres appellent pour un sujet sans valeur commerciale. Seule la quatrième donnée compte, et elle se lit dans votre journal d'appels.",
            "**Le seuil n'est pas une prévision.** Il dit à partir de quand l'opération couvre son coût, pas combien de rendez-vous le standard fera réellement gagner.",
            "**La valeur n'est pas le prix de vente.** Retenez vos honoraires nets, c'est-à-dire ce qui reste à l'agence après la rémunération du négociateur ou du mandataire.",
          ],
        },
      ],
    },
    {
      id: "test",
      h2: "Un test de quelques semaines, avec des indicateurs fixés avant",
      blocks: [
        {
          t: "p",
          text: "Plutôt que de parier sur un calcul, testez. Fixez avant le démarrage ce que vous observerez : appels pris en charge, demandes qualifiées, rendez-vous réellement inscrits au calendrier, demandes de rappel, appels transmis pour un humain. Comparez à la période précédente avec la même grille. Le guide sur la [prise de rendez-vous par IA](/ressources/prise-rendez-vous-ia-immobilier) distingue ces indicateurs.",
        },
        {
          t: "checklist",
          items: [
            "Les quatre données sont relevées avant le test, avec leur date",
            "Les indicateurs du test sont écrits avant son démarrage",
            "La durée du test est fixée à l'avance, et le point de décision aussi",
            "Un appel peut être suivi jusqu'au rendez-vous, et le rendez-vous jusqu'à l'affaire",
          ],
        },
        {
          t: "callout",
          kind: "hypo",
          text: "Une période courte et un faible volume d'affaires donnent des résultats peu fiables : une affaire de plus ou de moins change tout. Lisez le test comme une indication, pas comme une démonstration.",
        },
      ],
    },
    {
      id: "limites",
      h2: "Quand le calcul ne justifie pas un standard",
      blocks: [
        {
          t: "p",
          text: "Si votre agence reçoit peu d'appels hors de portée, ou si vos appels perdus sont rarement des demandes à valeur, le seuil sera difficile à atteindre. Une organisation interne, un renvoi vers un collègue ou un service humain peut alors suffire. Le guide sur la [permanence téléphonique](/ressources/permanence-telephonique-agence-immobiliere) aide à comparer ces organisations. Le calcul sert aussi à écarter une dépense inutile.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA est-il toujours rentable ?" },
        {
          t: "p",
          text: "Non. Cela dépend de vos appels, de la valeur de vos affaires et du coût du service. Le calcul de ce guide permet de le vérifier sans s'appuyer sur un chiffre de marché.",
        },
        { t: "h3", text: "Quel taux de transformation retenir ?" },
        {
          t: "p",
          text: "Le vôtre, relevé sur vos dossiers. Un taux entendu ailleurs ne décrit pas votre agence.",
        },
        { t: "h3", text: "Pourquoi ne pas donner un nombre d'appels récupérés ?" },
        {
          t: "p",
          text: "Parce qu'aucune donnée vérifiable ne permet de l'annoncer. Rushh ne promet aucun résultat commercial : les résultats dépendent de nombreux facteurs.",
        },
        { t: "h3", text: "Rushh publie-t-il son tarif ?" },
        { t: "p", text: "Non. Rushh est proposé sur devis, après échange sur l'organisation de l'agence." },
      ],
    },
  ],
  sources: [
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
    {
      label: "Rushh : appels manqués en agence immobilière",
      url: "https://www.rushh.fr/ressources/appels-manques-immobilier",
      usedFor: "Méthode de relevé du journal d'appels et du tableau de suivi.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode de calcul, sans source externe : aucune donnée de marché n'est reprise. L'exemple chiffré est entièrement fictif : ses montants et ses taux sont inventés et ne représentent ni un tarif de Rushh, ni un tarif de concurrent, ni un résultat. Rushh ne promet aucun résultat commercial. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un devis sur votre organisation, un test que vous pouvez juger vous-même",
    text: "Rushh conçoit, configure, teste, déploie et suit un standard téléphonique IA spécialisé dans les appels entrants de l'immobilier. La tarification se fait sur devis, après un échange sur vos appels : vous pouvez ensuite appliquer à ce devis le calcul de ce guide, et écouter la ligne de démonstration avant de décider.",
    points: [
      "Un devis établi sur votre organisation réelle plutôt que sur une grille standard",
      "Une prestation entièrement prise en charge : vous n'avez pas à construire ni à maintenir les scénarios",
      "Une ligne de démonstration pour juger la voix et la suite donnée avant tout engagement",
      "Aucun résultat promis : la rentabilité se vérifie avec vos propres chiffres",
    ],
    links: [
      { href: "/offre", label: "Comprendre l'offre" },
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/ressources/cout-standard-telephonique-ia-immobilier",
      label: "Le coût réel d'un standard IA",
      text: "Les sept lignes d'un devis, pour renseigner le coût mensuel.",
    },
    {
      href: "/ressources/appels-manques-immobilier",
      label: "Mesurer les appels manqués",
      text: "Relever le journal d'appels et les motifs.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "La méthode de sélection, une fois le calcul fait.",
    },
  ],
  cta: {
    title: "Écoutez le standard, puis chiffrez avec votre devis",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, puis demandez un devis adapté à votre volume d'appels : vous pourrez appliquer le calcul de ce guide avec vos propres chiffres. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
