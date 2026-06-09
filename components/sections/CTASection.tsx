"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

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
            <DemoCTA />
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
