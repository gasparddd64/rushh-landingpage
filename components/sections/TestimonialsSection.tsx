"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Enfin une vraie solution. Je n'ai plus à me soucier du téléphone qui sonne toute la journée quand je suis en rendez-vous, je sais que mes appels sont pris en charge, proprement et rapidement.",
    initials: "DH",
    image: "/testimonial-david-houiseau.png" as string | undefined,
    name: "David Houiseau",
    role: "Conseiller immobilier · Sceaux",
    stars: 5,
  },
  {
    quote: "La conversation est fluide, le ton est naturel et l'ambiance « open space » avec le bruit du clavier donne un bon feeling. On a l'impression de parler à une vraie assistante.",
    initials: "FB",
    image: "/testimonial-florent-bringuier.png" as string | undefined,
    name: "Florent Bringuier",
    role: "Gérant · Mon Office Immobilier, Aix",
    stars: 5,
  },
  {
    quote: "Pendant les visites, je laisse mon téléphone de côté. Les appels sont pris en charge et je retrouve les messages en sortant, avec le motif et les coordonnées pour rappeler.",
    initials: "TV",
    image: "/testimonial-thomas-varenne.png" as string | undefined,
    name: "Thomas Varenne",
    role: "Agent immobilier indépendant",
    stars: 5,
  },
  {
    quote: "Les résumés sont clairs. Je sais qui a appelé, pour quel bien et à quel sujet. Au moment de rappeler, j'ai les informations sous les yeux et la conversation reprend facilement.",
    initials: "ML",
    image: "/testimonial-marie-lermes.png" as string | undefined,
    name: "Marie Lermes",
    role: "Directrice d'agence",
    stars: 5,
  },
  {
    quote: "Nous avions besoin d'un relais après la fermeture de l'agence. Les personnes obtiennent une réponse et nous retrouvons leurs messages le lendemain matin. C'est un vrai confort dans notre organisation.",
    initials: "NV",
    image: undefined as string | undefined,
    name: "Nicolas Valmont",
    role: "Responsable location",
    stars: 5,
  },
  {
    quote: "L'équipe a pris le temps de comprendre notre fonctionnement avant l'installation. Nous avons testé les appels ensemble et ajusté les consignes. Le suivi est direct, avec un interlocuteur disponible.",
    initials: "CD",
    image: "/testimonial-camille-delcourt.png" as string | undefined,
    name: "Camille Delcourt",
    role: "Gérante d'agence immobilière",
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
              {item.image ? (
                <img src={item.image} alt={item.name} className="tm-avatar tm-avatar-photo" loading="lazy" />
              ) : (
                <div className="tm-avatar">{item.initials}</div>
              )}
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

const [david, florent, thomas, marie, nicolas, camille] = testimonials;
const columnA = [david, marie];
const columnB = [florent, nicolas];
const columnC = [thomas, camille];

export function TestimonialsSection() {
  return (
    <section className="section-pad tm-marquee-section" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="section-title">Ce que nos clients disent</h2>
        </div>

        <div className="tm-marquee-columns">
          <TestimonialsColumn items={columnA} duration={17} />
          <TestimonialsColumn items={columnB} duration={21} className="tm-marquee-col--md" />
          <TestimonialsColumn items={columnC} duration={19} className="tm-marquee-col--lg" />
        </div>
      </div>
    </section>
  );
}
