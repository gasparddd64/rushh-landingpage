"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";

const navLinks = [
  { text: "Fonctionnalités", href: "#features" },
  { text: "Bénéfices", href: "#benefits" },
  { text: "Pourquoi Rushh ?", href: "#why" },
  { text: "Comment ça marche", href: "#how" },
  { text: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
            <span>Rushh</span>
          </div>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.text}><a href={l.href}>{l.text}</a></li>
            ))}
          </ul>
          <div className="nav-cta">
            <button
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              className="nav-cta-btn"
            >
              Réserver une démo
            </button>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`nav-hamburger-bar${open ? " open" : ""}`} />
            <span className={`nav-hamburger-bar${open ? " open" : ""}`} />
            <span className={`nav-hamburger-bar${open ? " open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${open ? " mobile-menu-open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setOpen(false)}
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="mobile-menu-links">
          {navLinks.map((l) => (
            <a key={l.text} href={l.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
              {l.text}
            </a>
          ))}
        </div>
        <div className="mobile-menu-ctas">
          <button
            onClick={() => { window.location.href = "tel:0517948549"; setOpen(false); }}
            className="mobile-menu-cta-phone"
          >
            <Phone size={16} />
            Appeler notre IA
          </button>
          <ButtonColorful
            onClick={() => { window.open("https://calendly.com/hello-rushhmail/30min", "_blank"); setOpen(false); }}
            label="Réserver une démo"
            className="!w-full !rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
