import { DemoCTA } from "@/components/ui/demo-cta";
import { TestezCTA } from "@/components/ui/testez-cta";

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
          <h1 id="home-title" className="hero-x-title">
            <span className="hero-x-mask hero-x-mask--a">
              <span className="hero-x-line">Ne perdez plus aucun mandat</span>
            </span>
            <span className="hero-x-mask hero-x-mask--b">
              <span className="hero-x-line">à cause d&apos;un appel manqué.</span>
            </span>
          </h1>

          <p className="hero-x-sub">
            Le standard téléphonique IA sur mesure pour les professionnels de l&apos;immobilier.
          </p>

          <div className="hero-x-ctas">
            <DemoCTA label="Réserver une démo" showArrow={false} />
            <TestezCTA variant="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
