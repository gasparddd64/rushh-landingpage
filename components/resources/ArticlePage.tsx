import Image from "next/image";
import { orgRef } from "@/lib/brand";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { JsonLd, SITE, SolShell } from "@/components/solutions/kit";
import { RushhAnswer } from "@/components/solutions/premium";
import { categoryLabel } from "@/lib/articles/categories";
import { CALLOUT_LABEL, RUSHH_BRIEF, formatFrenchDate, type Article, type Block } from "@/lib/articles/types";
import { ReadingNav } from "./ReadingNav";
import "@/app/ressources/res.css";

/** Rend **gras** et [texte](url) ; rien d'autre n'est interprété. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>);
    else if (m[3].startsWith("/")) out.push(<Link key={k++} href={m[3]}>{m[2]}</Link>);
    else out.push(<a key={k++} href={m[3]} target="_blank" rel="noopener noreferrer">{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p>{inline(b.text)}</p>;
    case "statement":
      return <p className="res-statement">{inline(b.text)}</p>;
    case "button":
      return (
        <p className="res-btn-row">
          <Link href={b.href} className="res-btn">{b.label}</Link>
        </p>
      );
    case "detail":
      return (
        <details className="res-fold">
          <summary>{b.summary}</summary>
          <div>{b.blocks.map((x, i) => <BlockView key={i} b={x} />)}</div>
        </details>
      );
    case "ul":
      return <ul>{b.items.map((i) => <li key={i}>{inline(i)}</li>)}</ul>;
    case "ol":
      return <ol>{b.items.map((i) => <li key={i}>{inline(i)}</li>)}</ol>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "callout":
      return (
        <aside className={`res-callout res-callout--${b.kind}`}>
          <span className="res-callout-tag">{CALLOUT_LABEL[b.kind]}</span>
          <p>{inline(b.text)}</p>
        </aside>
      );
    case "checklist":
      return <ul className="res-check">{b.items.map((i) => <li key={i}>{inline(i)}</li>)}</ul>;
    case "table":
      return (
        <figure className="res-figure">
          <table className={`res-table${b.head[2] === "Niveau" ? " res-table--level" : ""}${b.head[b.head.length - 1] === "Rushh" ? " res-table--vs" : ""}`}>
            {b.caption && <caption>{b.caption}</caption>}
            <thead>
              <tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.join("|")}>
                  {r.map((c, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">{inline(c)}</th>
                    ) : (
                      <td key={i} data-label={b.head[i]}>{inline(c)}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {b.note && <figcaption>{b.note}</figcaption>}
        </figure>
      );
    case "rushh":
      return (
        <aside className="res-rushh">
          <span className="res-rushh-tag">Comment Rushh gère cette situation</span>
          <h3>{b.title}</h3>
          <p>{inline(b.text)}</p>
          {b.points && (
            <ul>
              {b.points.map((p) => <li key={p}>{inline(p)}</li>)}
            </ul>
          )}
          {b.link && <Link href={b.link.href} className="res-rushh-link">{b.link.label} →</Link>}
        </aside>
      );
    case "fiche":
      return (
        <figure className="res-fiche">
          <span className="res-callout-tag">Exemple fictif</span>
          <h3>{b.title}</h3>
          <dl>
            {b.rows.map(([k, v]) => (
              <Fragment key={k}>
                <dt>{k}</dt>
                <dd>{inline(v)}</dd>
              </Fragment>
            ))}
          </dl>
          {b.note && <figcaption>{b.note}</figcaption>}
        </figure>
      );
  }
}

const FAQ_IDS = new Set(["faq"]);

/** FAQ : chaque question devient un <details> natif ; les réponses restent dans le HTML. */
function Faq({ blocks }: { blocks: Block[] }) {
  const groups: { q: string; body: Block[] }[] = [];
  const intro: Block[] = [];
  for (const b of blocks) {
    if (b.t === "h3") groups.push({ q: b.text, body: [] });
    else if (groups.length) groups[groups.length - 1].body.push(b);
    else intro.push(b);
  }
  return (
    <>
      {intro.map((b, i) => <BlockView key={i} b={b} />)}
      <div className="res-faq">
        {groups.map((g) => (
          <details key={g.q} className="res-qa">
            <summary><h3>{g.q}</h3></summary>
            <div>{g.body.map((b, i) => <BlockView key={i} b={b} />)}</div>
          </details>
        ))}
      </div>
    </>
  );
}

