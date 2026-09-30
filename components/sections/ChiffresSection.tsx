import { DemoCTA } from "@/components/ui/demo-cta"
import { Stats, type Stat } from "@/components/ui/stats"

const STATS: Stat[] = [
  {
    value: "+100",
    label: "appels traités par jour",
    note: "Chaque appel est décroché et pris en charge.",
  },
  {
    value: "92",
    unit: "%",
    label: "d'appels traités avec succès",
    note: "Une demande comprise, qualifiée et transmise.",
  },
  {
    value: "+10 000",
    unit: "min",
    label: "de conversations traitées",
    note: "Depuis les débuts de Rushh.",
  },
  {
    value: "+7",
    unit: "h",
    label: "rendues aux équipes chaque semaine",
    note: "Moins de temps au téléphone, plus de temps pour leur métier.",
  },
  {
    value: "1,5",
    label: "mandat potentiel récupéré / mois",
    note: "Estimation basée sur les opportunités prises en charge.*",
  },
]

export function ChiffresSection() {
  return (
    <section id="chiffres" className="ch-section" aria-labelledby="chiffres-title">
      <div className="lf-wrap">
        <div className="lf-head--center">
          <span className="lf-pill">Rushh en chiffres</span>
          <h2 id="chiffres-title" className="lf-h2">
            Et si votre prochain appel était déjà pris en charge ?
          </h2>
          <p className="lf-sub">
            Voyons ensemble comment Rushh s&apos;adapterait à votre agence, à vos métiers et à votre façon de travailler.
          </p>
        </div>

        <Stats stats={STATS} className="ch-stats" />

        <div className="ch-cta">
          <DemoCTA label="Réserver une démo" />
        </div>
      </div>
    </section>
  )
}
