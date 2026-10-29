import Link from "next/link";
import type { ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { DEMO_PHONE_HREF, DEMO_PHONE_LABEL, IconArrow, IconPhone, Tick } from "@/components/solutions/kit";
import "@/app/solutions/rx.css";

/**
 * Composants « premium » des pages commerciales (solutions, démonstrations, offre, comparatifs).
 * Tout le style vit dans app/solutions/rx.css, scopé sous .rx-* : rien n'est partagé avec l'accueil.
 */

/* ── Hero éditorial : promesse à gauche, appel type à droite ── */
export interface CallSample {
  /** Qui appelle, ex. « Propriétaire vendeur ». */
  caller: string;
  quote: string;
  /** Ce que le Standard consigne ; chaque ligne = [libellé, valeur]. */
  rows: [string, string][];
  /** Dernière ligne, ex. « Transmis à l'équipe ». */
  outcome: string;
}

export function CallCard({ sample }: { sample: CallSample }) {
  return (
    <figure className="rx-call" aria-label="Exemple fictif d'appel traité par le Standard Rushh">
      <div className="rx-call-in">
        <span className="rx-call-tag">Appel entrant · exemple fictif</span>
        <p className="rx-call-who">{sample.caller}</p>
        <blockquote>{sample.quote}</blockquote>
      </div>
      <div className="rx-call-route" aria-hidden>
        <i />
        <span>Rushh qualifie</span>
        <i />
      </div>
      <div className="rx-call-out">
        <dl>
          {sample.rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="rx-call-done">
          <Tick />
          {sample.outcome}
        </p>
      </div>
    </figure>
  );
}

export function RxHero({
  id,
  label,
  title,
  hook,
  lead,
  note,
  primary = "Réserver une démo adaptée à votre agence",
  secondary = { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
  sample,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  hook?: string;
  lead: string;
  note?: string;
  primary?: string;
  secondary?: { href: string; label: string } | null;
  sample?: CallSample;
  children?: ReactNode;
}) {
  return (
    <section className="rx-hero" data-no-reveal aria-labelledby={id}>
      <div className="lf-wrap rx-hero-grid">
        <div className="rx-hero-copy">
          <span className="rx-eyebrow">{label}</span>
          <h1 id={id} className="rx-h1">{title}</h1>
          {hook && <p className="rx-hook">{hook}</p>}
          <p className="rx-lead">{lead}</p>
          {children ?? (
            <div className="rx-actions">
              <DemoCTA label={primary} showArrow={false} />
              {secondary && (
                <Link className="of-ghost" href={secondary.href}>
                  {secondary.label}
                  <IconArrow />
                </Link>
              )}
            </div>
          )}
          {note && <p className="rx-note">{note}</p>}
        </div>
        {sample && <CallCard sample={sample} />}
      </div>
    </section>
  );
}

/* ── Enjeux : un titre et des lignes éditoriales numérotées ── */
export function RxStakes({
  id,
  pill,
  title,
  sub,
  items,
  closing,
}: {
  id: string;
  pill: string;
  title: string;
  sub?: string;
  items: { title: string; text: string }[];
  closing?: string;
}) {
  return (
    <section className="rx-section" aria-labelledby={id}>
      <div className="lf-wrap rx-stakes">
        <div className="rx-stakes-head">
          <span className="rx-eyebrow">{pill}</span>
          <h2 id={id} className="rx-h2">{title}</h2>
          {sub && <p className="rx-sub">{sub}</p>}
        </div>
        <ol className="rx-stakes-list">
          {items.map((it, i) => (
            <li key={it.title}>
              <span className="rx-n" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {closing && <p className="rx-closing">{closing}</p>}
      </div>
    </section>
  );
}

/* ── Parcours d'appel sur fond navy ── */
export function RxRoute({
  id,
  pill,
  title,
  sub,
  steps,
  foot,
}: {
  id: string;
  pill: string;
  title: string;
  sub?: string;
  steps: { title: string; text: string }[];
  foot?: ReactNode;
}) {
  return (
    <section className="rx-section rx-section--flush" aria-labelledby={id}>
      <div className="lf-wrap">
        <div className="rx-route">
          <header>
            <span className="rx-eyebrow rx-eyebrow--light">{pill}</span>
            <h2 id={id} className="rx-h2">{title}</h2>
            {sub && <p className="rx-sub">{sub}</p>}
          </header>
          <ol style={{ ["--rx-steps" as string]: steps.length }}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="rx-route-n" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          {foot && <p className="rx-route-foot">{foot}</p>}
        </div>
      </div>
    </section>
  );
}

/* ── Différenciateurs : deux ou trois, choisis pour l'intention de la page ── */
export function RxDiff({
  id,
  pill,
  title,
  sub,
  items,
}: {
  id: string;
  pill: string;
  title: string;
  sub?: string;
  items: { title: string; text: string; link?: { href: string; label: string } }[];
}) {
  return (
    <section className="rx-section" aria-labelledby={id}>
      <div className="lf-wrap">
        <header className="rx-diff-head">
          <span className="rx-eyebrow">{pill}</span>
          <h2 id={id} className="rx-h2">{title}</h2>
          {sub && <p className="rx-sub">{sub}</p>}
        </header>
        <ul className="rx-diff">
          {items.map((it, i) => (
            <li key={it.title}>
              <span className="rx-n" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <h3>{it.title}</h3>
              <div>
                <p>{it.text}</p>
                {it.link && (
                  <Link href={it.link.href} className="rx-link">
                    {it.link.label}
                    <IconArrow />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Preuve accessible : la ligne de démonstration (numéro réel, agence fictive) ── */
export function RxProof({
  id,
  title,
  text,
  say,
  cta = "Réserver une démo adaptée à votre agence",
}: {
  id: string;
  title: string;
  text: string;
  /** Phrases à essayer au téléphone. */
  say: string[];
  cta?: string;
}) {
  return (
    <section className="rx-section rx-section--flush" aria-labelledby={id}>
      <div className="lf-wrap">
        <div className="rx-proof">
          <div className="rx-proof-copy">
            <span className="rx-eyebrow rx-eyebrow--light">Preuve par l&apos;écoute</span>
            <h2 id={id} className="rx-h2">{title}</h2>
            <p>{text}</p>
            <ul>
              {say.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rx-proof-act">
            <a className="rx-call-btn" href={DEMO_PHONE_HREF} aria-label={`Appeler la ligne de démonstration Rushh au ${DEMO_PHONE_LABEL}`}>
              <IconPhone />
              {DEMO_PHONE_LABEL}
            </a>
            <p>Agence immobilière fictive, située à Paris. Les réponses dépendent de la configuration de la ligne.</p>
            <div className="rx-proof-links">
              <DemoCTA label={cta} showArrow={false} />
              <Link href="/demonstrations" className="rx-link rx-link--light">
                Voir comment tester la ligne
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Bloc « Comment Rushh répond à ce besoin » des articles ── */
export function RushhAnswer({
  title,
  text,
  points,
  links,
}: {
  title: string;
  text: string;
  points: string[];
  links: { href: string; label: string }[];
}) {
  return (
    <aside className="rx-answer" aria-labelledby="rx-answer-t">
      <span className="rx-eyebrow">Comment Rushh répond à ce besoin</span>
      <h2 id="rx-answer-t">{title}</h2>
      <p>{text}</p>
      <ul>
        {points.map((p) => (
          <li key={p}><Tick />{p}</li>
        ))}
      </ul>
      <div className="rx-answer-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="rx-link">
            {l.label}
            <IconArrow />
          </Link>
        ))}
      </div>
    </aside>
  );
}
