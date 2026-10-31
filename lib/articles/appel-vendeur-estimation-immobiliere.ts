import type { Article } from "./types";

export const appelVendeurEstimation: Article = {
  path: "/ressources/appel-vendeur-estimation-immobiliere",
  category: "guides",
  cover: {
    src: "/ressources/appel-vendeur-estimation-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Un arbre de décision part d'un appel vendeur et débouche sur cinq suites possibles : estimation à planifier, vente future à rappeler, demande non mûre à documenter, informations insuffisantes à compléter, refus de répondre à respecter.",
  },
  title: "Appel vendeur pour une estimation : qualifier et fixer le RDV | Rushh",
  description:
    "Appel vendeur avant une estimation : informations à recueillir, arbre de décision en cinq issues, dialogue fictif et erreurs à éviter.",
  shortTitle: "L'appel vendeur avant une estimation",
  summary: "Les informations à recueillir, un arbre de décision en cinq issues et un dialogue fictif pour préparer l'estimation.",
  h1: "Appel vendeur : que demander avant un rendez-vous d'estimation immobilière ?",
  answer:
    "Lors d'un appel vendeur, il faut identifier le projet, le secteur ou l'adresse sans les deviner, le type de bien, le calendrier de vente et le moyen de joindre la personne, puis proposer l'étape suivante : un rendez-vous ou un rappel. Il ne faut jamais annoncer un prix estimé, ni promettre un mandat, ni inventer un créneau.",
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  sections: [
    {
      id: "premieres-secondes",
      h2: "Les premières secondes de l'appel",
      blocks: [
        {
          t: "p",
          text: "Un propriétaire qui appelle pour une estimation fait souvent sa première démarche : il n'a pas toujours le vocabulaire de l'agence, et il compare parfois plusieurs professionnels. Les premières secondes servent à lui montrer qu'il est entendu : un accueil clair, l'agence nommée, puis une question ouverte sur son projet.",
        },
        {
          t: "p",
          text: "Évitez de lui demander d'emblée son nom, son numéro et son adresse comme un formulaire. Laissez-le expliquer, puis recueillez ce qui manque. Quand l'appel est pris par un standard téléphonique, la règle est la même : écouter, reformuler, puis questionner.",
        },
      ],
    },
    {
      id: "informations",
      h2: "Les informations indispensables",
      blocks: [
        {
          t: "p",
          text: "Pour préparer un rendez-vous d'estimation, six éléments suffisent le plus souvent. Tout le reste peut attendre le rendez-vous lui-même.",
        },
        {
          t: "ol",
          items: [
            "**Le projet** : vendre, faire estimer pour information, hériter, divorcer, investir. Le motif change le ton du rendez-vous.",
            "**Le secteur ou l'adresse** : demandez-le sans le deviner. Si la personne hésite à donner l'adresse exacte, la commune ou le quartier suffit pour orienter l'appel.",
            "**Le type de bien** : maison, appartement, terrain, local, et si possible la surface ou le nombre de pièces.",
            "**Le calendrier** : vente immédiate, dans quelques mois, simple réflexion.",
            "**Le moyen de joindre la personne** : numéro, et le meilleur moment pour la rappeler.",
            "**La suite souhaitée** : rendez-vous sur place, échange téléphonique, simple information.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Ne recueillez que ce qui sert à préparer le rendez-vous. La CNIL rappelle le principe de minimisation : les données collectées doivent être limitées à ce qui est nécessaire à la finalité.",
        },
      ],
    },
    {
      id: "arbre",
      h2: "Un arbre de décision en cinq issues",
      blocks: [
        {
          t: "p",
          text: "Tous les appels vendeurs ne mènent pas à un rendez-vous, et ce n'est pas un échec. L'arbre ci-dessous donne à chaque situation une suite claire, que ce soit un agent, un collaborateur ou un standard qui prend l'appel.",
        },
        {
          t: "table",
          caption: "Arbre de décision d'un appel vendeur pour une estimation",
          head: ["Situation", "Signal dans l'appel", "Suite à donner", "À ne pas faire"],
          rows: [
            [
              "1. Estimation immédiate",
              "Projet de vente défini, bien identifié, calendrier court",
              "Proposer un rendez-vous si l'agenda le permet, sinon prendre une préférence horaire et transmettre à confirmer",
              "Annoncer un prix ou promettre un créneau non vérifié",
            ],
            [
              "2. Vente future",
              "Projet réel mais à plusieurs mois",
              "Noter le calendrier, proposer un rappel à une date convenue",
              "Relancer comme une vente immédiate",
            ],
            [
              "3. Demande non mûre",
              "Simple curiosité sur la valeur du bien, pas de projet",
              "Expliquer ce que l'agence propose, laisser un moyen de reprendre contact",
              "Forcer un rendez-vous",
            ],
            [
              "4. Informations insuffisantes",
              "Appel haché, bien mal décrit, adresse floue",
              "Reformuler, poser une ou deux questions de plus, sinon proposer un rappel",
              "Deviner l'adresse ou le type de bien",
            ],
            [
              "5. Refus de répondre",
              "La personne ne veut pas donner d'informations",
              "Respecter son choix, indiquer comment joindre l'agence",
              "Insister ou conditionner la suite à la réponse",
            ],
          ],
          note: "Les cinq issues sont une proposition de départ. Une agence peut en ajouter, par exemple pour les successions ou les biens atypiques.",
        },
      ],
    },
    {
      id: "dialogue",
      h2: "Exemple de conversation",
      blocks: [
        {
          t: "callout",
          kind: "example",
          text: "Dialogue fictif, écrit pour illustrer une méthode. Il ne reflète ni un client réel ni un résultat mesuré.",
        },
        {
          t: "fiche",
          title: "Appel vendeur : premier contact",
          rows: [
            ["Accueil", "« Agence Exemple, bonjour, que puis-je faire pour vous ? »"],
            ["Appelant", "« Bonjour, j'aimerais faire estimer ma maison, je pense la vendre. »"],
            ["Agence", "« Très bien. Votre maison est dans quelle commune ? »"],
            ["Appelant", "« À Sceaux, près du centre. »"],
            ["Agence", "« Merci. Et vous pensez la vendre plutôt rapidement ou dans quelques mois ? »"],
            ["Appelant", "« Plutôt d'ici l'été. »"],
            ["Agence", "« Je note : estimation d'une maison à Sceaux, vente envisagée d'ici l'été. Un collaborateur peut vous rappeler pour convenir d'un rendez-vous : quel moment vous arrange ? »"],
            ["Appelant", "« En fin de journée. »"],
            ["Agence", "« C'est noté, en fin de journée. Je transmets votre demande à l'équipe, qui vous rappellera pour fixer le rendez-vous. »"],
          ],
          note: "Dialogue fictif. L'agence ne donne ni prix ni créneau : elle recueille l'essentiel et annonce un rappel, car l'agenda n'a pas été consulté.",
        },
      ],
    },
    {
      id: "creneau",
      h2: "Réserver ou proposer un rappel, sans promettre un créneau inventé",
      blocks: [
        {
          t: "p",
          text: "Une réservation n'est fiable que si l'agenda est accessible, le créneau libre et la règle de réservation claire. Dans le cas contraire, le bon message n'est pas « c'est réservé » mais « votre demande est transmise, vous serez rappelé ». Cette distinction vaut pour un agent comme pour un standard. Le guide sur la [prise de rendez-vous par IA](/ressources/prise-rendez-vous-ia-immobilier) détaille ces deux cas.",
        },
        {
          t: "ul",
          items: [
            "**Agenda accessible et règle claire** : proposer un ou deux créneaux réels, puis confirmer la date, l'heure et l'adresse.",
            "**Agenda inaccessible ou règle incertaine** : relever une préférence horaire et annoncer un rappel.",
            "**Demande hors secteur** : indiquer poliment que l'agence n'intervient pas dans la zone, si c'est la règle.",
          ],
        },
      ],
    },
    {
      id: "erreurs",
      h2: "Erreurs à éviter",
      blocks: [
        {
          t: "ul",
          items: [
            "**Annoncer une valeur** : une estimation se fait sur place, avec des éléments que l'appel ne donne pas.",
            "**Promettre un mandat ou un délai de vente** : aucun résultat ne dépend de l'appel seul.",
            "**Poser dix questions d'affilée** : l'appelant raccroche, ou donne des réponses approximatives.",
            "**Redemander une information déjà donnée** : l'agent ou le standard doit retenir ce qui a été dit.",
            "**Oublier l'étape suivante** : un appel sans suite annoncée est un appel perdu.",
          ],
        },
        {
          t: "p",
          text: "Si l'appel est enregistré, la personne doit en être informée. La CNIL donne des repères sur l'écoute et l'enregistrement des appels ; sa page indique être en cours de mise à jour, vérifiez donc la version en vigueur et faites valider votre organisation par votre conseil.",
        },
      ],
    },
    {
      id: "checklist",
      h2: "Checklist pour une agence",
      blocks: [
        {
          t: "checklist",
          items: [
            "Les six informations utiles sont définies, et rien de plus n'est demandé",
            "L'arbre de décision en cinq issues est écrit et connu de toute l'équipe",
            "La règle de réservation est claire : quels créneaux, quel agenda, quelles validations",
            "Un rappel est toujours annoncé avec un moment précis ou une plage",
            "Aucun prix, aucune promesse de mandat ne sont annoncés au téléphone",
            "Un exemple de chaque issue a été testé par un appel réel avant la mise en service",
          ],
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Une IA peut-elle prendre un appel d'estimation ?" },
        {
          t: "p",
          text: "Oui, si les consignes de qualification sont claires : elle recueille le projet, le secteur, le type de bien et le moyen de rappeler, puis transmet la demande ou propose un rendez-vous si l'agenda le permet. Elle ne donne pas de valeur.",
        },
        { t: "h3", text: "Faut-il demander l'adresse exacte dès le premier appel ?" },
        {
          t: "p",
          text: "Pas obligatoirement. Le secteur ou la commune suffit souvent pour orienter la demande ; l'adresse précise peut être confirmée par l'agent lors du rappel ou sur place.",
        },
        { t: "h3", text: "Comment gérer un appelant qui veut un prix tout de suite ?" },
        {
          t: "p",
          text: "Expliquer qu'une estimation sérieuse suppose de voir le bien, puis proposer un rendez-vous ou un rappel. Annoncer un chiffre au téléphone engage l'agence sans éléments fiables.",
        },
        { t: "h3", text: "Un appel mène-t-il toujours à un rendez-vous ?" },
        {
          t: "p",
          text: "Non. Plusieurs issues sont normales : vente future, simple curiosité, informations insuffisantes. Le résultat commercial d'un appel dépend de nombreux facteurs.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : le principe de minimisation des données",
      url: "https://www.cnil.fr/fr/definition/minimisation",
      usedFor: "Limiter les informations personnelles recueillies au besoin de la finalité. Consulté le 31 octobre 2026.",
    },
    {
      label: "CNIL : l'écoute et l'enregistrement des appels sur le lieu de travail",
      url: "https://www.cnil.fr/fr/lecoute-et-lenregistrement-des-appels-sur-le-lieu-de-travail",
      usedFor:
        "Information des personnes en cas d'enregistrement. La CNIL signale que cette page est en cours de mise à jour : vérifiez la version en vigueur. Consulté le 31 octobre 2026.",
    },
  ],
  sourcesNote:
    "Ce guide décrit une méthode. L'arbre de décision et le dialogue sont des modèles fictifs à adapter à votre organisation : aucun résultat de client n'est présenté. Ce texte n'est pas un avis juridique. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Chaque appel vendeur reçoit une suite claire, sans valeur annoncée ni créneau inventé",
    text: "Rushh conçoit, configure, teste, déploie et suit un standard téléphonique IA spécialisé dans les appels entrants de l'immobilier. L'arbre de décision de ce guide est le type de scénario que l'équipe Rushh écrit avec l'agence, puis teste en conditions d'appel avant la mise en service.",
    points: [
      "Un scénario d'appel vendeur écrit pour l'estimation, avec vos informations utiles et vos règles",
      "Un rendez-vous enregistré seulement si l'agenda le permet, sinon une demande transmise à confirmer",
      "Aucune valeur annoncée, aucune promesse de mandat",
      "Une prestation entièrement prise en charge : vous validez les règles, Rushh s'occupe du reste",
    ],
    links: [
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
      { href: "/solutions/transaction-immobiliere", label: "Standard pour la transaction" },
    ],
  },
  related: [
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier les appels vendeurs et acquéreurs",
      text: "Les informations à recueillir selon le profil de l'appelant.",
    },
    {
      href: "/ressources/prise-rendez-vous-ia-immobilier",
      label: "Prise de rendez-vous par IA",
      text: "Réserver, ou transmettre une demande à confirmer.",
    },
    {
      href: "/ressources/permanence-telephonique-agence-immobiliere",
      label: "Organiser la permanence téléphonique",
      text: "Qui prévenir, et quand, selon le motif d'appel.",
    },
  ],
  cta: {
    title: "Jouez un appel d'estimation sur la ligne de démonstration",
    text: "Appelez l'agence fictive à Paris en vendeur, donnez peu d'informations puis davantage : vous jugerez la qualification et la suite annoncée. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
