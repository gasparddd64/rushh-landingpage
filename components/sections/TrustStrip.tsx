function ShieldIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8.2 7.5 9.5 4.4-1.3 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12.2 2.3 2.3 4.2-4.6" />
    </svg>
  )
}

const FACTS = [
  { value: "24 h/24", label: "Un standard qui répond aussi après la fermeture" },
  { value: "92 %", label: "d'appels traités avec succès" },
  { value: "+10 000", label: "minutes de conversations traitées" },
]

// Bandeau de confiance sous le hero : badge RGPD + trois chiffres clés.
export function TrustStrip() {
  return (
    <div className="ts" aria-label="Rushh en bref">
      <div className="ts-inner">
        <div className="ts-badge">
          <span className="ts-badge-icon"><ShieldIcon /></span>
          <span className="ts-badge-text">
            <strong>100 % RGPD</strong>
            <small>Conformité garantie</small>
          </span>
        </div>
        <ul className="ts-facts">
          {FACTS.map((f) => (
            <li key={f.value} className="ts-fact">
              <span className="ts-fact-value">{f.value}</span>
              <span className="ts-fact-label">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
