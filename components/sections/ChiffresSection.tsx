import { Stats } from "@/components/ui/stats"

export function ChiffresSection() {
  return (
    <section id="chiffres" className="nb-section" aria-label="Rushh en chiffres">
      <div className="nb-wrap">
        <Stats
          hero={{ value: "+10 000", label: "minutes de conversations traitées" }}
          heroNote="Depuis les débuts de Rushh."
          photo={{
            src: "/chiffres-immeuble.webp",
            alt: "Façade d'un immeuble haussmannien sous un ciel bleu",
          }}
          stats={[
            { value: "92", unit: "%", label: "d'appels traités avec succès" },
            { value: "+7", unit: "h", label: "rendues aux équipes chaque semaine" },
            { value: "1,5", label: "mandat potentiel récupéré / mois*" },
          ]}
        />
        <p className="nb-note">*Estimation basée sur les opportunités prises en charge.</p>
      </div>
    </section>
  )
}
