export function ProblemSection() {
  const cards = [
    {
      img: "/metier-transaction.png",
      title: "En visite",
      desc: "Pendant un rendez-vous, Rushh accueille les appels et recueille les informations utiles.",
    },
    {
      img: "/metier-gerance.png",
      title: "Déjà en ligne",
      desc: "Votre équipe échange déjà. Rushh traite le nouvel appel sans couper la conversation en cours.",
    },
    {
      img: "/metier-syndic.png",
      title: "Après la fermeture",
      desc: "Vos clients continuent d'appeler après vos horaires. Rushh leur apporte une réponse.",
    },
  ];

  return (
    <section className="section-pad" id="problem">
      <div className="wrap">
        <div className="problem-v3-head">
          <div className="problem-v3-head-left">
            <span className="section-eyebrow">Le quotidien d&apos;une agence</span>
            <h2 className="section-title problem-v3-title">
              Vous êtes avec vos clients. Les appels, eux, <em>n&apos;attendent pas</em>.
            </h2>
          </div>
          <p className="problem-v3-sub">
            En visite, déjà en ligne ou après la fermeture : votre standard doit continuer de répondre.
          </p>
        </div>

        <div className="problem-v3-grid">
          {cards.map((c, i) => (
            <div key={i} className="problem-v3-card">
              <div className="problem-v3-card-img">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="problem-v3-card-title">{c.title}</h3>
              <p className="problem-v3-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
