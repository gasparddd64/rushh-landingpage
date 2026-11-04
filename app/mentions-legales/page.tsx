import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

const baseMetadata: Metadata = {
  title: "Mentions légales | Rushh",
  description: "Mentions légales du site rushh.fr : éditeur, directeur de la publication et hébergeur.",
  alternates: {
    canonical: "https://www.rushh.fr/mentions-legales",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/mentions-legales");

export default function MentionsLegalesPage() {
  return (
    <main className="cgv-page">
      <header className="nav">
        <div className="nav-inner" style={{ justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh immo" className="brand-logo" />
            <span>Rushh<span className="brand-immo">immo</span></span>
          </Link>
          <Link href="/" className="nav-link cgv-back-link">
            ← Retour au site
          </Link>
        </div>
      </header>

      <div className="wrap">
        <div className="cgv-hero">
          <span className="section-eyebrow">Légal</span>
          <h1 className="cgv-h1">Mentions légales</h1>
        </div>

        <div className="cgv-content">
          <section className="cgv-article">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site internet <a href="https://www.rushh.fr">https://www.rushh.fr</a> est édité par Gaspard David,
              Entrepreneur Individuel (EI), exerçant sous le nom commercial Rushh.
            </p>
            <ul>
              <li>SIREN : 937 698 983</li>
              <li>SIRET : 937 698 983 00023</li>
              <li>Immatriculation : RCS de Bayonne</li>
              <li>Adresse : 13 Rue du Brise Lames, 64600 Anglet, France</li>
              <li>
                Email : <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>
              </li>
              <li>
                Téléphone : <a href="tel:+33671803711">+33 6 71 80 37 11</a>
              </li>
            </ul>
          </section>

          <section className="cgv-article">
            <h2>2. Directeur de la publication</h2>
            <p>Le directeur de la publication est Gaspard David.</p>
          </section>

          <section className="cgv-article">
            <h2>3. Hébergement du site</h2>
            <p>
              Le site internet <a href="https://www.rushh.fr">https://www.rushh.fr</a> est hébergé par :
            </p>
            <p>
              <strong>Vercel Inc.</strong>
            </p>
            <ul>
              <li>Adresse : 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</li>
              <li>Téléphone : +1 559 288 7060</li>
              <li>Région d&apos;exécution configurée : Paris, France (<code>cdg1</code>)</li>
              <li>
                Site internet :{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  https://vercel.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
