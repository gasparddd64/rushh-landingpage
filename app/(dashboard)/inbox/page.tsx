"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, ExternalLink, Archive, MoreHorizontal, RefreshCw, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

const CONVERSATIONS = [
  { id: "c1", name: "Pierre Dupont", role: "CEO", company: "Pennylane", score: 94, campaign: "Fintech Q2", signal: "A like le post de YC", status: "hot", unread: true, lastTs: "2h", preview: "Salut, interesse par votre approche. On peut caler 15 min cette semaine ?", stage: 3, stageName: "A repondu" },
  { id: "c2", name: "Marie Lefevre", role: "Head of Sales", company: "Spendesk", score: 88, campaign: "SaaS B2B Founders", signal: "A commente le post de Mehdi", status: "hot", unread: true, lastTs: "4h", preview: "Comment ca fonctionne pour des equipes de 20+ ?", stage: 2, stageName: "A repondu" },
  { id: "c3", name: "Thomas Martin", role: "Fondateur", company: "Qonto", score: 91, campaign: "Founders France", signal: "A like un post sur l'outbound", status: "hot", unread: true, lastTs: "6h", preview: "Tres pertinent. Tu serais dispo demain matin ?", stage: 3, stageName: "A repondu" },
  { id: "c4", name: "Sophie Bernard", role: "CTO", company: "Vendora", score: 76, campaign: "SaaS B2B Founders", signal: "A commente un post hiring tech", status: "replied", unread: false, lastTs: "Hier", preview: "Pas un besoin pour nous en ce moment, mais bon courage.", stage: 2, stageName: "A repondu" },
  { id: "c5", name: "Lucas Petit", role: "VP Sales", company: "Stackly", score: 83, campaign: "Fintech Q2", signal: "A like le post de YC", status: "awaiting", unread: false, lastTs: "2j", preview: "Hey Lucas, ravi de te connecter !", stage: 1, stageName: "Contacte" },
  { id: "c6", name: "Camille Roux", role: "Head of Growth", company: "Loop", score: 79, campaign: "Founders France", signal: "A partage un post PLG", status: "meeting", unread: false, lastTs: "3j", preview: "Cal book, on se voit jeudi !", stage: 3, stageName: "RDV pris" },
  { id: "c7", name: "Antoine Garcia", role: "Founder", company: "Nimble", score: 72, campaign: "SaaS B2B Founders", signal: "Hashtag #productledgrowth", status: "replied", unread: false, lastTs: "4j", preview: "Hello, qu'est-ce que tu veux me vendre exactement ?", stage: 2, stageName: "A repondu" },
  { id: "c8", name: "Lea Simon", role: "GTM Lead", company: "Forge", score: 81, campaign: "Fintech Q2", signal: "A like un post sur le RevOps", status: "awaiting", unread: false, lastTs: "5j", preview: "Hey Lea, ton interet pour le RevOps m'a interpelle.", stage: 1, stageName: "Contacte" },
  { id: "c9", name: "Hugo Dubois", role: "Sales Director", company: "Cantor", score: 77, campaign: "Founders France", signal: "Post YC · Series A", status: "replied", unread: true, lastTs: "1h", preview: "Interessant, tu peux m'en dire plus sur le pricing ?", stage: 2, stageName: "A repondu" },
  { id: "c10", name: "Chloe Moreau", role: "COO", company: "Onyx", score: 85, campaign: "SaaS B2B Founders", signal: "Compte de YC", status: "hot", unread: true, lastTs: "3h", preview: "On cherche exactement ca. Dispo lundi prochain ?", stage: 3, stageName: "A repondu" },
];

const THREAD = [
  { from: "agent" as const, time: "Il y a 3 jours", text: "Hey Pierre,\n\nJ'ai vu que tu as commente le post de Y Combinator sur les Series A — particulierement ton point sur la dilution.\n\nChez BeReach, on aide les fondateurs B2B comme toi a remplir leur pipeline pendant la levee, pour montrer une vraie traction outbound.\n\nT'aurais 15 min cette semaine pour echanger ?", byAgent: true },
  { from: "them" as const, time: "Il y a 2 jours", text: "Salut, je regarde ca. C'est quoi votre taux d'acceptance moyen ?" },
  { from: "agent" as const, time: "Il y a 2 jours", text: "On est entre 60 et 70% d'acceptance en moyenne, vs 10-20% pour du cold outreach classique. La difference vient du fait qu'on contacte des gens qui viennent de manifester un interet (like, commentaire, partage).", byAgent: true },
  { from: "them" as const, time: "Il y a 1 jour", text: "Pas mal. Et comment ca se passe cote anti-ban LinkedIn ?" },
  { from: "agent" as const, time: "Il y a 1 jour", text: "On a 6 couches de protection anti-ban — IP residentielles, rate limiting intelligent, fingerprinting browser, warmup automatique. Zero ban sur des millions d'actions.", byAgent: true },
  { from: "them" as const, time: "Il y a 2h", text: "Salut, interesse par votre approche. On peut caler 15 min cette semaine ?" },
];

