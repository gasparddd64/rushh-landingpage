"use client";

import Script from "next/script";

export function CalendlySection() {
  return (
    <section className="section-pad calendly-section" id="reserver">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Réservez votre échange</span>
          <h2 className="section-title">Choisissez un créneau qui vous convient.</h2>
          <p className="section-sub">
            Sélectionnez directement un horaire ci-dessous, sans quitter la page.
          </p>
        </div>

        <div className="calendly-embed-wrap">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gaspard-david/demo?hide_gdpr_banner=1&background_color=ffffff&text_color=0c1024&primary_color=0047c6"
            style={{ minWidth: 320, height: 650 }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
