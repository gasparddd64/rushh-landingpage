import Link from "next/link";

const links = [
  { text: "Fonctionnalités", href: "#features" },
  { text: "Bénéfices", href: "#benefits" },
  { text: "Comment ça marche", href: "#how" },
  { text: "FAQ", href: "#faq" },
  { text: "Contact", href: "mailto:hello@rushh.fr" },
];

export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row: brand + description */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand">
              <img src="/logo-rushh.png" alt="Rushh" className="footer-logo" />
              <span className="footer-brand-name">Rushh</span>
            </Link>
            <p className="footer-desc">
              Réceptionniste IA pour les agences immobilières.<br />
              Zéro appel manqué, fiches prospects qualifiées, 24h/24.
            </p>
          </div>
          <nav className="footer-links">
            {links.map((link) => (
              <a key={link.text} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Rushh. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Conditions générales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
