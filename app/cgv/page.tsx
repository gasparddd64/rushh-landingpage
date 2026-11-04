import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { FooterSection } from "@/components/sections/FooterSection";

const baseMetadata: Metadata = {
  title: "Conditions Générales de Vente | Rushh",
  description: "Conditions Générales de Vente de Rushh, version du 4 novembre 2026 : prestations, tarifs, durée, données, responsabilité.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rushh.fr/cgv",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/cgv");

type Block =
  | { type: "p"; text: string }
  | { type: "p-strong"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

type Article = {
  num: number;
  title: string;
  /** Intitulé du chapitre qui s'ouvre avec cet article. */
  chapter?: string;
  blocks: Block[];
};

const VERSION = "4 novembre 2026";

const ARTICLES: Article[] = [
  {
    "num": 1,
    "title": "Objet et champ d'application",
    "blocks": [
      {
        "type": "p",
        "text": "Les présentes Conditions Générales de Vente (« CGV ») régissent les prestations fournies par **Gaspard DAVID**, entrepreneur individuel exerçant sous le nom commercial **Rushh**, immatriculé au RCS de Bayonne sous le numéro 937 698 983, SIRET 937 698 983 00023, établi au 13 rue du Brise-Lames, 64600 Anglet, France."
      },
      {
        "type": "p",
        "text": "Contact : [hello@rushh.fr](mailto:hello@rushh.fr)"
      },
      {
        "type": "p",
        "text": "Elles s'appliquent aux relations contractuelles conclues avec des clients professionnels établis en France, sous réserve des dispositions légales impératives applicables."
      }
    ]
  },
  {
    "num": 2,
    "title": "Formation du contrat",
    "blocks": [
      {
        "type": "p",
        "text": "Les prestations sont formalisées par un contrat commercial accepté par le Client, notamment par signature électronique."
      },
      {
        "type": "p",
        "text": "Les présentes CGV sont communiquées au Client avant la conclusion du contrat et en font partie intégrante lorsqu'elles sont acceptées."
      },
      {
        "type": "p",
        "text": "Les conditions particulières expressément convenues prévalent sur les présentes CGV en cas de contradiction, pour les dispositions concernées."
      }
    ]
  },
  {
    "num": 3,
    "title": "Prestations",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh propose des solutions d'automatisation et de gestion des communications professionnelles."
      },
      {
        "type": "p",
        "text": "La nature, le périmètre et les modalités d'exécution des prestations sont définis dans le contrat commercial conclu avec le Client."
      },
      {
        "type": "p",
        "text": "Rushh met en œuvre les moyens appropriés à la bonne exécution des prestations expressément convenues, sans garantie de résultat commercial déterminé."
      }
    ]
  },
  {
    "num": 4,
    "title": "Tarifs et paiement",
    "blocks": [
      {
        "type": "p",
        "text": "Les conditions financières et les modalités de règlement sont définies dans le contrat commercial."
      },
      {
        "type": "p",
        "text": "Tout retard de paiement entraîne de plein droit l'application de pénalités calculées au taux de refinancement de la Banque centrale européenne majoré de dix points de pourcentage, selon les modalités prévues par la réglementation applicable."
      },
      {
        "type": "p",
        "text": "L'indemnité forfaitaire légale de **40 euros pour frais de recouvrement** est également due lorsqu'elle est applicable. Une indemnisation complémentaire peut être demandée sur justification dans les conditions prévues par la loi."
      },
      {
        "type": "p",
        "text": "Sauf accord particulier, aucun escompte n'est accordé pour paiement anticipé."
      }
    ]
  },
  {
    "num": 5,
    "title": "Durée et résiliation",
    "blocks": [
      {
        "type": "p",
        "text": "La durée des prestations, les conditions de renouvellement et les modalités de résiliation sont définies dans le contrat commercial."
      },
      {
        "type": "p",
        "text": "Chaque Partie demeure tenue au respect des engagements qu'elle a acceptés, sous réserve des dispositions légales impératives applicables."
      }
    ]
  },
  {
    "num": 6,
    "title": "Obligations du Client",
    "blocks": [
      {
        "type": "p",
        "text": "Le Client s'engage à communiquer les informations, instructions et accès nécessaires à la bonne exécution des prestations."
      },
      {
        "type": "p",
        "text": "Il garantit disposer des droits et autorisations nécessaires sur les éléments qu'il transmet à Rushh."
      },
      {
        "type": "p",
        "text": "Il demeure responsable de l'exactitude de ses informations professionnelles, des instructions qu'il valide et de l'utilisation des prestations conformément à la réglementation applicable, sans préjudice des obligations propres de Rushh."
      }
    ]
  },
  {
    "num": 7,
    "title": "Responsabilité",
    "blocks": [
      {
        "type": "p",
        "text": "Chaque Partie répond des manquements à ses obligations conformément au contrat et au droit applicable."
      },
      {
        "type": "p",
        "text": "Rushh met en œuvre les diligences appropriées pour assurer la continuité des prestations. Des interruptions temporaires peuvent intervenir, notamment lors d'opérations de maintenance ou d'incidents techniques, sans préjudice des engagements particuliers convenus et des responsabilités légalement applicables."
      },
      {
        "type": "p",
        "text": "Dans les limites permises par la loi, la responsabilité contractuelle de Rushh est limitée aux préjudices directs résultant d'un manquement qui lui est imputable."
      },
      {
        "type": "p",
        "text": "Les éventuels plafonds de responsabilité et leurs exceptions sont définis dans le contrat commercial, sous réserve des dispositions légales impératives applicables."
      }
    ]
  },
  {
    "num": 8,
    "title": "Données personnelles",
    "blocks": [
      {
        "type": "p",
        "text": "Les Parties s'engagent à respecter la réglementation applicable à la protection des données personnelles, notamment le Règlement général sur la protection des données (« RGPD »)."
      },
      {
        "type": "p",
        "text": "Lorsque Rushh agit en qualité de sous-traitant, les traitements concernés sont encadrés, préalablement à leur mise en œuvre, par un accord contractuel conforme à l'article 28 du RGPD."
      },
      {
        "type": "p",
        "text": "Les informations relatives aux traitements réalisés par Rushh pour ses propres finalités figurent dans sa [politique de confidentialité](/privacy)."
      }
    ]
  },
  {
    "num": 9,
    "title": "Confidentialité",
    "blocks": [
      {
        "type": "p",
        "text": "Chaque Partie s'engage à préserver la confidentialité des informations non publiques échangées dans le cadre de la relation contractuelle."
      },
      {
        "type": "p",
        "text": "Cette obligation demeure applicable pendant la durée du contrat et pendant trois ans après sa cessation, sous réserve des exceptions légales et de la protection applicable aux secrets d'affaires."
      }
    ]
  },
  {
    "num": 10,
    "title": "Propriété intellectuelle",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh conserve les droits qu'il détient sur ses technologies, logiciels, méthodes, développements et savoir-faire."
      },
      {
        "type": "p",
        "text": "Aucune cession de propriété intellectuelle n'intervient sans accord écrit exprès."
      },
      {
        "type": "p",
        "text": "Le Client conserve les droits dont il est titulaire sur les informations, contenus et données qu'il fournit."
      }
    ]
  },
  {
    "num": 11,
    "title": "Force majeure",
    "blocks": [
      {
        "type": "p",
        "text": "Aucune Partie ne peut être tenue responsable d'une inexécution résultant d'un événement de force majeure au sens de l'article 1218 du Code civil, dans les conditions prévues par la loi."
      }
    ]
  },
  {
    "num": 12,
    "title": "Droit applicable et litiges",
    "blocks": [
      {
        "type": "p",
        "text": "Les relations contractuelles sont soumises au droit français."
      },
      {
        "type": "p",
        "text": "En cas de différend, les Parties privilégient une résolution amiable, sans préjudice de leurs droits légaux."
      },
      {
        "type": "p-strong",
        "text": "LORSQUE LES PARTIES ONT TOUTES CONTRACTÉ EN QUALITÉ DE COMMERÇANT ET QUE LES CONDITIONS DE L'ARTICLE 48 DU CODE DE PROCÉDURE CIVILE SONT RÉUNIES, COMPÉTENCE TERRITORIALE EXCLUSIVE EST ATTRIBUÉE AU TRIBUNAL DE COMMERCE DE BAYONNE, SOUS RÉSERVE DES DISPOSITIONS IMPÉRATIVES APPLICABLES."
      },
      {
        "type": "p",
        "text": "Dans les autres cas, les juridictions compétentes sont déterminées conformément aux règles de droit commun."
      }
    ]
  }
];

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
    else out.push(<a key={k++} href={m[3]}>{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function ArticleBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{inline(block.text)}</p>;
    case "p-strong":
      return <p className="cgv-emphasis">{block.text}</p>;
    case "h3":
      return <h3 className="cgv-sub">{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ol>
      );
  }
}

