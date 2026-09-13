"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Enfin une vraie solution. Je n'ai plus à me soucier du téléphone qui sonne toute la journée quand je suis en rendez-vous, je sais que mes appels sont pris en charge, proprement et rapidement.",
    initials: "DH",
    name: "David Houiseau",
    role: "Conseiller immobilier · Sceaux",
    stars: 5,
  },
  {
    quote: "La conversation est fluide, le ton est naturel et l'ambiance « open space » avec le bruit du clavier donne un bon feeling. On a l'impression de parler à une vraie assistante.",
    initials: "FB",
    name: "Florent Bringuier",
    role: "Gérant · Mon Office Immobilier, Aix",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="tm-stars">
      {Array.from({ length: count }).map((_, s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsColumn({
  items,
  duration = 15,
  className = "",
}: {
  items: typeof testimonials;
  duration?: number;
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`tm-marquee-col ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="tm-marquee-track"
      >
        {loop.map((item, i) => (
          <div className="tm-marquee-card" key={i}>
            <Stars count={item.stars} />
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
      </motion.div>
    </div>
  );
}

const [david, florent] = testimonials;
const columnA = [david, florent];
const columnB = [florent, david];
const columnC = [david, florent];

export function TestimonialsSection() {
  return (
    <section className="section-pad tm-marquee-section" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="section-title">Ce que nos clients disent</h2>
        </div>

        <div className="tm-marquee-columns">
          <TestimonialsColumn items={columnA} duration={15} />
          <TestimonialsColumn items={columnB} duration={19} className="tm-marquee-col--md" />
          <TestimonialsColumn items={columnC} duration={17} className="tm-marquee-col--lg" />
        </div>
      </div>
    </section>
  );
}
