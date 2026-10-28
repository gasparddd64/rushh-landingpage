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
  "Rushh prend en charge vos appels entrants pendant vos visites, estimations et déplacements, puis vous transmet des demandes claires à traiter à votre retour. Sans imposer de nouvelle organisation technique.";
export const NOTE = "Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis";

export const PROBLEM = {
  pill: "Le problème opérationnel",
  title: "Seul sur le terrain, impossible de tout décrocher",
  sub: "Un mandataire gère seul les appels de vendeurs et d'acquéreurs, en plus de ses visites. Chaque appel manqué reste une demande sans réponse, parfois rappelée trop tard.",
  tiles: [
    { title: "Pendant une visite", text: "Décrocher, c'est interrompre un acquéreur qui vous consacre son temps." },
    { title: "Pendant une estimation", text: "Un propriétaire attend toute votre attention, pas un échange haché par le téléphone." },
    { title: "Pendant un déplacement", text: "Il est rarement possible de noter une demande ni de consulter un agenda." },
    { title: "Pendant un rendez-vous", text: "Vendeurs et acquéreurs appellent en même temps, sans se coordonner." },
  ],
};

export const FLOW = {
  pill: "Comment ça fonctionne",
  title: "De l'appel à votre retour de visite",
  sub: "Chaque appel suit les règles validées avec vous.",
  steps: [
    { title: "Appel entrant", text: "Un vendeur, un acquéreur ou un client appelle pendant que vous êtes indisponible." },
    { title: "Identification du motif", text: "Le Standard décroche et comprend s'il s'agit d'une estimation, d'une visite ou d'un autre sujet." },
    { title: "Qualification", text: "Il recueille les informations utiles : le projet, le bien concerné, les coordonnées indiquées par l'appelant." },
    { title: "Rendez-vous si approprié", text: "Selon vos règles et votre agenda connecté, il propose un créneau. Sinon, il note la demande." },
    { title: "Transmission", text: "Vous recevez la demande avec son contexte et vous rappelez au bon moment." },
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
  text: "Lors d'une démonstration personnalisée, nous regardons comment le Standard s'adapterait à votre activité. Le devis est établi selon votre organisation.",
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

## ${FLOW.title}

${FLOW.sub}

${FLOW.steps.map((s, i) => `${i + 1}. **${s.title}** : ${s.text}`).join("\n")}

## ${SITUATIONS.title}

${SITUATIONS.sub}

${SITUATIONS.items.map(exampleToMd).join("\n\n")}

${SITUATIONS.note}

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
