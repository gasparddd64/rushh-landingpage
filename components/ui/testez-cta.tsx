import Link from "next/link";

/** CTA « Testez Rushh » : mène à la page qui présente la ligne de démonstration (réservation d'un rendez-vous : DemoCTA). */
export function TestezCTA({
  variant = "blue",
  label = "Testez Rushh",
}: {
  variant?: "blue" | "white";
  label?: string;
}) {
  return (
    <div className="demo-cta-wrap">
      <Link href="/demonstrations" className={`demo-cta-btn ${variant === "white" ? "demo-cta-btn--white" : ""}`}>
        {label}
      </Link>
    </div>
  );
}
