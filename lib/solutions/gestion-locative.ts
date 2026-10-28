import {
  DEMO_URL, arrowsToMd, bullets, exampleToMd, faqToMd, linksToMd,
  type Example, type Faq, type Link,
} from "./markdown";

export const PATH = "/solutions/gestion-locative";
export const TITLE = "Standard téléphonique IA pour la gestion locative | Rushh";
export const DESCRIPTION =
  "Locataires, bailleurs, candidats : Rushh identifie le motif de chaque appel et transmet les informations utiles à votre équipe. Sur devis.";

export const H1 = { before: "Standard téléphonique IA pour la ", em: "gestion locative", after: "" };
export const LABEL = "Gestion locative";
export const HOOK = "Locataires, bailleurs, candidats : un seul téléphone, des demandes très différentes.";
export const LEAD =
  "Rushh identifie le motif de chaque appel et transmet à votre équipe les informations utiles, pour que vos gestionnaires ne soient pas mobilisés sur chaque appel. Les règles sont définies avec vous.";
export const NOTE = "Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis";

export const PROBLEM = {
  pill: "La difficulté",
  title: "Un téléphone qui mélange tout",
  sub: "Un même numéro reçoit en quelques heures un signalement de panne, une question sur une quittance, une demande de visite et un propriétaire qui veut un point. Chaque appel interrompt un gestionnaire, et tous n'ont pas la même urgence.",
  chips: [
    "Panne ou désordre signalé",
    "Quittance, loyer, charges",
    "Visite d'un logement à louer",
    "Dossier de candidature",
    "Point demandé par un bailleur",
    "Passage d'un prestataire",
    "Demande de rappel",
  ],
};

export const FLOW = {
  pill: "Qualification par motif",
  title: "Savoir qui appelle et pourquoi",
  sub: "Chaque appel suit les règles validées avec vous.",
  steps: [
    { title: "Appel entrant", text: "Un locataire, un bailleur, un candidat ou un prestataire appelle." },
    { title: "Qui appelle ?", text: "Le Standard identifie la qualité de l'appelant, telle que celui-ci l'indique." },
    { title: "Quel motif ?", text: "Il pose les questions utiles pour cerner la demande : technique, administrative, location, rendez-vous." },
    { title: "Quelle priorité ?", text: "Il applique vos critères de priorité et vos consignes d'escalade." },
    { title: "Transmission", text: "La demande part vers la bonne personne, avec les informations recueillies." },
  ],
};

export const PATHS = {
  pill: "Quatre parcours",
  title: "Ce que le Standard recueille selon l'appelant",
  sub: "Ces scénarios sont des exemples fictifs, présentés à titre d'illustration.",
  items: [
    {
      title: "Un locataire signale un problème",
      line: "Le chauffage ne fonctionne plus dans mon logement.",
      rows: [
        ["Appelant", "Locataire"],
        ["Logement", "Tel que l'indique l'appelant"],
        ["Nature du problème", "Chauffage hors service, selon ses mots"],
        ["Priorité", "Selon vos critères"],
        ["Suite", "Transmission à la personne que vous désignez"],
      ],
    },
    {
      title: "Un propriétaire bailleur demande des informations",
      line: "Je voudrais savoir où en est la relocation de mon appartement.",
      rows: [
        ["Appelant", "Propriétaire bailleur"],
        ["Bien", "Tel que l'indique l'appelant"],
        ["Demande", "Point sur la relocation"],
        ["Réponse", "Aucune information de dossier sans connexion validée"],
        ["Suite", "Message transmis au gestionnaire du bien"],
      ],
    },
    {
      title: "Un candidat s'intéresse à un logement",
      line: "Je suis intéressé par le T2 de votre annonce, est-il toujours disponible ?",
      rows: [
        ["Appelant", "Candidat à la location"],
        ["Annonce", "Celle que l'appelant indique"],
        ["Demande", "Informations et visite"],
        ["Visite", "Créneau proposé si l'agenda est connecté, sinon demande transmise"],
        ["Suite", "Reprise par l'équipe location"],
      ],
    },
    {
      title: "Un appelant demande un rendez-vous ou un rappel",
      line: "Pouvez-vous me rappeler demain matin ?",
      rows: [
        ["Appelant", "Locataire ou bailleur"],
        ["Demande", "Rappel"],
        ["Créneau souhaité", "Demain matin"],
        ["Coordonnées", "Celles que l'appelant indique"],
        ["Suite", "Rappel par votre équipe, jamais par le Standard"],
      ],
    },
  ] satisfies Example[],
  note: "Exemples illustratifs : les informations recueillies et les actions dépendent des règles définies avec vous. Le Standard ne sélectionne pas les candidats et ne se prononce pas sur l'attribution d'un logement.",
};

