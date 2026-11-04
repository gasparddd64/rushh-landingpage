"use client";

export function DemoCTA({
  variant = "blue",
  label = "Réserver une démo",
  showArrow = false,
}: {
  variant?: "blue" | "white" | "hero";
  label?: string;
  showArrow?: boolean;
}) {
  const isWhite = variant === "white";
  if (variant === "hero") {
    return (
      <a
        href="https://calendly.com/gaspard-david/demo"
        target="_blank"
        rel="noopener noreferrer"
        className="hb hb--primary"
      >
        <span className="hb-text">{label}</span>
        <span className="hb-icon" aria-hidden>
          <svg viewBox="0 0 10 10" fill="none" className="hb-arrow"><path d="M3.5415 8.54167L7.08317 5L3.5415 1.45833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <svg viewBox="0 0 10 10" fill="none" className="hb-arrow"><path d="M3.5415 8.54167L7.08317 5L3.5415 1.45833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </a>
    );
  }
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
      {showArrow && (
        <a
          href="https://calendly.com/gaspard-david/demo"
          target="_blank"
          rel="noopener noreferrer"
          className={`demo-cta-arrow ${isWhite ? "demo-cta-arrow--white" : ""}`}
          aria-label={label}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
      )}
    </div>
  );
}
