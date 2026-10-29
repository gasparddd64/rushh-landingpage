import {
  DEMO_URL, bullets, exampleToMd, faqToMd, linksToMd,
  type Example, type Faq, type Link,
} from "./markdown";

export const PATH = "/solutions/mandataires-immobiliers";
export const TITLE = "Standard téléphonique IA pour mandataires immobiliers | Rushh";
export const DESCRIPTION =
  "Visites, estimations, déplacements : Rushh prend vos appels entrants, qualifie la demande et vous la transmet. Service géré, sur devis.";

export const H1 = { before: "Standard téléphonique IA pour ", em: "mandataires immobiliers", after: "" };
export const LABEL = "Mandataires immobiliers";
export const HOOK = "Vous êtes en visite. Votre téléphone continue de sonner.";
export const LEAD =
  "Un propriétaire appelle pendant votre visite ? Rushh décroche, recueille son projet et prépare la suite, jusqu'à proposer une estimation selon vos disponibilités lorsque votre agenda est connecté. Vous retrouvez une demande claire à rappeler, pas un appel manqué.";

export const HERO_SAMPLE = {
  caller: "Propriétaire vendeur",
  quote: "Bonjour, je pense vendre ma maison et j'aimerais une estimation.",
  rows: [
    ["Motif", "Estimation d'un bien"],
    ["Projet", "Vente, tel que décrit par l'appelant"],
    ["Coordonnées", "Celles indiquées par l'appelant"],
    ["Suite", "Rendez-vous ou rappel, selon vos règles"],
  ] as [string, string][],
  outcome: "Demande transmise, prête à rappeler",
};
export const NOTE = "Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis";

export const PROBLEM = {
  pill: "Le problème opérationnel",
  title: "Le téléphone sonne quand vous êtes le moins disponible",
  sub: "Un mandataire travaille seul. Les appels de vendeurs et d'acquéreurs arrivent pendant les visites, les estimations et les trajets, c'est-à-dire au moment où ils sont les plus difficiles à prendre.",
  tiles: [
    { title: "Pendant une visite", text: "Décrocher, c'est interrompre l'acquéreur qui vous consacre son temps. Ne pas décrocher, c'est laisser un contact sans réponse." },
    { title: "Pendant une estimation", text: "Un propriétaire vous consacre son temps : vous ne pouvez pas le partager avec un autre vendeur qui appelle au même moment." },
    { title: "Sur la route", text: "Impossible de noter une demande ou de consulter votre agenda en conduisant. Le rappel se fait de mémoire, plus tard." },
    { title: "Le soir et le week-end", text: "Un appel hors horaires attend le lendemain, sauf si le Standard couvre ces créneaux selon vos règles." },
  ],
  closing:
    "Un propriétaire qui n'obtient pas de réponse reste libre d'appeler un autre professionnel. Quand les demandes sont plus rares, chacune mérite d'être traitée.",
};

export const FLOW = {
  pill: "Comment ça fonctionne",
  title: "De l'appel à une demande prête à rappeler",
  sub: "Pendant que vous êtes en visite, le Standard conduit l'appel selon les règles validées avec vous.",
  steps: [
    { title: "Appel entrant", text: "Un vendeur, un acquéreur ou un client appelle pendant que vous êtes indisponible." },
    { title: "Identification du motif", text: "Le Standard décroche et comprend s'il s'agit d'une estimation, d'une visite ou d'un autre sujet." },
    { title: "Qualification", text: "Il recueille les informations utiles : le projet, le bien concerné, les coordonnées indiquées par l'appelant." },
    { title: "Rendez-vous si approprié", text: "Selon vos règles et votre agenda connecté, il propose un créneau. Sinon, il note la demande." },
    { title: "Transmission", text: "Vous recevez la demande avec son contexte et vous rappelez au bon moment." },
  ],
  foot: "Rushh ne promet ni mandat ni rendez-vous : il remet la demande entre vos mains, déjà renseignée.",
};

