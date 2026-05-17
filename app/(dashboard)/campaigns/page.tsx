"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, User, Target, Search as SearchIcon, BookOpen, MoreHorizontal, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTEXTS = [
  { id: "whoiam", name: "Qui je suis", icon: User, desc: "Profil pro, offre, preuves sociales", status: "Complete · 8 elements" },
  { id: "icp", name: "ICP", icon: Target, desc: "Client ideal par defaut", status: "Complete · 5 elements" },
  { id: "researcher", name: "Researcher", icon: SearchIcon, desc: "Comment l'agent cherche", status: "A configurer" },
  { id: "playbook", name: "Playbook", icon: BookOpen, desc: "Comment l'agent ecrit", status: "Complete · 12 elements" },
];

const CAMPAIGNS = [
  { id: "k1", name: "Fintech Q2 2026", status: "active" as const, mode: "Signaux" as const, signal: "Posts levee Series A", icp: "CEOs/Fondateurs fintech FR · 10-100 employes", detected: 89, contacted: 47, accepted: 18, meetings: 3, target: 100, rate: 38, daysAgo: 12, autopilot: "manual" as const },
  { id: "k2", name: "SaaS B2B Founders", status: "active" as const, mode: "Signaux" as const, signal: "Posts YC + hashtag #saas", icp: "Fondateurs SaaS B2B FR/EU, pre-Series B", detected: 287, contacted: 156, accepted: 49, meetings: 5, target: 200, rate: 31, daysAgo: 28, autopilot: "auto" as const },
  { id: "k3", name: "Founders France", status: "active" as const, mode: "Signaux" as const, signal: "Comptes investisseurs fintech FR", icp: "Fondateurs early-stage en France", detected: 412, contacted: 213, accepted: 89, meetings: 11, target: 300, rate: 42, daysAgo: 35, autopilot: "manual" as const },
  { id: "k4", name: "RevOps DACH", status: "active" as const, mode: "Sales Nav" as const, signal: "Hashtag #revops + influenceurs", icp: "Head of RevOps SaaS, DE/CH", detected: 67, contacted: 28, accepted: 9, meetings: 1, target: 80, rate: 32, daysAgo: 7, autopilot: "manual" as const },
  { id: "k5", name: "AI Hiring", status: "paused" as const, mode: "Signaux" as const, signal: "Posts hiring AI/ML", icp: "VP Engineering, Head of AI, US/EU", detected: 134, contacted: 78, accepted: 22, meetings: 2, target: 100, rate: 28, daysAgo: 45, autopilot: "auto" as const },
  { id: "k6", name: "PLG Champions", status: "paused" as const, mode: "Import" as const, signal: "CSV liste PLG", icp: "GTM Leads, Heads of Growth PLG", detected: 198, contacted: 112, accepted: 38, meetings: 4, target: 150, rate: 34, daysAgo: 60, autopilot: "manual" as const },
  { id: "k7", name: "Logistics Q1 (pilote)", status: "ended" as const, mode: "Signaux" as const, signal: "Hashtag #supplychain", icp: "COO logistique FR", detected: 56, contacted: 56, accepted: 11, meetings: 1, target: 56, rate: 20, daysAgo: 90, autopilot: "manual" as const },
];

