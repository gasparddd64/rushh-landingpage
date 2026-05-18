"use client";

import { Phone } from "lucide-react";

const cities = [
  { src: "/city-paris.jpg", alt: "Paris" },
  { src: "/city-lyon.jpg", alt: "Lyon" },
  { src: "/city-marseille.jpg", alt: "Marseille" },
  { src: "/city-bordeaux.jpg", alt: "Bordeaux" },
  { src: "/city-nice.jpg", alt: "Nice" },
  { src: "/city-toulouse.jpg", alt: "Toulouse" },
  { src: "/city-nantes.jpg", alt: "Nantes" },
  { src: "/city-montpellier.jpg", alt: "Montpellier" },
];

export function CTASection() {
  return (
    <section className="cta-v2" id="cta">
      {/* City grid */}
      <div className="cta-v2-cities">
        <div className="cta-v2-row">
          {cities.slice(0, 4).map((c, i) => (
            <div key={i} className="cta-v2-city">
              <img src={c.src} alt={c.alt} />
            </div>
          ))}
        </div>
        <div className="cta-v2-row">
          {cities.slice(4, 8).map((c, i) => (
            <div key={i} className="cta-v2-city">
              <img src={c.src} alt={c.alt} />
            </div>
          ))}
        </div>
        {/* Fade overlay */}
        <div className="cta-v2-fade" aria-hidden />
      </div>

      {/* Center content */}
      <div className="cta-v2-content">
        <div className="cta-v2-logo">
          <img src="/logo-rushh.png" alt="Rushh" />
          <span>Rushh</span>
        </div>
        <h2 className="cta-v2-title">
          Le standard intelligent<br />
          au service de l&apos;immobilier
        </h2>
        <p className="cta-v2-sub">
          Rushh déploie des agents IA conversationnels dans la téléphonie des professionnels de l&apos;immobilier. Chaque appel décroché, chaque prospect qualifié, chaque fiche transmise.
        </p>
        <div className="cta-v2-buttons">
          <button
            onClick={() => { window.location.href = "tel:0517948549"; }}
            className="cta-v2-btn-dark"
          >
            <Phone size={16} />
            Appeler notre IA
          </button>
          <button
            onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
            className="cta-v2-btn-blue"
          >
            Réserver une démo
          </button>
        </div>
      </div>
    </section>
  );
}
