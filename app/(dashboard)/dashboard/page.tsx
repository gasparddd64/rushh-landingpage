"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Pencil,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ============ Period config ============ */
const PERIOD_CONFIG: Record<string, { label: string; weight: number; points: number }> = {
  "7j": { label: "7 jours", weight: 0.23, points: 7 },
  "30j": { label: "30 jours", weight: 1.0, points: 30 },
  "3m": { label: "3 mois", weight: 3.05, points: 12 },
  "tout": { label: "Tout", weight: 8.4, points: 12 },
};

const BASE_KPIS = [
  { id: "detected", label: "Leads detectes", value: 1247, delta: 18 },
  { id: "contacted", label: "Contactes", value: 489, delta: 12 },
  { id: "accepted", label: "Acceptes", value: 127, delta: 8 },
  { id: "meetings", label: "RDV pris", value: 18, delta: 20 },
];

const DELTA_MATRIX: Record<string, number[]> = {
  "7j": [12, 9, 5, -4],
  "30j": [18, 12, 8, 20],
  "3m": [22, 16, 11, 27],
  "tout": [34, 29, 21, 38],
};

function fmtInt(n: number) {
  return Math.round(n).toLocaleString("fr-FR").replace(/,/g, " ");
}

function scaleKpis(period: string) {
  const cfg = PERIOD_CONFIG[period];
  const deltas = DELTA_MATRIX[period];
  return BASE_KPIS.map((k, i) => ({
    ...k,
    value: Math.round(k.value * cfg.weight),
    delta: deltas[i],
  }));
}

