"use client";

export function BenefitsSection() {
  const cards = [
    {
      title: "Répond aux appels",
      desc: "Zéro appel manqué, même la nuit",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="4" r="3" fill="#0000FF" stroke="none"/>
        </svg>
      ),
      rotate: "-2deg",
    },
    {
      title: "Qualifie les leads",
      desc: "Questions ciblées sur budget, type de bien, localisation",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "1deg",
    },
    {
      title: "Prend des RDV",
      desc: "Connecté à vos agendas (Google, Outlook, etc.)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 16l2 2 4-4" stroke="#0000FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "-1.5deg",
    },
    {
      title: "Génère une synthèse d'appel",
      desc: "Résumé, transcription, audio accessibles en 1 clic",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M8 13h8M8 17h5" stroke="#0000FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "2deg",
    },
    {
      title: "Transfère à vos équipes",
      desc: "Si demande urgente ou complexe",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 8l2 2-2 2" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "-1deg",
    },
    {
      title: "Remonte dans votre CRM",
      desc: "Hektor, Apimo, Whise, etc.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 16l-3 3M16 16l3 3" stroke="#0000FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "1.5deg",
    },
  ];

  return (
    <section className="section-pad" id="benefits" style={{ background: "white" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Fonctionnalités</span>
          <h2 className="section-title">Tout ce que Rushh fait pour vous.</h2>
          <p className="section-sub">De la réception d&apos;appel jusqu&apos;à votre CRM, tout est automatisé.</p>
        </div>
        <div className="float-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              className="float-card"
              style={{ "--card-rotate": c.rotate } as React.CSSProperties}
            >
              <div className="float-card-icon">
                {c.icon}
              </div>
              <h3 className="float-card-title">{c.title}</h3>
              <p className="float-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
