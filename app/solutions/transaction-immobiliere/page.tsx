import Link from "next/link";
import { ToolsStrip } from "@/components/solutions/ToolsStrip";
import {
  Benefits,
  Faq,
  FinalCta,
  Flow,
  IconFocus,
  IconList,
  IconPhone,
  JsonLd,
  SectionHead,
  SolHero,
  SolShell,
  Ticks,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";

const PATH = "/solutions/transaction-immobiliere";
const TITLE = "Standard téléphonique IA pour la transaction immobilière | Rushh";
const DESCRIPTION =
  "Pendant vos visites, le Standard Rushh prend en charge les appels vendeurs et acquéreurs, puis les transmet au négociateur. Tarification sur devis.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const BENEFITS = [
  {
    icon: <IconPhone />,
    title: "Moins d'opportunités sans réponse",
    text: "Quand vos négociateurs sont en visite ou en rendez-vous, Rushh décroche et recueille la demande.",
  },
  {
    icon: <IconList />,
    title: "Des demandes déjà renseignées",
    text: "Projet de vente ou d'achat, bien concerné, critères : chaque demande arrive avec ses informations.",
  },
  {
    icon: <IconFocus />,
    title: "Des négociateurs moins interrompus",
    text: "Votre équipe reprend l'échange au bon moment, avec le contexte, selon les règles que vous définissez.",
  },
];

const FLOW = [
  { title: "Appel entrant", text: "Un vendeur ou un acquéreur appelle pendant que l'équipe est indisponible." },
  { title: "Compréhension", text: "Le Standard décroche et identifie la nature de la demande." },
  { title: "Collecte", text: "Il recueille les informations utiles à votre équipe." },
  { title: "Action selon vos règles", text: "Orientation, transfert ou prise de rendez-vous, selon ce que vous avez validé." },
  { title: "Négociateur", text: "Il reçoit la demande avec son contexte et reprend l'échange." },
];

const SELLER = [
  ["Projet", "Vente d'un appartement"],
  ["Localisation du bien", "Paris"],
  ["Type de bien", "Appartement"],
  ["Estimation", "Souhaitée"],
  ["Prochaine étape", "Selon vos règles"],
];

const BUYER = [
  ["Annonce concernée", "À préciser par l'appelant"],
  ["Critères", "T3, Paris"],
  ["Projet d'achat", "Budget indiqué : 450 000 €"],
  ["Visite", "À qualifier"],
  ["Prochaines étapes", "Selon vos règles"],
];

const HANDOFF = [
  "Une demande prête à traiter : le motif, les informations recueillies et le contexte.",
  "Une transmission vers la bonne personne, selon vos règles.",
  "Une reprise humaine dès qu'un échange humain est nécessaire.",
];

