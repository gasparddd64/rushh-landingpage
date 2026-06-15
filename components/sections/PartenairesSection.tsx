"use client";

import type { ReactNode } from "react";

/* ─────────────────────────────────────────────
   LOGOS — SVG fidèles aux captures d'écran
───────────────────────────────────────────── */

/** IACrea — maison outline navy + étoiles rouges + texte "IACrea" navy */
function LogoIACrea() {
  return (
    <svg width="128" height="38" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IACrea">
      {/* House outline */}
      <path d="M30 30 L30 50 L50 50 L50 30" stroke="#1a2660" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Roof */}
      <path d="M24 32 L40 16 L56 32" stroke="#1a2660" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Stars inside house — 4-pointed sparkle */}
      {/* Star 1 — top center */}
      <path d="M40 24 L41.2 27 L44 28 L41.2 29 L40 32 L38.8 29 L36 28 L38.8 27 Z" fill="#e63946"/>
      {/* Star 2 — bottom left */}
      <path d="M33 37 L33.9 39.3 L36 40 L33.9 40.7 L33 43 L32.1 40.7 L30 40 L32.1 39.3 Z" fill="#e63946"/>
      {/* Star 3 — bottom right */}
      <path d="M47 37 L47.9 39.3 L50 40 L47.9 40.7 L47 43 L46.1 40.7 L44 40 L46.1 39.3 Z" fill="#e63946"/>
      {/* Text */}
      <text x="64" y="42" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="28" fontWeight="800" fill="#1a2660" letterSpacing="-1">IA</text>
      <text x="99" y="42" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="28" fontWeight="400" fill="#1a2660" letterSpacing="-0.5">Crea</text>
    </svg>
  );
}

/** NADIA — lettre "n" blanche stylisée sur fond sombre + point teal + "NADIA" */
function LogoNadia() {
  return (
    <svg width="110" height="38" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NADIA">
      {/* Dark pill background for icon */}
      <rect x="0" y="4" width="44" height="52" rx="10" fill="#0a0a0a"/>
      {/* Stylized "n" — thick rounded letterform */}
      <path
        d="M11 44 L11 22 Q11 16 17 16 Q23 16 23 22 L23 44"
        stroke="white" strokeWidth="5.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M23 22 Q23 16 29 16 Q35 16 35 22 L35 44"
        stroke="white" strokeWidth="5.5" strokeLinecap="round" fill="none"
      />
      {/* Teal dot */}
      <circle cx="35" cy="48" r="4" fill="#00c9a7"/>
      {/* Text */}
      <text x="54" y="42" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="24" fontWeight="700" fill="#0a0a0a" letterSpacing="2">NADIA</text>
    </svg>
  );
}

