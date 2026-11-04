import { DemoCTA } from "@/components/ui/demo-cta";
import { TestezCTA } from "@/components/ui/testez-cta";

export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="hx">
      <div className="hx-wrap">
        <div className="hx-copy">
          <p className="hx-pill">
            <span aria-hidden className="hx-pill-dot" />
            Le standard téléphonique IA sur mesure pour les professionnels de l&apos;immobilier.
          </p>

          <h1 id="home-title" className="hx-title">
            Ne perdez plus aucun mandat à cause d&apos;un appel manqué.
          </h1>

          <p className="hx-sub">
            Rushh répond aux appels entrants de votre agence 24 h/24, qualifie les demandes et fixe des rendez-vous sur
            vos agendas connectés. Notre équipe conçoit, installe et fait fonctionner votre standard pour vous.
          </p>

          <div className="hx-ctas">
            <DemoCTA label="Réserver une démo" showArrow={false} />
            <TestezCTA variant="ghost" />
          </div>

          <ul className="hx-checks">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              Disponible 24 h/24 et 7 j/7
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              Entièrement pris en charge par notre équipe
            </li>
          </ul>
        </div>

        <div className="hx-media">
          <img
            src="/hero-agent-photo.webp"
            alt="Agent immobilier souriant à son bureau, devant l'écran de son ordinateur"
            width={1672}
            height={941}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
