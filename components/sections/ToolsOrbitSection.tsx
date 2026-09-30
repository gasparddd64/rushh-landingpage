import type { CSSProperties } from "react";

const TOOLS = [
  { name: "Google Calendar", logo: "/logo-gcal.png", fill: false },
  { name: "Outlook", logo: "/logo-outlook.png", fill: false },
  { name: "Hektor", logo: "/logo-hektor.png", fill: false },
  { name: "Apimo", logo: "/logo-apimo.png", fill: true },
  { name: "Whise", logo: "/logo-whise.png", fill: false },
];

// 30 tuiles réparties à intervalles réguliers sur la courbe (6 passages par outil)
const TILES = Array.from({ length: 30 }, (_, k) => ({ k, tool: TOOLS[k % TOOLS.length] }));

export function ToolsOrbitSection() {
  return (
    <section className="orb-section" id="outils" aria-labelledby="outils-title">
      <div className="orb">
        <div className="orb-stage" aria-hidden>
          <div className="orb-path">
            {TILES.map(({ k, tool }) => (
              <div
                key={k}
                className={`orb-tile${tool.fill ? " orb-tile--fill" : ""}`}
                style={{ "--k": k } as CSSProperties}
              >
                <img src={tool.logo} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="orb-copy">
          <span className="lf-pill">Vos outils</span>
          <h2 id="outils-title" className="lf-h2">Rushh s&apos;intègre à vos outils.</h2>
          <p className="lf-sub">
            Connectez Rushh à votre environnement existant, sans changer vos habitudes.
          </p>
          <p className="orb-note">
            Votre outil n&apos;est pas dans la liste ? Parlez-nous de votre environnement lors de l&apos;échange.
          </p>
          <ul className="lf-sr">
            {TOOLS.map((t) => (
              <li key={t.name}>{t.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
