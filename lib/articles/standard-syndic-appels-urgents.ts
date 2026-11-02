import type { Article } from "./types";

const CONSULTED = "Consulté le 2 novembre 2026.";

export const standardSyndicUrgents: Article = {
  path: "/ressources/standard-syndic-appels-urgents",
  category: "guides",
  cover: {
    src: "/ressources/standard-syndic-appels-urgents.png",
    width: 1600,
    height: 840,
    alt: "Un appel entrant dans un cabinet de syndic est classé en trois niveaux de priorité : urgent, avec alerte immédiate à la personne d'astreinte, dans la journée, avec rappel du gestionnaire, et courant, avec message transmis. L'IA qualifie et transmet, elle ne diagnostique pas.",
  },
  title: "Standard IA pour syndic : gérer les appels urgents | Rushh",
  description:
    "Dégât des eaux, ascenseur, prestataires, conseil syndical : une matrice de priorité, de transmission et d'escalade pour les appels d'un syndic.",
  shortTitle: "Appels urgents d'un syndic : la matrice",
  summary: "Une matrice de priorité, de transmission et d'escalade pour trier les appels d'un cabinet de syndic.",
  h1: "Comment gérer les appels urgents d'un syndic avec un standard téléphonique IA ?",
  answer:
    "Pour gérer les appels urgents d'un syndic, écrivez à l'avance trois choses : ce qui est urgent, qui est prévenu et dans quel délai, et ce qui se passe si cette personne ne répond pas. Un standard téléphonique IA applique ensuite cette règle : il recueille les informations utiles (immeuble, lieu, nature du problème, coordonnées) et transmet. Il ne diagnostique jamais l'urgence lui-même : la décision d'intervenir reste celle du syndic ou de son astreinte.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "probleme",
      h2: "Le problème : un appel de syndic peut être une urgence ou un simple renseignement",
      blocks: [
        {
          t: "p",
          text: "Un cabinet de syndic reçoit des appels très différents : un copropriétaire qui voit de l'eau couler du plafond, un occupant bloqué dans l'ascenseur, un prestataire qui confirme une intervention, un membre du conseil syndical qui prépare une assemblée, une question sur un appel de charges. Le ton est parfois le même, la gravité n'a rien à voir.",
        },
        {
          t: "p",
          text: "Le risque est double : traiter comme courant un appel qui ne peut pas attendre, ou déranger l'astreinte pour un simple renseignement. La méthode ci-dessous consiste à décider les règles avant l'appel, puis à les faire appliquer, par un collaborateur ou par un standard téléphonique IA.",
        },
      ],
    },
    {
      id: "cadre",
      h2: "Le cadre : le syndic décide, pas l'outil",
      blocks: [
        {
          t: "p",
          text: "Selon l'article 18 de la loi du 10 juillet 1965, le syndic peut, en cas d'urgence, faire procéder de sa propre initiative aux travaux nécessaires à la sauvegarde de l'immeuble. Selon l'ANIL, il doit alors prévenir les copropriétaires et convoquer rapidement une assemblée générale. Ce pouvoir appartient au syndic, et à lui seul.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "Une règle simple : le standard recueille et transmet, le syndic ou son astreinte qualifie et décide. Un outil qui « décide » qu'une fuite est grave ou qu'elle peut attendre place le cabinet dans une position qu'il ne doit pas accepter.",
        },
        {
          t: "p",
          text: "Ce guide présente une méthode d'organisation, pas un avis juridique : les obligations exactes d'un cabinet dépendent de son contrat de syndic et du règlement de chaque copropriété.",
        },
      ],
    },
    {
      id: "matrice",
      h2: "La matrice de priorité, de transmission et d'escalade",
      blocks: [
        {
          t: "table",
          caption: "Six situations d'appel, leur priorité, leur transmission et leur escalade",
          head: ["Situation", "Priorité", "Informations à recueillir", "Transmission", "Escalade si personne ne répond"],
          rows: [
            [
              "Dégât des eaux en cours",
              "Urgente",
              "Immeuble, étage, lot, origine visible, coordonnées de l'appelant",
              "Alerte immédiate à l'astreinte",
              "Second numéro défini par le cabinet, puis rappel de l'appelant avec la suite annoncée",
            ],
            [
              "Panne ou personne bloquée dans l'ascenseur",
              "Urgente",
              "Immeuble, ascenseur concerné, présence d'une personne bloquée, coordonnées",
              "Alerte immédiate, selon la règle écrite par le cabinet",
              "Second numéro défini par le cabinet",
            ],
            [
              "Risque pour la sécurité (odeur de gaz, incendie, effondrement)",
              "Urgente",
              "Immeuble, nature du danger, personnes exposées",
              "Consigne écrite du cabinet : orienter l'appelant vers les secours et alerter l'astreinte",
              "Second numéro défini par le cabinet",
            ],
            [
              "Panne de chauffage ou de parties communes, sans danger",
              "Dans la journée",
              "Immeuble, nature de la panne, depuis quand, nombre de personnes concernées",
              "Message au gestionnaire de l'immeuble",
              "Rappel le jour même, selon le planning du gestionnaire",
            ],
            [
              "Prestataire, entreprise ou gardien connus",
              "Selon l'intervention en cours",
              "Nom, entreprise, chantier ou immeuble, message à transmettre",
              "À la personne concernée, avec le message",
              "Message au gestionnaire si la personne est absente",
            ],
            [
              "Conseil syndical, copropriétaire, question de gestion ou de charges",
              "Courante",
              "Nom, lot ou immeuble, objet de la demande, moment de rappel souhaité",
              "Message au gestionnaire concerné",
              "Aucune alerte : rappel selon le planning",
            ],
          ],
          note: "Modèle à adapter à votre cabinet et à vos contrats. Les niveaux de priorité sont écrits par le cabinet : ils ne sont pas déterminés par l'IA.",
        },
      ],
    },
    {
      id: "limites",
      h2: "Ce qu'un standard IA ne fait pas",
      blocks: [
        {
          t: "ul",
          items: [
            "**Il ne diagnostique pas** : il ne dit pas si une fuite est grave, si un ascenseur est dangereux ou si une intervention est nécessaire.",
            "**Il ne promet pas d'intervention** : il annonce la suite prévue par le cabinet (alerte, rappel, message), jamais un délai ou un résultat.",
            "**Il ne commande pas de travaux** : ni artisan, ni dépannage, ni dépense.",
            "**Il ne donne pas d'information sur un dossier** à un appelant dont l'identité n'est pas établie, par exemple l'état des comptes d'un copropriétaire.",
            "**Il ne remplace pas les secours** : en cas de danger pour les personnes, la consigne écrite est d'orienter l'appelant vers les services d'urgence.",
          ],
        },
        {
          t: "callout",
          kind: "example",
          text: "Cas limites fictifs. Un appelant dit « ça coule un peu » sans préciser d'où : demander l'étage, l'origine visible et si l'eau continue, puis appliquer la priorité urgente par prudence. Un appelant se présente comme « le plombier » sans nommer de chantier : prendre le message et le faire vérifier. Un appelant demande « si c'est grave » : le dire clairement, l'évaluation revient à l'astreinte, qui est alertée.",
        },
      ],
    },
    {
      id: "regles",
      h2: "Les règles à écrire avant la mise en service",
      blocks: [
        {
          t: "checklist",
          items: [
            "La liste des situations urgentes pour votre cabinet, avec des exemples concrets",
            "Le nom ou le numéro de l'astreinte, ses horaires et un second numéro",
            "Le délai de rappel annoncé à l'appelant selon le niveau de priorité",
            "Les immeubles et copropriétés concernés, avec leurs particularités (gardien, ascenseurs, chauffage collectif)",
            "Les interlocuteurs connus à toujours transmettre : prestataires, gardiens, membres du conseil syndical",
            "Les informations jamais communiquées par téléphone",
            "Un test avant mise en service : un appel par ligne de la matrice, à toute heure",
          ],
        },
        {
          t: "p",
          text: "Les informations recueillies doivent rester limitées au besoin : la CNIL rappelle le principe de minimisation des données. Pour un dégât des eaux, l'immeuble, le lieu, la nature du problème et un numéro de rappel suffisent.",
        },
      ],
    },
    {
      id: "mesure",
      h2: "Mesurer sans se tromper de chiffre",
      blocks: [
        {
          t: "table",
          caption: "Revue mensuelle des appels urgents",
          head: ["Indicateur", "Comment le lire", "Piège à éviter"],
          rows: [
            ["Alertes envoyées", "Appels classés urgents et transmis à l'astreinte", "Croire qu'un faible nombre prouve un bon tri"],
            ["Fausses alertes", "Alertes qui n'étaient pas urgentes, relevées avec l'astreinte", "Supprimer la prudence pour réduire ce chiffre"],
            ["Urgences classées courantes", "Appels qui auraient dû alerter, repérés à la relecture", "Ne regarder que les réclamations reçues"],
            ["Délai de rappel réel", "Temps entre l'appel et la suite annoncée", "Mesurer seulement les jours ouvrés"],
          ],
          note: "Aucun taux n'est promis dans ce guide : il dépend de votre portefeuille et de vos règles.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA peut-il décider qu'un appel est urgent ?" },
        {
          t: "p",
          text: "Il applique la liste d'urgences écrite par le cabinet et alerte l'astreinte. Il ne porte aucun jugement technique : en cas de doute, la règle prudente est d'alerter.",
        },
        { t: "h3", text: "Que se passe-t-il la nuit et le week-end ?" },
        {
          t: "p",
          text: "La règle de la matrice s'applique aux mêmes conditions. Le Standard Rushh décroche 24 h/24 et 7 j/7, et peut suivre des consignes différentes selon la plage horaire, définies avec vous.",
        },
        { t: "h3", text: "L'IA peut-elle envoyer un dépanneur ?" },
        {
          t: "p",
          text: "Non, sauf règle écrite et validée par le cabinet. Par défaut, elle transmet l'alerte à l'astreinte, qui décide de l'intervention.",
        },
        { t: "h3", text: "Faut-il informer l'appelant qu'il parle à une IA ?" },
        {
          t: "p",
          text: "C'est une bonne pratique, et une obligation de transparence encadre les systèmes d'IA qui interagissent avec des personnes. Le [guide sur le RGPD et le standard IA](/ressources/standard-telephonique-ia-immobilier-rgpd) détaille les questions à poser.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "ANIL : travaux et majorités en copropriété",
      url: "https://www.anil.org/votre-besoin/gerer-un-bien/copropriete/travaux-et-majorites/",
      usedFor: `Travaux urgents nécessaires à la sauvegarde de l'immeuble réalisés à l'initiative du syndic, sans autorisation préalable de l'assemblée, avec information des copropriétaires et convocation rapide d'une assemblée générale. ${CONSULTED}`,
    },
    {
      label: "Légifrance : loi n° 65-557 du 10 juillet 1965 fixant le statut de la copropriété des immeubles bâtis",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000880200",
      usedFor: `Texte de référence : article 18, pouvoir du syndic de faire procéder en cas d'urgence aux travaux nécessaires à la sauvegarde de l'immeuble. Version consultée antérieure aux dernières réformes : vérifiez la rédaction en vigueur. ${CONSULTED}`,
    },
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: `Limiter les informations recueillies sur un appelant au besoin de la finalité. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode : la matrice, les cas limites et les indicateurs sont des modèles fictifs à adapter à votre cabinet. Il ne constitue pas un avis juridique et ne remplace ni votre contrat de syndic, ni le règlement de copropriété, ni l'avis d'un professionnel du droit. Aucun résultat client ni taux n'est avancé. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Des scénarios d'urgence écrits avec votre cabinet, appliqués à toute heure",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, applique la matrice de votre cabinet : vos situations urgentes, votre astreinte, vos messages. Les scénarios sont écrits sur mesure pour la copropriété, avec votre validation avant la mise en service. Le standard recueille et transmet ; il ne diagnostique pas.",
    points: [
      "Des scénarios sur mesure pour le syndic : dégâts des eaux, ascenseurs, prestataires, conseil syndical",
      "Disponibilité 24 h/24 et 7 j/7, avec des consignes différentes selon la plage horaire",
      "Une alerte ou un message structuré, avec l'immeuble, le lieu et le motif",
      "Une connexion API avec votre logiciel de gestion, étudiée sur mesure et sous réserve des accès",
      "Une prestation entièrement prise en charge, avec des tests avant la mise en service",
    ],
    links: [
      { href: "/solutions/syndics", label: "Le Standard Rushh pour les syndics" },
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/ressources/permanence-telephonique-agence-immobiliere",
      label: "Organiser la permanence téléphonique",
      text: "Qui prévenir, et quand, selon le motif d'appel.",
    },
    {
      href: "/ressources/appels-agence-immobiliere-soir-week-end",
      label: "Appels du soir et du week-end",
      text: "Une règle écrite pour chaque créneau horaire.",
    },
    {
      href: "/ressources/qualifier-appels-locataires-bailleurs",
      label: "Qualifier les appels des locataires et des bailleurs",
      text: "Sept motifs d'appel et leur priorité.",
    },
  ],
  cta: {
    title: "Testez le standard sur un appel urgent",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et jouez un dégât des eaux, un appel de prestataire, puis une question de charges : vous jugerez la qualification et la suite annoncée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