export const URGENT = {
  pill: "Demandes urgentes",
  title: "Traiter une urgence sans rien promettre",
  sub: "Ce qui est urgent se définit avec vous, pas dans un logiciel. Les consignes d'escalade sont validées et testées avant la mise en service.",
  can: [
    "Recueillir ce que l'appelant décrit, avec ses propres mots",
    "Signaler la demande comme prioritaire si elle correspond à vos critères",
    "Appliquer vos consignes d'escalade : alerte, message prioritaire ou transfert, selon votre organisation",
    "Passer le relais à un humain",
  ],
  cannot: [
    "Il ne diagnostique pas un danger.",
    "Il ne promet aucune intervention automatique.",
    "Il ne remplace pas les services d'urgence.",
    "Il n'applique que les consignes définies avec vous.",
  ],
  note: "Une consigne peut par exemple inviter l'appelant à contacter les secours en cas de danger immédiat : elle est rédigée avec vous.",
};

export const ROUTING = {
  pill: "Transmission",
  title: "À la bonne équipe, selon votre organisation",
  sub: "Chaque cabinet répartit les demandes à sa façon. Le Standard suit votre répartition.",
  label: "Exemple illustratif",
  rows: [
    ["Signalement technique", "Gestionnaire du bien ou service technique"],
    ["Quittance, loyer, charges", "Comptabilité locative ou gestionnaire"],
    ["Candidat à la location", "Équipe location"],
    ["Propriétaire bailleur", "Gestionnaire du mandat"],
    ["Demande urgente", "Personne désignée pour les urgences"],
  ] as [string, string][],
  note: "Configurations à étudier avec vous, et non fonctionnalités déjà démontrées.",
};

export const MANAGED = {
  pill: "Service géré",
  title: "Vous nous expliquez, nous configurons",
  sub: "Rushh est une prestation done-for-you, pas un logiciel à paramétrer vous-même.",
  steps: [
    "Analyse de vos types d'appels et de votre organisation",
    "Configuration des scénarios et des consignes d'escalade",
    "Personnalisation à votre cabinet",
    "Connexion aux outils compatibles",
    "Tests et mise en service",
    "Supervision, support et maintenance",
  ],
  needTitle: "Ce que nous vous demandons",
  need: [
    "Vos motifs d'appel et la personne à qui transmettre chacun",
    "Vos consignes pour les demandes urgentes",
    "Vos horaires et le fonctionnement de votre permanence",
    "Les outils à connecter, le cas échéant",
  ],
  delay: "Mise en service visée sous 5 jours ouvrés après réception des éléments nécessaires. Ce délai est un objectif indicatif.",
};

export const TOOLS_NOTE =
  "Pour les rendez-vous de visite ou de rappel, une connexion à Google Calendar ou à Outlook peut être étudiée. Aucune connexion à un logiciel de gestion locative n'est annoncée sans vérification : si vous en utilisez un, parlons-en.";