/* ============ Seeded random for chart ============ */
function seededRand(seed: number) {
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildChartData(period: string) {
  const cfg = PERIOD_CONFIG[period];
  const N = cfg.points;
  const seed = period === "7j" ? 23 : period === "30j" ? 91 : period === "3m" ? 137 : 219;
  const rand = seededRand(seed);
  const detected: number[] = [];
  const contacted: number[] = [];
  const avgD = Math.round((1247 * cfg.weight) / N);
  const avgC = Math.round((489 * cfg.weight) / N);
  for (let i = 0; i < N; i++) {
    const t = i / Math.max(1, N - 1);
    const trend = 0.78 + t * 0.55;
    detected.push(Math.max(2, Math.round(avgD * trend * (0.7 + rand() * 0.6))));
    contacted.push(Math.max(1, Math.round(avgC * trend * (0.7 + rand() * 0.6))));
  }
  return { detected, contacted };
}

/* ============ SVG Chart ============ */
function ActivityChart({ period }: { period: string }) {
  const { detected, contacted } = buildChartData(period);
  const W = 800, H = 220;
  const padL = 36, padR = 16, padT = 14, padB = 20;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const N = detected.length;
  const maxVal = Math.max(...detected, ...contacted) * 1.18;
  const niceMax = Math.ceil(maxVal / 20) * 20;

  const x = (i: number) => padL + (plotW * (i / Math.max(1, N - 1)));
  const y = (v: number) => padT + plotH - (v / niceMax) * plotH;

  function toPath(arr: number[]) {
    if (!arr.length) return "";
    let d = `M ${x(0).toFixed(1)} ${y(arr[0]).toFixed(1)}`;
    for (let i = 1; i < arr.length; i++) {
      const px = x(i).toFixed(1), py = y(arr[i]).toFixed(1);
      const cx1 = ((x(i - 1) + parseFloat(px)) / 2).toFixed(1);
      d += ` C ${cx1} ${y(arr[i - 1]).toFixed(1)}, ${cx1} ${py}, ${px} ${py}`;
    }
    return d;
  }

  const areaPath = toPath(detected) + ` L ${x(N - 1).toFixed(1)} ${(padT + plotH).toFixed(1)} L ${x(0).toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  return (
    <div className="mt-2">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 220 }} preserveAspectRatio="none">
        {/* Y grid */}
        {Array.from({ length: 5 }).map((_, i) => {
          const yv = niceMax * (i / 4);
          const yy = y(yv);
          return (
            <g key={i}>
              <line x1={padL} x2={W - padR} y1={yy} y2={yy} stroke="var(--br-border)" strokeWidth={0.5} />
              <text x={padL - 6} y={yy + 3} textAnchor="end" fill="var(--br-text-3)" fontSize={10} fontFamily="var(--font-mono)">
                {Math.round(yv)}
              </text>
            </g>
          );
        })}
        <path d={areaPath} fill="var(--br-blue)" opacity={0.06} />
        <path d={toPath(contacted)} fill="none" stroke="var(--br-blue-dark)" strokeWidth={1.5} strokeDasharray="4 3" />
        <path d={toPath(detected)} fill="none" stroke="var(--br-blue)" strokeWidth={2} />
        <circle cx={x(N - 1)} cy={y(detected[N - 1])} r={3.5} fill="var(--br-blue)" />
      </svg>
      <div className="flex items-center gap-4 mt-1 px-1">
        <span className="flex items-center gap-[6px] text-[11px] text-[var(--br-text-2)]">
          <span className="w-3 h-[2px] bg-[var(--br-blue)] rounded-full" />Detectes
        </span>
        <span className="flex items-center gap-[6px] text-[11px] text-[var(--br-text-2)]">
          <span className="w-3 h-[2px] bg-[var(--br-blue-dark)] rounded-full" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--br-blue-dark) 0 4px, transparent 4px 7px)" }} />Contactes
        </span>
      </div>
    </div>
  );
}

/* ============ Initials helper ============ */
function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

/* ============ Dashboard ============ */
export default function DashboardPage() {
  const [period, setPeriod] = useState("30j");
  const [autopilot, setAutopilot] = useState<"auto" | "manual">("manual");
  const [confirmMsg, setConfirmMsg] = useState<{ text: string; prev: "auto" | "manual" } | null>(null);
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function changeMode(next: "auto" | "manual") {
    if (autopilot === next) return;
    const prev = autopilot;
    setAutopilot(next);
    const msg =
      next === "auto"
        ? "L'agent reprend les envois automatiques. Les 8 messages en attente seront envoyes dans l'heure."
        : "L'agent attendra ta validation pour chaque message a partir de maintenant.";
    setConfirmMsg({ text: msg, prev });
    if (confirmTimer.current) clearTimeout(confirmTimer.current);
    confirmTimer.current = setTimeout(() => setConfirmMsg(null), next === "auto" ? 5000 : 3000);
  }

  function undoMode() {
    if (!confirmMsg) return;
    setAutopilot(confirmMsg.prev);
    setConfirmMsg(null);
    if (confirmTimer.current) clearTimeout(confirmTimer.current);
  }

  useEffect(() => () => { if (confirmTimer.current) clearTimeout(confirmTimer.current); }, []);

  const kpis = scaleKpis(period);
  const periodLabel = PERIOD_CONFIG[period].label;

  const conversations = [
    { name: "Pierre Dupont", role: "CEO · Pennylane", preview: "Salut, interesse par votre approche. On peut caler 15 min cette semaine ?", time: "Il y a 2h", campaign: "Fintech Q2" },
    { name: "Marie Lefevre", role: "Head of Sales · Spendesk", preview: "Comment ca fonctionne pour des equipes de 20+ ?", time: "Il y a 4h", campaign: "SaaS B2B Founders" },
    { name: "Thomas Martin", role: "Fondateur · Qonto", preview: "Tres pertinent ce que tu m'envoies. Tu serais dispo demain matin ?", time: "Il y a 6h", campaign: "Founders France" },
  ];

  const hotLeads = [
    { name: "Sarah Bernard", role: "Head of Growth · Pennylane", score: 95, campaign: "Fintech Q2" },
    { name: "Antoine Moreau", role: "Fondateur · Helio", score: 92, campaign: "Founders France" },
    { name: "Camille Roux", role: "VP Sales · Trunk", score: 89, campaign: "SaaS B2B Founders" },
    { name: "Mehdi Sebti", role: "Investor · Sebti Capital", score: 87, campaign: "Fintech Q2" },
    { name: "Pauline Lambert", role: "Co-founder · Onyx", score: 84, campaign: "Founders France" },
  ];

  const footStats = { "7j": { inv: 11, fu: 3, newL: 21 }, "30j": { inv: 47, fu: 12, newL: 89 }, "3m": { inv: 142, fu: 38, newL: 271 }, "tout": { inv: 391, fu: 104, newL: 748 } }[period]!;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--br-black)]">Dashboard</h1>
          <p className="text-[13px] text-[var(--br-text-3)] mt-0.5">Jeudi 15 mai 2026</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-[8px] border border-[var(--br-border)] overflow-hidden">
            {Object.entries(PERIOD_CONFIG).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setPeriod(k)}
                className={cn(
                  "px-3 py-[5px] text-[12px] font-medium transition-colors",
                  period === k ? "bg-[var(--br-black)] text-white" : "text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
          <Link
            href="/campaigns"
            className="flex items-center gap-[6px] h-[32px] px-3 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors"
          >
            <Plus size={13} />
            Nouvelle campagne
          </Link>
        </div>
      </div>

      {/* Context strip */}
      <div className="flex items-center justify-between py-[10px] px-4 rounded-[10px] border border-[var(--br-border)] bg-[var(--br-bg-4)]">
        <div className="flex items-center gap-2 text-[12.5px] text-[var(--br-text-2)]">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--br-green)] flex-shrink-0" />
          <Link href="/watchlist" className="hover:text-[var(--br-blue)] transition-colors">3 signaux actifs</Link>
          <span className="text-[var(--br-text-3)]">·</span>
          <Link href="/settings" className="hover:text-[var(--br-blue)] transition-colors">1 compte LinkedIn connecte</Link>
          <span className="text-[var(--br-text-3)]">·</span>
          <span>Agent en fonctionnement</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[var(--br-text-3)] font-medium uppercase tracking-[0.04em]">Mode</span>
          <div className="flex rounded-[6px] border border-[var(--br-border)] overflow-hidden">
            <button
              onClick={() => changeMode("auto")}
              className={cn(
                "px-[10px] py-[3px] text-[11.5px] font-medium transition-colors",
                autopilot === "auto" ? "bg-[var(--br-black)] text-white" : "text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
              )}
              title="L'agent envoie les messages automatiquement."
            >
              Autopilote
            </button>
            <button
              onClick={() => changeMode("manual")}
              className={cn(
                "px-[10px] py-[3px] text-[11.5px] font-medium transition-colors",
                autopilot === "manual" ? "bg-[var(--br-black)] text-white" : "text-[var(--br-text-2)] hover:bg-[var(--br-bg-3)]"
              )}
              title="L'agent prepare les messages, tu valides avant envoi."
            >
              Validation
            </button>
          </div>
        </div>
      </div>

      {/* Confirm banner */}
      {confirmMsg && (
        <div className="flex items-center gap-3 py-[10px] px-4 rounded-[10px] bg-[var(--br-bg-3)]">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--br-green)] flex-shrink-0" />
          <span className="text-[12.5px] text-[var(--br-text-2)] flex-1">{confirmMsg.text}</span>
          <button onClick={undoMode} className="text-[12px] text-[var(--br-blue)] font-medium hover:underline">Annuler</button>
        </div>
      )}

      {/* KPI funnel */}
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.id} className="bg-white rounded-[12px] border border-[var(--br-border)] p-5">
            <div className="text-[12px] text-[var(--br-text-3)] font-medium">{k.label}</div>
            <div className="text-[32px] font-bold text-[var(--br-black)] tracking-[-0.02em] mt-1 font-mono leading-none">
              {fmtInt(k.value)}
            </div>
            <div className="flex items-center gap-1 mt-2 text-[11.5px] text-[var(--br-text-3)]">
              {k.delta >= 0 ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
              <span>{k.delta >= 0 ? "+" : ""}{k.delta}%</span>
              <span>vs periode precedente</span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity chart */}
      <div className="bg-white rounded-[12px] border border-[var(--br-border)] p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[14px] font-semibold text-[var(--br-black)]">Activite sur {periodLabel.toLowerCase()}</div>
            <div className="text-[12px] text-[var(--br-text-3)] mt-0.5">Evolution des leads detectes et contactes</div>
          </div>
        </div>
        <ActivityChart period={period} />
        <div className="flex items-center gap-1 mt-3 text-[11.5px] text-[var(--br-text-3)] flex-wrap">
          <span><span className="font-semibold text-[var(--br-text-2)]">{fmtInt(footStats.inv)}</span> invitations envoyees</span>
          <span>·</span>
          <span><span className="font-semibold text-[var(--br-text-2)]">{fmtInt(footStats.fu)}</span> messages de follow-up</span>
          <span>·</span>
          <span><span className="font-semibold text-[var(--br-text-2)]">{fmtInt(footStats.newL)}</span> nouveaux leads via 3 signaux actifs</span>
          <Link href="/stats" className="ml-auto flex items-center gap-1 text-[var(--br-text-2)] hover:text-[var(--br-blue)] transition-colors font-medium">
            Voir l&apos;historique complet <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Conversations */}
      <div className="bg-white rounded-[12px] border border-[var(--br-border)] p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[14px] font-semibold text-[var(--br-black)]">
              <span className="text-[20px] font-bold mr-1">3</span> conversations attendent ta reponse
            </div>
            <div className="text-[12px] text-[var(--br-text-3)] mt-0.5">Recues dans les dernieres 24h</div>
          </div>
          <Link href="/inbox" className="flex items-center gap-1 text-[12px] text-[var(--br-text-2)] hover:text-[var(--br-blue)] font-medium transition-colors">
            Voir l&apos;inbox <ArrowRight size={12} />
          </Link>
        </div>
        <div className="divide-y divide-[var(--br-border)]">
          {conversations.map((c, i) => (
            <Link href="/inbox" key={i} className="flex items-center gap-3 py-3 hover:bg-[var(--br-bg-4)] -mx-2 px-2 rounded-[8px] transition-colors">
              <div className="w-[40px] h-[40px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[13px] font-semibold flex-shrink-0">
                {getInitials(c.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-[var(--br-black)]">{c.name}</span>
                  <span className="text-[12px] text-[var(--br-text-3)]">{c.role}</span>
                </div>
                <div className="text-[12.5px] text-[var(--br-text-2)] truncate mt-0.5">{c.preview}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[11px] text-[var(--br-text-3)]">{c.time}</div>
                <div className="text-[10.5px] text-[var(--br-text-3)] mt-0.5">{c.campaign}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Messages to approve */}
      <div className="bg-white rounded-[12px] border border-[var(--br-border)] p-5">
        {autopilot === "auto" ? (
          <>
            <div className="text-[14px] font-semibold text-[var(--br-black)]">Messages a approuver</div>
            <div className="text-[12px] text-[var(--br-text-3)] mt-0.5 mb-3">Mode autopilote actif</div>
            <div className="flex items-center gap-2 py-3 px-4 rounded-[8px] bg-[var(--br-bg-4)]">
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--br-green)]" />
              <span className="text-[12.5px] text-[var(--br-text-2)]">Aucun message en attente — l&apos;agent envoie automatiquement les brouillons qu&apos;il genere.</span>
            </div>
          </>
        ) : (
          <>
            <div className="text-[14px] font-semibold text-[var(--br-black)]">
              <span className="text-[20px] font-bold mr-1">8</span> messages a approuver
            </div>
            <div className="text-[12px] text-[var(--br-text-3)] mt-0.5 mb-3">Brouillons generes par l&apos;agent</div>
            <div className="py-3 px-4 rounded-[8px] bg-[var(--br-bg-4)] text-[13px] text-[var(--br-text-2)] italic leading-relaxed">
              &laquo; Hey Sarah, j&apos;ai vu ton commentaire sur le post de YC sur les levees Series A — particulierement ton point sur la dilution. Chez BeReach, on aide les Head of Growth comme toi a automatiser la prospection LinkedIn sans perdre le cote humain... &raquo;
            </div>
            <div className="mt-3 text-[12.5px] text-[var(--br-text-3)]">
              A <span className="font-semibold text-[var(--br-text-2)]">Sarah B., Head of Growth @ Pennylane</span>
              <span className="mx-1">·</span>
              <span>+7 autres en attente</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="/approvals"
                className="flex items-center gap-[6px] h-[32px] px-4 rounded-[8px] bg-[var(--br-blue)] text-white text-[12.5px] font-medium hover:bg-[var(--br-blue-dark)] transition-colors"
              >
                <Pencil size={13} />
                Revoir un par un
              </Link>
              <button className="flex items-center gap-[6px] h-[32px] px-4 rounded-[8px] border border-[var(--br-border)] text-[12.5px] font-medium text-[var(--br-black)] hover:bg-[var(--br-bg-3)] transition-colors">
                <Check size={13} />
                Approuver tout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Hot leads */}
      <div className="bg-white rounded-[12px] border border-[var(--br-border)] p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[14px] font-semibold text-[var(--br-black)]">Leads chauds detectes</div>
            <div className="text-[12px] text-[var(--br-text-3)] mt-0.5">Top 5 prospects avec le meilleur score IA</div>
          </div>
          <Link href="/prospects" className="flex items-center gap-1 text-[12px] text-[var(--br-text-2)] hover:text-[var(--br-blue)] font-medium transition-colors">
            Voir tous les prospects <ArrowRight size={12} />
          </Link>
        </div>
        <div className="divide-y divide-[var(--br-border)]">
          {hotLeads.map((l, i) => (
            <Link href="/prospects" key={i} className="flex items-center gap-3 py-3 hover:bg-[var(--br-bg-4)] -mx-2 px-2 rounded-[8px] transition-colors">
              <div className="w-[36px] h-[36px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[12px] font-semibold flex-shrink-0">
                {getInitials(l.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--br-black)]">{l.name}</div>
                <div className="text-[12px] text-[var(--br-text-3)]">{l.role}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[14px] font-bold text-[var(--br-black)] font-mono w-[28px] text-right">{l.score}</span>
                <div className="w-[60px] h-[3px] rounded-full bg-[var(--br-bg-3)] overflow-hidden">
                  <div className="h-full bg-[var(--br-blue)] rounded-full" style={{ width: `${l.score}%` }} />
                </div>
              </div>
              <span className="text-[10.5px] text-[var(--br-text-3)] bg-[var(--br-bg-3)] px-2 py-0.5 rounded-full flex-shrink-0">
                {l.campaign}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
