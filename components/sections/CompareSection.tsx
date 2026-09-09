"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

const BAD_ITEMS = [
  "Paramétrer l'outil",
  "Construire vos scénarios",
  "Tester les parcours",
  "Corriger les problèmes",
  "Maintenir le système",
];

const GOOD_ITEMS = [
  "Nous étudions votre fonctionnement",
  "Nous préparons vos parcours d'appels",
  "Nous testons avant la mise en service",
  "Nous suivons son fonctionnement",
  "Nous l'adaptons avec votre agence",
];

function IconDashboard() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

function IconRushh() {
  return <img src="/logo-rushh-icon.png" alt="Rushh" style={{ width: 52, height: 52, objectFit: "contain" }} />;
}

export function CompareSection() {
  return (
    <section className="section-pad compare-section">
      <div className="wrap">
        {/* Header */}
        <div className="section-head">
          <span className="section-eyebrow">Le Standard Rushh n&apos;est pas un logiciel</span>
          <h2 className="section-title">
            Une équipe à vos côtés.<br />
            Pas un outil générique à configurer.
          </h2>
          <p className="section-sub" style={{ maxWidth: 520 }}>
            Notre équipe conçoit, déploie et fait évoluer votre Standard Rushh selon le fonctionnement réel de votre agence.
          </p>
        </div>

        {/* Two cards */}
        <div className="cmp-cards">
          {/* Left — Logiciel classique */}
          <div className="cmp-card cmp-card--bad">
            <div className="cmp-card-head">
              <div className="cmp-card-icon cmp-card-icon--bad">
                <IconDashboard />
              </div>
              <div>
                <div className="cmp-card-name">Logiciel classique</div>
                <div className="cmp-card-sub">À vous de le faire fonctionner</div>
              </div>
            </div>
            <ul className="cmp-list">
              {BAD_ITEMS.map((item, i) => (
                <li key={i} className="cmp-list-item cmp-list-item--bad">
                  <span className="cmp-icon-bad">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Rushh */}
          <div className="cmp-card cmp-card--good">
            <div className="cmp-card-head">
              <div className="cmp-card-icon cmp-card-icon--good">
                <IconRushh />
              </div>
              <div style={{ flex: 1 }}>
                <div className="cmp-card-name cmp-card-name--good">Standard Rushh</div>
                <div className="cmp-card-sub cmp-card-sub--good">Nous le faisons fonctionner pour vous</div>
              </div>
            </div>
            <ul className="cmp-list">
              {GOOD_ITEMS.map((item, i) => (
                <li key={i} className="cmp-list-item cmp-list-item--good">
                  <span className="cmp-icon-good">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="cmp-footer cmp-footer--desktop">
              Conçu avec vous · Déployé par Rushh · Suivi dans le temps
            </div>
            <div className="cmp-footer--mobile">
              <DemoCTA label="Réserver un échange" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="cmp-ctas">
          <DemoCTA label="Réserver un échange" />
        </div>
      </div>
    </section>
  );
}
