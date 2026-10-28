import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

const baseMetadata: Metadata = {
  title: "Confidentialité | Rushh",
  description:
    "Politique de confidentialité de Rushh : rôles de chacun, données traitées, mesure d'audience et droits des personnes.",
  alternates: {
    canonical: "https://www.rushh.fr/privacy",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/privacy");

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
          <p className="cgv-updated">Dernière mise à jour : 28 octobre 2026</p>
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
            <h2>Qui est responsable de quoi ?</h2>
            <p>
              Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le
              nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro
              937 698 983 (SIRET 937 698 983 00023), 13 Rue du Brise Lames, 64600 Anglet, France.
            </p>
            <p>
              <strong>Appels pris en charge pour une agence cliente.</strong> Pour les traitements réalisés
              exclusivement pour le compte de l&apos;agence dans le cadre de la gestion des appels, l&apos;agence
              cliente agit en principe en qualité de responsable de traitement et Rushh en qualité de
              sous-traitant, sous réserve de la qualification juridique résultant des traitements effectivement
              mis en œuvre. Ces traitements sont encadrés par un accord de traitement de données (DPA) prévu au
              contrat.
            </p>
            <p>
              <strong>Traitements propres à Rushh.</strong> Rushh agit en qualité de responsable de traitement
              pour sa propre gestion commerciale, contractuelle et comptable, pour le support, pour la sécurité
              de ses systèmes, pour le respect de ses obligations légales et pour la mesure d&apos;audience de
              ce site (voir « Cookies et mesure d&apos;audience »).
            </p>
          </section>

          <section className="cgv-article">
            <h2>Données traitées</h2>
            <p>
              Dans le cadre du Standard Rushh, les données traitées incluent notamment : les
              informations recueillies lors des appels entrants pour le compte des agences clientes
              (identité de l&apos;appelant, motif de l&apos;appel, informations de qualification), les données de
              rendez-vous transmises aux outils connectés (agenda, logiciel métier), et les données de contact des
              agences clientes.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Hébergement et sous-traitants</h2>
            <p>
              Pour toute question sur l&apos;hébergement des données et sur les sous-traitants intervenant dans le
              traitement, écrivez à <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>. Les conditions applicables
              sont précisées dans le contrat ou le DPA mentionné ci-dessus.
            </p>
          </section>

          <section className="cgv-article" id="cookies">
            <h2>Cookies et mesure d&apos;audience</h2>
            <p>
              Le site rushh.fr utilise Google Analytics pour mesurer son audience. Cet outil n&apos;est activé qu&apos;avec
              votre accord : avant votre choix, aucun script ni cookie Google Analytics n&apos;est chargé. Vous pouvez
              accepter ou refuser les statistiques avec la même facilité, et modifier votre choix à tout moment avec le
              bouton « Gérer les cookies » en bas de chaque page.
            </p>
            <p>
              Votre choix est mémorisé dans votre navigateur pendant 6 mois, puis la question vous est posée de
              nouveau. Refuser les statistiques n&apos;a aucune conséquence sur l&apos;utilisation du site.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Vos droits</h2>
            <p>
              Toute personne concernée par un traitement de données peut exercer ses droits
              d&apos;accès, de rectification, d&apos;opposition et de suppression en écrivant à{" "}
              <a href="mailto:hello@rushh.fr">hello@rushh.fr</a>. Pour les appels pris en charge pour une agence
              cliente, l&apos;agence est en principe l&apos;interlocuteur pour l&apos;exercice de ces droits.
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
