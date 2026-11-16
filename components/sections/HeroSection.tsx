import { TestezCTA } from "@/components/ui/testez-cta";

/** Hero plein bleu : barre de navigation transparente, titre léger, sous-titre, un CTA blanc, immeuble détouré qui monte du bas. */
export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="hz">
      <div className="hz-inner">
        <h1 id="home-title" className="hz-title">
          Ne laissez plus passer
          <br className="hz-br" />{" "}
          <span className="hz-title-accent">la moindre opportunité.</span>
        </h1>
        <p className="hz-sub">
          Pendant vos visites, vos rendez-vous ou après la fermeture, Rushh répond à vos appels, qualifie les demandes et
          vous aide à ne manquer aucun mandat potentiel.
        </p>
        <div className="hz-actions">
          <TestezCTA label="Testez Rushh" ariaLabel="Testez Rushh : appeler la ligne de démonstration au 01 76 63 57 09" />
          <div className="hz-proof">
            <div className="hz-proof-faces" aria-hidden="true">
              {/* de gauche à droite : Camille, Thomas, Marie, Florent, David. Chaque visage est à moitié couvert par le suivant ; David, au premier plan, est le seul visible en entier. */}
              {[5, 3, 4, 2, 1].map((n) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={n} className={n === 1 ? "hz-proof-lead" : undefined} src={`/hero-avatar-${n}.webp`} alt="" width={112} height={112} decoding="async" />
              ))}
            </div>
            <div className="hz-proof-text">
              <span className="hz-proof-stars" role="img" aria-label="Note de 5 sur 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
                  </svg>
                ))}
              </span>
              <span className="hz-proof-label">Agences accompagnées</span>
            </div>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hz-building" src="/hero-immeuble-v2.webp" alt="" width={1536} height={1024} decoding="async" />
    </section>
  );
}
