import "@/app/endings.css";

const WITH = [
  "L’appel est pris en charge, même après la fermeture.",
  "Le projet de vente est qualifié et les informations essentielles sont recueillies.",
  "Un rendez-vous d’estimation est fixé selon vos disponibilités.",
  "Votre équipe reçoit le récapitulatif et sait exactement de quoi il s’agit.",
];

const WITHOUT = [
  "Le téléphone sonne, puis le répondeur se déclenche.",
  "Mme\u00a0Durand raccroche sans laisser de message.",
  "Vous ne savez même pas qu’elle a appelé.",
  "Elle contacte une autre agence, qui répond à sa demande.",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
function Cross() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}

/** « Deux fins possibles » : le même appel, avec et sans Rushh. */
export function EndingsSection() {
  return (
    <section className="ed" aria-labelledby="ed-title">
      <div className="lf-wrap">
        <div className="lf-head--center ed-head">
          <span className="lf-pill">Avec ou sans Rushh</span>
          <h2 id="ed-title" className="lf-h2">
            Le même appel. Deux fins possibles.
          </h2>
          <p className="lf-sub ed-lead">
            Il est 18&nbsp;h&nbsp;40. Mme&nbsp;Durand souhaite faire estimer son appartement. Votre agence est fermée.
            Voici ce qui se passe.
          </p>
        </div>

        <div className="ed-grid">
          <article className="ed-card ed-card--with" aria-labelledby="ed-with">
            <h3 id="ed-with" className="ed-name">
              Avec Rushh
            </h3>
            <ul className="ed-list">
              {WITH.map((t) => (
                <li key={t}>
                  <span className="ed-ic" aria-hidden>
                    <Check />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ed-end">Demain à 9&nbsp;h, vous avez rendez-vous avec une propriétaire vendeuse.</p>
          </article>

          <article className="ed-card ed-card--without" aria-labelledby="ed-without">
            <h3 id="ed-without" className="ed-name">
              Avec un répondeur
            </h3>
            <ul className="ed-list">
              {WITHOUT.map((t) => (
                <li key={t}>
                  <span className="ed-ic" aria-hidden>
                    <Cross />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ed-end">Une opportunité de mandat perdue, sans même le savoir.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
