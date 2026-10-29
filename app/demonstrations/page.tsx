import {
  DEMO_PHONE_HREF,
  DEMO_PHONE_LABEL,
  FinalCta,
  IconPhone,
  JsonLd,
  SectionHead,
  SolShell,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";
import { RxHero, RxStakes } from "@/components/solutions/premium";
import { DEMO_LISTEN } from "@/lib/solutions/premium";

const PATH = "/demonstrations";
const TITLE = "Démonstration : testez le Standard Rushh par téléphone | Rushh";
const DESCRIPTION =
  "Appelez la ligne de démonstration Rushh au 01 76 63 57 09 et jouez le rôle d'un vendeur ou d'un acquéreur auprès d'une agence immobilière fictive à Paris.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const SAY = [
  { who: "Vous êtes vendeur", line: "Bonjour, je souhaite faire estimer mon appartement à Paris." },
  { who: "Vous êtes acquéreur", line: "Je recherche un T3 à Paris avec un budget de 450 000 €." },
  { who: "Vous souhaitez visiter", line: "Bonjour, j'aimerais organiser une visite pour un appartement." },
  { who: "Vous avez une demande particulière", line: "Est-ce que vous pouvez transmettre un message à votre équipe ?" },
];

export default function DemonstrationsPage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />

      <RxHero
        id="demo-title"
        label="Ligne de démonstration"
        title="Et si vous testiez le Standard Rushh vous-même ?"
        lead="Découvrez comment Rushh prend en charge un appel immobilier. Appelez notre ligne de démonstration et écoutez une IA répondre au téléphone d'une agence immobilière : jouez le rôle d'un vendeur ou d'un acquéreur, et jugez la voix, la rapidité et la façon dont l'appel est conduit."
        sample={{
          caller: "Vous, au téléphone",
          quote: "Bonjour, je souhaite faire estimer mon appartement à Paris.",
          rows: [
            ["Motif", "Estimation d'un bien"],
            ["Bien", "Appartement à Paris"],
            ["Suite", "Selon la configuration de la ligne"],
          ],
          outcome: "Ce que le Standard peut consigner",
        }}
      >
        <div className="rx-actions">
          <a className="sol-call" href={DEMO_PHONE_HREF} aria-label={`Appeler la ligne de démonstration Rushh au ${DEMO_PHONE_LABEL}`}>
            <IconPhone />
            {DEMO_PHONE_LABEL}
          </a>
        </div>
        <p className="rx-note">La ligne simule une agence immobilière fictive Rushh, située à Paris.</p>
      </RxHero>

      <RxStakes id={DEMO_LISTEN.id} pill={DEMO_LISTEN.pill} title={DEMO_LISTEN.title} sub={DEMO_LISTEN.sub} items={DEMO_LISTEN.items} closing={DEMO_LISTEN.closing} />


      <section aria-labelledby="say-title">
        <div className="lf-wrap">
          <SectionHead
            pill="Que dire ?"
            id="say-title"
            title="Quelques phrases pour démarrer l'appel"
            sub="Ce sont des suggestions pour tester la conversation, et non des promesses de résultats."
          />
          <ul className="sol-say">
            {SAY.map((s) => (
              <li key={s.who} className="lf-card">
                <b>{s.who}</b>
                <q>{s.line}</q>
              </li>
            ))}
          </ul>
          <p className="sol-note">
            Démonstration sur une agence fictive. Les réponses et les actions dépendent de la configuration de la ligne.
          </p>
        </div>
      </section>

      <FinalCta
        id="demo-final-title"
        title="Vous souhaitez découvrir Rushh adapté à votre agence ?"
        text="Lors d'une démonstration personnalisée, nous reprenons vos propres scénarios d'appel et nous regardons comment le Standard s'adapterait à votre organisation."
        label="Réserver une démo adaptée à votre agence"
        links={[
          { href: "/offre", label: "L'offre Rushh" },
          { href: "/solutions/transaction-immobiliere", label: "Transaction immobilière" },
          { href: "/comparatif/standards-telephoniques-ia-immobilier", label: "Comparer avec d'autres solutions" },
          { href: "/vs/joe-ai", label: "Rushh ou Joe AI" },
        ]}
      />
    </SolShell>
  );
}
