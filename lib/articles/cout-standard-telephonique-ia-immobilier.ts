import type { Article } from "./types";

export const coutStandard: Article = {
  path: "/ressources/cout-standard-telephonique-ia-immobilier",
  category: "guides",
  cover: {
    src: "/ressources/cout-standard-telephonique-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Une barre horizontale découpée en sept segments, abonnement, volume inclus, installation, intégrations, options, maintenance et engagement, qui forment ensemble le coût total d'un standard téléphonique IA, bien plus large que le seul prix mensuel affiché.",
  },
  title: "Prix d'un standard téléphonique IA immobilier : coût réel | Rushh",
  description:
    "Abonnement, minutes, installation, intégrations, options, maintenance, engagement : les sept lignes à lire dans un devis de standard téléphonique IA.",
  shortTitle: "Le coût réel d'un standard IA immobilier",
  summary: "Sept lignes à lire dans un devis, et une grille pour comparer le coût total plutôt que le prix affiché.",
  h1: "Combien coûte réellement un standard téléphonique IA pour une agence immobilière ?",
  answer:
    "Le prix mensuel affiché ne suffit pas à comparer deux standards téléphoniques IA. Le coût réel se forme sur sept lignes : abonnement, volume inclus et dépassement, installation, intégrations, options, maintenance et durée d'engagement. L'offre la moins chère sur le papier peut être la plus coûteuse à l'usage, surtout si votre volume d'appels dépasse le forfait.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "sept-lignes",
      h2: "Les sept lignes à lire dans un devis",
      blocks: [
        {
          t: "p",
          text: "Un devis de standard téléphonique IA se lit comme une facture à venir. Les fournisseurs n'utilisent pas tous les mêmes unités, et les pages tarifaires publiques le soulignent elles-mêmes : les minutes incluses, les volumes d'appels et les paliers ne se comparent pas directement d'une offre à l'autre.",
        },
        {
          t: "table",
          caption: "Les sept lignes qui forment le coût d'un standard téléphonique IA",
          head: ["Ligne", "Ce qu'elle recouvre", "Question à poser"],
          rows: [
            ["1. Abonnement", "Le montant récurrent, mensuel ou annuel", "Que comprend-il exactement, et que ne comprend-il pas ?"],
            ["2. Volume inclus et dépassement", "Minutes ou appels compris, puis tarif au-delà", "Que se passe-t-il le mois où le volume double ?"],
            ["3. Installation", "Création de l'agent, configuration, tests, mise en service", "Est-elle facturée, offerte, ou incluse dans l'abonnement ?"],
            ["4. Intégrations", "Connexion à l'agenda ou au logiciel immobilier", "Est-elle comprise, facturée à part, et qui la maintient ?"],
            ["5. Options", "SMS, notifications, appels simultanés, numéros supplémentaires", "Lesquelles sont indispensables à votre organisation ?"],
            ["6. Maintenance et évolutions", "Corrections, mises à jour de scénarios, nouveaux cas d'appels", "Qui modifie le scénario, et à quel coût ?"],
            ["7. Engagement et sortie", "Durée, reconduction, préavis, remise annuelle", "Comment résilier, et que devient la configuration ?"],
          ],
          note: "Les pages tarifaires publiques des fournisseurs citent notamment ces éléments : abonnement, minutes incluses, tarif de dépassement, appels simultanés, frais d'installation, remises annuelles, conditions d'essai ou d'engagement.",
        },
      ],
    },
    {
      id: "prix-mensuel",
      h2: "Pourquoi comparer uniquement le prix mensuel trompe",
      blocks: [
        {
          t: "p",
          text: "Un abonnement bas avec peu de minutes incluses et un dépassement élevé coûte peu les mois calmes et beaucoup les mois chargés. À l'inverse, un abonnement plus élevé avec un grand volume inclus donne un budget prévisible. La bonne comparaison se fait sur le volume réel de votre agence, pas sur la première ligne de la grille.",
        },
        {
          t: "p",
          text: "Le calcul est simple : coût mensuel = abonnement + (minutes consommées − minutes incluses) × tarif de dépassement + options + installation étalée sur la durée d'engagement + maintenance. Avant de comparer, relevez vos minutes d'appels entrants sur trois mois, y compris les pics (reprise de campagne, nouvelle annonce, lundi matin).",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Demandez à chaque fournisseur de chiffrer le même scénario : votre volume moyen, puis votre volume du mois le plus chargé. Si l'écart entre les deux est important, la ligne « dépassement » compte plus que l'abonnement.",
        },
      ],
    },
    {
      id: "simulations",
      h2: "Trois exemples de budget : une simulation, pas un prix Rushh",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Simulation pédagogique aux montants entièrement fictifs. Les prix ci-dessous ne sont ni des tarifs de Rushh ni ceux d'un concurrent : ils servent uniquement à montrer comment se calcule un coût total. Ne les utilisez pas comme repère de marché.",
        },
        {
          t: "p",
          text: "Hypothèses : une agence reçoit environ 300 appels entrants par mois, de deux minutes en moyenne, soit 600 minutes. Trois offres imaginaires sont comparées, en euros par mois, hors taxes. L'offre 1 affiche un abonnement de 35 € avec 100 minutes incluses, puis 0,40 € par minute au-delà. L'offre 2 affiche 90 € avec 400 minutes incluses, puis 0,20 € par minute. L'offre 3 affiche 150 € avec 800 minutes incluses, puis 0,15 € par minute, et des frais d'installation de 480 € étalés sur 12 mois, soit 40 € par mois.",
        },
        {
          t: "table",
          caption: "Coût mensuel simulé selon le volume d'appels (montants fictifs, en euros hors taxes)",
          head: ["Offre imaginaire", "Prix affiché", "Mois à 600 minutes", "Mois à 1 200 minutes"],
          rows: [
            ["Offre 1 : abonnement bas, dépassement élevé", "35 €", "235 €", "475 €"],
            ["Offre 2 : abonnement intermédiaire", "90 €", "130 €", "250 €"],
            ["Offre 3 : abonnement haut, volume large, installation facturée", "150 €", "190 €", "250 €"],
          ],
          note: "Calculs fictifs. Offre 1 à 600 minutes : 35 + (600 − 100) × 0,40 = 235. Offre 2 à 1 200 minutes : 90 + (1 200 − 400) × 0,20 = 250. Offre 3 à 600 minutes : 150 + 0 + 40 d'installation étalée = 190 ; à 1 200 minutes : 150 + (1 200 − 800) × 0,15 + 40 = 250.",
        },
        {
          t: "p",
          text: "Dans cette simulation, l'offre qui paraît la moins chère (l'offre 1) devient la plus coûteuse dès que le volume dépasse le forfait. L'offre 3, la plus chère à l'affichage, passe devant l'offre 1 dès 600 minutes et rejoint l'offre 2 à 1 200 minutes. Le classement change avec le volume : c'est pourquoi un devis doit être comparé sur vos propres chiffres.",
        },
      ],
    },
    {
      id: "avant-de-signer",
      h2: "Les questions à poser avant de signer",
      blocks: [
        {
          t: "checklist",
          items: [
            "Quel est le coût total pour mon volume moyen, et pour mon mois le plus chargé ?",
            "Les minutes incluses se reportent-elles d'un mois sur l'autre, ou sont-elles perdues ?",
            "L'installation et les intégrations sont-elles comprises, offertes pour une durée limitée, ou facturées à part ?",
            "Combien d'appels peuvent être traités en même temps, et que se passe-t-il au-delà ?",
            "Qui modifie le scénario quand mon organisation change, et ce service est-il facturé ?",
            "Quelle est la durée d'engagement, le préavis et les conditions de reconduction ?",
            "Que devient mon numéro, ma configuration et mes données si je quitte le service ?",
          ],
        },
        {
          t: "p",
          text: "Pour évaluer la qualité du service lui-même avant de parler de prix, voir le [guide pour choisir un standard téléphonique IA](/ressources/choisir-standard-telephonique-ia-immobilier) et le [comparatif des standards IA](/comparatif/standards-telephoniques-ia-immobilier). Pour mettre ce coût en regard d'un service humain, voir [télésecrétariat humain ou standard IA](/ressources/telesecretariat-humain-ou-ia).",
        },
      ],
    },
    {
      id: "rushh",
      h2: "Comment Rushh intervient : une prestation sur devis",
      blocks: [
        {
          t: "p",
          text: "Rushh est une prestation entièrement prise en charge : conception, configuration, tests, déploiement et suivi du standard par l'équipe Rushh. Elle est chiffrée sur devis, en fonction de l'organisation de l'agence, de ses appels et des connexions souhaitées. Rushh ne publie pas de grille tarifaire et cette page ne contient aucun prix Rushh.",
        },
        {
          t: "p",
          text: "Appliquez-lui la même grille qu'aux autres : demandez que le devis distingue la mise en place, le suivi, les connexions éventuelles et la durée d'engagement. Le périmètre de la prestation est décrit sur la page [L'offre Rushh](/offre).",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Pourquoi les prix publics des standards IA sont-ils si différents ?" },
        {
          t: "p",
          text: "Parce que les fournisseurs ne vendent pas la même chose : certains proposent un logiciel que vous paramétrez, d'autres une prestation gérée. Les unités (minutes, appels, paliers) et les services inclus varient aussi.",
        },
        { t: "h3", text: "Un standard IA coûte-t-il toujours moins cher qu'un service humain ?" },
        {
          t: "p",
          text: "Pas toujours. Le coût dépend du volume, de la couverture horaire et du niveau de service. Comparez sur vos chiffres, avec le même périmètre.",
        },
        { t: "h3", text: "Quel volume d'appels dois-je mesurer avant de demander un devis ?" },
        {
          t: "p",
          text: "Le nombre d'appels entrants et leur durée moyenne sur trois mois, avec le mois le plus chargé. Le guide sur les [appels manqués](/ressources/appels-manques-immobilier) propose une méthode pour les relever.",
        },
        { t: "h3", text: "Le tarif de Rushh est-il public ?" },
        { t: "p", text: "Non. Rushh est proposé sur devis, après échange sur l'organisation de l'agence." },
      ],
    },
  ],
  sources: [
    {
      label: "Callsens : standard téléphonique IA, mise en place, offres et coûts",
      url: "https://callsens.fr/standard-telephonique-ia",
      usedFor:
        "Exemple de page tarifaire publique d'un fournisseur : elle liste les éléments de coût (abonnement, minutes incluses, dépassement, appels simultanés, installation, remises annuelles, engagement) et signale que les unités ne sont pas directement comparables. Consulté le 31 octobre 2026. Aucun prix n'est repris ici.",
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode de calcul. Les trois offres de la simulation sont imaginaires et leurs montants fictifs, chiffrés pour la pédagogie : ils ne représentent ni un tarif de Rushh ni celui d'un fournisseur existant. Les prix réels des fournisseurs changent ; vérifiez-les sur leurs sites à la date de votre décision. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un périmètre clair, un devis lisible, et un standard pris en charge de bout en bout",
    text: "Rushh conçoit, configure, teste, déploie et suit un standard téléphonique IA spécialisé dans les appels entrants de l'immobilier. La tarification se fait sur devis, après un échange sur vos appels et votre organisation : l'objectif est que chaque ligne de coût soit compréhensible avant de s'engager.",
    points: [
      "Une prestation entièrement prise en charge : vous n'avez pas à construire ni à maintenir les scénarios",
      "Un devis établi sur votre organisation réelle plutôt que sur une grille standard",
      "Une voix naturelle, des échanges réactifs, que vous pouvez écouter avant toute décision",
      "Aucun prix publié : la comparaison se fait sur votre volume, avec votre devis",
    ],
    links: [
      { href: "/offre", label: "Comprendre l'offre" },
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "La méthode de sélection, avant de parler de prix.",
    },
    {
      href: "/comparatif/standards-telephoniques-ia-immobilier",
      label: "Comparatif des standards IA",
      text: "Les offres du marché face aux mêmes critères.",
    },
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou standard IA",
      text: "Comparer les modèles avant d'en chiffrer un.",
    },
  ],
  cta: {
    title: "Écoutez le standard avant de parler budget",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, puis demandez un devis adapté à votre volume d'appels. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
