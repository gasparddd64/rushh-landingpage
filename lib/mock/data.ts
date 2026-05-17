import type {
  Prospect,
  Conversation,
  Message,
  Campaign,
  Signal,
  KPI,
  WatchlistItem,
  AgentJournalEntry,
  ChatConversation,
  ChatMessage,
} from "./types";

// ---------------------------------------------------------------------------
// KPIs
// ---------------------------------------------------------------------------

export const BASE_KPIS: KPI[] = [
  { id: "detected", label: "Leads detectes", value: 1247, delta: 18 },
  { id: "contacted", label: "Contactes", value: 489, delta: 12 },
  { id: "accepted", label: "Acceptes", value: 127, delta: 8 },
  { id: "meetings", label: "RDV pris", value: 18, delta: 20 },
];

// ---------------------------------------------------------------------------
// Campaigns
// ---------------------------------------------------------------------------

export const CAMPAIGNS: Campaign[] = [
  {
    id: "k1",
    name: "Fintech Q2 2026",
    status: "active",
    mode: "signals",
    signal: "Posts de Y Combinator",
    icp: "Fondateurs fintech, Series A-B, France",
    detected: 89,
    contacted: 47,
    accepted: 18,
    meetings: 3,
    target: 100,
    acceptanceRate: 38,
    startedDaysAgo: 12,
  },
  {
    id: "k2",
    name: "SaaS B2B Founders",
    status: "active",
    mode: "signals",
    signal: "Compte Mehdi Sebti",
    icp: "Fondateurs SaaS B2B, 10-50 employes",
    detected: 287,
    contacted: 156,
    accepted: 49,
    meetings: 5,
    target: 200,
    acceptanceRate: 31,
    startedDaysAgo: 28,
  },
  {
    id: "k3",
    name: "Founders France",
    status: "active",
    mode: "signals",
    signal: "Hashtag #fintechfr",
    icp: "Fondateurs et CEO, startups francaises",
    detected: 412,
    contacted: 213,
    accepted: 89,
    meetings: 11,
    target: 300,
    acceptanceRate: 42,
    startedDaysAgo: 35,
  },
  {
    id: "k4",
    name: "RevOps DACH",
    status: "active",
    mode: "salesnav",
    signal: "Post RevOps",
    icp: "VP Sales et RevOps, region DACH",
    detected: 67,
    contacted: 28,
    accepted: 9,
    meetings: 1,
    target: 80,
    acceptanceRate: 32,
    startedDaysAgo: 7,
  },
  {
    id: "k5",
    name: "AI Hiring",
    status: "paused",
    mode: "signals",
    signal: "Post 10 traits CTO",
    icp: "CTO et VP Engineering, recrutement IA",
    detected: 134,
    contacted: 78,
    accepted: 22,
    meetings: 2,
    target: 100,
    acceptanceRate: 28,
    startedDaysAgo: 45,
  },
  {
    id: "k6",
    name: "PLG Champions",
    status: "paused",
    mode: "import",
    signal: "Hashtag #productledgrowth",
    icp: "Head of Growth, PLG SaaS",
    detected: 198,
    contacted: 112,
    accepted: 38,
    meetings: 4,
    target: 150,
    acceptanceRate: 34,
    startedDaysAgo: 60,
  },
  {
    id: "k7",
    name: "Logistics Q1 (pilote)",
    status: "ended",
    mode: "signals",
    signal: "Compte de YC",
    icp: "Fondateurs logistique, pre-seed a Series A",
    detected: 56,
    contacted: 56,
    accepted: 11,
    meetings: 1,
    target: 56,
    acceptanceRate: 20,
    startedDaysAgo: 90,
  },
];

// ---------------------------------------------------------------------------
// Signals
// ---------------------------------------------------------------------------

