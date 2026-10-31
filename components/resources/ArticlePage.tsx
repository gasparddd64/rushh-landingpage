import Image from "next/image";
import { orgRef } from "@/lib/brand";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { JsonLd, SITE, SolShell } from "@/components/solutions/kit";
import { RushhAnswer } from "@/components/solutions/premium";
import { categoryLabel } from "@/lib/articles/categories";
import { CALLOUT_LABEL, formatFrenchDate, type Article, type Block } from "@/lib/articles/types";
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
          <table className={`res-table${b.head[2] === "Niveau" ? " res-table--level" : ""}`}>
            <caption>{b.caption}</caption>
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

export function ArticlePage({ article: a }: { article: Article }) {
  const url = `${SITE}${a.path}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.h1,
    ...(a.cover ? { image: [`${SITE}${a.cover.src}`] } : {}),
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

  return (
    <SolShell className="res">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
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
          </div>
          {a.cover && (
          <figure className="res-cover">
            <Image
              src={a.cover.src}
              alt={a.cover.alt}
              width={a.cover.width}
              height={a.cover.height}
              sizes="(max-width: 848px) calc(100vw - 32px), 800px"
              priority
            />
          </figure>
          )}
          <nav className="res-toc" aria-label="Sommaire">
            <details className="of-acc">
              <summary>Dans ce guide</summary>
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
          {a.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-t`} data-no-reveal>
              <h2 id={`${s.id}-t`}>{s.h2}</h2>
              {s.blocks.map((b, i) => <BlockView key={i} b={b} />)}
            </section>
          ))}

          {a.rushh && <RushhAnswer {...a.rushh} cta={a.cta} />}

          <section id="sources" aria-labelledby="sources-t" className="res-sources" data-no-reveal>
            <h2 id="sources-t">Sources et méthode</h2>
            {a.sources.length > 0 && (
              <ol>
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                    <span>{s.usedFor}</span>
                  </li>
                ))}
              </ol>
            )}
            <p>{a.sourcesNote}</p>
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
    </SolShell>
  );
}
