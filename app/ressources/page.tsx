import Link from "next/link";
import { websiteRef } from "@/lib/brand";
import { Catalogue, type CatalogueItem } from "@/components/resources/Catalogue";
import { JsonLd, SITE, SolShell, buildMetadata } from "@/components/solutions/kit";
import { CATALOGUE } from "@/lib/articles/catalogue";
import { CATEGORIES, FEATURED_PATH, categoryCardLabel } from "@/lib/articles/categories";
import { CATALOGUE_DESCRIPTION, CATALOGUE_TITLE } from "@/lib/articles/catalogue-markdown";
import "./res.css";
import "./catalogue.css";

const TITLE = CATALOGUE_TITLE;
const DESCRIPTION = CATALOGUE_DESCRIPTION;
const PATH = "/ressources";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function RessourcesPage() {
  const items: CatalogueItem[] = CATALOGUE.map((e) => ({
    path: e.path,
    title: e.title,
    summary: e.summary,
    category: e.category,
    categoryLabel: categoryCardLabel(e.category),
    cover: e.cover,
  }));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: `${SITE}${PATH}`,
    description: DESCRIPTION,
    inLanguage: "fr-FR",
    isPartOf: websiteRef,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((i, n) => ({ "@type": "ListItem", position: n + 1, url: `${SITE}${i.path}`, name: i.title })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}${PATH}` },
    ],
  };

  return (
    <SolShell className="res res-index">
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="ri-wrap">
        <header className="ri-head">
          <nav className="res-crumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <span>Blog</span>
          </nav>
          <p className="res-cat">Blog Rushh</p>
          <h1 className="ri-h1">Le Blog Rushh : guides et comparatifs pour les appels de votre agence immobilière</h1>
          <p className="ri-lead">
            Mesurer les appels manqués, qualifier les demandes, comparer les standards téléphoniques IA : des contenus
            sourcés et datés, utiles quel que soit le fournisseur que vous choisirez.
          </p>
        </header>

        <Catalogue
          items={items}
          categories={CATEGORIES.map((c) => ({ id: c.id, label: c.label, description: c.description }))}
          featuredPath={FEATURED_PATH}
        />

        <aside className="ri-cta" aria-label="Découvrir Rushh">
          <p>
            Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu, configuré et suivi pour les
            professionnels de l&apos;immobilier. Tarification sur devis.
          </p>
          <div>
            <Link href="/offre">L&apos;offre Rushh</Link>
            <Link href="/demonstrations">Ligne de démonstration</Link>
          </div>
        </aside>
      </div>
    </SolShell>
  );
}
