import Link from "next/link";
import { Cases } from "@/components/solutions/Cases";
import { ToolsStrip } from "@/components/solutions/ToolsStrip";
import {
  Faq,
  FinalCta,
  IconArrow,
  JsonLd,
  SectionHead,
  SolShell,
  Cross,
  Ticks,
  buildMetadata,
  webPageSchema,
} from "@/components/solutions/kit";
import { RxDiff, RxHero, RxProof, RxRoute, RxStakes } from "@/components/solutions/premium";
import { faqSchema } from "@/lib/solutions/markdown";
import {
  DESCRIPTION, DIFF, FAQ, FINAL, FLOW, H1, HERO_SAMPLE, HOOK, LABEL, LEAD, MANAGED, NOTE, PATH, PATHS, PROBLEM, PROOF,
  ROUTING, SEE_ALSO, TITLE, TOOLS_NOTE, URGENT,
} from "@/lib/solutions/gestion-locative";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function GestionLocativePage() {
  return (
    <SolShell>
      <JsonLd data={webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })} />
      <JsonLd data={faqSchema(FAQ)} />

      <RxHero
        id="gestion-locative-title"
        label={LABEL}
        title={<>{H1.before}<em>{H1.em}</em>{H1.after}</>}
        hook={HOOK}
        lead={LEAD}
        sample={HERO_SAMPLE}
        note={NOTE}
      />

      <RxStakes id="difficulte-title" pill={PROBLEM.pill} title={PROBLEM.title} sub={PROBLEM.sub} items={PROBLEM.stakes} closing={PROBLEM.closing} />
      <div className="lf-wrap">
        <ul className="of-chips" aria-label="Exemples de demandes reçues">
          {PROBLEM.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <RxRoute id="qualification-title" pill={FLOW.pill} title={FLOW.title} sub={FLOW.sub} steps={FLOW.steps} />

      <section id="parcours" aria-labelledby="parcours-title">
        <div className="lf-wrap">
          <SectionHead pill={PATHS.pill} id="parcours-title" title={PATHS.title} sub={PATHS.sub} />
          <Cases items={PATHS.items} columns={2} />
          <p className="sol-note">{PATHS.note}</p>
        </div>
      </section>

      <section aria-labelledby="urgence-title">
        <div className="lf-wrap">
          <SectionHead pill={URGENT.pill} id="urgence-title" title={URGENT.title} sub={URGENT.sub} />
          <div className="of-split">
            <div className="of-panel of-panel--rushh">
              <h3>Ce qu&apos;il peut faire</h3>
              <Ticks items={URGENT.can} />
            </div>
            <div className="lf-card of-panel">
              <h3>Ses limites</h3>
              <ul className="of-ticks sol-no">
                {URGENT.cannot.map((t) => (
                  <li key={t}><Cross />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="sol-note">{URGENT.note}</p>
        </div>
      </section>

      <section aria-labelledby="transmission-title">
        <div className="lf-wrap">
          <SectionHead pill={ROUTING.pill} id="transmission-title" title={ROUTING.title} sub={ROUTING.sub} />
          <p className="sol-note"><span className="sol-tag">{ROUTING.label}</span></p>
          <ul className="sol-route">
            {ROUTING.rows.map(([a, b]) => (
              <li key={a}>
                <b>{a}</b>
                <i><IconArrow /></i>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="sol-note">{ROUTING.note}</p>
        </div>
      </section>

      <RxDiff id="diff-title" pill={DIFF.pill} title={DIFF.title} sub={DIFF.sub} items={DIFF.items} />

      <section aria-labelledby="gere-title">
        <div className="lf-wrap">
          <div className="sol-handoff">
            <div>
              <span className="lf-pill">{MANAGED.pill}</span>
              <h2 id="gere-title" className="lf-h2">{MANAGED.title}</h2>
              <Ticks items={MANAGED.steps} />
              <p className="of-limit">{MANAGED.delay}</p>
            </div>
            <div className="lf-card of-panel">
              <h3>{MANAGED.needTitle}</h3>
              <Ticks items={MANAGED.need} />
            </div>
          </div>
        </div>
      </section>

      <ToolsStrip />
      <div className="lf-wrap">
        <p className="sol-note">{TOOLS_NOTE}</p>
      </div>

      <RxProof id="proof-title" title={PROOF.title} text={PROOF.text} say={PROOF.say} />

      <section aria-labelledby="faq-title">
        <div className="lf-wrap">
          <SectionHead pill="Questions fréquentes" id="faq-title" title="Questions fréquentes sur la gestion locative" />
          <Faq items={FAQ} />
          <p className="sol-note">
            Voir aussi :{" "}
            {SEE_ALSO.map((l, i) => (
              <span key={l.href}>
                {i > 0 && " · "}
                <Link href={l.href}>{l.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <FinalCta id="gestion-locative-final-title" title={FINAL.title} text={FINAL.text} links={FINAL.links} />
    </SolShell>
  );
}