const FAQ = [
  {
    q: "Le Standard prend-il des rendez-vous de visite ?",
    a: "Selon les règles et les connexions validées avec vous, oui. Sans connexion à votre agenda, il recueille la demande de visite et la transmet à votre équipe.",
  },
  {
    q: "Le Standard remplace-t-il mes négociateurs ?",
    a: "Non. Il prend le relais quand votre équipe ne peut pas répondre. Les situations que vous choisissez de réserver à un humain lui sont transmises.",
  },
  {
    q: "Quelles informations mon équipe reçoit-elle ?",
    a: "Le motif de l'appel, les informations recueillies pendant l'échange et le contexte utile pour reprendre la demande, selon les règles définies avec vous.",
  },
  {
    q: "Que se passe-t-il si l'appelant veut parler à une personne ?",
    a: "Selon vos règles, le Standard transfère l'appel ou transmet la demande à la bonne personne pour une reprise humaine.",
  },
  {
    q: "Rushh garantit-il des mandats ou des rendez-vous ?",
    a: "Non. Le Standard est un outil d'assistance : il ne promet aucun résultat commercial, aucun mandat et aucun rendez-vous.",
  },
  {
    q: "Combien de temps faut-il pour le mettre en service ?",
    a: "La mise en service est visée sous 5 jours ouvrés après réception des éléments nécessaires. Ce délai est un objectif indicatif. La tarification se fait sur devis.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TransactionPage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />
      <JsonLd data={faqSchema} />

      <SolHero
        id="transaction-title"
        label="Transaction immobilière"
        title={<>Standard téléphonique IA pour les appels <em>vendeurs et acquéreurs</em></>}
        hook="Vous êtes en visite. Vos prochaines opportunités continuent d'appeler."
        lead="Rushh prend en charge les demandes commerciales entrantes pendant que vos négociateurs sont indisponibles, puis transmet à votre équipe une demande prête à traiter."
        secondary={{ href: "#scenarios", label: "Voir deux exemples d'appels" }}
        note="Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis"
      />

      <section aria-labelledby="benefices-title">
        <div className="lf-wrap">
          <SectionHead pill="Ce que vous gagnez" id="benefices-title" title="Pendant que l'équipe est sur le terrain" />
          <Benefits items={BENEFITS} />
        </div>
      </section>

      <section aria-labelledby="parcours-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Le parcours d'un appel"
            id="parcours-title"
            title="De l'appel au négociateur"
            sub="Chaque appel suit les règles validées avec vous."
          />
          <Flow items={FLOW} />
        </div>
      </section>

      <section id="scenarios" aria-labelledby="scenarios-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Deux exemples"
            id="scenarios-title"
            title="Un vendeur, un acquéreur : ce que le Standard recueille"
            sub="Ces scénarios sont des exemples fictifs, présentés à titre d'illustration."
          />
          <div className="sol-scns">
            <details className="of-acc of-acc--head sol-scn">
              <summary>
                <span className="sol-tag">Exemple fictif</span>
                <h3>Scénario vendeur</h3>
              </summary>
              <div className="of-acc-body">
                <p className="sol-line">« Bonjour, je souhaite faire estimer mon appartement à Paris. »</p>
                <ul className="sol-fiche">
                  {SELLER.map(([k, v]) => (
                    <li key={k}><span>{k}</span><b>{v}</b></li>
                  ))}
                </ul>
              </div>
            </details>
            <details className="of-acc of-acc--head sol-scn">
              <summary>
                <span className="sol-tag">Exemple fictif</span>
                <h3>Scénario acquéreur</h3>
              </summary>
              <div className="of-acc-body">
                <p className="sol-line">« Je recherche un T3 à Paris avec un budget de 450 000 €. »</p>
                <ul className="sol-fiche">
                  {BUYER.map(([k, v]) => (
                    <li key={k}><span>{k}</span><b>{v}</b></li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
          <p className="sol-note">
            Exemples illustratifs : les informations recueillies et les actions dépendent des règles définies avec vous.
            Aucun mandat ni rendez-vous n&apos;est garanti. Pour entendre un appel réel, essayez la{" "}
            <Link href="/demonstrations">ligne de démonstration</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="reprise-title">
        <div className="lf-wrap">
          <div className="sol-handoff">
            <div>
              <span className="lf-pill">Reprise humaine</span>
              <h2 id="reprise-title" className="lf-h2">Transmission au négociateur et reprise humaine</h2>
              <Ticks items={HANDOFF} />
              <p className="of-limit">
                Le Standard est un outil d&apos;assistance, sans promesse de résultat commercial.
              </p>
            </div>
            <div className="of-panel of-panel--rushh">
              <h3>Ce que le négociateur reçoit</h3>
              <Ticks items={["Le motif de l'appel", "Les informations recueillies", "Le contexte pour reprendre l'échange"]} />
            </div>
          </div>
        </div>
      </section>

      <ToolsStrip />

      <section aria-labelledby="faq-title">
        <div className="lf-wrap">
          <SectionHead pill="Questions fréquentes" id="faq-title" title="Questions fréquentes sur la transaction" />
          <Faq items={FAQ} />
        </div>
      </section>

      <FinalCta
        id="transaction-final-title"
        title="Votre équipe est en visite. Rushh prend les appels."
        text="Lors d'une démonstration personnalisée, nous regardons comment le Standard s'adapterait à votre agence. Le devis est établi selon votre organisation."
        links={[
          { href: "/offre", label: "L'offre Rushh" },
          { href: "/demonstrations", label: "Ligne de démonstration" },
          { href: "/integrations", label: "Intégrations" },
          { href: "/solutions/mandataires-immobiliers", label: "Mandataires immobiliers" },
          { href: "/solutions/multi-sites", label: "Réseaux et groupes d'agences" },
        ]}
      />
    </SolShell>
  );
}
