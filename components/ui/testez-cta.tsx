/** CTA « Testez Rushh » : appelle directement la ligne de démonstration (agence fictive). La réservation d'un rendez-vous reste le rôle de DemoCTA. */
export const DEMO_LINE_HREF = "tel:+33176635709";
export const DEMO_LINE_ARIA = "Testez Rushh : appeler la ligne de démonstration au 01 76 63 57 09";

export function TestezCTA({
  variant = "blue",
  label = "Testez Rushh",
}: {
  variant?: "blue" | "white" | "ghost";
  label?: string;
}) {
  return (
    <div className="demo-cta-wrap">
      <a
        href={DEMO_LINE_HREF}
        aria-label={DEMO_LINE_ARIA}
        className={`demo-cta-btn ${variant === "white" ? "demo-cta-btn--white" : ""}${variant === "ghost" ? "demo-cta-btn--ghost" : ""}`}
      >
        {variant === "ghost" && (
          <span className="demo-cta-ic" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
          </span>
        )}
        {label}
      </a>
    </div>
  );
}
