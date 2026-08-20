"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

/* ══════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════ */
function IconChat() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function IconList() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
}
function IconCalendarI() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}
function IconFile() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>;
}

/* ══════════════════════════════════════════════
   CARDS DATA
═══════════════════════════════════════════════ */
const CARDS = [
  {
    icon: <IconChat />,
    title: "Besoin compris",
    desc: "Rushh identifie en quelques échanges la nature précise de la demande.",
    featured: true,
  },
  {
    icon: <IconList />,
    title: "Prospect qualifié",
    desc: "Les informations clés sont collectées une à une.",
    featured: false,
  },
  {
    icon: <IconCalendarI />,
    title: "Action engagée",
    desc: "Rushh propose un rendez-vous ou transmet un message.",
    featured: false,
  },
  {
    icon: <IconFile />,
    title: "Fiche transmise",
    desc: "Votre équipe reçoit une fiche complète, prête à traiter.",
    featured: false,
  },
];

/* ══════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════ */
export function SolutionSection() {
  return (
    <section className="solution-section" id="solution">
      <div className="wrap">
        <div className="sol-layout">
          {/* Left: text */}
          <div className="sol-layout-text">
            <span className="sol-eyebrow">La réponse</span>
            <h2 className="sol-title">
              Rushh, lui, n&apos;est jamais occupé.
            </h2>
            <p className="sol-sub">
              Rushh est l&apos;agent vocal IA de votre agence immobilière : décroché à la première sonnerie, chaque appel est compris, qualifié, puis transmis à votre équipe, prêt à être traité.
            </p>
            <DemoCTA />
          </div>

          {/* Right: 2×2 grid */}
          <div className="sol-grid">
            {CARDS.map((card, i) => (
              <div key={i} className={`sol-tile${card.featured ? " sol-tile--featured" : ""}`}>
                <div className={`sol-tile-icon${card.featured ? " sol-tile-icon--featured" : ""}`}>
                  {card.icon}
                </div>
                <h3 className="sol-tile-title">{card.title}</h3>
                <p className="sol-tile-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
