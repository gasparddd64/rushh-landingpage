const STEPS = [
  {
    num: "01",
    title: "Appel décroché",
    desc: "Immédiatement, jour et nuit.",
  },
  {
    num: "02",
    title: "Besoin compris",
    desc: "Rushh identifie pourquoi la personne appelle.",
  },
  {
    num: "03",
    title: "Prospect qualifié",
    desc: "Type de projet, budget, secteur recherché.",
  },
  {
    num: "04",
    title: "Action engagée",
    desc: "Rendez-vous proposé, message transmis, ou urgence signalée.",
  },
  {
    num: "05",
    title: "Fiche transmise",
    desc: "Votre équipe reçoit tout, prête à rappeler.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-pad solution-section" id="solution">
      <div className="wrap">

        {/* Header */}
        <div className="section-head">
          <span className="section-eyebrow">La réponse</span>
          <h2 className="section-title">Rushh, lui, n&apos;est jamais occupé.</h2>
          <p className="section-sub">
            Chaque appel est décroché, compris, qualifié, puis transmis à votre agence, prêt à être traité.
          </p>
        </div>

        {/* Flow */}
        <div className="solution-flow">
          {/* Connecting line — desktop */}
          <div className="solution-line" aria-hidden />

          {STEPS.map((s, i) => (
            <div key={i} className="solution-step">
              <div className="solution-marker">
                <span className="solution-num">{s.num}</span>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{s.title}</h3>
                <p className="solution-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="solution-closing">
          Transaction, location ou gestion locative : le scénario s&apos;adapte au métier de votre agence, pas l&apos;inverse.
        </p>

      </div>
    </section>
  );
}
