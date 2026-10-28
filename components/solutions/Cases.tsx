import type { Example } from "@/lib/solutions/markdown";

/** Cartes « exemple fictif » : réplique citée + fiche recueillie. Contenu toujours visible (aucun repli). */
export function Cases({ items, columns = 3 }: { items: Example[]; columns?: 2 | 3 }) {
  return (
    <ul className={`sol-cases${columns === 2 ? " sol-cases--2" : ""}`}>
      {items.map((c) => (
        <li key={c.title} className="lf-card sol-case">
          <span className="sol-tag">Exemple fictif</span>
          <h3>{c.title}</h3>
          <p className="sol-line">« {c.line} »</p>
          <ul className="sol-fiche">
            {c.rows.map(([k, v]) => (
              <li key={k}><span>{k}</span><b>{v}</b></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
