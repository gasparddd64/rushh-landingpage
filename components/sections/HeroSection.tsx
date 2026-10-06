export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="hero-x">
      <div className="hero-x-stage">
        <img
          src="/hero-agent-photo.webp"
          alt="Agent immobilier souriant à son bureau, devant l'écran de son ordinateur"
          className="hero-x-bg"
          fetchPriority="high"
        />
        <div className="hero-x-overlay" aria-hidden />

        <div className="hero-x-copy">
          <p className="hero-x-eyebrow">
            Le standard téléphonique IA
            <br />
            pensé pour les agences
            <br />
            immobilières
          </p>

          <h1 id="home-title" className="hero-x-title">
            <span className="hero-x-mask hero-x-mask--a">
              <span className="hero-x-line">Chaque appel</span>
            </span>
            <span className="hero-x-mask hero-x-mask--b">
              <span className="hero-x-line">compte pour votre agence</span>
            </span>
          </h1>

          <div className="hero-x-actions">
            <a
              className="listen-cta"
              href="tel:+33517948549"
              aria-label="Écouter Rushh : appeler le standard de démonstration au 05 17 94 85 49"
            >
              <span className="listen-cta-orb" aria-hidden>
                <span className="listen-cta-bars">
                  <i /><i /><i /><i /><i />
                </span>
              </span>
              <span className="listen-cta-text">
                <strong>Écouter Rushh</strong>
                <small>05 17 94 85 49</small>
              </span>
            </a>

            <a className="hero-x-cta" href="#relais">
              Découvrir Rushh
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
