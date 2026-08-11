"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="wrap">
        <div className="footer-grid">

          {/* Col 1 — Brand + tagline */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <img src="/logo-rushh.png" alt="Rushh" style={{ width: 32, height: 32, objectFit: "contain" }} />
              <span>Rushh</span>
            </Link>
            <p className="footer-tagline">
              Le standard téléphonique<br />
              pour les agences immobilières.
            </p>
            <p className="footer-copy">© 2026 Rushh. Tous droits réservés.</p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="footer-col">
            <h3 className="footer-col-title">Navigation</h3>
            <nav className="footer-links">
              <a href="#solution">Fonctionnalités</a>
              <a href="#why">Pourquoi Rushh</a>
              <a href="#faq">FAQ</a>
              <a href="#testimonials">Témoignages</a>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact</h3>
            <nav className="footer-links">
              <a href="mailto:contact@rushh.fr">contact@rushh.fr</a>
              <a href="tel:0517948549">05 17 94 85 49</a>
              <a href="https://calendly.com/gaspardv/rushh" target="_blank" rel="noopener noreferrer">Réserver une démo</a>
            </nav>
          </div>

          {/* Col 4 — Réseaux */}
          <div className="footer-col">
            <h3 className="footer-col-title">Suivez-nous</h3>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/rushh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/rushh.fr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@rushh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
                <Youtube size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>Données hébergées en France · Conforme RGPD</span>
          <nav className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">CGV</a>
            <a href="#">Politique de confidentialité</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
