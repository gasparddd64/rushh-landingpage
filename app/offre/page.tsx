import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { TestezCTA } from "@/components/ui/testez-cta";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BRAND_NAME, orgRef } from "@/lib/brand";
import { RxDiff, RxProof } from "@/components/solutions/premium";
import { OFFRE } from "@/lib/solutions/premium";
import { ToolsStrip } from "@/components/solutions/ToolsStrip";
import { OfferAccordions } from "./OfferAccordions";
import "../landing-flow.css";
import "../offre.css";
import "../solutions/sol.css";

const TITLE = "L'offre Rushh immo : standard téléphonique IA pour l'immobilier";
const DESCRIPTION =
  "L'offre Rushh : un standard téléphonique IA qui prend vos appels 24 h/24, qualifie, fixe vos rendez-vous et classe les demandes. Proposition personnalisée.";
const URL = "https://www.rushh.fr/offre";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 365, height: 365, alt: BRAND_NAME }],
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION, images: ["https://www.rushh.fr/logo-rushh-og.png"] },
};

// JSON-LD factuel : aucun prix, aucune offre chiffrée (proposition personnalisée).
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Standard téléphonique IA Rushh",
  serviceType: "Standard téléphonique alimenté par intelligence artificielle",
  url: URL,
  description:
    "Standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier : appels entrants 24 h/24 et 7 j/7, qualification, rendez-vous sur agendas connectés, transfert d'appel, SMS et e-mails automatiques, plateforme métier. Conception, configuration, connexions, tests, installation, maintenance et suivi assurés par Rushh.",
  provider: orgRef,
  areaServed: { "@type": "Country", name: "France" },
  audience: { "@type": "Audience", audienceType: "Professionnels de l'immobilier" },
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
const IconArrow = () => (
  <Svg><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
const Tick = () => (
  <Svg><path d="m5 12.5 4.5 4.5L19 7.5" /></Svg>
);

const BENEFITS = [
  {
    icon: <IconPhone />,
    title: "Moins d'appels laissés sans réponse",
    text: "Visite, rendez-vous, agence fermée : Rushh prend l'appel.",
  },
  {
    icon: <IconFocus />,
    title: "Moins d'interruptions pour vos équipes",
    text: "Votre équipe ne décroche que ce qui mérite un humain.",
  },
  {
    icon: <IconList />,
    title: "Davantage d'opportunités traitées",
    text: "Chaque demande est qualifiée et classée, prête à être traitée.",
  },
];

const FLOW = [
  { title: "Appel entrant", text: "Un vendeur, un acquéreur, un locataire, un copropriétaire ou un prestataire appelle." },
  { title: "Rushh comprend", text: "Le Standard décroche et identifie la demande dès les premiers mots." },
  { title: "Qualifie et agit", text: "Rendez-vous, transfert ou transmission, selon les règles validées avec vous." },
  { title: "Votre équipe retrouve la demande", text: "Qualifiée, résumée, avec son statut et sa prochaine étape." },
];

const FEATURES = [
  { title: "Appels entrants 24 h/24, 7 j/7", text: "Réponse directe ou renvoi d'appel, selon l'organisation de votre agence." },
  { title: "Qualification", text: "Vendeur, acquéreur, locataire, bailleur ou prestataire." },
  { title: "Rendez-vous", text: "Pris sur vos agendas connectés, selon vos règles." },
  { title: "Transfert d'appel", text: "En direct vers un collaborateur, lorsque son intervention est nécessaire." },
  { title: "SMS et e-mails automatiques", text: "Confirmations et informations, selon les scénarios configurés." },
  { title: "Plateforme métier", text: "Opportunités classées par catégorie, avec coordonnées, résumé, statut et suivi." },
  { title: "Connexions personnalisées", text: "Aux outils disposant d'une API accessible, avec les autorisations nécessaires." },
  { title: "Voix personnalisable", text: "Personnalisation de la voix et clonage vocal, selon la configuration." },
];

const YOU = ["Nous expliquer comment vous travaillez", "Valider le fonctionnement avant le déploiement"];
const RUSHH = [
  "Les scénarios d'appel, conçus pour votre agence",
  "Les connexions à vos outils",
  "La maintenance, le suivi et les ajustements",
];

const ADAPT = [
  { title: "Vos règles", text: "Qui reçoit quelle demande, quand transférer, quand alerter votre équipe." },
  { title: "Vos métiers", text: "Transaction, gérance, syndic, location : chaque métier a ses propres situations." },
  { title: "Votre structure", text: "Une agence ou plusieurs, avec leurs services et leurs interlocuteurs." },
];

const STEPS = [
  { title: "Analyse et configuration", text: "Nous étudions votre fonctionnement et construisons les scénarios qui correspondent à votre organisation." },
  { title: "Tests", text: "Nous testons les appels avant tout déploiement." },
  { title: "Validation", text: "Vous validez le fonctionnement." },
  { title: "Déploiement et suivi", text: "Le Standard prend en charge vos appels ; nous suivons son fonctionnement et ajustons dans le temps." },
];

const RECEIVE = [
  "Une demande qualifiée : motif, coordonnées, résumé et statut.",
  "Orientée vers la bonne personne, selon vos règles.",
];

export default function OffrePage() {
  return (
    <main className="offre">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Nav />

      <div className="lf">
        {/* ── Hero : résultat attendu, puis bénéfices ── */}
        <section className="of-hero" data-no-reveal aria-labelledby="offre-title">
          <div className="lf-wrap">
            <span className="lf-pill">L&apos;offre Rushh</span>
            <h1 id="offre-title" className="of-h1">
              L&apos;offre Rushh : un <em>standard téléphonique</em> IA qui prend vos appels, fixe vos rendez-vous et libère vos équipes.
            </h1>
            <p className="of-lead">
              Rushh répond aux appels entrants de votre agence 24h/24, qualifie les demandes et fixe des rendez-vous sur vos agendas connectés. Notre équipe conçoit, installe et fait fonctionner votre standard pour vous.
              <br />
              Vous vous concentrez sur vos clients. Rushh s&apos;occupe du téléphone.
            </p>
            <div className="of-actions">
              <TestezCTA />
              <a className="of-ghost" href="#mise-en-service">
                Voir comment ça se met en place
                <IconArrow />
              </a>
            </div>
            <p className="of-note">Standard téléphonique alimenté par intelligence artificielle · Proposition personnalisée</p>

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

        {/* ── 1. Ce que le Standard prend en charge ── */}
        <section aria-labelledby="prise-en-charge-title">
          <div className="lf-wrap">
            <div className="lf-head--center">
              <span className="lf-pill">Ce que fait Rushh</span>
              <h2 id="prise-en-charge-title" className="lf-h2">Ce que le Standard Rushh prend en charge</h2>
              <p className="lf-sub">Du premier mot de l&apos;appelant à la transmission à votre équipe, selon les règles validées avec vous.</p>
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
            <ul className="of-features" aria-label="Fonctionnalités">
              {FEATURES.map((f) => (
                <li key={f.title} className="lf-card of-feature">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
            <p className="of-caption of-caption--center">
              Les fonctionnalités activées dépendent de votre organisation et de vos outils.
            </p>
          </div>
        </section>

        {/* ── 2. Accompagnement ── */}
        <section aria-labelledby="accompagnement-title">
          <div className="lf-wrap">
            <div className="lf-head--center">
              <span className="lf-pill">Entièrement géré</span>
              <h2 id="accompagnement-title" className="lf-h2">Une prestation entièrement prise en charge</h2>
              <p className="lf-sub">Vous n&apos;avez aucun logiciel à configurer : tout est assuré par l&apos;équipe Rushh.</p>
            </div>
            <div className="of-split">
              <div className="lf-card of-panel">
                <h3>De votre côté</h3>
                <ul className="of-ticks">
                  {YOU.map((t) => (
                    <li key={t}><Tick />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="of-panel of-panel--rushh">
                <h3>Du côté de Rushh</h3>
                <ul className="of-ticks">
                  {RUSHH.map((t) => (
                    <li key={t}><Tick />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Adaptation à l'organisation ── */}
        <section aria-labelledby="adaptation-title">
          <div className="lf-wrap">
            <div className="of-bespoke">
              <div>
                <span className="lf-pill">Adapté à vous</span>
                <h2 id="adaptation-title" className="lf-h2">Ce qui s&apos;adapte à votre organisation</h2>
                <p className="lf-sub">Le Standard suit votre façon de travailler, pas l&apos;inverse.</p>
              </div>
              <ul className="of-tiles">
                {ADAPT.map((a) => (
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
                        Rushh se connecte de façon personnalisée aux outils disposant d&apos;une API accessible,
                        avec les autorisations nécessaires. <Link href="/integrations">Voir les intégrations</Link>
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ToolsStrip />

        {/* ── 4. Mise en service ── */}
        <section id="mise-en-service" aria-labelledby="mise-en-service-title">
          <div className="lf-wrap of-wrap--steps">
            <div className="lf-head--center">
              <span className="lf-pill">Quatre étapes</span>
              <h2 id="mise-en-service-title" className="lf-h2">Comment se déroule la mise en place</h2>
              <p className="lf-sub">De l&apos;analyse au suivi, l&apos;équipe Rushh mène chaque étape avec vous.</p>
            </div>
            <details className="of-acc of-acc--label of-acc--steps">
              <summary>Les quatre étapes en détail</summary>
              <div className="of-acc-body">
                <ol className="of-steps of-steps--four">
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
          </div>
        </section>

        {/* ── 5. Ce que reçoit l'équipe ── */}
        <section aria-labelledby="equipe-title">
          <div className="lf-wrap">
            <div className="of-receive">
              <div>
                <span className="lf-pill">Côté équipe</span>
                <details className="of-acc of-acc--head">
                  <summary>
                    <h2 id="equipe-title" className="lf-h2">Ce que reçoit votre équipe</h2>
                  </summary>
                  <div className="of-acc-body">
                    <ul className="of-ticks">
                      {RECEIVE.map((t) => (
                        <li key={t}><Tick />{t}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
              <div className="lf-card of-mock" aria-label="Exemple de demande transmise à l'équipe">
                <div className="of-mock-head">
                  <span className="of-mock-title">Demande transmise</span>
                  <span className="of-mock-tag">Exemple</span>
                </div>
                <div className="of-mock-row"><span>Motif</span><b>Demande de visite</b></div>
                <div className="of-mock-row"><span>Informations recueillies</span><b>Bien concerné, projet, délais</b></div>
                <div className="of-mock-row"><span>Orientée vers</span><b>La bonne personne, selon vos règles</b></div>
                <div className="of-mock-row"><span>Prochaine étape</span><b>Reprendre l&apos;échange avec le contexte</b></div>
              </div>
            </div>
          </div>
        </section>

        <RxDiff id="diff-title" pill={OFFRE.diff.pill} title={OFFRE.diff.title} sub={OFFRE.diff.sub} items={OFFRE.diff.items} />
        <RxProof id="proof-title" title={OFFRE.proof.title} text={OFFRE.proof.text} say={OFFRE.proof.say} showPhone={false} />

        {/* ── 6. Démonstration et devis ── */}
        <CtaBandSection
          pill="Proposition personnalisée"
          titleId="demo-title"
          title="Demander une démonstration"
          text="Lors d'une démonstration, nous regardons votre fonctionnement et nous vous montrons comment Rushh s'adapterait à votre organisation. Vous recevez ensuite une proposition personnalisée, établie selon votre organisation et le périmètre retenu."
          demoLabel="Réserver une démo"
          links={[
            { href: "/integrations", label: "Intégrations" },
            { href: "/comparatif/standards-telephoniques-ia-immobilier", label: "Comparatif des standards IA" },
            { href: "/vs/joe-ai", label: "Rushh vs Joe AI" },
            { href: "/", label: "Retour à l'accueil" },
          ]}
        />
      </div>

      <FooterSection />
      <ScrollReveal />
      <OfferAccordions />
    </main>
  );
}
