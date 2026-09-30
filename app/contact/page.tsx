import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";
import { DemoCTA } from "@/components/ui/demo-cta";

export const metadata: Metadata = {
  title: "Contact Rushh | Standard téléphonique IA pour l'immobilier",
  description:
    "Contactez l'équipe Rushh pour une démonstration du Standard téléphonique IA, ou pour toute question sur un déploiement en cours.",
  alternates: {
    canonical: "https://www.rushh.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="cgv-page">
      <header className="nav">
        <div className="nav-inner" style={{ justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
            <span>Rushh</span>
          </Link>
          <Link href="/" className="nav-link cgv-back-link">
            ← Retour au site
          </Link>
        </div>
      </header>

      <div className="wrap">
        <div className="cgv-hero">
          <span className="section-eyebrow">Contact</span>
          <h1 className="cgv-h1">
            Contacter <em>Rushh</em>
          </h1>
        </div>

        <div className="cgv-content">
          <section className="cgv-article">
            <h2>Coordonnées</h2>
            <p>
              Email : <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>
              <br />
              Téléphone : <a href="tel:+33517948549">+33 5 17 94 85 49</a>
              <br />
              Adresse : 13 Rue du Brise Lames, 64600 Anglet, France
            </p>
          </section>

          <section className="cgv-article">
            <h2>Réserver un échange</h2>
            <p>
              Pour réserver une démonstration du Standard Rushh, utilisez le formulaire de prise
              de rendez-vous ci-dessous, ou écrivez directement à{" "}
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a> en précisant le nom de l&apos;agence
              et le métier concerné (transaction, gérance, syndic).
            </p>
            <div style={{ marginTop: 24 }}>
              <DemoCTA label="Réserver une démo" />
            </div>
          </section>

          <section className="cgv-article">
            <h2>Éditeur</h2>
            <p>
              Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), immatriculé au RCS
              de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023).
            </p>
          </section>

          <section className="cgv-article">
            <h2>Autres ressources</h2>
            <p>
              <Link href="/about">À propos</Link>
              <br />
              <Link href="/integrations">Intégrations</Link>
              <br />
              <Link href="/cgv">Conditions Générales de Vente</Link>
              <br />
              <Link href="/privacy">Confidentialité</Link>
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
