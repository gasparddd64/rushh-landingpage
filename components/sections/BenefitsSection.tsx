"use client";

import { useState } from "react";

const slides = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#0047C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Rushh répond et qualifie chaque appel",
    desc: "Plus aucun appel ne reste sans réponse, même la nuit ou le week-end. Rushh décroche instantanément, pose les bonnes questions — budget, type de bien, localisation — et vous transmet une fiche prospect complète.",
    cards: [
      {
        type: "phone-incoming",
        title: "Appel entrant",
        sub: "06 42 18 55 09",
        detail: "Acquéreur — Paris 8e",
        accent: true,
      },
      {
        type: "qualification",
        title: "Qualification",
        items: ["Budget : 450 000 €", "Type : Appartement T3", "Secteur : Paris 8e / 17e"],
      },
      {
        type: "lead-card",
        title: "Nouveau prospect",
        name: "Marie Dupont",
        badge: "Acquéreur",
        score: "92%",
      },
      {
        type: "notification",
        title: "Prospect qualifié",
        sub: "Marie Dupont ajoutée à vos prospects",
        time: "Il y a 2 min",
      },
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#0047C6" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2v6h6" stroke="#0047C6" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 13h8M8 17h5" stroke="#0047C6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Rushh génère une synthèse et transfère si besoin",
    desc: "À la fin de chaque appel, Rushh crée automatiquement un résumé structuré avec transcription et enregistrement audio. Si le prospect demande un rappel urgent ou a une question complexe, Rushh transfère directement à votre équipe.",
    cards: [
      {
        type: "transcript",
        title: "Transcription",
        lines: [
          { speaker: "IA", text: "Quel type de bien recherchez-vous ?" },
          { speaker: "Client", text: "Un T3 lumineux avec balcon..." },
        ],
      },
      {
        type: "summary",
        title: "Synthèse d'appel",
        items: ["Durée : 2m 34s", "Motif : Recherche T3", "Action : Rappel demandé"],
      },
      {
        type: "transfer",
        title: "Transfert en cours",
        sub: "Appel redirigé vers Thomas D.",
        status: "En ligne",
      },
      {
        type: "audio",
        title: "Enregistrement",
        duration: "2:34",
        sub: "Appel du 15 mai 2025",
      },
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0047C6" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#0047C6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 16l2 2 4-4" stroke="#0047C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Rushh prend des RDV et met à jour votre CRM",
    desc: "Connecté à Google Agenda, Outlook et vos principaux CRM immobiliers (Hektor, Apimo, Whise…), Rushh planifie des visites et crée automatiquement les fiches contacts dans vos outils, sans aucune saisie manuelle.",
    cards: [
      {
        type: "calendar",
        title: "Nouveau RDV",
        date: "Lun. 19 mai",
        time: "14:30 — 15:00",
        detail: "Visite T3 — Rue Monceau",
      },
      {
        type: "crm-sync",
        title: "Synchronisation CRM",
        items: ["Hektor ✓", "Apimo ✓", "Google Agenda ✓"],
      },
      {
        type: "contact-created",
        title: "Fiche créée",
        name: "Pierre Martin",
        badge: "Vendeur",
        crm: "Hektor",
      },
      {
        type: "agenda-week",
        title: "Cette semaine",
        events: 7,
        sub: "3 visites, 2 estimations, 2 rappels",
      },
    ],
  },
];

