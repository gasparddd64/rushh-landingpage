"use client";

export function CTASection() {
  return (
    <section className="cta-kz" id="cta">
      <div className="wrap">
        <div className="cta-kz-grid">
          {/* Left: card */}
          <div className="cta-kz-card">
            <span className="cta-kz-eyebrow">Passez à l&apos;action</span>
            <h2 className="cta-kz-title">
              Combien d&apos;appels avez-vous manqués cette semaine ?
            </h2>
            <p className="cta-kz-desc">
              Derrière chaque appel, il peut y avoir un acquéreur, un vendeur, un propriétaire ou simplement un client qui attend une réponse.
            </p>
            <p className="cta-kz-desc" style={{ marginTop: 16 }}>
              Découvrez ce qui se passerait si Rushh prenait en charge le prochain.
            </p>
            <div style={{ marginTop: 32 }}>
              <button
                onClick={() => window.open("https://calendly.com/gaspardv/rushh", "_blank")}
                className="hero-clean-cta"
              >
                Réserver une démonstration
              </button>
            </div>
          </div>

          {/* Right: photo */}
          <div className="cta-kz-photo">
            <img src="/cta-haussmann.jpg" alt="Immeuble haussmannien" />
          </div>
        </div>
      </div>
    </section>
  );
}
