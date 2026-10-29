import type { CallSample } from "@/components/solutions/premium";
import { bullets } from "./markdown";

/**
 * Contenus « premium » des pages solutions rédigées en JSX (transaction, syndics, réseaux),
 * des pages /offre et /demonstrations : exemple d'appel du hero, différenciateurs choisis pour
 * l'intention de la page, preuve par l'écoute. Même source pour le rendu et le miroir Markdown.
 */

export interface DiffBlock {
  pill: string;
  title: string;
  sub: string;
  items: { title: string; text: string; link?: { href: string; label: string } }[];
}

export interface ProofBlock {
  title: string;
  text: string;
  say: string[];
}

export interface PremiumContent {
  lead: string;
  sample: CallSample;
  diff: DiffBlock;
  proof: ProofBlock;
}

const VOICE = {
  title: "Une voix naturelle, pas un menu téléphonique",
  text: "L'appelant explique son besoin normalement et reçoit des réponses rapides, sans parcourir un menu rigide. La voix est personnalisable, et peut être clonée avec l'autorisation de son titulaire.",
  link: { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
};

const MANAGED = {
  title: "Un standard conçu pour votre organisation, pas un modèle",
  text: "Rushh analyse votre fonctionnement, construit les scénarios, connecte vos outils, teste, puis suit et améliore le Standard avec vous. Vous expliquez comment vous travaillez : nous nous occupons du reste.",
  link: { href: "/offre", label: "Voir ce que Rushh prend en charge" },
};

export const TRANSACTION: PremiumContent = {
  lead: "Un propriétaire veut faire estimer son bien, un acquéreur veut visiter : ils appellent pendant que vos négociateurs sont en visite. Rushh décroche, recueille le projet, peut proposer un créneau lorsque votre agenda est connecté, puis transmet à votre équipe une demande prête à traiter.",
  sample: {
    caller: "Acquéreur",
    quote: "Je recherche un T3 à Paris avec un budget de 450 000 €.",
    rows: [
      ["Motif", "Recherche d'un bien"],
      ["Critères", "T3, Paris"],
      ["Budget", "Indiqué par l'appelant : 450 000 €"],
      ["Suite", "Visite ou rappel, selon vos règles"],
    ],
    outcome: "Transmis au négociateur concerné",
  },
  diff: {
    pill: "Pourquoi Rushh",
    title: "Ce qui change pour une agence de transaction",
    sub: "Trois différences à vérifier par vous-même, au téléphone et dans la mise en place.",
    items: [
      {
        title: "Un appel devient une opportunité suivie, pas un numéro manqué",
        text: "Dans la plateforme Rushh, vous voyez qui a appelé, pourquoi, le résumé de l'échange, sa transcription et son audio lorsque l'enregistrement est activé, puis le statut de traitement. Pendant l'appel, le Standard peut aussi consulter l'agenda et réserver un créneau, envoyer un SMS ou un e-mail récapitulatif, et transmettre le contact à votre logiciel immobilier lorsque les connexions et les droits sont configurés.",
      },
      VOICE,
      MANAGED,
    ],
  },
  proof: {
    title: "Jouez le rôle d'un vendeur ou d'un acquéreur",
    text: "Appelez la ligne de démonstration : vous jugez la voix, la rapidité des réponses et la manière dont la demande est qualifiée, avant tout échange commercial.",
    say: [
      "Bonjour, je souhaite faire estimer mon appartement à Paris.",
      "Je recherche un T3 à Paris avec un budget de 450 000 €.",
    ],
  },
};

export const SYNDICS: PremiumContent = {
  lead: "Un copropriétaire signale une fuite, un prestataire demande un accès, un conseil syndical veut un point : Rushh identifie l'appelant, qualifie le motif et applique vos règles de priorité et d'orientation. Vos gestionnaires reçoivent des demandes déjà triées. Les scénarios sont étudiés avec vous, selon le fonctionnement de votre cabinet.",
  sample: {
    caller: "Copropriétaire",
    quote: "Il y a une fuite dans le couloir de l'immeuble.",
    rows: [
      ["Motif", "Signalement dans les parties communes"],
      ["Précisions", "Telles que décrites par l'appelant"],
      ["Priorité", "Selon vos critères"],
      ["Transmis à", "Le gestionnaire concerné"],
    ],
    outcome: "Signalement transmis avec son contexte",
  },
  diff: {
    pill: "Pourquoi Rushh",
    title: "Ce qui compte pour un cabinet de syndic",
    sub: "Des différences concrètes, à vérifier lors de la démonstration.",
    items: [
      {
        title: "Des demandes triées par motif et par priorité",
        text: "Copropriétaire, conseil syndical, prestataire : le Standard identifie qui appelle, cerne le motif et oriente selon votre répartition. Chaque gestionnaire reçoit ce qui relève de ses immeubles.",
      },
      {
        title: "Des consignes d'urgence écrites avec vous, puis testées",
        text: "Ce qui est urgent se décide dans votre cabinet. Rushh rédige les consignes d'escalade avec vous, les teste avant la mise en service et les ajuste ensuite. Le Standard ne diagnostique rien et n'applique que ce qui a été validé.",
      },
      MANAGED,
    ],
  },
  proof: {
    title: "Écoutez comment un appel est conduit",
    text: "La ligne de démonstration simule une agence immobilière fictive. Vous entendez la voix, la rapidité des réponses et la façon de recueillir une demande avant de la transmettre.",
    say: ["Est-ce que vous pouvez transmettre un message à votre équipe ?", "Bonjour, j'aimerais organiser une visite pour un appartement."],
  },
};

export const MULTI: PremiumContent = {
  lead: "Chaque agence a ses horaires, ses équipes et ses habitudes, mais le groupe attend un accueil homogène. Rushh applique des règles communes, les adapte agence par agence et regroupe le suivi des appels et des opportunités dans une même plateforme. Vous nous expliquez votre organisation, nous nous occupons du reste.",
  sample: {
    caller: "Acquéreur",
    quote: "Je voudrais visiter une maison proposée par votre agence de Lyon.",
    rows: [
      ["Motif", "Visite d'un bien"],
      ["Agence concernée", "Celle que l'appelant indique"],
      ["Règle appliquée", "Celle de cette agence"],
      ["Suite", "Transmission à la bonne équipe"],
    ],
    outcome: "Orienté vers la bonne agence",
  },
  diff: {
    pill: "Pourquoi Rushh",
    title: "Ce qui compte quand on pilote plusieurs agences",
    sub: "Trois différences à vérifier lors de la démonstration.",
    items: [
      {
        title: "Des règles communes, des adaptations par agence",
        text: "Le groupe définit ce qui doit être identique : la façon d'accueillir, les informations à recueillir. Chaque agence garde ses horaires, ses interlocuteurs et ses exceptions. Rien n'est imposé par un modèle unique.",
      },
      {
        title: "Un suivi multi-agences au même endroit",
        text: "La plateforme Rushh gère plusieurs agences et plusieurs standards dans la même interface : volumes d'appels, opportunités à traiter, statuts et attribution à un membre de l'équipe.",
      },
      {
        title: "Un déploiement géré, agence par agence",
        text: "Rushh prend en charge l'analyse, la configuration, les tests et le suivi, sans mobiliser vos équipes sur la technique. Les connexions à vos outils sont confirmées avec vous avant chaque mise en service.",
        link: { href: "/offre", label: "Voir ce que Rushh prend en charge" },
      },
    ],
  },
  proof: {
    title: "Écoutez le Standard avant de l'étendre",
    text: "Appelez la ligne de démonstration pour juger la voix et la manière de recueillir une demande. Elle simule une agence unique : l'orientation entre agences se montre lors d'une démonstration adaptée à votre réseau.",
    say: ["Bonjour, j'aimerais organiser une visite pour un appartement.", "Est-ce que vous pouvez transmettre un message à votre équipe ?"],
  },
};

/** Fragment Markdown (différenciateurs + preuve) injecté dans les miroirs. */
export function premiumToMd(c: { diff: DiffBlock; proof: ProofBlock }): string {
  return `## ${c.diff.title}

${c.diff.sub}

${c.diff.items.map((d) => `### ${d.title}\n\n${d.text}`).join("\n\n")}

## ${c.proof.title}

${c.proof.text} Ligne de démonstration (agence fictive à Paris) : 01 76 63 57 09.

${bullets(c.proof.say.map((q) => `« ${q} »`))}
`;
}

export const OFFRE: Pick<PremiumContent, "diff" | "proof"> = {
  diff: {
    pill: "Pourquoi Rushh",
    title: "Pourquoi confier ses appels à Rushh plutôt qu'à un outil à configurer",
    sub: "Trois différences, à juger sur pièces pendant la démonstration.",
    items: [
      {
        title: "Une prestation entièrement prise en charge",
        text: "Avec un outil en libre-service, vous consacrez du temps à tout configurer, tester et améliorer. Chez Rushh, l'équipe prend le projet en charge, adapte le fonctionnement à votre agence, puis le fait évoluer avec vos retours.",
      },
      {
        title: "Une expérience téléphonique naturelle et réactive",
        text: "L'appelant parle normalement et obtient des réponses rapides, sans menu rigide. Voix personnalisable, clonage vocal avec autorisation du titulaire, français, anglais, espagnol et allemand selon la configuration.",
        link: { href: "/demonstrations", label: "Écouter la ligne de démonstration" },
      },
      {
        title: "Des appels qui deviennent des opportunités suivies",
        text: "La plateforme Rushh indique qui a appelé, pourquoi, ce qui a été dit et ce qu'il reste à faire : résumé, transcription, statut et attribution à un membre de l'équipe. Elle est recommandée, sans être obligatoire : vous pouvez aussi recevoir les informations par les canaux convenus.",
      },
    ],
  },
  proof: {
    title: "Écoutez-le avant de demander un devis",
    text: "Appelez la ligne de démonstration, jouez le rôle d'un vendeur ou d'un acquéreur et jugez la voix, la rapidité et la manière de qualifier une demande. Ensuite, une démonstration adaptée à votre agence précise le périmètre et le devis.",
    say: ["Bonjour, je souhaite faire estimer mon appartement à Paris.", "J'aimerais organiser une visite pour un appartement."],
  },
};

export const DEMO_LISTEN = {
  id: "ecoute-title",
  pill: "Ce que vous pouvez juger",
  title: "En deux minutes d'appel, quatre choses à écouter",
  sub: "La démonstration sert à se faire sa propre opinion, sur les mêmes critères pour tous les outils que vous comparez.",
  items: [
    { title: "La voix", text: "Est-elle naturelle, agréable, compréhensible, sans l'effet d'un menu téléphonique ?" },
    { title: "La rapidité", text: "Les réponses arrivent-elles sans blanc gênant, y compris quand vous reformulez ou coupez la parole ?" },
    { title: "La compréhension", text: "Le Standard saisit-il votre demande dès les premiers mots, sans vous faire répéter ?" },
    { title: "La suite donnée", text: "Pose-t-il les bonnes questions pour qualifier, et propose-t-il une suite claire : rendez-vous, rappel ou transmission ?" },
  ],
  closing: "Vous comparez plusieurs solutions ? Jouez les mêmes scénarios avec chacune : c'est le moyen le plus fiable de les départager.",
};
