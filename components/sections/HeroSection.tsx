"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { Phone, LayoutDashboard, PhoneCall, Users, Calendar, BarChart3, Search, SlidersHorizontal, Clock, TrendingUp, MapPin, Star } from "lucide-react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ── AnimatedGroup ── */
const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimatedGroup({ children, className, variants, style, itemStyle }: {
  children: ReactNode; className?: string;
  variants?: { container?: Variants; item?: Variants };
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={cn(className)} style={style}>
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={itemVariants} style={itemStyle}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

/* ── Dashboard data per view ── */
type ViewKey = "dashboard" | "calls" | "prospects" | "agenda" | "analyses";

const viewMeta: { key: ViewKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { key: "calls", label: "Mes appels", icon: PhoneCall },
  { key: "prospects", label: "Prospects", icon: Users },
  { key: "agenda", label: "Agenda", icon: Calendar },
  { key: "analyses", label: "Analyses", icon: BarChart3 },
];

/* Tableau de bord */
const dashboardCalls = [
  { obj: "Acquéreur 3P Paris 8e", type: "Acquéreur", phone: "06 42 18 55 09" },
  { obj: "Vendeur T4 Lyon 6e", type: "Vendeur", phone: "07 81 34 22 67" },
  { obj: "Locataire Studio Bordeaux", type: "Locataire", phone: "06 93 47 81 15" },
  { obj: "Propriétaire Maison Nantes", type: "Propriétaire", phone: "06 12 58 90 33" },
  { obj: "Acquéreur 2P Marseille 7e", type: "Acquéreur", phone: "07 65 22 41 08" },
  { obj: "Locataire T2 Toulouse", type: "Locataire", phone: "06 78 33 19 52" },
  { obj: "Propriétaire Villa Nice", type: "Propriétaire", phone: "07 44 61 87 20" },
];

const typeBadge: Record<string, { bg: string }> = {
  Acquéreur: { bg: "rgba(0,71,198,0.08)" },
  Vendeur: { bg: "rgba(124,58,237,0.08)" },
  Locataire: { bg: "rgba(16,185,129,0.08)" },
  Propriétaire: { bg: "rgba(245,158,11,0.08)" },
};

/* Mes appels */
const callsData = [
  { name: "Marie Laurent", duration: "3m 12s", status: "answered", summary: "Recherche T3 Paris 16e, budget 800k" },
  { name: "Jean Moreau", duration: "1m 45s", status: "answered", summary: "Vente appartement Lyon, estimation" },
  { name: "Sophie Martin", duration: "0m 22s", status: "missed", summary: "Rappel demandé pour visite" },
  { name: "Pierre Durand", duration: "2m 58s", status: "answered", summary: "Locataire, problème chaudière" },
  { name: "Camille Petit", duration: "4m 05s", status: "answered", summary: "Mandat exclusif villa Cannes" },
  { name: "Lucas Bernard", duration: "0m 08s", status: "voicemail", summary: "Message vocal déposé" },
  { name: "Emma Roux", duration: "2m 30s", status: "answered", summary: "Acquéreur studio Bordeaux" },
];

const statusColors: Record<string, string> = {
  answered: "#10b981",
  missed: "#f59e0b",
  voicemail: "#ef4444",
};

/* Prospects */
const prospectsData = [
  { name: "Marie Laurent", source: "Appel entrant", qual: "Chaud", score: 92 },
  { name: "Thomas Girard", source: "Site web", qual: "Tiède", score: 65 },
  { name: "Sophie Martin", source: "Appel entrant", qual: "Chaud", score: 88 },
  { name: "Lucas Bernard", source: "Recommandation", qual: "Froid", score: 30 },
  { name: "Camille Petit", source: "Appel entrant", qual: "Chaud", score: 95 },
  { name: "Julien Faure", source: "Site web", qual: "Tiède", score: 55 },
  { name: "Emma Roux", source: "Appel entrant", qual: "Tiède", score: 70 },
];

const qualColors: Record<string, { bg: string; color: string }> = {
  Chaud: { bg: "rgba(239,68,68,0.08)", color: "#dc2626" },
  Tiède: { bg: "rgba(245,158,11,0.08)", color: "#d97706" },
  Froid: { bg: "rgba(0,71,198,0.08)", color: "#0047C6" },
};

/* Agenda */
const agendaDays = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
const agendaBlocks = [
  [{ t: "9h", h: 22, label: "Visite T3 Paris 8e", color: "#0047C6" }, { t: "11h30", h: 18, label: "Estimation Apt", color: "#f59e0b" }, { t: "14h", h: 22, label: "RDV Notaire", color: "#8b5cf6" }, { t: "17h", h: 16, label: "Appel prospects", color: "#10b981" }],
  [{ t: "9h30", h: 24, label: "RDV mandat exclu", color: "#10b981" }, { t: "13h", h: 18, label: "Photos pro T4", color: "#f59e0b" }, { t: "16h", h: 20, label: "Visite T2 Lyon", color: "#0047C6" }],
  [{ t: "9h", h: 20, label: "Visite T2 Nantes", color: "#0047C6" }, { t: "11h", h: 16, label: "Appel suivi", color: "#f59e0b" }, { t: "14h", h: 22, label: "Signature compromis", color: "#8b5cf6" }, { t: "17h", h: 16, label: "Prospection tél.", color: "#10b981" }],
  [{ t: "10h", h: 20, label: "Photos villa Nice", color: "#10b981" }, { t: "14h", h: 24, label: "Visite T4 Bord.", color: "#0047C6" }, { t: "16h30", h: 18, label: "Bilan vendeur", color: "#f59e0b" }],
  [{ t: "9h", h: 30, label: "Portes ouvertes", color: "#ef4444" }, { t: "14h", h: 22, label: "Visite maison", color: "#0047C6" }, { t: "17h", h: 16, label: "Débrief équipe", color: "#8b5cf6" }],
];

/* Analyses */
const analysesBarHeights = [40, 65, 50, 80, 60, 90, 55, 75, 45, 85, 70, 95];
const analysesPieData = [
  { label: "Acquéreurs", pct: 42, color: "#0047C6" },
  { label: "Vendeurs", pct: 28, color: "#8b5cf6" },
  { label: "Locataires", pct: 18, color: "#10b981" },
  { label: "Autres", pct: 12, color: "#f59e0b" },
];

/* Stats per view */
const viewStats: Record<ViewKey, { s1: string; l1: string; s2: string; l2: string; s3: string; l3: string; s4: string; l4: string; chart: string; bars: number[] }> = {
  dashboard: { s1: "1 284", l1: "Appels traités", s2: "+11%", l2: "Cette semaine", s3: "2m 34s", l3: "Durée moyenne", s4: "3 312", l4: "Minutes totales", chart: "Appels / semaine", bars: [40, 65, 50, 80, 60, 90, 55, 75, 45, 85, 70, 95] },
  calls: { s1: "847", l1: "Décrochés", s2: "93%", l2: "Taux réponse", s3: "2m 48s", l3: "Durée moyenne", s4: "127", l4: "Manqués", chart: "Appels / jour", bars: [55, 70, 45, 85, 65, 90, 50] },
  prospects: { s1: "342", l1: "Total prospects", s2: "64%", l2: "Chauds", s3: "89", l3: "Nouveaux / mois", s4: "23%", l4: "Taux conversion", chart: "Prospects / mois", bars: [30, 45, 55, 50, 70, 65, 80, 75, 90, 85, 95, 88] },
  agenda: { s1: "48", l1: "RDV cette semaine", s2: "+18%", l2: "vs semaine passée", s3: "6", l3: "Visites planifiées", s4: "3", l4: "Signatures prévues", chart: "RDV / semaine", bars: [35, 50, 40, 60, 55, 70, 45, 65, 50, 80, 60, 75] },
  analyses: { s1: "97%", l1: "Satisfaction", s2: "1.2s", l2: "Temps décrochage", s3: "4.8/5", l3: "Note moyenne", s4: "+34%", l4: "Croissance", chart: "Performance", bars: analysesBarHeights },
};

/* ── VoiceWave ── */
function VoiceWave({ offset }: { offset: number }) {
  const points: string[] = [];
  const w = 200;
  const h = 40;
  const mid = h / 2;
  for (let x = 0; x <= w; x += 1) {
    const t = (x / w) * Math.PI * 4 + offset * 0.3;
    const amp = 12 * Math.sin((x / w) * Math.PI);
    const y = mid + Math.sin(t) * amp;
    points.push(`${x},${y.toFixed(1)}`);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 32 }}>
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))" }}
      />
    </svg>
  );
}