export const SIGNALS: Signal[] = [
  {
    id: "s1",
    name: "Posts de Y Combinator",
    type: "Compte LinkedIn",
    leadsDetected: 247,
    acceptanceRate: 64,
    usedIn: 2,
    status: "active",
    spark: [12, 18, 15, 22, 30, 25, 28],
  },
  {
    id: "s2",
    name: "Hashtag #fintechfr",
    type: "Recherche par mot-cle",
    leadsDetected: 156,
    acceptanceRate: 41,
    usedIn: 1,
    status: "active",
    spark: [8, 11, 9, 14, 10, 13, 16],
  },
  {
    id: "s3",
    name: "Post 'How we evaluate seed founders'",
    type: "URL",
    leadsDetected: 89,
    acceptanceRate: 58,
    usedIn: 1,
    status: "active",
    spark: [5, 7, 12, 9, 15, 11, 8],
  },
];

// ---------------------------------------------------------------------------
// Conversations
// ---------------------------------------------------------------------------

export const CONVERSATIONS: Conversation[] = [
  // --- 3 hot ---
  {
    id: "conv-1",
    prospectName: "Julien Marchand",
    prospectRole: "CEO",
    prospectCompany: "Vendora",
    score: 92,
    campaign: "Fintech Q2 2026",
    signalSource: "Post YC · Series A",
    status: "hot",
    unread: true,
    lastTs: "2026-05-15T09:12:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-13T14:30:00",
        text: "Bonjour Julien, j'ai vu votre publication sur les enjeux de la distribution B2B en fintech. Chez BeReach, nous aidons les fondateurs a automatiser leur prospection LinkedIn. Seriez-vous ouvert a un echange rapide ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-15T09:12:00",
        text: "Bonjour, merci pour le message. On est justement en train de structurer notre outbound. Vous avez un creneaux cette semaine ?",
      },
    ],
    draft:
      "Parfait Julien, je vous propose jeudi 15h ou vendredi 10h. Quel creneaux vous convient le mieux ?",
    notes: "Interesse, levee Series A recente. Prioriser.",
  },
  {
    id: "conv-2",
    prospectName: "Claire Dumont",
    prospectRole: "Fondatrice",
    prospectCompany: "Stackly",
    score: 88,
    campaign: "SaaS B2B Founders",
    signalSource: "Compte Mehdi Sebti",
    status: "hot",
    unread: true,
    lastTs: "2026-05-15T08:45:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-12T10:00:00",
        text: "Bonjour Claire, felicitations pour la croissance de Stackly. J'accompagne des fondateurs SaaS B2B sur leur strategie d'acquisition LinkedIn. Est-ce un sujet pour vous en ce moment ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-14T16:20:00",
        text: "Merci ! Oui, on cherche a scaler notre acquisition. On fait tout manuellement pour l'instant.",
      },
      {
        from: "agent",
        time: "2026-05-14T16:45:00",
        text: "Je comprends, c'est un point de bascule classique. BeReach permet d'automatiser la detection de signaux et la prise de contact. Voulez-vous qu'on en discute ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-15T08:45:00",
        text: "Pourquoi pas. Envoyez-moi un lien de calendrier.",
      },
    ],
    draft:
      "Avec plaisir Claire. Voici mon lien : calendly.com/bereach/demo. A tres vite !",
    notes: "Fondatrice motivee. Pipeline SaaS B2B.",
  },
  {
    id: "conv-3",
    prospectName: "Thomas Petit",
    prospectRole: "CTO",
    prospectCompany: "Forge",
    score: 85,
    campaign: "AI Hiring",
    signalSource: "Post 10 traits CTO",
    status: "hot",
    unread: true,
    lastTs: "2026-05-14T18:30:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-11T09:00:00",
        text: "Bonjour Thomas, j'ai lu votre article sur les criteres de recrutement tech. Chez BeReach, nous aidons les equipes tech a identifier des profils via des signaux LinkedIn. Ca vous parle ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-14T18:30:00",
        text: "Interessant. On recrute 3 devs senior en ce moment et LinkedIn est notre canal principal. Comment ca marche concretement ?",
      },
    ],
    draft:
      "En quelques mots : on detecte les profils qui interagissent avec du contenu tech cible, puis on automatise la prise de contact personnalisee. Je peux vous montrer en 15 min si vous voulez.",
    notes: "CTO tech-savvy. Potentiel champion interne.",
  },
  // --- 2 replied ---
  {
    id: "conv-4",
    prospectName: "Sophie Legrand",
    prospectRole: "VP Sales",
    prospectCompany: "Pennylane",
    score: 79,
    campaign: "Founders France",
    signalSource: "Hashtag #fintechfr",
    status: "replied",
    unread: false,
    lastTs: "2026-05-13T11:00:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-10T08:30:00",
        text: "Bonjour Sophie, je vois que Pennylane accelere sur l'acquisition B2B. Nous aidons des VP Sales comme vous a generer des rendez-vous qualifies via LinkedIn. Ouvert a un echange ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-13T11:00:00",
        text: "Bonjour, merci. On a deja un outil en place mais je suis curieuse de voir la difference. Revenez vers moi en juin.",
      },
    ],
    draft: null,
    notes: "Relancer debut juin. A deja un outil concurrent.",
  },
  {
    id: "conv-5",
    prospectName: "Marc Renaud",
    prospectRole: "Head of Growth",
    prospectCompany: "Qonto",
    score: 76,
    campaign: "PLG Champions",
    signalSource: "Hashtag #productledgrowth",
    status: "replied",
    unread: false,
    lastTs: "2026-05-12T14:15:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-09T11:00:00",
        text: "Bonjour Marc, votre post sur le PLG m'a interpelle. On travaille avec des equipes growth pour combiner PLG et outbound LinkedIn. Un sujet qui vous interesse ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-12T14:15:00",
        text: "Salut, oui c'est un sujet qu'on explore. Mais la ce n'est pas le bon timing. Peut-etre au Q3.",
      },
    ],
    draft: null,
    notes: "Reporter au Q3. Interet confirme.",
  },
  // --- 2 awaiting_agent ---
  {
    id: "conv-6",
    prospectName: "Antoine Moreau",
    prospectRole: "Fondateur",
    prospectCompany: "Pixelo",
    score: 83,
    campaign: "Fintech Q2 2026",
    signalSource: "Post YC · Series A",
    status: "awaiting_agent",
    unread: false,
    lastTs: "2026-05-14T10:00:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-12T15:00:00",
        text: "Bonjour Antoine, j'ai remarque que Pixelo vient de lever en Series A. Felicitations ! Nous accompagnons des startups post-levee sur leur strategie d'acquisition. Interesse ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-14T10:00:00",
        text: "Merci ! Oui on monte l'equipe commerciale. Qu'est-ce que vous proposez exactement ?",
      },
    ],
    draft: null,
    notes: "Post-levee, en phase de structuration sales.",
  },
  {
    id: "conv-7",
    prospectName: "Laure Fabre",
    prospectRole: "Directrice Commerciale",
    prospectCompany: "Nimble",
    score: 71,
    campaign: "RevOps DACH",
    signalSource: "Post RevOps",
    status: "awaiting_agent",
    unread: false,
    lastTs: "2026-05-13T16:40:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-11T13:00:00",
        text: "Bonjour Laure, votre reflexion sur le RevOps en Europe m'a beaucoup interesse. On aide des equipes commerciales a structurer leur prospection LinkedIn. Ca pourrait vous etre utile ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-13T16:40:00",
        text: "Bonjour, oui potentiellement. On a un process assez manuel aujourd'hui. Vous avez des references dans le secteur ?",
      },
    ],
    draft: null,
    notes: "Demande des references clients. Preparer case study.",
  },
  // --- 1 meeting_booked ---
  {
    id: "conv-8",
    prospectName: "Nicolas Bernard",
    prospectRole: "CEO",
    prospectCompany: "Loop",
    score: 95,
    campaign: "SaaS B2B Founders",
    signalSource: "Compte Mehdi Sebti",
    status: "meeting_booked",
    unread: false,
    lastTs: "2026-05-14T12:00:00",
    messages: [
      {
        from: "agent",
        time: "2026-05-08T09:30:00",
        text: "Bonjour Nicolas, j'ai vu que Loop se positionne sur le marche B2B SaaS. On aide des CEO a generer des meetings qualifies via LinkedIn de maniere automatisee. Ca vous dit d'en discuter ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-09T10:00:00",
        text: "Bonjour, oui ca m'interesse. On galere un peu sur l'outbound en ce moment.",
      },
      {
        from: "agent",
        time: "2026-05-09T10:30:00",
        text: "Je comprends. On voit ca souvent chez les fondateurs B2B. Je vous propose un call de 20 min pour vous montrer comment on peut vous aider. Dispo cette semaine ?",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-10T08:00:00",
        text: "Jeudi 14h ca marche pour moi.",
      },
      {
        from: "agent",
        time: "2026-05-10T08:15:00",
        text: "Parfait, c'est note. Je vous envoie l'invite. A jeudi Nicolas !",
        byAgent: true,
      },
      {
        from: "them",
        time: "2026-05-14T12:00:00",
        text: "Le call etait top. On en reparle en interne et je reviens vers vous la semaine prochaine.",
      },
    ],
    draft: null,
    notes: "Demo faite. Tres interesse. Attendre retour interne.",
  },
];