/** Accelia — robot orange dans cercle + "ACCELIA" */
function LogoAccelia() {
  return (
    <svg width="140" height="38" viewBox="0 0 210 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ACCELIA">
      {/* Outer circle */}
      <circle cx="30" cy="30" r="26" stroke="#f97316" strokeWidth="2.5" fill="none"/>
      {/* Robot body */}
      <rect x="18" y="18" width="24" height="18" rx="3" fill="#f97316"/>
      {/* Robot eyes */}
      <circle cx="24" cy="26" r="3" fill="white"/>
      <circle cx="36" cy="26" r="3" fill="white"/>
      {/* Antenna */}
      <line x1="30" y1="18" x2="30" y2="10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="30" cy="8.5" r="2.5" fill="#f97316"/>
      {/* Rocket fins / feet */}
      <path d="M22 36 L18 44 L24 41 Z" fill="#f97316"/>
      <path d="M38 36 L42 44 L36 41 Z" fill="#f97316"/>
      {/* Flame */}
      <path d="M26 36 Q30 48 34 36" fill="#f97316" opacity="0.55"/>
      {/* Text */}
      <text x="64" y="38" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="22" fontWeight="700" fill="#111827" letterSpacing="1.5">ACCELIA</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
interface Partner {
  logo: ReactNode;
  category: string;
  categoryColor: string;
  accentColor: string;
  accentGradient: string;
  name: string;
  desc: string;
  url: string;
  urlDisplay: string;
}

const partners: Partner[] = [
  {
    logo: <LogoNadia />,
    category: "AGENTS IA",
    categoryColor: "#c8102e",
    accentColor: "#c8102e",
    accentGradient: "linear-gradient(90deg, #c8102e, #e8334a66)",
    name: "NADIA",
    desc: "ÉLIO prospecte à votre place — détecte vos leads sur les portails et les contacte automatiquement, 24h/24.",
    url: "https://nadiaagents.com",
    urlDisplay: "nadiaagents.com",
  },
  {
    logo: <LogoIACrea />,
    category: "VISUELS IA",
    categoryColor: "#1a2660",
    accentColor: "#1a2660",
    accentGradient: "linear-gradient(90deg, #1a2660, #1a266055)",
    name: "IACrea",
    desc: "Vidéos et home staging virtuel par IA — valorisez vos biens en quelques secondes avec des visuels professionnels.",
    url: "https://iacrea.com",
    urlDisplay: "iacrea.com",
  },
  {
    logo: <LogoAccelia />,
    category: "AUTOMATION IA",
    categoryColor: "#ea580c",
    accentColor: "#ea580c",
    accentGradient: "linear-gradient(90deg, #ea580c, #f9731655)",
    name: "Accelia",
    desc: "Automatisez et accélérez votre activité immobilière avec des outils IA pensés pour gagner du temps chaque jour.",
    url: "https://accelia.io",
    urlDisplay: "accelia.io",
  },
];

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function PartnerCard({ p }: { p: Partner }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-card-v2"
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4,
        background: p.accentGradient,
        borderRadius: "20px 20px 0 0",
      }} />

      {/* Inner content */}
      <div style={{ padding: "32px 28px 26px", display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Category pill */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 10, fontWeight: 700, letterSpacing: "0.09em",
            color: p.categoryColor,
            background: `${p.categoryColor}12`,
            border: `1px solid ${p.categoryColor}28`,
            borderRadius: 999,
            padding: "4px 11px",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.categoryColor, flexShrink: 0 }} />
            {p.category}
          </span>
        </div>

        {/* Logo zone */}
        <div style={{ minHeight: 46, display: "flex", alignItems: "center", marginBottom: 20 }}>
          {p.logo}
        </div>

        {/* Description */}
        <p style={{ fontSize: 14.5, lineHeight: 1.68, color: "#4b5468", flex: 1, marginBottom: 28 }}>
          {p.desc}
        </p>

        {/* CTA */}
        <div style={{
          borderTop: "1px solid #eef0f4",
          paddingTop: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
            {p.urlDisplay}
          </span>
          <span style={{
            width: 28, height: 28, borderRadius: 8,
            background: "var(--accent-soft)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export function PartenairesSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "100px 0", borderTop: "1px solid var(--line)" }} id="partenaires">
      <style>{`
        .partner-card-v2 {
          position: relative;
          background: white;
          border: 1px solid #e8eaf0;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          box-shadow:
            0 1px 2px rgba(12,16,36,0.04),
            0 4px 12px rgba(12,16,36,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .partner-card-v2:hover {
          box-shadow:
            0 2px 4px rgba(12,16,36,0.05),
            0 12px 40px rgba(12,16,36,0.11);
          transform: translateY(-4px);
          border-color: #d4d8e4;
        }
      `}</style>

      <div className="wrap">
        {/* Header */}
        <div className="section-head" style={{ marginBottom: 60 }}>
          <span className="section-eyebrow">Partenaires</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            L&apos;écosystème IA immobilier
          </h2>
          <p className="section-sub" style={{ maxWidth: 500, margin: "0 auto" }}>
            Des solutions complémentaires à Rushh, pensées pour les professionnels de l&apos;immobilier.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {partners.map((p) => (
            <PartnerCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
