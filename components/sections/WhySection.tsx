"use client";

import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
  );
}

function IconLightning() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

const ITEMS = [
  {
    icon: <IconBuilding />,
    title: "Conçu pour votre agence",
    desc: "Chaque script est écrit pour votre façon de travailler, pas l'inverse. Transaction, location, gestion : Rushh s'adapte à vos métiers, pas le contraire.",
  },
  {
    icon: <IconLightning />,
    title: "Déployé pour vous",
    desc: "Aucune configuration technique de votre côté. Rushh se connecte à votre agenda et vos outils existants, mis en service en 5 jours ouvrés.",
  },
  {
    icon: <IconShield />,
    title: "Accompagné dans le temps",
    desc: "Le script évolue avec votre activité. Un ajustement, une correction, une nouvelle règle : ça se fait avec vous, pas en autonomie sur une interface.",
  },
];

export function WhySection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad" id="why">
      <div className="wrap">
        <div className="why-grid" style={{ alignItems: "center" }}>
          {/* Left column — unchanged */}
          <div>
            <span className="section-eyebrow" style={{ marginBottom: 24 }}>Pourquoi Rushh ?</span>
            <h2 className="section-title" style={{ textAlign: "left", margin: "16px 0 20px", maxWidth: 520 }}>
              Ce que votre agence gagne dès le premier appel.
            </h2>
            <p className="section-sub" style={{ textAlign: "left", margin: "0 0 36px", maxWidth: 460 }}>
              Conçu exclusivement pour l&apos;immobilier. Opérationnel dès la première semaine.
            </p>
            <div style={{ display: "flex", gap: 48, alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap" as const }}>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>100%</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />décrochés</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>0</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />manqués</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>5j</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Pour être<br />opérationnel</div>
              </div>
            </div>
            <DemoCTA />
          </div>

          {/* Right column — accordion */}
          <div className="why-side">
            <div className="why-accordion">
              {ITEMS.map((item, i) => (
                <div key={i} className={`why-acc-item${open === i ? " why-acc-item--open" : ""}`}>
                  <button className="why-acc-header" onClick={() => setOpen(i)}>
                    <span className="why-acc-icon">{item.icon}</span>
                    <span className="why-acc-title">{item.title}</span>
                    <span className="why-acc-chevron"><IconChevron /></span>
                  </button>
                  <div className="why-acc-body">
                    <div className="why-acc-body-inner">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