/* ── View Components ── */
function DashboardView() {
  return (
    <>
      <div className="dash-main-header">
        <h3 className="dash-main-title">Mes derniers appels</h3>
        <div className="dash-main-actions">
          <div className="dash-search"><Search size={13} /><span>Rechercher…</span></div>
          <div className="dash-filter"><SlidersHorizontal size={13} /></div>
        </div>
      </div>
      <div className="dash-table">
        <div className="dash-table-head"><span>Objet</span><span>Type</span><span>Téléphone</span></div>
        {dashboardCalls.map((c, i) => (
          <div className="dash-table-row" key={i}>
            <span className="dash-cell-obj">{c.obj}</span>
            <span><span className="dash-badge" style={{ background: typeBadge[c.type].bg, color: "#000" }}>{c.type}</span></span>
            <span className="dash-cell-phone">{c.phone}</span>
          </div>
        ))}
      </div>
      <div className="dash-tabs">
        <span className="dash-tab active">Tout</span>
        <span className="dash-tab">Prospects</span>
        <span className="dash-tab">Clients</span>
      </div>
    </>
  );
}

function CallsView() {
  return (
    <>
      <div className="dash-main-header">
        <h3 className="dash-main-title">Historique des appels</h3>
        <div className="dash-main-actions">
          <div className="dash-search"><Search size={13} /><span>Rechercher…</span></div>
          <div className="dash-filter"><SlidersHorizontal size={13} /></div>
        </div>
      </div>
      {/* Status strip */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {[
          { val: "847", label: "Décrochés", dot: "#10b981" },
          { val: "127", label: "Manqués", dot: "#f59e0b" },
          { val: "34", label: "Vocaux", dot: "#ef4444" },
          { val: "93%", label: "Taux réponse", dot: "#0047C6" },
        ].map((k) => (
          <div key={k.label} style={{ flex: 1, background: "#f4f5f7", borderRadius: 8, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: k.dot, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{k.val}</div>
              <div style={{ fontSize: 9, color: "var(--muted)" }}>{k.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dash-table">
        <div className="dash-table-head"><span>Contact</span><span>Durée</span><span>Résumé</span></div>
        {callsData.map((c, i) => (
          <div className="dash-table-row" key={i}>
            <span className="dash-cell-obj" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: statusColors[c.status], flexShrink: 0 }} />
              {c.name}
            </span>
            <span style={{ fontSize: 12, fontFamily: "var(--font-mono), monospace", color: "#444", display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={11} style={{ opacity: 0.5 }} />{c.duration}
            </span>
            <span style={{ fontSize: 12, color: "#666", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.summary}</span>
          </div>
        ))}
      </div>
      <div className="dash-tabs">
        <span className="dash-tab active">Tous</span>
        <span className="dash-tab">Décrochés</span>
        <span className="dash-tab">Manqués</span>
      </div>
    </>
  );
}

function ProspectsView() {
  return (
    <>
      <div className="dash-main-header">
        <h3 className="dash-main-title">Mes prospects</h3>
        <div className="dash-main-actions">
          <div className="dash-search"><Search size={13} /><span>Rechercher…</span></div>
          <div className="dash-filter"><SlidersHorizontal size={13} /></div>
        </div>
      </div>
      {/* KPI strip */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {[
          { val: "342", label: "Total", bg: "#f4f5f7" },
          { val: "218", label: "Chauds", bg: "rgba(239,68,68,0.06)" },
          { val: "89", label: "Tièdes", bg: "rgba(245,158,11,0.06)" },
          { val: "35", label: "Froids", bg: "rgba(0,71,198,0.06)" },
        ].map((k) => (
          <div key={k.label} style={{ flex: 1, background: k.bg, borderRadius: 8, padding: "6px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{k.val}</div>
            <div style={{ fontSize: 9, color: "var(--muted)" }}>{k.label}</div>
          </div>
        ))}
      </div>
      <div className="dash-table">
        <div className="dash-table-head"><span>Nom</span><span>Source</span><span>Score</span><span>Qualification</span></div>
        {prospectsData.map((p, i) => (
          <div className="dash-table-row" key={i} style={{ gridTemplateColumns: "1.3fr 0.9fr 0.8fr 0.7fr" }}>
            <span className="dash-cell-obj">{p.name}</span>
            <span style={{ fontSize: 12, color: "#666" }}>{p.source}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#eee", overflow: "hidden" }}>
                <div style={{ width: `${p.score}%`, height: "100%", borderRadius: 2, background: qualColors[p.qual].color, transition: "width 0.5s" }} />
              </div>
              <span style={{ fontSize: 10, color: "#999", fontFamily: "var(--font-mono), monospace", minWidth: 24 }}>{p.score}%</span>
            </span>
            <span>
              <span className="dash-badge" style={{ background: qualColors[p.qual].bg, color: qualColors[p.qual].color }}>{p.qual}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="dash-tabs">
        <span className="dash-tab active">Tous</span>
        <span className="dash-tab">Chauds</span>
        <span className="dash-tab">Tièdes</span>
        <span className="dash-tab">Froids</span>
      </div>
    </>
  );
}

function AgendaView() {
  const today = 2; // Mercredi highlighted
  return (
    <>
      <div className="dash-main-header">
        <h3 className="dash-main-title">Mon agenda</h3>
        <div className="dash-main-actions">
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#0047C6", background: "rgba(0,71,198,0.08)", borderRadius: 6, padding: "4px 10px" }}>Semaine 21</span>
            <span style={{ fontSize: 11, color: "var(--muted)" }}>19 – 23 mai</span>
          </div>
        </div>
      </div>
      {/* Summary strip */}
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {[
          { val: "18", label: "RDV", color: "#0047C6" },
          { val: "6", label: "Visites", color: "#10b981" },
          { val: "3", label: "Signatures", color: "#8b5cf6" },
          { val: "2", label: "Estimations", color: "#f59e0b" },
        ].map((k) => (
          <div key={k.label} style={{ flex: 1, borderRadius: 8, padding: "5px 6px", background: `${k.color}08`, borderLeft: `3px solid ${k.color}`, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: k.color }}>{k.val}</div>
            <div style={{ fontSize: 9, color: "var(--muted)" }}>{k.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5, flex: 1, overflow: "hidden" }}>
        {agendaDays.map((day, di) => (
          <div key={day} style={{ display: "flex", flexDirection: "column", gap: 3, background: di === today ? "rgba(0,71,198,0.02)" : "transparent", borderRadius: 8, padding: 3 }}>
            <div style={{ textAlign: "center", paddingBottom: 4, borderBottom: di === today ? "2px solid #0047C6" : "1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: di === today ? "#0047C6" : "var(--muted)" }}>{day}</span>
              <span style={{ fontSize: 9, display: "block", color: di === today ? "#0047C6" : "#bbb" }}>{19 + di}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1, paddingTop: 3 }}>
              {agendaBlocks[di].map((block, bi) => (
                <div key={bi} style={{
                  background: `${block.color}10`, borderLeft: `2px solid ${block.color}`,
                  borderRadius: 5, padding: "4px 5px", minHeight: block.h,
                }}>
                  <span style={{ fontSize: 8, color: block.color, fontWeight: 700, display: "block", opacity: 0.8 }}>{block.t}</span>
                  <span style={{ fontSize: 9, color: "#333", fontWeight: 500, lineHeight: 1.2, display: "block" }}>{block.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AnalysesView() {
  const total = analysesPieData.reduce((s, d) => s + d.pct, 0);
  let cumul = 0;
  const monthLabels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  return (
    <>
      <div className="dash-main-header">
        <h3 className="dash-main-title">Analyses</h3>
        <div className="dash-main-actions">
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#0047C6", background: "rgba(0,71,198,0.08)", borderRadius: 6, padding: "4px 10px" }}>Ce mois</span>
            <span style={{ fontSize: 11, color: "var(--muted)", borderRadius: 6, padding: "4px 10px", background: "#f4f5f7" }}>Trimestre</span>
            <span style={{ fontSize: 11, color: "var(--muted)", borderRadius: 6, padding: "4px 10px", background: "#f4f5f7" }}>Année</span>
          </div>
        </div>
      </div>
      {/* KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 10 }}>
        {[
          { val: "97%", label: "Satisfaction", sub: "+2%", icon: Star, color: "#10b981" },
          { val: "1.2s", label: "Décrochage", sub: "-0.3s", icon: Clock, color: "#0047C6" },
          { val: "4.8/5", label: "Note IA", sub: "+0.2", icon: TrendingUp, color: "#8b5cf6" },
          { val: "+34%", label: "Croissance", sub: "vs mois préc.", icon: TrendingUp, color: "#0047C6" },
        ].map((kpi) => (
          <div key={kpi.label} style={{ background: "#fafbfc", borderRadius: 10, padding: "8px 6px", textAlign: "center" }}>
            <kpi.icon size={12} style={{ color: kpi.color, marginBottom: 2 }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>{kpi.val}</div>
            <div style={{ fontSize: 9, color: "var(--muted)" }}>{kpi.label}</div>
            <div style={{ fontSize: 9, color: kpi.color, fontWeight: 600, marginTop: 1 }}>{kpi.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 10, flex: 1, alignContent: "start" }}>
        {/* Bar chart with labels */}
        <div style={{ background: "#fafbfc", borderRadius: 12, padding: "10px 12px" }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: "var(--muted)", margin: "0 0 8px" }}>Appels / mois</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 70 }}>
            {analysesBarHeights.map((h, i) => (
              <div key={i} style={{ flex: 1, borderRadius: 3, background: i === 11 ? "#0047C6" : "rgba(0,71,198,0.25)", height: `${h}%` }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
            {monthLabels.map((m) => (
              <span key={m} style={{ flex: 1, fontSize: 7, color: "#aaa", textAlign: "center" }}>{m}</span>
            ))}
          </div>
        </div>
        {/* Donut */}
        <div style={{ background: "#fafbfc", borderRadius: 12, padding: "10px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: "var(--muted)", margin: "0 0 6px", alignSelf: "flex-start" }}>Répartition</p>
          <svg width="70" height="70" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
            {analysesPieData.map((d) => {
              const start = (cumul / total) * 283;
              cumul += d.pct;
              return (
                <circle key={d.label} cx="50" cy="50" r="45" fill="none" stroke={d.color} strokeWidth="10"
                  strokeDasharray={`${(d.pct / total) * 283} 283`} strokeDashoffset={`${-start}`} />
              );
            })}
          </svg>
          <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap", justifyContent: "center" }}>
            {analysesPieData.map((d) => (
              <span key={d.label} style={{ fontSize: 8, color: "#666", display: "flex", alignItems: "center", gap: 2 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: d.color }} />{d.label} {d.pct}%
              </span>
            ))}
          </div>
        </div>
        {/* Conversion funnel */}
        <div style={{ gridColumn: "1 / -1", background: "#fafbfc", borderRadius: 12, padding: "10px 12px" }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: "var(--muted)", margin: "0 0 8px" }}>Tunnel de conversion</p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {[
              { label: "Appels reçus", val: 1284, pct: 100, color: "#0047C6" },
              { label: "Qualifiés", val: 847, pct: 66, color: "#8b5cf6" },
              { label: "RDV pris", val: 342, pct: 27, color: "#10b981" },
              { label: "Mandats signés", val: 89, pct: 7, color: "#f59e0b" },
            ].map((step, i) => (
              <div key={step.label} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ height: 6, borderRadius: 3, background: "#eee", overflow: "hidden", marginBottom: 4 }}>
                  <div style={{ width: `${step.pct}%`, height: "100%", background: step.color, borderRadius: 3 }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{step.val.toLocaleString("fr-FR")}</div>
                <div style={{ fontSize: 8, color: "var(--muted)" }}>{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const viewComponents: Record<ViewKey, () => React.ReactElement> = {
  dashboard: DashboardView,
  calls: CallsView,
  prospects: ProspectsView,
  agenda: AgendaView,
  analyses: AnalysesView,
};

/* ── Cursor SVG ── */
function CursorIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ filter: "drop-shadow(1px 2px 4px rgba(0,0,0,0.35))" }}>
      <path d="M5 3l14 8-6.5 1.5L11 19z" fill="#111" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

/* ── Hero transitions ── */
const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 } },
  },
};

/* ── Main Component ── */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [waveActive, setWaveActive] = useState(0);
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle user click on sidebar nav
  const handleNavClick = useCallback((view: ViewKey) => {
    setActiveView(view);
    // Pause cursor animation and hide it
    const tl = timelineRef.current;
    const cursor = cursorRef.current;
    if (tl) tl.pause();
    if (cursor) gsap.to(cursor, { opacity: 0, duration: 0.2 });
    // Clear existing resume timer
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    // Resume after 10 seconds
    resumeTimerRef.current = setTimeout(() => {
      if (tl) tl.resume();
      if (cursor) gsap.to(cursor, { opacity: 1, duration: 0.3 });
    }, 10000);
  }, []);

  // Wave animation
  useEffect(() => {
    const id = setInterval(() => setWaveActive((w) => (w + 1) % 16), 140);
    return () => clearInterval(id);
  }, []);

  // Hero entrance
  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" });
  }, []);

  // Dashboard cursor animation
  useEffect(() => {
    if (!shellRef.current || !cursorRef.current) return;

    const shell = shellRef.current;
    const cursor = cursorRef.current;
    const ripple = rippleRef.current;

    // Wait for layout
    const timeout = setTimeout(() => {
      const shellRect = shell.getBoundingClientRect();

      // Get nav item positions relative to shell
      const getNavPos = (idx: number) => {
        const el = navRefs.current[idx];
        if (!el) return { x: 80, y: 100 + idx * 34 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left - shellRect.left + r.width / 2,
          y: r.top - shellRect.top + r.height / 2,
        };
      };

      // Start cursor at center of dashboard
      gsap.set(cursor, { x: shellRect.width / 2, y: shellRect.height / 2, opacity: 0 });

      const tl = gsap.timeline({ repeat: -1, delay: 2 });
      timelineRef.current = tl;

      // Fade cursor in
      tl.to(cursor, { opacity: 1, duration: 0.3 });

      const viewOrder: ViewKey[] = ["dashboard", "calls", "prospects", "agenda", "analyses"];

      viewOrder.forEach((view, i) => {
        const pos = getNavPos(i);

        // Move cursor to nav item
        tl.to(cursor, {
          x: pos.x - 6,
          y: pos.y - 4,
          duration: 0.4,
          ease: "power2.inOut",
        });

        // Quick click
        tl.to(cursor, { scale: 0.85, duration: 0.06 }, "+=0.08");
        tl.to(cursor, { scale: 1, duration: 0.08 });

        // Ripple effect
        if (ripple) {
          tl.call(() => {
            gsap.set(ripple, { x: pos.x, y: pos.y, scale: 0, opacity: 0.5 });
            gsap.to(ripple, { scale: 1.5, opacity: 0, duration: 0.35, ease: "power2.out" });
          }, [], "<");
        }

        // Switch view
        tl.call(() => { setActiveView(view); }, [], "<0.03");

        // Move cursor to main content area to "browse"
        if (i < viewOrder.length - 1) {
          // Move into main content
          tl.to(cursor, {
            x: shellRect.width * 0.45 + (i % 2 === 0 ? 30 : -20),
            y: 140 + i * 30,
            duration: 0.35,
            ease: "power2.inOut",
          }, "+=0.8");

          // Hover around a bit
          tl.to(cursor, {
            x: shellRect.width * 0.45 + (i % 2 === 0 ? -40 : 50),
            y: 200 + i * 15,
            duration: 0.45,
            ease: "sine.inOut",
          }, "+=0.25");
        } else {
          // Last view: stay, then fade out
          tl.to(cursor, { duration: 1.2 }); // pause
          tl.to(cursor, { opacity: 0, duration: 0.3 });
          tl.call(() => { setActiveView("dashboard"); });
          tl.to(cursor, { duration: 0.3 }); // small gap before loop
        }
      });
    }, 1500); // wait for dashboard to render

    return () => {
      clearTimeout(timeout);
      timelineRef.current?.kill();
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const stats = viewStats[activeView];
  const ViewComp = viewComponents[activeView];

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-bg-full" aria-hidden />
      <div className="hero-bg-overlay" aria-hidden />

      <AuroraBackground showRadialGradient style={{ padding: "160px 24px 60px" }}>
        <div className="hero-inner">
          <h1 className="hero-title hero-desktop-only">
            Le standard intelligent<br />
            pour agences immobilières.
          </h1>
          <p className="hero-subtitle hero-subtitle-desktop hero-desktop-only">
            Rushh, votre agent conversationnel, décroche chaque appel,<br />
            qualifie et vous envoie la fiche résumé. 24h/24, 7j/7.
          </p>

          <h1 className="hero-title hero-mobile-only">
            Le standard intelligent<br />
            pour agences immobilières.
          </h1>
          <p className="hero-subtitle hero-mobile-only">
            Rushh, votre agent conversationnel, décroche chaque appel,
            qualifie et vous envoie la fiche résumé. 24h/24, 7j/7.
          </p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.75 }}
            className="hero-ctas"
          >
            <button
              onClick={() => { window.location.href = "tel:0517948549"; }}
              className="hero-btn-phone hero-cta-equal"
            >
              <Phone size={18} />
              Appeler notre IA
            </button>

            <button
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              className="hero-btn-demo hero-cta-equal"
            >
              Réserver une démo
            </button>
          </motion.div>

          {/* Mobile building image */}
          <img src="/cta-haussmann.jpg" alt="Immeuble parisien" className="hero-mobile-building" />
        </div>
      </AuroraBackground>

      {/* Dashboard */}
      <AnimatedGroup
        variants={{
          container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
          ...transitionVariants,
        }}
        style={{ position: 'relative', zIndex: 20 }}
        itemStyle={{ position: 'relative', zIndex: 20 }}
      >
        <div className="hero-dash-container" style={{ position: 'relative', zIndex: 20 }}>
          <div style={{
            position: "relative", maxWidth: 1100, margin: "0 auto",
            overflow: "hidden", borderRadius: "20px 20px 0 0",
            border: "1px solid rgba(0,0,0,0.08)", borderBottom: "none",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)",
            background: "white",
          }}>
            <div ref={shellRef} className="dash-shell" style={{ borderRadius: "20px 20px 0 0", border: "none", boxShadow: "none", minHeight: 420, position: "relative" }}>

              {/* Animated cursor */}
              <div ref={cursorRef} style={{
                position: "absolute", top: 0, left: 0,
                pointerEvents: "none", zIndex: 100,
                willChange: "transform",
                opacity: 0,
              }}>
                <CursorIcon />
              </div>

              {/* Click ripple */}
              <div ref={rippleRef} style={{
                position: "absolute", top: -12, left: -12,
                width: 24, height: 24, borderRadius: "50%",
                border: "2px solid rgba(0,71,198,0.4)",
                pointerEvents: "none", zIndex: 99,
                opacity: 0,
              }} />

              {/* Sidebar */}
              <div className="dash-sidebar">
                <div className="dash-sidebar-logo">
                  <img src="/logo-rushh.png" alt="Rushh" style={{ width: 38, height: 38, objectFit: "contain", marginTop: -4 }} />
                  <span className="dash-logo-text">Rushh</span>
                </div>
                <nav className="dash-nav">
                  {viewMeta.map((v, i) => (
                    <div
                      key={v.key}
                      ref={(el) => { navRefs.current[i] = el; }}
                      className={`dash-nav-item ${activeView === v.key ? "active" : ""}`}
                      onClick={() => handleNavClick(v.key)}
                    >
                      <v.icon size={15} /><span>{v.label}</span>
                    </div>
                  ))}
                </nav>
                <div className="dash-sidebar-user">
                  <div className="dash-user-avatar">A</div>
                  <span className="dash-user-name">Mon agence</span>
                </div>
              </div>

              {/* Main — animated content switch */}
              <div className="dash-main">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeView}
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.3 }}
                    style={{ display: "flex", flexDirection: "column", flex: 1 }}
                  >
                    <ViewComp />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right panel */}
              <div className="dash-panel">
                <div className="dash-agent-card">
                  <div className="dash-agent-info">
                    <p className="dash-agent-label">Agent vocal</p>
                    <p className="dash-agent-name">Thomas</p>
                    <p className="dash-agent-phone">05 17 94 85 49</p>
                  </div>
                  <VoiceWave offset={waveActive} />
                  <button className="dash-agent-btn">Appel test</button>
                </div>
                <div className="dash-stats-card">
                  <div className="dash-stat-row">
                    <div className="dash-stat-block"><span className="dash-stat-val">{stats.s1}</span><span className="dash-stat-label">{stats.l1}</span></div>
                    <div className="dash-stat-block"><span className="dash-stat-val accent">{stats.s2}</span><span className="dash-stat-label">{stats.l2}</span></div>
                  </div>
                  <div className="dash-stat-row">
                    <div className="dash-stat-block"><span className="dash-stat-val">{stats.s3}</span><span className="dash-stat-label">{stats.l3}</span></div>
                    <div className="dash-stat-block"><span className="dash-stat-val">{stats.s4}</span><span className="dash-stat-label">{stats.l4}</span></div>
                  </div>
                </div>
                <div className="dash-chart-card">
                  <p className="dash-chart-title">{stats.chart}</p>
                  <div className="dash-chart-bars">
                    {stats.bars.map((h, i) => (
                      <div key={i} className="dash-chart-bar" style={{ height: `${h}%`, transition: "height 0.5s ease" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGroup>
    </section>
  );
}
