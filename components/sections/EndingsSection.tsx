import "@/app/endings.css";

const WITH = [
  "Décroche à chaque appel, même après la fermeture",
  "Pose les questions que vous poseriez",
  "Prend rendez-vous directement dans votre agenda",
  "Vous envoie le résumé par SMS ou e‑mail",
];

const WITHOUT = [
  "Un bip, puis le silence",
  "Aucune information recueillie",
  "Rien dans l’agenda",
  "Vous l’apprenez le lendemain",
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
            18&nbsp;h&nbsp;40, un propriétaire veut faire estimer son appartement. D’un côté, un message que personne ne
            laisse. De l’autre, Mme&nbsp;Durand attendue demain à 9&nbsp;h.
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
            <p className="ed-end">Mme Durand est au rendez-vous d’estimation, demain à 9&nbsp;h.</p>
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
            <p className="ed-end">Aucun message laissé. Le mandat part chez l’agence suivante.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
