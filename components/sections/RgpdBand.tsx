const POINTS = [
  "Données utilisées uniquement pour traiter les demandes de votre agence",
  "Cadre d'utilisation défini par vous",
]

// Bloc « 100 % RGPD » : même langage que la section chiffres (blanc, filet fin, grand nombre noir).
export function RgpdBand() {
  return (
    <section id="rgpd" className="rg" aria-label="Conformité RGPD">
      <div className="rg-wrap">
        <div className="rg-row">
          <img className="rg-logo" src="/rgpd-logo.webp" width={104} height={104} alt="Logo RGPD" loading="lazy" />
          <div className="rg-main">
            <p className="rg-big">100 % RGPD</p>
            <p className="rg-text">
              Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les demandes de votre agence, dans le cadre que vous définissez.
            </p>
          </div>
          <ul className="rg-points">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
