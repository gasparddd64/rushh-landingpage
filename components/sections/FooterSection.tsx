import Link from "next/link";

const quickLinks = [
  { text: "Fonctionnalités", href: "#features" },
  { text: "Bénéfices", href: "#benefits" },
  { text: "Comment ça marche", href: "#how" },
  { text: "FAQ", href: "#faq" },
  { text: "Contact", href: "mailto:hello@rushh.fr" },
];

const legalLinks = [
  { text: "CGV", href: "#" },
  { text: "RGPD", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-card">
        <div className="footer-v2-top">
          <div className="footer-v2-brand-col">
            <Link href="/" className="footer-v2-brand">
              <img src="/logo-rushh.png" alt="Rushh" className="footer-v2-logo" />
              <span className="footer-v2-name">Rushh</span>
            </Link>
            <p className="footer-v2-tagline">
              Le standard intelligent<br />
              au service de l&apos;immobilier
            </p>
            <p className="footer-v2-copy">&copy; 2026 Rushh. Tous droits réservés.</p>
          </div>

          <div className="footer-v2-links-col">
            <p className="footer-v2-links-title">Liens rapides</p>
            <div className="footer-v2-links">
              {quickLinks.map((l) => (
                <a key={l.text} href={l.href} className="footer-v2-link">{l.text}</a>
              ))}
            </div>
          </div>

          <div className="footer-v2-links-col">
            <p className="footer-v2-links-title">Légal</p>
            <div className="footer-v2-links">
              {legalLinks.map((l) => (
                <a key={l.text} href={l.href} className="footer-v2-link">{l.text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
