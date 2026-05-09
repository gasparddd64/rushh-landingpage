"use client";

import { Phone } from "lucide-react";
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
              onClick={() => { window.location.href = "tel:0517948549"; }}
              className="hero-btn-phone"
            >
              <Phone size={18} />
              Discuter avec notre agent vocale
            </button>
            <ButtonColorful
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              label="Demander une démo"
              variant="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
