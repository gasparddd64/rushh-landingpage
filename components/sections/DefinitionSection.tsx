import Link from "next/link";
import { HOME_DEFINITION } from "@/lib/home-definition";

/** Définition de Rushh en texte visible (HTML rendu côté serveur), juste sous l'en-tête de l'accueil. */
export function DefinitionSection() {
  const d = HOME_DEFINITION;
  return (
    <section id="definition" className="df" aria-labelledby="definition-title">
      <div className="lf-wrap">
        <div className="lf-head--center df-head">
          <span className="lf-pill">{d.pill}</span>
          <h2 id="definition-title" className="lf-h2">{d.title}</h2>
          <p className="lf-sub">{d.lead}</p>
        </div>
        <ul className="df-grid">
          {d.points.map((p) => (
            <li key={p.title} className="lf-card df-card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="df-links">
          {d.links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </p>
      </div>
    </section>
  );
}
