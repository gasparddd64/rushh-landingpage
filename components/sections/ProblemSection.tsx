export function ProblemSection() {
  const oldCards = [
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

  const newCards = [
    {
      img: "/problem-en-visite.png",
      imgWebp: "/problem-en-visite.webp",
      title: "En visite",
      desc: "Rushh accueille l'appel et recueille les informations utiles.",
    },
    {
      img: "/problem-deja-en-ligne.png",
      imgWebp: "/problem-deja-en-ligne.webp",
      title: "Déjà en ligne",
      desc: "Rushh prend le nouvel appel sans couper l'échange en cours.",
    },
    {
      img: "/problem-apres-fermeture.png",
      imgWebp: "/problem-apres-fermeture.webp",
      title: "Après la fermeture",
      desc: "Vos clients appellent après vos horaires. Rushh leur répond.",
    },
  ];

  return (
    <section className="section-pad" id="problem">
      <div className="wrap">
        {/* Mobile — original layout */}
        <div className="problem-mobile-only">
          <div className="problem-v2-head">
            <span className="section-eyebrow">Le quotidien d&apos;une agence</span>
            <h2 className="section-title problem-v2-title">
              Vous êtes avec vos clients. Les appels, eux, <em>n&apos;attendent pas</em>.
            </h2>
          </div>

          <div className="problem-v2-grid">
            {oldCards.map((c, i) => (
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

        {/* Desktop — image cards */}
        <div className="problem-desktop-only">
          <div className="problem-v3-head">
            <div className="problem-v3-head-left">
              <span className="section-eyebrow problem-v3-eyebrow">Le quotidien d&apos;une agence</span>
              <h2 className="section-title problem-v3-title">
                Vous êtes avec vos clients. Les appels, eux, <em>n&apos;attendent pas</em>.
              </h2>
              <p className="problem-v3-sub">
                Rushh répond dans chacune de ces situations.
              </p>
            </div>
          </div>

          <div className="problem-v3-grid">
            {newCards.map((c, i) => (
              <div key={i} className="problem-v3-card">
                <div className="problem-v3-card-img">
                  <picture>
                    <source srcSet={c.imgWebp} type="image/webp" />
                    <img src={c.img} alt={c.title} />
                  </picture>
                </div>
                <h3 className="problem-v3-card-title">{c.title}</h3>
                <p className="problem-v3-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
