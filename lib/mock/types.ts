export interface Prospect {
  id: string;
  name: string;
  role: string;
  company: string;
  score: number;
  stage: "detected" | "contacted" | "replied" | "meeting" | "client";
  campaign: string;
  signalSource: string;
  lastAction: string;
  lastActionDate: string;
  avatarIdx: number;
}

export interface Message {
  from: "agent" | "them" | "user";
  time: string;
  text: string;
  byAgent?: boolean;
}

export interface Conversation {
  id: string;
  prospectName: string;
  prospectRole: string;
  prospectCompany: string;
  score: number;
  campaign: string;
  signalSource: string;
  status: "hot" | "replied" | "awaiting_agent" | "meeting_booked" | "archived";
  unread: boolean;
  lastTs: string;
  messages: Message[];
  draft: string | null;
  notes: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "ended" | "draft";
  mode: "signals" | "salesnav" | "import";
  signal: string;
  icp: string;
  detected: number;
  contacted: number;
  accepted: number;
  meetings: number;
  target: number;
  acceptanceRate: number;
  startedDaysAgo: number;
}

export interface Signal {
  id: string;
  name: string;
  type: string;
  leadsDetected: number;
  acceptanceRate: number;
  usedIn: number;
  status: string;
  spark: number[];
}

export interface KPI {
  id: string;
  label: string;
  value: number;
  delta: number;
}

export interface WatchlistItem {
  id: string;
  type: string;
  label: string;
  leadsDetected: number;
  status: string;
}

export interface AgentJournalEntry {
  id: string;
  text: string;
  time: string;
  type: string;
}

export interface ChatMessage {
  role: "user" | "agent";
  type: "text" | "leads_table" | "campaign_card" | "message_preview" | "chart";
  text: string;
  data?: any;
}

export interface ChatConversation {
  id: string;
  title: string;
  section: string;
  date: string;
  messages: ChatMessage[];
}
