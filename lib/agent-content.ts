/**
 * Shared data + pure logic for agent-facing (Markdown) content negotiation.
 * Kept dependency-free so it can run in `proxy.ts` and be unit-tested directly.
 */

export const SITE_URL = "https://www.rushh.fr";

export interface MarkdownPage {
  title: string;
  markdown: string;
}

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Est-ce une intelligence artificielle qui répond aux appels ?",
    a: "Oui. Le Standard Rushh s'appuie sur une intelligence artificielle vocale pour accueillir l'appel, comprendre la demande et recueillir les informations utiles. Elle traite le premier niveau selon les règles de l'agence, et transmet à l'équipe dès qu'un échange humain est nécessaire.",
  },
  {
    q: "Le Standard Rushh est-il conforme au RGPD ?",
    a: "Oui, Rushh est 100 % conforme au RGPD. Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les demandes de l'agence, dans le cadre qu'elle définit.",
  },
  {
    q: "Est-ce que le Standard Rushh remplace l'équipe de l'agence ?",
    a: "Non. Le Standard Rushh intervient lorsque l'équipe ne peut pas prendre en charge un appel, ou sur les situations que l'agence choisit de lui confier. L'agence définit les cas dans lesquels l'appel doit être transmis à un collaborateur.",
  },
  {
    q: "Que se passe-t-il si un client veut parler à quelqu'un de l'agence ?",
    a: "Selon les règles définies par l'agence, le Standard Rushh peut transmettre l'appel, recueillir les informations nécessaires ou organiser la suite avec l'équipe.",
  },
  {
    q: "Est-ce à l'agence de configurer et maintenir le système ?",
    a: "Non. Rushh conçoit, configure, teste et fait évoluer le standard téléphonique avec l'agence.",
  },
  {
    q: "Combien de temps faut-il pour déployer le Standard Rushh ?",
    a: "La mise en production cible est réalisée sous 5 jours ouvrés après réception de l'ensemble des éléments nécessaires au déploiement.",
  },
];

const FAQ_MARKDOWN = FAQ.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n");

