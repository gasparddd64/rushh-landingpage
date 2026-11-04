/** CTA « Testez Rushh » : appelle directement la ligne de démonstration (agence fictive). La réservation d'un rendez-vous reste le rôle de DemoCTA. */
export const DEMO_LINE_HREF = "tel:+33176635709";
export const DEMO_LINE_ARIA = "Testez Rushh : appeler la ligne de démonstration au 01 76 63 57 09";

export function TestezCTA({
  variant = "blue",
  label = "Testez Rushh",
}: {
  variant?: "blue" | "white" | "ghost" | "hero";
  label?: string;
}) {
  if (variant === "hero") {
    return (
      <a href={DEMO_LINE_HREF} aria-label={DEMO_LINE_ARIA} className="hb hb--neutral">
        <span className="hb-text">{label}</span>
        <span className="hb-icon" aria-hidden>
          <svg viewBox="0 0 18 18" fill="none" className="hb-phone">
            <circle cx="9" cy="9" r="8.5" fill="currentColor" opacity="0.22" />
            <path d="M12.6 12.9v1a.7.7 0 0 1-.77.7 7 7 0 0 1-3-1.05 6.9 6.9 0 0 1-2.1-2.1 7 7 0 0 1-1.05-3.05.7.7 0 0 1 .7-.77h1a.7.7 0 0 1 .7.6c.04.35.12.7.25 1a.7.7 0 0 1-.15.75l-.43.43a5.6 5.6 0 0 0 2.1 2.1l.43-.43a.7.7 0 0 1 .75-.15c.33.13.66.21 1 .25a.7.7 0 0 1 .6.7z" fill="currentColor" />
          </svg>
        </span>
      </a>
    );
  }
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
