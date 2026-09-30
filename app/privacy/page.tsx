import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Confidentialité | Rushh",
  description:
    "Politique de confidentialité de Rushh : responsable de traitement, données traitées par le Standard téléphonique IA, hébergement et droits des personnes.",
  alternates: {
    canonical: "https://www.rushh.fr/privacy",
  },
};

export default function PrivacyPage() {
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
          <span className="section-eyebrow">Légal</span>
          <h1 className="cgv-h1">
            Politique de
            <br />
            confidentialité
          </h1>
          <p className="cgv-updated">Dernière mise à jour : 30 septembre 2026</p>
        </div>

        <div className="cgv-content">
          <section className="cgv-article">
            <h2>Objet</h2>
            <p>
              Cette page décrit, à titre informatif, comment Rushh traite les données dans le cadre
              du Standard téléphonique IA fourni aux agences immobilières clientes. Pour le détail
              contractuel complet du traitement des données, se reporter au contrat ou au DPA
              (Data Processing Agreement) applicable, mentionné dans les{" "}
              <Link href="/cgv">Conditions Générales de Vente</Link>.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Responsable de traitement</h2>
            <p>
              Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le
              nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro
              937 698 983 (SIRET 937 698 983 00023), 13 Rue du Brise Lames, 64600 Anglet, France.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Données traitées</h2>
            <p>
              Dans le cadre du Standard Rushh, les données traitées incluent notamment : les
              informations recueillies lors des appels entrants (identité de l&apos;appelant, motif
              de l&apos;appel, informations de qualification), les données de rendez-vous transmises
              aux outils connectés (agenda, logiciel métier), et les données de contact des agences
              clientes.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Hébergement</h2>
            <p>Les données sont hébergées en France.</p>
          </section>

          <section className="cgv-article">
            <h2>Vos droits</h2>
            <p>
              Toute personne concernée par un traitement de données peut exercer ses droits
              d&apos;accès, de rectification, d&apos;opposition et de suppression en écrivant à{" "}
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Contact</h2>
            <p>
              Pour toute question relative à la confidentialité des données, contactez{" "}
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a> ou consultez la page{" "}
              <Link href="/contact">Contact</Link>.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
