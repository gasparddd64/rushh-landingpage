const ROWS = [
  {
    bad: "Templates génériques",
    good: "Analyse de votre fonctionnement et de vos besoins",
  },
  {
    bad: "Scénarios à créer vous-même",
    good: "Parcours d'appels conçus selon vos cas réels",
  },
  {
    bad: "Intégrations à mettre en place",
    good: "Connexion à votre environnement lorsque compatible",
  },
  {
    bad: "Problème ? À vous de diagnostiquer",
    good: "Un interlocuteur Rushh vous accompagne",
  },
  {
    bad: "Évolution ? À vous de reconfigurer",
    good: "Le Standard évolue avec les besoins de votre agence",
  },
  {
    bad: "Vous achetez un outil",
    good: "Vous obtenez un Standard prêt à travailler pour votre agence",
  },
];

export function CompareSection() {
  return (
    <section className="section-pad compare-section">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Rushh n&apos;est pas un logiciel</span>
          <h2 className="section-title">Une agence, pas un outil de plus à configurer.</h2>
        </div>

        <div className="cmp-table">
          {/* Header */}
          <div className="cmp-header">
            <div className="cmp-col-bad">Logiciel classique</div>
            <div className="cmp-col-good">
              <span className="cmp-good-badge">Rushh</span>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div key={i} className="cmp-row">
              <div className="cmp-col-bad">
                <span className="cmp-x">✕</span>
                {row.bad}
              </div>
              <div className="cmp-col-good">
                <span className="cmp-check">✓</span>
                {row.good}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
