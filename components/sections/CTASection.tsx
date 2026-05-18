"use client";

import { ButtonColorful } from "@/components/ui/button-colorful";

export function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="wrap">
        <div className="cta-card">
          <span className="cta-eyebrow">Ne ratez plus d&apos;appels</span>
          <h2 className="cta-title">
            Combien d&apos;appels avez-vous<br />manqués cette semaine ?
          </h2>
          <p className="cta-sub">
            Un seul appel raté peut coûter un mandat. Regardons ensemble ce que ça vous coûte vraiment.
          </p>
          <div className="cta-buttons">
            <button
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              className="cta-btn-main"
            >
              Réserver une démo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
