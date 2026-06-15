"use client";

import Link from "next/link";

const navLinks = [
  { text: "Fonctionnalités", href: "#features" },
  { text: "Bénéfices", href: "#benefits" },
  { text: "Comment ça marche", href: "#how" },
  { text: "FAQ", href: "#faq" },
];

const contactLinks = [
  { text: "Contact", href: "mailto:hello@rushh.fr" },
  { text: "CGV", href: "#" },
  { text: "RGPD", href: "#" },
];

export function FooterSection() {
  return (
    <footer style={{ background: "#f8f9fb", borderTop: "1px solid var(--line)", padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "52px 0 28px" }}>

        {/* Top: 3 columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 48,
          alignItems: "flex-start",
          marginBottom: 40,
        }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--ink)", marginBottom: 16, marginLeft: "-5px" }}>
              <img src="/logo-rushh.png" alt="Rushh" style={{ width: 34, height: 34, objectFit: "contain" }} />
              <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em" }}>Rushh</span>
            </Link>
            <p style={{ fontSize: 21, fontWeight: 800, color: "var(--ink)", lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Le standard intelligent<br />
              pour les agences immobilières
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>
              &copy; 2026 Rushh. Tous droits réservés.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <a key={l.text} href={l.href} style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact & Legal */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>
              Contact & Légal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactLinks.map((l) => (
                <a key={l.text} href={l.href} style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "var(--muted-2)" }}>Données hébergées en France · Conforme RGPD</span>
          <span style={{ fontSize: 12, color: "var(--muted-2)" }}>05 17 94 85 49</span>
        </div>
      </div>
    </footer>
  );
}
