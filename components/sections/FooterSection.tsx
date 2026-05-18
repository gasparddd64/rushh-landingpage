import Link from "next/link";

const links = [
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
    <footer className="footer-joe">
      <div className="footer-joe-inner">
        <div className="footer-joe-top">
          <div className="footer-joe-brand-col">
            <Link href="/" className="footer-joe-brand">
              <img src="/logo-rushh.png" alt="Rushh" className="footer-joe-logo" />
              <span className="footer-joe-name">Rushh</span>
            </Link>
            <p className="footer-joe-tagline">
              Le standard intelligent<br />
              pour les agences immobilières
            </p>
            <p className="footer-joe-copy">&copy; 2026 Rushh. Tous droits réservés.</p>
          </div>

          <div className="footer-joe-links-wrap">
            <div className="footer-joe-links">
              {links.map((l) => (
                <a key={l.text} href={l.href} className="footer-joe-link">{l.text}</a>
              ))}
            </div>
            <div className="footer-joe-links">
              {legalLinks.map((l) => (
                <a key={l.text} href={l.href} className="footer-joe-link">{l.text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
