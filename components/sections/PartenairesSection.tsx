import type { ReactNode } from "react";

/* ── Logos ── */

function LogoNadia() {
  return (
    <img
      src="/logo-nadia.png"
      alt="NADIA Agents IA"
      style={{ height: 36, width: "auto", objectFit: "contain" }}
    />
  );
}

function LogoIACrea() {
  return (
    <svg width="120" height="36" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IACrea">
      {/* House icon */}
      <g transform="translate(0,4)">
        <path d="M18 8L6 18v14h10V22h4v10h10V18L18 8z" stroke="#1a2060" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <path d="M18 8L28 18" stroke="#1a2060" strokeWidth="2.2" strokeLinecap="round"/>
        {/* Stars */}
        <circle cx="14" cy="13" r="1.8" fill="#e63946"/>
        <circle cx="22" cy="13" r="1.8" fill="#e63946"/>
      </g>
      {/* Text */}
      <text x="34" y="30" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#1a2060" letterSpacing="-0.5">IA</text>
      <text x="58" y="30" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fill="#1a2060" letterSpacing="-0.5">Crea</text>
    </svg>
  );
}

function LogoAccelia() {
  return (
    <svg width="130" height="36" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Accelia">
      {/* Robot circle */}
      <circle cx="22" cy="24" r="19" fill="#f97316" opacity="0.12"/>
      <circle cx="22" cy="24" r="19" stroke="#f97316" strokeWidth="2"/>
      {/* Robot head */}
      <rect x="14" y="14" width="16" height="14" rx="3" fill="#f97316"/>
      {/* Eyes */}
      <circle cx="18.5" cy="20" r="2" fill="white"/>
      <circle cx="25.5" cy="20" r="2" fill="white"/>
      {/* Antenna */}
      <line x1="22" y1="14" x2="22" y2="10" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="22" cy="9" r="1.5" fill="#f97316"/>
      {/* Rocket flame */}
      <path d="M18 28 Q22 36 26 28" fill="#f97316" opacity="0.6"/>
      {/* Text */}
      <text x="48" y="31" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="20" fontWeight="700" fill="#111827" letterSpacing="-0.3">ACCELIA</text>
    </svg>
  );
}

/* ── Partner card ── */
interface Partner {
  logo: ReactNode;
  category: string;
  categoryColor: string;
  accentColor: string;
  name: string;
  desc: string;
  url: string;
  urlDisplay: string;
}

const partners: Partner[] = [
  {
    logo: <LogoNadia />,
    category: "AGENTS IA",
    categoryColor: "#e63946",
    accentColor: "#e63946",
    name: "NADIA",
    desc: "ÉLIO prospecte à votre place — détecte vos leads sur les portails et les contacte automatiquement, 24h/24.",
    url: "https://nadiaagents.com",
    urlDisplay: "nadiaagents.com",
  },
  {
    logo: <LogoIACrea />,
    category: "VISUELS IA",
    categoryColor: "#7c3aed",
    accentColor: "#7c3aed",
    name: "IACrea",
    desc: "Vidéos et home staging virtuel par IA — valorisez vos biens en quelques secondes avec des visuels professionnels.",
    url: "https://iacrea.com",
    urlDisplay: "iacrea.com",
  },
  {
    logo: <LogoAccelia />,
    category: "AUTOMATION IA",
    categoryColor: "#0ea5e9",
    accentColor: "#0ea5e9",
    name: "Accelia",
    desc: "Automatisez et accélérez votre activité immobilière avec des outils IA pensés pour gagner du temps chaque jour.",
    url: "https://accelia.io",
    urlDisplay: "accelia.io",
  },
];

function PartnerCard({ p }: { p: Partner }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
      className="partner-card"
    >
      {/* Top accent line */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${p.accentColor}, ${p.accentColor}44)`,
          borderRadius: "16px 16px 0 0",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />

      {/* Category pill */}
      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: p.categoryColor,
            background: `${p.categoryColor}14`,
            border: `1px solid ${p.categoryColor}30`,
            borderRadius: 999,
            padding: "3px 10px",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: p.categoryColor,
              display: "inline-block",
            }}
          />
          {p.category}
        </span>
      </div>

      {/* Logo */}
      <div style={{ marginBottom: 20, minHeight: 44, display: "flex", alignItems: "center" }}>
        {p.logo}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--muted)",
          flex: 1,
          marginBottom: 24,
        }}
      >
        {p.desc}
      </p>

      {/* CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 13,
          fontWeight: 600,
          color: "var(--accent)",
          borderTop: "1px solid var(--line)",
          paddingTop: 16,
        }}
      >
        {p.urlDisplay}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </div>
    </a>
  );
}

export function PartenairesSection() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "96px 0",
        borderTop: "1px solid var(--line)",
      }}
      id="partenaires"
    >
      <style>{`
        .partner-card {
          position: relative;
          background: white;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(12,16,36,0.04), 0 4px 16px rgba(12,16,36,0.04);
          transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .partner-card:hover {
          box-shadow: 0 8px 32px rgba(12,16,36,0.10), 0 2px 8px rgba(12,16,36,0.06);
          transform: translateY(-3px);
          border-color: var(--line-strong);
        }
      `}</style>

      <div className="wrap">
        {/* Header */}
        <div className="section-head" style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">Partenaires</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            L&apos;écosystème IA immobilier
          </h2>
          <p className="section-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
            Des solutions complémentaires à Rushh, pensées pour les professionnels de l&apos;immobilier.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
