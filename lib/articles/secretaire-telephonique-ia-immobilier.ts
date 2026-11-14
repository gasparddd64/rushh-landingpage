import type { Article } from "./types";

/** Texte validé (lot SEO/GEO novembre 2026) : à reproduire tel quel, voir `bare` dans types.ts. */
export const secretaireTelephoniqueIa: Article = {
  "path": "/ressources/secretaire-telephonique-ia-immobilier",
  "bare": true,
  "category": "guides",
  "cover": {
    "src": "/ressources/secretaire-telephonique-ia-immobilier.png",
    "width": 1600,
    "height": 840,
    "alt": "Illustration : ce qu'une secrétaire téléphonique IA peut renseigner, qualifier et réserver dans une agence immobilière, et les appels qu'elle passe à l'équipe."
  },
  "title": "Secrétaire téléphonique IA immobilier : missions et scripts | Rushh",
  "description": "Quels appels confier à une secrétaire téléphonique IA en immobilier ? Missions, exemples de dialogues, règles de transfert et organisation de l'agence.",
  "shortTitle": "Secrétaire téléphonique IA en immobilier",
  "summary": "Quels appels lui confier, lesquels garder : missions, dialogues, consignes et règles de transfert.",
  "h1": "Secrétaire téléphonique IA en immobilier : quels appels lui confier, et lesquels garder ?",
  "answer": "Une secrétaire téléphonique IA pour agence immobilière peut prendre en charge les appels entrants, identifier les demandes, renseigner les appelants à partir d'informations fiables, qualifier les projets vendeurs et acquéreurs, réserver des rendez-vous et transmettre les situations nécessitant un collaborateur. Pour bien l'utiliser, l'agence doit surtout définir trois choses : les appels qu'elle peut traiter seule, les actions qu'elle est autorisée à effectuer et les cas dans lesquels elle doit passer la main.",
  "datePublished": "2026-11-14",
  "dateModified": "2026-11-14",
  "intro": [
    {
      "t": "p",
      "text": "Vous êtes en visite. Le téléphone sonne. Un propriétaire souhaite une estimation, un acquéreur appelle pour une annonce et un prestataire veut joindre le gestionnaire. Vous ne pouvez pas interrompre chaque rendez-vous, mais vous ne voulez pas non plus retrouver trois messages vagues en fin de journée."
    },
    {
      "t": "p",
      "text": "Une **secrétaire téléphonique IA pour agence immobilière** peut prendre en charge cet accueil. Elle répond aux appels entrants, comprend le motif de la demande et suit les consignes de l'agence pour organiser la suite : renseigner, qualifier, prendre un rendez-vous, envoyer une confirmation ou transférer à la bonne personne."
    },
    {
      "t": "p",
      "text": "Mais **tout ne doit pas être automatisé de la même manière**. Une demande de visite ne se traite pas comme un litige locatif, une urgence de copropriété ou une négociation de mandat. La qualité du secrétariat dépend donc moins du nombre de phrases que l'IA sait prononcer que des **décisions qu'elle est autorisée à prendre**."
    },
    {
      "t": "p",
      "text": "Voici comment répartir les appels et construire un accueil téléphonique utile, sans transformer votre agence en centre d'appels."
    }
  ],
  "sections": [
    {
      "id": "qu-entend-on-par-secretaire-telephonique-ia",
      "h2": "Qu'entend-on par « secrétaire téléphonique IA » ?",
      "blocks": [
        {
          "t": "p",
          "text": "Le terme désigne un **standard téléphonique alimenté par intelligence artificielle** qui assure des tâches de secrétariat liées aux conversations téléphoniques. Contrairement à un répondeur, il peut dialoguer avec l'appelant, demander une précision et déclencher une action prévue dans son fonctionnement."
        },
        {
          "t": "p",
          "text": "Il faut distinguer trois rôles :"
        },
        {
          "t": "ul",
          "items": [
            "**Secrétaire téléphonique IA :** réception des appels entrants, compréhension des demandes, renseignements autorisés, rendez-vous, messages et orientation.",
            "**Secrétaire ou assistante administrative :** ensemble plus large de tâches humaines, comme la gestion de documents, le suivi administratif et certaines relations avec les clients ou partenaires.",
            "**Négociateur, gestionnaire ou syndic :** décisions métier, conseils individualisés, arbitrages, négociations et traitement des situations sensibles."
          ]
        },
        {
          "t": "p",
          "text": "Une IA peut automatiser des actions administratives supplémentaires lorsqu'elles sont techniquement réalisables et autorisées. Cela ne signifie pas qu'elle doit se substituer à un professionnel pour une décision engageante."
        },
        {
          "t": "p",
          "text": "Si vous cherchez d'abord une présentation générale du fonctionnement, consultez notre article sur la [réceptionniste IA pour agence immobilière](/ressources/receptionniste-ia-agence-immobiliere). Ici, nous nous concentrons sur **l'organisation concrète des appels**."
        }
      ]
    },
    {
      "id": "quels-appels-confier-a-une-secretaire-telephonique-ia",
      "h2": "Quels appels confier à une secrétaire téléphonique IA ?",
      "blocks": [
        {
          "t": "p",
          "text": "La bonne question n'est pas « Peut-elle répondre à tout ? », mais « Quelle suite doit-elle donner à chaque motif d'appel ? »."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Motif de l'appel entrant",
            "Ce que l'IA peut prendre en charge",
            "Quand l'humain reprend la main"
          ],
          "rows": [
            [
              "**Demande d'estimation**",
              "Identifier le projet vendeur, le bien et le secteur ; proposer un rendez-vous selon l'agenda.",
              "Estimation chiffrée non prévue, conseil commercial particulier, négociation de mandat."
            ],
            [
              "**Demande de visite**",
              "Identifier l'annonce, vérifier les informations accessibles, qualifier l'intérêt et proposer un créneau.",
              "Disponibilité incertaine, demande atypique, décision commerciale."
            ],
            [
              "**Question sur une annonce**",
              "Répondre à partir des informations du logiciel, du site ou d'un flux autorisé.",
              "Information absente, contradictoire ou nécessitant une confirmation."
            ],
            [
              "**Recherche locative**",
              "Recueillir les critères, le bien concerné et les disponibilités ; orienter vers la procédure prévue.",
              "Décision sur un dossier, appréciation de solvabilité, exception."
            ],
            [
              "**Demande de bailleur**",
              "Identifier le logement, le motif et le gestionnaire ; transmettre un compte rendu.",
              "Arbitrage contractuel, réclamation sensible, engagement financier."
            ],
            [
              "**Problème signalé par un locataire**",
              "Recueillir les faits, la localisation et le degré d'urgence déclaré ; alerter selon les règles.",
              "Urgence, sécurité, décision d'intervention ou situation conflictuelle."
            ],
            [
              "**Appel de copropriétaire ou de prestataire**",
              "Identifier la copropriété et la demande ; notifier ou transférer.",
              "Sinistre, décision de syndic, arbitrage technique ou juridique."
            ],
            [
              "**Prospection téléphonique non sollicitée**",
              "Identifier le caractère commercial et appliquer une règle de filtrage.",
              "Un interlocuteur que l'agence souhaite recevoir malgré le filtre."
            ],
            [
              "**Appel pour un collaborateur précis**",
              "Vérifier l'objet, transmettre ou transférer selon sa disponibilité.",
              "Demande confidentielle ou nécessitant une réponse personnelle."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Cette grille est un **exemple de configuration**, pas une liste universelle. Une agence de transaction, un cabinet de gestion locative et un syndic n'ont ni les mêmes priorités ni les mêmes procédures."
        },
        {
          "t": "p",
          "text": "Le principe : automatiser les demandes **prévisibles et suffisamment documentées**, puis organiser une reprise humaine claire pour les autres."
        }
      ]
    },
    {
      "id": "cinq-exemples-de-dialogues-utiles-en-agence-immobiliere",
      "h2": "Cinq exemples de dialogues utiles en agence immobilière",
      "blocks": [
        {
          "t": "p",
          "text": "Les dialogues suivants sont **des exemples de scripts**, pas des transcriptions de véritables appels clients. Ils illustrent la façon de poser une question courte à la fois, d'éviter les informations inutiles et de préparer la prochaine action."
        },
        {
          "t": "h3",
          "text": "1. Un propriétaire veut vendre son appartement"
        },
        {
          "t": "ul",
          "items": [
            "**Appelant :** « Bonjour, je voudrais faire estimer mon appartement. »",
            "**Standard :** « Je vous écoute. Dans quelle commune se trouve votre appartement ? »",
            "**Appelant :** « À Bordeaux, dans le quartier des Chartrons. »",
            "**Standard :** « D'accord. C'est un appartement de combien de pièces ? »",
            "**Appelant :** « Trois pièces. »",
            "**Standard :** « Vous souhaitez vendre prochainement ou vous renseigner pour le moment ? »"
          ]
        },
        {
          "t": "p",
          "text": "Le standard recueille uniquement les éléments nécessaires au parcours prévu. S'il dispose de l'agenda et des règles de réservation, il peut proposer un rendez-vous d'estimation. Sinon, il transmet une demande structurée au négociateur."
        },
        {
          "t": "p",
          "text": "**À ne pas faire :** annoncer une valeur de marché sans données fiables ni consigne explicite. L'objectif de l'appel est d'obtenir une **demande vendeur exploitable**, pas de remplacer le travail d'estimation."
        },
        {
          "t": "p",
          "text": "Pour aller plus loin : [comment traiter un appel vendeur pour une estimation](/ressources/appel-vendeur-estimation-immobiliere)."
        },
        {
          "t": "h3",
          "text": "2. Un acquéreur appelle à propos d'un bien"
        },
        {
          "t": "ul",
          "items": [
            "**Appelant :** « Bonjour, je vous appelle pour le T2 que j'ai vu sur votre site. »",
            "**Standard :** « Vous pouvez me préciser l'annonce ou la rue du bien ? »",
            "**Appelant :** « Rue Judaïque. »",
            "**Standard :** « Je vérifie les informations dont je dispose. Vous souhaitez organiser une visite ? »"
          ]
        },
        {
          "t": "p",
          "text": "Si plusieurs annonces correspondent, l'IA demande une précision. Si elle peut identifier le bien et consulter les disponibilités, elle organise la suite selon les règles de l'agence."
        },
        {
          "t": "p",
          "text": "**À ne pas faire :** confirmer que le bien est disponible, annoncer une surface ou promettre une visite si les données accessibles ne le permettent pas. Une réponse prudente vaut mieux qu'une certitude inventée."
        },
        {
          "t": "h3",
          "text": "3. Un candidat locataire souhaite visiter"
        },
        {
          "t": "ul",
          "items": [
            "**Appelant :** « Bonjour, je voudrais visiter le studio de Mérignac. »",
            "**Standard :** « Vous avez la référence de l'annonce ? »",
            "**Appelant :** « Oui, M214. »",
            "**Standard :** « Merci. Vous souhaitez une visite plutôt en semaine ou le samedi ? »"
          ]
        },
        {
          "t": "p",
          "text": "La suite dépend des procédures de location : réservation directe, créneau collectif, formulaire de candidature ou transmission à la personne chargée du bien. Une secrétaire téléphonique IA peut expliquer la marche à suivre et envoyer les informations prévues par SMS ou e-mail."
        },
        {
          "t": "p",
          "text": "**À ne pas faire :** promettre l'acceptation d'un dossier ou inventer une règle de sélection."
        },
        {
          "t": "h3",
          "text": "4. Un locataire signale une fuite"
        },
        {
          "t": "ul",
          "items": [
            "**Appelant :** « J'ai une fuite dans la salle de bains et personne ne répond. »",
            "**Standard :** « Je vais transmettre votre signalement. Quelle est l'adresse du logement concerné ? »",
            "**Appelant :** « 18 rue des Lilas, appartement 4. »",
            "**Standard :** « L'eau coule-t-elle encore actuellement ? »"
          ]
        },
        {
          "t": "p",
          "text": "Selon les consignes du gestionnaire, l'IA peut recueillir le signalement, le qualifier comme prioritaire, notifier le bon interlocuteur ou transférer l'appel. Pour une situation présentant un danger immédiat, les procédures de sécurité prévues par l'agence doivent primer."
        },
        {
          "t": "p",
          "text": "**À ne pas faire :** diagnostiquer la panne, garantir l'intervention d'un artisan ou considérer qu'une notification automatique remplace une prise en charge urgente."
        },
        {
          "t": "h3",
          "text": "5. Un copropriétaire appelle son syndic"
        },
        {
          "t": "ul",
          "items": [
            "**Appelant :** « Bonjour, je veux parler au syndic pour un problème dans les parties communes. »",
            "**Standard :** « Je vous écoute. De quelle copropriété s'agit-il ? »",
            "**Appelant :** « Résidence des Tilleuls. »",
            "**Standard :** « Quel problème souhaitez-vous signaler ? »"
          ]
        },
        {
          "t": "p",
          "text": "Une fois la demande identifiée, le standard applique la procédure prévue : message au gestionnaire, notification prioritaire ou transfert. Une demande d'information ordinaire et un sinistre déclaré ne doivent pas suivre le même circuit."
        },
        {
          "t": "p",
          "text": "**À ne pas faire :** prendre une décision de copropriété, donner une réponse juridique improvisée ou minimiser une situation urgente."
        }
      ]
    },
    {
      "id": "comment-donner-de-bonnes-consignes-a-une-secretaire-telephon",
      "h2": "Comment donner de bonnes consignes à une secrétaire téléphonique IA ?",
      "blocks": [
        {
          "t": "p",
          "text": "Un script efficace ne consiste pas à écrire vingt pages de phrases que l'IA devrait réciter. Il faut surtout définir **ce qu'elle cherche à comprendre et ce qu'elle peut faire ensuite**."
        },
        {
          "t": "p",
          "text": "Pour chaque motif d'appel, préparez une fiche simple :"
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Élément à définir",
            "Exemple pour une demande d'estimation"
          ],
          "rows": [
            [
              "**Intention à reconnaître**",
              "Un propriétaire souhaite connaître la valeur de son bien ou envisage de vendre."
            ],
            [
              "**Informations indispensables**",
              "Commune, type de bien, projet, nom si nécessaire et non déjà connu."
            ],
            [
              "**Informations déjà disponibles**",
              "Numéro de l'appelant, fiche contact, historique accessible selon les droits."
            ],
            [
              "**Action autorisée**",
              "Proposer un rendez-vous sur l'agenda du négociateur concerné."
            ],
            [
              "**Règle d'attribution**",
              "Secteur géographique ou responsable du dossier."
            ],
            [
              "**Si la réservation échoue**",
              "Transmettre une demande complète au bon collaborateur."
            ],
            [
              "**Quand transférer**",
              "Question sensible, exception, demande expresse de parler à un humain selon la politique de l'agence."
            ],
            [
              "**Confirmation**",
              "SMS ou e-mail avec les détails autorisés du rendez-vous."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Trois principes améliorent immédiatement l'expérience :"
        },
        {
          "t": "ol",
          "items": [
            "**Une question utile à la fois.** Si l'appelant a déjà indiqué la commune et le type de bien, inutile de lui redemander.",
            "**Ne pas réclamer ce que le système connaît déjà.** Si le numéro est identifié et peut être utilisé, on évite de le faire répéter. Il faut néanmoins gérer les numéros masqués ou incorrects.",
            "**Prévoir une issue à chaque parcours.** Rendez-vous confirmé, transfert, notification ou message structuré : l'appel ne doit pas se terminer sur une promesse floue."
          ]
        },
        {
          "t": "p",
          "text": "Le langage doit rester naturel. L'appelant ne devrait pas avoir l'impression de remplir un formulaire oral. Les formulations sont à tester sur des conversations réelles ou simulées, avec les noms de rues, les références d'annonces et le vocabulaire propre à l'agence."
        }
      ]
    },
    {
      "id": "quand-faut-il-transferer-l-appel-a-un-collaborateur",
      "h2": "Quand faut-il transférer l'appel à un collaborateur ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une bonne secrétaire téléphonique IA n'essaie pas de tout résoudre. Elle sait reconnaître ses limites."
        },
        {
          "t": "p",
          "text": "Le transfert ou l'alerte humaine est particulièrement pertinent lorsque :"
        },
        {
          "t": "ul",
          "items": [
            "**La situation est urgente ou potentiellement dangereuse :** fuite importante, problème de sécurité, sinistre ou autre cas défini par l'agence.",
            "**La réponse engage l'agence :** négociation, arbitrage financier, décision sur un dossier, engagement contractuel ou question juridique individualisée.",
            "**Les informations sont insuffisantes :** annonce introuvable, données contradictoires, rendez-vous impossible à confirmer.",
            "**La conversation devient sensible :** conflit, réclamation sérieuse, détresse ou incompréhension répétée.",
            "**L'appelant doit parler à une personne :** selon les règles de l'agence et les collaborateurs disponibles."
          ]
        },
        {
          "t": "p",
          "text": "Le transfert ne signifie pas nécessairement interrompre n'importe qui à n'importe quel moment. L'agence peut prévoir un **collaborateur de permanence**, des horaires, des règles par service et une notification si le transfert n'aboutit pas."
        },
        {
          "t": "p",
          "text": "L'essentiel est que l'IA ne dise jamais « votre rendez-vous est confirmé » lorsque l'agenda n'a pas réellement enregistré le créneau, ni « un gestionnaire vous rappelle immédiatement » si aucun rappel n'a été organisé."
        }
      ]
    },
    {
      "id": "comment-la-secretaire-ia-retrouve-t-elle-les-bonnes-informat",
      "h2": "Comment la secrétaire IA retrouve-t-elle les bonnes informations ?",
      "blocks": [
        {
          "t": "p",
          "text": "Pour traiter une demande immobilière, le standard doit disposer de données fiables. Selon le projet, il peut s'appuyer sur :"
        },
        {
          "t": "ul",
          "items": [
            "Le **logiciel immobilier ou CRM**, via une API et les autorisations nécessaires.",
            "Le **site internet de l'agence** et ses annonces publiées.",
            "Des **flux d'annonces ou portails** accessibles dans un cadre autorisé.",
            "Une **base de connaissances** contenant les procédures, secteurs, horaires et réponses validées.",
            "Les **agendas des collaborateurs** et les règles de réservation."
          ]
        },
        {
          "t": "p",
          "text": "Rushh dispose notamment de connexions opérationnelles à **Apimo et WHISE**, ainsi que de connexions aux agendas **Google Calendar et Outlook**. D'autres connexions peuvent être réalisées lorsque les interfaces, les accès et les conditions techniques le permettent. Il ne faut pas présumer qu'un logiciel sans API accessible pourra être connecté de la même manière."
        },
        {
          "t": "p",
          "text": "Pour les agences multi-sites, les règles peuvent distinguer les équipes, les secteurs, les biens et les numéros d'accueil. Le standard doit transmettre chaque demande à la bonne entité, sans mélanger les informations entre agences."
        },
        {
          "t": "p",
          "text": "Découvrez les [intégrations et connexions possibles](/integrations)."
        }
      ]
    },
    {
      "id": "que-se-passe-t-il-apres-l-appel",
      "h2": "Que se passe-t-il après l'appel ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une secrétaire téléphonique IA ne doit pas se limiter à « prendre un message ». Le suivi fait partie de la prestation."
        },
        {
          "t": "p",
          "text": "Selon le scénario configuré, la suite peut comprendre :"
        },
        {
          "t": "ul",
          "items": [
            "L'enregistrement d'un **rendez-vous de visite ou d'estimation**, avec le bon collaborateur.",
            "L'envoi d'un **SMS de confirmation**, d'un rappel ou d'un e-mail récapitulatif.",
            "La transmission d'un **compte rendu structuré** au négociateur, gestionnaire ou syndic.",
            "La mise à jour d'un **CRM ou logiciel immobilier** via une connexion autorisée.",
            "Le traitement d'une **réponse SMS** ou un échange **WhatsApp** lorsque le parcours est prévu et techniquement accessible.",
            "Une **notification prioritaire** si le dossier nécessite une intervention humaine."
          ]
        },
        {
          "t": "p",
          "text": "Le point à vérifier n'est pas seulement « Est-ce que l'IA sait envoyer un SMS ? ». C'est « Le bon message part-il au bon destinataire, avec une information exacte, après la bonne action ? »."
        },
        {
          "t": "p",
          "text": "Les automatismes peuvent fonctionner en plusieurs langues. Rushh prend en charge le **français, l'anglais et l'espagnol**, ainsi que d'autres langues selon les besoins et les tests de configuration. Les formulations immobilières doivent être vérifiées pour chaque langue utilisée."
        }
      ]
    },
    {
      "id": "une-secretaire-telephonique-ia-remplace-t-elle-une-secretair",
      "h2": "Une secrétaire téléphonique IA remplace-t-elle une secrétaire humaine ?",
      "blocks": [
        {
          "t": "p",
          "text": "**Elle peut remplacer une partie du travail de réception téléphonique, pas l'ensemble des responsabilités d'une assistante humaine.**"
        },
        {
          "t": "p",
          "text": "Pour une agence qui cherche avant tout à répondre aux appels entrants, qualifier les demandes et organiser les rendez-vous, l'IA peut prendre en charge une part importante des tâches répétitives. Une assistante humaine peut, de son côté, gérer des dossiers administratifs complexes, arbitrer des situations inhabituelles et assurer un suivi personnalisé qui dépasse le téléphone."
        },
        {
          "t": "p",
          "text": "Les deux approches peuvent coexister : une secrétaire conserve les dossiers qui nécessitent son intervention, tandis que l'IA assure l'accueil courant, les débordements ou les appels hors horaires. À l'inverse, une agence peut choisir de confier **l'ensemble de ses appels entrants** au standard IA, avec des règles de transfert vers les professionnels quand c'est nécessaire."
        },
        {
          "t": "p",
          "text": "Le choix dépend de l'organisation, pas d'une opposition de principe entre humain et technologie. Pour comparer les modèles, lire [télésecrétariat humain ou standard IA dans l'immobilier](/ressources/telesecretariat-humain-ou-ia)."
        }
      ]
    },
    {
      "id": "comment-rushh-prend-en-charge-le-secretariat-telephonique-im",
      "h2": "Comment Rushh prend en charge le secrétariat téléphonique immobilier",
      "blocks": [
        {
          "t": "p",
          "text": "**Rushh est une agence spécialisée dans l'externalisation du téléphone entrant pour les professionnels de l'immobilier.** Son service repose sur un **standard téléphonique alimenté par intelligence artificielle**, et non sur une secrétaire humaine qui répondrait aux appels."
        },
        {
          "t": "p",
          "text": "La différence avec un outil à paramétrer soi-même tient au travail pris en charge par l'équipe Rushh :"
        },
        {
          "t": "ol",
          "items": [
            "**Comprendre votre activité :** transaction, location, gestion locative, syndic, mandataires ou réseau d'agences.",
            "**Définir les règles d'accueil :** quels appels qualifier, quelles informations demander, quels rendez-vous prendre, quand transférer.",
            "**Connecter les données utiles :** annonces, outils immobiliers, agendas et canaux de notification, selon les accès disponibles.",
            "**Tester les conversations :** demandes vendeurs, acquéreurs, locataires, appels imprévus, transferts et exceptions.",
            "**Installer puis suivre le service :** surveillance, ajustements, maintenance et évolution des scénarios avec l'agence."
          ]
        },
        {
          "t": "p",
          "text": "Une fois en service, Rushh répond aux **appels entrants 24 h/24 et 7 j/7**, qualifie les demandes et exécute les actions prévues : rendez-vous, transferts, SMS, e-mails et autres automatisations configurées. Les informations sont organisées pour que les équipes puissent agir sans réécouter chaque conversation pour en comprendre le motif."
        },
        {
          "t": "p",
          "text": "Le client n'a pas à administrer lui-même le standard. Il reste responsable des décisions métier, des informations fournies et des autorisations nécessaires. Les possibilités d'intégration avancée sont définies selon le projet et les API accessibles."
        },
        {
          "t": "p",
          "text": "Il ne s'agit **pas d'un service de prospection téléphonique sortante**. Rushh se concentre sur la réception et le traitement des appels entrants, ainsi que sur les actions qui en découlent."
        },
        {
          "t": "p",
          "text": "Vous pouvez [découvrir l'offre Rushh](/offre) ou [tester le standard lors d'une démonstration](/demonstrations)."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        },
        {
          "t": "p",
          "text": "Pour aller plus loin : [qualification des appels vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs), [prise de rendez-vous par IA dans l'immobilier](/ressources/prise-rendez-vous-ia-immobilier), [externalisation des appels d'une agence](/ressources/externalisation-appels-telephoniques-agence-immobiliere) et [appels urgents reçus par un syndic](/ressources/standard-syndic-appels-urgents)."
        }
      ]
    },
    {
      "id": "comment-verifier-que-votre-accueil-telephonique-fonctionne-v",
      "h2": "Comment vérifier que votre accueil téléphonique fonctionne vraiment ?",
      "blocks": [
        {
          "t": "p",
          "text": "Avant la mise en service, faites passer au standard quelques appels représentatifs de votre activité :"
        },
        {
          "t": "ul",
          "items": [
            "Un propriétaire qui hésite entre une estimation immédiate et un projet de vente plus lointain.",
            "Un acquéreur qui cite une annonce de façon incomplète.",
            "Un locataire qui signale un problème et demande à parler à un gestionnaire.",
            "Un appelant qui parle anglais ou espagnol, si cette langue fait partie du périmètre.",
            "Un appel pour lequel le calendrier n'offre aucun créneau disponible."
          ]
        },
        {
          "t": "p",
          "text": "Pour chaque appel, vérifiez quatre résultats simples : **la demande a-t-elle été comprise ? La bonne action a-t-elle été exécutée ? Le bon collaborateur a-t-il reçu l'information ? L'appelant a-t-il reçu une réponse claire ?**"
        },
        {
          "t": "p",
          "text": "Après la mise en service, les indicateurs les plus utiles restent concrets : appels pris, rendez-vous effectivement enregistrés, demandes correctement transmises et cas nécessitant une correction. Inutile d'ajouter un tableau de bord complexe si ces éléments permettent déjà de piloter la qualité."
        },
        {
          "t": "p",
          "text": "Enfin, prévoyez l'information des appelants sur l'usage de l'IA et le traitement des données, les droits d'accès, la conservation et les modalités d'enregistrement lorsqu'il existe. Ces points doivent être adaptés aux pratiques réelles de l'agence et au cadre applicable. Notre [guide sur l'IA téléphonique et le RGPD en immobilier](/ressources/standard-telephonique-ia-immobilier-rgpd) détaille les questions à vérifier."
        }
      ]
    },
    {
      "id": "questions-frequentes-sur-les-secretaires-telephoniques-ia-im",
      "h2": "Questions fréquentes sur les secrétaires téléphoniques IA immobilières",
      "blocks": [
        {
          "t": "h3",
          "text": "Une secrétaire téléphonique IA peut-elle répondre à tous les appels de l'agence ?"
        },
        {
          "t": "p",
          "text": "Elle peut décrocher l'ensemble des appels entrants si le routage est configuré ainsi. En revanche, elle ne doit pas chercher à résoudre seule toutes les demandes : urgences, décisions commerciales, situations sensibles et informations indisponibles nécessitent des règles de transfert ou de transmission."
        },
        {
          "t": "h3",
          "text": "Est-ce une vraie secrétaire qui répond au téléphone ?"
        },
        {
          "t": "p",
          "text": "Non. Dans le cas de Rushh, c'est un **standard téléphonique alimenté par intelligence artificielle** qui échange avec les appelants. L'équipe Rushh conçoit, configure et suit le service ; elle ne remplace pas l'accueil IA par une permanence humaine."
        },
        {
          "t": "h3",
          "text": "Peut-elle prendre un rendez-vous d'estimation ou de visite ?"
        },
        {
          "t": "p",
          "text": "Oui, si les agendas, les disponibilités et les règles de réservation sont accessibles. Rushh peut gérer plusieurs collaborateurs, attribuer un rendez-vous selon le bien ou le secteur, et prévoir modification ou annulation selon la configuration."
        },
        {
          "t": "h3",
          "text": "Peut-elle envoyer des SMS et des e-mails après les appels ?"
        },
        {
          "t": "p",
          "text": "Oui. Les confirmations, rappels, comptes rendus et notifications peuvent être automatisés selon les scénarios. Les réponses SMS, WhatsApp et d'autres actions via API peuvent également être intégrés lorsque les conditions techniques et les autorisations le permettent."
        },
        {
          "t": "h3",
          "text": "Comment sait-elle si un bien est encore disponible ?"
        },
        {
          "t": "p",
          "text": "Elle doit consulter une source autorisée et suffisamment à jour : logiciel immobilier, site, flux ou base de connaissances. Si la disponibilité n'est pas vérifiable, elle doit le dire et organiser une confirmation humaine, pas inventer une réponse."
        },
        {
          "t": "h3",
          "text": "Peut-elle répondre en anglais ou en espagnol ?"
        },
        {
          "t": "p",
          "text": "Oui. Rushh peut gérer le français, l'anglais et l'espagnol, ainsi que d'autres langues selon les besoins. Les scénarios doivent être testés avec les termes et les situations de l'agence."
        },
        {
          "t": "h3",
          "text": "Faut-il changer le numéro de téléphone de l'agence ?"
        },
        {
          "t": "p",
          "text": "Pas nécessairement. Un renvoi d'appel ou une configuration téléphonique adaptée permet généralement de conserver le numéro existant. Les modalités exactes dépendent de l'opérateur et du routage souhaité."
        },
        {
          "t": "h3",
          "text": "Peut-elle gérer les appels d'un syndic ou d'un gestionnaire locatif ?"
        },
        {
          "t": "p",
          "text": "Oui, avec des parcours distincts de ceux de la transaction. Le traitement d'un sinistre, d'une réclamation ou d'une demande de copropriétaire doit suivre les procédures du professionnel et prévoir une reprise humaine quand nécessaire."
        },
        {
          "t": "h3",
          "text": "Quel est le prix d'une secrétaire téléphonique IA chez Rushh ?"
        },
        {
          "t": "p",
          "text": "Rushh propose une prestation **sur devis**, adaptée au volume d'appels, aux métiers couverts, aux scénarios et aux intégrations. Aucun tarif unique ne peut être déduit des fonctionnalités présentées dans cet article."
        }
      ]
    }
  ],
  "sources": [],
  "sourcesNote": "",
  "related": [],
  "cta": {
    "title": "Écoutez Rushh décrocher",
    "text": "",
    "links": []
  }
};
