"use client";

export function HeroSection() {
  return (
    <section className="hero-photo-section">
      <div className="hero-photo-bg" aria-hidden />
      <div className="hero-photo-overlay" aria-hidden />

      <div className="hero-photo-inner">
        <p className="hero-photo-eyebrow">
          Le standard téléphonique IA
          <br />
          pensé pour les agences immobilières
        </p>

        <h1 className="hero-photo-title">
          Chaque appel
          <br />
          compte pour votre agence
        </h1>
      </div>
    </section>
  );
}