// ---------------------------------------------------------------------------
// Prospects (64)
// ---------------------------------------------------------------------------

const FIRST_NAMES = [
  "Julien", "Claire", "Thomas", "Sophie", "Marc", "Antoine", "Laure",
  "Nicolas", "Camille", "Hugo", "Marine", "Alexandre", "Lea", "Pierre",
  "Manon", "Lucas", "Emma", "Louis", "Chloe", "Paul", "Alice", "Victor",
  "Sarah", "Romain", "Julie", "Maxime", "Charlotte", "Theo", "Ines",
  "Adrien", "Margaux", "Florian", "Elise", "Guillaume", "Pauline",
  "Bastien", "Anais", "Quentin", "Laura", "Mathieu", "Helene", "Damien",
  "Oceane", "Arnaud", "Justine", "Kevin", "Eva", "Sebastien", "Noemie",
  "Thibault", "Amandine", "Cedric", "Melissa", "Raphael", "Clara",
  "Benoit", "Aurore", "Franck", "Diane", "Olivier", "Lucie", "Jeremy",
  "Emilie", "David",
];

const LAST_NAMES = [
  "Marchand", "Dumont", "Petit", "Legrand", "Renaud", "Moreau", "Fabre",
  "Bernard", "Leroy", "Dubois", "Laurent", "Martin", "Fournier", "Morel",
  "Girard", "Roux", "Vincent", "Blanc", "Garnier", "Chevalier", "Clement",
  "Perrin", "Bonnet", "Masson", "Robin", "Lambert", "Rousseau", "Gauthier",
  "Simon", "Henry", "Lemoine", "Philippe", "Bertrand", "Carpentier",
  "Nguyen", "Collet", "Brunet", "Rey", "Picard", "Guerin", "Andre",
  "Mercier", "Dupont", "Richard", "Aubert", "David", "Brun", "Leroux",
  "Lacroix", "Caron", "Maillard", "Pelletier", "Barbier", "Dufour",
  "Michaud", "Vidal", "Delorme", "Prevost", "Boucher", "Seguin", "Noel",
  "Moulin", "Pichon", "Charpentier",
];

