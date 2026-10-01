"use client";


const BAD_ITEMS = [
  "Configurer l'outil vous-même",
  "Créer les scénarios",
  "Tester les parcours",
  "Corriger les erreurs",
  "Assurer le suivi au quotidien",
];

const GOOD_ITEMS = [
  "Nous analysons votre fonctionnement",
  "Nous adaptons les scénarios à votre agence",
  "Nous testons avant la mise en service",
  "Nous suivons les performances dans le temps",
  "Nous faisons évoluer le standard avec vous",
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
    <section className="compare-section" id="difference" aria-labelledby="difference-title">
      <div className="wrap">
        {/* Header */}
        <div className="lf-head--center">
          <span className="lf-pill">Le Standard Rushh n&apos;est pas un logiciel</span>
          <h2 id="difference-title" className="lf-h2">
            Une équipe à vos côtés.<br />
            Pas un outil générique à configurer.
          </h2>
          <p className="lf-sub">
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
                <div className="cmp-card-sub">À vous de tout gérer</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
