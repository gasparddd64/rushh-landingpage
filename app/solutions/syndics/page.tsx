import Link from "next/link";
import { RxDiff, RxHero, RxProof } from "@/components/solutions/premium";
import { SYNDICS } from "@/lib/solutions/premium";
import { ToolsStrip } from "@/components/solutions/ToolsStrip";
import {
  Benefits,
  Cross,
  FinalCta,
  IconArrow,
  IconBuilding,
  IconFocus,
  IconUsers,
  JsonLd,
  SectionHead,
  SolShell,
  Ticks,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";

const PATH = "/solutions/syndics";
const TITLE = "Standard téléphonique IA pour syndics de copropriété | Rushh";
const DESCRIPTION =
  "Une organisation possible pour les appels de copropriétaires et de prestataires : qualification, priorités, transmission au gestionnaire. Sur devis.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const PROBLEMS = [
  {
    icon: <IconFocus />,
    title: "Des gestionnaires interrompus",
    text: "Chaque appel qui arrive pendant un rendez-vous, une assemblée ou un dossier en cours casse le rythme de travail.",
  },
  {
    icon: <IconUsers />,
    title: "Des appelants très différents",
    text: "Copropriétaires, occupants, membres du conseil syndical, prestataires : chacun attend une réponse adaptée.",
  },
  {
    icon: <IconBuilding />,
    title: "Des motifs à trier",
    text: "Administratif, charges, travaux, parties communes, assemblée générale : toutes les demandes n'ont pas le même degré de priorité.",
  },
];

const CALLERS = ["Copropriétaire", "Occupant", "Conseil syndical", "Prestataire"];

const MOTIFS = [
  "Demande administrative ou de document",
  "Question sur les charges",
  "Incident dans les parties communes",
  "Travaux et prestataires",
  "Assemblée générale",
  "Autre demande",
];

const ROUTES = [
  ["Demande de document", "Transmise au gestionnaire concerné"],
  ["Question sur les charges", "Orientée vers la personne ou le service que vous désignez"],
  ["Incident dans les parties communes", "Marqué prioritaire, avec alerte au gestionnaire si vous le décidez"],
  ["Appel d'un prestataire", "Orienté vers le gestionnaire qui suit le dossier"],
];

const HANDOFF = [
  "Le motif de l'appel et son niveau de priorité selon vos règles.",
  "La copropriété et le demandeur, tels que l'appelant les a indiqués.",
  "Les informations recueillies pendant l'échange.",
  "Une transmission vers le gestionnaire, ou vers la personne que vous désignez.",
];

const CAN = [
  "Décrocher et comprendre la demande",
  "Recueillir les informations utiles",
  "Orienter ou transmettre selon vos règles",
  "Passer le relais à un humain",
];

const CANNOT = [
  "Il ne réalise aucun diagnostic technique.",
  "Il ne gère pas seul une urgence et ne remplace pas les services d'urgence.",
  "Il n'accède à des données de copropriété que par une connexion validée avec vous.",
  "Il n'applique que les règles validées et testées avec vous.",
];

