"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface CatalogueItem {
  path: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  cover: { src: string; width: number; height: number; alt: string };
  date: string;
  dateLabel: string;
}

export interface CatalogueCategory {
  id: string;
  label: string;
  description: string;
}

function Card({ item, priority = false }: { item: CatalogueItem; priority?: boolean }) {
  return (
    <li className="rc-card">
      <Link href={item.path} className="rc-cover" tabIndex={-1} aria-hidden>
        <Image
          src={item.cover.src}
          alt=""
          width={item.cover.width}
          height={item.cover.height}
          sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1100px) 50vw, 360px"
          priority={priority}
        />
      </Link>
      <div className="rc-body">
        <p className="rc-cat">{item.categoryLabel}</p>
        <h3 className="rc-title"><Link href={item.path}>{item.title}</Link></h3>
        <p className="rc-desc">{item.description}</p>
        <p className="rc-date"><time dateTime={item.date}>{item.dateLabel}</time></p>
      </div>
    </li>
  );
}

/** Catalogue filtrable : tout le contenu est rendu côté serveur ; le filtre ne fait que masquer des cartes. */
export function Catalogue({
  items,
  categories,
  featuredPath,
}: {
  items: CatalogueItem[];
  categories: CatalogueCategory[];
  featuredPath: string;
}) {
  const [filter, setFilter] = useState("all");
  const featured = items.find((i) => i.path === featuredPath);
  const showFeatured = filter === "all" && featured;
  const grid = items.filter((i) => (filter === "all" ? i.path !== featuredPath || !featured : i.category === filter));
  const active = categories.find((c) => c.id === filter);

  return (
    <div className="rc">
      <div className="rc-filters" role="group" aria-label="Filtrer les publications par catégorie">
        <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          Tous les articles <span>{items.length}</span>
        </button>
        {categories.map((c) => (
          <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label} <span>{items.filter((i) => i.category === c.id).length}</span>
          </button>
        ))}
      </div>
      <p className="rc-filter-note" aria-live="polite">
        {active ? active.description : `${items.length} publications : guides, comparatifs et méthodes pour les appels entrants d'une agence.`}
      </p>

      {showFeatured && (
        <article className="rc-featured">
          <Link href={featured.path} className="rc-cover" tabIndex={-1} aria-hidden>
            <Image
              src={featured.cover.src}
              alt=""
              width={featured.cover.width}
              height={featured.cover.height}
              sizes="(max-width: 900px) calc(100vw - 32px), 560px"
              priority
            />
          </Link>
          <div className="rc-body">
            <p className="rc-flag">À la une · {featured.categoryLabel}</p>
            <h2 className="rc-feat-title"><Link href={featured.path}>{featured.title}</Link></h2>
            <p className="rc-desc">{featured.description}</p>
            <p className="rc-date"><time dateTime={featured.date}>{featured.dateLabel}</time></p>
            <Link href={featured.path} className="rc-read">Lire le comparatif</Link>
          </div>
        </article>
      )}

      <ul className="rc-grid" aria-label="Publications">
        {grid.map((i) => (
          <Card key={i.path} item={i} />
        ))}
      </ul>
    </div>
  );
}
