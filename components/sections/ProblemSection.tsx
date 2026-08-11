export function ProblemSection() {
  const cards = [
    {
      title: "En visite",
      desc: "Le téléphone reste dans la poche. L'appel tombe sur messagerie, ou pire, sur rien du tout.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "-2deg",
    },
    {
      title: "Déjà en ligne",
      desc: "Un appel arrive, personne ne peut décrocher. Le prospect raccroche et essaie ailleurs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="1" y1="1" x2="23" y2="23" stroke="#0047C6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "1deg",
    },
    {
      title: "Hors horaires",
      desc: "20h, le week-end, l'agence est fermée — mais les recherches immobilières, elles, ne s'arrêtent jamais.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      rotate: "-1deg",
    },
    {
      title: "Débordé",
      desc: "Trop d'appels, pas assez de mains. Certains passent, d'autres non.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      rotate: "1.5deg",
    },
  ];

  return (
    <section className="section-pad" id="problem" style={{ position: "relative", zIndex: 10 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Le problème</span>
          <h2 className="section-title">Le téléphone ne sait pas<br />que vous êtes occupé.</h2>
          <p className="section-sub">Une visite, un rendez-vous, un appel déjà en cours — et pendant ce temps, un prospect essaie de vous joindre.</p>
        </div>
        <div className="problem-strip">
          {cards.map((c, i) => (
            <div key={i} className="problem-strip-item">
              <div className="float-card-icon">{c.icon}</div>
              <h3 className="float-card-title">{c.title}</h3>
              <p className="float-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
