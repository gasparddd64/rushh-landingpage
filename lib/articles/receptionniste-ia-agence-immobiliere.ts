import type { Article, Block } from "./types";

const p = (text: string): Block => ({ t: "p", text });
const h3 = (text: string): Block => ({ t: "h3", text });

/** Texte validé (lot SEO/GEO novembre 2026, article 01) : à reproduire tel quel, voir `bare` dans types.ts. */
export const receptionnisteIa: Article = {
  path: "/ressources/receptionniste-ia-agence-immobiliere",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/receptionniste-ia-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Illustration : le parcours d'un appel entrant dans une agence immobilière, de la prise d'appel à la demande qualifiée transmise à l'équipe par une réceptionniste IA.",
  },
  title: "Réceptionniste IA pour agence immobilière | Rushh",
  description:
    "Une réceptionniste IA pour agence immobilière répond aux appels, qualifie les demandes et organise les rendez-vous. Fonctionnement, cas concrets, limites.",
  shortTitle: "Réceptionniste IA pour agence immobilière",
  summary: "Ce qu'une réceptionniste IA peut faire dans une agence : appels, rendez-vous, SMS, limites et test avant de choisir.",
  h1: "Réceptionniste IA pour agence immobilière : que peut-elle vraiment faire ?",
  answer:
    "Une réceptionniste IA pour agence immobilière est un standard téléphonique alimenté par intelligence artificielle qui décroche les appels entrants, comprend les demandes des vendeurs, acquéreurs, locataires et bailleurs, puis organise la suite : réponse, qualification, rendez-vous, transfert ou message. Son efficacité dépend des informations immobilières accessibles et des règles de l'agence.",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  intro: [
    p("Un propriétaire appelle pour faire estimer son appartement pendant que votre négociateur est en visite. Quelques minutes plus tard, un acquéreur veut savoir si un bien est encore disponible. Puis un locataire signale un problème dans son logement."),
    p("Ces trois appels arrivent au même numéro, mais ils ne demandent ni les mêmes informations ni les mêmes actions. C'est précisément le rôle d'une **réceptionniste IA spécialisée dans l'immobilier** : répondre, comprendre la demande et organiser la bonne suite, même lorsque personne n'est disponible dans l'agence."),
    p("Concrètement, une réceptionniste IA est un **standard téléphonique alimenté par intelligence artificielle**. Elle échange oralement avec l'appelant, identifie son besoin, consulte les informations auxquelles elle a accès et agit selon les consignes définies : prendre un rendez-vous, transmettre un dossier, envoyer un SMS ou transférer l'appel."),
    p("L'intérêt n'est pas seulement de décrocher. C'est d'éviter qu'un appel vendeur ou acquéreur se transforme en simple message à traiter plus tard."),
  ],
  sections: [
    {
      id: "difference",
      h2: "Réceptionniste IA, répondeur et standard classique : quelle différence ?",
      blocks: [
        p("Un **répondeur** enregistre un message, à condition que l'appelant accepte d'en laisser un. Un **serveur vocal interactif (SVI)** oriente généralement l'appel à partir de choix prédéfinis : « Tapez 1 pour la transaction, 2 pour la location. »"),
        p("Une réceptionniste IA fonctionne différemment. L'appelant peut expliquer sa demande avec ses propres mots : « Je voudrais visiter l'appartement rue Fondaudège, mais seulement samedi matin. » Le système cherche à comprendre l'intention, à identifier le bien et à proposer une suite adaptée."),
        p("La différence se voit surtout après l'appel. Un simple message dit qu'une personne souhaite être rappelée. Une demande qualifiée peut préciser le bien concerné, le projet, les disponibilités et la prochaine action attendue."),
        p("Une réceptionniste IA **n'est pas une secrétaire humaine**. Elle peut gérer des conversations courantes et des tâches automatisables, mais doit pouvoir transmettre à un collaborateur les situations complexes, sensibles ou non prévues par ses consignes."),
        p("Pour approfondir cette distinction, consultez notre guide [télésecrétariat humain ou standard téléphonique IA](/ressources/telesecretariat-humain-ou-ia)."),
      ],
    },
    {
      id: "appels",
      h2: "Quels appels une réceptionniste IA immobilière peut-elle traiter ?",
      blocks: [
        p("Le mot « immobilier » recouvre plusieurs métiers. Une réceptionniste IA réellement adaptée doit savoir que l'appel d'un vendeur n'a pas le même objectif que celui d'un locataire ou d'un syndic."),
        {
          t: "table",
          caption: "",
          head: ["Qui appelle ?", "Ce que la réceptionniste peut comprendre", "La suite possible"],
          rows: [
            ["**Propriétaire vendeur**", "Adresse, type de bien, projet de vente, demande d'estimation", "Rendez-vous d'estimation, qualification et transmission au négociateur"],
            ["**Acquéreur**", "Annonce concernée, budget, critères, disponibilité pour une visite", "Réponse sur le bien si les données sont accessibles, demande de visite ou rendez-vous"],
            ["**Candidat locataire**", "Bien recherché, budget, date souhaitée, question sur une annonce", "Informations disponibles, collecte des éléments utiles et orientation"],
            ["**Bailleur**", "Bien concerné, demande de gestion, question sur un dossier", "Qualification et transmission au gestionnaire concerné"],
            ["**Copropriétaire ou prestataire**", "Copropriété concernée, motif, caractère urgent ou non de la demande", "Orientation, notification ou transfert selon les règles définies"],
          ],
        },
        p("Ces parcours sont configurables. L'objectif n'est pas de faire subir le même questionnaire à tous les appelants, mais de recueillir **uniquement les informations utiles à la prochaine étape**."),
        h3("Un propriétaire appelle pour une estimation"),
        p("Il est 18 h 45. Un propriétaire souhaite faire estimer une maison, mais l'agence est fermée."),
        p("La réceptionniste IA peut identifier la demande, recueillir la localisation et les caractéristiques utiles du bien, puis consulter l'agenda du négociateur chargé du secteur. Si les règles et les connexions le permettent, elle propose un créneau, l'enregistre et envoie une confirmation."),
        p("Le lendemain, l'équipe retrouve une demande d'estimation déjà qualifiée. Cela ne signifie pas pour autant qu'un mandat sera signé, mais évite de repartir de zéro au moment du rappel."),
        p("Voir également notre article sur [l'appel vendeur et la prise de rendez-vous d'estimation](/ressources/appel-vendeur-estimation-immobiliere)."),
        h3("Un acquéreur appelle à propos d'une annonce"),
        p("Un acquéreur demande : « Le T3 de votre annonce est-il toujours disponible ? Je peux le visiter jeudi ? »"),
        p("Si le catalogue des biens est accessible et à jour, la réceptionniste peut rechercher l'annonce concernée, répondre à partir des informations autorisées, puis organiser une visite avec le bon négociateur. Si le bien n'est pas identifié avec certitude, elle doit demander une précision ou transmettre la demande plutôt qu'inventer une disponibilité."),
        p("C'est un point essentiel : **la qualité de la réponse dépend de la qualité des données connectées**."),
        h3("Un locataire signale un problème"),
        p("Un locataire appelle au sujet d'une fuite. La réceptionniste peut identifier le logement, recueillir les faits et appliquer les consignes prévues pour distinguer les demandes courantes des situations nécessitant une intervention humaine rapide."),
        p("Elle ne remplace ni le gestionnaire ni un service d'urgence. Elle permet de faire remonter la bonne information au bon interlocuteur, selon les procédures de l'agence."),
      ],
    },
    {
      id: "biens",
      h2: "Comment une réceptionniste IA connaît-elle les biens de l'agence ?",
      blocks: [
        p("Pour répondre à une question sur un appartement ou une maison, il ne suffit pas de connecter un numéro de téléphone à une IA. Il faut lui donner accès aux informations pertinentes, avec un niveau de fraîcheur suffisant."),
        p("Plusieurs sources peuvent être utilisées selon le projet :"),
        {
          t: "ul",
          items: [
            "**Logiciel immobilier ou CRM :** connexion à une API pour retrouver les annonces, les contacts et certaines informations de suivi, dans les limites des droits accordés.",
            "**Site internet de l'agence :** récupération des informations publiées sur les biens et les services, avec une méthode adaptée au site.",
            "**Flux d'annonces ou portails immobiliers :** exploitation de données accessibles par un flux ou une interface autorisée, lorsque les conditions techniques et contractuelles le permettent.",
            "**Base de connaissances :** documents, consignes, secteurs couverts, horaires, procédures de gestion, réponses aux questions fréquentes.",
          ],
        },
        p("Chez Rushh, des connexions à **Apimo et WHISE** sont déjà opérationnelles. D'autres logiciels peuvent être intégrés lorsque leurs interfaces, les autorisations et le périmètre du projet le permettent. Les connexions ne sont donc pas limitées à une liste figée d'outils."),
        p("Le bon test est simple : si l'agence modifie le statut d'un bien, comment et quand cette information devient-elle disponible au standard ? Une IA ne doit pas annoncer qu'un logement est libre si sa source ne permet pas de le vérifier."),
        p("Pour les intégrations, consultez la page [outils et connexions Rushh](/integrations)."),
      ],
    },
    {
      id: "rendez-vous",
      h2: "Peut-elle prendre des rendez-vous et envoyer des SMS ou des e-mails ?",
      blocks: [
        p("Oui, à condition que les actions nécessaires soient prévues dans la configuration."),
        p("Une réceptionniste IA peut consulter les disponibilités de plusieurs collaborateurs, identifier le négociateur responsable d'un bien ou d'un secteur, créer un rendez-vous, puis gérer une modification ou une annulation selon les règles définies. Les connexions à **Google Calendar et Outlook** font partie des possibilités de Rushh."),
        p("L'automatisation peut se prolonger après l'appel :"),
        {
          t: "ul",
          items: [
            "Confirmation de visite ou d'estimation par **SMS ou e-mail**.",
            "Rappel du rendez-vous selon le scénario choisi.",
            "Compte rendu adressé au bon collaborateur.",
            "Réception et traitement de réponses SMS dans les parcours prévus.",
            "Échanges ou notifications **WhatsApp**, lorsque le projet et les accès techniques le permettent.",
            "Mise à jour d'un outil métier ou déclenchement d'une autre action via API.",
          ],
        },
        p("Une automatisation bien conçue doit aussi savoir **ne pas réserver** : si aucun agenda fiable n'est disponible ou si l'appel exige une validation humaine, la réceptionniste recueille la demande et organise la reprise par l'équipe."),
        p("Le fonctionnement détaillé est présenté dans notre guide sur la [prise de rendez-vous par IA dans l'immobilier](/ressources/prise-rendez-vous-ia-immobilier)."),
      ],
    },
    {
      id: "langues",
      h2: "Une réceptionniste IA peut-elle répondre en plusieurs langues ?",
      blocks: [
        p("Une agence située dans une zone touristique, une grande ville ou un secteur avec une clientèle internationale peut recevoir des appels en plusieurs langues."),
        p("Rushh peut gérer des échanges en **français, anglais et espagnol**, ainsi que d'autres langues selon les besoins et la configuration. Le niveau de qualité doit être testé avec le vocabulaire immobilier de l'agence : estimation, compromis, dossier locatif, charges de copropriété, visite, etc."),
        p("L'objectif n'est pas de multiplier les langues sur une fiche commerciale, mais de vérifier que les appels réellement reçus sont bien compris et traités."),
      ],
    },
    {
      id: "installer",
      h2: "Faut-il installer et gérer soi-même la réceptionniste IA ?",
      blocks: [
        p("Cela dépend du prestataire. Certaines solutions mettent à disposition une interface pour créer ses scénarios, connecter ses outils et assurer soi-même les ajustements. D'autres proposent une prise en charge complète."),
        p("**Rushh fonctionne comme une agence de service, pas comme un simple logiciel en libre-service.** L'équipe Rushh étudie les appels et l'organisation du client, conçoit les scénarios, configure les connexions, réalise les tests, installe le standard, surveille son fonctionnement et effectue les optimisations nécessaires."),
        p("Le professionnel de l'immobilier conserve son organisation et ses interlocuteurs. Le standard s'adapte aux règles de l'agence, et non l'inverse."),
        p("Le service concerne les **agences indépendantes, mandataires, réseaux multi-agences, gestionnaires locatifs et syndics**, avec des parcours adaptés à chaque métier."),
        p("Découvrez le détail de [l'offre Rushh](/offre)."),
      ],
    },
    {
      id: "limites",
      h2: "Les limites à vérifier avant de confier ses appels à une IA",
      blocks: [
        p("Une réceptionniste IA n'est pas efficace par le seul fait qu'elle utilise un modèle vocal. Sa fiabilité repose sur la qualité du paramétrage, des données et des procédures de reprise."),
        p("**Informations sur les biens.** L'IA doit savoir quand elle dispose d'une information fiable et quand elle doit s'abstenir de répondre."),
        p("**Rendez-vous.** Un créneau ne doit être confirmé que si l'agenda et les règles de réservation le permettent."),
        p("**Transfert humain.** Un appel sensible, une réclamation complexe ou une situation urgente peut nécessiter l'intervention d'un collaborateur."),
        p("**Protection des données.** Il faut définir les informations collectées, les accès, la durée de conservation, l'information des appelants et, le cas échéant, les conditions d'enregistrement. Les obligations applicables doivent être vérifiées pour le fonctionnement retenu. Voir notre [guide RGPD et standard téléphonique IA](/ressources/standard-telephonique-ia-immobilier-rgpd)."),
        p("**Qualité de conversation.** La voix, les temps de réponse, les noms de rues, les références d'annonces et les accents doivent être testés dans des conditions réalistes."),
      ],
    },
    {
      id: "tester",
      h2: "Comment tester une réceptionniste IA avant de la choisir ?",
      blocks: [
        p("Ne vous contentez pas de demander si l'IA « prend des rendez-vous ». Appelez-la comme le feraient vos clients."),
        p("Testez notamment ces cinq situations :"),
        {
          t: "ol",
          items: [
            "**Vendeur :** « Je souhaite faire estimer ma maison, mais je ne connais pas sa surface exacte. » Vérifiez que l'IA avance sans bloquer sur une donnée manquante.",
            "**Acquéreur :** « Je veux visiter le T3 que vous avez publié hier. » Vérifiez comment elle identifie l'annonce et ce qu'elle fait si plusieurs biens correspondent.",
            "**Changement de rendez-vous :** « Je ne pourrai finalement pas venir jeudi. » Vérifiez la gestion des modifications, selon les connexions disponibles.",
            "**Appel complexe :** « J'ai un problème urgent dans mon logement. » Vérifiez l'orientation et la possibilité de reprise humaine.",
            "**Appel hors scénario :** posez une question à laquelle la base de connaissances ne répond pas. Vérifiez que l'IA ne fabrique pas une réponse.",
          ],
        },
        p("Après chaque test, regardez **ce que reçoit réellement l'agence** : un simple message, une demande qualifiée, un rendez-vous confirmé, une notification ou une action dans son logiciel."),
      ],
    },
    {
      id: "rushh",
      h2: "Rushh : une réceptionniste IA immobilière entièrement prise en charge",
      blocks: [
        p("Rushh est une agence spécialisée dans l'**externalisation des appels entrants des professionnels de l'immobilier**. Son service repose sur un standard téléphonique alimenté par intelligence artificielle, conçu sur mesure pour chaque organisation."),
        p("Il peut répondre 24 h/24 et 7 j/7, qualifier les demandes, organiser les rendez-vous, transmettre les appels et automatiser les messages ou les actions connectées selon les règles définies avec le client."),
        p("La différence tient aussi à ce qui se passe **avant et après l'installation** : l'équipe Rushh prend en charge la conception, la configuration, les tests, la mise en service, le suivi et les ajustements. Les automatisations supplémentaires peuvent être étudiées dès lors qu'elles sont techniquement réalisables et que les accès nécessaires sont disponibles."),
        p("L'objectif est simple : permettre aux équipes immobilières de rester concentrées sur les visites, les estimations et les dossiers, sans laisser le téléphone devenir un point de blocage. Pour une présentation d'ensemble, lisez [Qu'est-ce que Rushh ?](/ressources/rushh-standard-telephonique-ia-immobilier)."),
        { t: "button", label: "Tester le standard", href: "/demonstrations" },
        p("[Découvrir l'offre sur mesure](/offre)"),
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes sur les réceptionnistes IA immobilières",
      blocks: [
        h3("Une réceptionniste IA peut-elle répondre au téléphone à la place d'une agence immobilière ?"),
        p("Oui. Elle peut décrocher les appels entrants au nom de l'agence, comprendre le motif de la demande, répondre à partir des informations autorisées et organiser la suite selon les consignes définies."),
        h3("Une réceptionniste IA peut-elle reconnaître une annonce immobilière ?"),
        p("Oui, si les données nécessaires sont accessibles et suffisamment à jour. Elle peut s'appuyer sur le logiciel immobilier, le site de l'agence, un flux autorisé ou une base de connaissances. Si l'annonce n'est pas identifiable, elle doit demander une précision ou transmettre la demande."),
        h3("Peut-elle prendre un rendez-vous de visite ou d'estimation ?"),
        p("Oui, lorsque l'agenda est connecté et que les règles autorisent la réservation. Elle peut également transmettre une demande de rendez-vous à confirmer par un collaborateur."),
        h3("Peut-elle envoyer des SMS, des e-mails ou des messages WhatsApp ?"),
        p("Oui, selon les scénarios et les connexions configurés. Rushh prend notamment en charge les SMS et e-mails liés aux appels, ainsi que des workflows plus avancés, y compris via WhatsApp lorsque les conditions techniques le permettent."),
        h3("Une réceptionniste IA est-elle adaptée à un réseau de plusieurs agences ?"),
        p("Oui, si la configuration distingue les agences, les collaborateurs, les secteurs et les règles de transfert ou de rendez-vous. Le périmètre dépend de l'organisation et des intégrations du réseau."),
        h3("Faut-il changer de numéro pour utiliser Rushh ?"),
        p("Non, Rushh peut fonctionner avec le numéro existant de l'agence grâce à un renvoi d'appel adapté à son organisation."),
        h3("Combien coûte une réceptionniste IA pour agence immobilière ?"),
        p("Le coût dépend notamment du volume d'appels, des parcours à traiter, des intégrations et du niveau d'accompagnement. Chez Rushh, la tarification est **sur devis**, avec une prestation conçue et suivie pour chaque client."),
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Écoutez Rushh décrocher", text: "", links: [] },
};
