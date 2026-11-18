import { Inter } from "next/font/google";

/** Police des avis clients, réservée à ce bloc (même choix que le hero de l'accueil). */
const proofFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

/** Bloc de preuve sociale : cinq visages, cinq étoiles, « 5.0 », « Agences accompagnées » (mêmes éléments que le hero de l'accueil). */
export function SocialProof() {
  return (
    <div className={`sp ${proofFont.className}`}>
      <div className="sp-faces" aria-hidden="true">
        {/* de gauche à droite : Camille, Thomas, Marie, Florent, David */}
        {[5, 3, 4, 2, 1].map((n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={n} src={`/hero-avatar-${n}.webp`} alt="" width={112} height={112} loading="lazy" decoding="async" />
        ))}
      </div>
      <div className="sp-text">
        <span className="sp-rate">
          <span className="sp-stars" role="img" aria-label="Note de 5 sur 5">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
              </svg>
            ))}
          </span>
          <span className="sp-score">5.0</span>
        </span>
        <span className="sp-label">
          Agences <strong>accompagnées</strong>
        </span>
      </div>
    </div>
  );
}