export const DIFF = {
  pill: "Pourquoi Rushh",
  title: "Ce qui compte quand on travaille seul",
  sub: "Trois différences à vérifier par vous-même, au téléphone et dans la mise en place.",
  items: [
    {
      title: "Une voix naturelle, pas un menu téléphonique",
      text: "L'appelant explique son besoin normalement et reçoit une réponse rapide, sans parcourir un menu rigide. La voix est personnalisable, et peut être clonée avec l'autorisation de son titulaire.",
      link: { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
    },
    {
      title: "Une prestation prise en charge de A à Z",
      text: "Seul, vous n'avez ni le temps ni l'envie de configurer un outil. Rushh analyse votre fonctionnement, construit les scénarios, connecte vos outils, teste, puis suit et améliore le Standard avec vous.",
      link: { href: "/offre", label: "Voir ce que Rushh prend en charge" },
    },
    {
      title: "Des questions de professionnel de l'immobilier",
      text: "Projet, bien, secteur, disponibilités : le Standard distingue une estimation, une visite et un rappel, puis agit selon vos règles : créneau d'estimation sur votre agenda connecté, SMS de confirmation, fiche transmise à votre logiciel lorsque la connexion est configurée. Vous recevez l'essentiel, pas une simple trace d'appel.",
    },
  ],
};

export const PROOF = {
  title: "Écoutez-le avant de décider",
  text: "Appelez la ligne de démonstration et jouez le rôle d'un vendeur ou d'un acquéreur : vous jugez vous-même la voix, la vitesse de réponse et la façon dont l'appel est conduit.",
  say: [
    "Bonjour, je souhaite faire estimer mon appartement à Paris.",
    "J'aimerais organiser une visite pour un appartement.",
  ],
};

export const SITUATIONS = {
  pill: "Trois situations",
  title: "Ce que vous retrouvez après la visite",
  sub: "Ces scénarios sont des exemples fictifs, présentés à titre d'illustration.",
  items: [
    {
      title: "Un vendeur veut faire estimer son bien",
      line: "Bonjour, je pense vendre ma maison et j'aimerais une estimation.",
      rows: [
        ["Appelant", "Vendeur"],
        ["Demande", "Estimation du bien"],
        ["Bien", "Tel que décrit par l'appelant"],
        ["Suite", "Rendez-vous ou rappel, selon vos règles"],
      ],
    },
    {
      title: "Un acquéreur veut visiter",
      line: "Je voudrais visiter l'appartement de votre annonce, est-il toujours disponible ?",
      rows: [
        ["Appelant", "Acquéreur"],
        ["Demande", "Visite d'un bien"],
        ["Annonce", "Celle que l'appelant indique"],
        ["Suite", "Créneau proposé si l'agenda est connecté, sinon demande transmise"],
      ],
    },
    {
      title: "Un client rappelle pendant une visite",
      line: "Je vous ai laissé un message hier, je voulais savoir où on en est.",
      rows: [
        ["Appelant", "Client dont le dossier est en cours"],
        ["Demande", "Point sur son dossier"],
        ["Réponse", "Aucune information de dossier sans connexion validée"],
        ["Suite", "Message transmis, rappel par vous"],
      ],
    },
  ] satisfies Example[],
  note: "Exemples illustratifs : les informations recueillies et les actions dépendent des règles définies avec vous. Aucun mandat ni rendez-vous n'est garanti.",
};

export const MODES = {
  pill: "Deux modes d'utilisation",
  title: "Réponse directe ou renvoi quand vous êtes indisponible",
  sub: "Le choix dépend de votre usage et de votre configuration téléphonique, étudiée avec vous.",
  items: [
    {
      title: "Réponse directe par le Standard",
      points: [
        "Le Standard répond en premier aux appels de la ligne qu'il prend en charge.",
        "Vous recevez les demandes qui méritent votre rappel.",
        "Adapté si vous préférez ne pas être dérangé en cours de journée.",
      ],
    },
    {
      title: "Renvoi lorsque vous êtes indisponible",
      points: [
        "Vous décrochez vous-même quand vous le pouvez.",
        "Quand vous êtes en visite ou occupé, l'appel est renvoyé vers le Standard.",
        "Le renvoi dépend de votre opérateur et de votre téléphonie : il est vérifié pendant l'analyse.",
      ],
    },
  ],
};

export const MANAGED = {
  pill: "Service entièrement géré",
  title: "Vous ne configurez rien",
  sub: "Rushh est une prestation done-for-you, pas un logiciel à paramétrer vous-même.",
  steps: [
    "Analyse de votre fonctionnement",
    "Configuration de vos scénarios téléphoniques",
    "Personnalisation selon votre activité",
    "Connexion à vos outils compatibles",
    "Tests et mise en service",
    "Supervision, support et maintenance",
  ],
  delay: "Mise en service visée sous 5 jours ouvrés après réception des éléments nécessaires. Ce délai est un objectif indicatif.",
};

export const TOOLS_SECTION = {
  pill: "Connexions possibles",
  title: "Vos outils, selon votre contexte technique",
  sub: "Les connexions sont étudiées et confirmées avec vous avant la mise en service.",
  rows: [
    ["Google Calendar, Outlook", "Synchronisation des rendez-vous pris par le Standard dans votre agenda"],
    ["Apimo, Whise", "Transmission des fiches prospects et des rendez-vous au logiciel métier"],
  ] as [string, string][],
  note: "Vous utilisez un autre outil ? Parlons-en : aucune connexion n'est annoncée sans vérification.",
};

export const FAQ: Faq[] = [
  {
    q: "Pourquoi un standard téléphonique quand on travaille seul ?",
    a: "Parce que c'est précisément quand vous êtes seul que personne ne décroche à votre place. Le Standard prend le relais pendant vos visites et vos déplacements, et vous remettez à votre retour des demandes déjà renseignées.",
  },
  {
    q: "Puis-je garder mon numéro actuel ?",
    a: "Selon votre opérateur et votre téléphonie, un renvoi d'appel vers le Standard est généralement possible lorsque vous êtes indisponible. Nous vérifions ce point avec vous pendant l'analyse, avant toute mise en service.",
  },
  {
    q: "Que reçois-je après un appel ?",
    a: "Le motif de l'appel, les informations recueillies pendant l'échange et les coordonnées que l'appelant a indiquées. Le canal de transmission est défini avec vous.",
  },
  {
    q: "Le Standard peut-il prendre rendez-vous dans mon agenda ?",
    a: "Oui, si une connexion à Google Calendar ou à Outlook est validée avec vous. Sans connexion, il recueille la demande de rendez-vous et vous la transmet.",
  },
  {
    q: "Peut-il estimer un bien ou répondre sur mes mandats ?",
    a: "Non. Il ne donne ni estimation, ni avis de valeur, ni conseil, et ne communique aucune information de dossier sans connexion validée. Ces échanges restent les vôtres.",
  },
  {
    q: "Dois-je le configurer moi-même ?",
    a: "Non. Rushh conçoit, configure, teste et suit le Standard avec vous. Il suffit de nous expliquer votre fonctionnement. La mise en service est visée sous 5 jours ouvrés après réception des éléments nécessaires, et la tarification se fait sur devis.",
  },
  {
    q: "Rushh garantit-il des mandats ou des rendez-vous ?",
    a: "Non. Le Standard est un outil d'assistance : il ne promet aucun mandat, aucune conversion et aucun résultat commercial.",
  },
];

export const FINAL = {
  title: "Pendant vos visites, Rushh prend vos appels",
  text: "Lors d'une démonstration personnalisée, nous regardons ensemble comment le Standard prendrait vos appels de vendeurs et d'acquéreurs. Le devis est établi selon votre organisation.",
  links: [
    { href: "/offre", label: "L'offre Rushh" },
    { href: "/demonstrations", label: "Ligne de démonstration" },
    { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
    { href: "/integrations", label: "Intégrations" },
  ] satisfies Link[],
};

export function toMarkdown(): string {
  return `# ${H1.before}${H1.em}${H1.after}

**${HOOK}**

${LEAD} ${NOTE.replace(" · ", ". ")}.

Réserver une démo : [${DEMO_URL}](${DEMO_URL})

## ${PROBLEM.title}

${PROBLEM.sub}

${PROBLEM.tiles.map((t) => `- **${t.title}** : ${t.text}`).join("\n")}

${PROBLEM.closing}

## ${FLOW.title}

${FLOW.sub}

${FLOW.steps.map((s, i) => `${i + 1}. **${s.title}** : ${s.text}`).join("\n")}

${FLOW.foot}

## ${SITUATIONS.title}

${SITUATIONS.sub}

${SITUATIONS.items.map(exampleToMd).join("\n\n")}

${SITUATIONS.note}

## ${DIFF.title}

${DIFF.sub}

${DIFF.items.map((d) => `### ${d.title}\n\n${d.text}`).join("\n\n")}

## ${PROOF.title}

${PROOF.text} Ligne de démonstration (agence fictive à Paris) : 01 76 63 57 09.

${bullets(PROOF.say.map((q) => `« ${q} »`))}

## ${MODES.title}

${MODES.sub}

${MODES.items.map((m) => `### ${m.title}\n\n${bullets(m.points)}`).join("\n\n")}

## ${MANAGED.title}

${MANAGED.sub}

${bullets(MANAGED.steps)}

${MANAGED.delay}

## ${TOOLS_SECTION.title}

${TOOLS_SECTION.sub}

${TOOLS_SECTION.rows.map(([a, b]) => `- ${a} : ${b}`).join("\n")}

${TOOLS_SECTION.note}

## Questions fréquentes pour les mandataires immobiliers

${faqToMd(FAQ)}

## ${FINAL.title}

${FINAL.text} Tarification sur devis. Réserver une démo personnalisée : [${DEMO_URL}](${DEMO_URL})

Pour aller plus loin : ${linksToMd(FINAL.links)}
`;
}
