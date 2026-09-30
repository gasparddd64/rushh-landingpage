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
        </div>
      </div>
    </section>
  );
}
