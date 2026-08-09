"use client";

export function BenefitsSection() {
  const cards = [
    {
      title: "Prend des RDV",
      desc: "Le rendez-vous est pris directement dans votre agenda.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 16l2 2 4-4" stroke="#0047C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "-1.5deg",
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
          <path d="M20 8l2 2-2 2" stroke="#0047C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "-1deg",
    },
    {
      title: "Remonte dans votre CRM",
      desc: "Vos infos remontent directement là où vous travaillez déjà.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 16l-3 3M16 16l3 3" stroke="#0047C6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "1.5deg",
    },
  ];

  return (
    <section className="section-pad" id="benefits" style={{ background: "white" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Bénéfices</span>
          <h2 className="section-title">Tout ce que Rushh fait pour vous.</h2>
          <p className="section-sub">De l&apos;appel à la fiche transmise, rien ne vous échappe.</p>
        </div>
        <div className="float-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
