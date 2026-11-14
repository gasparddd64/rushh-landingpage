/**
 * Comparaison de trois façons de gérer ses appels, affichée sur /offre.
 * Même source pour le rendu et le miroir Markdown. Description générale de chaque approche : aucun concurrent nommé,
 * aucun prix, aucun chiffre. Les avantages et les limites sont présentés pour chacune, y compris pour Rushh.
 * Le détail humain / IA est traité dans l'article « télésecrétariat humain ou IA » (lien en bas de section).
 */
export interface CompareOption {
  id: string;
  name: string;
  who: string;
  pros: string[];
  limits: string[];
  highlight?: boolean;
}

export const OFFRE_COMPARE = {
  pill: "Trois approches",
  title: "Standard IA en libre-service, télésecrétariat humain ou Rushh : que choisir ?",
  sub: "Trois façons de ne plus laisser vos appels sans réponse, avec leurs avantages et leurs limites.",
  options: [
    {
      id: "self",
      name: "Standard téléphonique IA en libre-service",
      who: "Un logiciel que l'agence paramètre et fait évoluer elle-même.",
      pros: [
        "Vous gardez la main sur chaque réglage.",
        "Le démarrage ne dépend pas d'un prestataire.",
        "Convient si quelqu'un peut y consacrer du temps.",
      ],
      limits: [
        "Configuration, tests et ajustements restent à votre charge.",
        "La qualité dépend des scénarios que vous écrivez.",
        "La spécialisation immobilière varie selon l'outil.",
      ],
    },
    {
      id: "human",
      name: "Télésecrétariat humain externalisé",
      who: "Des secrétaires, le plus souvent partagées entre plusieurs entreprises, répondent à vos appels.",
      pros: [
        "Une voix humaine dès le premier mot.",
        "Adapté aux appelants qui veulent absolument parler à une personne.",
      ],
      limits: [
        "Les plages de réponse et la capacité dépendent du contrat.",
        "La connaissance de votre agence se limite aux consignes transmises.",
        "Le coût suit généralement le volume d'appels.",
      ],
    },
    {
      id: "rushh",
      name: "Rushh, service entièrement pris en charge",
      who: "Un standard téléphonique alimenté par intelligence artificielle conçu, configuré, installé, testé, surveillé et optimisé par l'équipe Rushh. C'est une IA qui décroche, et non une secrétaire humaine.",
      pros: [
        "Rien à configurer ni à maintenir de votre côté.",
        "Réponse 24 h/24 selon les règles validées avec vous.",
        "Pensé pour les appels de l'immobilier.",
        "Transfert vers vos collaborateurs lorsque c'est prévu.",
        "Automatisations sur mesure possibles lorsque c'est techniquement faisable via API.",
      ],
      limits: [
        "L'appelant parle à une IA, pas à une personne.",
        "Une mise en place précède la mise en service : analyse, tests, validation.",
        "Le standard n'applique que les règles définies avec vous.",
        "Les connexions et automatisations dépendent des API et des autorisations disponibles.",
      ],
      highlight: true,
    },
  ] satisfies CompareOption[],
  note: "Aucune de ces approches ne convient à tout le monde : le bon choix dépend du temps que vous pouvez consacrer au paramétrage et de la place que vous voulez laisser à une voix humaine.",
  links: [
    { href: "/ressources/rushh-standard-telephonique-ia-immobilier", label: "Qu'est-ce que Rushh ?" },
    { href: "/ressources/telesecretariat-humain-ou-ia", label: "Télésecrétariat humain ou IA : le comparatif détaillé" },
    { href: "/comparatif/standards-telephoniques-ia-immobilier", label: "Comparatif des standards IA" },
    { href: "/#faq", label: "Questions fréquentes" },
  ],
};

export function offreCompareToMd(): string {
  const c = OFFRE_COMPARE;
  return `## ${c.title}

${c.sub}

${c.options
  .map(
    (o) => `### ${o.name}

${o.who}

Avantages :

${o.pros.map((t) => `- ${t}`).join("\n")}

Limites :

${o.limits.map((t) => `- ${t}`).join("\n")}`,
  )
  .join("\n\n")}

${c.note}

${c.links.map((l) => `- [${l.label}](https://www.rushh.fr${l.href})`).join("\n")}
`;
}
