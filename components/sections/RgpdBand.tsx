function ShieldIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8.2 7.5 9.5 4.4-1.3 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12.2 2.3 2.3 4.2-4.6" />
    </svg>
  )
}

const POINTS = [
  "Données utilisées uniquement pour traiter les demandes de votre agence",
  "Cadre d'utilisation défini par vous",
]

// Encart distinct « 100 % RGPD », juste avant la FAQ.
export function RgpdBand() {
  return (
    <section id="rgpd" className="rg" aria-label="Conformité RGPD">
      <div className="lf-wrap">
        <div className="rg-card">
          <span className="rg-icon"><ShieldIcon /></span>
          <div className="rg-main">
            <p className="rg-big">100 % RGPD</p>
            <p className="rg-text">
              Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les demandes de votre agence, dans le cadre que vous définissez.
            </p>
          </div>
          <ul className="rg-points">
            {POINTS.map((p) => (
              <li key={p}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
