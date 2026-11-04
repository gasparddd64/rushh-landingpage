export type LegalBlock =
  | { t: "p"; text: string }
  | { t: "strong"; text: string }
  | { t: "label"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "dl"; items: [string, string][] };

export interface LegalSection {
  id: string;
  /** Numéro d'article ou de section affiché dans la pastille. */
  num: number;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Ex. « Dernière mise à jour : 4 novembre 2026 ». */
  updated: string;
  /** Préfixe du titre de section dans le sommaire et le Markdown (« Article » ou vide). */
  sectionPrefix?: string;
  sections: LegalSection[];
  /** Lignes de clôture en bas de page. */
  closing?: string[];
}
