import type { Block, ArticleSection } from "./types";

/** Raccourcis de rédaction pour les articles au format `bare` (texte court : réponse, exemple, Rushh, invitation). */
export const p = (text: string): Block => ({ t: "p", text });
export const h3 = (text: string): Block => ({ t: "h3", text });
export const ul = (items: string[]): Block => ({ t: "ul", items });
export const ol = (items: string[]): Block => ({ t: "ol", items });
export const statement = (text: string): Block => ({ t: "statement", text });
/** Exemple fictif (jamais présenté comme un cas client). */
export const example = (text: string): Block => ({ t: "callout", kind: "example", text });

export const section = (id: string, h2: string, ...blocks: Block[]): ArticleSection => ({ id, h2, blocks });

/** Dernière section : une phrase d'invitation et l'unique bouton vers la démonstration. */
export const demoSection = (h2: string, text: string): ArticleSection => ({
  id: "demonstration",
  h2,
  blocks: [p(text), { t: "button", label: "Tester le standard", href: "/demonstrations" }],
});
