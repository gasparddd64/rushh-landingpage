export function ProblemSection() {
  const cards = [
    {
      num: "01",
      title: "En visite",
      desc: "Votre attention appartient au client en face de vous.",
    },
    {
      num: "02",
      title: "Déjà en ligne",
      desc: "Un nouvel appel arrive. Votre équipe est déjà mobilisée.",
    },
    {
      num: "03",
      title: "Après la fermeture",
      desc: "Les projets immobiliers continuent après vos horaires.",
    },
  ];

  return (
    <section className="section-pad" id="problem" style={{ position: "relative", zIndex: 10, paddingTop: 200 }}>
      <div className="wrap">
        <div className="problem-v2-head">
          <span className="section-eyebrow">Le quotidien d&apos;une agence</span>
          <h2 className="section-title problem-v2-title">
            Vous êtes sur le terrain.<br />
            Le téléphone, lui, continue.
          </h2>
        </div>

        <div className="problem-v2-grid">
          {cards.map((c, i) => (
            <div key={i} className="problem-v2-card">
              <span className="problem-v2-num">{c.num} /</span>
              <h3 className="problem-v2-card-title">{c.title}</h3>
              <p className="problem-v2-card-desc">{c.desc}</p>
            </div>
          ))}
          <div className="problem-v2-card problem-v2-card--highlight">
            <span className="problem-v2-num problem-v2-num--highlight">Le relais Rushh</span>
            <h3 className="problem-v2-card-title problem-v2-card-title--highlight">Le contact est pris.</h3>
            <p className="problem-v2-card-desc problem-v2-card-desc--highlight">Un accueil, un projet compris, une suite à donner.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
