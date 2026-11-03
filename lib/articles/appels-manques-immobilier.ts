import type { Article } from "./types";

/** Texte validé : à reproduire tel quel, sans reformulation (voir `bare` dans types.ts). */
export const appelsManques: Article = {
  path: "/ressources/appels-manques-immobilier",
  bare: true,
  cover: {
    src: "/ressources/appels-manques-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Illustration : une ligne d'appel qui s'interrompt puis reprend, et aboutit à une fiche « Demande vendeur », estimation à Paris 11e, demande à transmettre.",
  },
  category: "guides",
  title: "Appels manqués en agence immobilière : que faire ? | Rushh",
  description:
    "Un appel manqué peut être une opportunité perdue. La méthode en 4 étapes : répondre, qualifier, faire avancer chaque demande et assurer son suivi.",
  shortTitle: "Éviter les appels manqués : méthode en 4 étapes",
  summary: "Répondre, qualifier, faire avancer, suivre : la méthode en 4 étapes pour ne plus perdre d'opportunités.",
  h1: "Appels manqués en agence immobilière : comment éviter de perdre des opportunités ?",
  answer:
    "Un propriétaire appelle pour faire estimer son appartement. Vous êtes en visite et personne ne décroche. Quelques minutes plus tard, il contacte une autre agence.",
  datePublished: "2026-10-28",
  dateModified: "2026-11-03",
  intro: [
    {
      t: "p",
      text: "Un propriétaire appelle pour faire estimer son appartement. Vous êtes en visite et personne ne décroche. Quelques minutes plus tard, il contacte une autre agence.",
    },
    {
      t: "p",
      text: "Dans l'immobilier, **un appel manqué peut être une opportunité commerciale perdue**. Et le problème ne concerne pas uniquement les horaires d'ouverture : visites, rendez-vous, déplacements et appels simultanés rendent les équipes difficiles à joindre.",
    },
    {
      t: "p",
      text: "Alors, comment éviter que des demandes vendeurs et acquéreurs passent entre les mailles du filet ?",
    },
  ],
  sections: [
    {
      id: "cout",
      h2: "Pourquoi les appels manqués coûtent-ils cher en immobilier ?",
      blocks: [
        {
          t: "p",
          text: "Un appel entrant peut correspondre à une simple question, mais aussi à une demande d'estimation, un projet de vente ou une visite.",
        },
        { t: "p", text: "Lorsqu'un prospect ne parvient pas à joindre votre agence, rien ne garantit qu'il rappellera." },
        {
          t: "statement",
          text: "Le coût potentiel ne se limite donc pas à un appel : il peut concerner un rendez-vous, un mandat ou une transaction.",
        },
        {
          t: "p",
          text: "Pour autant, tous les appels manqués ne représentent pas une affaire perdue. Leur impact financier dépend du nombre de demandes réellement commerciales, de leur valeur et de votre capacité à les récupérer.",
        },
        {
          t: "p",
          text: "Le véritable enjeu est de ne pas laisser une opportunité dépendre du moment où votre équipe est disponible.",
        },
      ],
    },
    {
      id: "methode",
      h2: "Comment éviter de perdre des opportunités ? La méthode en 4 étapes",
      blocks: [
        { t: "h3", text: "1. Assurer une réponse à chaque appel entrant" },
        { t: "p", text: "Une agence ne peut pas demander à ses négociateurs d'être disponibles en permanence." },
        {
          t: "p",
          text: "Il faut donc prévoir une prise en charge téléphonique lorsque l'équipe est en visite, déjà en ligne, absente ou lorsque l'agence est fermée.",
        },
        {
          t: "statement",
          text: "L'objectif : qu'un client puisse obtenir une réponse sans attendre qu'un collaborateur soit disponible.",
        },
        { t: "h3", text: "2. Identifier et qualifier immédiatement la demande" },
        { t: "p", text: "Décrocher ne suffit pas." },
        {
          t: "p",
          text: "Un vendeur qui souhaite une estimation n'a pas les mêmes attentes qu'un acquéreur qui appelle pour une annonce.",
        },
        { t: "p", text: "Dès le premier échange, il faut identifier :" },
        {
          t: "ul",
          items: [
            "Le motif de l'appel.",
            "Le projet de l'interlocuteur.",
            "Les informations nécessaires pour traiter sa demande.",
            "La suite à organiser.",
          ],
        },
        { t: "statement", text: "Une demande qualifiée est plus facile à traiter qu'un simple numéro à rappeler." },
        { t: "h3", text: "3. Faire avancer la demande dès le premier appel" },
        {
          t: "p",
          text: "Une fois le besoin identifié, il faut éviter de laisser systématiquement le client attendre un rappel.",
        },
        {
          t: "p",
          text: "Selon la situation, la bonne suite peut être de proposer un rendez-vous, de transmettre l'appel à un collaborateur ou de recueillir les informations nécessaires.",
        },
        {
          t: "p",
          text: "L'objectif est simple : **faire avancer la demande dès le premier contact, lorsque c'est possible.**",
        },
        { t: "h3", text: "4. Centraliser les opportunités et assurer leur suivi" },
        { t: "p", text: "Même un appel décroché peut devenir inutile si les informations recueillies se perdent." },
        {
          t: "p",
          text: "Chaque demande doit pouvoir être retrouvée avec son motif, ses coordonnées, les informations importantes et son statut.",
        },
        { t: "p", text: "L'équipe sait alors qui a appelé, pourquoi et quelle action reste à effectuer." },
        {
          t: "statement",
          text: "Répondre, qualifier, agir et suivre : ces quatre étapes forment une véritable organisation des appels entrants.",
        },
      ],
    },
    {
      id: "solutions",
      h2: "Répondeur, rappel manuel ou permanence téléphonique ?",
      blocks: [
        { t: "p", text: "Plusieurs solutions permettent de limiter les appels manqués." },
        {
          t: "p",
          text: "Le [répondeur](/ressources/repondeur-ou-standard-ia-agence-immobiliere) enregistre un message, mais dépend de la volonté de l'appelant d'en laisser un. Le rappel manuel permet de reprendre contact, mais suppose qu'un collaborateur soit disponible à temps.",
        },
        {
          t: "p",
          text: "Un [secrétariat téléphonique](/ressources/telesecretariat-humain-ou-ia) peut assurer une réponse et recueillir des informations, selon ses horaires et les prestations prévues.",
        },
        {
          t: "p",
          text: "Pour aller plus loin, il faut une solution capable de **répondre, comprendre la demande et organiser sa suite**, sans mobiliser systématiquement l'équipe.",
        },
      ],
    },
    {
      id: "rushh",
      h2: "Comment Rushh applique cette méthode",
      blocks: [
        {
          t: "p",
          text: "Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu pour les professionnels de l'immobilier.",
        },
        { t: "p", text: "Il réunit les quatre étapes dans un même fonctionnement :" },
        {
          t: "table",
          caption: "",
          head: ["La méthode", "Ce que fait Rushh"],
          rows: [
            ["Répondre", "Prend en charge les appels entrants 24 h/24 et 7 j/7."],
            ["Qualifier", "Identifie les vendeurs, acquéreurs, locataires, bailleurs et autres interlocuteurs."],
            ["Faire avancer", "Peut prendre un rendez-vous, transférer un appel ou envoyer une confirmation par SMS ou e-mail."],
            ["Assurer le suivi", "Classe les demandes dans sa plateforme métier avec leurs coordonnées, leur résumé et leur statut."],
          ],
        },
        { t: "h3", text: "Exemple : un propriétaire appelle pendant une visite" },
        {
          t: "p",
          text: "Vous êtes avec un acquéreur lorsqu'un propriétaire contacte votre agence pour faire estimer son bien.",
        },
        {
          t: "p",
          text: "Rushh décroche, identifie sa demande, recueille les informations utiles et peut lui proposer un rendez-vous sur votre agenda connecté.",
        },
        {
          t: "p",
          text: "L'opportunité vendeur est ensuite retrouvable dans votre plateforme Rushh, avec les coordonnées du propriétaire, le résumé de l'échange et son suivi.",
        },
        {
          t: "statement",
          text: "Vous n'avez pas interrompu votre visite. Et la demande du propriétaire a pu avancer sans attendre votre disponibilité.",
        },
      ],
    },
    {
      id: "adapte",
      h2: "Un fonctionnement adapté à votre agence",
      blocks: [
        {
          t: "p",
          text: "Rushh peut répondre directement aux appels ou intervenir lorsque votre équipe est indisponible.",
        },
        {
          t: "p",
          text: "Notre équipe prend en charge la conception, la personnalisation, les connexions nécessaires, les tests et le suivi du standard.",
        },
        {
          t: "p",
          text: "Vous n'avez pas à organiser vous-même une [permanence téléphonique](/ressources/permanence-telephonique-agence-immobiliere) supplémentaire.",
        },
      ],
    },
    {
      id: "demonstration",
      h2: "Ne laissez plus vos opportunités dépendre de votre disponibilité",
      blocks: [
        { t: "p", text: "Un appel vendeur ou acquéreur peut arriver à n'importe quel moment." },
        { t: "p", text: "L'essentiel est de pouvoir lui répondre, comprendre son besoin et organiser la suite." },
        {
          t: "statement",
          text: "Découvrez comment Rushh prend en charge les appels entrants de votre agence, sans interrompre votre activité.",
        },
        { t: "button", label: "Réserver une démonstration", href: "/demonstrations" },
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Ne laissez plus vos opportunités dépendre de votre disponibilité", text: "", links: [] },
};
