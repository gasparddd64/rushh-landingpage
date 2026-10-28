import type { Article } from "./types";

export const choisir: Article = {
  path: "/ressources/choisir-standard-telephonique-ia-immobilier",
  category: "standards-ia-comparatifs",
  cover: {
    src: "/ressources/choisir-standard-telephonique-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Checklist de décision de cinq points, dont trois cochés : scénarios testés, intégrations confirmées, données et sous-traitants, coûts chiffrés, maintenance définie.",
  },
  title: "Choisir un standard téléphonique IA en immobilier : le guide | Rushh",
  description:
    "Questions à poser, scénarios d'appels, intégrations, RGPD, coûts, déploiement : choisir un standard téléphonique IA, quel que soit le fournisseur.",
  shortTitle: "Comment choisir un standard téléphonique IA ?",
  h1: "Comment choisir un standard téléphonique IA pour une agence immobilière ?",
  answer:
    "Choisissez à partir de vos propres appels, pas des promesses d'une brochure. Définissez ce que le standard doit faire, testez-le avec des scénarios réels, faites confirmer par écrit les intégrations, les données et les coûts, puis vérifiez qui assure la maintenance. Ce guide vaut pour n'importe quel fournisseur, Rushh compris, et se termine par une checklist de décision.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  sections: [
    {
      id: "besoin",
      h2: "Définir ce que le standard doit faire",
      blocks: [
        {
          t: "p",
          text: "Un fournisseur peut paraître excellent sur une fonction dont vous n'avez pas besoin. Avant de comparer, répondez à ces questions sur votre agence.",
        },
        {
          t: "ul",
          items: [
            "**Quels appels ?** Vendeurs, acquéreurs, locataires, propriétaires, prestataires : chaque public a ses motifs.",
            "**Quand ?** Pendant les visites, hors des horaires d'ouverture, en cas de saturation, ou tout le temps.",
            "**Quel résultat ?** Un message clair, un rendez-vous dans l'agenda, un transfert immédiat, une fiche dans votre logiciel.",
            "**Quels canaux ?** Les appels entrants seuls, ou aussi SMS, WhatsApp, chat web ou appels sortants. Plus le périmètre est large, plus la liste de vérifications s'allonge.",
            "**Quelles limites ?** Les sujets qui doivent toujours aller à un humain : prix, négociation, litige, urgence.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Si vous ne mesurez pas encore vos appels manqués, commencez par là : le guide [appels manqués en agence immobilière](/ressources/appels-manques-immobilier) explique comment.",
        },
      ],
    },
    {
      id: "modele",
      h2: "Quel modèle de service : autonome, accompagné ou géré ?",
      blocks: [
        {
          t: "p",
          text: "Trois modèles existent sur le marché, et les frontières sont poreuses : un logiciel autonome peut proposer des heures d'expert, un service géré peut s'appuyer sur une plateforme. Demandez toujours qui fait quoi, en pratique.",
        },
        {
          t: "ul",
          items: [
            "**Logiciel autonome** : vous créez, testez et faites évoluer l'agent. Vous gardez la main, et le temps de maintenance est le vôtre.",
            "**Service accompagné** : le fournisseur vous aide à configurer, puis vous prenez le relais.",
            "**Prestation entièrement gérée** : le fournisseur conçoit, configure, teste, déploie et suit. Vous validez et vous donnez les règles.",
          ],
        },
        {
          t: "p",
          text: "Pour une comparaison détaillée avec le télésecrétariat humain, voir le guide [télésecrétariat humain ou standard IA](/ressources/telesecretariat-humain-ou-ia). Pour des exemples de fournisseurs, voir le [comparatif](/comparatif/standards-telephoniques-ia-immobilier).",
        },
      ],
    },
    {
      id: "scenarios",
      h2: "Dix scénarios d'appels à tester avant de signer",
      blocks: [
        {
          t: "p",
          text: "Appelez le standard comme le feraient vos clients, plusieurs fois, avec des tournures différentes. Les phrases ci-dessous sont des exemples à adapter.",
        },
        {
          t: "table",
          caption: "Dix scénarios d'appels à tester et ce qu'il faut observer",
          head: ["Scénario", "Exemple de phrase", "Ce qu'il faut observer"],
          rows: [
            ["Vendeur pressé", "« Je veux vendre vite, pouvez-vous passer demain ? »", "Le motif est compris, les informations utiles sont recueillies, aucune promesse n'est faite à votre place"],
            ["Acquéreur sur une annonce", "« Je vous appelle pour l'appartement de l'annonce, il est toujours là ? »", "L'annonce est identifiée, ou la question est renvoyée sans inventer de réponse"],
            ["Demande de prix", "« Quel est le prix exact, vous pouvez le baisser ? »", "Pas de réponse inventée, pas de négociation, transmission au bon interlocuteur"],
            ["Locataire avec une panne", "« Le chauffage est en panne depuis hier. »", "La consigne d'escalade que vous avez définie est suivie, sans diagnostic ni promesse d'intervention"],
            ["Demande d'un humain", "« Je veux parler à quelqu'un. »", "Le transfert ou le message est proposé immédiatement, sans insistance"],
            ["Appelant mécontent", "« Ça fait trois fois que j'appelle ! »", "Le ton reste neutre, la demande est transmise avec le contexte"],
            ["Informations incomplètes", "« Je cherche un bien, je ne sais pas trop. »", "Le standard pose des questions utiles sans interroger l'appelant sans fin"],
            ["Appel mal compris", "Phrase hachée, bruit de fond, accent marqué", "Il demande de répéter ou propose un message, il ne devine pas"],
            ["Rendez-vous", "« Je peux visiter samedi matin ? »", "Les créneaux proposés correspondent à votre agenda réel, sans double réservation"],
            ["Hors périmètre", "Un sujet que votre agence ne traite pas", "Réponse claire et orientation, sans improvisation"],
          ],
          note: "Notez chaque essai : date, scénario, résultat, point à corriger. Un test réussi une fois ne prouve pas que le résultat sera constant.",
        },
      ],
    },
    {
      id: "integrations",
      h2: "Intégrations : ce qu'il faut faire confirmer",
      blocks: [
        {
          t: "p",
          text: "Une liste de logos ne dit pas ce que fait réellement la connexion. Demandez une réponse précise pour votre logiciel métier et votre agenda.",
        },
        {
          t: "checklist",
          items: [
            "La connexion est-elle native, via une API, via un outil tiers ou manuelle ?",
            "Le standard lit-il vos disponibilités, écrit-il dans l'agenda, ou les deux ?",
            "Crée-t-il une fiche dans votre logiciel, ou envoie-t-il seulement un e-mail ?",
            "Comment évite-t-on les doublons de contacts et les doubles rendez-vous ?",
            "Que se passe-t-il quand la connexion tombe en panne ?",
            "Qui paie et qui maintient la connexion lorsque votre logiciel change ?",
            "Peut-on la tester avant la mise en service, sur vos propres données de test ?",
          ],
        },
        {
          t: "callout",
          kind: "hypo",
          text: "Une intégration absente d'une page web n'est pas forcément impossible, et une intégration citée peut avoir un périmètre limité. Dans les deux cas, demandez une confirmation écrite pour votre version du logiciel.",
        },
      ],
    },
    {
      id: "donnees",
      h2: "RGPD et données : quoi demander",
      blocks: [
        {
          t: "p",
          text: "Un standard téléphonique IA traite des données personnelles : voix, nom, numéro, projet, parfois une transcription. Ce passage donne des points de contrôle, pas un avis juridique : faites valider votre organisation par votre conseil.",
        },
        {
          t: "ul",
          items: [
            "**Contrat de sous-traitance** : le fournisseur traite les données pour le compte de votre agence. La CNIL indique que le contrat avec un sous-traitant doit porter notamment sur la transparence et la traçabilité, la protection des données dès la conception, la sécurité et l'assistance (alertes, violations de données). Demandez le DPA.",
            "**Lieu et sous-traitants** : où les données sont stockées et traitées, et quels sous-traitants interviennent. Un traitement hors de l'Union européenne doit être encadré ; la CNIL cite les décisions d'adéquation et les clauses contractuelles types.",
            "**Conservation** : la CNIL rappelle que les données personnelles ne peuvent pas être conservées indéfiniment et qu'une durée doit être déterminée. Demandez la durée de conservation des enregistrements et des transcriptions, et comment les supprimer.",
            "**Minimisation** : le standard ne doit recueillir que ce qui est utile. La CNIL décrit le principe de minimisation ; voir aussi le guide [qualification des appels vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs).",
            "**Information de l'appelant** : demandez comment l'appelant est informé qu'il parle à une IA. Le règlement européen sur l'IA prévoit une obligation de transparence à l'article 50 ; le détail figure dans le guide [télésecrétariat humain ou IA](/ressources/telesecretariat-humain-ou-ia).",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Méfiez-vous des mentions générales. « Conforme au RGPD » est une déclaration du fournisseur : demandez les documents (DPA, liste des sous-traitants, politique de conservation) et lisez-les.",
        },
      ],
    },
    {
      id: "couts",
      h2: "Coûts à vérifier",
      blocks: [
        {
          t: "p",
          text: "Deux offres à prix affiché voisin peuvent coûter très différemment selon l'usage. Faites chiffrer votre volume réel, hors taxes et taxes comprises.",
        },
        {
          t: "table",
          caption: "Postes de coût à faire préciser par le fournisseur",
          head: ["Poste", "Question à poser", "Où le trouver"],
          rows: [
            ["Abonnement", "Quel montant, quelle durée d'engagement, quelle facturation (mensuelle ou annuelle) ?", "Offre publique ou devis"],
            ["Minutes ou appels inclus", "Combien, et quel tarif au-delà ?", "Offre publique ou devis"],
            ["Numéros", "Un numéro est-il inclus, que coûte un numéro supplémentaire, que devient le vôtre en cas de sortie ?", "Devis et conditions"],
            ["Mise en service", "Frais de configuration, de formation, de tests ?", "Devis"],
            ["Intégrations", "Incluses ou facturées, une fois ou par mois ?", "Devis"],
            ["Évolutions", "Qui modifie les scénarios et à quel prix ?", "Contrat"],
            ["Opérateur", "Des frais d'opérateur s'ajoutent-ils, notamment sur les appels sortants ?", "Conditions tarifaires"],
            ["Sortie", "Préavis, remboursement, restitution des données ?", "Contrat"],
          ],
          note: "Ces postes s'appliquent à tout fournisseur. Les offres sur devis, dont celle de Rushh, nécessitent de demander ces points au moment du chiffrage.",
        },
      ],
    },
    {
      id: "deploiement",
      h2: "Déploiement et maintenance : qui fait quoi ?",
      blocks: [
        {
          t: "ul",
          items: [
            "**Avant la mise en service** : qui analyse votre organisation, écrit les scénarios, les teste, et qui les valide ? Quel est le délai réaliste, et que faut-il vous demander pour le tenir ?",
            "**Le jour J** : comment le standard est-il branché (renvoi d'appel, numéro dédié, téléphonie existante) ? Le renvoi dépend de votre opérateur et de votre installation : faites-le vérifier.",
            "**En cas de panne** : que se passe-t-il pour l'appelant ? Existe-t-il un secours automatique, ou faut-il désactiver le renvoi à la main ?",
            "**Après** : qui relit les appels, corrige les erreurs et fait évoluer les scénarios ? Sous quel délai, par quel canal, et avec quel suivi de ce qui change ?",
            "**Support** : quels horaires, quel interlocuteur, quel engagement de réponse ?",
          ],
        },
        {
          t: "callout",
          kind: "example",
          text: "Un standard bien installé peut devenir obsolète si votre organisation change : nouvelle négociatrice, nouveau service, nouveau logiciel. Demandez à qui vous le dites et comment le changement est pris en compte.",
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist de décision",
      blocks: [
        {
          t: "checklist",
          items: [
            "Mon besoin est écrit : appels, moments, résultat attendu, limites.",
            "J'ai choisi le modèle de service qui me convient : autonome, accompagné ou géré.",
            "J'ai testé au moins dix scénarios d'appels, plusieurs fois, et noté les résultats.",
            "Les intégrations dont j'ai besoin sont confirmées par écrit, pour mon logiciel.",
            "Je sais ce qui se passe lorsqu'un appel sort du scénario ou qu'une connexion tombe.",
            "J'ai le contrat de sous-traitance (DPA) et la liste des sous-traitants.",
            "Je connais le lieu de traitement des données et la durée de conservation.",
            "Je sais comment l'appelant est informé qu'il parle à une IA.",
            "Le coût total est chiffré sur mon volume réel, avec tous les postes.",
            "Je sais qui maintient le standard, sous quel délai, et à quel prix.",
            "Les conditions de sortie sont claires : préavis, numéros, données.",
            "Mon conseil juridique a validé l'organisation, y compris les enregistrements.",
          ],
        },
      ],
    },
    {
      id: "rushh",
      h2: "Et si vous envisagez Rushh ?",
      blocks: [
        {
          t: "p",
          text: "Rushh est l'éditeur de ce guide : appliquez-lui la même grille qu'aux autres. Rushh est une prestation entièrement gérée, limitée aux appels entrants, sur devis, avec une mise en service visée sous 5 jours ouvrés après réception des éléments. Pour voir comment il répond, appelez la [ligne de démonstration](/demonstrations), puis consultez [l'offre](/offre) et les [intégrations](/integrations).",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : sous-traitant",
      url: "https://www.cnil.fr/fr/definition/sous-traitant",
      usedFor: "Définition du sous-traitant et obligations à faire figurer au contrat. Page sans date affichée, consultée le 28 octobre 2026.",
    },
    {
      label: "CNIL : les durées de conservation des données",
      url: "https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees",
      usedFor: "Principe de conservation limitée et durée à déterminer par le responsable de traitement. Page datée du 2 avril 2026, consultée le 28 octobre 2026.",
    },
    {
      label: "CNIL : transférer des données hors de l'UE",
      url: "https://www.cnil.fr/fr/transferer-des-donnees-hors-de-lue",
      usedFor: "Encadrement des transferts : décisions d'adéquation, clauses contractuelles types. Consultée le 28 octobre 2026.",
    },
    {
      label: "CNIL : minimisation",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Principe de minimisation des données. Consulté le 28 octobre 2026.",
    },
    {
      label: "Commission européenne (AI Act Service Desk) : article 50, obligations de transparence",
      url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50",
      usedFor: "Obligation d'information des personnes qui interagissent avec un système d'IA. Consulté le 28 octobre 2026.",
    },
  ],
  sourcesNote:
    "Les points de contrôle juridiques s'appuient sur les pages officielles listées ci-dessus et ne constituent pas un avis juridique individuel. Les scénarios, questions et checklists sont des recommandations de Rushh, établies sans test d'un fournisseur en particulier. Rushh est l'éditeur de ce guide et l'un des fournisseurs possibles : lisez-le avec cette réserve.",
  related: [
    {
      href: "/comparatif/standards-telephoniques-ia-immobilier",
      label: "Comparatif des standards téléphoniques IA",
      text: "Cinq solutions comparées sur huit critères, sources datées.",
    },
    {
      href: "/vs/fonio",
      label: "Rushh ou Fonio",
      text: "Plateforme à configurer ou prestation gérée : les différences.",
    },
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou IA",
      text: "Comparer trois modèles d'organisation avant de choisir.",
    },
  ],
  cta: {
    title: "Tester Rushh avec vos propres appels",
    text: "Appelez la ligne de démonstration ou demandez une démonstration personnalisée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
      { href: "/solutions/mandataires-immobiliers", label: "Mandataires immobiliers" },
    ],
  },
};
