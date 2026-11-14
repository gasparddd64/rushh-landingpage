import type { Article, Block } from "./types";

const p = (text: string): Block => ({ t: "p", text });
const h3 = (text: string): Block => ({ t: "h3", text });
/** Message à enregistrer : modèle rédactionnel, jamais un appel réel (étiquette « Exemple fictif »). */
const script = (text: string): Block => ({ t: "callout", kind: "example", text });

/** Texte validé : à reproduire tel quel, sans reformulation (voir `bare` dans types.ts). */
export const messagesRepondeur: Article = {
  path: "/ressources/messages-repondeur-agence-immobiliere",
  bare: true,
  category: "guides",
  cover: {
    src: "/ressources/messages-repondeur-agence-immobiliere.png",
    width: 1600,
    height: 840,
    alt: "Illustration : dix messages de répondeur pour agence immobilière, à adapter selon la situation : agence fermée, visites, location, gestion locative, syndic et mandataire.",
  },
  title: "Répondeur agence immobilière : 10 messages types | Rushh",
  description:
    "10 exemples de messages de répondeur pour agence immobilière : fermeture, visites, location, gestion locative, syndic et mandataire. Modèles à adapter.",
  shortTitle: "10 messages de répondeur pour agence immobilière",
  summary: "Dix modèles prêts à adapter : fermeture, visites, location, gestion locative, syndic et mandataire.",
  h1: "Message de répondeur pour agence immobilière : 10 exemples prêts à utiliser",
  answer:
    "Le message de répondeur le plus efficace est court : il identifie l'agence, explique pourquoi elle ne répond pas et indique exactement ce que l'appelant peut faire ensuite.",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  intro: [
    p("**Quel message laisser sur le répondeur d'une agence immobilière ?** Le plus efficace est un message court qui identifie l'agence, explique pourquoi elle ne répond pas et indique exactement ce que l'appelant peut faire ensuite. Il ne faut promettre ni rappel rapide ni prise en charge urgente si personne n'est organisé pour l'assurer."),
    p("Voici dix modèles à adapter à votre activité, vos horaires et vos procédures. Les textes entre crochets sont des éléments à remplacer avant mise en service."),
  ],
  sections: [
    {
      id: "modeles",
      h2: "10 messages de répondeur à adapter",
      blocks: [
        h3("1. Répondeur classique : agence fermée"),
        script("« Bonjour, vous êtes bien à l'agence [Nom de l'agence]. Nous sommes actuellement fermés. Vous pouvez laisser votre nom, votre numéro et l'objet de votre appel après le signal sonore. Nous prendrons connaissance de votre message à notre retour. À bientôt. »"),
        p("**À utiliser quand :** l'agence dispose d'une messagerie consultée à la réouverture."),
        p("**À vérifier :** qui écoute les messages et qui traite les demandes. Si personne ne consulte régulièrement la messagerie, ne laissez pas entendre qu'un suivi est assuré."),

        h3("2. Tous les négociateurs sont en rendez-vous ou en visite"),
        script("« Bonjour, vous êtes bien à l'agence [Nom]. Notre équipe est actuellement en rendez-vous ou en visite. Laissez-nous votre nom, votre numéro et le motif de votre appel. Nous pourrons ainsi identifier votre demande dès que nous serons de nouveau disponibles. »"),
        p("**À utiliser quand :** les appels arrivent sur une ligne commune et que les collaborateurs sont souvent sur le terrain."),
        p("**À éviter :** « Nous vous rappelons dans les dix minutes » si ce délai n'est pas réellement tenu."),

        h3("3. Pause de midi"),
        script("« Bonjour, vous êtes bien à l'agence [Nom]. Notre accueil téléphonique est momentanément fermé. Il reprendra à [heure de reprise]. Vous pouvez laisser un message avec vos coordonnées et le motif de votre appel. Merci et à bientôt. »"),
        p("**À utiliser quand :** l'accueil téléphonique ferme à une heure fixe."),
        p("**À vérifier :** l'heure annoncée doit correspondre à la réalité. Si les horaires changent souvent, utilisez le message général plutôt qu'une heure qui risque d'être fausse."),

        h3("4. Soirée et week-end"),
        script("« Bonjour, vous êtes bien à l'agence [Nom]. Notre accueil est fermé pour le moment. Pour une demande de visite, d'estimation ou toute autre question, laissez votre nom, votre numéro et quelques mots sur votre projet. Notre équipe en prendra connaissance à la prochaine ouverture. »"),
        p("**À utiliser quand :** l'agence reçoit des appels de vendeurs et d'acquéreurs hors horaires."),
        p("**À éviter :** dire « disponible 24 h/24 » alors qu'il s'agit seulement d'un enregistrement de messages. Le répondeur peut enregistrer un appel ; il ne répond pas aux questions de l'appelant."),

        h3("5. Congés ou fermeture exceptionnelle"),
        script("« Bonjour, vous êtes bien à l'agence [Nom]. Nous sommes exceptionnellement fermés jusqu'au [date]. Vous pouvez laisser un message avec vos coordonnées et votre demande. Nous en prendrons connaissance à notre retour. Merci de votre compréhension. »"),
        p("**À utiliser quand :** une date de reprise est certaine."),
        p("**À vérifier :** actualisez le message au retour. Si une permanence est réellement assurée pendant la fermeture, indiquez son moyen de contact vérifié ; sinon, ne l'inventez pas."),

        h3("6. Ligne dédiée à la transaction : vendeurs et acquéreurs"),
        script("« Bonjour, vous êtes sur la ligne transaction de l'agence [Nom]. Pour une estimation, une vente ou une visite, laissez votre nom, votre numéro et, si vous appelez pour une annonce, sa référence ou son adresse. L'équipe transaction prendra connaissance de votre demande dès qu'elle sera disponible. »"),
        p("**À utiliser quand :** l'agence possède une ligne ou une messagerie réellement dédiée à la transaction."),
        p("**Conseil pratique :** la référence de l'annonce aide le négociateur à retrouver le bon bien. Ne demandez pas au prospect de raconter tout son financement ou sa situation personnelle dans un message vocal."),

        h3("7. Ligne dédiée à la location"),
        script("« Bonjour, vous êtes bien au service location de l'agence [Nom]. Si vous appelez pour un logement, indiquez votre nom, votre numéro et la référence ou l'adresse de l'annonce. Pour toute autre demande, précisez simplement son objet. Nous consulterons votre message dès que possible. »"),
        p("**À utiliser quand :** les demandes locatives sont traitées par une équipe identifiée."),
        p("**À éviter :** demander un dossier complet, des justificatifs de revenus ou des informations personnelles détaillées sur la messagerie vocale. Le répondeur sert à identifier la demande, pas à instruire une candidature."),

        h3("8. Gestion locative : demandes des bailleurs et locataires"),
        script("« Bonjour, vous êtes bien au service gestion locative de l'agence [Nom]. Laissez votre nom, votre numéro, l'adresse du logement concerné et une courte description de votre demande. Si votre situation présente un danger immédiat, contactez les services d'urgence compétents. Nous prendrons connaissance des autres messages à notre reprise. »"),
        p("**À utiliser quand :** le service gère des demandes courantes de locataires et de propriétaires."),
        p("**À vérifier :** si une astreinte technique existe, ajoutez uniquement le numéro et les horaires réellement opérationnels. Un répondeur ne doit pas être présenté comme un dispositif de traitement des urgences."),

        h3("9. Syndic : copropriétaires et incidents"),
        script("« Bonjour, vous êtes bien au service syndic de [Nom]. Pour une demande courante, laissez votre nom, votre numéro, l'adresse de la copropriété et l'objet de votre appel. Pour une urgence technique concernant les parties communes, utilisez le numéro d'astreinte communiqué par votre syndic, s'il est applicable à votre immeuble. En cas de danger immédiat, contactez les services d'urgence compétents. »"),
        p("**À utiliser quand :** le cabinet gère des copropriétés et dispose de consignes d'urgence clairement communiquées."),
        p("**Point de vigilance :** ne diffusez pas un numéro d'astreinte inexistant ou inadapté. Si un numéro unique vérifié est applicable à tous les immeubles concernés, il peut remplacer la formulation générale. Une fuite d'eau, une panne d'ascenseur et un danger immédiat ne suivent pas nécessairement la même procédure."),

        h3("10. Mandataire immobilier indépendant"),
        script("« Bonjour, vous êtes bien sur la messagerie de [Prénom Nom], conseiller immobilier. Je suis actuellement indisponible. Pour une estimation, une vente ou une visite, laissez votre nom, votre numéro et quelques mots sur votre projet. Je prendrai connaissance de votre message dès que possible. »"),
        p("**À utiliser quand :** le professionnel travaille seul, notamment pendant ses visites ou ses rendez-vous."),
        p("**À éviter :** parler d'« équipe » ou d'« agence » si cela ne correspond pas à votre organisation."),
      ],
    },
    {
      id: "meilleur-message",
      h2: "Quel est le meilleur message de répondeur immobilier ?",
      blocks: [
        p("Il n'existe pas de formule universelle. Pour une agence généraliste, le premier modèle suffit souvent. Pour un service transaction, location ou syndic, un message spécialisé peut faciliter le tri à condition que les appels arrivent réellement sur la bonne ligne."),
        p("Dans tous les cas, un bon message répond à quatre questions :"),
        {
          t: "ol",
          items: [
            "**Qui ai-je appelé ?** Nom de l'agence ou du professionnel.",
            "**Pourquoi personne ne décroche ?** Fermeture ou indisponibilité, sans justification interminable.",
            "**Que dois-je laisser ?** Nom, moyen de rappel et objet de la demande ; référence du bien si utile.",
            "**Que se passera-t-il ensuite ?** Une information exacte, sans promesse de délai non tenue.",
          ],
        },
        p("**Version courte, si vous ne souhaitez enregistrer qu'un seul message :**"),
        script("« Bonjour, vous êtes bien à l'agence [Nom]. Nous ne sommes pas disponibles pour le moment. Laissez votre nom, votre numéro et le motif de votre appel après le bip. Nous prendrons connaissance de votre message dès que possible. »"),
      ],
    },
    {
      id: "erreurs",
      h2: "Cinq erreurs fréquentes dans un répondeur d'agence",
      blocks: [
        h3("1. Un message trop long"),
        p("Un appelant qui cherche seulement à visiter un appartement n'a pas besoin d'écouter une présentation complète de l'agence."),
        h3("2. Une promesse de rappel non tenue"),
        p("« On vous rappelle dans l'heure » crée une attente précise. N'annoncez ce délai que si votre organisation permet de le respecter."),
        h3("3. Des horaires périmés"),
        p("Un message indiquant une reprise à 14 h alors que l'accueil reste fermé jusqu'à 15 h donne une information erronée."),
        h3("4. Aucune indication sur le contenu du message"),
        p("Sans motif ni référence du bien, le négociateur devra parfois rappeler simplement pour comprendre la demande."),
        h3("5. Une confusion entre messagerie et urgence"),
        p("Un répondeur ne surveille pas les incidents en temps réel. Les consignes d'urgence doivent être adaptées à l'activité et aux dispositifs réellement disponibles."),
      ],
    },
    {
      id: "mise-en-place",
      h2: "Comment mettre ces modèles en place dans votre agence ?",
      blocks: [
        p("Commencez par choisir **un message par ligne réellement utilisée**, plutôt que dix messages différents sans logique de routage. Enregistrez-le dans un endroit calme, écoutez-le depuis un téléphone extérieur et vérifiez que le nom de l'agence et les consignes sont intelligibles."),
        p("Ensuite, faites un test concret : laissez un message de vendeur, puis un message d'acquéreur avec référence d'annonce. Vérifiez qui reçoit l'information, où elle est consignée et si une personne est chargée de la traiter. Le contenu du répondeur ne remplace pas cette organisation."),
        p("Si l'équipe reçoit beaucoup d'appels en visite, comparez également les solutions de [permanence téléphonique pour agence immobilière](/ressources/permanence-telephonique-agence-immobiliere). Pour comprendre ce qui change pour l'appelant, consultez notre guide [répondeur ou standard téléphonique IA](/ressources/repondeur-ou-standard-ia-agence-immobiliere)."),
      ],
    },
    {
      id: "faq",
      h2: "FAQ : répondeur d'agence immobilière",
      blocks: [
        h3("Faut-il donner les horaires d'ouverture dans le message ?"),
        p("Seulement s'ils sont fiables et utiles. Si les horaires changent régulièrement, un message sans heure précise évite d'induire l'appelant en erreur."),
        h3("Que demander à un prospect vendeur sur le répondeur ?"),
        p("Son nom, un moyen de rappel, le motif de sa demande et, s'il le souhaite, la commune du bien. Les détails de son projet pourront être recueillis lors d'un échange ultérieur."),
        h3("Peut-on utiliser le même message pour la vente et la location ?"),
        p("Oui, si l'agence a une ligne commune et une personne chargée de répartir les messages. Avec des lignes distinctes, un message dédié aide à recueillir la référence du bien ou le service concerné."),
        h3("Comment gérer les appels urgents en gestion locative ou en syndic ?"),
        p("Définissez une procédure distincte de la messagerie classique : destinataire, horaires, numéro d'astreinte éventuel et types d'incidents couverts. N'indiquez dans le message que les coordonnées et les consignes réellement valides."),
        h3("Un répondeur suffit-il pour ne plus perdre d'appels ?"),
        p("Il permet à un appelant de laisser un message, mais il ne répond pas à ses questions et rien n'assure qu'il laissera ses coordonnées. Pour un traitement plus immédiat, l'agence peut organiser une permanence humaine ou un accueil téléphonique automatisé adapté à son activité."),
      ],
    },
    {
      id: "demonstration",
      h2: "Et si l'appelant pouvait expliquer sa demande sans attendre le bip ?",
      blocks: [
        p("Un répondeur est utile lorsque l'agence ne peut pas décrocher, à condition que les messages soient traités. Une autre approche consiste à confier les appels entrants à un **standard téléphonique alimenté par intelligence artificielle**, capable de dialoguer avec l'appelant, d'identifier sa demande et, selon les règles définies, de proposer un rendez-vous ou de transmettre les informations à l'équipe."),
        p("C'est le service proposé par **Rushh**, spécialisé dans l'immobilier, avec configuration et suivi pris en charge. Vous pouvez [découvrir l'offre Rushh](/offre)."),
        { t: "button", label: "Tester le standard", href: "/demonstrations" },
      ],
    },
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Et si l'appelant pouvait expliquer sa demande sans attendre le bip ?", text: "", links: [] },
};
