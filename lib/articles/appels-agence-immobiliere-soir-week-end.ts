import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const appelsSoirWeekEnd: Article = {
  path: "/ressources/appels-agence-immobiliere-soir-week-end",
  category: "guides",
  cover: {
    src: "/ressources/appels-agence-immobiliere-soir-week-end.png",
    width: 1600,
    height: 840,
    alt: "Quatre créneaux hors horaires, soir, nuit, samedi et dimanche, forment une grille ; une même barre de disponibilité 24 h sur 24 les traverse, et chaque créneau a sa propre règle de transmission, du message du lundi matin à l'alerte immédiate.",
  },
  title: "Appels d'agence le soir et le week-end : la matrice horaire | Rushh",
  description:
    "Organiser la prise en charge des appels hors horaires : matrice horaire, vendeurs, visites, urgences, transmission du lundi et rendez-vous.",
  shortTitle: "Appels d'agence le soir et le week-end",
  summary: "Une matrice horaire par créneau : que faire d'un appel vendeur, d'une visite ou d'une urgence hors horaires.",
  h1: "Comment répondre aux appels d'une agence immobilière le soir et le week-end ?",
  answer:
    "Pour répondre aux appels hors horaires, définissez une règle par créneau : soir, nuit, samedi, dimanche et jours fériés. Pour chaque créneau, décidez ce que fait la prise en charge (message, qualification, alerte, rendez-vous à confirmer), qui est prévenu et à quel moment. Le Standard Rushh décroche 24 h/24 et 7 j/7 : il peut prendre en charge tous les créneaux, ou seulement ceux où l'agence est fermée, selon vos règles. Une urgence se transmet selon une consigne que vous écrivez, jamais selon une décision de l'IA.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "hors-horaires",
      h2: "Ce qui se passe hors horaires",
      blocks: [
        {
          t: "p",
          text: "Quand l'agence est fermée, le téléphone sonne quand même. Un acquéreur a vu une annonce publiée le samedi. Un propriétaire pense à faire estimer son bien le dimanche. Un locataire constate une panne le soir. Un solliciteur appelle à n'importe quelle heure. Chacun appelle avec une attente différente, et un répondeur muet les traite tous de la même façon.",
        },
        {
          t: "p",
          text: "Ce guide ne refait pas l'organisation générale de l'accueil téléphonique, traitée dans le guide sur la [permanence téléphonique](/ressources/permanence-telephonique-agence-immobiliere), qui classe les appels par motif. Il les classe ici par créneau horaire.",
        },
      ],
    },
    {
      id: "matrice",
      h2: "Une matrice horaire concrète",
      blocks: [
        {
          t: "p",
          text: "La matrice ci-dessous est un modèle à adapter à vos horaires et à votre équipe. Chaque ligne est un créneau ; chaque colonne dit ce que fait la prise en charge, qui est prévenu et à quel moment.",
        },
        {
          t: "table",
          caption: "Matrice horaire de prise en charge des appels (modèle à adapter)",
          head: ["Créneau", "Appels fréquents", "Ce que fait la prise en charge", "Qui est prévenu, et quand"],
          rows: [
            [
              "Soir de semaine, après la fermeture",
              "Acquéreurs sur annonce, vendeurs, locataires",
              "Qualifie, enregistre une demande de rappel ou de rendez-vous à confirmer",
              "L'équipe, au résumé du lendemain matin",
            ],
            [
              "Nuit",
              "Urgence réelle (incident en copropriété, sinistre), appels isolés",
              "Applique la consigne d'urgence ; sinon enregistre un message",
              "L'astreinte si la consigne le prévoit, sinon l'équipe le matin",
            ],
            [
              "Samedi",
              "Acquéreurs et vendeurs, visites, demandes liées aux annonces",
              "Qualifie, propose un créneau si un agenda est connecté, sinon une préférence horaire",
              "Le négociateur de permanence, par notification, ou le résumé du lundi",
            ],
            [
              "Dimanche",
              "Vendeurs en réflexion, acquéreurs, incidents locatifs",
              "Qualifie et enregistre ; alerte uniquement pour les motifs définis comme urgents",
              "L'astreinte pour les urgences, sinon le résumé du lundi",
            ],
            [
              "Jours fériés et ponts",
              "Comme le dimanche, avec plus de durée de fermeture",
              "Message d'accueil adapté à la date de réouverture ; qualification identique",
              "Selon la règle du week-end ; ajouter la date de reprise",
            ],
          ],
          note: "Créneaux et destinataires fictifs : c'est votre organisation qui les fixe. Une alerte immédiate suppose une personne désignée et joignable.",
        },
      ],
    },
    {
      id: "vendeurs-visites",
      h2: "Les appels vendeurs et les visites hors horaires",
      blocks: [
        {
          t: "p",
          text: "Un vendeur qui appelle un dimanche attend surtout d'être entendu et rappelé. Un acquéreur qui appelle un samedi veut savoir si le bien est disponible et quand le visiter. Dans les deux cas, l'important est de qualifier la demande (projet, bien, moyen de joindre) et d'annoncer la suite sans inventer de créneau.",
        },
        {
          t: "ul",
          items: [
            "**Rendez-vous d'estimation** : proposer un créneau seulement si un agenda connecté le permet ; sinon relever une préférence horaire et annoncer un rappel.",
            "**Visite d'un bien** : identifier le bien avant de parler d'une visite ; si plusieurs biens correspondent, le dire et transmettre.",
            "**Appel pendant une visite le week-end** : l'agent n'est pas interrompu sauf pour les motifs définis comme urgents.",
          ],
        },
        {
          t: "p",
          text: "Le guide sur la [prise de rendez-vous par IA](/ressources/prise-rendez-vous-ia-immobilier) détaille ce qu'une prise en charge peut confirmer, et ce qu'elle doit laisser à l'équipe.",
        },
      ],
    },
    {
      id: "urgences",
      h2: "Les urgences : une consigne écrite, pas une décision de l'IA",
      blocks: [
        {
          t: "p",
          text: "Une urgence hors horaires (dégât des eaux en copropriété, sécurité d'un logement géré) exige que l'agence ait décidé à l'avance ce qu'elle considère comme urgent et qui prévenir. La prise en charge applique cette consigne. Elle ne pose pas de diagnostic, ne promet pas d'intervention et ne décide pas elle-même de la gravité.",
        },
        {
          t: "checklist",
          items: [
            "La liste des motifs urgents est écrite et validée par l'agence ou le syndic",
            "Une personne ou un service d'astreinte est désigné pour chaque créneau",
            "Un canal d'alerte est testé (appel, SMS, notification) et une solution de repli est prévue",
            "Les appels non urgents attendent un résumé clair le lendemain",
          ],
        },
      ],
    },
    {
      id: "lundi",
      h2: "La transmission du lundi matin",
      blocks: [
        {
          t: "p",
          text: "Ce qui rend un week-end utile est ce que l'équipe trouve à la réouverture. Un bon résumé classe les appels dans l'ordre : urgences traitées ou à reprendre, rendez-vous à confirmer, demandes de rappel, messages simples, démarchage écarté. Chaque ligne indique le motif, le moyen de joindre la personne et la suite annoncée.",
        },
        {
          t: "p",
          text: "Un résumé trop long est ignoré, et un résumé sans priorité fait perdre le temps gagné. Fixez le format avec l'équipe avant la mise en service.",
        },
      ],
    },
    {
      id: "qui-repond",
      h2: "Humain, prestataire ou IA : qui répond hors horaires ?",
      blocks: [
        {
          t: "p",
          text: "Les horaires des services humains varient : un télésecrétariat indique par exemple une couverture du lundi au samedi de 8 h à 20 h, et un autre fournisseur note que les soirées et le dimanche restent souvent sans réponse chez les services humains. Il décrit aussi une organisation fréquente où l'IA répond après 19 h en semaine, le samedi après-midi et le dimanche. Ces informations proviennent de leurs sites et peuvent changer.",
        },
        {
          t: "p",
          text: "Le Standard Rushh décroche 24 h/24 et 7 j/7. Il peut donc couvrir tous les créneaux de la matrice, ou seulement les plages où l'agence est fermée, par exemple derrière un renvoi d'appel : le guide sur le [renvoi d'appel ou le décrochage direct](/ressources/renvoi-appel-ou-decroche-ia-immobilier) aide à choisir.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Une IA peut-elle gérer une urgence la nuit ?" },
        {
          t: "p",
          text: "Elle applique la consigne que vous avez écrite, par exemple prévenir l'astreinte. Elle ne diagnostique pas et ne promet pas d'intervention.",
        },
        { t: "h3", text: "Peut-on fixer un rendez-vous un dimanche ?" },
        {
          t: "p",
          text: "Oui si un agenda connecté le permet et que la règle l'autorise. Sinon la demande est enregistrée comme « à confirmer » et rappelée à la réouverture.",
        },
        { t: "h3", text: "Faut-il garder une astreinte humaine ?" },
        {
          t: "p",
          text: "Pour les urgences réelles, oui : la prise en charge alerte, mais c'est une personne qui décide de l'intervention.",
        },
        { t: "h3", text: "Le week-end suffit-il à justifier un standard ?" },
        {
          t: "p",
          text: "Cela dépend de vos appels hors horaires : relevez-les avant de décider. Le guide sur la [rentabilité d'un standard IA](/ressources/rentabilite-standard-telephonique-ia-agence-immobiliere) propose un calcul avec vos propres données.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Optilib : télésecrétariat immobilier",
      url: "https://www.optilib.com/telesecretariat-immobilier",
      usedFor: `Exemple de couverture d'un service humain : du lundi au samedi, de 8 h à 20 h, d'après son site. Page sans date de publication visible. Aucun tarif n'est repris. ${CONSULTED}`,
    },
    {
      label: "Tala : standard téléphonique immobilier",
      url: "https://www.tala-assistant.com/blog/standard-telephonique-immobilier",
      usedFor: `Couverture horaire des services humains et organisation avec IA hors horaires. Article publié le 23 avril 2026 et mis à jour le 20 juillet 2026. Aucun tarif ni chiffre de perte n'est repris. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide propose une méthode d'organisation, pas un résultat mesuré : la matrice, les créneaux et les destinataires sont des modèles fictifs à adapter. Les horaires des prestataires cités sont ceux de leurs sites à la date de consultation. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un standard qui décroche à toute heure, avec vos règles pour chaque créneau",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, décroche 24 h/24 et 7 j/7. Vous nous donnez vos créneaux, vos motifs urgents et vos destinataires : l'équipe écrit les scénarios, teste chaque enchaînement et vous remet un résumé structuré à la réouverture.",
    points: [
      "Disponibilité 24 h/24 et 7 j/7, pour tout ou partie des créneaux selon vos règles",
      "Des scénarios écrits pour l'immobilier : vendeurs, visites, locataires, copropriété",
      "Vos consignes d'urgence appliquées, sans diagnostic ni promesse d'intervention",
      "Une prestation entièrement prise en charge, avec une transmission claire au retour de l'équipe",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/offre", label: "Comprendre l'offre" },
    ],
  },
  related: [
    {
      href: "/ressources/permanence-telephonique-agence-immobiliere",
      label: "Organiser la permanence téléphonique",
      text: "La matrice par motif d'appel.",
    },
    {
      href: "/ressources/renvoi-appel-ou-decroche-ia-immobilier",
      label: "Renvoi d'appel ou décrochage direct",
      text: "Choisir qui décroche en premier.",
    },
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA",
      text: "Ce qui peut être confirmé, et ce qui reste à confirmer.",
    },
  ],
  cta: {
    title: "Appelez comme le ferait un client un dimanche soir",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, à l'heure qui vous convient, et jouez un vendeur, une visite ou une panne : vous jugerez la qualification et la suite annoncée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
