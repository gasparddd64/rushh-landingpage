"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

/* ── Icons ── */
function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="8" y1="6" x2="8" y2="6.01" />
      <line x1="12" y1="6" x2="12" y2="6.01" />
      <line x1="16" y1="6" x2="16" y2="6.01" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
      <line x1="10" y1="22" x2="10" y2="18" />
      <line x1="14" y1="22" x2="14" y2="18" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5L19 11" />
      <path d="M17.5 5.5L21 9" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 17l-1.5-1.5a2.12 2.12 0 010-3l3-3a2.12 2.12 0 013 0l.5.5" />
      <path d="M14 14l2 2" />
      <path d="M17 11l2 2" />
      <path d="M2 12l4-4 3.5 3.5" />
      <path d="M22 12l-4-4-3.5 3.5" />
    </svg>
  );
}
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

const METIERS = [
  { name: "Syndic", icon: <IconBuilding />, img: "/city-bordeaux-v2.jpg" },
  { name: "Gérance", icon: <IconKey />, img: "/city-lyon-v2.jpg" },
  { name: "Transaction", icon: <IconHandshake />, img: "/hero-building-left.jpg" },
  { name: "Location", icon: <IconHome />, img: "/city-paris-v2.jpg" },
];

export function WhySection() {
  return (
    <section className="section-pad metiers-section" id="why">
      <div className="wrap">
        <div className="metiers-head">
          <span className="section-eyebrow">Pensé pour l&apos;immobilier</span>
          <h2 className="section-title metiers-title">Un Standard pour tous vos métiers.</h2>
          <p className="section-sub">Rushh s&apos;adapte à chaque métier de votre agence et à sa façon de traiter les appels.</p>
        </div>

        <div className="metiers-grid">
          {METIERS.map((m, i) => (
            <div key={i} className="metiers-card">
              <img src={m.img} alt={m.name} className="metiers-card-img" loading="lazy" />
              <div className="metiers-card-overlay" aria-hidden />
              <span className="metiers-card-icon" aria-hidden>{m.icon}</span>
              <span className="metiers-card-name">{m.name}</span>
            </div>
          ))}
        </div>

        <div className="metiers-cta">
          <DemoCTA label="Réserver un échange" />
        </div>
      </div>
    </section>
  );
}
