import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { DemoCTA } from "@/components/ui/demo-cta";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OfferAccordions } from "../../offre/OfferAccordions";
import "../../landing-flow.css";
import "../../offre.css";
import "./vs.css";

const TITLE = "Rushh ou Joe AI : comparatif pour agences immobilières | Rushh";
const DESCRIPTION =
  "Rushh ou Joe AI pour les appels de votre agence ? Comparatif factuel et sourcé, vérifié le 28 octobre 2026 : canaux, accompagnement, mise en service.";
const URL = "https://www.rushh.fr/vs/joe-ai";
const JOE_SOURCE = "https://www.getjoe-ai.com/";
const CHECKED_ON = "28 octobre 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Rushh",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 365, height: 365, alt: "Rushh" }],
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION, images: ["https://www.rushh.fr/logo-rushh-og.png"] },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: URL,
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  dateModified: "2026-10-29",
  isPartOf: { "@type": "WebSite", name: "Rushh", url: "https://www.rushh.fr" },
  about: { "@type": "Organization", name: "Rushh", url: "https://www.rushh.fr" },
};

/* ── Icônes (même trait que le reste du site) ── */
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const IconPhone = () => (
  <Svg><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></Svg>
);
const IconFocus = () => (
  <Svg><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></Svg>
);
const IconList = () => (
  <Svg><path d="M9 6h11M9 12h11M9 18h11" /><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" /></Svg>
);
const IconClock = () => (
  <Svg><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></Svg>
);
const IconArrow = () => (
  <Svg><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);

const BENEFITS = [
  {
    icon: <IconPhone />,
    title: "Moins d'appels laissés sans réponse",
    text: "Quand votre équipe est en visite, en rendez-vous ou déjà au téléphone, Rushh décroche et prend la demande en charge.",
  },
  {
    icon: <IconFocus />,
    title: "Moins d'interruptions pour l'équipe",
    text: "Votre équipe ne décroche plus que ce qui mérite vraiment un humain, selon les règles que vous définissez.",
  },
  {
    icon: <IconList />,
    title: "Des demandes mieux qualifiées",
    text: "Le motif, les informations utiles et le contexte sont recueillis avant la transmission : vous reprenez l'échange en sachant de quoi il s'agit.",
  },
];

const FLOW = [
  { title: "Appel entrant", text: "Un vendeur, un acquéreur, un locataire, un copropriétaire ou un prestataire appelle." },
  { title: "Compréhension", text: "Le Standard décroche et identifie la demande dès les premiers mots." },
  { title: "Qualification", text: "Il recueille le motif et les informations utiles à votre équipe." },
  { title: "Action selon vos règles", text: "Orientation, transfert ou prise de rendez-vous, selon ce que vous avez validé." },
  { title: "Votre équipe", text: "Elle reçoit une demande prête à traiter, avec le contexte utile pour reprendre l'échange." },
];

const TILES = [
  { title: "Vos règles", text: "Qui reçoit quelle demande, quand transférer, quand alerter votre équipe." },
  { title: "Vos métiers", text: "Transaction, gérance, syndic, location : chaque métier a ses propres situations." },
  { title: "Vos équipes", text: "Une agence ou plusieurs, avec leurs services et leurs interlocuteurs." },
];

const STEPS = [
  { title: "Analyse", text: "Nous étudions votre fonctionnement, vos règles et vos interlocuteurs." },
  { title: "Conception", text: "Nous construisons les scénarios qui correspondent à votre organisation." },
  { title: "Tests", text: "Nous testons les appels avant toute mise en service." },
  { title: "Validation", text: "Vous validez le fonctionnement." },
  { title: "Mise en service", text: "Le Standard prend en charge vos appels." },
  { title: "Amélioration continue", text: "Nous suivons les performances et ajustons dans le temps." },
];

// Joe AI : uniquement ce que son site officiel annonce (getjoe-ai.com, vérifié le 28 octobre 2026).
const COMPARE = [
  {
    label: "Canaux",
    rushh: "Appels entrants",
    joe: "Téléphone, SMS, WhatsApp, e-mail et site web (offre multicanale)",
  },
  {
    label: "Accompagnement",
    rushh: "Conception, tests, déploiement et suivi par l'équipe Rushh",
    joe: "Configuration avec l'équipe Joe AI, accompagnement à la prise en main",
  },
  {
    label: "Personnalisation",
    rushh: "Un Standard conçu autour de vos règles, métiers et organisation",
    joe: "Nom, voix, ton et règles définis avec le client (échange annoncé de 30 minutes)",
  },
  {
    label: "Mise en service",
    rushh: "Visée sous 5 jours ouvrés après réception des éléments (objectif indicatif)",
    joe: "Annoncée « en quelques heures »",
  },
  {
    label: "Intégrations",
    rushh: "Certains outils selon vos besoins, confirmés avec vous",
    joe: "Logiciels métier listés sur son site, ajout possible sur demande",
  },
  {
    label: "Tarification",
    rushh: "Sur devis",
    joe: "Non affichée sur son site",
  },
];

