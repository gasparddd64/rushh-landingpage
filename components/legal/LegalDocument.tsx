import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { FooterSection } from "@/components/sections/FooterSection";
import { Nav } from "@/components/sections/Nav";
import type { LegalBlock, LegalDoc } from "@/lib/legal/types";
import { LegalToc } from "./LegalToc";

/** Rend **gras** et [texte](url) ; rien d'autre n'est interprété. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*((?:[^*]|\*(?!\*))+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{inline(m[1])}</strong>);
    else if (m[3].startsWith("/")) out.push(<Link key={k++} href={m[3]}>{m[2]}</Link>);
    else if (m[3].startsWith("http")) out.push(<a key={k++} href={m[3]} target="_blank" rel="noopener noreferrer">{m[2]}</a>);
    else out.push(<a key={k++} href={m[3]}>{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ b }: { b: LegalBlock }) {
  switch (b.t) {
    case "p":
      return <p>{inline(b.text)}</p>;
    case "strong":
      return <p className="lg-strong">{b.text}</p>;
    case "label":
      return <h3 className="lg-label">{b.text}</h3>;
    case "ul":
      return <ul>{b.items.map((i) => <li key={i}>{inline(i)}</li>)}</ul>;
    case "ol":
      return <ol className="lg-ol">{b.items.map((i) => <li key={i}>{inline(i)}</li>)}</ol>;
    case "dl":
      return (
        <dl className="lg-dl">
          {b.items.map(([k, v]) => (
            <div key={k} className="lg-dl-row">
              <dt>{k}</dt>
              <dd>{inline(v)}</dd>
            </div>
          ))}
        </dl>
      );
    case "table":
      return (
        <div className="lg-table-wrap">
          <table className="lg-table">
            <thead>
              <tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{inline(c)}</th> : <td key={i} data-label={b.head[i]}>{inline(c)}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const toc = doc.sections.map((s) => ({
    id: s.id,
    label: `${doc.sectionPrefix ? `${doc.sectionPrefix} ` : ""}${s.num}${doc.sectionPrefix ? " — " : ". "}${s.title}`,
  }));
  return (
    <main className="cgv-page lg-page">
      <Nav />

      <div className="wrap">
        <div className="lg-hero">
          <span className="section-eyebrow">{doc.eyebrow}</span>
          <h1 className="lg-h1">{doc.title}</h1>
          {doc.lead && <p className="lg-lead">{doc.lead}</p>}
          {doc.updated && <p className="lg-updated">{doc.updated}</p>}
        </div>

        <div className={`lg-layout${doc.sections.length < 4 ? " lg-layout--single" : ""}`}>
          {doc.sections.length >= 4 && <LegalToc items={toc} />}
          <div className="lg-content">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="lg-card">
                <h2>
                  <span className="lg-num" aria-hidden>{s.num}</span>
                  <span>
                    {doc.sectionPrefix && <span className="lg-prefix">{doc.sectionPrefix} {s.num}</span>}
                    {s.title}
                  </span>
                </h2>
                {s.blocks.map((b, i) => (
                  <Fragment key={i}>
                    <Block b={b} />
                  </Fragment>
                ))}
              </section>
            ))}
            {doc.closing && (
              <p className="lg-closing">
                {doc.closing.map((l, i) => (
                  <Fragment key={i}>
                    {i === 0 ? <strong>{l}</strong> : <span>{l}</span>}
                    <br />
                  </Fragment>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
