export function ProblemSection() {
  const cases = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <line x1="12" y1="18" x2="12" y2="18.01"/>
        </svg>
      ),
      title: "En visite",
      desc: "Le téléphone reste dans la poche. L'appel tombe sur messagerie, ou pire, sur rien du tout.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ),
      title: "Déjà en ligne",
      desc: "Un appel arrive, personne ne peut décrocher. Le prospect raccroche et essaie ailleurs.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Hors horaires",
      desc: "20h, le week-end, l'agence est fermée, mais les recherches immobilières, elles, ne s'arrêtent jamais.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: "Débordé",
      desc: "Trop d'appels, pas assez de mains. Certains passent, d'autres non.",
    },
  ];

  return (
    <section className="problem-section">
      <div className="wrap">
        <div className="problem-head">
          <h2 className="problem-title">
            Le téléphone ne sait pas<br className="problem-br" /> que vous êtes occupé.
          </h2>
          <p className="problem-sub">
            Une visite, un rendez-vous, un appel déjà en cours, et pendant ce temps,<br className="problem-br" /> un prospect essaie de vous joindre.
          </p>
        </div>

        <div className="problem-grid">
          {cases.map((c) => (
            <div key={c.title} className="problem-card">
              <div className="problem-icon">{c.icon}</div>
              <h3 className="problem-card-title">{c.title}</h3>
              <p className="problem-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