export const FAQ: Faq[] = [
  {
    q: "Quelle différence avec la page des syndics ?",
    a: "La gestion locative concerne les locataires, les propriétaires bailleurs et les candidats. Le syndic concerne la copropriété : copropriétaires, conseil syndical et parties communes. Un cabinet qui fait les deux peut avoir des scénarios distincts.",
  },
  {
    q: "Le Standard peut-il renseigner un locataire sur son loyer ou sa quittance ?",
    a: "Pas sans connexion validée avec vos données. Par défaut, il recueille la demande et la transmet à la personne chargée de répondre.",
  },
  {
    q: "Que se passe-t-il en cas de fuite, de panne ou de danger ?",
    a: "Le Standard n'évalue pas la gravité d'une situation et ne promet aucune intervention. Il recueille ce que dit l'appelant, signale la demande selon vos critères et applique la consigne d'escalade définie avec vous.",
  },
  {
    q: "Peut-il organiser la visite d'un logement pour un candidat ?",
    a: "Si une connexion à Google Calendar ou à Outlook est validée, il peut proposer un créneau. Sinon, il recueille la demande de visite et la transmet à votre équipe. Il ne sélectionne pas les candidats.",
  },
  {
    q: "Est-ce un télésecrétariat humain ?",
    a: "Non, c'est un standard téléphonique alimenté par intelligence artificielle, configuré et suivi par Rushh. Les horaires et les situations réservées à un humain sont définis avec vous. Pour comparer les deux approches, voir le guide dédié.",
  },
  {
    q: "Dois-je le configurer moi-même ?",
    a: "Non. Rushh conçoit, configure, teste et suit le Standard avec vous. La mise en service est visée sous 5 jours ouvrés après réception des éléments nécessaires, et la tarification se fait sur devis.",
  },
];

export const SEE_ALSO: Link[] = [
  { href: "/solutions/syndics", label: "Syndics de copropriété" },
  { href: "/ressources/telesecretariat-humain-ou-ia", label: "Guide : télésecrétariat humain ou IA" },
];

export const FINAL = {
  title: "Étudions les appels de votre cabinet",
  text: "Lors d'une démonstration personnalisée, nous regardons vos motifs d'appel et vos règles d'orientation. Le devis est établi selon votre organisation.",
  links: [
    { href: "/offre", label: "L'offre Rushh" },
    { href: "/demonstrations", label: "Ligne de démonstration" },
    { href: "/solutions/syndics", label: "Syndics de copropriété" },
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

Exemples de demandes : ${PROBLEM.chips.map((c) => c.toLowerCase()).join(" ; ")}.

## ${FLOW.title}

${FLOW.sub}

${FLOW.steps.map((s, i) => `${i + 1}. **${s.title}** : ${s.text}`).join("\n")}

## ${PATHS.title}

${PATHS.sub}

${PATHS.items.map(exampleToMd).join("\n\n")}

${PATHS.note}

## ${URGENT.title}

${URGENT.sub}

Ce qu'il peut faire :

${bullets(URGENT.can)}

Ses limites :

${bullets(URGENT.cannot)}

${URGENT.note}

## ${ROUTING.title}

${ROUTING.sub}

${ROUTING.label} :

${arrowsToMd(ROUTING.rows)}

${ROUTING.note}

## ${MANAGED.title}

${MANAGED.sub}

${bullets(MANAGED.steps)}

${MANAGED.needTitle} :

${bullets(MANAGED.need)}

${MANAGED.delay}

## Rushh s'intègre à vos outils

${TOOLS_NOTE} Voir les [intégrations](${"https://www.rushh.fr"}/integrations).

## Questions fréquentes sur la gestion locative

${faqToMd(FAQ)}

Voir aussi : ${linksToMd(SEE_ALSO)}

## ${FINAL.title}

${FINAL.text} Tarification sur devis. Réserver une démo personnalisée : [${DEMO_URL}](${DEMO_URL})

Pour aller plus loin : ${linksToMd(FINAL.links)}
`;
}