export default function CampaignsPage() {
  const [filter, setFilter] = useState("all");
  const [campaignStatus, setCampaignStatus] = useState<Record<string, string>>(
    Object.fromEntries(CAMPAIGNS.map((c) => [c.id, c.status]))
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const counts = {
    all: CAMPAIGNS.length,
    active: CAMPAIGNS.filter((c) => campaignStatus[c.id] === "active").length,
    paused: CAMPAIGNS.filter((c) => campaignStatus[c.id] === "paused").length,
    ended: CAMPAIGNS.filter((c) => campaignStatus[c.id] === "ended").length,
    draft: 0,
  };

  const filtered = filter === "all" ? CAMPAIGNS
    : CAMPAIGNS.filter((c) => campaignStatus[c.id] === filter);

  function toggleCampaign(id: string) {
    const current = campaignStatus[id];
    const next = current === "active" ? "paused" : "active";
    setCampaignStatus({ ...campaignStatus, [id]: next });
    setFeedback(next === "paused" ? `Campagne mise en pause` : `Campagne reactivee`);
    setTimeout(() => setFeedback(null), 2000);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--br-black)]">Campagnes</h1>
          <p className="text-[13px] text-[var(--br-text-3)] mt-0.5">
            {counts.active} actives · {counts.paused} en pause · {counts.ended} terminee
          </p>
        </div>
        <button className="flex items-center gap-[6px] h-[34px] px-4 rounded-[8px] bg-[var(--br-blue)] text-white text-[13px] font-medium hover:bg-[var(--br-blue-dark)] transition-colors">
          <Plus size={14} /> Nouvelle campagne
        </button>
      </div>

      {/* Context cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {CONTEXTS.map((ctx) => {
          const Icon = ctx.icon;
          return (
            <button key={ctx.id} className="bg-white rounded-[10px] border border-[var(--br-border)] p-4 text-left hover:border-[var(--br-border-2)] hover:shadow-sm transition-all cursor-pointer group">
              <Icon size={16} className="text-[var(--br-text-3)] mb-2 group-hover:text-[var(--br-black)] transition-colors" />
              <div className="text-[13px] font-semibold text-[var(--br-black)]">{ctx.name}</div>
              <div className="text-[11.5px] text-[var(--br-text-3)] mt-0.5">{ctx.status}</div>
            </button>
          );
        })}
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-1 mb-4">
        {[
          { id: "all", label: "Toutes" },
          { id: "active", label: "Actives" },
          { id: "paused", label: "En pause" },
          { id: "ended", label: "Terminees" },
          { id: "draft", label: "Brouillons" },
        ].map((f) => (
          <button key={f.id} onClick={() => setFilter(f.id)} className={cn(
            "px-[10px] py-[4px] rounded-full text-[11.5px] font-medium transition-colors",
            filter === f.id ? "bg-[var(--br-black)] text-white" : "border border-[var(--br-border)] text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
          )}>
            {f.label} {counts[f.id as keyof typeof counts]}
          </button>
        ))}
      </div>

      {/* Feedback toast */}
      {feedback && (
        <div className="mb-3 text-[12px] text-[var(--br-text-2)] bg-[var(--br-bg-3)] rounded-[8px] px-3 py-2 inline-block">
          {feedback}
        </div>
      )}

      {/* Campaign cards */}
      <div className="space-y-3">
        {filtered.map((c) => {
          const st = campaignStatus[c.id];
          return (
            <div key={c.id} className="bg-white rounded-[12px] border border-[var(--br-border)] p-5 hover:shadow-sm transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "w-[8px] h-[8px] rounded-full",
                    st === "active" ? "bg-[var(--br-green)]" : st === "paused" ? "bg-[var(--br-text-3)]" : "bg-transparent border border-[var(--br-border-2)]"
                  )} />
                  <span className="text-[14px] font-semibold text-[var(--br-black)]">{c.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Toggle */}
                  <button onClick={() => toggleCampaign(c.id)} className={cn(
                    "w-[36px] h-[20px] rounded-full p-[2px] transition-colors",
                    st === "active" ? "bg-[var(--br-blue)]" : "bg-[var(--br-border-2)]"
                  )}>
                    <div className={cn(
                      "w-[16px] h-[16px] rounded-full bg-white transition-transform",
                      st === "active" ? "translate-x-[16px]" : "translate-x-0"
                    )} />
                  </button>
                  <button className="w-[28px] h-[28px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)]">
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-[2px] rounded-full bg-[var(--br-bg-3)] text-[10.5px] text-[var(--br-text-2)] font-medium">
                  <span className={cn("w-[5px] h-[5px] rounded-full", c.mode === "Signaux" ? "bg-[var(--br-blue)]" : c.mode === "Sales Nav" ? "bg-[var(--br-text-3)]" : "bg-[var(--br-text-3)]")} />
                  {c.mode}
                </span>
                <span className="inline-flex items-center px-2 py-[2px] rounded-full bg-[var(--br-bg-3)] text-[10.5px] text-[var(--br-text-2)] font-medium">
                  {c.autopilot === "auto" ? "Autopilote" : "Validation manuelle"}
                </span>
                <span className="text-[11px] text-[var(--br-text-3)] truncate">{c.signal}</span>
              </div>

              {/* ICP */}
              <div className="text-[12px] text-[var(--br-text-3)] mb-3">
                ICP · {c.icp} <span className="text-[var(--br-text-3)]/60 ml-1">Herite</span>
              </div>

              {/* Funnel */}
              <div className="flex items-center gap-6 mb-3">
                {[
                  { label: "Detectes", val: c.detected },
                  { label: "Contactes", val: c.contacted },
                  { label: "Acceptes", val: `${c.accepted} (${c.rate}%)` },
                  { label: "RDV pris", val: c.meetings },
                ].map((kpi) => (
                  <div key={kpi.label}>
                    <div className="text-[10px] text-[var(--br-text-3)] uppercase tracking-[0.04em]">{kpi.label}</div>
                    <div className="text-[15px] font-bold text-[var(--br-black)] font-mono">{kpi.val}</div>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-[3px] rounded-full bg-[var(--br-bg-3)] overflow-hidden">
                  <div className="h-full bg-[var(--br-blue)] rounded-full" style={{ width: `${Math.min(100, (c.contacted / c.target) * 100)}%` }} />
                </div>
                <span className="text-[11px] text-[var(--br-text-3)] font-mono">{c.contacted} / {c.target}</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-[11.5px] text-[var(--br-text-3)]">Lancee il y a {c.daysAgo}j</span>
                <Link href="/prospects" className="flex items-center gap-1 h-[28px] px-3 rounded-[6px] border border-[var(--br-border)] text-[11.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors">
                  Voir les leads <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-[14px] text-[var(--br-black)]">Aucune campagne dans ce filtre.</div>
          <div className="text-[13px] text-[var(--br-text-3)] mt-1">Change de filtre ou cree une nouvelle campagne.</div>
        </div>
      )}
    </div>
  );
}
