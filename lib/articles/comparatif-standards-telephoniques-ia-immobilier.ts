import type { Article } from "./types";

const CONSULTED = "Consulté le 28 octobre 2026.";

export const comparatif: Article = {
  path: "/comparatif/standards-telephoniques-ia-immobilier",
  category: "standards-ia-comparatifs",
  cover: {
    src: "/ressources/comparatif-standards-telephoniques-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Matrice de cinq solutions et huit critères, chaque cellule étant indiquée et sourcée ou à vérifier, sans classement : illustration du comparatif des standards téléphoniques IA pour l'immobilier.",
  },
  title: "Standards téléphoniques IA pour l'immobilier : comparatif | Rushh",
  description:
    "Comparatif sourcé de cinq solutions pour les appels d'une agence : Rushh, Joe AI, Fonio, AInora et Orateur. Informations consultées le 28 octobre 2026.",
  shortTitle: "Comparatif des standards téléphoniques IA pour l'immobilier",
  h1: "Quel standard téléphonique IA choisir pour une agence immobilière ? Comparatif de cinq solutions",
  answer:
    "Il n'existe pas de meilleur standard téléphonique IA pour toutes les agences : le bon choix dépend de ce que vous voulez déléguer. Ce comparatif met côte à côte Rushh, Joe AI, Fonio, AInora et Orateur sur huit critères, à partir de leurs pages officielles consultées le 28 octobre 2026. Il ne contient ni classement ni note. Rushh convient surtout à une agence qui veut déléguer entièrement la conception et le suivi de ses appels entrants ; d'autres solutions couvrent davantage de canaux, publient leurs tarifs ou se configurent seul.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "methode",
      h2: "Comment lire ce comparatif ?",
      blocks: [
        {
          t: "p",
          text: "Les cinq solutions ont un point commun : leur site officiel présente une offre de réponse téléphonique par intelligence artificielle destinée aux professionnels de l'immobilier. La liste n'est pas exhaustive et ne reflète pas la qualité des services : nous n'avons testé aucune des solutions concurrentes.",
        },
        {
          t: "ul",
          items: [
            "**Sources** : uniquement les pages officielles de chaque fournisseur, listées en fin de page avec leur date de consultation. Ce qu'un fournisseur affirme sur lui-même est présenté comme déclaré par lui.",
            "**Information absente** : « non indiqué sur la page consultée » ne veut pas dire que la fonction n'existe pas. Elle peut exister sans figurer sur la page, ou être proposée sur demande.",
            "**Aucun classement** : Rushh n'arrive pas en tête de chaque critère, et ce n'est pas le but. Chaque ligne décrit une approche, pas un niveau de qualité.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Rushh édite cette page et figure dans le tableau : lisez les lignes avec cette réserve, et vérifiez chaque point sur le site du fournisseur concerné. Les prix et les fonctions changent ; la date de consultation fait foi.",
        },
        {
          t: "p",
          text: "Pour distinguer les trois modèles de service utilisés ci-dessous, **logiciel autonome**, **service accompagné** et **prestation entièrement gérée**, voir le guide [télésecrétariat humain ou standard IA](/ressources/telesecretariat-humain-ou-ia). Pour savoir quoi demander à un fournisseur, voir le [guide de sélection](/ressources/choisir-standard-telephonique-ia-immobilier).",
        },
      ],
    },
    {
      id: "positionnement",
      h2: "Positionnement : modèle de service, spécialisation et canaux",
      blocks: [
        {
          t: "table",
          caption: "Modèle de service, spécialisation immobilière et canaux des cinq solutions",
          head: ["Solution", "Modèle de service", "Spécialisation immobilière", "Appels et autres canaux"],
          rows: [
            [
              "Rushh",
              "Prestation entièrement gérée : Rushh conçoit, configure, teste, déploie et suit le standard",
              "Spécialisé dans l'immobilier : transaction, gestion locative, syndic, réseaux",
              "Appels entrants uniquement : ni appels sortants, ni SMS, ni WhatsApp, ni chat",
            ],
            [
              "Joe AI",
              "Service accompagné : l'équipe de Joe AI configure l'agent avec le client",
              "Agent conversationnel conçu pour l'immobilier",
              "Téléphone, SMS, WhatsApp, e-mail et site web ; relance des clients",
            ],
            [
              "Fonio",
              "Plateforme à configurer, avec forfaits d'accompagnement payants",
              "Plateforme généraliste, avec des pages dédiées aux agences et à la gestion immobilière",
              "Voix, WhatsApp et chat web ; appels sortants prévus dans les forfaits voix",
            ],
            [
              "AInora",
              "Service géré : AInora indique construire et exploiter l'agent",
              "Offre dédiée aux agences immobilières, parmi d'autres usages listés sur son site",
              "Appels entrants ; rappel des contacts ayant demandé à être joints, sans démarchage à froid",
            ],
            [
              "Orateur",
              "Logiciel en libre-service : inscription en ligne et essai",
              "Réceptionniste IA généraliste, avec une page d'usage pour l'immobilier",
              "Appels entrants ; aucun appel sortant mentionné sur la page consultée",
            ],
          ],
          note: "Joe AI, Fonio, AInora et Orateur : pages officielles listées dans les sources, consultées le 28 octobre 2026. Rushh : pages /offre et /integrations de ce site.",
        },
      ],
    },
    {
      id: "fonctions",
      h2: "Qualification, rendez-vous et intégrations annoncés",
      blocks: [
        {
          t: "table",
          caption: "Qualification, rendez-vous, transfert et intégrations cités par chaque solution",
          head: ["Solution", "Qualification", "Rendez-vous et transfert", "Intégrations citées"],
          rows: [
            [
              "Rushh",
              "Le motif et les informations utiles sont recueillis selon les règles validées avec le client",
              "Rendez-vous et transfert selon le périmètre validé et l'agenda connecté",
              "Google Calendar, Outlook, Apimo et Whise, selon le contexte technique, confirmées avec le client",
            ],
            [
              "Joe AI",
              "Qualification des acquéreurs, des candidats locataires et des prospects",
              "Prise de rendez-vous de visite et d'estimation ; transmission à un collaborateur si besoin",
              "Douze logiciels indiqués comme synchronisés, dont Apimo et Whise ; autres logiciels : « Nous l'intégrons »",
            ],
            [
              "Fonio",
              "Questions prédéfinies : budget, solvabilité, urgence, projet, type de bien",
              "Visites planifiées dans l'agenda connecté ; transfert vers l'agence ou un agent",
              "Pages immobilier : Stora, onOffice, Win-CASA, Hostaway, Aareon PowerHaus, Objego, entre autres ; Make, n8n, API ; Apimo et Whise non cités ; demande d'intégration possible",
            ],
            [
              "AInora",
              "Budget, financement, secteur, type de bien, délai ; score de priorité",
              "Disponibilités des biens et des négociateurs vérifiées ; visite fixée avec SMS de confirmation",
              "Logiciels de transaction via API, dont Apimo, Netty et Périclès ; HubSpot, Salesforce ; Google Calendar",
            ],
            [
              "Orateur",
              "Prise de message : nom, numéro et motif ; qualification immobilière non détaillée",
              "Rendez-vous réservés, déplacés ou annulés selon les disponibilités ; transfert non mentionné",
              "Google Calendar et Outlook",
            ],
          ],
          note: "Les logiciels cités sont ceux nommés sur les pages consultées. Une intégration non citée n'est pas forcément impossible : demandez-la au fournisseur.",
        },
      ],
    },
    {
      id: "mise-en-place",
      h2: "Mise en place, coûts et données",
      blocks: [
        {
          t: "table",
          caption: "Configuration, maintenance, modèle économique et données déclarées",
          head: ["Solution", "Configuration et maintenance", "Modèle économique", "Données (déclaré)"],
          rows: [
            [
              "Rushh",
              "Analyse, configuration, tests, mise en service visée sous 5 jours ouvrés après réception des éléments (objectif indicatif), puis suivi par Rushh",
              "Sur devis",
              "Hébergement et sous-traitants précisés sur demande et dans le contrat (DPA)",
            ],
            [
              "Joe AI",
              "Calibration avec l'équipe (environ 30 minutes), déploiement annoncé « en quelques heures », accompagnement",
              "Tarif non affiché ; démonstration de 30 minutes",
              "« Certifié ISO 27001 et conforme RGPD » ; hébergement « en France et en Europe »",
            ],
            [
              "Fonio",
              "Création en libre-service, « aucune connaissance technique requise ». Accompagnement payant : de 99 € à 899 € par mois, configuration complexe à partir de 1 000 €",
              "Voix : 99 € par mois (1 000 minutes), 299 € (3 600 minutes), à partir de 539 € ; hors taxes, facturation annuelle ; satisfait ou remboursé pendant 30 jours",
              "Hébergement « dans l'UE » ; « conforme au RGPD » et « conforme à l'EU AI Act »",
            ],
            [
              "AInora",
              "Consultation de 30 minutes, cadrage, puis configuration et lancement par AInora",
              "Tarif individuel établi après un appel",
              "Stockage en Allemagne et en Finlande ; traitement des appels dans l'UE et aux États-Unis dans la configuration standard, 100 % UE sur demande",
            ],
            [
              "Orateur",
              "Inscription et mise en place en ligne ; accompagnement non détaillé",
              "49 €, 99 € ou 199 € par mois (4, 9 ou 19 heures d'agent IA), minutes supplémentaires de 0,20 € à 0,24 € ; essai de 100 minutes ; offre Entreprise sur devis",
              "Aucune affirmation sur l'hébergement ou le RGPD sur la page consultée",
            ],
          ],
          note: "Tarifs publics relevés le 28 octobre 2026 sur les pages officielles ; ils peuvent changer et varier selon la durée d'engagement. Chaque fournisseur reste seul juge de ses conditions.",
        },
        {
          t: "callout",
          kind: "fact",
          text: "Fonio n'est pas seulement un outil à configurer seul : sa page « Configurations » propose des forfaits où un expert de Fonio intervient, de 30 minutes par mois à un suivi continu, et des configurations complexes sur devis. La différence avec une prestation entièrement gérée porte donc sur le périmètre, pas sur la présence ou l'absence d'accompagnement. Consulté le 28 octobre 2026.",
        },
      ],
    },
    {
      id: "limites",
      h2: "Limites et points à vérifier pour chaque solution",
      blocks: [
        {
          t: "table",
          caption: "Points à vérifier avant de choisir, solution par solution",
          head: ["Solution", "À vérifier avant de choisir"],
          rows: [
            [
              "Rushh",
              "Le périmètre se limite aux appels entrants. Le tarif est sur devis et doit être demandé. Chaque intégration est confirmée au cas par cas. Les conditions d'hébergement se demandent avant signature.",
            ],
            [
              "Joe AI",
              "Le prix n'est pas affiché. Vérifiez que votre logiciel figure dans la liste ou sera bien intégré, et traitez les résultats chiffrés du site comme des chiffres déclarés par le fournisseur.",
            ],
            [
              "Fonio",
              "Plateforme généraliste : vérifiez la compatibilité avec votre logiciel métier, ce que couvre l'accompagnement payant, les minutes supplémentaires et les frais d'opérateur sur les appels sortants.",
            ],
            [
              "AInora",
              "Le tarif s'obtient par un appel. Pour le rappel de contacts, vérifiez le consentement préalable : la page cite l'article L223-1 du Code de la consommation depuis le 11 août 2026. Les intégrations sont proposées là où l'outil expose une API.",
            ],
            [
              "Orateur",
              "La page ne détaille ni la qualification immobilière, ni l'hébergement, ni le RGPD, et certaines réponses de la FAQ ne sont pas visibles : posez ces questions avant de souscrire.",
            ],
          ],
        },
      ],
    },
    {
      id: "situations",
      h2: "Quelle approche selon votre situation ?",
      blocks: [
        {
          t: "p",
          text: "Ces repères ne désignent pas un gagnant : ils relient un besoin à une approche, d'après les informations des tableaux.",
        },
        {
          t: "ul",
          items: [
            "**Vous voulez déléguer la conception et le suivi, pour les seuls appels entrants** : une prestation gérée correspond à ce besoin. Rushh en est une, AInora se décrit aussi ainsi, et Joe AI propose un accompagnement.",
            "**Vous voulez plusieurs canaux ou des relances sortantes** : Joe AI couvre SMS, WhatsApp, e-mail et site web, Fonio la voix, WhatsApp et le chat web, AInora rappelle les contacts qui l'ont demandé. Rushh ne propose que des appels entrants.",
            "**Vous voulez connaître le coût avant de parler à quelqu'un** : Fonio et Orateur publient leurs tarifs. Rushh, Joe AI et AInora fonctionnent sur devis ou sur appel.",
            "**Vous voulez tester vous-même, vite** : Orateur propose un essai en ligne et Fonio un remboursement possible pendant 30 jours. Un essai ne remplace pas un test sur vos propres scénarios d'appels.",
            "**Vous utilisez Apimo ou Whise** : Rushh et Joe AI citent les deux, AInora cite Apimo. Sur les pages consultées, Fonio et Orateur ne les citent pas : posez la question.",
          ],
        },
        {
          t: "p",
          text: "D'autres offres existent. Alopeak, par exemple, présente un service géré pour des agences de Savoie, de Haute-Savoie et d'Isère à partir de 49 € par mois, consulté le 28 octobre 2026. Cette liste ne prétend pas couvrir tout le marché.",
        },
      ],
    },
    {
      id: "tester",
      h2: "Comment vérifier avant de choisir ?",
      blocks: [
        {
          t: "p",
          text: "Un tableau compare des déclarations, pas des conversations. Quelle que soit la solution, testez-la avec vos propres appels : un vendeur pressé, un acquéreur qui cite une annonce, un locataire qui signale une panne, un appelant qui veut parler à une personne. Le [guide de sélection](/ressources/choisir-standard-telephonique-ia-immobilier) détaille les scénarios et les questions à poser.",
        },
        {
          t: "p",
          text: "Pour entendre Rushh, appelez la [ligne de démonstration](/demonstrations), une agence fictive à Paris. Pour une comparaison détaillée avec un concurrent, voir [Rushh ou Joe AI](/vs/joe-ai) et [Rushh ou Fonio](/vs/fonio).",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Joe AI : site officiel",
      url: "https://www.getjoe-ai.com/",
      usedFor: `Canaux, qualification, rendez-vous, douze logiciels synchronisés, déploiement, certifications et hébergement déclarés ; page indiquant « Mis à jour le 27 octobre 2026 ». ${CONSULTED}`,
    },
    {
      label: "Fonio : assistant téléphonique IA pour les agences immobilières",
      url: "https://www.fonio.ai/fr/assistant-telephonique-ia/assistant-telephonique-ia-agences-immobilieres/",
      usedFor: `Fonctions, qualification, visites, transfert, hébergement dans l'UE déclaré. ${CONSULTED}`,
    },
    {
      label: "Fonio : assistant téléphonique IA pour la gestion immobilière",
      url: "https://www.fonio.ai/fr/assistants-telephoniques-ia/gestion-immobiliere",
      usedFor: `Logiciels immobiliers nommés (Aareon PowerHaus, Objego, etc.). ${CONSULTED}`,
    },
    {
      label: "Fonio : intégrations",
      url: "https://www.fonio.ai/fr/integrations",
      usedFor: `Logiciels immobiliers nommés (Stora, onOffice, Win-CASA, Hostaway), Make, n8n, demande d'intégration. ${CONSULTED}`,
    },
    {
      label: "Fonio : tarifs",
      url: "https://www.fonio.ai/fr/tarifs",
      usedFor: `Forfaits voix, WhatsApp et chat web, appels sortants, prix hors taxes, satisfait ou remboursé 30 jours. ${CONSULTED}`,
    },
    {
      label: "Fonio : configurations (Care et Setups)",
      url: "https://www.fonio.ai/fr/configurations",
      usedFor: `Forfaits d'accompagnement par un expert, de 99 € à 899 € par mois, configuration complexe à partir de 1 000 €. ${CONSULTED}`,
    },
    {
      label: "AInora : accueil téléphonique pour agences immobilières",
      url: "https://ainora.lt/fr/accueil-telephonique-agences-immobilieres",
      usedFor: `Service géré, qualification, rendez-vous, logiciels via API, rappel des contacts, stockage des données, mention de l'article L223-1. ${CONSULTED}`,
    },
    {
      label: "Orateur : réceptionniste IA pour agences immobilières",
      url: "https://www.orateur.ai/fr/use-cases/real-estate",
      usedFor: `Fonctions, rendez-vous, intégrations, tarifs Creator, Pro, Scale et Entreprise. ${CONSULTED}`,
    },
    {
      label: "Alopeak : réceptionniste IA pour agences immobilières",
      url: "https://alopeak.fr/",
      usedFor: `Service géré, zone desservie, tarif à partir de 49 € par mois. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de Rushh : appels entrants, conception, configuration, tests, déploiement, suivi, délai indicatif et tarification sur devis.",
    },
    {
      label: "Rushh : intégrations",
      url: "https://www.rushh.fr/integrations",
      usedFor: "Google Calendar, Outlook, Apimo et Whise, selon le contexte technique.",
    },
  ],
  sourcesNote:
    "Chaque information concernant un concurrent provient des pages officielles listées ci-dessus, consultées le 28 octobre 2026 : ce sont des déclarations commerciales, que nous n'avons pas vérifiées par un test. Les points « à vérifier » et les repères par situation sont des recommandations de Rushh. Rushh édite cette page et figure dans le comparatif. Pour corriger une information, écrivez à hello@rushh.fr.",
  related: [
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Les questions à poser, les scénarios à tester et la checklist de décision.",
    },
    {
      href: "/vs/fonio",
      label: "Rushh ou Fonio",
      text: "Comparaison détaillée entre une plateforme à configurer et une prestation gérée.",
    },
    {
      href: "/vs/joe-ai",
      label: "Rushh ou Joe AI",
      text: "Comparatif factuel entre deux services IA, sources datées.",
    },
  ],
  cta: {
    title: "Voir un standard téléphonique IA entièrement pris en charge",
    text: "Appelez la ligne de démonstration ou demandez une démonstration personnalisée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/integrations", label: "Intégrations" },
    ],
  },
};