const DRAFT = "Hey Pierre, super content que ca te parle ! Je suis dispo mardi 14h ou mercredi 10h, ce qui te va mieux ?";

export default function InboxPage() {
  const [activeId, setActiveId] = useState("c1");
  const [filter, setFilter] = useState("all");
  const [profileOpen, setProfileOpen] = useState(true);
  const [editing, setEditing] = useState(false);
  const [draftText, setDraftText] = useState(DRAFT);

  const activeConv = CONVERSATIONS.find((c) => c.id === activeId) || CONVERSATIONS[0];
  const filters = [
    { id: "all", label: "Tous", count: 12 },
    { id: "reply", label: "A repondre", count: 5 },
    { id: "archived", label: "Archives", count: 0 },
  ];

  const filteredConvs = filter === "reply"
    ? CONVERSATIONS.filter((c) => c.unread)
    : CONVERSATIONS;

  return (
    <div className="flex h-full">
      {/* Column 1 — Conversation list */}
      <div className="w-[28%] min-w-[260px] border-r border-[var(--br-border)] flex flex-col">
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-[16px] font-semibold text-[var(--br-black)]">Inbox</h2>
            <span className="text-[13px] text-[var(--br-text-3)]">· {CONVERSATIONS.length}</span>
          </div>
          <div className="flex items-center gap-[6px] bg-[var(--br-bg-4)] rounded-[8px] px-3 h-[32px] mb-3">
            <Search size={13} className="text-[var(--br-text-3)]" />
            <input placeholder="Rechercher dans les conversations..." className="flex-1 bg-transparent border-0 outline-none text-[12px] text-[var(--br-black)] placeholder:text-[var(--br-text-3)]" />
          </div>
          <div className="flex items-center gap-1">
            {filters.map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)} className={cn(
                "px-[10px] py-[4px] rounded-full text-[11.5px] font-medium transition-colors",
                filter === f.id ? "bg-[var(--br-black)] text-white" : "border border-[var(--br-border)] text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
              )}>
                {f.label} {f.count}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConvs.map((c) => (
            <button key={c.id} onClick={() => setActiveId(c.id)} className={cn(
              "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors border-l-[3px]",
              activeId === c.id ? "bg-[var(--br-blue-soft)] border-l-[var(--br-blue)]" : "border-l-transparent hover:bg-[var(--br-bg-4)]"
            )}>
              {c.unread && <span className="w-[6px] h-[6px] rounded-full bg-[var(--br-blue)] mt-[14px] flex-shrink-0" />}
              <div className="w-[40px] h-[40px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[13px] font-semibold flex-shrink-0">
                {getInitials(c.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--br-black)]">{c.name} <span className="font-normal text-[var(--br-text-3)]">{c.role} · {c.company}</span></div>
                <div className="text-[12px] text-[var(--br-text-2)] truncate mt-0.5">{c.preview}</div>
                <span className="inline-block mt-1 text-[10px] text-[var(--br-text-3)] bg-[var(--br-bg-3)] px-[6px] py-[1px] rounded-full">{c.campaign}</span>
              </div>
              <span className="text-[10.5px] text-[var(--br-text-3)] flex-shrink-0 mt-1">{c.lastTs}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Column 2 — Active conversation */}
      <div className={cn("flex-1 flex flex-col min-w-0", profileOpen ? "" : "")}>
        {/* Header */}
        <div className="flex items-center gap-3 px-4 h-[56px] border-b border-[var(--br-border)] flex-shrink-0">
          <div className="w-[32px] h-[32px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[11px] font-semibold">
            {getInitials(activeConv.name)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-[var(--br-black)]">{activeConv.name}</div>
            <div className="text-[11.5px] text-[var(--br-text-3)]">{activeConv.role} · {activeConv.company}</div>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)] transition-colors" title="Resumer">
              <Sparkles size={14} />
            </button>
            <button className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)] transition-colors" title="LinkedIn">
              <ExternalLink size={14} />
            </button>
            <button className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)] transition-colors" title="Archiver">
              <Archive size={14} />
            </button>
            <button className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)] transition-colors">
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>

        {/* Thread */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {THREAD.map((msg, i) => (
            <div key={i} className={cn("flex", msg.from === "them" ? "justify-start" : "justify-end")}>
              <div className={cn(
                "max-w-[70%] px-4 py-3 rounded-[16px] text-[13px] leading-relaxed whitespace-pre-line",
                msg.from === "them"
                  ? "bg-[var(--br-bg-3)] text-[var(--br-black)]"
                  : "bg-[var(--br-blue)] text-white"
              )}>
                {msg.text}
                <div className={cn(
                  "text-[10px] mt-1.5",
                  msg.from === "them" ? "text-[var(--br-text-3)]" : "text-white/60"
                )}>
                  {msg.time}
                  {msg.byAgent && <span className="ml-2 uppercase tracking-[0.04em]">via agent</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Draft */}
        <div className="border-t border-[var(--br-border)] px-6 py-4 bg-white flex-shrink-0">
          <div className="flex items-center gap-[6px] text-[10px] text-[var(--br-text-3)] uppercase tracking-[0.06em] font-medium mb-2">
            <Sparkles size={11} />
            Brouillon de l&apos;agent
          </div>
          <textarea
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            readOnly={!editing}
            className={cn(
              "w-full min-h-[72px] max-h-[160px] resize-none rounded-[8px] border border-[var(--br-border)] px-3 py-2.5 text-[13px] text-[var(--br-black)] leading-relaxed outline-none transition-colors",
              editing ? "bg-white border-[var(--br-blue)]" : "bg-[var(--br-bg-4)]"
            )}
          />
          <div className="flex items-center gap-2 mt-3">
            <button className="flex items-center gap-[6px] h-[32px] px-4 rounded-[8px] bg-[var(--br-blue)] text-white text-[12.5px] font-medium hover:bg-[var(--br-blue-dark)] transition-colors">
              {editing ? "Envoyer ma version" : "Approuver et envoyer"}
            </button>
            <button onClick={() => setEditing(!editing)} className="h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors">
              {editing ? "Annuler" : "Modifier"}
            </button>
            <button className="h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors flex items-center gap-[6px]">
              <RefreshCw size={12} /> Regenerer
            </button>
            <button className="text-[12px] text-[var(--br-text-3)] hover:text-[var(--br-text-2)] ml-1 transition-colors">
              Ecrire moi-meme
            </button>
          </div>
        </div>
      </div>

      {/* Column 3 — Profile */}
      {profileOpen && (
        <div className="w-[25%] min-w-[240px] border-l border-[var(--br-border)] overflow-y-auto p-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[16px] font-semibold">
                {getInitials(activeConv.name)}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[var(--br-black)]">{activeConv.name}</div>
                <div className="text-[12px] text-[var(--br-text-3)]">{activeConv.role} · {activeConv.company}</div>
              </div>
            </div>
            <button onClick={() => setProfileOpen(false)} className="text-[var(--br-text-3)] hover:text-[var(--br-black)] transition-colors">
              <ChevronLeft size={16} />
            </button>
          </div>

          {/* Score */}
          <div className="bg-[var(--br-bg-4)] rounded-[10px] p-4 mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-[26px] font-bold text-[var(--br-black)] font-mono">{activeConv.score}</span>
              <span className="text-[12px] text-[var(--br-text-3)]">/100</span>
            </div>
            <div className="text-[11px] text-[var(--br-text-3)] mt-0.5">Score IA</div>
            {/* Pipeline dots */}
            <div className="flex items-center gap-[6px] mt-3">
              {["Detecte", "Contacte", "A repondu", "RDV pris", "Client"].map((s, i) => (
                <div key={i} className="flex items-center gap-[6px]">
                  <div className={cn(
                    "w-[8px] h-[8px] rounded-full border-2 transition-colors",
                    i < activeConv.stage ? "bg-[var(--br-blue)] border-[var(--br-blue)]"
                      : i === activeConv.stage ? "bg-[var(--br-blue)] border-[var(--br-blue)] ring-2 ring-[var(--br-blue)]/20"
                      : "border-[var(--br-border-2)] bg-transparent"
                  )} />
                  {i < 4 && <div className="w-[8px] border-t border-dashed border-[var(--br-border-2)]" />}
                </div>
              ))}
            </div>
            <div className="text-[11px] text-[var(--br-text-3)] mt-2">Detecte il y a 12j · Suit le pipeline normalement</div>
          </div>

          {/* Signal source */}
          <div className="mb-4">
            <button className="text-[12px] font-semibold text-[var(--br-black)] mb-2 w-full text-left">Source du signal</button>
            <div className="bg-[var(--br-bg-4)] rounded-[8px] p-3">
              <div className="text-[12.5px] text-[var(--br-black)]">Detecte via : {activeConv.signal}</div>
              <div className="text-[11px] text-[var(--br-text-3)] mt-1">A like et commente · Score d&apos;interet 92%</div>
              <button className="text-[11.5px] text-[var(--br-blue)] mt-2 hover:underline font-medium">Voir le post LinkedIn →</button>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <button className="text-[12px] font-semibold text-[var(--br-text-2)] mb-2 w-full text-left flex items-center justify-between">
              Notes personnelles
              <span className="text-[var(--br-text-3)] text-[10px]">▾</span>
            </button>
          </div>

          {/* History */}
          <div>
            <button className="text-[12px] font-semibold text-[var(--br-text-2)] mb-2 w-full text-left flex items-center justify-between">
              Historique
              <span className="text-[var(--br-text-3)] text-[10px]">▾</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
