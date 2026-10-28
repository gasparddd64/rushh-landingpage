/** Briques communes du miroir Markdown des pages /solutions/* alimentées par des données (même source que le rendu React). */

export const SITE_URL = "https://www.rushh.fr";
export const DEMO_URL = "https://calendly.com/gaspard-david/demo";

export interface Faq {
  q: string;
  a: string;
}

export interface Example {
  title: string;
  line: string;
  rows: [string, string][];
}

export interface Link {
  href: string;
  label: string;
}

export const faqSchema = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const bullets = (items: string[]) => items.map((t) => `- ${t}`).join("\n");

export const rowsToMd = (rows: [string, string][]) => rows.map(([k, v]) => `- ${k} : ${v}`).join("\n");

export const arrowsToMd = (rows: [string, string][]) => rows.map(([a, b]) => `- ${a} → ${b}`).join("\n");

export const faqToMd = (items: Faq[]) => items.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");

export const linksToMd = (links: Link[]) => links.map((l) => `[${l.label}](${SITE_URL}${l.href})`).join(" · ");

export const exampleToMd = (e: Example) => `### ${e.title} (exemple fictif)\n\n« ${e.line} »\n\n${rowsToMd(e.rows)}`;