export default function SyndicsPage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />

      <RxHero
        id="syndics-title"
        label="Syndics de copropriété"
        title={<>Standard téléphonique IA pour <em>syndics de copropriété</em></>}
        hook="Les appels continuent quand vos gestionnaires sont occupés."
        lead={SYNDICS.lead}
        sample={SYNDICS.sample}
        note="Standard téléphonique alimenté par intelligence artificielle · Tarification sur devis"
      />

      <section aria-labelledby="problemes-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Réception téléphonique"
            id="problemes-title"
            title="Les difficultés de la réception téléphonique en syndic"
          />
          <Benefits items={PROBLEMS} />
        </div>
      </section>

      <section aria-labelledby="identification-title">
        <div className="lf-wrap">
          <div className="of-bespoke">
            <div>
              <span className="lf-pill">Premier niveau</span>
              <h2 id="identification-title" className="lf-h2">Identifier la copropriété et le demandeur</h2>
              <p className="lf-sub">
                Le Standard demande qui appelle et pour quelle copropriété. Sans connexion validée avec vos données,
                il s&apos;appuie sur ce que l&apos;appelant indique.
              </p>
            </div>
            <ul className="of-tiles">
              <li className="of-tile">
                <h3>Qui appelle ?</h3>
                <p>{CALLERS.join(", ")}.</p>
              </li>
              <li className="of-tile">
                <h3>Quelle copropriété ?</h3>
                <p>Celle que l&apos;appelant indique. Un rapprochement avec vos fichiers suppose une connexion à étudier.</p>
              </li>
              <li className="of-tile">
                <h3>Quel motif ?</h3>
                <p>Le Standard pose les questions utiles pour cerner la demande, selon vos règles.</p>
              </li>
              <li className="of-tile">
                <h3>Quelle suite ?</h3>
                <p>Orientation, transfert ou message au gestionnaire, selon ce que vous avez validé.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="motifs-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Qualification"
            id="motifs-title"
            title="Qualifier les motifs d'appel"
            sub="Voici des exemples de catégories, à adapter à votre cabinet."
          />
          <details className="of-acc of-acc--label">
            <summary>Exemples de motifs</summary>
            <div className="of-acc-body">
              <ul className="of-chips">
                {MOTIFS.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>

      <section aria-labelledby="priorites-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Règles"
            id="priorites-title"
            title="Règles de priorité et d'orientation"
            sub="Vous décidez qui reçoit quelle demande, quels motifs sont prioritaires et quand alerter votre équipe. Les règles sont testées avec vous avant la mise en service."
          />
          <p className="sol-note">
            <span className="sol-tag">Exemple illustratif</span>
          </p>
          <ul className="sol-route">
            {ROUTES.map(([a, b]) => (
              <li key={a}>
                <b>{a}</b>
                <i><IconArrow /></i>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="sol-note">
            Configurations à étudier avec vous, et non fonctionnalités déjà démontrées.
          </p>
        </div>
      </section>

      <section aria-labelledby="gestionnaire-title">
        <div className="lf-wrap">
          <div className="sol-handoff">
            <div>
              <span className="lf-pill">Transmission</span>
              <h2 id="gestionnaire-title" className="lf-h2">Transmission au gestionnaire</h2>
              <Ticks items={HANDOFF} />
            </div>
            <div className="lf-card of-mock" aria-label="Exemple de message transmis au gestionnaire">
              <div className="of-mock-head">
                <span className="of-mock-title">Message au gestionnaire</span>
                <span className="of-mock-tag">Exemple</span>
              </div>
              <div className="of-mock-row"><span>Appelant</span><b>Copropriétaire</b></div>
              <div className="of-mock-row"><span>Copropriété</span><b>Telle qu&apos;indiquée par l&apos;appelant</b></div>
              <div className="of-mock-row"><span>Motif</span><b>Demande de document</b></div>
              <div className="of-mock-row"><span>Priorité</span><b>Selon vos règles</b></div>
            </div>
          </div>
        </div>
      </section>

      <RxDiff id="diff-title" pill={SYNDICS.diff.pill} title={SYNDICS.diff.title} sub={SYNDICS.diff.sub} items={SYNDICS.diff.items} />

      <ToolsStrip />

      <section id="limites" aria-labelledby="limites-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Transparence"
            id="limites-title"
            title="Limites et reprise humaine"
            sub="Le Standard prend le premier niveau. Dès qu'un échange humain est nécessaire, la demande est transmise à votre équipe."
          />
          <div className="of-split">
            <div className="of-panel of-panel--rushh">
              <h3>Ce qu&apos;il peut faire</h3>
              <Ticks items={CAN} />
            </div>
            <div className="lf-card of-panel">
              <h3>Ses limites</h3>
              <ul className="of-ticks sol-no">
                {CANNOT.map((t) => (
                  <li key={t}><Cross />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="sol-note">
            Cette page décrit une organisation possible, à étudier avec vous. Elle ne présente aucune référence client
            ni résultat chiffré. Voir aussi <Link href="/offre">L&apos;offre Rushh</Link>.
          </p>
        </div>
      </section>

      <RxProof id="proof-title" title={SYNDICS.proof.title} text={SYNDICS.proof.text} say={SYNDICS.proof.say} />

      <FinalCta
        id="syndics-final-title"
        title="Étudions l'organisation téléphonique de votre cabinet"
        text="Lors d'une démonstration personnalisée, nous regardons vos motifs d'appel et vos règles d'orientation. Le devis est établi selon votre organisation."
        links={[
          { href: "/offre", label: "L'offre Rushh" },
          { href: "/integrations", label: "Intégrations" },
          { href: "/solutions/gestion-locative", label: "Gestion locative" },
          { href: "/solutions/multi-sites", label: "Réseaux et groupes d'agences" },
        ]}
      />
    </SolShell>
  );
}
