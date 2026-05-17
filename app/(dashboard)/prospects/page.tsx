"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, MoreHorizontal, X, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

const STAGES = ["Detecte", "Contacte", "A repondu", "RDV pris", "Client"];
const STAGE_ACTIONS: Record<string, string> = {
  "Detecte": "Detecte", "Contacte": "Invitation envoyee", "A repondu": "A repondu", "RDV pris": "RDV pris", "Client": "Converti"
};

const SIGNALS = ["Post YC · Series A", "Compte Mehdi Sebti", "Hashtag #fintechfr", "Post 10 traits CTO", "Hashtag #productledgrowth", "Compte de YC", "Post RevOps"];
const NAMES_FIRST = ["Pierre", "Marie", "Thomas", "Sophie", "Lucas", "Camille", "Antoine", "Lea", "Hugo", "Chloe", "Mathieu", "Sarah", "Julien", "Emma", "Nicolas", "Manon", "Mehdi", "Ines", "Adrien", "Clara", "Romain", "Laura", "Maxime", "Justine", "Benoit", "Aurelie", "Etienne", "Margaux", "Yacine", "Pauline"];
const NAMES_LAST = ["Dupont", "Lefevre", "Martin", "Bernard", "Petit", "Robert", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Garcia", "Sebti", "Roux", "Vincent", "Fournier", "Girard", "Bonnet", "Lambert", "Dupuis"];
const COMPANIES = ["Vendora", "Stackly", "Pixelo", "Forge", "Nimble", "Loop", "Cantor", "Onyx", "Brava", "Helio", "Norden", "Quill", "Trunk", "Saturn HQ", "Beacon Labs", "Pennylane"];
const ROLES = ["CEO", "Fondateur", "CTO", "VP Sales", "Head of Growth", "Head of Sales", "Sales Director", "COO", "Founder", "Co-founder", "GTM Lead"];
const CAMPAIGNS = ["Fintech Q2 2026", "SaaS B2B Founders", "Founders France", "RevOps DACH", "AI Hiring", "PLG Champions"];

function pick<T>(arr: T[], i: number): T { return arr[i % arr.length]; }

const PROSPECTS = Array.from({ length: 64 }, (_, i) => {
  const stageIdx = i % 5;
  const score = 60 + ((i * 13 + 7) % 40);
  const days = (i * 3 + 1) % 30;
  return {
    id: `p${i + 1}`,
    name: `${pick(NAMES_FIRST, i * 3 + 7)} ${pick(NAMES_LAST, i * 5 + 11)}`,
    role: pick(ROLES, i * 11 + 5),
    company: pick(COMPANIES, i * 7 + 3),
    score,
    stageIdx,
    stage: STAGES[stageIdx],
    campaign: pick(CAMPAIGNS, i + 1),
    signalSource: pick(SIGNALS, i + 2),
    lastAction: STAGE_ACTIONS[STAGES[stageIdx]],
    lastActionDate: days === 0 ? "Aujourd'hui" : `Il y a ${days}j`,
  };
});

const STAGE_COUNTS = STAGES.reduce((acc, s) => {
  acc[s] = PROSPECTS.filter((p) => p.stage === s).length;
  return acc;
}, {} as Record<string, number>);

export default function ProspectsPage() {
  const [stageFilter, setStageFilter] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [panelId, setPanelId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"score" | null>("score");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const filtered = stageFilter === "all" ? PROSPECTS : PROSPECTS.filter((p) => p.stage === stageFilter);
  const sorted = sortBy === "score"
    ? [...filtered].sort((a, b) => sortDir === "desc" ? b.score - a.score : a.score - b.score)
    : filtered;
  const displayed = sorted.slice(0, 50);

  const prospect = panelId ? PROSPECTS.find((p) => p.id === panelId) : null;

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const toggleAll = () => {
    if (selected.size === displayed.length) setSelected(new Set());
    else setSelected(new Set(displayed.map((p) => p.id)));
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--br-black)]">Prospects</h1>
          <p className="text-[13px] text-[var(--br-text-3)] mt-0.5">
            {PROSPECTS.length} prospects · {STAGE_COUNTS["A repondu"] || 0} ont repondu · {STAGE_COUNTS["RDV pris"] || 0} RDV pris cette semaine
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[6px] bg-[var(--br-bg-4)] rounded-[8px] px-3 h-[32px] w-[200px]">
            <Search size={13} className="text-[var(--br-text-3)]" />
            <input placeholder="Rechercher un prospect..." className="flex-1 bg-transparent border-0 outline-none text-[12px] text-[var(--br-black)] placeholder:text-[var(--br-text-3)]" />
          </div>
          <button className="flex items-center gap-[6px] h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors">
            <SlidersHorizontal size={13} /> Filtres
          </button>
          <button className="w-[32px] h-[32px] rounded-[8px] border border-[var(--br-border)] flex items-center justify-center text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)] transition-colors">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Pills */}
      <div className="flex items-center gap-1 mb-4">
        <button onClick={() => setStageFilter("all")} className={cn(
          "px-[10px] py-[4px] rounded-full text-[11.5px] font-medium transition-colors",
          stageFilter === "all" ? "bg-[var(--br-black)] text-white" : "border border-[var(--br-border)] text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
        )}>
          Tous {PROSPECTS.length}
        </button>
        {STAGES.map((s) => (
          <button key={s} onClick={() => setStageFilter(s)} className={cn(
            "px-[10px] py-[4px] rounded-full text-[11.5px] font-medium transition-colors",
            stageFilter === s ? "bg-[var(--br-black)] text-white" : "border border-[var(--br-border)] text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
          )}>
            {s} {STAGE_COUNTS[s]}
          </button>
        ))}
      </div>

      {/* Mass action bar */}
      {selected.size > 0 && (
        <div className="flex items-center justify-between py-2 px-4 mb-2 rounded-[8px] bg-[var(--br-black)] text-white">
          <span className="text-[12.5px] font-medium">{selected.size} prospects selectionnes</span>
          <div className="flex items-center gap-2">
            {["Ajouter a une campagne", "Bon match", "Pas pertinent", "Exporter"].map((a) => (
              <button key={a} className="px-3 py-[4px] text-[11.5px] rounded-[6px] hover:bg-white/10 transition-colors">{a}</button>
            ))}
            <button onClick={() => setSelected(new Set())} className="ml-2"><X size={14} /></button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-[12px] border border-[var(--br-border)] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--br-border)]">
              <th className="w-[40px] px-3 py-3">
                <input type="checkbox" checked={selected.size === displayed.length && displayed.length > 0} onChange={toggleAll} className="accent-[var(--br-blue)]" />
              </th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3">Prospect</th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3 cursor-pointer hover:text-[var(--br-black)]" onClick={() => { setSortBy("score"); setSortDir(sortDir === "desc" ? "asc" : "desc"); }}>
                Score {sortBy === "score" && <ChevronDown size={10} className={cn("inline ml-0.5", sortDir === "asc" && "rotate-180")} />}
              </th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3">Pipeline</th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3">Source signal</th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3">Derniere action</th>
              <th className="text-left text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em] px-3 py-3">Campagne</th>
              <th className="w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((p) => (
              <tr key={p.id} onClick={() => setPanelId(p.id)} className="border-b border-[var(--br-border)] last:border-0 hover:bg-[var(--br-bg-4)] cursor-pointer transition-colors h-[64px]">
                <td className="px-3" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" checked={selected.has(p.id)} onChange={() => toggleSelect(p.id)} className="accent-[var(--br-blue)]" />
                </td>
                <td className="px-3">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[12px] font-semibold flex-shrink-0">
                      {getInitials(p.name)}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[var(--br-black)]">{p.name}</div>
                      <div className="text-[11.5px] text-[var(--br-text-3)]">{p.role} · {p.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold text-[var(--br-black)] font-mono w-[24px]">{p.score}</span>
                    <div className="w-[48px] h-[3px] rounded-full bg-[var(--br-bg-3)] overflow-hidden">
                      <div className="h-full bg-[var(--br-blue)] rounded-full" style={{ width: `${p.score}%` }} />
                    </div>
                  </div>
                </td>
                <td className="px-3">
                  <div className="flex items-center gap-[4px]">
                    {STAGES.map((_, i) => (
                      <div key={i} className="flex items-center gap-[4px]">
                        <div className={cn(
                          "w-[7px] h-[7px] rounded-full border-[1.5px]",
                          i < p.stageIdx ? "bg-[var(--br-blue)] border-[var(--br-blue)]"
                            : i === p.stageIdx ? "bg-[var(--br-blue)] border-[var(--br-blue)] ring-2 ring-[var(--br-blue)]/20"
                            : "border-[var(--br-border-2)] bg-transparent"
                        )} />
                        {i < 4 && <div className="w-[6px] border-t border-dashed border-[var(--br-border-2)]" />}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-3">
                  <span className="text-[12px] text-[var(--br-text-2)] truncate block max-w-[160px]" title={p.signalSource}>{p.signalSource}</span>
                </td>
                <td className="px-3">
                  <div className="text-[12px] text-[var(--br-black)]">{p.lastAction}</div>
                  <div className="text-[11px] text-[var(--br-text-3)]">{p.lastActionDate}</div>
                </td>
                <td className="px-3">
                  <span className="text-[12px] text-[var(--br-text-2)] hover:text-[var(--br-blue)]">{p.campaign}</span>
                </td>
                <td className="px-3" onClick={(e) => e.stopPropagation()}>
                  <button className="w-[28px] h-[28px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)]">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-[12px] text-[var(--br-text-3)]">
        <span>{PROSPECTS.length} prospects au total · Page 1 sur {Math.ceil(filtered.length / 50)}</span>
        <div className="flex items-center gap-2">
          <span>Afficher 50 par page</span>
        </div>
      </div>

      {/* Side panel */}
      {prospect && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setPanelId(null)}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative w-[580px] max-w-full bg-white shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-[var(--br-border)]">
              <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[16px] font-semibold">
                  {getInitials(prospect.name)}
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[var(--br-black)]">{prospect.name}</div>
                  <div className="text-[13px] text-[var(--br-text-3)]">{prospect.role} · {prospect.company}</div>
                </div>
              </div>
              <button onClick={() => setPanelId(null)} className="text-[var(--br-text-3)] hover:text-[var(--br-black)]"><X size={18} /></button>
            </div>

            <div className="px-6 py-5 space-y-6">
              {/* Score */}
              <div className="flex items-start gap-8">
                <div>
                  <div className="text-[34px] font-bold text-[var(--br-black)] font-mono leading-none">{prospect.score}</div>
                  <div className="text-[11px] text-[var(--br-text-3)] mt-1">Score / 100</div>
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-[var(--br-black)] mb-2">{prospect.stage}</div>
                  <div className="flex items-center gap-[6px]">
                    {STAGES.map((s, i) => (
                      <div key={i} className="flex items-center gap-[6px]">
                        <div className={cn(
                          "w-[10px] h-[10px] rounded-full border-2",
                          i < prospect.stageIdx ? "bg-[var(--br-blue)] border-[var(--br-blue)]"
                            : i === prospect.stageIdx ? "bg-[var(--br-blue)] border-[var(--br-blue)] ring-2 ring-[var(--br-blue)]/20"
                            : "border-[var(--br-border-2)] bg-transparent"
                        )} />
                        {i < 4 && <div className="w-[12px] border-t border-dashed border-[var(--br-border-2)]" />}
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] text-[var(--br-text-3)] mt-2">Detecte il y a {(prospect.id.charCodeAt(1) * 3) % 30 + 1}j · Pipeline avance normalement</div>
                </div>
              </div>

              {/* Signal source */}
              <div className="bg-[var(--br-bg-4)] rounded-[10px] p-4">
                <div className="text-[13px] text-[var(--br-black)] font-medium">Detecte via : {prospect.signalSource}</div>
                <div className="text-[11.5px] text-[var(--br-text-3)] mt-1">A like et commente · Score d&apos;interet {prospect.score}%</div>
                <button className="text-[12px] text-[var(--br-blue)] mt-2 hover:underline font-medium">Voir le post LinkedIn →</button>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-[13px] font-semibold text-[var(--br-black)] mb-3">Historique</h3>
                <div className="space-y-4 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-[var(--br-border)]">
                  {[
                    { action: prospect.lastAction, date: "8 mai 2026 · 14h32", msg: prospect.stageIdx >= 2 ? "Salut, interesse par votre approche. On peut caler 15 min ?" : null, campaign: prospect.campaign, mode: "Envoye par l'agent en autopilote" },
                    { action: "Invitation envoyee", date: "5 mai 2026 · 09h15", msg: "Hey, j'ai vu ton activite sur le sujet — ca m'a interpelle.", campaign: prospect.campaign, mode: "Envoye par l'agent en autopilote" },
                    { action: "Detecte", date: "3 mai 2026 · 22h00", msg: null, campaign: prospect.campaign, mode: "Detecte automatiquement" },
                  ].map((entry, i) => (
                    <div key={i} className="pl-6 relative">
                      <div className={cn("absolute left-[2px] top-1 w-[7px] h-[7px] rounded-full border-2", i === 0 ? "bg-[var(--br-blue)] border-[var(--br-blue)]" : "bg-white border-[var(--br-border-2)]")} />
                      <div className="text-[13px] font-semibold text-[var(--br-black)]">{entry.action}</div>
                      <div className="text-[11px] text-[var(--br-text-3)] mt-0.5">{entry.date}</div>
                      {entry.msg && (
                        <div className="mt-2 p-3 rounded-[8px] bg-[var(--br-bg-4)] text-[12.5px] text-[var(--br-text-2)] leading-relaxed">{entry.msg}</div>
                      )}
                      <div className="text-[11px] text-[var(--br-text-3)] mt-1.5">Campagne : <span className="text-[var(--br-text-2)]">{entry.campaign}</span></div>
                      <div className="text-[10.5px] text-[var(--br-text-3)] mt-0.5 italic">{entry.mode}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signaux croises */}
              <details className="group">
                <summary className="text-[13px] font-semibold text-[var(--br-text-2)] cursor-pointer list-none flex items-center justify-between">
                  Signaux croises (3) <ChevronDown size={12} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 space-y-2 text-[12px] text-[var(--br-text-2)]">
                  <div>Aussi like le post de Mehdi Sebti · Il y a 5j</div>
                  <div>Suit YCombinator depuis 2024</div>
                  <div>A commente un post sur le RevOps · Il y a 12j</div>
                </div>
              </details>

              {/* Notes */}
              <details className="group">
                <summary className="text-[13px] font-semibold text-[var(--br-text-2)] cursor-pointer list-none flex items-center justify-between">
                  Notes personnelles <ChevronDown size={12} className="group-open:rotate-180 transition-transform" />
                </summary>
                <textarea className="mt-2 w-full h-[80px] rounded-[8px] border border-[var(--br-border)] px-3 py-2 text-[12.5px] text-[var(--br-black)] resize-none outline-none focus:border-[var(--br-blue)]" placeholder="Ajouter des notes..." />
              </details>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[var(--br-border)] px-6 py-3 flex items-center gap-2">
              <button className="h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors">
                Marquer comme bon match
              </button>
              <button className="h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)] transition-colors">
                Pas pertinent
              </button>
              <button className="ml-auto w-[32px] h-[32px] rounded-[8px] border border-[var(--br-border)] flex items-center justify-center text-[var(--br-text-3)] hover:bg-[var(--br-bg-3)]">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
