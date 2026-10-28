import { CALLOUT_LABEL, formatFrenchDate, type Article, type Block } from "./types";

const SITE_URL = "https://www.rushh.fr";
const CALENDLY = "https://calendly.com/gaspard-david/demo";

/** Rend les liens relatifs absolus pour le miroir Markdown. */
function abs(text: string): string {
  return text.replace(/\]\((\/[^)]*)\)/g, (_m, p: string) => `](${SITE_URL}${p})`);
}

function cell(text: string): string {
  return abs(text).replace(/\|/g, "\\|");
}

function blockToMarkdown(b: Block): string {
  switch (b.t) {
    case "p":
      return abs(b.text);
    case "ul":
      return b.items.map((i) => `- ${abs(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${abs(i)}`).join("\n");
    case "h3":
      return `### ${b.text}`;
    case "callout":
      return `> **${CALLOUT_LABEL[b.kind]}.** ${abs(b.text)}`;
    case "checklist":
      return b.items.map((i) => `- [ ] ${abs(i)}`).join("\n");
    case "table": {
      const head = `| ${b.head.map(cell).join(" | ")} |`;
      const sep = `|${b.head.map(() => "---").join("|")}|`;
      const rows = b.rows.map((r) => `| ${r.map(cell).join(" | ")} |`);
      return [`${b.caption}`, "", head, sep, ...rows, ...(b.note ? ["", b.note] : [])].join("\n");
    }
    case "fiche":
      return [`**${b.title}**`, "", ...b.rows.map(([k, v]) => `- ${k} : ${abs(v)}`), ...(b.note ? ["", b.note] : [])].join("\n");
  }
}

export function articleToMarkdown(a: Article): string {
  const parts: string[] = [
    `# ${a.h1}`,
    `Publié le ${formatFrenchDate(a.datePublished)}. Mis à jour le ${formatFrenchDate(a.dateModified)}. Rédaction Rushh.`,
    `**En bref.** ${a.answer}`,
  ];
  if (a.cover) parts.splice(3, 0, `![${a.cover.alt}](${SITE_URL}${a.cover.src})`);
  for (const s of a.sections) {
    parts.push(`## ${s.h2}`);
    for (const b of s.blocks) parts.push(blockToMarkdown(b));
  }
  parts.push("## Sources et méthode");
  if (a.sources.length > 0) {
    parts.push(a.sources.map((s) => `- [${s.label}](${s.url}) : ${s.usedFor}`).join("\n"));
  }
  parts.push(a.sourcesNote);
  parts.push("## À lire aussi");
  parts.push(a.related.map((r) => `- [${r.label}](${SITE_URL}${r.href}) : ${r.text}`).join("\n"));
  parts.push(`## ${a.cta.title}`);
  parts.push(`${a.cta.text} Réserver une démo : [${CALENDLY}](${CALENDLY})`);
  parts.push(a.cta.links.map((l) => `[${l.label}](${SITE_URL}${l.href})`).join(" · "));
  return parts.join("\n\n") + "\n";
}
