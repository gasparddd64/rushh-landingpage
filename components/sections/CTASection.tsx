"use client";

export function CTASection() {
  return (
    <section className="cta-kz" id="cta">
      <div className="wrap">
        <div className="cta-kz-grid">
          {/* Left: card */}
          <div className="cta-kz-card">
            <span className="cta-kz-eyebrow">Ne ratez plus d&apos;appels</span>
            <h2 className="cta-kz-title">
              Combien d&apos;appels avez-vous manqués cette semaine ?
            </h2>
            <p className="cta-kz-desc">
              Un seul appel raté peut coûter un mandat. Rushh décroche chaque appel, qualifie vos prospects et vous transmet une fiche complète — 24h/24, 7j/7.
            </p>
            <div className="cta-kz-buttons">
              <button
                onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
                className="cta-kz-btn"
              >
                Réserver une démo
              </button>
              <button
                onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
                className="cta-kz-btn-arrow"
                aria-label="Réserver"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Right: photo */}
          <div className="cta-kz-photo">
            <img src="/cta-paris.jpg" alt="Paris" />
          </div>
        </div>
      </div>
    </section>
  );
}