export function ArticlePage({ article: a }: { article: Article }) {
  const url = `${SITE}${a.path}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.h1,
    ...(a.cover && !a.bare ? { image: [`${SITE}${a.cover.src}`] } : {}),
    description: a.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "fr-FR",
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: orgRef,
    publisher: orgRef,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/ressources` },
      { "@type": "ListItem", position: 3, name: a.h1, item: url },
    ],
  };

  if (a.bare) {
    return (
      <SolShell className="res">
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />
        <article className="res-article res-bare">
          <header className="res-head">
            <nav className="res-crumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden>›</span>
              <Link href="/ressources">Blog</Link>
            </nav>
            <h1 className="res-h1">{a.h1}</h1>
            <div className="res-intro">{a.intro?.map((b, i) => <BlockView key={i} b={b} />)}</div>
          </header>
          <div className="res-body">
            {a.sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-t`} data-no-reveal className={i === a.sections.length - 1 ? "res-final" : undefined}>
                <h2 id={`${s.id}-t`}>{s.h2}</h2>
                {s.blocks.map((b, j) => <BlockView key={j} b={b} />)}
              </section>
            ))}
          </div>
        </article>
      </SolShell>
    );
  }

  return (
    <SolShell className="res">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="res-layout">
      <ReadingNav items={[...a.sections.map((x) => ({ id: x.id, label: x.h2 })), { id: "sources", label: "Sources et méthode" }]} />
      <article className="res-article">
        <header className="res-head">
          <nav className="res-crumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <Link href="/ressources">Blog</Link>
          </nav>
          <p className="res-cat">{categoryLabel(a.category)}</p>
          <h1 className="res-h1">{a.h1}</h1>
          <p className="res-meta">
            Publié le <time dateTime={a.datePublished}>{formatFrenchDate(a.datePublished)}</time>
            {a.dateModified !== a.datePublished && (
              <> · Mis à jour le <time dateTime={a.dateModified}>{formatFrenchDate(a.dateModified)}</time></>
            )}
            {" · "}Rédaction Rushh
          </p>
          <div className="res-answer">
            <span className="res-answer-tag">En bref</span>
            <p>{a.answer}</p>
            {a.keyPoints && (
              <ul className="res-top-points">
                {a.keyPoints.map((k) => <li key={k}>{inline(k)}</li>)}
              </ul>
            )}
            {a.verdict && (
              <div className="res-verdict-grid">
                <div className="res-verdict-rushh" role="group" aria-label="Rushh convient si vous cherchez">
                  <p className="res-verdict-h">Rushh si vous cherchez…</p>
                  <ul>{a.verdict.rushhIf.map((x) => <li key={x}>{inline(x)}</li>)}</ul>
                </div>
                <div role="group" aria-label={`${a.verdict.otherName} convient mieux si`}>
                  <p className="res-verdict-h">{a.verdict.otherName} si vous cherchez…</p>
                  <ul>{a.verdict.otherIf.map((x) => <li key={x}>{inline(x)}</li>)}</ul>
                </div>
              </div>
            )}
            <div className="res-top-rushh">
              <p>
                <strong>Rushh immo :</strong> {a.rushhBrief ?? RUSHH_BRIEF}
              </p>
              <DemoCTA label="Réserver une démo" showArrow={false} />
            </div>
          </div>
          <nav className="res-toc" aria-label="Sommaire">
            <details className="of-acc">
              <summary>Aller à une section</summary>
              <div className="of-acc-body">
                <ol>
                  {a.sections.map((s) => (
                    <li key={s.id}><a href={`#${s.id}`}>{s.h2}</a></li>
                  ))}
                </ol>
              </div>
            </details>
          </nav>
        </header>

        <div className="res-body">
          {a.sections.map((s, idx) => (
            <Fragment key={s.id}>
            <section id={s.id} aria-labelledby={`${s.id}-t`} data-no-reveal>
              <h2 id={`${s.id}-t`}>{s.h2}</h2>
              {s.takeaway && <p className="res-takeaway">{inline(s.takeaway)}</p>}
              {FAQ_IDS.has(s.id) ? (
                <Faq blocks={s.blocks} />
              ) : s.fold ? (
                <details className="res-fold">
                  <summary>Voir le détail</summary>
                  <div>{s.blocks.map((b, i) => <BlockView key={i} b={b} />)}</div>
                </details>
              ) : (
                s.blocks.map((b, i) => <BlockView key={i} b={b} />)
              )}
            </section>
            {idx === 0 && a.cover && (
              <figure className="res-cover">
                <Image
                  src={a.cover.src}
                  alt={a.cover.alt}
                  width={a.cover.width}
                  height={a.cover.height}
                  sizes="(max-width: 848px) calc(100vw - 32px), 800px"
                />
              </figure>
            )}
            </Fragment>
          ))}

          {a.rushh && <RushhAnswer {...a.rushh} cta={a.cta} />}

          <section id="sources" aria-labelledby="sources-t" className="res-sources" data-no-reveal>
            <h2 id="sources-t">Sources et méthode</h2>
            <p>{a.sourcesNote}</p>
            {a.sources.length > 0 && (
              <details className="res-fold res-sources-list">
                <summary>Voir les {a.sources.length} source{a.sources.length > 1 ? "s" : ""} citée{a.sources.length > 1 ? "s" : ""}</summary>
                <div>
                  <ol>
                    {a.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                        <span>{s.usedFor}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            )}
            <p className="res-legend">
              Dans ce guide : <b>Fait vérifié</b> (source citée), <b>Exemple fictif</b>, <b>Recommandation pratique</b> (pratique
              proposée par Rushh) et <b>Hypothèse</b> (à vérifier chez vous).
            </p>
          </section>

          <section className="res-related" aria-labelledby="related-t" data-no-reveal>
            <h2 id="related-t">À lire aussi</h2>
            <ul>
              {a.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                  <span>{r.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className="res-back"><Link href="/ressources">← Tout le Blog</Link></p>

          {!a.rushh && (
            <aside className="res-cta" aria-labelledby="cta-t">
              <h2 id="cta-t">{a.cta.title}</h2>
              <p>{a.cta.text}</p>
              <div className="res-cta-actions">
                <DemoCTA label="Réserver une démo" showArrow={false} />
                {a.cta.links.map((l) => (
                  <Link key={l.href} href={l.href} className="res-cta-link">{l.label}</Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>
      </div>
    </SolShell>
  );
}
