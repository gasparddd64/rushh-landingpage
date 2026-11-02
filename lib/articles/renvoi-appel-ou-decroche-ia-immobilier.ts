import type { Article } from "./types";

const CONSULTED = "Consulté le 31 octobre 2026.";

export const renvoiOuDecroche: Article = {
  path: "/ressources/renvoi-appel-ou-decroche-ia-immobilier",
  category: "guides",
  cover: {
    src: "/ressources/renvoi-appel-ou-decroche-ia-immobilier.png",
    width: 1600,
    height: 840,
    alt: "Un appel entrant suit deux chemins possibles : par renvoi, il sonne d'abord chez l'agence puis passe au standard en cas d'occupation ou de non-réponse ; en décrochage direct, le standard répond d'emblée. Le choix dépend de qui doit décrocher en premier.",
  },
  title: "Renvoi d'appel ou décrochage IA : que choisir en agence ? | Rushh",
  description:
    "Renvoi sur occupation, sur non-réponse ou décrochage direct par un standard IA : un arbre de décision selon vos horaires, visites et pics d'appels.",
  shortTitle: "Renvoi d'appel ou décrochage direct par IA ?",
  summary: "Un arbre de décision pour choisir qui décroche en premier : l'équipe avec renvoi, ou le standard d'emblée.",
  h1: "Renvoi d'appel ou décrochage direct par IA : comment choisir pour une agence immobilière ?",
  answer:
    "Le renvoi d'appel fait sonner l'agence d'abord et ne confie l'appel au standard qu'en cas d'occupation, de non-réponse ou d'injoignabilité. Le décrochage direct fait répondre le standard dès la première sonnerie. Choisissez le renvoi si quelqu'un doit pouvoir décrocher en priorité aux heures d'ouverture ; choisissez le décrochage direct pour les horaires où personne ne décroche, pour un numéro dédié ou pour des pics d'appels. Les deux sont possibles avec le Standard Rushh, et on les combine souvent.",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  sections: [
    {
      id: "deux-modes",
      h2: "Deux modes, une seule différence : qui décroche en premier",
      blocks: [
        {
          t: "p",
          text: "Avec un renvoi d'appel, le téléphone de l'agence sonne d'abord. Si personne ne répond, si la ligne est occupée ou si l'appareil est injoignable, l'opérateur envoie l'appel vers un autre numéro, celui du standard. Avec un décrochage direct, le numéro de l'agence ou un numéro dédié mène immédiatement au standard, sans passer par un téléphone qui sonne.",
        },
        {
          t: "p",
          text: "Le choix est donc d'abord organisationnel : voulez-vous qu'une personne ait la priorité pour décrocher, ou préférez-vous que chaque appel reçoive la même prise en charge dès la première seconde ? Ce guide aide à trancher. Il ne remplace pas le guide sur l'[organisation de la permanence téléphonique](/ressources/permanence-telephonique-agence-immobiliere), qui traite des motifs d'appel et des règles de transmission.",
        },
        {
          t: "callout",
          kind: "fact",
          text: `Les opérateurs décrivent plusieurs types de renvoi : inconditionnel, sur occupation, sur non-réponse et sur injoignabilité (exemple : l'assistance de Free Mobile). Les noms, les options et la façon de les activer dépendent de l'opérateur et du contrat. ${CONSULTED}`,
        },
      ],
    },
    {
      id: "arbre",
      h2: "L'arbre de décision en cinq questions",
      blocks: [
        {
          t: "ol",
          items: [
            "**Quelqu'un décroche-t-il en priorité pendant les heures d'ouverture ?** Si oui, le renvoi sur non-réponse ou sur occupation conserve cette priorité. Si non, passez à la question 2.",
            "**L'agence veut-elle garder son numéro actuel sur tous les téléphones ?** Si oui, privilégiez un renvoi conditionnel. Si le numéro peut mener directement au standard, le décrochage direct est possible.",
            "**Les appels hors horaires doivent-ils être pris en charge ?** Si oui, prévoyez un décrochage direct ou un renvoi inconditionnel pour ces plages.",
            "**Vos pics d'appels dépassent-ils ce que l'équipe peut prendre ?** Si oui, le renvoi sur occupation évite de perdre l'appel qui arrive pendant un autre.",
            "**Souhaitez-vous un numéro dédié (annonce, panneau, site) ?** Si oui, un décrochage direct sur ce numéro est le plus simple, sans toucher à la ligne de l'agence.",
          ],
        },
        {
          t: "table",
          caption: "Quel mode selon la situation de l'agence",
          head: ["Situation", "Mode conseillé", "Réglage à demander", "Point de vigilance"],
          rows: [
            ["Agent en visite ou déjà au téléphone", "Renvoi sur occupation", "Renvoi conditionnel vers le numéro du standard", "Vérifier que l'occupation est bien détectée par votre ligne"],
            ["Agence ouverte mais personne ne décroche", "Renvoi sur non-réponse", "Délai de sonnerie court mais suffisant pour décrocher", "Un délai trop court coupe l'appel avant que l'équipe ait pu répondre"],
            ["Soir, nuit, week-end, jours fériés", "Décrochage direct ou renvoi inconditionnel", "Plage horaire activée par l'opérateur ou par le standard", "Penser à désactiver le renvoi à la réouverture"],
            ["Numéro affiché sur une annonce ou un panneau", "Décrochage direct", "Numéro dédié mené au standard", "Prévoir ce que l'appelant entend et la suite donnée"],
            ["Agence dont personne n'est disponible de façon stable (mandataire seul)", "Décrochage direct, avec renvoi si besoin", "Numéro menant au standard, transmission immédiate", "Définir les motifs qui justifient d'interrompre l'agent"],
            ["Congés, fermeture exceptionnelle", "Renvoi inconditionnel temporaire", "Activation et désactivation planifiées", "Un renvoi oublié détourne tous les appels"],
          ],
          note: "Tableau de repères à adapter. Les options exactes de renvoi dépendent de l'opérateur et du contrat ; Rushh n'en présume aucune.",
        },
      ],
    },
    {
      id: "renvoi",
      h2: "Le renvoi : ce qu'il faut régler",
      blocks: [
        {
          t: "p",
          text: "Un renvoi se compose de deux choix : à quelle condition l'appel part (occupation, non-réponse, injoignabilité ou toujours) et vers quel numéro. Pour la non-réponse, le délai de sonnerie compte. Un fournisseur de standards cite par exemple un renvoi après trois à quatre sonneries, pour laisser une chance à l'équipe de répondre.",
        },
        {
          t: "ul",
          items: [
            "**Occupation** : l'appel part si la ligne est déjà utilisée. Utile pendant une autre conversation.",
            "**Non-réponse** : l'appel part après un délai si personne ne décroche. Utile pendant une visite.",
            "**Injoignabilité** : l'appel part si le téléphone est éteint ou hors réseau.",
            "**Inconditionnel** : tous les appels partent. Utile le soir, le week-end ou en congés.",
          ],
        },
        {
          t: "callout",
          kind: "reco",
          text: "Avant de modifier un renvoi, vérifiez l'état actuel auprès de votre opérateur : certains réglages se font par code, d'autres depuis l'espace client, et les codes diffèrent d'un opérateur à l'autre.",
        },
      ],
    },
    {
      id: "direct",
      h2: "Le décrochage direct : quand il est préférable",
      blocks: [
        {
          t: "p",
          text: "Le décrochage direct convient quand personne ne doit décrocher en priorité : un numéro dédié à une annonce, des horaires où l'agence est fermée, un mandataire qui passe ses journées en rendez-vous. Il fait recevoir à chaque appel la même prise en charge dès le début, au lieu de dépendre de la disponibilité du moment.",
        },
        {
          t: "p",
          text: "Il a un revers : tous les appelants, y compris ceux qui préféreraient parler à une personne, passent d'abord par le standard. La solution est de prévoir, dans le scénario, une demande de rappel ou un transfert clair vers un humain pour les situations qui l'exigent. Le guide sur l'[arbre de qualification des appels](/ressources/qualification-appels-vendeurs-acquereurs) détaille ce point.",
        },
      ],
    },
    {
      id: "pieges",
      h2: "Les pièges à éviter",
      blocks: [
        {
          t: "ul",
          items: [
            "**La boucle de renvoi** : un numéro qui renvoie vers un numéro qui renvoie vers le premier. Testez chaque enchaînement.",
            "**Le délai de sonnerie mal choisi** : trop court, l'équipe n'a pas le temps de décrocher ; trop long, l'appelant raccroche.",
            "**Le renvoi oublié** : un renvoi inconditionnel laissé actif après les congés détourne les appels aux heures d'ouverture.",
            "**L'appelant déconcerté** : il doit savoir tout de suite à qui il parle et ce qui se passe ensuite.",
            "**Le test unique** : un essai réussi ne prouve pas que tous les cas fonctionnent ; testez occupation, non-réponse, hors horaires.",
          ],
        },
        {
          t: "checklist",
          items: [
            "Chaque mode est testé en appelant l'agence depuis un autre numéro",
            "Le délai de sonnerie est validé avec l'équipe",
            "Les plages horaires de renvoi sont écrites et connues",
            "Une personne est responsable d'activer et de désactiver les renvois temporaires",
            "L'appelant sait comment demander un humain",
          ],
        },
      ],
    },
    {
      id: "faq",
      h2: "Questions fréquentes",
      blocks: [
        { t: "h3", text: "Faut-il changer le numéro de l'agence ?" },
        {
          t: "p",
          text: "Pas nécessairement : un renvoi conditionnel permet de garder le numéro actuel. Selon l'opérateur et la configuration retenue, le numéro peut aussi mener directement au standard.",
        },
        { t: "h3", text: "Peut-on combiner renvoi et décrochage direct ?" },
        {
          t: "p",
          text: "Oui, et c'est fréquent : un renvoi sur occupation ou non-réponse en journée, un décrochage direct hors horaires. Les plages doivent être écrites et testées.",
        },
        { t: "h3", text: "Que voit l'agence quand l'appel est renvoyé ?" },
        {
          t: "p",
          text: "Cela dépend de l'opérateur et de la configuration : le numéro de l'appelant n'est pas toujours transmis de la même façon. Faites-le vérifier lors des tests.",
        },
        { t: "h3", text: "Quel est le meilleur mode ?" },
        {
          t: "p",
          text: "Il n'y en a pas de meilleur dans l'absolu : tout dépend de qui doit décrocher en premier. Le renvoi préserve la priorité de l'équipe ; le décrochage direct uniformise la prise en charge.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Free Mobile : le renvoi d'appel",
      url: "https://assistance.free.fr/articles/1755",
      usedFor: `Types de renvoi décrits par un opérateur : inconditionnel, sur occupation, sur non-réponse, sur injoignabilité. La page ne mentionne pas de délai de sonnerie. ${CONSULTED}`,
    },
    {
      label: "Tala : standard téléphonique immobilier",
      url: "https://www.tala-assistant.com/blog/standard-telephonique-immobilier",
      usedFor: `Exemple de mise en place par renvoi conditionnel avec un délai de trois à quatre sonneries. Article publié le 23 avril 2026 et mis à jour le 20 juillet 2026. Aucun tarif n'est repris. ${CONSULTED}`,
    },
    {
      label: "Rushh : l'offre",
      url: "https://www.rushh.fr/offre",
      usedFor: "Périmètre de la prestation gérée et tarification sur devis.",
    },
  ],
  sourcesNote:
    "Ce guide propose une méthode de décision, pas un résultat mesuré. Les options de renvoi décrites sont celles de l'exemple cité : elles varient selon l'opérateur et le contrat, et Rushh n'en présume aucune. Les situations du tableau sont des modèles à adapter. Rushh édite cette page et en est partie prenante.",
  rushh: {
    title: "Le renvoi ou le décrochage direct, réglé et testé avec vous",
    text: "Le Standard Rushh, conçu, configuré, testé, déployé et suivi par l'équipe Rushh, fonctionne derrière un renvoi comme en réponse directe. Vous nous indiquez qui doit décrocher en premier et à quelles heures : l'équipe écrit le scénario, accompagne le réglage côté opérateur et teste chaque enchaînement avant la mise en service.",
    points: [
      "Un standard pensé pour l'immobilier : visites, estimations, gestion locative, syndic",
      "Le mode choisi avec vous, renvoi, décrochage direct ou les deux selon les plages horaires",
      "Une prestation 100 % prise en charge : vous validez les règles, Rushh s'occupe du reste",
      "Des scénarios personnalisés, avec une demande de rappel ou un transfert vers un humain lorsque c'est prévu",
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
      text: "Les motifs d'appel et les règles de transmission.",
    },
    {
      href: "/ressources/appels-agence-immobiliere-soir-week-end",
      label: "Répondre aux appels le soir et le week-end",
      text: "Une matrice horaire pour la prise en charge hors horaires.",
    },
    {
      href: "/ressources/choisir-standard-telephonique-ia-immobilier",
      label: "Choisir un standard téléphonique IA",
      text: "Les questions à poser et les scénarios à tester.",
    },
  ],
  cta: {
    title: "Écoutez le standard décrocher, puis choisissez votre mode",
    text: "Appelez la ligne de démonstration, une agence fictive à Paris, pour entendre un décrochage direct. Réservez ensuite une démonstration adaptée à votre agence : nous regardons avec vous le renvoi, le décrochage direct, ou les deux. Tarification sur devis.",
    links: [
      { href: "/demonstrations", label: "Ligne de démonstration" },
      { href: "/offre", label: "L'offre Rushh" },
    ],
  },
};