export default function JoeAIVsPage() {
  return (
    <main className="offre vsj">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Nav />

      <div className="lf">
        {/* ── Hero ── */}
        <section className="of-hero" data-no-reveal aria-labelledby="vs-title">
          <div className="lf-wrap">
            <span className="lf-pill vs-label">Rushh vs Joe AI</span>
            <h1 id="vs-title" className="of-h1">
              Rushh ou Joe AI : quelle solution pour les appels de votre <em>agence immobilière</em> ?
            </h1>
            <p className="vs-hook">Votre agence mérite plus qu&apos;un standard qui décroche.</p>
            <p className="of-lead">
              Avec Rushh, confiez la prise en charge de vos appels à un Standard conçu autour de votre
              organisation, installé, testé et suivi pour vous.
            </p>
            <div className="of-actions">
              <DemoCTA label="Réserver une démo" showArrow={false} />
              <a className="of-ghost" href="#comparatif">
                Voir le comparatif
                <IconArrow />
              </a>
            </div>
            <p className="of-note">Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis</p>
          </div>
        </section>

        {/* ── 1. Bénéfices ── */}
        <section aria-labelledby="benefices-title">
          <div className="lf-wrap">
            <div className="lf-head--center">
              <span className="lf-pill">Ce que vous gagnez</span>
              <h2 id="benefices-title" className="lf-h2">Ce que Rushh change pour votre agence</h2>
            </div>
            <ul className="of-benefits">
              {BENEFITS.map((b) => (
                <li key={b.title} className="lf-card of-benefit">
                  <span className="of-ic">{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 2. Parcours ── */}
        <section aria-labelledby="parcours-title">
          <div className="lf-wrap">
            <div className="lf-head--center">
              <span className="lf-pill">Le parcours d&apos;un appel</span>
              <h2 id="parcours-title" className="lf-h2">Du premier mot à votre équipe</h2>
              <p className="lf-sub">Chaque appel suit les règles validées avec vous.</p>
            </div>
            <ol className="of-flow">
              {FLOW.map((s, i) => (
                <li key={s.title} className={`lf-card of-flow-step${i === FLOW.length - 1 ? " of-flow-step--end" : ""}`}>
                  <span className="of-flow-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 3. Conçu autour de votre agence ── */}
        <section aria-labelledby="sur-mesure-title">
          <div className="lf-wrap">
            <div className="of-bespoke">
              <div>
                <span className="lf-pill">Adapté à vous</span>
                <h2 id="sur-mesure-title" className="lf-h2">Un Standard conçu autour de votre agence</h2>
                <p className="lf-sub">Le Standard suit votre façon de travailler, pas l&apos;inverse.</p>
              </div>
              <ul className="of-tiles">
                {TILES.map((a) => (
                  <li key={a.title} className="of-tile">
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </li>
                ))}
                <li className="of-tile">
                  <details className="of-acc of-acc--tile">
                    <summary>
                      <h3>Vos outils</h3>
                    </summary>
                    <div className="of-acc-body">
                      <p>
                        Rushh peut se connecter à certains outils existants selon vos besoins. Les possibilités
                        sont étudiées et confirmées avec vous. <Link href="/integrations">Voir les intégrations</Link>
                      </p>
                    </div>
                  </details>
                </li>
                <li className="of-tile">
                  <h3>Vos transferts et rendez-vous</h3>
                  <p>Le Standard transfère un appel ou prend un rendez-vous selon le périmètre validé avec vous.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. Mise en place et suivi ── */}
        <section id="mise-en-place" aria-labelledby="mise-en-place-title">
          <div className="lf-wrap of-wrap--steps">
            <div className="lf-head--center">
              <span className="lf-pill">Six étapes</span>
              <h2 id="mise-en-place-title" className="lf-h2">Rushh s&apos;occupe de la mise en place et du suivi</h2>
              <p className="lf-sub">Vous nous expliquez votre organisation, l&apos;équipe Rushh s&apos;occupe du reste.</p>
            </div>
            <details className="of-acc of-acc--label of-acc--steps">
              <summary>Les six étapes en détail</summary>
              <div className="of-acc-body">
                <ol className="of-steps">
                  {STEPS.map((s, i) => (
                    <li key={s.title} className="lf-card of-step">
                      <div className="of-step-top">
                        <span className="of-step-n">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
            <div className="of-delay">
              <span className="of-ic"><IconClock /></span>
              <div>
                <strong>Mise en service visée sous 5 jours ouvrés après réception des éléments nécessaires.</strong>
                <span>
                  Ce délai est un objectif indicatif, détaillé dans les{" "}
                  <Link href="/cgv">conditions générales de vente</Link>. <Link href="/offre">Voir l&apos;offre Rushh</Link>.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Comparatif ── */}
        <section id="comparatif" aria-labelledby="comparatif-title">
          <div className="lf-wrap">
            <div className="lf-head--center">
              <span className="lf-pill">Comparatif factuel</span>
              <h2 id="comparatif-title" className="lf-h2">Rushh et Joe AI : ce que chacun annonce</h2>
              <p className="lf-sub">
                Vous comparez Rushh à Joe AI, ou cherchez une alternative à Joe AI pour les appels de votre agence ? Joe AI propose lui aussi de l&apos;accompagnement et de la personnalisation. Rushh se concentre sur
                les appels entrants, Joe AI annonce une offre multicanale.
              </p>
            </div>

            <table className="vs-cmp">
              <caption className="lf-sr">Comparatif Rushh et Joe AI</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="lf-sr">Critère</span></th>
                  <th scope="col" className="vs-cmp-rushh">
                    <span className="vs-cmp-brand">
                      <img src="/logo-rushh.png" alt="" className="vs-cmp-logo" />
                      Rushh
                    </span>
                  </th>
                  <th scope="col">Joe AI</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td className="vs-cmp-rushh" data-label="Rushh">{r.rushh}</td>
                    <td data-label="Joe AI">{r.joe}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="vs-choose">
              <p>
                <strong>Joe AI</strong> répond si vous cherchez une solution qui couvre aussi les SMS, WhatsApp,
                les e-mails et votre site.
              </p>
              <p>
                <strong>Rushh</strong> répond si vous cherchez un Standard dédié aux appels entrants, conçu autour de
                votre organisation et suivi par une équipe.
              </p>
              <p>
                Les différences de voix et de réactivité ne se lisent pas dans un tableau : jouez les mêmes scénarios
                chez chaque fournisseur, y compris sur la ligne de démonstration Rushh.
              </p>
            </div>

            <p className="vs-source">
              Source Joe AI : <a href={JOE_SOURCE} target="_blank" rel="noopener noreferrer">getjoe-ai.com</a> (page
              d&apos;accueil et FAQ), consultée le {CHECKED_ON}. Ces informations sont celles annoncées par Joe AI ; elles
              peuvent évoluer. Les informations Rushh sont détaillées sur la page <Link href="/offre">L&apos;offre Rushh</Link>.
            </p>
          </div>
        </section>

        {/* ── 6. Tester ── */}
        <section aria-labelledby="test-title">
          <div className="lf-wrap">
            <div className="vs-test">
              <div className="vs-test-copy">
                <span className="lf-pill">Essayez maintenant</span>
                <h2 id="test-title" className="lf-h2">Et si vous testiez le Standard Rushh vous-même ?</h2>
                <p>
                  Appelez ce numéro : il s&apos;agit d&apos;une agence immobilière fictive, située à Paris.
                  Vous entendez comment le Standard prend un appel.
                </p>
              </div>
              <div className="lf-card vs-test-card">
                <span className="of-ic"><IconPhone /></span>
                <span className="vs-test-tag">Agence fictive · Paris</span>
                <a className="vs-tel" href="tel:+33176635709" aria-label="Appeler le Standard Rushh de démonstration au 01 76 63 57 09">
                  01 76 63 57 09
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA final ── */}
        <section aria-labelledby="final-title">
          <div className="lf-wrap">
            <div className="of-final">
              <span className="of-badge">Tarification sur devis</span>
              <h2 id="final-title">Votre équipe s&apos;occupe de ses clients. Rushh s&apos;occupe de vos appels.</h2>
              <div className="of-actions">
                <DemoCTA label="Réserver une démonstration personnalisée" showArrow={false} />
              </div>
              <nav className="of-more" aria-label="Pour aller plus loin">
                <Link href="/offre">L&apos;offre Rushh</Link>
                <Link href="/integrations">Intégrations</Link>
                <Link href="/">Retour à l&apos;accueil</Link>
              </nav>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
      <ScrollReveal />
      <OfferAccordions />
    </main>
  );
}
