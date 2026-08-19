"use client";

export function DemoCTA({ variant = "blue" }: { variant?: "blue" | "white" }) {
  const isWhite = variant === "white";
  return (
    <div className="demo-cta-wrap">
      <a
        href="https://calendly.com/gaspardv/rushh"
        target="_blank"
        rel="noopener noreferrer"
        className={`demo-cta-btn ${isWhite ? "demo-cta-btn--white" : ""}`}
      >
        Réserver ma démo
      </a>
      <a
        href="https://calendly.com/gaspardv/rushh"
        target="_blank"
        rel="noopener noreferrer"
        className={`demo-cta-arrow ${isWhite ? "demo-cta-arrow--white" : ""}`}
        aria-label="Réserver ma démo"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </div>
  );
}
