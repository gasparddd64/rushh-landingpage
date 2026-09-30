import type { CSSProperties, ReactNode } from "react";

/* ── Visuels des cartes ── */
function VisualAvailability() {
  const ticks = Array.from({ length: 24 }, (_, i) => i);
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden>
      <g className="res-ring-tick">
        {ticks.map((i) => {
          const a = (i / 24) * Math.PI * 2;
          const major = i % 6 === 0;
          const r1 = major ? 50 : 54;
          return (
            <line
              key={i}
              x1={66 + Math.sin(a) * r1}
              y1={66 - Math.cos(a) * r1}
              x2={66 + Math.sin(a) * 60}
              y2={66 - Math.cos(a) * 60}
              stroke="currentColor"
              strokeWidth={major ? 3 : 2}
              strokeLinecap="round"
              opacity={major ? 1 : 0.45}
            />
          );
        })}
      </g>
      <circle cx="66" cy="66" r="34" fill="#fff" stroke="currentColor" strokeOpacity="0.18" />
      <path d="M66 48v19l12 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VisualRules() {
  const items = ["Vos consignes", "Vos métiers", "Vos horaires"];
  return (
    <ul className="res-checks" aria-hidden>
      {items.map((t) => (
        <li key={t}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}

function VisualSheet() {
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden>
      <rect x="30" y="14" width="76" height="98" rx="12" fill="#fff" stroke="currentColor" strokeOpacity="0.2" transform="rotate(6 68 63)" />
      <rect x="24" y="20" width="76" height="98" rx="12" fill="#fff" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="42" cy="42" r="8" fill="currentColor" opacity="0.9" />
      <rect x="56" y="36" width="32" height="5" rx="2.5" fill="currentColor" opacity="0.85" />
      <rect x="56" y="46" width="22" height="4" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="36" y="66" width="52" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="36" y="77" width="44" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="36" y="88" width="50" height="4" rx="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function VisualPhone() {
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden>
      <circle cx="66" cy="66" r="52" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
      <circle cx="66" cy="66" r="36" stroke="currentColor" strokeOpacity="0.28" strokeWidth="2" />
      <circle cx="66" cy="66" r="22" fill="currentColor" />
      <path
        d="M59 57c0 10 7 17 17 17l3-4-5-3-2 2c-3-1-6-4-7-7l2-2-3-5-5 2z"
        fill="#fff"
      />
      <circle cx="92" cy="40" r="10" fill="#22c55e" />
      <polyline points="87 40 91 44 97 36" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STATS: { stat: string; label: string; desc: string; visual: ReactNode }[] = [
  {
    stat: "24h/24",
    label: "Disponibilité continue",
    desc: "Votre accueil téléphonique reste présent quand l'équipe ne peut pas répondre.",
    visual: <VisualAvailability />,
  },
  {
    stat: "100%",
    label: "Selon vos règles",
    desc: "Chaque scénario est conçu autour de vos consignes, de vos métiers et de vos horaires.",
    visual: <VisualRules />,
  },
  {
    stat: "1",
    label: "Fiche par appel",
    desc: "Votre équipe retrouve le motif de l'appel et les coordonnées essentielles.",
    visual: <VisualSheet />,
  },
  {
    stat: "0",
    label: "Appel sans réponse",
    desc: "Les demandes ne restent plus sans réponse lors des pics d'activité.",
    visual: <VisualPhone />,
  },
];

export function ResultsSection() {
  return (
    <section id="resultats" aria-labelledby="resultats-title">
      <div className="lf-wrap">
        <div className="lf-head--split">
          <div className="lf-head-left">
            <span className="lf-pill">La réponse</span>
            <h2 id="resultats-title" className="lf-h2">Rushh, lui, n&apos;est jamais occupé.</h2>
          </div>
          <p className="lf-sub">
            Lorsque votre équipe est indisponible, Rushh comprend la demande et agit selon vos règles.
          </p>
        </div>

        <div className="res-grid">
          {STATS.map((s, i) => (
            <div key={s.stat} className="res-slot" style={{ "--c": i + 1 } as CSSProperties}>
              <article className="lf-card res-card">
                <div>
                  <p className="res-stat">{s.stat}</p>
                  <p className="res-label">{s.label}</p>
                </div>
                <div className="res-visual" aria-hidden>{s.visual}</div>
                <p className="res-desc">{s.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