export const MARKDOWN_PAGES: Record<string, MarkdownPage> = {
  "/": {
    title: "Rushh — Agent vocal IA pour agence immobilière",
    markdown: `# Rushh — Agent vocal IA pour agence immobilière

Rushh conçoit et déploie un standard téléphonique IA sur-mesure pour les agences immobilières : il décroche, qualifie et transmet chaque appel 24 h/24, avec un déploiement adapté à l'agence en 5 jours ouvrés.

## Chaque appel compte pour votre agence

Rushh prend le relais quand l'équipe de l'agence n'est pas disponible. Chaque appel est compris et traité selon les règles définies par l'agence : besoin compris, informations recueillies, action adaptée (rendez-vous, transfert ou message), équipe informée avec le contexte utile pour reprendre la demande.

## Une équipe à vos côtés, pas un outil générique

Le Standard Rushh n'est pas un logiciel à configurer soi-même : une équipe conçoit, déploie et fait évoluer le standard selon le fonctionnement réel de l'agence (syndic, gérance, transaction).

## Intégrations

Rushh s'intègre aux outils déjà utilisés par l'agence : Google Calendar, Outlook, Hektor, Apimo, Whise. Voir [/integrations](${SITE_URL}/integrations) pour le détail des intégrations disponibles.

## Ce que disent les agences

Des directrices d'agence, responsables location et agents indépendants utilisent le Standard Rushh pour ne plus perdre d'appels pendant les visites, après la fermeture de l'agence, ou pour disposer d'un historique clair de chaque appel.

## FAQ

${FAQ_MARKDOWN}

## En savoir plus

- [À propos](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Confidentialité](${SITE_URL}/privacy)
- [Intégrations](${SITE_URL}/integrations)
- [Conditions Générales de Vente](${SITE_URL}/cgv)
- [Guide pour agents IA (llms.txt)](${SITE_URL}/llms.txt)
- [Plan du site](${SITE_URL}/sitemap.xml)

Contact : hello@rushh.fr — +33 5 17 94 85 49
`,
  },
  "/about": {
    title: "À propos | Rushh",
    markdown: `# À propos de Rushh

Rushh conçoit et déploie le Standard téléphonique IA pensé pour l'immobilier : un agent vocal qui décroche, qualifie et transmet chaque appel entrant d'une agence immobilière, 24 h/24.

## Qui édite Rushh

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023). L'établissement est situé 13 Rue du Brise Lames, 64600 Anglet, France.

## Notre mission

Les agences immobilières perdent des appels pendant les visites, après la fermeture, ou lorsque l'équipe est occupée. Rushh a été conçu pour que chaque appel entrant soit pris en charge selon les règles propres à chaque agence : qualification du besoin, prise de rendez-vous, transfert vers le bon interlocuteur ou transmission d'une fiche prête à traiter.

## Pour qui

Le Standard Rushh est pensé pour les métiers de l'immobilier : transaction, gérance locative et syndic de copropriété. Il s'intègre aux outils déjà utilisés par l'agence (Google Calendar, Outlook, Hektor, Apimo, Whise) sans changer les habitudes de l'équipe.

## Données hébergées en France

Les données traitées par le Standard Rushh sont hébergées en France.

## Contact

- Email : hello@rushh.fr
- Téléphone : +33 5 17 94 85 49
- Adresse : 13 Rue du Brise Lames, 64600 Anglet, France
`,
  },
  "/contact": {
    title: "Contact | Rushh",
    markdown: `# Contact Rushh

Une question sur le Standard Rushh, une démo à organiser, ou un point sur un déploiement en cours : voici comment joindre l'équipe.

## Coordonnées

- Email : hello@rushh.fr
- Téléphone : +33 5 17 94 85 49
- Adresse : 13 Rue du Brise Lames, 64600 Anglet, France

## Réserver un échange

Pour réserver une démonstration du Standard Rushh, utilisez le formulaire de prise de rendez-vous disponible sur la page d'accueil (${SITE_URL}/), ou écrivez directement à hello@rushh.fr en précisant le nom de l'agence et le métier concerné (transaction, gérance, syndic).

## Éditeur

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023).

## Autres ressources

- [À propos](${SITE_URL}/about)
- [Intégrations](${SITE_URL}/integrations)
- [Conditions Générales de Vente](${SITE_URL}/cgv)
- [Confidentialité](${SITE_URL}/privacy)
`,
  },
  "/privacy": {
    title: "Confidentialité | Rushh",
    markdown: `# Politique de confidentialité — Rushh

Cette page décrit, à titre informatif, comment Rushh traite les données dans le cadre du Standard téléphonique IA fourni aux agences immobilières clientes. Pour le détail contractuel complet du traitement des données, se reporter au contrat ou au DPA (Data Processing Agreement) applicable, mentionné dans les Conditions Générales de Vente (${SITE_URL}/cgv).

## Responsable de traitement

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023), 13 Rue du Brise Lames, 64600 Anglet, France.

## Données traitées

Dans le cadre du Standard Rushh, les données traitées incluent notamment : les informations recueillies lors des appels entrants (identité de l'appelant, motif de l'appel, informations de qualification), les données de rendez-vous transmises aux outils connectés (agenda, CRM), et les données de contact des agences clientes.

## Hébergement

Les données sont hébergées en France.

## Vos droits

Toute personne concernée par un traitement de données peut exercer ses droits d'accès, de rectification, d'opposition et de suppression en écrivant à hello@rushh.fr.

## Contact

Pour toute question relative à la confidentialité des données, contactez hello@rushh.fr ou consultez la page [Contact](${SITE_URL}/contact).
`,
  },
  "/integrations": {
    title: "Intégrations & ressources | Rushh",
    markdown: `# Intégrations & ressources techniques — Rushh

Rushh s'intègre à l'environnement déjà utilisé par l'agence immobilière, sans changer ses habitudes de travail.

## Intégrations disponibles

- **Google Calendar** — synchronisation des rendez-vous pris par le Standard Rushh.
- **Outlook** — synchronisation des rendez-vous pris par le Standard Rushh.
- **Hektor** — transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Hektor.
- **Apimo** — transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Apimo.
- **Whise** — transmission des fiches prospects et des rendez-vous au logiciel métier immobilier Whise.

Un outil qui ne figure pas dans cette liste ? L'équipe Rushh étudie l'interconnexion possible lors de l'échange de mise en place.

## Quand utiliser Rushh

- Une agence immobilière (transaction, gérance locative, syndic) souhaite ne plus perdre d'appels pendant les visites ou après la fermeture de l'agence.
- Une agence a besoin d'un standard qui qualifie les appelants et transmette une fiche prête à traiter, plutôt qu'un simple renvoi ou une messagerie.
- Une agence veut connecter la prise de rendez-vous téléphonique à son agenda (Google Calendar, Outlook) et à son logiciel métier (Hektor, Apimo, Whise).

## Ressources

- [À propos](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Guide pour agents IA (llms.txt)](${SITE_URL}/llms.txt)
- [Plan du site](${SITE_URL}/sitemap.xml)
`,
  },
  "/cgv": {
    title: "Conditions Générales de Vente | Rushh",
    markdown: `# Conditions Générales de Vente — Rushh

Les Conditions Générales de Vente complètes de Rushh sont disponibles sur ${SITE_URL}/cgv.

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023), 13 Rue du Brise Lames, 64600 Anglet, France.

Rushh conçoit, configure, déploie et maintient pour ses clients un standard téléphonique personnalisé : réception automatisée d'appels entrants, qualification des appelants, prise de rendez-vous, transmission de fiches prospects et interconnexion avec l'agenda ou le CRM du client.

Voir la page complète pour le détail des articles (objet, description du service, obligations des parties, tarifs, durée, résiliation).
`,
  },
  "/vs/joe-ai": {
    title: "Rushh vs Joe AI | Rushh",
    markdown: `# Rushh vs Joe AI

Comparatif entre Rushh, le Standard téléphonique sur-mesure pour l'immobilier, et Joe AI, plateforme multicanale standardisée par métier.

Rushh conçoit un standard téléphonique adapté au fonctionnement réel de chaque agence immobilière, avec une équipe qui configure, déploie et fait évoluer le service — plutôt qu'une plateforme générique à paramétrer soi-même.

Voir la page complète : ${SITE_URL}/vs/joe-ai
`,
  },
  "/confirmation": {
    title: "Rendez-vous confirmé | Rushh",
    markdown: `# Rendez-vous confirmé

Votre demande d'échange avec l'équipe Rushh a bien été prise en compte.

Retour à l'accueil : ${SITE_URL}/
`,
  },
};

