const testimonials = [
  {
    quote: "La conversation est fluide, le ton est naturel et l'ambiance « open space » avec le bruit du clavier donne un bon feeling.",
    initials: "FB",
    name: "Florent Bringuier",
    role: "Gérant — Mon Office Immobilier, Aix",
  },
  {
    quote: "Je reçois une fiche après chaque appel. Je sais exactement qui rappeler en priorité, pourquoi, et avec quoi. C'est un gain de temps énorme.",
    initials: "SR",
    name: "Sophie Roye",
    role: "Négociatrice immobilier",
  },
  {
    quote: "On ne rate plus un seul appel, même quand toute l'équipe est en visite. C'est devenu notre filet de sécurité.",
    initials: "CD",
    name: "Camille Darce",
    role: "Directeur commercial",
  },
  {
    quote: "Ce que j'apprécie c'est qu'on peut l'interrompre naturellement. Elle s'adapte, elle écoute. Pas de réponse en boucle comme les anciens serveurs vocaux.",
    initials: "ML",
    name: "Marc Larre",
    role: "Gérant d'agence",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-pad" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="section-title">Ce que les agences pensent de Rushh.</h2>
          <p className="section-sub">Une voix naturelle, des fiches complètes, zéro appel manqué. Voilà ce que nos clients retiennent.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