/* ── Mini card components ── */
function BenefitCard({ card, faded }: { card: any; faded: boolean }) {
  const opacity = faded ? 0.4 : 1;
  const style: React.CSSProperties = { opacity, transition: "opacity 0.5s ease" };

  if (card.type === "phone-incoming") {
    return (
      <div className="bf-card" style={style}>
        <div className="bf-card-header">
          <div className="bf-card-dot bf-card-dot--green" />
          <span className="bf-card-title">{card.title}</span>
        </div>
        <p className="bf-card-big">{card.sub}</p>
        <p className="bf-card-sub">{card.detail}</p>
      </div>
    );
  }

  if (card.type === "qualification") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <ul className="bf-card-list">
          {card.items.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.type === "lead-card") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <div className="bf-card-row">
          <div className="bf-card-avatar">
            {card.name.split(" ").map((w: string) => w[0]).join("")}
          </div>
          <div>
            <p className="bf-card-name">{card.name}</p>
            <span className="bf-card-badge">{card.badge}</span>
          </div>
          <span className="bf-card-score">{card.score}</span>
        </div>
      </div>
    );
  }

  if (card.type === "notification") {
    return (
      <div className="bf-card" style={style}>
        <div className="bf-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          <span className="bf-card-title">{card.title}</span>
        </div>
        <p className="bf-card-sub">{card.sub}</p>
        <p className="bf-card-time">{card.time}</p>
      </div>
    );
  }

  if (card.type === "transcript") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <div className="bf-card-transcript">
          {card.lines.map((l: any, i: number) => (
            <div key={i} className={`bf-card-line ${l.speaker === "IA" ? "bf-card-line--ia" : ""}`}>
              <span className="bf-card-speaker">{l.speaker}</span>
              <p>{l.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (card.type === "summary") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <ul className="bf-card-list">
          {card.items.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.type === "transfer") {
    return (
      <div className="bf-card" style={style}>
        <div className="bf-card-header">
          <div className="bf-card-dot bf-card-dot--blue" />
          <span className="bf-card-title">{card.title}</span>
        </div>
        <p className="bf-card-sub">{card.sub}</p>
        <span className="bf-card-status">{card.status}</span>
      </div>
    );
  }

  if (card.type === "audio") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <div className="bf-card-audio">
          <div className="bf-card-play">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
          <div className="bf-card-waveform">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bf-card-wave-bar" style={{ height: `${30 + Math.sin(i * 0.8) * 50 + Math.random() * 20}%` }} />
            ))}
          </div>
          <span className="bf-card-duration">{card.duration}</span>
        </div>
        <p className="bf-card-sub">{card.sub}</p>
      </div>
    );
  }

  if (card.type === "calendar") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <div className="bf-card-cal">
          <div className="bf-card-cal-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047C6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          </div>
          <div>
            <p className="bf-card-name">{card.date}</p>
            <p className="bf-card-sub">{card.time}</p>
          </div>
        </div>
        <p className="bf-card-detail">{card.detail}</p>
      </div>
    );
  }

  if (card.type === "crm-sync") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <ul className="bf-card-list bf-card-list--check">
          {card.items.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.type === "contact-created") {
    return (
      <div className="bf-card" style={style}>
        <span className="bf-card-title">{card.title}</span>
        <div className="bf-card-row">
          <div className="bf-card-avatar">
            {card.name.split(" ").map((w: string) => w[0]).join("")}
          </div>
          <div>
            <p className="bf-card-name">{card.name}</p>
            <span className="bf-card-badge">{card.badge}</span>
          </div>
        </div>
        <p className="bf-card-time">Créé dans {card.crm}</p>
      </div>
    );
  }

  if (card.type === "agenda-week") {
    return (
      <div className="bf-card" style={style}>
        <div className="bf-card-header">
          <span className="bf-card-title">{card.title}</span>
          <span className="bf-card-count">{card.events}</span>
        </div>
        <p className="bf-card-sub">{card.sub}</p>
        <div className="bf-card-bars">
          {["L", "M", "M", "J", "V"].map((d, i) => (
            <div key={i} className="bf-card-bar-col">
              <div className="bf-card-bar" style={{ height: `${[60, 80, 40, 100, 70][i]}%` }} />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export function BenefitsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad" id="benefits" style={{ background: "white" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Fonctionnalités</span>
          <h2 className="section-title">Tout ce que Rushh fait pour vous.</h2>
          <p className="section-sub">De la réception d&apos;appel jusqu&apos;à votre CRM, tout est automatisé.</p>
        </div>

        <div className="bf-slider">
          {slides.map((slide, idx) => (
            <div key={idx} className={`bf-slide ${active === idx ? "bf-slide--active" : ""}`}>
              {/* Left: 4 cards grid */}
              <div className="bf-cards-grid">
                {slide.cards.map((card, ci) => (
                  <BenefitCard key={ci} card={card} faded={active !== idx} />
                ))}
              </div>

              {/* Right: text */}
              <div className="bf-text">
                <div className="bf-icon">{slide.icon}</div>
                <h3 className="bf-title">{slide.title}</h3>
                <p className="bf-desc">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="bf-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`bf-dot ${active === i ? "bf-dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
