import Link from "next/link";
import { TOOLS } from "@/components/sections/ToolsOrbitSection";

/** Bandeau compact « outils » : mêmes logos et même style de tuiles que l'orbite de l'accueil. */
export function ToolsStrip() {
  return (
    <section aria-labelledby="outils-strip-title">
      <div className="lf-wrap">
        <div className="sol-tools">
          <div className="sol-tools-copy">
            <h2 id="outils-strip-title">Rushh s&apos;intègre à vos outils.</h2>
            <p>
              Rushh s&apos;adapte à votre environnement et se connecte à vos outils existants, selon vos besoins.
              Les connexions sont étudiées et confirmées avec vous. Vous utilisez un autre logiciel ? Parlons-en.{" "}
              <Link href="/integrations">Voir les intégrations</Link>
            </p>
          </div>
          <ul className="sol-tools-row" aria-label="Outils connectables">
            {TOOLS.map((t) => (
              <li key={t.name} className={`sol-tool${t.fill ? " sol-tool--fill" : ""}`}>
                <img src={t.logo} alt={t.name} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
