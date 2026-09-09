export function ProblemSection() {
  const cards = [
    {
      num: "01",
      title: "En visite",
      desc: "Votre attention est avec le client en face de vous.",
    },
    {
      num: "02",
      title: "Déjà en ligne",
      desc: "Votre équipe échange déjà. Un autre appel arrive.",
    },
    {
      num: "03",
      title: "Après la fermeture",
      desc: "Vos clients continuent de vous appeler après vos horaires.",
    },
  ];

  return (
    <section className="section-pad" id="problem" style={{ position: "relative", zIndex: 10, paddingTop: 100, paddingBottom: 220 }}>
      <div className="wrap">
        <div className="problem-v2-head">
          <span className="section-eyebrow">Le quotidien d&apos;une agence</span>
          <h2 className="section-title problem-v2-title">
            Vous êtes avec vos clients. Les appels, eux, n&apos;attendent pas.
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
            <h3 className="problem-v2-card-title problem-v2-card-title--highlight">L&apos;appel trouve une réponse.</h3>
            <p className="problem-v2-card-desc problem-v2-card-desc--highlight">La demande est comprise, les informations utiles sont recueillies et votre équipe sait quoi reprendre.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
