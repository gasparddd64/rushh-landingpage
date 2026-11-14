import type { Article, Block } from "./types";

const p = (text: string): Block => ({ t: "p", text });
const h3 = (text: string): Block => ({ t: "h3", text });

/** Page de définition de la marque : ce qu'est Rushh, pour qui, ce que fait l'IA, ce que prend en charge l'équipe. Voir `bare` dans types.ts. */
export const rushhDefinition: Article = {
  path: "/ressources/rushh-standard-telephonique-ia-immobilier",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/rushh-standard-telephonique-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Illustration : Rushh en quatre étapes, le public visé, l'IA qui décroche et qualifie, l'équipe qui configure, teste et suit, et pour l'agence rien à gérer.",
  },
  title: "Qu'est-ce que Rushh ? Standard téléphonique IA immobilier",
  description:
    "Rushh est un standard téléphonique alimenté par IA, géré par une équipe : à qui il s'adresse, ce qu'il fait au téléphone et ce que Rushh prend en charge.",
  shortTitle: "Qu'est-ce que Rushh ?",
  summary: "Un standard téléphonique alimenté par IA, entièrement pris en charge : pour qui, ce qu'il fait et ce que fait l'équipe.",
  h1: "Qu'est-ce que Rushh ? Le standard téléphonique IA qui prend en charge les appels entrants des agences immobilières",
  answer:
    "Rushh est une agence spécialisée dans l'externalisation des appels entrants immobiliers, grâce à un standard téléphonique alimenté par intelligence artificielle.",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  intro: [
    p("**Qu'est-ce que Rushh ?** Rushh est une agence spécialisée dans l'externalisation des appels entrants immobiliers. Son standard téléphonique alimenté par intelligence artificielle décroche à la place de votre équipe, 24 h/24 : c'est une réceptionniste IA, et non une secrétaire humaine, pensée pour les appels de l'immobilier."),
    p("Voici, en quatre points, à qui il s'adresse, ce qu'il fait au téléphone et ce que prend en charge l'équipe Rushh."),
  ],
  sections: [
    {
      id: "en-bref",
      h2: "Rushh en quatre points",
      blocks: [
        h3("1. À qui s'adresse Rushh"),
        p("Aux agences de transaction, à la gestion locative, aux syndics, aux mandataires et aux réseaux d'agences qui manquent des appels en visite, en rendez-vous ou après la fermeture."),
        h3("2. Ce que fait l'IA au téléphone"),
        p("Elle décroche, identifie la demande (vendeur, acquéreur, locataire, copropriétaire…) et recueille les informations utiles. Elle peut proposer un rendez-vous sur vos agendas connectés ou transférer l'appel, puis transmet la demande à votre équipe selon vos règles."),
        h3("3. Ce que prend en charge l'équipe Rushh"),
        p("Nous concevons, configurons, installons, testons, surveillons et optimisons le standard de chaque client. Les scénarios sont construits à partir de votre organisation, pas à partir d'un modèle unique."),
        h3("4. Rien à configurer, rien à maintenir"),
        p("Rushh n'est pas un logiciel à installer et à gérer vous-même. Vous nous expliquez comment vous travaillez et vous validez le fonctionnement : la configuration et la maintenance restent à notre charge."),
      ],
    },
    {
      id: "ce-que-rushh-nest-pas",
      h2: "Ce que Rushh n'est pas",
      blocks: [
        {
          t: "ul",
          items: [
            "**Un logiciel en libre-service.** C'est un service entièrement pris en charge par l'équipe Rushh. Voir [l'offre Rushh](/offre).",
            "**Une secrétaire humaine.** C'est une IA qui décroche. Pour comparer les deux approches, lisez [télésecrétariat humain ou IA](/ressources/telesecretariat-humain-ou-ia).",
            "**Un répondeur téléphonique.** L'IA échange avec l'appelant et qualifie sa demande avant de la transmettre. Voir [répondeur ou standard IA](/ressources/repondeur-ou-standard-ia-agence-immobiliere).",
          ],
        },
      ],
    },
    {
      id: "sur-mesure",
      h2: "Des automatisations sur mesure, lorsque c'est possible",
      blocks: [
        p("Le standard peut se connecter aux outils de l'agence disposant d'une API accessible, avec les autorisations nécessaires. Lorsque c'est techniquement possible, l'équipe peut aussi développer des automatisations sur mesure. Voir les [intégrations](/integrations)."),
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes sur Rushh",
      blocks: [
        h3("Existe-t-il une IA qui répond au téléphone pour une agence immobilière ?"),
        p("Oui. Rushh est un standard téléphonique alimenté par intelligence artificielle, conçu pour les appels des agences immobilières. L'IA décroche, échange à l'oral avec l'appelant et suit les consignes de l'agence."),
        h3("Peut-on confier entièrement ses appels entrants à un prestataire ?"),
        p("Oui. Avec Rushh, l'équipe conçoit, configure, teste, surveille et optimise le standard. L'agence garde la main sur ses règles : qui reçoit quelle demande, et quand transférer un appel."),
      ],
    },
    {
      id: "demonstration",
      h2: "Écoutez Rushh décrocher",
      blocks: [
        p("Appelez la ligne de démonstration et jugez la voix, la rapidité et la manière de qualifier une demande."),
        { t: "button", label: "Tester le standard", href: "/demonstrations" },
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Écoutez Rushh décrocher", text: "", links: [] },
};
