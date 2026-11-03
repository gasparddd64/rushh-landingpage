import type { Article } from "./types";

/** Texte réécrit (refonte éditoriale) : méthode, exemple, Rushh, invitation. Voir `bare` dans types.ts. */
export const standardIaRgpd: Article = {
  path: "/ressources/standard-telephonique-ia-immobilier-rgpd",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/standard-telephonique-ia-immobilier-rgpd.png",
    width: 1600,
    height: 840,
    alt: "Illustration : quatre repères pour une agence qui utilise un standard téléphonique IA : information des appelants, information sur l'IA, article 28 du RGPD et minimisation des données.",
  },
  title: "Standard téléphonique IA immobilier et RGPD : l'essentiel | Rushh",
  description:
    "Standard téléphonique IA et RGPD en agence immobilière : information des appelants, article 50 du règlement IA, article 28 du RGPD, minimisation.",
  shortTitle: "Standard IA et RGPD en agence",
  summary: "Informer les appelants, comprendre l'article 50 du règlement IA, ne recueillir que l'utile.",
  h1: "Standard téléphonique IA et RGPD : quelles questions poser avant de le déployer en agence ?",
  answer:
    "Avec un standard IA, une agence doit informer les appelants, savoir que l'information sur l'IA relève des fournisseurs (article 50), encadrer le traitement confié à un prestataire et ne recueillir que l'utile.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-03",
  intro: [
    {
      "t": "p",
      "text": "Un standard téléphonique IA recueille des données : un nom, un numéro, parfois un projet de vente. L'agence reste responsable de la façon dont elles sont utilisées."
    },
    {
      "t": "p",
      "text": "Quatre repères, tirés des textes officiels, permettent d'aborder le sujet sereinement."
    }
  ],
  sections: [
    {
      "id": "textes",
      "h2": "Ce que prévoient les textes",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Informer les appelants"
        },
        {
          "t": "p",
          "text": "Le RGPD impose d'informer les personnes sur l'usage de leurs données : qui est responsable, pourquoi elles sont recueillies, combien de temps, et quels sont leurs droits. La CNIL détaille ces mentions dans sa page [information des personnes et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)."
        },
        {
          "t": "h3",
          "text": "2. L'information sur l'IA : une obligation des fournisseurs"
        },
        {
          "t": "p",
          "text": "L'article 50, paragraphe 1, du règlement européen sur l'IA, applicable depuis le 2 août 2026, impose aux fournisseurs de systèmes conversationnels de prévoir l'information des personnes : le système doit être conçu pour que l'appelant sache qu'il s'adresse à une IA, sauf si cela ressort clairement des circonstances. Voir la [Commission européenne](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)."
        },
        {
          "t": "p",
          "text": "Ce qui incombe à votre agence dépend de sa situation : en cas de doute, demandez un avis juridique."
        },
        {
          "t": "h3",
          "text": "3. Encadrer le traitement confié à un prestataire"
        },
        {
          "t": "p",
          "text": "Lorsqu'une agence confie à un prestataire le traitement de données pour son compte, l'article 28 du RGPD prévoit un contrat qui encadre ce traitement. La CNIL l'explique dans son [guide du sous-traitant](https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf)."
        },
        {
          "t": "h3",
          "text": "4. Ne recueillir que l'utile"
        },
        {
          "t": "p",
          "text": "Le RGPD impose de limiter les données à ce qui est nécessaire à la finalité : c'est le principe de [minimisation](https://www.cnil.fr/fr/definition/minimisation), expliqué par la CNIL. Un standard n'a pas besoin de tout demander."
        },
        {
          "t": "statement",
          "text": "Ces repères relèvent des textes ; l'organisation concrète se définit avec [chaque fournisseur](/ressources/choisir-standard-telephonique-ia-immobilier)."
        }
      ]
    },
    {
      "id": "exemple",
      "h2": "Exemple : un appel vendeur",
      "blocks": [
        {
          "t": "p",
          "text": "Un propriétaire appelle pour une estimation. Le standard indique qu'il s'agit d'un assistant, puis recueille le type de bien, sa localisation, un nom et un numéro de rappel : rien de plus que nécessaire pour proposer un rendez-vous."
        }
      ]
    },
    {
      "id": "rushh",
      "h2": "Comment Rushh applique cette méthode",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."
        },
        {
          "t": "p",
          "text": "Les scénarios d'appel sont conçus avec votre agence : questions posées, informations recueillies, règles de transmission. Les demandes sont organisées dans la plateforme métier Rushh, avec coordonnées, résumé et statut."
        },
        {
          "t": "p",
          "text": "Pour toute question sur le traitement des données, échangez avec l'équipe Rushh lors de la démonstration. Voir [l'offre Rushh](/offre)."
        }
      ]
    },
    {
      "id": "demonstration",
      "h2": "Posez vos questions à l'équipe Rushh",
      "blocks": [
        {
          "t": "p",
          "text": "Découvrez comment Rushh prend en charge les appels de votre agence."
        },
        {
          "t": "button",
          "label": "Réserver une démonstration",
          "href": "/demonstrations"
        }
      ]
    }
  ],
  sources: [
    {
      "label": "CNIL : information des personnes et transparence",
      "url": "https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence",
      "usedFor": "Mentions d'information à fournir à la collecte (responsable, finalités, durée, droits)."
    },
    {
      "label": "Règlement (UE) 2016/679 (RGPD)",
      "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679",
      "usedFor": "Texte de référence : information des personnes, article 5 (minimisation), article 28 (sous-traitant)."
    },
    {
      "label": "CNIL : guide du sous-traitant",
      "url": "https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf",
      "usedFor": "Relation entre responsable de traitement et sous-traitant, contrat de l'article 28."
    },
    {
      "label": "CNIL : le principe de minimisation des données",
      "url": "https://www.cnil.fr/fr/definition/minimisation",
      "usedFor": "Limiter les informations recueillies au besoin de la finalité."
    },
    {
      "label": "Commission européenne, AI Act Service Desk : article 50",
      "url": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50",
      "usedFor": "Paragraphe 1 : obligation des fournisseurs de systèmes destinés à interagir avec des personnes de prévoir leur information. Version consolidée au 27 juillet 2026."
    },
    {
      "label": "Commission européenne : cadre réglementaire de l'IA",
      "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      "usedFor": "Application des règles de transparence à partir d'août 2026."
    }
  ],
  sourcesNote: "",
  related: [],
  cta: { title: "Posez vos questions à l'équipe Rushh", text: "", links: [] },
};