const ROLES = [
  "CEO", "Fondateur", "CTO", "VP Sales", "Head of Growth",
  "Fondatrice", "Directeur Commercial", "COO", "VP Marketing",
  "Head of Product", "CFO", "Directrice Commerciale",
];

const COMPANIES = [
  "Vendora", "Stackly", "Pixelo", "Forge", "Nimble", "Loop",
  "Pennylane", "Spendesk", "Qonto", "Finteka", "Datafly", "Propulse",
  "Cloudex", "Wavepoint", "Trackr", "Settly", "Boostr", "Edgify",
  "Synqo", "Nuvola", "Brickflow", "Lumea", "Zestia", "Flowdesk",
  "Captio", "Drivn", "Sparkline", "Vectis", "Payflow", "Orbite",
  "Kreeo", "Elevio",
];

const STAGES: Prospect["stage"][] = [
  "detected", "contacted", "replied", "meeting", "client",
];

const SIGNAL_SOURCES = [
  "Post YC . Series A",
  "Compte Mehdi Sebti",
  "Hashtag #fintechfr",
  "Post 10 traits CTO",
  "Hashtag #productledgrowth",
  "Compte de YC",
  "Post RevOps",
];

const LAST_ACTIONS = [
  "Invitation envoyee",
  "A repondu",
  "RDV pris",
  "Detecte",
  "Message envoye",
];

