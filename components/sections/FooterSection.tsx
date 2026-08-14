"use client";

import Link from "next/link";

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
              <a href="#solution">Comment ça marche</a>
              <a href="#why">Pourquoi Rushh</a>
              <a href="#faq">FAQ</a>
              <a href="#testimonials">Témoignages</a>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact</h3>
            <nav className="footer-links">
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>
              <a href="tel:0517948549">05 17 94 85 49</a>
              <a href="https://calendly.com/gaspardv/rushh" target="_blank" rel="noopener noreferrer">Réserver une démo</a>
            </nav>
          </div>

          {/* Col 4 — Réseaux */}
          <div className="footer-col">
            <h3 className="footer-col-title">Suivez-nous</h3>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/rushh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/rushh.fr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@rushh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>Données hébergées en France · Conforme RGPD</span>
          <nav className="footer-legal">
          </nav>
        </div>
      </div>
    </footer>
  );
}

