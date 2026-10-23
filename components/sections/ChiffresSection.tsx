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
          ]}
          aside={
            <div className="nb-rgpd" role="listitem">
              <div className="nb-rgpd-head">
                <img className="nb-rgpd-logo" src="/rgpd-logo.webp" width={72} height={72} alt="Logo RGPD" loading="lazy" />
                <p className="nb-rgpd-title">Conforme au RGPD</p>
              </div>
              <p className="nb-rgpd-text">
                Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les demandes de votre organisation, dans le cadre que vous définissez.
              </p>
            </div>
          }
        />
      </div>
    </section>
  )
}