const CAMPAIGN_NAMES = CAMPAIGNS.map((c) => c.name);

function seededRand(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rand = seededRand(42);

function pick<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

function randInt(min: number, max: number): number {
  return Math.floor(rand() * (max - min + 1)) + min;
}

export const PROSPECTS: Prospect[] = Array.from({ length: 64 }, (_, i) => {
  const stage = STAGES[i % STAGES.length];
  const dayOffset = randInt(0, 30);
  const month = dayOffset < 15 ? "05" : "04";
  const day = dayOffset < 15 ? String(15 - dayOffset).padStart(2, "0") : String(30 - (dayOffset - 15)).padStart(2, "0");
  return {
    id: `p-${i + 1}`,
    name: `${FIRST_NAMES[i]} ${LAST_NAMES[i]}`,
    role: pick(ROLES),
    company: pick(COMPANIES),
    score: randInt(60, 99),
    stage,
    campaign: pick(CAMPAIGN_NAMES),
    signalSource: pick(SIGNAL_SOURCES),
    lastAction: pick(LAST_ACTIONS),
    lastActionDate: `2026-${month}-${day}`,
    avatarIdx: i % 20,
  };
});

// ---------------------------------------------------------------------------
// Approvals (8 messages in queue)
// ---------------------------------------------------------------------------

export const APPROVALS: {
  id: string;
  prospectName: string;
  prospectRole: string;
  prospectCompany: string;
  campaign: string;
  draft: string;
  score: number;
}[] = [
  {
    id: "appr-1",
    prospectName: "Caroline Leroy",
    prospectRole: "CEO",
    prospectCompany: "Finteka",
    campaign: "Fintech Q2 2026",
    draft:
      "Bonjour Caroline, j'ai remarque la croissance de Finteka dans le secteur fintech. Nous aidons des CEO comme vous a generer des rendez-vous qualifies via LinkedIn. Seriez-vous ouverte a un echange de 15 minutes ?",
    score: 87,
  },
  {
    id: "appr-2",
    prospectName: "Remi Dubois",
    prospectRole: "CTO",
    prospectCompany: "Datafly",
    campaign: "AI Hiring",
    draft:
      "Bonjour Remi, votre article sur l'architecture microservices m'a interpelle. On accompagne des CTO dans l'automatisation de leur prospection technique. Un sujet pour Datafly ?",
    score: 82,
  },
  {
    id: "appr-3",
    prospectName: "Isabelle Martin",
    prospectRole: "VP Sales",
    prospectCompany: "Propulse",
    campaign: "SaaS B2B Founders",
    draft:
      "Bonjour Isabelle, je vois que Propulse accelere sur le marche B2B. On aide des equipes sales a structurer leur outbound LinkedIn. Ca pourrait vous interesser ?",
    score: 78,
  },
  {
    id: "appr-4",
    prospectName: "Vincent Laurent",
    prospectRole: "Fondateur",
    prospectCompany: "Cloudex",
    campaign: "Founders France",
    draft:
      "Bonjour Vincent, felicitations pour le lancement de Cloudex. On travaille avec des fondateurs comme vous pour accelerer la generation de leads qualifies. Dispo pour un call rapide ?",
    score: 91,
  },
  {
    id: "appr-5",
    prospectName: "Nathalie Fournier",
    prospectRole: "Head of Growth",
    prospectCompany: "Wavepoint",
    campaign: "PLG Champions",
    draft:
      "Bonjour Nathalie, votre approche PLG chez Wavepoint est inspirante. On combine signaux LinkedIn et automatisation pour booster l'acquisition. Un echange vous tenterait ?",
    score: 74,
  },
  {
    id: "appr-6",
    prospectName: "Philippe Morel",
    prospectRole: "Directeur Commercial",
    prospectCompany: "Trackr",
    campaign: "RevOps DACH",
    draft:
      "Bonjour Philippe, j'ai vu que Trackr se developpe en DACH. On aide les equipes commerciales a automatiser leur prospection dans cette region. Interesse par un echange ?",
    score: 69,
  },
  {
    id: "appr-7",
    prospectName: "Amelie Girard",
    prospectRole: "Fondatrice",
    prospectCompany: "Settly",
    campaign: "Founders France",
    draft:
      "Bonjour Amelie, j'ai decouvert Settly via un post sur les startups en croissance. On accompagne des fondatrices sur l'acquisition B2B LinkedIn. Un cafe virtuel ?",
    score: 85,
  },
  {
    id: "appr-8",
    prospectName: "Etienne Roux",
    prospectRole: "COO",
    prospectCompany: "Boostr",
    campaign: "SaaS B2B Founders",
    draft:
      "Bonjour Etienne, Boostr semble en pleine acceleration. On aide les COO a structurer la generation de leads qualifies. Voulez-vous qu'on en discute ?",
    score: 80,
  },
];

// ---------------------------------------------------------------------------
// Watchlist
// ---------------------------------------------------------------------------

export const WATCHLIST_ACTIVE: WatchlistItem[] = [
  {
    id: "w-1",
    type: "compte",
    label: "Posts de Y Combinator",
    leadsDetected: 247,
    status: "active",
  },
  {
    id: "w-2",
    type: "hashtag",
    label: "Hashtag #fintechfr",
    leadsDetected: 156,
    status: "active",
  },
  {
    id: "w-3",
    type: "url",
    label: "Post 'How we evaluate seed founders'",
    leadsDetected: 89,
    status: "active",
  },
];

export const WATCHLIST_SUGGESTIONS: WatchlistItem[] = [
  {
    id: "ws-1",
    type: "hashtag",
    label: "Hashtag #revops",
    leadsDetected: 0,
    status: "suggestion",
  },
  {
    id: "ws-2",
    type: "compte",
    label: "Compte Lenny Rachitsky",
    leadsDetected: 0,
    status: "suggestion",
  },
  {
    id: "ws-3",
    type: "url",
    label: "Post 'The future of B2B sales'",
    leadsDetected: 0,
    status: "suggestion",
  },
  {
    id: "ws-4",
    type: "hashtag",
    label: "Hashtag #saasgrowth",
    leadsDetected: 0,
    status: "suggestion",
  },
];

// ---------------------------------------------------------------------------
// Agent Journal
// ---------------------------------------------------------------------------

export const AGENT_JOURNAL: AgentJournalEntry[] = [
  {
    id: "j-1",
    text: "12 nouveaux leads detectes via le signal Posts de Y Combinator. 3 correspondent a l'ICP Fintech Q2.",
    time: "2026-05-15T08:00:00",
    type: "detection",
  },
  {
    id: "j-2",
    text: "Campagne Founders France : taux d'acceptation passe a 42%. Performance au-dessus de la moyenne.",
    time: "2026-05-15T07:30:00",
    type: "performance",
  },
  {
    id: "j-3",
    text: "8 messages en attente d'approbation. 3 prospects chauds necessitent une reponse rapide.",
    time: "2026-05-15T07:00:00",
    type: "action",
  },
  {
    id: "j-4",
    text: "Julien Marchand (Vendora) a repondu positivement. Score passe a 92. Draft de reponse prepare.",
    time: "2026-05-15T09:15:00",
    type: "update",
  },
  {
    id: "j-5",
    text: "Signal Hashtag #fintechfr : 7 nouvelles interactions detectees. 2 profils correspondent a l'ICP.",
    time: "2026-05-14T18:00:00",
    type: "detection",
  },
  {
    id: "j-6",
    text: "Campagne AI Hiring en pause depuis 45 jours. Taux d'acceptation a 28%. Recommandation : ajuster l'ICP ou relancer avec un nouveau signal.",
    time: "2026-05-14T12:00:00",
    type: "recommendation",
  },
];

// ---------------------------------------------------------------------------
// Chat Conversations
// ---------------------------------------------------------------------------

export const CHAT_CONVERSATIONS: ChatConversation[] = [
  {
    id: "chat-1",
    title: "Cherche 25 leads fintech",
    section: "Recherche",
    date: "2026-05-15",
    messages: [
      {
        role: "user",
        type: "text",
        text: "Trouve-moi 25 leads fintech en France qui ont leve en Series A dans les 6 derniers mois.",
      },
      {
        role: "agent",
        type: "text",
        text: "J'ai identifie 28 leads correspondant a vos criteres. Voici les 10 premiers tries par score de pertinence.",
      },
      {
        role: "agent",
        type: "leads_table",
        text: "Resultats de recherche",
        data: {
          headers: ["Nom", "Role", "Entreprise", "Score"],
          rows: [
            ["Julien Marchand", "CEO", "Vendora", 92],
            ["Caroline Leroy", "CEO", "Finteka", 87],
            ["Antoine Moreau", "Fondateur", "Pixelo", 83],
          ],
        },
      },
    ],
  },
  {
    id: "chat-2",
    title: "Analyse campagne Q2",
    section: "Analyse",
    date: "2026-05-14",
    messages: [
      {
        role: "user",
        type: "text",
        text: "Donne-moi une analyse de la campagne Fintech Q2 2026.",
      },
      {
        role: "agent",
        type: "text",
        text: "Voici l'analyse de la campagne Fintech Q2 2026 lancee il y a 12 jours.",
      },
      {
        role: "agent",
        type: "campaign_card",
        text: "Fintech Q2 2026",
        data: {
          detected: 89,
          contacted: 47,
          accepted: 18,
          meetings: 3,
          acceptanceRate: 38,
        },
      },
      {
        role: "agent",
        type: "text",
        text: "Le taux d'acceptation de 38% est au-dessus de la moyenne de vos campagnes (31%). Les meilleurs resultats viennent du signal Posts de Y Combinator. Je recommande d'augmenter le budget de cette campagne.",
      },
    ],
  },
  {
    id: "chat-3",
    title: "Redige message pour CTO",
    section: "Redaction",
    date: "2026-05-13",
    messages: [
      {
        role: "user",
        type: "text",
        text: "Redige un message d'approche pour Thomas Petit, CTO de Forge.",
      },
      {
        role: "agent",
        type: "message_preview",
        text: "Proposition de message",
        data: {
          to: "Thomas Petit",
          message:
            "Bonjour Thomas, j'ai lu votre article sur les criteres de recrutement tech. Chez BeReach, nous aidons les equipes tech a identifier des profils via des signaux LinkedIn. Ca vous parle ?",
        },
      },
    ],
  },
  {
    id: "chat-4",
    title: "Performance des signaux",
    section: "Analyse",
    date: "2026-05-12",
    messages: [
      {
        role: "user",
        type: "text",
        text: "Quels sont mes signaux les plus performants ?",
      },
      {
        role: "agent",
        type: "chart",
        text: "Performance des signaux",
        data: {
          labels: [
            "Posts de Y Combinator",
            "Post seed founders",
            "Hashtag #fintechfr",
          ],
          values: [64, 58, 41],
          metric: "Taux d'acceptation (%)",
        },
      },
      {
        role: "agent",
        type: "text",
        text: "Le signal Posts de Y Combinator est de loin le plus performant avec 64% de taux d'acceptation et 247 leads detectes. Je recommande de creer de nouvelles campagnes basees sur ce type de signal.",
      },
    ],
  },
  {
    id: "chat-5",
    title: "Suggestions ICP logistique",
    section: "Strategie",
    date: "2026-05-11",
    messages: [
      {
        role: "user",
        type: "text",
        text: "La campagne Logistics Q1 a un taux de 20%. Qu'est-ce qu'on peut ameliorer ?",
      },
      {
        role: "agent",
        type: "text",
        text: "La campagne Logistics Q1 a effectivement sous-performe. Voici mon analyse et mes recommandations.",
      },
      {
        role: "agent",
        type: "text",
        text: "Problemes identifies : 1) L'ICP etait trop large (pre-seed a Series A). 2) Le signal Compte de YC n'est pas optimal pour le secteur logistique. 3) Le message d'approche manquait de personnalisation sectorielle. Recommandations : restreindre l'ICP aux Series A uniquement, utiliser un signal lie aux publications logistique, et adapter le copywriting avec des references sectorielles.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Signal Suggestions
// ---------------------------------------------------------------------------

export const SIGNAL_SUGGESTIONS: {
  id: string;
  kind: string;
  title: string;
  meta: string;
  match: number;
}[] = [
  {
    id: "ss-1",
    kind: "compte",
    title: "Compte Lenny Rachitsky",
    meta: "Newsletter et posts sur le growth B2B, forte audience fondateurs SaaS",
    match: 89,
  },
  {
    id: "ss-2",
    kind: "hashtag",
    title: "Hashtag #revops",
    meta: "Communaute active de VP Sales et RevOps, 12k posts par mois",
    match: 76,
  },
  {
    id: "ss-3",
    kind: "url",
    title: "Post 'Building in public : our Series A journey'",
    meta: "Article viral avec 2.4k reactions, audience fondateurs early-stage",
    match: 82,
  },
  {
    id: "ss-4",
    kind: "hashtag",
    title: "Hashtag #saasgrowth",
    meta: "Discussions growth et acquisition, profils Head of Growth et CMO",
    match: 71,
  },
];

// ---------------------------------------------------------------------------
// Hot Leads
// ---------------------------------------------------------------------------

export const HOT_LEADS: {
  id: string;
  name: string;
  role: string;
  company: string;
  score: number;
  signal: string;
  campaign: string;
}[] = [
  {
    id: "hl-1",
    name: "Nicolas Bernard",
    role: "CEO",
    company: "Loop",
    score: 95,
    signal: "Compte Mehdi Sebti",
    campaign: "SaaS B2B Founders",
  },
  {
    id: "hl-2",
    name: "Julien Marchand",
    role: "CEO",
    company: "Vendora",
    score: 92,
    signal: "Post YC . Series A",
    campaign: "Fintech Q2 2026",
  },
  {
    id: "hl-3",
    name: "Claire Dumont",
    role: "Fondatrice",
    company: "Stackly",
    score: 88,
    signal: "Compte Mehdi Sebti",
    campaign: "SaaS B2B Founders",
  },
  {
    id: "hl-4",
    name: "Thomas Petit",
    role: "CTO",
    company: "Forge",
    score: 85,
    signal: "Post 10 traits CTO",
    campaign: "AI Hiring",
  },
  {
    id: "hl-5",
    name: "Vincent Laurent",
    role: "Fondateur",
    company: "Cloudex",
    score: 84,
    signal: "Hashtag #fintechfr",
    campaign: "Founders France",
  },
];
