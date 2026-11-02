import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const qualifierLocatairesBailleurs: Article = {
  path: "/ressources/qualifier-appels-locataires-bailleurs",
  category: "guides",
  cover: {
    src: "/ressources/qualifier-appels-locataires-bailleurs.png",
    width: 1600,
    height: 840,
    alt: "Les motifs d'appel d'une gestion locative sont rangés en trois voies de priorité : urgent, à traiter dans la journée, à traiter selon le calendrier. Chaque appel de locataire ou de bailleur est qualifié puis transmis au gestionnaire avec un résumé.",
  },
  title: "Qualifier les appels des locataires et des bailleurs : méthode | Rushh",
  description:
    "Gestion locative : motifs d'appel, informations à recueillir, priorités et transmission, sans avis juridique ni pièces demandées au téléphone.",
  shortTitle: "Qualifier les appels locataires et bailleurs",
  summary: "Sept motifs d'appel en gestion locative, les informations utiles, les priorités et la transmission.",
  h1: "Comment qualifier les appels des locataires et des bailleurs en gestion locative ?",
  answer:
    "Pour qualifier un appel de locataire ou de bailleur, identifiez d'abord le motif (incident, question administrative, candidature, rendez-vous, suivi de loyer, congé, prestataire), recueillez cinq informations minimales, appliquez la priorité que le cabinet a écrite, puis transmettez au gestionnaire avec un résumé. Ne donnez pas d'avis juridique, ne promettez pas d'intervention et ne demandez pas de pièces de dossier par téléphone. Le Standard Rushh applique ces règles sur mesure, avec une spécialisation immobilière.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "motifs",
      h2: "Sept motifs d'appel en gestion locative",
      blocks: [
        {
          t: "p",
          text: "Un cabinet de gestion reçoit des appels très différents sur la même ligne : un locataire qui signale une panne, un bailleur qui demande où en est son loyer, un candidat qui veut visiter. Les traiter dans l'ordre d'arrivée fait attendre l'urgent derrière le courant. Les classer par motif permet de leur donner une suite adaptée.",
        },
        {
          t: "table",
          caption: "Sept motifs d'appel, informations à recueillir et priorité conseillée (modèle à adapter)",
          head: ["Motif", "Qui appelle", "Informations à recueillir", "Priorité conseillée", "Transmission"],
          rows: [
            [
              "Incident technique",
              "Locataire",
              "Adresse du logement, nature du problème, depuis quand, moyen de joindre",
              "Selon la consigne d'urgence du cabinet",
              "Gestionnaire ou astreinte, avec le résumé",
            ],
            [
              "Urgence (fuite, sécurité)",
              "Locataire ou voisin",
              "Adresse, nature de la situation, présence de danger signalée par l'appelant",
              "Immédiate, selon la consigne écrite",
              "Astreinte ou service désigné",
            ],
            [
              "Question administrative",
              "Locataire ou bailleur",
              "Identité, logement, objet (quittance, charges, régularisation)",
              "Dans la journée ou le lendemain",
              "Gestionnaire du dossier",
            ],
            [
              "Candidature ou visite",
              "Candidat locataire",
              "Logement concerné, souhait de visite, moyen de joindre",
              "Dans la journée",
              "Négociateur ou gestionnaire locatif",
            ],
            [
              "Demande de rendez-vous ou de rappel",
              "Locataire ou bailleur",
              "Objet, disponibilités, moyen de joindre",
              "Selon l'agenda",
              "Gestionnaire, avec une préférence horaire",
            ],
            [
              "Suivi du loyer ou de l'état du bien",
              "Bailleur",
              "Identité, bien concerné, objet de la demande",
              "Dans la journée",
              "Gestionnaire du mandat",
            ],
            [
              "Congé, départ, relocation",
              "Locataire ou bailleur",
              "Identité, logement, souhait exprimé, sans avis sur ses droits",
              "Dans la journée",
              "Gestionnaire, qui répond selon le dossier",
            ],
          ],
          note: "Modèle fictif : c'est votre cabinet qui fixe les motifs, les priorités et les destinataires.",
        },
      ],
    },
    {
      id: "informations",
      h2: "Les informations à recueillir, et celles à éviter",
      blocks: [
        {
          t: "p",
          text: "Cinq informations suffisent pour qu'un gestionnaire puisse rappeler utilement : qui appelle et en quelle qualité, quel logement est concerné, quel est le motif, quelle est la situation actuelle, et comment joindre la personne. Le reste se traite lors du rappel.",
        },
        {
          t: "ul",
          items: [
            "**Pas de pièces de dossier par téléphone** : pour une candidature, le bailleur ne peut exiger que les pièces prévues par la loi. La liste est fixée par le décret n° 2015-1437 du 5 novembre 2015, d'après l'ADIL ; un extrait de casier judiciaire ou un relevé de compte complet ne peuvent pas être demandés.",
            "**Pas d'information sur un dossier à un tiers** : un appelant non identifié comme locataire ou bailleur ne reçoit aucun détail.",
            "**Pas d'avis juridique** : un appel sur un congé, un préavis ou une régularisation reçoit une transmission au gestionnaire, pas une explication de droits.",
            "**Pas de promesse d'intervention** : la qualification dit « votre demande est transmise », pas « un artisan passera demain ».",
          ],
        },
        {
          t: "p",
          text: "Limitez aussi les données au besoin : la CNIL rappelle le principe de minimisation des données.",
        },
      ],
    },
    {
      id: "priorites",
      h2: "Les priorités : une règle écrite par le cabinet",
      blocks: [
        {
          t: "p",
          text: "Ce qui est urgent dans un cabinet ne l'est pas dans un autre : un chauffage en panne l'hiver n'a pas le même statut qu'une question de quittance. Définissez trois niveaux avec votre équipe : urgent (alerte immédiate), à traiter dans la journée, à traiter selon le calendrier. La prise en charge applique cette règle ; elle ne décide pas elle-même de la gravité.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Faites relire la liste des motifs urgents par la personne qui gère l'astreinte. Une consigne trop large noie l'équipe, une consigne trop étroite laisse passer un vrai incident.",
        },
      ],
    },
    {
      id: "fiche",
      h2: "Une transmission utile : l'exemple d'une fiche",
      blocks: [
        {
          t: "fiche",
          title: "Fiche d'appel : locataire signalant un problème",
          rows: [
            ["Appelant", "Locataire, identité donnée par l'appelant"],
            ["Logement", "Appartement indiqué par l'appelant, adresse notée"],
            ["Motif", "Problème de chauffage signalé, depuis la veille"],
            ["Priorité", "Selon la consigne du cabinet : à traiter dans la journée"],
            ["Suite annoncée", "La demande est transmise au gestionnaire, qui rappellera"],
          ],
          note: "Fiche fictive. Elle ne contient ni diagnostic, ni promesse d'intervention.",
        },
      ],
    },
    {
      id: "integrations",
      h2: "Connecter la fiche à votre logiciel de gestion",
      blocks: [
        {
          t: "p",
          text: "Une fiche transmise par notification ou par e-mail suffit pour commencer. Si le logiciel de gestion de votre cabinet est accessible par API, Rushh peut étudier avec vous une connexion sur mesure pour enregistrer l'appel dans le bon dossier, sous réserve des accès, des droits et des possibilités techniques. Aucune connexion n'est présentée comme native ou prête à l'emploi : elle se confirme et se teste avec chaque cabinet.",
        },
        {
          t: "p",
          text: "La démarche est détaillée, pour d'autres logiciels immobiliers, dans les guides sur la connexion à [Apimo](/ressources/standard-telephonique-ia-apimo) et à [Whise](/ressources/standard-telephonique-ia-whise). Voir aussi la page [Intégrations](/integrations).",
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist avant de déléguer ces appels",
      blocks: [
        {
          t: "checklist",
          items: [
            "Les sept motifs sont listés, avec une priorité et un destinataire pour chacun",
            "La consigne d'urgence est écrite et relue par l'astreinte",
            "Les informations demandées sont limitées aux cinq éléments utiles",
            "Aucun avis juridique et aucune pièce de dossier ne sont demandés au téléphone",
            "Un format de transmission est choisi, et testé sur des cas réels",
          ],
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA peut-il répondre sur un loyer impayé ?" },
        {
          t: "p",
          text: "Il ne donne aucune information sur un dossier à un appelant non identifié et ne conseille pas sur les droits. Il qualifie la demande et la transmet au gestionnaire.",
        },
        { t: "h3", text: "Peut-il gérer une urgence locative ?" },
        {
          t: "p",
          text: "Il applique la consigne d'urgence du cabinet (par exemple prévenir l'astreinte). Il ne diagnostique pas et ne promet pas d'intervention.",
        },
        { t: "h3", text: "Peut-il prendre une candidature à la location ?" },
        {
          t: "p",
          text: "Il peut qualifier la demande, noter le logement concerné et le moyen de joindre le candidat, puis transmettre. Les pièces du dossier ne se demandent pas par téléphone.",
        },
        { t: "h3", text: "Faut-il un logiciel connecté ?" },
        {
          t: "p",
          text: "Non. La qualification et la transmission fonctionnent sans connexion. Une connexion API sur mesure évite de ressaisir les informations lorsque le logiciel le permet.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "ADIL 44 (réseau ANIL) : documents que le propriétaire peut demander",
      url: "https://www.anil.org/adil-44/les-info-semaines-de-ladil/190626-je-prepare-mon-dossier-de-location-quels-justificatifs-le-proprietaire-peut-il-demander/",
      usedFor: `Seuls les documents prévus par le décret n° 2015-1437 du 5 novembre 2015 peuvent être exigés d'un candidat locataire ; un extrait de casier judiciaire et un relevé de compte complet ne peuvent pas être demandés. Page datée du 19 juin 2026. ${CONSULTED}`,
    },
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les informations recueillies au besoin de la finalité. Consulté le 31 octobre 2026.",
    },
    {
      label: "Rushh : gestion locative",
      url: "https://www.rushh.fr/solutions/gestion-locative",
      usedFor: "Ce que le Standard Rushh recueille selon l'appelant et le traitement des urgences sans promesse.",
    },
  ],
  sourcesNote:
    "Ce guide propose une méthode : les motifs, priorités et la fiche sont des modèles fictifs à adapter. Il ne contient aucun avis juridique individuel : pour une situation précise, consultez un professionnel du droit ou une ADIL. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un standard qui connaît la gestion locative, et des scénarios écrits pour votre cabinet",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, est spécialisé dans l'immobilier, dont la gestion locative. Les sept motifs de ce guide deviennent des scénarios sur mesure : vos priorités, votre consigne d'urgence, votre format de transmission, et une connexion API à votre logiciel de gestion lorsque l'accès le permet.",
    points: [
      "Une spécialisation immobilière : locataires, bailleurs, candidats, prestataires",
      "Des scénarios personnalisés : vos motifs, vos priorités, vos destinataires",
      "Des connexions API sur mesure avec votre logiciel de gestion, selon les accès et les droits",
      "Une prestation entièrement prise en charge, sans avis juridique ni promesse d'intervention",
    ],
    links: [
      { href: "/solutions/gestion-locative", label: "Voir le standard pour la gestion locative" },
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/solutions/gestion-locative",
      label: "Standard pour la gestion locative",
      text: "Le détail de ce que le standard recueille selon l'appelant.",
    },
    {
      href: "/ressources/permanence-telephonique-agence-immobiliere",
      label: "Organiser la permanence téléphonique",
      text: "La matrice de transfert par motif d'appel.",
    },
    {
      href: "/ressources/appels-agence-immobiliere-soir-week-end",
      label: "Répondre aux appels le soir et le week-end",
      text: "Les urgences locatives hors horaires.",
    },
  ],
  cta: {
    title: "Jouez un locataire et un bailleur sur la ligne de démonstration",
    text: "Appelez l'agence fictive à Paris : signalez un problème de chauffage en locataire, puis demandez des nouvelles d'un loyer en bailleur. Vous jugerez la qualification et la suite annoncée. Réservez ensuite une démonstration adaptée à votre cabinet. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/integrations", label: "Intégrations" },
    ],
  },
};