/** Real app routes that intentionally have no Markdown representation (e.g. authenticated product surfaces). */
export const KNOWN_NON_MARKDOWN_ROUTES = ["/dashboard", "/campaigns", "/inbox", "/prospects"];

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

/**
 * Parses an `Accept` header and decides whether the client is asking for a
 * Markdown representation of the page (rather than, or ahead of, HTML).
 */
export function wantsMarkdown(acceptHeader: string | null | undefined): boolean {
  if (!acceptHeader) return false;
  const accept = acceptHeader.toLowerCase();
  if (!accept.includes("text/markdown")) return false;

  const markdownQ = extractQuality(accept, "text/markdown") ?? 1;
  const htmlQ = extractQuality(accept, "text/html");

  // No explicit HTML preference, or Markdown is at least as preferred as HTML.
  if (htmlQ === null) return true;
  return markdownQ >= htmlQ;
}

function extractQuality(accept: string, mediaType: string): number | null {
  const entry = accept
    .split(",")
    .map((part) => part.trim())
    .find((part) => part.startsWith(mediaType));
  if (!entry) return null;
  const match = entry.match(/q=([0-9.]+)/);
  return match ? parseFloat(match[1]) : 1;
}

export function getMarkdownPage(pathname: string): MarkdownPage | null {
  return MARKDOWN_PAGES[normalizePathname(pathname)] ?? null;
}

export function isKnownRoute(pathname: string): boolean {
  const normalized = normalizePathname(pathname);
  if (normalized in MARKDOWN_PAGES) return true;
  return KNOWN_NON_MARKDOWN_ROUTES.includes(normalized);
}

export function build404Markdown(pathname: string): string {
  return `# 404 — Page introuvable

La page \`${pathname}\` n'existe pas sur ${SITE_URL}.

Ressources utiles :
- Accueil : ${SITE_URL}/
- Plan du site : ${SITE_URL}/sitemap.xml
- Guide pour agents IA : ${SITE_URL}/llms.txt
`;
}
