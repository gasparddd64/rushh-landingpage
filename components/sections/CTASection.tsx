"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

export function CTASection() {
  return (
    <section className="cta-kz" id="cta">
      <div className="wrap">
        <div className="cta-kz-grid">
          {/* Left: card */}
          <div className="cta-kz-card">
            <span className="cta-kz-eyebrow">Passez à Rushh</span>
            <h2 className="cta-kz-title">
              Et si votre prochain appel était déjà pris en charge ?
            </h2>
            <p className="cta-kz-desc">
              Voyons ensemble comment Rushh s&apos;adapterait à votre agence, à vos métiers et à votre façon de travailler.
            </p>
            <DemoCTA label="Réserver un échange" />
          </div>

          {/* Right: photo */}
          <div className="cta-kz-photo">
            <img src="/cta-haussmann.jpg" alt="Immeuble haussmannien Paris, agence immobilière" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
