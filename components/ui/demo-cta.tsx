"use client";

/** CTA « Réserver une démo » (Calendly) : un seul design sur tout le site, noir au survol. */
export function DemoCTA({
  variant = "blue",
  label = "Réserver une démo",
}: {
  /** « white » : version inversée, uniquement sur un fond bleu. */
  variant?: "blue" | "white";
  label?: string;
  /** Conservé pour compatibilité : le rond fléché n'existe plus. */
  showArrow?: boolean;
}) {
  return (
    <div className="demo-cta-wrap">
      <a
        href="https://calendly.com/gaspard-david/demo"
        target="_blank"
        rel="noopener noreferrer"
        className={`demo-cta-btn${variant === "white" ? " demo-cta-btn--white" : ""}`}
      >
        {label}
      </a>
    </div>
  );
}
