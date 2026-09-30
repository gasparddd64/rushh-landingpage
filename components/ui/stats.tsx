import { SpinningNumber } from "@/components/ui/spinning-number"

export type Stat = {
  value: string
  unit?: string
  label: string
}

// Bandeau de chiffres sobre : un grand nombre + une photo, puis trois chiffres en ligne.
// Fond blanc, texte noir ; les nombres défilent à l'arrivée (rouleaux).
export function Stats({
  hero,
  heroNote,
  photo,
  stats,
}: {
  hero: Stat
  heroNote: string
  photo: { src: string; alt: string }
  stats: Stat[]
}) {
  return (
    <div>
      <div className="nb-top">
        <div className="nb-hero">
          <div className="nb-hero-num">
            <SpinningNumber value={hero.value} />
          </div>
          <div className="nb-hero-label">
            <strong>{hero.label}</strong>
            <span>{heroNote}</span>
          </div>
        </div>
        <div className="nb-photo">
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </div>
      </div>

      <div className="nb-row" role="list">
        {stats.map((s) => (
          <div key={s.label} className="nb-stat" role="listitem">
            <div className="nb-stat-num">
              <SpinningNumber value={s.value} />
              {s.unit && <small>{s.unit}</small>}
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
