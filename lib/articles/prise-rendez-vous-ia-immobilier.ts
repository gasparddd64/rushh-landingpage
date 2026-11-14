import type { Article } from "./types";

/** Texte validé (lot SEO/GEO novembre 2026) : à reproduire tel quel, voir `bare` dans types.ts. */
export const priseRendezVous: Article = {
  "path": "/ressources/prise-rendez-vous-ia-immobilier",
  "bare": true,
  "category": "guides",
  "cover": {
    "src": "/ressources/prise-rendez-vous-ia-immobilier.png",
    "width": 1600,
    "height": 840,
    "alt": "Un appel vendeur et un appel acquéreur passent par la vérification de l'agenda : soit la disponibilité est vérifiée et le créneau enregistré, soit la demande est transmise à l'équipe."
  },
  "title": "IA prise de rendez-vous immobilier : visites et estimations | Rushh",
  "description": "Une IA peut-elle réserver vos visites et estimations ? Découvrez comment gérer agendas, qualification, confirmations SMS et rendez-vous immobiliers.",
  "shortTitle": "Prise de rendez-vous immobiliers par IA",
  "summary": "Visites, estimations, agendas partagés et confirmations : les règles pour prendre de vrais rendez-vous par téléphone.",
  "h1": "IA pour prendre les rendez-vous immobiliers : comment automatiser visites et estimations ?",
  "answer": "Oui, une IA téléphonique peut prendre des rendez-vous immobiliers pendant un appel entrant : elle identifie le motif, qualifie la demande, vérifie les disponibilités d'un agenda connecté, propose un créneau autorisé et confirme la réservation. Pour une visite, elle doit aussi identifier le bien et les contraintes du négociateur ; pour une estimation, elle doit orienter le vendeur vers le bon interlocuteur. Si une information ou une autorisation manque, elle doit transmettre une demande plutôt que confirmer un rendez-vous incertain.",
  "datePublished": "2026-10-29",
  "dateModified": "2026-11-14",
  "intro": [
    {
      "t": "p",
      "text": "Un propriétaire téléphone à 19 h 15 pour faire estimer sa maison. Un acquéreur appelle pendant une visite pour découvrir un appartement. Dans les deux cas, le prospect est prêt à avancer. Pourtant, si personne ne décroche, la prochaine étape devient souvent un rappel, puis un échange de disponibilités, puis une confirmation."
    },
    {
      "t": "p",
      "text": "**Une IA peut-elle prendre directement ces rendez-vous au téléphone ? Oui, à condition de pouvoir vérifier un vrai créneau et de respecter les règles de l'agence.** Un standard téléphonique alimenté par intelligence artificielle peut répondre à l'appel entrant, comprendre la demande, consulter un agenda connecté, enregistrer le rendez-vous et envoyer une confirmation par SMS ou e-mail."
    },
    {
      "t": "p",
      "text": "Mais une **visite immobilière** n'est pas un simple créneau de calendrier. Il faut savoir quel bien est concerné, qui peut le faire visiter, si le logement est accessible et combien de temps prévoir. Une **estimation** demande d'autres informations : localisation du bien, projet vendeur, secteur du négociateur et parfois temps de déplacement."
    },
    {
      "t": "p",
      "text": "Voici comment organiser une prise de rendez-vous par IA qui fonctionne dans la réalité d'une agence, sans promettre des créneaux impossibles à tenir."
    }
  ],
  "sections": [
    {
      "id": "quels-rendez-vous-une-ia-peut-elle-prendre-dans-l-immobilier",
      "h2": "Quels rendez-vous une IA peut-elle prendre dans l'immobilier ?",
      "blocks": [
        {
          "t": "p",
          "text": "Les demandes ne se valent pas. Certaines peuvent être réservées immédiatement ; d'autres exigent une vérification ou un accord humain."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Type de demande",
            "Informations utiles avant de réserver",
            "Suite possible"
          ],
          "rows": [
            [
              "**Estimation vendeur**",
              "Commune, type de bien, nature du projet, secteur, disponibilités",
              "Rendez-vous d'estimation avec le bon conseiller"
            ],
            [
              "**Visite acquéreur**",
              "Annonce ou référence du bien, disponibilité du bien, créneaux autorisés, négociateur responsable",
              "Visite confirmée si les conditions sont réunies"
            ],
            [
              "**Visite locative**",
              "Bien concerné, conditions de visite, calendrier du service location",
              "Visite ou transmission pour validation"
            ],
            [
              "**Premier échange avec un mandataire**",
              "Projet immobilier, zone géographique, préférence de contact",
              "Rendez-vous téléphonique ou physique"
            ],
            [
              "**Rendez-vous de gestion locative**",
              "Logement ou dossier concerné, motif, gestionnaire référent",
              "Créneau avec le bon service si autorisé"
            ],
            [
              "**Échange de syndic**",
              "Copropriété, objet de la demande, urgence éventuelle",
              "Rendez-vous, rappel organisé ou orientation prioritaire"
            ]
          ]
        },
        {
          "t": "p",
          "text": "La bonne question n'est pas « L'IA peut-elle remplir mon agenda ? », mais **« Dans quels cas a-t-elle le droit de confirmer un rendez-vous sans me demander ? »**."
        },
        {
          "t": "p",
          "text": "Une agence peut autoriser la réservation immédiate des estimations, mais imposer une validation humaine pour les visites de biens occupés. Une autre peut permettre à l'IA de réserver les visites uniquement sur des plages déjà ouvertes par les négociateurs. Les règles doivent suivre le métier, pas l'inverse."
        }
      ]
    },
    {
      "id": "exemple-1-un-proprietaire-appelle-pour-faire-estimer-son-bie",
      "h2": "Exemple 1 : un propriétaire appelle pour faire estimer son bien",
      "blocks": [
        {
          "t": "p",
          "text": "Il est 18 h 50. Une propriétaire appelle : « Bonjour, je voudrais savoir combien vaut ma maison à Pessac. Vous pouvez passer cette semaine ? » Le conseiller du secteur est déjà en rendez-vous."
        },
        {
          "t": "p",
          "text": "Un parcours de réservation bien configuré peut se dérouler ainsi :"
        },
        {
          "t": "ol",
          "items": [
            "**Comprendre le motif.** L'IA identifie une demande d'estimation, et non une recherche de logement.",
            "**Recueillir l'essentiel.** Elle demande la localisation du bien, son type et les précisions nécessaires au rendez-vous, sans transformer l'appel en questionnaire interminable.",
            "**Choisir le bon conseiller.** Les règles de l'agence désignent le négociateur responsable de Pessac ou un autre interlocuteur disponible.",
            "**Consulter ses disponibilités.** L'IA interroge l'agenda autorisé, en tenant compte de la durée de l'estimation et, si la configuration le prévoit, des temps de trajet.",
            "**Proposer un créneau réel.** « Je peux vous proposer jeudi à 17 h ou vendredi à 10 h. Qu'est-ce qui vous conviendrait ? »",
            "**Réserver et confirmer.** Une fois le créneau accepté et enregistré, la propriétaire reçoit une confirmation ; le conseiller retrouve le contexte de l'appel."
          ]
        },
        {
          "t": "p",
          "text": "Le conseiller n'a pas été interrompu. Et lorsqu'il consulte son agenda, il sait déjà qu'il doit rencontrer une propriétaire pour une estimation, à une adresse et à une heure définies."
        },
        {
          "t": "p",
          "text": "**Attention :** cet exemple suppose que le calendrier, les règles de secteur et la réservation sont correctement connectés. Si le rendez-vous ne peut pas être créé, l'IA doit annoncer qu'une demande a été transmise, **pas affirmer que la visite d'estimation est confirmée**."
        },
        {
          "t": "p",
          "text": "Pour approfondir la qualification d'un vendeur, voir [comment traiter un appel d'estimation immobilière](/ressources/appel-vendeur-estimation-immobiliere)."
        }
      ]
    },
    {
      "id": "exemple-2-un-acquereur-veut-visiter-une-annonce-precise",
      "h2": "Exemple 2 : un acquéreur veut visiter une annonce précise",
      "blocks": [
        {
          "t": "p",
          "text": "Un acquéreur téléphone : « Je vous appelle pour le T3 avec terrasse à Bordeaux, celui de votre annonce. Je peux le voir samedi ? »"
        },
        {
          "t": "p",
          "text": "La réservation d'une visite nécessite davantage qu'un agenda libre. L'IA doit d'abord **identifier le bon bien**. Elle peut utiliser la référence de l'annonce, l'adresse, les caractéristiques ou les données accessibles depuis le logiciel immobilier, le site de l'agence ou un flux autorisé."
        },
        {
          "t": "p",
          "text": "Une fois le bien identifié, plusieurs contrôles sont utiles :"
        },
        {
          "t": "ul",
          "items": [
            "**Statut du bien :** la visite est-elle encore proposée ? Les informations doivent être suffisamment récentes.",
            "**Responsable :** quel négociateur suit ce mandat ? Peut-il déléguer la visite ?",
            "**Accès :** le logement est-il libre, occupé, soumis à des horaires ou à l'accord d'un propriétaire ou d'un locataire ?",
            "**Disponibilités :** quels créneaux sont réellement ouverts pour ce bien et cette personne ?",
            "**Organisation :** faut-il prévoir un déplacement, un temps tampon ou regrouper plusieurs visites ?"
          ]
        },
        {
          "t": "p",
          "text": "Si ces conditions sont réunies, l'IA peut proposer un créneau et l'inscrire dans l'agenda. Elle peut ensuite envoyer les informations de rendez-vous autorisées et notifier le négociateur."
        },
        {
          "t": "p",
          "text": "**Si l'annonce est ambiguë, si le statut du bien est incertain ou si une autorisation d'accès manque, il ne faut pas réserver à l'aveugle.** L'IA peut recueillir les disponibilités de l'acquéreur et transmettre une demande de visite à valider."
        },
        {
          "t": "p",
          "text": "C'est une distinction importante pour le prospect : **« votre visite est confirmée »** n'a pas le même sens que **« votre demande de visite a bien été transmise »**."
        }
      ]
    },
    {
      "id": "comment-une-ia-choisit-elle-le-bon-creneau-dans-plusieurs-ag",
      "h2": "Comment une IA choisit-elle le bon créneau dans plusieurs agendas ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une agence ne fonctionne pas toujours avec un calendrier unique. Un directeur peut superviser plusieurs négociateurs, un mandataire peut partager son temps entre plusieurs secteurs et un service location peut gérer ses visites indépendamment de la transaction."
        },
        {
          "t": "p",
          "text": "Une prise de rendez-vous fiable repose sur **des règles d'attribution explicites**, par exemple :"
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Règle",
            "Exemple d'application"
          ],
          "rows": [
            [
              "**Par secteur géographique**",
              "Les estimations à Talence sont attribuées au conseiller responsable de Talence."
            ],
            [
              "**Par bien immobilier**",
              "Une demande de visite va au négociateur rattaché à l'annonce."
            ],
            [
              "**Par métier**",
              "Les visites locatives sont réservées dans l'agenda du service location."
            ],
            [
              "**Par type de rendez-vous**",
              "Une estimation sur place dure plus longtemps qu'un premier échange téléphonique."
            ],
            [
              "**Par disponibilité**",
              "Un créneau n'est proposé que si l'agenda concerné l'autorise."
            ],
            [
              "**Par exception**",
              "Si le responsable est absent, la demande est réattribuée ou transmise selon les consignes."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Avec **Google Calendar, Outlook ou un autre calendrier compatible**, l'IA peut consulter les disponibilités, créer, modifier ou annuler des événements lorsque les droits accordés et la configuration le permettent. Rushh prend en charge les connexions Google Calendar et Outlook ; d'autres intégrations peuvent être étudiées selon leurs interfaces techniques."
        },
        {
          "t": "p",
          "text": "Il faut aussi prévoir les détails qui font échouer une réservation en pratique : un créneau déjà pris entre la consultation et la confirmation, un jour férié, une absence non renseignée, un rendez-vous nécessitant un déplacement ou une visite de bien occupé."
        },
        {
          "t": "p",
          "text": "**La règle de sécurité est simple : relire la disponibilité au moment de réserver, puis ne confirmer à l'appelant qu'après l'enregistrement effectif du rendez-vous.** Si la création échoue, le système doit proposer une autre option ou transmettre la demande."
        },
        {
          "t": "p",
          "text": "Pour les questions de synchronisation, consultez notre article sur les [agendas Google Calendar et Outlook pour un standard téléphonique IA immobilier](/ressources/standard-ia-google-agenda-outlook-immobilier)."
        }
      ]
    },
    {
      "id": "les-six-etapes-d-une-reservation-automatisee-fiable",
      "h2": "Les six étapes d'une réservation automatisée fiable",
      "blocks": [
        {
          "t": "p",
          "text": "Une IA peut parler naturellement et pourtant mal gérer les rendez-vous. Ce qui compte, c'est la chaîne complète entre l'appel et l'agenda."
        },
        {
          "t": "h3",
          "text": "1. Identifier la demande sans imposer un formulaire oral"
        },
        {
          "t": "p",
          "text": "L'appelant dit ce qu'il souhaite : une estimation, une visite, un changement d'horaire ou une prise de contact. Le standard reconnaît le motif et pose **uniquement les questions manquantes**. Pour une estimation, demander la référence d'une annonce n'a aucun sens. Pour une visite, ne pas savoir quel bien est concerné peut bloquer la réservation."
        },
        {
          "t": "h3",
          "text": "2. Vérifier les informations métier"
        },
        {
          "t": "p",
          "text": "La disponibilité d'une annonce peut venir du CRM immobilier, d'une API, du site de l'agence, d'un flux de biens ou d'une base documentaire. Les informations doivent être autorisées, pertinentes et à jour. En cas de contradiction, l'IA doit demander une précision ou transmettre la question."
        },
        {
          "t": "h3",
          "text": "3. Appliquer les règles d'attribution"
        },
        {
          "t": "p",
          "text": "Le système détermine le bon collaborateur, la bonne durée, le bon lieu et les contraintes applicables. Une visite locative n'est pas affectée automatiquement au négociateur chargé des estimations vendeurs."
        },
        {
          "t": "h3",
          "text": "4. Proposer une disponibilité réellement réservable"
        },
        {
          "t": "p",
          "text": "L'IA consulte l'agenda connecté, tient compte des restrictions configurées et propose un ou plusieurs créneaux compatibles. Si aucun créneau n'est accessible, elle peut enregistrer une demande avec les disponibilités de l'appelant."
        },
        {
          "t": "h3",
          "text": "5. Enregistrer le rendez-vous avant de le confirmer"
        },
        {
          "t": "p",
          "text": "La création dans l'agenda doit réussir avant que le rendez-vous soit annoncé comme définitif. L'événement peut inclure le motif, le bien concerné, le lieu et les informations utiles au professionnel, selon les droits et la politique de données de l'agence."
        },
        {
          "t": "h3",
          "text": "6. Informer les bonnes personnes"
        },
        {
          "t": "p",
          "text": "Le client peut recevoir un **SMS ou un e-mail de confirmation** ; le collaborateur reçoit les éléments nécessaires pour préparer son rendez-vous. Des rappels, modifications, annulations ou workflows supplémentaires peuvent être configurés selon les besoins."
        },
        {
          "t": "p",
          "text": "L'automatisation est réussie lorsque **le client connaît la suite, le bon collaborateur est informé et l'agenda reflète une réservation réelle**."
        }
      ]
    },
    {
      "id": "sms-e-mails-et-rappels-que-se-passe-t-il-apres-la-reservatio",
      "h2": "SMS, e-mails et rappels : que se passe-t-il après la réservation ?",
      "blocks": [
        {
          "t": "p",
          "text": "Le rendez-vous n'est pas terminé au moment où l'IA raccroche. Une confirmation claire réduit les ambiguïtés sur la date, l'heure, le lieu et l'objet de la rencontre."
        },
        {
          "t": "p",
          "text": "Voici deux **exemples de messages**, à adapter à la configuration de l'agence :"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "**Estimation vendeur — SMS de confirmation.** Bonjour, votre rendez-vous d'estimation avec l'agence est confirmé pour jeudi à 17 h. L'adresse et les modalités vous ont été communiquées lors de l'appel. Pour toute modification, contactez l'agence au numéro habituel."
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "**Visite acquéreur — e-mail de confirmation.** Objet : Confirmation de votre visite immobilière. Bonjour, votre visite du bien [référence] est confirmée le [date] à [heure], avec [conseiller]. Vous trouverez ci-dessous les informations pratiques communiquées par l'agence. À bientôt."
        },
        {
          "t": "p",
          "text": "Les champs entre crochets sont des **variables de modèle**, pas des données réelles. Les informations sensibles ou l'adresse exacte d'un logement occupé ne doivent être communiquées que selon les consignes de l'agence."
        },
        {
          "t": "p",
          "text": "Selon le périmètre configuré, Rushh peut envoyer des **SMS, e-mails, rappels et notifications**, traiter des réponses SMS et mettre en place des échanges WhatsApp ou d'autres automatisations lorsque les accès, les autorisations et les API le permettent. Il faut distinguer les messages automatiques liés à un appel entrant d'une campagne de prospection téléphonique : **Rushh ne propose pas d'appels sortants automatisés dans son offre de base**."
        },
        {
          "t": "p",
          "text": "Pour une agence, les règles les plus utiles sont souvent simples : confirmation immédiate après création, rappel avant le rendez-vous si prévu, notification au conseiller et information claire lorsqu'une réservation a été modifiée."
        }
      ]
    },
    {
      "id": "une-ia-peut-elle-deplacer-ou-annuler-un-rendez-vous-immobili",
      "h2": "Une IA peut-elle déplacer ou annuler un rendez-vous immobilier ?",
      "blocks": [
        {
          "t": "p",
          "text": "Oui, **si elle a accès à la bonne réservation et aux droits nécessaires**. Un appelant peut rappeler pour dire : « Je ne peux plus venir demain à 14 h, est-ce qu'on peut décaler ? »"
        },
        {
          "t": "p",
          "text": "Le standard doit alors :"
        },
        {
          "t": "ol",
          "items": [
            "Identifier la réservation concernée sans divulguer d'informations à un tiers non autorisé.",
            "Vérifier si la modification est permise : délai minimum, type de visite, accord éventuel du propriétaire ou du conseiller.",
            "Consulter les nouveaux créneaux disponibles.",
            "Mettre à jour l'événement existant, ou l'annuler si c'est la demande autorisée.",
            "Confirmer le résultat à l'appelant et notifier le collaborateur concerné."
          ]
        },
        {
          "t": "p",
          "text": "Pour un rendez-vous d'estimation, une modification peut être relativement simple. Pour une visite dans un logement occupé, déplacer l'horaire peut exiger un accord humain. **La possibilité technique de modifier un calendrier ne remplace pas l'autorisation métier de modifier la visite.**"
        },
        {
          "t": "p",
          "text": "Si la réservation n'est pas retrouvée, l'IA doit éviter de créer un second événement en supposant que le premier n'existe pas. Elle peut demander une précision ou transmettre le dossier à l'équipe."
        }
      ]
    },
    {
      "id": "les-situations-ou-l-ia-ne-doit-pas-confirmer-seule",
      "h2": "Les situations où l'IA ne doit pas confirmer seule",
      "blocks": [
        {
          "t": "p",
          "text": "La meilleure automatisation n'est pas celle qui dit oui à tout. C'est celle qui sait **quand ne pas promettre un rendez-vous**."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Situation",
            "Comportement attendu"
          ],
          "rows": [
            [
              "Le bien n'est pas identifié avec certitude",
              "Demander une référence ou transmettre la demande."
            ],
            [
              "Le statut de l'annonce est inconnu ou ancien",
              "Ne pas affirmer que le bien est disponible."
            ],
            [
              "Le calendrier n'est pas accessible",
              "Recueillir les disponibilités et annoncer une demande à confirmer."
            ],
            [
              "Le créneau a été pris entre-temps",
              "Proposer un autre créneau après une nouvelle vérification."
            ],
            [
              "La visite exige l'accord d'un occupant",
              "Organiser une validation humaine avant confirmation."
            ],
            [
              "L'appelant souhaite un rendez-vous inhabituel ou urgent",
              "Appliquer la procédure d'escalade définie par l'agence."
            ],
            [
              "Le système ne parvient pas à enregistrer l'événement",
              "Ne pas envoyer de message indiquant que le rendez-vous est confirmé."
            ],
            [
              "La demande contient une décision commerciale ou juridique",
              "Transmettre au professionnel compétent."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Ces exceptions doivent être **testées avant le lancement**. Elles sont particulièrement importantes pour les agences multi-sites, les équipes qui partagent des biens et les professionnels de la gestion locative."
        }
      ]
    },
    {
      "id": "agenda-partage-formulaire-en-ligne-ou-ia-telephonique-quelle",
      "h2": "Agenda partagé, formulaire en ligne ou IA téléphonique : quelle différence ?",
      "blocks": [
        {
          "t": "p",
          "text": "Les trois solutions peuvent organiser des rendez-vous, mais elles ne répondent pas au même moment du parcours client."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Solution",
            "Ce qu'elle apporte",
            "Sa limite principale"
          ],
          "rows": [
            [
              "**Agenda ou lien de réservation**",
              "L'internaute choisit lui-même un créneau ouvert.",
              "Il doit accéder au lien et comprendre quel rendez-vous réserver."
            ],
            [
              "**Formulaire de demande de visite**",
              "L'agence reçoit les informations du prospect.",
              "Une demande n'est pas nécessairement un rendez-vous confirmé."
            ],
            [
              "**Standard téléphonique IA connecté**",
              "Le prospect appelle normalement, explique son besoin et peut réserver pendant la conversation.",
              "Les données métier, les droits et les règles de réservation doivent être configurés et fiables."
            ],
            [
              "**Accueil humain**",
              "Une personne peut arbitrer les cas complexes et négocier une organisation particulière.",
              "Sa disponibilité dépend de l'organisation et des horaires prévus."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Il n'est pas nécessaire de supprimer les formulaires ou les liens de réservation pour utiliser une IA téléphonique. **L'IA complète ces canaux en prenant en charge les personnes qui préfèrent appeler** et les appels qui arrivent lorsque l'équipe est occupée."
        },
        {
          "t": "p",
          "text": "Pour une approche plus large de l'accueil entrant, voir [comment automatiser les appels entrants d'une agence immobilière](/ressources/automatiser-appels-entrants-agence-immobiliere)."
        }
      ]
    },
    {
      "id": "comment-rushh-prend-en-charge-les-rendez-vous-immobiliers",
      "h2": "Comment Rushh prend en charge les rendez-vous immobiliers",
      "blocks": [
        {
          "t": "p",
          "text": "**Rushh est une agence spécialisée dans l'externalisation complète des appels entrants des professionnels de l'immobilier.** Son service repose sur un **standard téléphonique alimenté par intelligence artificielle**, configuré selon les métiers, les outils et l'organisation de chaque client."
        },
        {
          "t": "p",
          "text": "Lorsqu'un vendeur ou un acquéreur appelle, Rushh peut :"
        },
        {
          "t": "ul",
          "items": [
            "répondre **24 h/24 et 7 j/7**, même lorsque l'équipe est en visite ou que l'agence est fermée ;",
            "identifier le projet et recueillir les informations utiles sans questionnaire superflu ;",
            "retrouver les informations sur les biens depuis les sources autorisées ;",
            "orienter la demande vers le négociateur ou le service concerné ;",
            "consulter les disponibilités et **créer, modifier ou annuler des rendez-vous** selon les règles configurées ;",
            "envoyer les confirmations, rappels et informations utiles par SMS ou e-mail ;",
            "organiser le suivi dans la plateforme Rushh et, selon les connexions, dans les outils métier de l'agence ;",
            "transférer ou transmettre les situations nécessitant un humain."
          ]
        },
        {
          "t": "p",
          "text": "Rushh prend en charge les connexions à **Google Calendar et Outlook**. Les intégrations immobilières opérationnelles comprennent **Apimo et WHISE** ; d'autres logiciels, flux, sites, CRM et automatisations peuvent être étudiés lorsque les API, les accès et les droits nécessaires sont disponibles. Le périmètre précis est défini pour chaque projet."
        },
        {
          "t": "p",
          "text": "**L'équipe Rushh s'occupe de tout le travail de mise en place :** analyse des appels, conception des scénarios, attribution des rendez-vous, configuration des agendas, connexions, tests, installation, surveillance, maintenance et améliorations. L'agence n'a pas à administrer elle-même un outil d'automatisation téléphonique."
        },
        {
          "t": "p",
          "text": "L'objectif est concret : **transformer davantage d'appels entrants en rendez-vous réellement exploitables**, sans obliger les négociateurs à interrompre leurs visites pour répondre au téléphone. Cela ne promet ni un nombre de mandats ni un taux de conversion : la qualité des données, des consignes et du suivi reste déterminante."
        },
        {
          "t": "p",
          "text": "Découvrez [l'offre Rushh](/offre), les [intégrations possibles](/integrations) ou [testez le standard sur des appels immobiliers](/demonstrations)."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        },
        {
          "t": "p",
          "text": "Pour aller plus loin : [qualification des appels vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs), [réceptionniste IA pour agence immobilière](/ressources/receptionniste-ia-agence-immobiliere), [secrétaire téléphonique IA en immobilier](/ressources/secretaire-telephonique-ia-immobilier), [standard IA et Apimo](/ressources/standard-telephonique-ia-apimo) et [standard IA et WHISE](/ressources/standard-telephonique-ia-whise)."
        }
      ]
    },
    {
      "id": "comment-tester-la-prise-de-rendez-vous-par-ia-avant-de-la-me",
      "h2": "Comment tester la prise de rendez-vous par IA avant de la mettre en service ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une démonstration réussie ne se limite pas à une voix agréable. Il faut vérifier que **les bonnes actions ont vraiment été effectuées**."
        },
        {
          "t": "p",
          "text": "Testez au minimum ces scénarios :"
        },
        {
          "t": "ol",
          "items": [
            "Un vendeur appelle pour une estimation dans le secteur d'un négociateur disponible.",
            "Un acquéreur demande une visite pour un bien identifié et accessible.",
            "Un appelant demande une visite pour une annonce introuvable ou dont le statut est incertain.",
            "Deux personnes tentent de réserver le même créneau presque simultanément.",
            "Un client souhaite modifier un rendez-vous déjà enregistré.",
            "Aucun créneau n'est disponible dans l'agenda autorisé.",
            "Le calendrier ou le logiciel immobilier est momentanément inaccessible.",
            "Une visite nécessite une autorisation humaine préalable."
          ]
        },
        {
          "t": "p",
          "text": "Après chaque appel, vérifiez : **le bon motif a-t-il été compris ? Le rendez-vous existe-t-il réellement dans le bon agenda ? Le client a-t-il reçu une confirmation exacte ? Le collaborateur dispose-t-il des informations nécessaires ?**"
        },
        {
          "t": "p",
          "text": "Les indicateurs utiles sont les appels effectivement pris, les rendez-vous créés, les demandes transmises pour validation et les erreurs détectées puis corrigées. Inutile de fabriquer un taux de conversion ou de promettre un nombre de rendez-vous sans données réelles."
        },
        {
          "t": "p",
          "text": "Enfin, les coordonnées, adresses, calendriers et comptes rendus d'appels peuvent contenir des données personnelles. L'information des appelants, les accès, les durées de conservation et les éventuels enregistrements doivent être organisés selon les pratiques réelles et les obligations applicables. Voir le [guide RGPD du standard téléphonique IA immobilier](/ressources/standard-telephonique-ia-immobilier-rgpd)."
        }
      ]
    },
    {
      "id": "questions-frequentes-sur-la-prise-de-rendez-vous-immobiliers",
      "h2": "Questions fréquentes sur la prise de rendez-vous immobiliers par IA",
      "blocks": [
        {
          "t": "h3",
          "text": "Une IA peut-elle vraiment réserver une visite immobilière par téléphone ?"
        },
        {
          "t": "p",
          "text": "Oui, lorsqu'elle peut identifier le bien, vérifier les conditions de visite, consulter le calendrier autorisé et enregistrer le rendez-vous. Si l'accès au logement ou le créneau doit être validé par un humain, elle doit transmettre une demande plutôt que confirmer la visite."
        },
        {
          "t": "h3",
          "text": "Peut-elle prendre des rendez-vous d'estimation pour des propriétaires vendeurs ?"
        },
        {
          "t": "p",
          "text": "Oui. Elle peut qualifier le projet, orienter la demande vers le conseiller responsable du secteur, consulter ses disponibilités et réserver un créneau si les règles de l'agence l'autorisent."
        },
        {
          "t": "h3",
          "text": "Fonctionne-t-elle avec Google Calendar et Outlook ?"
        },
        {
          "t": "p",
          "text": "Oui. Rushh peut se connecter à Google Calendar et Outlook. Les actions disponibles dépendent des accès, des autorisations et de la configuration retenue."
        },
        {
          "t": "h3",
          "text": "Comment fait-elle avec plusieurs négociateurs ou plusieurs agences ?"
        },
        {
          "t": "p",
          "text": "Elle applique les règles définies : attribution par bien, secteur, métier, équipe ou disponibilité. Les agendas doivent être reliés et les droits de réservation correctement configurés."
        },
        {
          "t": "h3",
          "text": "Peut-elle modifier ou annuler un rendez-vous ?"
        },
        {
          "t": "p",
          "text": "Oui, si elle retrouve la réservation et dispose des droits nécessaires. Une visite soumise à l'accord d'un propriétaire ou d'un occupant peut toutefois exiger une validation humaine."
        },
        {
          "t": "h3",
          "text": "Peut-elle envoyer des SMS de confirmation et des rappels ?"
        },
        {
          "t": "p",
          "text": "Oui. Rushh peut automatiser SMS, e-mails, rappels et notifications selon le scénario. Le traitement de réponses SMS, WhatsApp et d'autres workflows peut également être prévu selon le périmètre et les conditions techniques."
        },
        {
          "t": "h3",
          "text": "Peut-elle réserver une visite pour un bien publié sur le site de l'agence ?"
        },
        {
          "t": "p",
          "text": "Oui, si les informations du bien sont accessibles, suffisamment fiables et que l'agence autorise la réservation. Les données peuvent provenir d'un logiciel immobilier, du site, d'un flux ou d'une base documentaire."
        },
        {
          "t": "h3",
          "text": "Que se passe-t-il si l'agenda est plein ou inaccessible ?"
        },
        {
          "t": "p",
          "text": "L'IA ne doit pas inventer de disponibilité. Elle peut recueillir les préférences de l'appelant et transmettre une demande à confirmer, ou proposer une autre option prévue par l'agence."
        },
        {
          "t": "h3",
          "text": "Est-ce que l'IA peut prendre des rendez-vous le soir et le week-end ?"
        },
        {
          "t": "p",
          "text": "Oui. Le standard Rushh répond aux appels entrants 24 h/24 et 7 j/7. Les rendez-vous proposés restent soumis aux créneaux réellement ouverts par les professionnels."
        },
        {
          "t": "h3",
          "text": "Faut-il changer le numéro de téléphone de l'agence ?"
        },
        {
          "t": "p",
          "text": "Pas nécessairement. Un renvoi d'appel ou un raccordement compatible peut permettre de conserver le numéro habituel. Les modalités dépendent de l'installation téléphonique."
        },
        {
          "t": "h3",
          "text": "Est-ce que l'IA remplace les négociateurs immobiliers ?"
        },
        {
          "t": "p",
          "text": "Non. Elle automatise l'accueil, la qualification et l'organisation des rendez-vous. L'estimation, la négociation, la visite et les décisions métier restent du ressort des professionnels."
        },
        {
          "t": "h3",
          "text": "Combien coûte la prise de rendez-vous par IA avec Rushh ?"
        },
        {
          "t": "p",
          "text": "Rushh propose une prestation **sur devis**, selon les besoins de l'agence, les volumes, les scénarios et les intégrations nécessaires."
        }
      ]
    }
  ],
  "sources": [],
  "sourcesNote": "",
  "related": [],
  "cta": {
    "title": "Obtenez des rendez-vous sans interrompre vos journées",
    "text": "",
    "links": []
  }
};
