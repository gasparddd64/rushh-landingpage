import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

const baseMetadata: Metadata = {
  title: "À propos de Rushh immo | Standard téléphonique IA pour l'immobilier",
  description:
    "Rushh conçoit et déploie le Standard téléphonique IA pensé pour l'immobilier. Découvrez qui édite Rushh, sa mission et ses coordonnées.",
  alternates: {
    canonical: "https://www.rushh.fr/about",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/about");

export default function AboutPage() {
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
          <span className="section-eyebrow">À propos</span>
          <h1 className="cgv-h1">
            À propos de <em>Rushh immo</em>
          </h1>
        </div>

        <div className="cgv-content">
          <section className="cgv-article">
            <h2>Le Standard téléphonique IA pensé pour l&apos;immobilier</h2>
            <p>
              Rushh conçoit et déploie le Standard téléphonique IA pensé pour l&apos;immobilier :
              un agent vocal qui décroche, qualifie et transmet chaque appel entrant d&apos;une
              agence immobilière, 24 h/24.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Qui édite Rushh</h2>
            <p>
              Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le
              nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro
              937 698 983 (SIRET 937 698 983 00023). L&apos;établissement est situé
              13 Rue du Brise Lames, 64600 Anglet, France.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Notre mission</h2>
            <p>
              Les agences immobilières perdent des appels pendant les visites, après la fermeture,
              ou lorsque l&apos;équipe est occupée. Rushh a été conçu pour que chaque appel entrant
              soit pris en charge selon les règles propres à chaque agence : qualification du
              besoin, prise de rendez-vous, transfert vers le bon interlocuteur ou transmission
              d&apos;une fiche prête à traiter.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Pour qui</h2>
            <p>
              Le Standard Rushh est pensé pour les métiers de l&apos;immobilier : transaction,
              gérance locative et syndic de copropriété. Il s&apos;intègre à l&apos;environnement
              déjà utilisé par l&apos;agence (Google Calendar, Outlook, Apimo, Whise) sans
              changer ses habitudes de travail. Voir le détail sur la page{" "}
              <Link href="/integrations">Intégrations</Link>.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Conforme au RGPD</h2>
            <p>
              Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les
              demandes de l&apos;agence cliente, dans le cadre qu&apos;elle définit. Voir la{" "}
              <Link href="/privacy">politique de confidentialité</Link>.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Contact</h2>
            <p>
              Email : <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>
              <br />
              Téléphone : <a href="tel:+33517948549">+33 5 17 94 85 49</a>
              <br />
              Adresse : 13 Rue du Brise Lames, 64600 Anglet, France
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
