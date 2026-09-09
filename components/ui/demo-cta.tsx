"use client";

export function DemoCTA({ variant = "blue", label = "Réserver ma démo" }: { variant?: "blue" | "white"; label?: string }) {
  const isWhite = variant === "white";
  return (
    <div className="demo-cta-wrap">
      <a
        href="https://calendly.com/gaspard-david/demo"
        target="_blank"
        rel="noopener noreferrer"
        className={`demo-cta-btn ${isWhite ? "demo-cta-btn--white" : ""}`}
      >
        {label}
      </a>
      <a
        href="https://calendly.com/gaspard-david/demo"
        target="_blank"
        rel="noopener noreferrer"
        className={`demo-cta-arrow ${isWhite ? "demo-cta-arrow--white" : ""}`}
        aria-label={label}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </div>
  );
}
