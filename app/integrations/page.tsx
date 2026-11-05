import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";
import { Nav } from "@/components/sections/Nav";

const baseMetadata: Metadata = {
  title: "Intégrations CRM immobiliers et API | Rushh immo",
  description:
    "Agendas connectés et connexions personnalisées aux logiciels immobiliers, comme Apimo et Whise, selon les API et autorisations disponibles.",
  alternates: {
    canonical: "https://www.rushh.fr/integrations",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/integrations");

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
    name: "Apimo",
    desc: "Connexion personnalisée à Apimo : lecture et transmission des informations convenues selon les accès API et les autorisations disponibles.",
  },
  {
    name: "Whise",
    desc: "Connexion personnalisée à Whise : lecture et transmission des informations convenues selon les accès API et les autorisations disponibles.",
  },
];

export default function IntegrationsPage() {
  return (
    <main className="cgv-page">
      <Nav />

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
              Rushh réalise des connexions personnalisées avec vos logiciels immobiliers lorsque les API et les autorisations nécessaires sont disponibles.
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
