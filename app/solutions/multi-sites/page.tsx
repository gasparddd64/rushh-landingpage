import Link from "next/link";
import { RxDiff, RxHero, RxProof } from "@/components/solutions/premium";
import { MULTI } from "@/lib/solutions/premium";
import { ToolsStrip } from "@/components/solutions/ToolsStrip";
import {
  Benefits,
  FinalCta,
  Flow,
  IconBuilding,
  IconFocus,
  IconList,
  JsonLd,
  SectionHead,
  SolShell,
  Ticks,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";

const PATH = "/solutions/multi-sites";
const TITLE = "Standard téléphonique IA multi-agences pour l'immobilier | Rushh";
const DESCRIPTION =
  "Centralisez certaines règles d'accueil téléphonique tout en respectant chaque agence : règles de groupe, adaptations locales, suivi. Sur devis.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const PROBLEMS = [
  {
    icon: <IconBuilding />,
    title: "Des pratiques d'accueil différentes",
    text: "D'une agence à l'autre, la façon de décrocher et de qualifier un appel peut varier.",
  },
  {
    icon: <IconFocus />,
    title: "Des appels mal orientés",
    text: "Sans règle commune, une demande peut atteindre la mauvaise agence ou le mauvais service.",
  },
  {
    icon: <IconList />,
    title: "Des règles difficiles à faire évoluer",
    text: "Modifier une consigne partout en même temps suppose de la formaliser une fois, puis de l'appliquer.",
  },
];

const COMMON = [
  "La façon d'accueillir et de comprendre une demande",
  "Les informations à recueillir selon le motif",
  "Les situations à transmettre à un humain",
  "La manière de transmettre les demandes aux équipes",
];

const LOCAL = [
  { title: "Par agence", text: "Horaires, interlocuteurs et règles locales propres à chaque site." },
  { title: "Par service", text: "Transaction, gérance, syndic, location : chaque service a ses propres situations." },
  { title: "Par équipe", text: "Qui reçoit quelle demande, et à quel moment votre équipe doit être alertée." },
];

const FLOW = [
  { title: "Appel entrant", text: "Un appelant contacte une agence du groupe." },
  { title: "Identification de la demande", text: "Le Standard comprend le motif et recueille les informations utiles." },
  { title: "Règles validées", text: "Les règles communes puis les adaptations de l'agence concernée s'appliquent." },
  { title: "Agence ou interlocuteur", text: "La demande est orientée vers l'agence, le service ou la personne concernée." },
];

const METHOD = [
  { title: "Cartographier", text: "Nous recensons vos agences, services et interlocuteurs." },
  { title: "Définir les règles communes", text: "Nous formalisons avec vous ce qui vaut pour tout le groupe." },
  { title: "Paramétrer les adaptations", text: "Nous ajoutons les spécificités de chaque agence et de chaque service." },
  { title: "Tester", text: "Nous testons les appels avant toute mise en service." },
  { title: "Valider et déployer", text: "Vous validez, puis le Standard prend en charge les appels selon le périmètre convenu." },
];

const FOLLOW = [
  "Des tests avant toute mise en service, sur des appels représentatifs de vos agences.",
  "Un suivi dans le temps assuré par l'équipe Rushh.",
  "Des exceptions traitées par une règle spécifique ou par une reprise humaine.",
];

export default function MultiSitesPage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />

      <RxHero
        id="multisites-title"
        label="Réseaux et groupes d'agences"
        title={<>Un standard téléphonique IA adapté aux <em>réseaux et groupes d&apos;agences</em> immobilières</>}
        hook="Une même exigence d'accueil, des réalités différentes d'une agence à l'autre."
        lead={MULTI.lead}
        sample={MULTI.sample}
        note="Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis"
      />

      <section aria-labelledby="problemes-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Organisation multi-sites"
            id="problemes-title"
            title="Ce qui complique l'accueil téléphonique à plusieurs agences"
          />
          <Benefits items={PROBLEMS} />
        </div>
      </section>

      <section aria-labelledby="regles-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Groupe et agences"
            id="regles-title"
            title="Règles communes au groupe, adaptations par agence"
          />
          <div className="of-split">
            <div className="lf-card of-panel">
              <h3>Règles communes au groupe</h3>
              <Ticks items={COMMON} />
            </div>
            <div className="of-panel of-panel--rushh">
              <h3>Adaptations par agence et service</h3>
              <ul className="of-ticks">
                {LOCAL.map((l) => (
                  <li key={l.title}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    <span><strong>{l.title}.</strong> {l.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="sol-note">
            Ce qui est commun et ce qui est local est défini avec vous, puis validé avant la mise en service.
          </p>
        </div>
      </section>

      <section id="exemple" aria-labelledby="orientation-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Orientation des demandes"
            id="orientation-title"
            title="Orienter chaque demande vers la bonne agence"
            sub="Le Standard applique d'abord les règles du groupe, puis celles de l'agence concernée."
          />
          <div className="sol-eg"><span className="sol-tag">Exemple illustratif</span></div>
          <Flow items={FLOW} />
        </div>
      </section>

      <section aria-labelledby="deploiement-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Méthode"
            id="deploiement-title"
            title="Méthode de déploiement"
            sub="Vous nous expliquez votre organisation, l'équipe Rushh s'occupe du reste."
          />
          <Flow items={METHOD} />
          <p className="sol-note">
            Le délai de mise en service visé est de 5 jours ouvrés après réception des éléments : il s&apos;agit d&apos;un
            objectif indicatif. Pour plusieurs agences, le périmètre et le calendrier sont définis avec vous lors du
            devis. Voir <Link href="/offre">L&apos;offre Rushh</Link>.
          </p>
        </div>
      </section>

      <RxDiff id="diff-title" pill={MULTI.diff.pill} title={MULTI.diff.title} sub={MULTI.diff.sub} items={MULTI.diff.items} />

      <ToolsStrip />

      <section aria-labelledby="suivi-title">
        <div className="lf-wrap">
          <div className="sol-handoff">
            <div>
              <span className="lf-pill">Fiabilité</span>
              <h2 id="suivi-title" className="lf-h2">Tests, suivi et exceptions</h2>
              <Ticks items={FOLLOW} />
            </div>
            <div className="of-panel of-panel--rushh">
              <h3>À savoir</h3>
              <Ticks
                items={[
                  "Cette page décrit une méthode et une organisation possibles, à étudier avec vous.",
                  "Elle ne présente aucune référence client ni résultat chiffré.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <RxProof id="proof-title" title={MULTI.proof.title} text={MULTI.proof.text} say={MULTI.proof.say} />

      <FinalCta
        id="multisites-final-title"
        title="Étudions les règles de votre réseau"
        text="Lors d'une démonstration personnalisée, nous regardons vos agences, vos services et vos règles d'orientation. Le devis est établi selon votre organisation."
        links={[
          { href: "/offre", label: "L'offre Rushh" },
          { href: "/integrations", label: "Intégrations" },
          { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
        ]}
      />
    </SolShell>
  );
}
