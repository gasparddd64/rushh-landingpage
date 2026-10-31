"use client";

import Link from "next/link";
import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

const NAV_LINKS = [
  { label: "Le standard Rushh", href: "/#relais" },
  { label: "Pourquoi Rushh", href: "/#metiers" },
  { label: "Blog", href: "/ressources" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh immo" className="brand-logo" />
            <span>Rushh<span className="brand-immo">immo</span></span>
          </Link>

          {/* Center links */}
          <div className="nav-links-center">
            {NAV_LINKS.map((l) =>
              l.href.includes("#") ? (
                <a key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </Link>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="nav-cta">
            <DemoCTA label="Réserver une démo" showArrow={false} />
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
          {NAV_LINKS.map((l) =>
            l.href.includes("#") ? (
              <a key={l.href} href={l.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ),
          )}
        </div>
        <div className="mobile-menu-ctas">
          <DemoCTA label="Réserver une démo" />
        </div>
      </div>
    </>
  );
}
