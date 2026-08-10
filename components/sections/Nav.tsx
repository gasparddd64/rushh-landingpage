"use client";

import { useState } from "react";
import { Phone, Zap, Star, HelpCircle, Wrench } from "lucide-react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { TubelightNav } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Fonctionnalités", url: "#solution",  icon: Zap },
  { name: "Pourquoi Rushh ?", url: "#why",      icon: Star },
  { name: "FAQ",              url: "#faq",      icon: HelpCircle },
];

const mobileLinks = [
  { text: "Fonctionnalités",  href: "#solution" },
  { text: "Pourquoi Rushh ?", href: "#why" },
  { text: "FAQ",              href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          {/* Logo */}
          <div className="brand">
            <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
            <span>Rushh</span>
          </div>

          {/* Tubelight nav — center */}
          <div className="nav-tubelight">
            <TubelightNav items={navItems} />
          </div>

          {/* CTA */}
          <div className="nav-cta">
            <DemoCTA />
          </div>

          {/* Hamburger */}
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

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " mobile-menu-open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Fermer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="mobile-menu-links">
          {mobileLinks.map((l) => (
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
          <DemoCTA />
        </div>
      </div>
    </>
  );
}
