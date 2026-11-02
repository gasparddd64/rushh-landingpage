import type { Article } from "./types";

export const repondeurOuStandardIa: Article = {
  path: "/ressources/repondeur-ou-standard-ia-agence-immobiliere",
  category: "guides",
  cover: {
    src: "/ressources/repondeur-ou-standard-ia-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Trois façons de traiter un appel que l'agence ne peut pas prendre : le répondeur, qui enregistre un message, le rappel manuel, qui dépend de l'équipe, et la prise en charge conversationnelle, qui échange, qualifie et transmet.",
  },
  title: "Répondeur ou standard téléphonique IA en agence immobilière | Rushh",
  description:
    "Message vocal, rappel manuel ou prise en charge conversationnelle : ce que chacun change pour un vendeur ou un acquéreur qui appelle une agence.",
  shortTitle: "Répondeur ou standard IA : ce qui change",
  summary: "Ce que vit l'appelant avec un répondeur, un rappel manuel ou un standard IA, et ce que chacun transmet à l'équipe.",
  h1: "Répondeur ou standard téléphonique IA : que vit un vendeur ou un acquéreur qui appelle votre agence ?",
  answer:
    "Un répondeur enregistre un message, parfois incomplet ; le rappel manuel dépend de la disponibilité de l'équipe ; un standard téléphonique IA dialogue avec l'appelant, recueille les informations utiles et transmet ou fixe un rendez-vous selon les règles de l'agence. Le choix ne se fait pas sur l'outil, mais sur ce que l'appelant vit pendant l'appel et sur ce que l'équipe reçoit ensuite. Aucun mode n'est supérieur dans l'absolu : testez avec vos propres appels.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "probleme",
      h2: "Le problème : un appelant sans réponse ne se transforme pas toujours en message",
      blocks: [
        {
          t: "p",
          text: "Quand l'agence ne décroche pas, l'appelant a trois issues : laisser un message, rappeler plus tard, ou appeler quelqu'un d'autre. Le répondeur ne contrôle que la première. Pour un vendeur qui hésite encore ou un acquéreur pressé par une annonce, la deuxième et la troisième sont fréquentes, sans qu'on puisse l'affirmer en chiffres : seule la mesure sur vos propres appels le dit.",
        },
        {
          t: "p",
          text: "Ce guide ne reprend pas la mesure des appels manqués, traitée dans le [guide sur les appels manqués](/ressources/appels-manques-immobilier). Il compare trois façons de traiter un appel que personne ne peut prendre, du point de vue de l'appelant puis de celui de l'équipe.",
        },
      ],
    },
    {
      id: "comparaison",
      h2: "Trois modes, comparés à partir de l'appel",
      blocks: [
        {
          t: "table",
          caption: "Répondeur, rappel manuel et prise en charge conversationnelle",
          head: ["Critère", "Répondeur", "Rappel manuel", "Standard téléphonique IA"],
          rows: [
            ["Ce que vit l'appelant", "Un message d'accueil, puis un bip", "Une sonnerie, parfois sans suite", "Un échange : il est écouté et reçoit une réponse"],
            ["Informations recueillies", "Ce que l'appelant choisit de dire", "Celles notées au rappel, plus tard", "Les questions définies par l'agence, posées pendant l'appel"],
            ["Suite annoncée", "Aucune ou générique", "Aucune tant que personne ne rappelle", "Une suite précise : rappel, rendez-vous ou transmission"],
            ["Rendez-vous", "Non", "Au rappel, si la personne répond", "Oui si l'agenda est accessible et que le scénario l'autorise, sinon transmission"],
            ["Ce que reçoit l'équipe", "Un message audio à écouter", "Un appel manqué dans le journal", "Un résumé structuré : motif, coordonnées, urgence selon vos règles"],
            ["Hors horaires", "Message, même contenu", "Dépend de l'équipe", "Même qualification à toute heure, selon vos règles"],
            ["Limite principale", "Beaucoup d'appelants ne laissent pas de message", "La suite dépend d'un humain disponible", "Exige un paramétrage et des tests soignés"],
          ],
          note: "Comparaison de fonctionnement, sans chiffre : aucun taux de messages laissés ni de conversion n'est avancé. Les trois modes peuvent se combiner.",
        },
      ],
    },
    {
      id: "vendeur",
      h2: "Le cas du vendeur : un appel qui compte",
      blocks: [
        {
          t: "p",
          text: "Un propriétaire qui pense à vendre appelle souvent après avoir hésité. Un message d'accueil suivi d'un bip lui demande de préparer ce qu'il veut dire, sans savoir ce qu'il se passera ensuite. Un échange lui permet d'expliquer son projet en quelques mots, de préciser son secteur, et de savoir qu'un collaborateur le rappellera à un moment donné.",
        },
        {
          t: "callout",
          kind: "example",
          text: "Exemple fictif. Un vendeur appelle le samedi à 17 h. Avec un répondeur, l'agence reçoit un message de dix secondes : « Bonjour, je voulais des informations. » Avec un échange qualifié, elle reçoit un résumé : projet de vente d'un T3, secteur, délai évoqué, souhait d'être rappelé en début de semaine. Les deux situations sont fictives : elles illustrent la différence d'information, pas un résultat mesuré.",
        },
        {
          t: "p",
          text: "Le [guide sur l'appel vendeur pour une estimation](/ressources/appel-vendeur-estimation-immobiliere) détaille les questions utiles à poser, et celles à ne pas poser.",
        },
      ],
    },
    {
      id: "acquereur",
      h2: "Le cas de l'acquéreur : un appel qui vieillit vite",
      blocks: [
        {
          t: "p",
          text: "Un acquéreur qui appelle au sujet d'une annonce attend souvent une réponse sur un bien précis : est-il encore disponible, peut-on le visiter ? Un répondeur ne peut ni répondre ni identifier le bien. Un standard IA peut demander lequel et transmettre l'information, ou proposer un créneau de visite si l'agenda le permet. Il ne confirme la disponibilité d'un bien que si cette information lui a été fournie.",
        },
      ],
    },
    {
      id: "choix",
      h2: "Comment choisir : quatre questions",
      blocks: [
        {
          t: "ol",
          items: [
            "**Combien d'appels sans réponse par semaine, et à quels moments ?** Le journal d'appels le dit, le guide sur les appels manqués explique comment le lire.",
            "**Qui rappelle, et dans quel délai ?** Si la réponse dépend d'une personne souvent en visite, le rappel manuel seul a ses limites.",
            "**Quelles informations faut-il avoir avant de rappeler ?** Plus la liste est longue, plus l'échange compte.",
            "**Quel niveau de contrôle voulez-vous ?** Un répondeur ne fait que ce qu'on lui dit ; un standard IA suit des règles écrites que vous validez et testez.",
          ],
        },
        {
          t: "p",
          text: "Les trois modes ne s'excluent pas : un répondeur peut rester en secours, un rappel manuel peut suivre un résumé, et un standard IA peut traiter les créneaux où l'équipe n'est pas disponible.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA est-il toujours préférable à un répondeur ?" },
        {
          t: "p",
          text: "Non. Il demande un paramétrage et des tests, et son intérêt dépend de votre volume d'appels, de vos horaires et de votre organisation. Le répondeur reste un secours simple.",
        },
        { t: "h3", text: "L'appelant doit-il savoir qu'il parle à une IA ?" },
        {
          t: "p",
          text: "C'est une bonne pratique, et une obligation de transparence encadre ces systèmes. Voir le [guide sur le RGPD et le standard IA](/ressources/standard-telephonique-ia-immobilier-rgpd).",
        },
        { t: "h3", text: "Peut-on garder le répondeur actuel ?" },
        {
          t: "p",
          text: "Oui, selon la configuration retenue avec l'opérateur : par exemple en secours quand le standard n'est pas joignable.",
        },
        { t: "h3", text: "Comment comparer sans chiffres inventés ?" },
        {
          t: "p",
          text: "En relevant, sur deux semaines, les appels sans réponse, les messages laissés et les rappels réalisés. Ces trois nombres sont les vôtres.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les informations recueillies au besoin de la finalité. Consulté le 2 novembre 2026.",
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide compare des modes de fonctionnement : les exemples sont fictifs et aucun taux de messages laissés, de rappels ou de conversion n'est avancé. Aucun mode n'est présenté comme supérieur dans l'absolu. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un échange à la place du bip, selon les règles de votre agence",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, dialogue avec l'appelant, recueille les informations que vous avez choisies, puis transmet ou fixe un rendez-vous selon la configuration. Il est spécialisé pour l'immobilier : vendeurs, acquéreurs, locataires, bailleurs.",
    points: [
      "Un dialogue et une qualification, au lieu d'un message vocal à écouter",
      "Des scénarios personnalisés pour votre agence, validés avant la mise en service",
      "Disponibilité 24 h/24 et 7 j/7",
      "Une transmission structurée à l'équipe, avec le motif de l'appel",
      "Une prise de rendez-vous selon la configuration et l'accès à l'agenda",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/ressources/appels-manques-immobilier",
      label: "Mesurer ses appels manqués",
      text: "Lire un journal d'appels et choisir une organisation.",
    },
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou IA",
      text: "Comparer trois modèles de réponse.",
    },
    {
      href: "/ressources/renvoi-appel-ou-decroche-ia-immobilier",
      label: "Renvoi d'appel ou décrochage IA",
      text: "Qui décroche en premier ?",
    },
  ],
  cta: {
    title: "Entendez la différence avec un message vocal",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, comme un vendeur puis comme un acquéreur : vous jugerez l'échange, les questions posées et la suite annoncée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
