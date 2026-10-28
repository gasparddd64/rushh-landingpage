"use client";

import Link from "next/link";
import { DemoCTA } from "@/components/ui/demo-cta";

export function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="wrap">

        {/* Top CTA banner */}
        <div className="footer-cta-banner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">Le prochain contact compte.</span>
            <h2 className="footer-cta-title">
              Vos équipes ne peuvent pas toujours répondre.<br />
              Rushh, si<span className="footer-cta-dot">.</span>
            </h2>
          </div>
          <div className="footer-cta-action">
            <DemoCTA label="Réserver une démo" />
            <span className="footer-cta-caption">Découvrez comment Rushh peut s&apos;adapter à votre organisation.</span>
          </div>
        </div>

        <div className="footer-grid">

          {/* Col 1 — Brand + tagline */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <img src="/logo-rushh.png" alt="Rushh" style={{ width: 32, height: 32, objectFit: "contain" }} />
              <span>Rushh</span>
            </Link>
            <p className="footer-tagline">
              Le Standard téléphonique IA<br />
              pensé pour l&apos;immobilier.
            </p>
            <span className="footer-badge">À vos côtés, 24h/24</span>
          </div>

          {/* Col 2 — Navigation */}
          <div className="footer-col footer-col--nav">
            <h3 className="footer-col-title">Navigation</h3>
            <nav className="footer-links">
              <Link href="/#relais">Comment ça marche</Link>
              <Link href="/#metiers">Pourquoi Rushh</Link>
              <Link href="/#testimonials">Témoignages</Link>
              <Link href="/#faq">FAQ</Link>
              <a href="/vs/joe-ai">Rushh vs Joe AI</a>
              <Link href="/ressources">Ressources</Link>
              <Link href="/vs/fonio">Rushh vs Fonio</Link>
              <Link href="/comparatif/standards-telephoniques-ia-immobilier">Comparatif des standards IA</Link>
              <Link href="/offre">L&apos;offre Rushh</Link>
              <Link href="/demonstrations">Démonstration</Link>
              <Link href="/solutions/transaction-immobiliere">Transaction</Link>
              <Link href="/solutions/mandataires-immobiliers">Mandataires</Link>
              <Link href="/solutions/gestion-locative">Gestion locative</Link>
              <Link href="/solutions/syndics">Syndics</Link>
              <Link href="/solutions/multi-sites">Multi-agences</Link>
              <Link href="/integrations">Intégrations</Link>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact</h3>
            <nav className="footer-links">
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>
              <Link href="/contact">Nous contacter</Link>
              <Link href="/about">À propos</Link>
            </nav>
          </div>

          {/* Col 4 — Réseaux */}
          <div className="footer-col">
            <h3 className="footer-col-title">Suivez-nous</h3>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/gaspardv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/rushh.immo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Giant wordmark */}
        <div className="footer-wordmark" aria-hidden="true">
          <picture>
            <source srcSet="/footer-rushh-wordmark.webp" type="image/webp" />
            <img src="/footer-rushh-wordmark.png" alt="" className="footer-wordmark-img" />
          </picture>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Rushh. Tous droits réservés.</span>
          <span className="footer-rgpd">
            <img src="/rgpd-logo.webp" width={20} height={20} alt="" loading="lazy" />
            Conforme au RGPD
          </span>
          <nav className="footer-legal">
            <Link href="/cgv">CGV</Link>
            <Link href="/privacy">Confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
