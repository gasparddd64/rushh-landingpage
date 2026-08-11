"use client";

const BAD_ITEMS = [
  "Templates génériques",
  "Scénarios à créer vous-même",
  "Intégrations à mettre en place",
  "À vous de diagnostiquer les problèmes",
  "À vous de reconfigurer chaque évolution",
  "Vous achetez un outil",
];

const GOOD_ITEMS = [
  "Analyse de votre fonctionnement et de vos besoins",
  "Parcours d'appels conçus selon vos cas réels",
  "Connexion à votre environnement lorsqu'il est compatible",
  "Un interlocuteur Rushh vous accompagne",
  "Le standard évolue avec les besoins de votre agence",
  "Vous obtenez un standard prêt à travailler pour votre agence",
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
          <span className="section-eyebrow">Rushh n&apos;est pas un logiciel</span>
          <h2 className="section-title">
            Une équipe à vos côtés.<br />
            Pas un outil générique à configurer.
          </h2>
          <p className="section-sub" style={{ maxWidth: 520 }}>
            Rushh conçoit, déploie et fait évoluer votre standard selon le fonctionnement réel de votre agence.
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
                <div className="cmp-card-sub">Un outil à paramétrer et maintenir</div>
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
                <div className="cmp-card-name cmp-card-name--good">Rushh</div>
                <div className="cmp-card-sub cmp-card-sub--good">Un standard conçu et suivi pour votre agence</div>
              </div>
              <span className="cmp-badge">Service accompagné</span>
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
            <div className="cmp-footer">
              Conçu avec vous · Déployé par Rushh · Suivi dans le temps
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="cmp-ctas">
          <button
            className="cmp-cta-btn"
            onClick={() => window.open("https://calendly.com/gaspardv/rushh", "_blank")}
          >
            Échanger sur votre agence
          </button>
          <a href="#solution" className="cmp-cta-link">
            Voir comment Rushh fonctionne →
          </a>
        </div>
      </div>
    </section>
  );
}
