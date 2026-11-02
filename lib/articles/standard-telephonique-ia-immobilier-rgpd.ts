import type { Article } from "./types";

const CONSULTED = "Consulté le 2 novembre 2026.";

export const standardIaRgpd: Article = {
  path: "/ressources/standard-telephonique-ia-immobilier-rgpd",
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-immobilier-rgpd.png",
    width: 1600,
    height: 840,
    alt: "Huit questions de confidentialité à poser avant de déployer un standard téléphonique IA : information de l'appelant, enregistrement, conservation, sous-traitants, droits, transferts, accès et transparence sur l'IA.",
  },
  title: "Standard téléphonique IA immobilier et RGPD : 8 questions | Rushh",
  description:
    "Information des appelants, enregistrement, conservation, sous-traitants, droits, transferts : huit questions RGPD avant de déployer un standard IA.",
  shortTitle: "Standard IA et RGPD : 8 questions à poser",
  summary: "Les questions de confidentialité à poser avant de déployer un standard IA, d'après la CNIL et les textes européens.",
  h1: "Standard téléphonique IA et RGPD : quelles questions poser avant de le déployer en agence ?",
  answer:
    "Avant de déployer un standard téléphonique IA, une agence immobilière doit pouvoir répondre à huit questions : comment les appelants sont informés, si les appels sont enregistrés, combien de temps les données sont conservées, qui intervient comme sous-traitant, comment les droits des personnes s'exercent, si des données quittent l'Union européenne, qui peut y accéder, et comment l'appelant sait qu'il parle à une IA. Aucun outil ne rend une agence conforme automatiquement : la conformité se documente et se vérifie.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "probleme",
      h2: "Le problème : un appel contient des données personnelles dès les premières secondes",
      blocks: [
        {
          t: "p",
          text: "Un appelant donne son nom, son numéro, parfois son adresse, la situation d'un bien ou d'un logement qu'il occupe. Si un standard téléphonique IA prend l'appel, ces informations sont recueillies, transcrites ou résumées, puis transmises. Le règlement général sur la protection des données (RGPD) s'applique à ce traitement comme à n'importe quel autre.",
        },
        {
          t: "p",
          text: "Ce guide ne donne pas de conseil juridique personnalisé. Il liste les questions qu'une agence doit se poser et poser à son prestataire, en s'appuyant sur des sources officielles. Pour une situation précise, rapprochez-vous de votre délégué à la protection des données ou d'un conseil.",
        },
      ],
    },
    {
      id: "roles",
      h2: "Qui est responsable de quoi ?",
      blocks: [
        {
          t: "p",
          text: "Dans la plupart des configurations, l'agence décide pourquoi et comment les données des appelants sont utilisées : elle est responsable de traitement. Le prestataire qui fait fonctionner le standard pour son compte agit en général comme sous-traitant. L'article 28 du RGPD prévoit alors que le traitement soit encadré par un contrat (ou un autre acte juridique) qui fixe notamment l'objet, la durée, la nature et la finalité du traitement, les types de données, et l'obligation de ne traiter les données que sur instructions documentées du responsable.",
        },
        {
          t: "callout",
          kind: "reco",
          text: "La qualification exacte (responsable, sous-traitant, responsables conjoints) se détermine au cas par cas et se confirme dans le contrat. Demandez-la par écrit avant la mise en service.",
        },
      ],
    },
    {
      id: "questions",
      h2: "Les huit questions à poser, une par une",
      blocks: [
        {
          t: "table",
          caption: "Huit questions de confidentialité avant de déployer un standard IA",
          head: ["Question", "Ce qu'il faut pouvoir répondre", "Où le vérifier"],
          rows: [
            ["1. L'appelant est-il informé ?", "Qui est responsable, pourquoi les données sont recueillies, combien de temps elles sont gardées, quels sont ses droits", "Message d'accueil, politique de confidentialité, contrat"],
            ["2. Les appels sont-ils enregistrés ?", "Oui ou non, pour quelle finalité, avec quelle information de l'appelant et quel droit d'opposition", "Configuration du scénario"],
            ["3. Combien de temps conserve-t-on ?", "Une durée par type de donnée, et une suppression effective à l'échéance", "Contrat, paramétrage"],
            ["4. Qui sont les sous-traitants ?", "La liste des intervenants, leurs rôles, et le contrat qui les encadre", "Contrat ou accord de traitement des données"],
            ["5. Comment s'exercent les droits ?", "Un point de contact, un délai, et une procédure pour l'accès, la rectification ou l'effacement", "Politique de confidentialité, procédure interne"],
            ["6. Les données quittent-elles l'Union européenne ?", "Oui ou non, vers où, et avec quel encadrement", "Contrat, liste des sous-traitants"],
            ["7. Qui peut accéder aux données ?", "Des accès limités, individuels et tracés", "Contrat, paramétrage des comptes"],
            ["8. L'appelant sait-il qu'il parle à une IA ?", "Une information claire dès le début de l'appel, sauf si c'est évident", "Message d'accueil"],
          ],
          note: "Cette liste est un point de départ, pas un audit. Elle ne remplace ni l'analyse de votre délégué à la protection des données ni un avis juridique.",
        },
      ],
    },
    {
      id: "information",
      h2: "Informer les appelants : ce que dit la CNIL",
      blocks: [
        {
          t: "p",
          text: "La CNIL rappelle que l'information doit être concise, transparente, compréhensible et aisément accessible. Pour une collecte directe, elle doit couvrir notamment l'identité du responsable de traitement, les finalités, la base légale, les destinataires (y compris les sous-traitants), la durée de conservation, les droits des personnes et le droit de saisir la CNIL, et, selon les cas, les transferts hors de l'Union européenne.",
        },
        {
          t: "p",
          text: "Au téléphone, la CNIL décrit, pour l'écoute et l'enregistrement des appels, une information à deux niveaux : une mention orale au début de l'appel, puis un renvoi vers un site ou une touche pour l'information complète, avec le droit d'opposition signalé avant la fin de la conversation. Cette page de la CNIL se présente elle-même comme ancienne et en cours de mise à jour : prenez-la comme un repère de bonne pratique et vérifiez la version en vigueur.",
        },
        {
          t: "callout",
          kind: "example",
          text: "Exemple fictif de mention d'accueil. « Bonjour, vous êtes en relation avec l'assistant téléphonique de l'agence. Votre appel peut être enregistré pour traiter votre demande. Pour en savoir plus ou refuser, restez en ligne ou consultez notre politique de confidentialité. » À adapter à votre configuration réelle : la mention doit décrire ce qui se passe vraiment.",
        },
      ],
    },
    {
      id: "conservation",
      h2: "Enregistrer et conserver : limiter dès le départ",
      blocks: [
        {
          t: "p",
          text: "Pour l'enregistrement d'appels sur le lieu de travail, la CNIL indique que les enregistrements peuvent être conservés jusqu'à six mois au maximum, sauf texte ou justification particulière, et que les documents d'analyse peuvent l'être jusqu'à un an. Ces repères visent un contexte précis (le suivi de la qualité ou la formation) : la durée applicable à votre standard dépend de votre finalité, que vous devez définir et documenter.",
        },
        {
          t: "ul",
          items: [
            "**Définir la finalité** avant de décider d'enregistrer : traiter la demande, prouver un accord, former l'équipe ne mènent pas aux mêmes durées.",
            "**Ne conserver que le nécessaire** : un résumé et les coordonnées suffisent souvent, sans l'enregistrement audio.",
            "**Prévoir la suppression** à l'échéance, et pouvoir la constater.",
            "**Limiter les accès** aux personnes concernées par la finalité, avec une traçabilité.",
          ],
        },
      ],
    },
    {
      id: "soustraitants",
      h2: "Sous-traitants et transferts : poser les bonnes questions",
      blocks: [
        {
          t: "p",
          text: "Le RGPD (article 28) impose un contrat avec le sous-traitant et interdit à celui-ci de recourir à un sous-traitant ultérieur sans l'autorisation écrite préalable, spécifique ou générale, du responsable de traitement. Les transferts de données vers des pays tiers relèvent du chapitre V du règlement (articles 44 à 50). La CNIL a publié un guide du sous-traitant qui sert de référence pratique.",
        },
        {
          t: "ul",
          items: [
            "Quelles sociétés interviennent dans le traitement d'un appel (téléphonie, reconnaissance vocale, modèle de langage, hébergement) ?",
            "Où les données sont-elles traitées et hébergées ?",
            "Un transfert hors de l'Union européenne est-il prévu, et sur quelle base ?",
            "Comment êtes-vous informé d'un changement de sous-traitant ?",
            "Que deviennent les données à la fin du contrat ?",
          ],
        },
        {
          t: "callout",
          kind: "fact",
          text: "Chez Rushh, la politique de confidentialité indique que le détail contractuel du traitement des données figure dans le contrat ou l'accord de traitement des données, et que les questions d'hébergement et de sous-traitants se traitent avec l'équipe. Ce guide n'affirme rien d'autre à ce sujet : demandez ces éléments par écrit.",
        },
      ],
    },
    {
      id: "ia",
      h2: "Dire à l'appelant qu'il parle à une IA",
      blocks: [
        {
          t: "p",
          text: "L'article 50 du règlement européen sur l'intelligence artificielle (AI Act) prévoit que les systèmes d'IA destinés à interagir directement avec des personnes soient conçus de façon que ces personnes soient informées de cette interaction, sauf si cela ressort clairement du contexte. L'article est applicable depuis le 2 août 2026. Concrètement, un standard IA gagne à le dire dès l'accueil.",
        },
        {
          t: "p",
          text: "Cette obligation s'ajoute à l'information RGPD, elle ne la remplace pas. Les lignes directrices d'application peuvent évoluer : vérifiez le texte en vigueur.",
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Un standard IA est-il conforme au RGPD par nature ?" },
        {
          t: "p",
          text: "Non. La conformité dépend de l'usage : finalités, information, durées, contrat, sécurité, droits. Aucun outil ne l'assure à lui seul.",
        },
        { t: "h3", text: "Faut-il enregistrer les appels ?" },
        {
          t: "p",
          text: "Pas nécessairement. L'enregistrement est un choix qui se justifie par une finalité et se documente. Un résumé transmis à l'équipe suffit souvent.",
        },
        { t: "h3", text: "Faut-il un contrat avec le prestataire ?" },
        {
          t: "p",
          text: "Oui, lorsqu'il agit comme sous-traitant : l'article 28 du RGPD exige un contrat ou un autre acte juridique qui encadre le traitement.",
        },
        { t: "h3", text: "Ce guide remplace-t-il l'avis d'un juriste ?" },
        {
          t: "p",
          text: "Non. Il aide à préparer les bonnes questions, pas à décider à la place de votre délégué à la protection des données ou de votre conseil.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "CNIL : information des personnes et transparence",
      url: "https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence",
      usedFor: `Mentions d'information à fournir à la collecte (responsable, finalités, base légale, destinataires, durée, droits, transferts) et exigences de forme. ${CONSULTED}`,
    },
    {
      label: "CNIL : l'écoute et l'enregistrement des appels sur le lieu de travail",
      url: "https://www.cnil.fr/fr/lecoute-et-lenregistrement-des-appels-sur-le-lieu-de-travail",
      usedFor: `Information à deux niveaux au téléphone, droit d'opposition, conservation jusqu'à six mois pour les enregistrements et un an pour les documents d'analyse. Page présentée comme ancienne et en cours de mise à jour. ${CONSULTED}`,
    },
    {
      label: "CNIL : guide du sous-traitant",
      url: "https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf",
      usedFor: "Référence pratique de la CNIL sur la relation entre responsable de traitement et sous-traitant.",
    },
    {
      label: "Règlement (UE) 2016/679 (RGPD)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679",
      usedFor: "Texte officiel de référence : article 28 (contrat de sous-traitance, sous-traitant ultérieur), droits des personnes, chapitre V (transferts). Le libellé des articles 28 et du chapitre V a été vérifié sur une reproduction du texte ; le site EUR-Lex n'a pas pu être lu directement. Consulté le 2 novembre 2026.",
    },
    {
      label: "AI Act, article 50 : obligations de transparence",
      url: "https://artificialintelligenceact.eu/article/50/",
      usedFor: `Information des personnes qui interagissent avec un système d'IA, sauf évidence ; application au 2 août 2026. ${CONSULTED}`,
    },
    {
      label: "Règlement (UE) 2024/1689 (AI Act), texte officiel",
      url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      usedFor: "Texte officiel du règlement ; la formulation de l'article 50 a été vérifiée sur une reproduction du texte, EUR-Lex n'ayant pas pu être lu directement. Les lignes directrices d'application ne sont pas reprises ici.",
    },
    {
      label: "Rushh : politique de confidentialité",
      url: "https://www.rushh.fr/privacy",
      usedFor: "Renvoi au contrat ou à l'accord de traitement des données pour le détail du traitement.",
    },
  ],
  sourcesNote:
    "Ce guide est informatif : il ne constitue pas un conseil juridique personnalisé et ne promet aucune conformité automatique ou absolue. Les durées, obligations et lignes directrices peuvent évoluer ; vérifiez les textes en vigueur et rapprochez-vous de votre délégué à la protection des données. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Un standard conçu et suivi par l'équipe Rushh, avec les réponses par écrit",
    text: "Le Standard Rushh est configuré avec vous : la mention d'accueil, l'enregistrement ou non, les informations recueillies et ce qui est transmis se décident dans vos scénarios, et sont testés avant la mise en service. Pour l'hébergement, les sous-traitants et le traitement des données, le détail figure dans le contrat ou l'accord de traitement : posez ces huit questions à l'équipe, par écrit.",
    points: [
      "Des scénarios personnalisés, où l'information de l'appelant est décidée avec vous",
      "Des informations limitées au besoin : le motif, les coordonnées et le contexte utile",
      "Une prestation entièrement prise en charge, avec des tests avant la mise en service",
      "Des réponses aux questions de confidentialité fournies par l'équipe, dans le cadre du contrat",
    ],
    links: [
      { href: "/privacy", label: "Politique de confidentialité" },
      { href: "/demonstrations", label: "Tester la ligne de démonstration" },
    ],
  },
  related: [
    {
      href: "/ressources/telesecretariat-humain-ou-ia",
      label: "Télésecrétariat humain ou IA",
      text: "Informer l'appelant qu'il parle à une IA.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Dix scénarios à tester avant de signer.",
    },
    {
      href: "/ressources/qualification-appels-vendeurs-acquereurs",
      label: "Qualifier un appel vendeur ou acquéreur",
      text: "Les informations utiles, et seulement celles-là.",
    },
  ],
  cta: {
    title: "Entendez comment l'appelant est accueilli",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, et écoutez l'accueil, les questions posées et la suite annoncée. Vous pourrez ensuite poser vos questions de confidentialité à l'équipe. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
