/** CTA « Testez Rushh » : appelle directement la ligne de démonstration (agence fictive). La réservation d'un rendez-vous reste le rôle de DemoCTA. */
export const DEMO_LINE_HREF = "tel:+33176635709";
export const DEMO_LINE_ARIA = "Testez Rushh : appeler la ligne de démonstration au 01 76 63 57 09";

export function TestezCTA({
  variant = "blue",
  label = "Testez Rushh",
}: {
  variant?: "blue" | "white";
  label?: string;
}) {
  return (
    <div className="demo-cta-wrap">
      <a
        href={DEMO_LINE_HREF}
        aria-label={DEMO_LINE_ARIA}
        className={`demo-cta-btn ${variant === "white" ? "demo-cta-btn--white" : ""}`}
      >
        {label}
      </a>
    </div>
  );
}
