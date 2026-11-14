/**
 * Définition de Rushh, affichée en clair juste sous l'en-tête de l'accueil.
 * Même source pour le rendu (DefinitionSection) et le miroir Markdown : la page et sa version texte disent la même chose.
 * Aucun chiffre, aucun prix, aucune promesse de résultat : uniquement ce que le service fait aujourd'hui.
 */
export const HOME_DEFINITION = {
  pill: "Rushh en bref",
  title: "Rushh : l'IA qui répond au téléphone pour votre agence immobilière",
  lead:
    "Rushh est une agence spécialisée dans l'externalisation des appels entrants immobiliers. Son standard téléphonique alimenté par intelligence artificielle décroche à la place de votre équipe, 24 h/24 : une réceptionniste IA, et non une secrétaire humaine, pensée pour les appels de l'immobilier.",
  points: [
    {
      title: "À qui il s'adresse",
      text: "Aux agences de transaction, à la gestion locative, aux syndics, aux mandataires et aux réseaux d'agences qui manquent des appels en visite, en rendez-vous ou après la fermeture.",
    },
    {
      title: "Ce que fait l'IA au téléphone",
      text: "Elle décroche, identifie la demande (vendeur, acquéreur, locataire, copropriétaire…), recueille les informations utiles, peut proposer un rendez-vous sur vos agendas connectés ou transférer l'appel, puis transmet la demande à votre équipe selon vos règles.",
    },
    {
      title: "Ce que prend en charge l'équipe Rushh",
      text: "Nous concevons, configurons, installons, testons, surveillons et optimisons le standard de chaque client. Les scénarios sont construits à partir de votre organisation, pas à partir d'un modèle unique, et nous pouvons développer des automatisations sur mesure lorsque c'est techniquement possible via API.",
    },
    {
      title: "Rien à configurer, rien à maintenir",
      text: "Rushh n'est pas un logiciel à installer et à gérer vous-même. Vous nous expliquez comment vous travaillez et vous validez le fonctionnement : la configuration et la maintenance restent à notre charge.",
    },
  ],
  links: [
    { href: "/offre", label: "Voir ce que Rushh prend en charge" },
    { href: "/ressources/telesecretariat-humain-ou-ia", label: "Télésecrétariat humain ou IA" },
  ],
};

export function homeDefinitionToMd(): string {
  const d = HOME_DEFINITION;
  return `## ${d.title}

${d.lead}

${d.points.map((p) => `- **${p.title}** : ${p.text}`).join("\n")}
`;
}
