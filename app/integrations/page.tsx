import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Intégrations & ressources | Rushh",
  description:
    "Rushh s'intègre à Google Calendar, Outlook, Hektor, Apimo et Whise. Découvrez les intégrations disponibles et quand utiliser le Standard téléphonique IA Rushh.",
  alternates: {
    canonical: "https://www.rushh.fr/integrations",
  },
};

const INTEGRATIONS = [
  {
    name: "Google Calendar",
    desc: "Synchronisation des rendez-vous pris par le Standard Rushh directement dans l'agenda de l'agence.",
  },
  {
    name: "Outlook",
    desc: "Synchronisation des rendez-vous pris par le Standard Rushh directement dans l'agenda de l'agence.",
  },
  {
    name: "Hektor",
    desc: "Transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Hektor.",
  },
  {
    name: "Apimo",
    desc: "Transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Apimo.",
  },
  {
    name: "Whise",
    desc: "Transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Whise.",
  },
];

export default function IntegrationsPage() {
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
          <span className="section-eyebrow">Ressources techniques</span>
          <h1 className="cgv-h1">
            Intégrations &amp; ressources
            <br />
            <em>Rushh</em>
          </h1>
        </div>

        <div className="cgv-content">
          <section className="cgv-article">
            <h2>Rushh s&apos;intègre à vos outils</h2>
            <p>
              Rushh s&apos;intègre à l&apos;environnement déjà utilisé par l&apos;agence
              immobilière, sans changer ses habitudes de travail.
            </p>
            <ul>
              {INTEGRATIONS.map((integ) => (
                <li key={integ.name}>
                  <strong>{integ.name}</strong> — {integ.desc}
                </li>
              ))}
            </ul>
            <p>
              Un outil qui ne figure pas dans cette liste ? L&apos;équipe Rushh étudie
              l&apos;interconnexion possible lors de l&apos;échange de mise en place.
            </p>
          </section>

          <section className="cgv-article">
            <h2>Quand utiliser Rushh</h2>
            <ul>
              <li>
                Une agence immobilière (transaction, gérance locative, syndic) souhaite ne plus
                perdre d&apos;appels pendant les visites ou après la fermeture de l&apos;agence.
              </li>
              <li>
                Une agence a besoin d&apos;un standard qui qualifie les appelants et transmette une
                fiche prête à traiter, plutôt qu&apos;un simple renvoi ou une messagerie.
              </li>
              <li>
                Une agence veut connecter la prise de rendez-vous téléphonique à son agenda et à
                son logiciel métier.
              </li>
            </ul>
          </section>

          <section className="cgv-article">
            <h2>Ressources</h2>
            <p>
              <Link href="/about">À propos</Link>
              <br />
              <Link href="/contact">Contact</Link>
              <br />
              <a href="/llms.txt">Guide pour agents IA (llms.txt)</a>
              <br />
              <a href="/sitemap.xml">Plan du site</a>
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