export default function CGVPage() {
  return (
    <main className="cgv-page">
      <header className="nav">
        <div className="nav-inner" style={{ justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh immo" className="brand-logo" />
            <span>Rushh<span className="brand-immo">immo</span></span>
          </Link>
          <Link href="/" className="nav-link cgv-back-link">
            ← Retour au site
          </Link>
        </div>
      </header>

      <div className="wrap">
        <div className="cgv-hero">
          <span className="section-eyebrow">Légal</span>
          <h1 className="cgv-h1">
            Conditions Générales
            <br />
            de Vente
          </h1>
          <p className="cgv-updated">Version du {VERSION}</p>
        </div>

        <div className="cgv-layout">
          <nav className="cgv-toc" aria-label="Sommaire">
            <span className="cgv-toc-label">Sommaire</span>
            <div className="cgv-toc-list">
              {ARTICLES.map((a) => (
                <Fragment key={a.num}>
                  {a.chapter && <span className="cgv-toc-chapter">{a.chapter}</span>}
                  <a href={`#article-${a.num}`}>
                    {a.num}. {a.title}
                  </a>
                </Fragment>
              ))}
            </div>
          </nav>

          <div className="cgv-content">
            {ARTICLES.map((a) => (
              <Fragment key={a.num}>
                {a.chapter && <p className="cgv-chapter">{a.chapter}</p>}
                <section id={`article-${a.num}`} className="cgv-article">
                  <h2>
                    Article {a.num} — {a.title}
                  </h2>
                  {a.blocks.map((block, i) => (
                    <ArticleBlock key={i} block={block} />
                  ))}
                </section>
              </Fragment>
            ))}
            <p className="cgv-closing">
              <strong>RUSHH — CONDITIONS GÉNÉRALES DE VENTE</strong>
              <br />
              <em>Les présentes CGV s&apos;appliquent aux nouveaux contrats qui les intègrent. Elles ne modifient pas rétroactivement les contrats antérieurement conclus.</em>
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
