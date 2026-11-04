import type { LegalBlock, LegalDoc } from "./types";

const SITE_URL = "https://www.rushh.fr";

function abs(text: string): string {
  return text.replace(/\]\((\/[^)]*)\)/g, (_m, p: string) => `](${SITE_URL}${p})`);
}

function cell(text: string): string {
  return abs(text).replace(/\|/g, "\\|");
}

function blockToMd(b: LegalBlock): string {
  switch (b.t) {
    case "p":
      return abs(b.text);
    case "strong":
      return `**${b.text}**`;
    case "label":
      return `### ${b.text}`;
    case "ul":
      return b.items.map((i) => `- ${abs(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${abs(i)}`).join("\n");
    case "dl":
      return b.items.map(([k, v]) => `- ${k} : ${abs(v)}`).join("\n");
    case "table": {
      const head = `| ${b.head.map(cell).join(" | ")} |`;
      const sep = `|${b.head.map(() => "---").join("|")}|`;
      return [head, sep, ...b.rows.map((r) => `| ${r.map(cell).join(" | ")} |`)].join("\n");
    }
  }
}

/** Miroir Markdown d'une page légale, généré depuis les mêmes données que la page. */
export function legalToMarkdown(d: LegalDoc): string {
  const parts = [`# ${d.title}`];
  if (d.lead) parts.push(d.lead);
  if (d.updated) parts.push(`**${d.updated}**`);
  for (const s of d.sections) {
    parts.push(`## ${d.sectionPrefix ? `${d.sectionPrefix} ${s.num} — ` : `${s.num}. `}${s.title}`);
    for (const b of s.blocks) parts.push(blockToMd(b));
  }
  if (d.closing?.length) parts.push("---", ...d.closing);
  return parts.join("\n\n") + "\n";
}
