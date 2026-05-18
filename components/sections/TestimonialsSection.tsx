"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "La conversation est fluide, le ton est naturel et l'ambiance « open space » avec le bruit du clavier donne un bon feeling. On a l'impression de parler à une vraie assistante.",
    initials: "FB",
    name: "Florent Bringuier",
    role: "Gérant — Mon Office Immobilier, Aix",
    stars: 5,
  },
  {
    quote: "Je reçois une fiche après chaque appel. Je sais exactement qui rappeler en priorité, pourquoi, et avec quoi. C'est un gain de temps énorme au quotidien.",
    initials: "SR",
    name: "Sophie Roye",
    role: "Négociatrice immobilier",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="section-pad" id="testimonials">
      <div className="wrap">
        {/* Header row */}
        <div className="tm-header">
          <div>
            <span className="section-eyebrow">Témoignages</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>Ce que nos clients disent</h2>
          </div>
          <div className="tm-arrows">
            <button
              className="tm-arrow"
              onClick={() => setActive(active === 0 ? testimonials.length - 1 : active - 1)}
              aria-label="Précédent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              className="tm-arrow"
              onClick={() => setActive(active === testimonials.length - 1 ? 0 : active + 1)}
              aria-label="Suivant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="tm-content">
          {/* Left: image */}
          <div className="tm-image">
            <img src="/testimonial-agent.jpg" alt="Agent immobilier au téléphone" className="tm-image-photo" />
          </div>

          {/* Right: 2 cards stacked */}
          <div className="tm-cards">
            {testimonials.map((item, i) => (
              <div key={i} className={`tm-card ${active === i ? "tm-card--active" : ""}`}>
                <div className="tm-stars">
                  {Array.from({ length: item.stars }).map((_, s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="tm-quote">{item.quote}</p>
                <div className="tm-author">
                  <div className="tm-avatar">{item.initials}</div>
                  <div>
                    <div className="tm-name">{item.name}</div>
                    <div className="tm-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
