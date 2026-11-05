import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { categoryCardLabel } from "@/lib/articles/categories";
import "@/app/closing.css";

/** Les trois publications les plus utiles pour un directeur d'agence : le constat, l'appel vendeur, la rentabilité. */
const PICKS = [
  "/ressources/appels-manques-immobilier",
  "/ressources/appel-vendeur-estimation-immobiliere",
  "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere",
];

/** Descriptions courtes de la page d'accueil (les titres restent ceux des articles). */
const BLURBS: Record<string, string> = {
  "/ressources/appels-manques-immobilier": "Quatre étapes concrètes pour ne plus laisser vos opportunités sans suite.",
  "/ressources/appel-vendeur-estimation-immobiliere": "Les bonnes questions pour qualifier un propriétaire et préparer votre prochain mandat.",
  "/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere": "Combien vos appels manqués peuvent-ils vous coûter ? Faites le calcul.",
};

const fmt = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export function BlogSection() {
  const items = PICKS.map((p) => ARTICLES.find((a) => a.path === p)!).filter(Boolean);
  return (
    <section className="bl" aria-labelledby="blog-title">
      <div className="bl-wrap">
        <div className="bl-head">
          <span className="bl-pill">Conseils &amp; ressources</span>
          <h2 id="blog-title" className="bl-title">
            Mieux gérer vos appels, c&apos;est aussi gagner des mandats.
          </h2>
          <p className="bl-sub">
            Appels manqués, propriétaires vendeurs, rentabilité : nos conseils pour faire de chaque appel une opportunité.
          </p>
        </div>

        <div className="bl-grid">
          {items.map((a) => (
            <article key={a.path} className="bl-card">
              <Link href={a.path} className="bl-media" tabIndex={-1} aria-hidden>
                <img src={a.cover!.src} width={a.cover!.width} height={a.cover!.height} alt="" loading="lazy" />
              </Link>
              <div className="bl-meta">
                <span className="bl-tag">{categoryCardLabel(a.category)}</span>
                <time dateTime={a.datePublished}>{fmt.format(new Date(a.datePublished))}</time>
              </div>
              <h3 className="bl-card-title">
                <Link href={a.path}>{a.shortTitle ?? a.h1}</Link>
              </h3>
              <p className="bl-excerpt">{BLURBS[a.path] ?? a.summary ?? a.description}</p>
              <Link href={a.path} className="bl-more">
                Lire l&apos;article
              </Link>
            </article>
          ))}
        </div>

        <Link href="/ressources" className="bl-all">
          Tous les articles
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
