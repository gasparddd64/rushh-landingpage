import Link from "next/link";
import { Catalogue, type CatalogueItem } from "@/components/resources/Catalogue";
import { JsonLd, SITE, SolShell, buildMetadata } from "@/components/solutions/kit";
import { ARTICLES, CATEGORIES, FEATURED_PATH, categoryLabel, formatFrenchDate } from "@/lib/articles";
import "./res.css";
import "./catalogue.css";

const TITLE = "Ressources : guides et comparatifs pour les appels d'agence | Rushh";
const DESCRIPTION =
  "Guides, comparatifs et méthodes pour les appels entrants des agences immobilières : appels manqués, qualification, standards téléphoniques IA.";
const PATH = "/ressources";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function RessourcesPage() {
  const items: CatalogueItem[] = [...ARTICLES]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((a) => ({
      path: a.path,
      title: a.shortTitle ?? a.h1,
      description: a.description,
      category: a.category,
      categoryLabel: categoryLabel(a.category),
      cover: a.cover!,
      date: a.datePublished,
      dateLabel: formatFrenchDate(a.datePublished),
    }));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: `${SITE}${PATH}`,
    description: DESCRIPTION,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: "Rushh", url: SITE },
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
      { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE}${PATH}` },
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
            <span>Ressources</span>
          </nav>
          <p className="res-cat">Ressources Rushh</p>
          <h1 className="ri-h1">Guides et comparatifs pour les appels de votre agence immobilière</h1>
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
