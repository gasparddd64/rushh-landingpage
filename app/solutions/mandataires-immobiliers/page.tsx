import Link from "next/link";
import { Cases } from "@/components/solutions/Cases";
import { TOOLS } from "@/components/sections/ToolsOrbitSection";
import {
  Faq,
  FinalCta,
  Flow,
  IconArrow,
  JsonLd,
  SectionHead,
  SolHero,
  SolShell,
  Ticks,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";
import { faqSchema } from "@/lib/solutions/markdown";
import {
  DESCRIPTION, FAQ, FINAL, FLOW, H1, HOOK, LABEL, LEAD, MANAGED, MODES, NOTE, PATH, PROBLEM, SITUATIONS, TITLE,
  TOOLS_SECTION,
} from "@/lib/solutions/mandataires-immobiliers";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function MandatairesPage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />
      <JsonLd data={faqSchema(FAQ)} />

      <SolHero
        id="mandataires-title"
        label={LABEL}
        title={<>{H1.before}<em>{H1.em}</em>{H1.after}</>}
        hook={HOOK}
        lead={LEAD}
        secondary={{ href: "#situations", label: "Voir trois situations" }}
        note={NOTE}
      />

      <section aria-labelledby="probleme-title">
        <div className="lf-wrap">
          <div className="of-bespoke">
            <div>
              <span className="lf-pill">{PROBLEM.pill}</span>
              <h2 id="probleme-title" className="lf-h2">{PROBLEM.title}</h2>
              <p className="lf-sub">{PROBLEM.sub}</p>
            </div>
            <ul className="of-tiles">
              {PROBLEM.tiles.map((t) => (
                <li key={t.title} className="of-tile">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="fonctionnement-title">
        <div className="lf-wrap">
          <SectionHead pill={FLOW.pill} id="fonctionnement-title" title={FLOW.title} sub={FLOW.sub} />
          <Flow items={FLOW.steps} />
        </div>
      </section>

      <section id="situations" aria-labelledby="situations-title">
        <div className="lf-wrap">
          <SectionHead pill={SITUATIONS.pill} id="situations-title" title={SITUATIONS.title} sub={SITUATIONS.sub} />
          <Cases items={SITUATIONS.items} />
          <p className="sol-note">
            {SITUATIONS.note} Pour entendre un appel réel, essayez la{" "}
            <Link href="/demonstrations">ligne de démonstration</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="modes-title">
        <div className="lf-wrap">
          <SectionHead pill={MODES.pill} id="modes-title" title={MODES.title} sub={MODES.sub} />
          <div className="of-split">
            {MODES.items.map((m, i) => (
              <div key={m.title} className={i === 0 ? "of-panel of-panel--rushh" : "lf-card of-panel"}>
                <h3>{m.title}</h3>
                <Ticks items={m.points} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="gere-title">
        <div className="lf-wrap">
          <div className="sol-handoff">
            <div>
              <span className="lf-pill">{MANAGED.pill}</span>
              <h2 id="gere-title" className="lf-h2">{MANAGED.title}</h2>
              <p className="lf-sub">{MANAGED.sub}</p>
              <p className="sol-delay">{MANAGED.delay}</p>
            </div>
            <div className="lf-card of-panel">
              <h3>Ce que Rushh prend en charge</h3>
              <Ticks items={MANAGED.steps} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="outils-title">
        <div className="lf-wrap">
          <SectionHead pill={TOOLS_SECTION.pill} id="outils-title" title={TOOLS_SECTION.title} sub={TOOLS_SECTION.sub} />
          <ul className="sol-route">
            {TOOLS_SECTION.rows.map(([a, b]) => (
              <li key={a}>
                <b>{a}</b>
                <i><IconArrow /></i>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <ul className="sol-tools-inline" aria-label="Outils connectables">
            {TOOLS.map((t) => (
              <li key={t.name} className={`sol-tool${t.fill ? " sol-tool--fill" : ""}`}>
                <img src={t.logo} alt={t.name} loading="lazy" />
              </li>
            ))}
          </ul>
          <p className="sol-note">
            {TOOLS_SECTION.note} <Link href="/integrations">Voir les intégrations</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-title">
        <div className="lf-wrap">
          <SectionHead pill="Questions fréquentes" id="faq-title" title="Questions fréquentes pour les mandataires immobiliers" />
          <Faq items={FAQ} />
        </div>
      </section>

      <FinalCta id="mandataires-final-title" title={FINAL.title} text={FINAL.text} links={FINAL.links} />
    </SolShell>
  );
}
