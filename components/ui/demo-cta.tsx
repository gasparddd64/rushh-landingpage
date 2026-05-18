"use client";

export function DemoCTA({ variant = "blue" }: { variant?: "blue" | "white" }) {
  const isWhite = variant === "white";
  return (
    <div className="demo-cta-wrap">
      <button
        onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
        className={`demo-cta-btn ${isWhite ? "demo-cta-btn--white" : ""}`}
      >
        Réserver une démo
      </button>
      <button
        onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
        className={`demo-cta-arrow ${isWhite ? "demo-cta-arrow--white" : ""}`}
        aria-label="Réserver une démo"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}
