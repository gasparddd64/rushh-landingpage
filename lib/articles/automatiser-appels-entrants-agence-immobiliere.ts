import type { Article } from "./types";

/** Texte validé (lot SEO/GEO novembre 2026) : à reproduire tel quel, voir `bare` dans types.ts. */
export const automatiserAppels: Article = {
  "path": "/ressources/automatiser-appels-entrants-agence-immobiliere",
  "bare": true,
  "category": "guides",
  "cover": {
    "src": "/ressources/automatiser-appels-entrants-agence-immobiliere.png",
    "width": 1600,
    "height": 840,
    "alt": "Illustration : cinq actions pour automatiser les appels entrants d'une agence immobilière, de la reconnaissance du motif au suivi transmis à l'équipe."
  },
  "title": "Automatiser les appels entrants d'une agence immobilière | Rushh",
  "description": "Comment automatiser les appels entrants d'une agence immobilière ? Méthode, scénarios vendeurs et acquéreurs, rendez-vous, SMS, CRM et erreurs à éviter.",
  "shortTitle": "Automatiser les appels entrants d'une agence",
  "summary": "Cinq actions pour passer de l'appel manqué à une suite fiable : scénarios, outils, tests et reprise humaine.",
  "h1": "Comment automatiser les appels entrants d'une agence immobilière sans perdre de prospects ?",
  "answer": "Pour automatiser les appels entrants d'une agence immobilière, il faut organiser cinq actions : décrocher, identifier le motif, qualifier la demande, déclencher la bonne suite (rendez-vous, transfert, message ou action dans un logiciel) et transmettre le résultat à l'équipe. Un standard téléphonique alimenté par intelligence artificielle peut gérer ce parcours 24 h/24, à condition de disposer de consignes fiables, des données utiles et des connexions nécessaires.",
  "datePublished": "2026-11-14",
  "dateModified": "2026-11-14",
  "intro": [
    {
      "t": "p",
      "text": "Un négociateur est en visite. Une propriétaire appelle pour faire estimer sa maison. Au même moment, un acquéreur veut déplacer sa visite de demain et un locataire cherche à joindre son gestionnaire. Le téléphone sonne, mais personne ne peut interrompre son rendez-vous pour répondre."
    },
    {
      "t": "p",
      "text": "Le problème n'est pas seulement l'appel manqué. C'est tout ce qui suit : identifier le motif, rappeler, retrouver l'annonce, chercher le bon collaborateur, proposer un créneau et transmettre les informations. **Automatiser les appels entrants d'une agence immobilière**, c'est prendre en charge cette chaîne d'actions dès le premier contact, sans transformer chaque appel en tâche supplémentaire pour l'équipe."
    },
    {
      "t": "p",
      "text": "Il ne suffit donc pas d'installer une voix qui dit bonjour. Une automatisation utile doit savoir **quoi demander, où trouver l'information et quelle action effectuer** selon la situation."
    }
  ],
  "sections": [
    {
      "id": "que-signifie-vraiment-automatiser-les-appels-entrants",
      "h2": "Que signifie vraiment « automatiser les appels entrants » ?",
      "blocks": [
        {
          "t": "p",
          "text": "Automatiser le téléphone d'une agence peut désigner plusieurs niveaux de service. Ils ne produisent pas le même résultat."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Niveau",
            "Ce qui est automatisé",
            "Ce qui reste à faire dans l'agence"
          ],
          "rows": [
            [
              "**Répondeur**",
              "Diffuser un message et enregistrer la demande si l'appelant laisse un message.",
              "Écouter, comprendre et rappeler."
            ],
            [
              "**Renvoi d'appel ou standard à menus**",
              "Rediriger vers une personne ou un service selon des règles prédéfinies.",
              "Traiter l'appel lorsque quelqu'un décroche."
            ],
            [
              "**Accueil téléphonique avec IA**",
              "Décrocher, comprendre la demande, poser des questions pertinentes et transmettre un compte rendu.",
              "Prendre le relais lorsque la demande l'exige."
            ],
            [
              "**Standard IA connecté aux outils métier**",
              "En plus de l'accueil : consulter certaines informations, réserver un rendez-vous, envoyer un SMS, actualiser un dossier ou déclencher un workflow autorisé.",
              "Gérer les décisions métier et les exceptions prévues."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Ces niveaux ne s'excluent pas. Une agence peut garder un transfert humain pour les urgences et automatiser les demandes courantes. Une autre peut confier l'ensemble de son accueil entrant à un standard IA, avec des règles de reprise humaine."
        },
        {
          "t": "p",
          "text": "L'objectif n'est pas de supprimer toute intervention humaine : c'est de **réserver le temps des professionnels aux échanges qui ont réellement besoin d'eux**."
        }
      ]
    },
    {
      "id": "1-identifier-les-appels-que-recoit-reellement-votre-agence",
      "h2": "1. Identifier les appels que reçoit réellement votre agence",
      "blocks": [
        {
          "t": "p",
          "text": "Avant de choisir un outil, commencez par les situations qui reviennent le plus souvent. Dans l'immobilier, plusieurs demandes arrivent au même numéro, mais n'ont pas la même valeur ni la même urgence."
        },
        {
          "t": "ul",
          "items": [
            "**Vendeur :** demande d'estimation, projet de mise en vente, suivi d'un mandat.",
            "**Acquéreur :** disponibilité d'un bien, critères de recherche, demande ou modification de visite.",
            "**Candidat locataire :** annonce, conditions de location, constitution du dossier, visite.",
            "**Bailleur :** question sur un logement, une gestion ou un document.",
            "**Locataire en place :** incident, quittance, intervention ou question administrative.",
            "**Copropriétaire ou prestataire :** signalement et suivi d'un dossier de syndic.",
            "**Appel sans intérêt commercial immédiat :** démarchage, demande hors secteur ou appel mal dirigé."
          ]
        },
        {
          "t": "p",
          "text": "Pour chaque catégorie, définissez trois éléments : **les informations indispensables**, **l'action attendue** et **le cas dans lequel un humain doit intervenir**."
        },
        {
          "t": "p",
          "text": "Exemple : pour un vendeur, l'IA peut demander la commune et le type de bien, comprendre le projet, puis proposer un rendez-vous d'estimation. Elle n'a pas besoin de transformer le premier appel en interrogatoire. Les détails complémentaires pourront être abordés avec le négociateur."
        },
        {
          "t": "p",
          "text": "Pour approfondir cette logique, consultez notre guide sur la [qualification des appels vendeurs et acquéreurs](/ressources/qualification-appels-vendeurs-acquereurs)."
        }
      ]
    },
    {
      "id": "2-choisir-comment-les-appels-arrivent-au-standard",
      "h2": "2. Choisir comment les appels arrivent au standard",
      "blocks": [
        {
          "t": "p",
          "text": "Une automatisation peut fonctionner sur le numéro habituel de l'agence. Selon l'installation téléphonique, les appels sont dirigés vers le standard IA par un **renvoi d'appel** ou un autre raccordement compatible."
        },
        {
          "t": "p",
          "text": "Trois organisations sont possibles :"
        },
        {
          "t": "ol",
          "items": [
            "**En permanence :** le standard IA accueille tous les appels entrants, puis transfère à un collaborateur quand les règles le prévoient.",
            "**En débordement :** il prend le relais lorsque l'équipe ne répond pas ou est déjà occupée.",
            "**En dehors des horaires :** il couvre les soirées, les week-ends et les périodes de fermeture."
          ]
        },
        {
          "t": "p",
          "text": "Le choix dépend de l'objectif. Si le problème est l'interruption permanente des négociateurs, une prise en charge uniquement le soir ne suffira pas. Si l'agence veut conserver un accueil humain en journée, un fonctionnement en débordement peut être pertinent."
        },
        {
          "t": "p",
          "text": "Avant la mise en service, vérifiez le comportement en cas d'appel simultané, d'échec de transfert, de coupure réseau et de renvoi vers une mauvaise destination. Le parcours de secours est aussi important que le parcours idéal."
        },
        {
          "t": "p",
          "text": "Pour comparer ces modes, voir [renvoi d'appel ou décrochage IA](/ressources/renvoi-appel-ou-decroche-ia-immobilier)."
        }
      ]
    },
    {
      "id": "3-construire-un-scenario-different-pour-chaque-motif-d-appel",
      "h2": "3. Construire un scénario différent pour chaque motif d'appel",
      "blocks": [
        {
          "t": "p",
          "text": "Une IA téléphonique immobilière ne doit pas poser la même série de questions à tout le monde. Voici trois parcours concrets, à adapter à l'organisation de l'agence."
        },
        {
          "t": "h3",
          "text": "Scénario A : un propriétaire veut faire estimer son appartement"
        },
        {
          "t": "p",
          "text": "**Appel :** « Bonjour, j'ai un appartement à vendre à Mérignac. Est-ce que vous faites des estimations ? »"
        },
        {
          "t": "p",
          "text": "Le standard identifie un projet vendeur. Il recueille les informations utiles à un premier rendez-vous : localisation, type de bien, projet et disponibilités, sans imposer des questions inutiles. Il consulte ensuite l'agenda autorisé du bon interlocuteur et propose un créneau si la réservation est possible."
        },
        {
          "t": "p",
          "text": "**Suite automatisée possible :** rendez-vous créé, confirmation par SMS ou e-mail, fiche de demande enregistrée, notification au négociateur concerné."
        },
        {
          "t": "p",
          "text": "**Si l'agenda n'est pas disponible :** le standard transmet une demande qualifiée plutôt que de confirmer un créneau inventé."
        },
        {
          "t": "h3",
          "text": "Scénario B : un acquéreur appelle pour une annonce précise"
        },
        {
          "t": "p",
          "text": "**Appel :** « Je vous appelle pour la maison avec jardin à Talence, vue sur votre site. Est-elle toujours à vendre ? »"
        },
        {
          "t": "p",
          "text": "Le standard recherche le bien dans les données auxquelles il a accès. S'il identifie une annonce unique et dispose d'un statut fiable, il peut répondre à la question autorisée, recueillir les critères de l'acquéreur et proposer une visite selon les règles de l'agence."
        },
        {
          "t": "p",
          "text": "**Suite automatisée possible :** demande de visite attribuée au bon négociateur, rendez-vous inscrit dans l'agenda, informations envoyées à l'acquéreur et au collaborateur."
        },
        {
          "t": "p",
          "text": "**Si plusieurs annonces correspondent ou si le statut est incertain :** il demande une référence ou transmet la demande. Une automatisation fiable ne doit pas inventer la disponibilité d'un bien."
        },
        {
          "t": "h3",
          "text": "Scénario C : un locataire signale un problème"
        },
        {
          "t": "p",
          "text": "**Appel :** « Il y a une fuite d'eau dans mon appartement et je ne sais pas qui contacter. »"
        },
        {
          "t": "p",
          "text": "Le standard identifie la nature de la demande, recueille les éléments nécessaires à son orientation et applique la procédure prévue par le gestionnaire : transfert, notification prioritaire ou création d'une demande de suivi."
        },
        {
          "t": "p",
          "text": "**Suite automatisée possible :** compte rendu transmis au service concerné, notification par le canal prévu et confirmation de prise en compte lorsque cela est autorisé."
        },
        {
          "t": "p",
          "text": "**Point de vigilance :** l'IA ne remplace ni les services d'urgence ni la décision du gestionnaire. Les cas de danger immédiat doivent suivre un protocole explicite, testé avant la mise en service."
        },
        {
          "t": "p",
          "text": "Ces exemples illustrent un principe commun : **l'IA ne se contente pas de recueillir un message ; elle fait avancer la demande jusqu'à la prochaine action fiable**."
        }
      ]
    },
    {
      "id": "4-relier-l-automatisation-aux-informations-et-aux-outils-de",
      "h2": "4. Relier l'automatisation aux informations et aux outils de l'agence",
      "blocks": [
        {
          "t": "p",
          "text": "Un standard vocal peut comprendre une question sans pour autant disposer de la réponse. Pour traiter une demande immobilière, il doit accéder aux bonnes sources."
        },
        {
          "t": "p",
          "text": "**Annonces et biens.** Les informations peuvent provenir du logiciel immobilier, du site de l'agence, d'un flux d'annonces autorisé ou de documents fournis par l'équipe. L'essentiel est de connaître la date de mise à jour et les droits d'accès. Une donnée absente ou obsolète ne doit pas être présentée comme certaine."
        },
        {
          "t": "p",
          "text": "**Agendas.** Une connexion à Google Calendar, Outlook ou un autre agenda compatible permet, selon les droits accordés, de consulter des disponibilités et de créer, modifier ou annuler des rendez-vous. Avec plusieurs négociateurs, les règles peuvent tenir compte du bien, du secteur, du type de rendez-vous ou de la personne responsable."
        },
        {
          "t": "p",
          "text": "**Logiciels immobiliers et CRM.** Une API exploitable peut permettre de retrouver un contact, de transmettre une qualification ou de mettre à jour une information. Chez Rushh, les connexions à **Apimo et WHISE** font partie des intégrations opérationnelles. D'autres outils peuvent être étudiés lorsque les API, les autorisations et le périmètre technique le permettent."
        },
        {
          "t": "p",
          "text": "**Messages et notifications.** Après l'appel, un workflow peut envoyer un SMS de confirmation, un e-mail de synthèse, un rappel, une notification à l'équipe ou traiter une réponse SMS. Des parcours WhatsApp sont également envisageables selon les connexions et les conditions applicables."
        },
        {
          "t": "p",
          "text": "Il faut distinguer **ce que l'API rend possible** de **ce qui est effectivement configuré pour l'agence**. Une intégration ne doit jamais être annoncée comme active avant d'avoir été autorisée, réalisée et testée."
        },
        {
          "t": "p",
          "text": "Voir les [intégrations et outils compatibles avec Rushh](/integrations)."
        }
      ]
    },
    {
      "id": "5-definir-precisement-les-cas-ou-l-ia-doit-passer-la-main",
      "h2": "5. Définir précisément les cas où l'IA doit passer la main",
      "blocks": [
        {
          "t": "p",
          "text": "Une bonne automatisation ne cherche pas à répondre à tout prix. Elle sait reconnaître les situations qui sortent de son périmètre."
        },
        {
          "t": "p",
          "text": "Prévoyez notamment une reprise humaine lorsque :"
        },
        {
          "t": "ul",
          "items": [
            "L'appelant insiste pour parler à une personne et qu'un transfert est autorisé.",
            "La demande concerne une négociation, une décision commerciale ou un engagement qui n'a pas été délégué à l'IA.",
            "Les informations disponibles ne permettent pas de répondre avec fiabilité.",
            "Le sujet relève d'une réclamation sensible ou d'une procédure d'urgence.",
            "Un rendez-vous ne peut pas être confirmé dans les outils connectés."
          ]
        },
        {
          "t": "p",
          "text": "Le standard doit alors transmettre **le contexte déjà recueilli** : motif, bien concerné, informations utiles et prochaine action attendue. Le collaborateur ne devrait pas avoir à recommencer la conversation depuis le début."
        },
        {
          "t": "p",
          "text": "Ce point est particulièrement important pour les réseaux multi-agences : la personne à joindre peut dépendre de l'agence, du secteur, du portefeuille ou du dossier."
        }
      ]
    },
    {
      "id": "6-tester-l-automatisation-avant-de-lui-confier-les-appels",
      "h2": "6. Tester l'automatisation avant de lui confier les appels",
      "blocks": [
        {
          "t": "p",
          "text": "Une démonstration fluide ne suffit pas. Il faut tester le système avec des demandes proches de celles que reçoit réellement l'agence."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Test à réaliser",
            "Ce qu'il faut vérifier"
          ],
          "rows": [
            [
              "« Je veux visiter le T3 rue Victor-Hugo »",
              "Le standard retrouve le bon bien ou demande une précision."
            ],
            [
              "« Je ne suis plus disponible pour mon rendez-vous »",
              "La modification suit les règles de l'agenda ; aucune annulation non autorisée."
            ],
            [
              "« Je veux parler au directeur »",
              "Le transfert ou la reprise humaine fonctionne."
            ],
            [
              "« Le bien est-il toujours disponible ? »",
              "La réponse repose sur une source à jour ; sinon, le doute est signalé."
            ],
            [
              "Deux appels arrivent en même temps",
              "Aucun appel ne disparaît silencieusement ; le comportement attendu est vérifié."
            ],
            [
              "« Je n'ai pas compris votre question »",
              "Le standard reformule sans bloquer l'appelant."
            ],
            [
              "L'agenda ou l'API ne répond pas",
              "L'IA n'invente pas d'action réussie et prévoit une solution de repli."
            ]
          ]
        },
        {
          "t": "p",
          "text": "Après chaque test, contrôlez également ce qui a été transmis à l'équipe : compte rendu, rendez-vous réellement enregistré, message envoyé et bon destinataire."
        },
        {
          "t": "p",
          "text": "Le déploiement doit aussi intégrer les règles de protection des données : information des appelants, habilitations, conservation et éventuels enregistrements. Notre [guide sur le standard téléphonique IA et le RGPD](/ressources/standard-telephonique-ia-immobilier-rgpd) détaille les points à examiner."
        }
      ]
    },
    {
      "id": "7-mesurer-le-resultat-sur-le-travail-quotidien-de-l-agence",
      "h2": "7. Mesurer le résultat sur le travail quotidien de l'agence",
      "blocks": [
        {
          "t": "p",
          "text": "Il n'est pas nécessaire de construire un tableau de bord complexe pour vérifier qu'une automatisation est utile. Commencez par quelques questions opérationnelles :"
        },
        {
          "t": "ul",
          "items": [
            "Les appels entrants sont-ils bien pris en charge dans les plages prévues ?",
            "Les demandes vendeurs et acquéreurs arrivent-elles avec les informations nécessaires ?",
            "Les rendez-vous annoncés sont-ils réellement présents dans les agendas ?",
            "Les transferts et notifications arrivent-ils aux bons collaborateurs ?",
            "L'équipe passe-t-elle moins de temps à rappeler pour comprendre des demandes déjà exprimées ?"
          ]
        },
        {
          "t": "p",
          "text": "Ces vérifications permettent d'ajuster les scénarios. Par exemple, si les acquéreurs donnent rarement la référence d'une annonce, le standard doit apprendre à retrouver un bien à partir d'autres indices, sans inventer de correspondance."
        },
        {
          "t": "p",
          "text": "L'automatisation n'est donc pas un paramétrage figé : elle doit évoluer avec les annonces, les équipes, les horaires et les demandes réellement reçues."
        }
      ]
    },
    {
      "id": "faut-il-automatiser-soi-meme-ou-externaliser-tout-le-standar",
      "h2": "Faut-il automatiser soi-même ou externaliser tout le standard ?",
      "blocks": [
        {
          "t": "p",
          "text": "Deux approches existent."
        },
        {
          "t": "p",
          "text": "**Le libre-service** convient à une structure qui souhaite concevoir ses scénarios, connecter ses outils, tester les parcours et assurer elle-même la maintenance. Elle conserve davantage de travail technique et opérationnel en interne."
        },
        {
          "t": "p",
          "text": "**L'externalisation complète** convient à une agence qui veut déléguer ce fonctionnement. Le prestataire étudie les besoins, configure les parcours, connecte les outils, réalise les tests et suit les ajustements. L'agence garde la maîtrise de ses consignes et des décisions métier, sans avoir à administrer quotidiennement le standard."
        },
        {
          "t": "p",
          "text": "Rushh suit cette deuxième approche. **Rushh est une agence spécialisée dans l'externalisation des appels entrants immobiliers**, grâce à un standard téléphonique alimenté par intelligence artificielle, entièrement conçu et suivi par son équipe."
        },
        {
          "t": "p",
          "text": "Selon l'organisation, Rushh peut prendre en charge tous les appels entrants ou intervenir en renvoi, qualifier les vendeurs et acquéreurs, gérer des rendez-vous sur agendas connectés, transmettre les demandes et déclencher des SMS, e-mails ou actions via API. Le périmètre est défini avec chaque client, puis testé avant la mise en service."
        },
        {
          "t": "p",
          "text": "L'offre s'adresse aux agences indépendantes, mandataires, groupes d'agences, gestionnaires locatifs et syndics. Le principe reste le même : **le professionnel travaille sur ses dossiers ; Rushh s'occupe du téléphone entrant et des suites automatisables**."
        },
        {
          "t": "p",
          "text": "Pour découvrir le fonctionnement : [l'offre Rushh](/offre) et la [ligne de démonstration](/demonstrations)."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        },
        {
          "t": "p",
          "text": "Pour aller plus loin : [réceptionniste IA pour agence immobilière](/ressources/receptionniste-ia-agence-immobiliere) et [prise de rendez-vous par IA dans l'immobilier](/ressources/prise-rendez-vous-ia-immobilier)."
        }
      ]
    },
    {
      "id": "les-erreurs-frequentes-a-eviter",
      "h2": "Les erreurs fréquentes à éviter",
      "blocks": [
        {
          "t": "p",
          "text": "**Automatiser uniquement le décrochage.** Répondre sans qualifier ni transmettre une prochaine action laisse l'essentiel du travail à l'agence."
        },
        {
          "t": "p",
          "text": "**Poser trop de questions.** Un vendeur qui veut une estimation n'a pas besoin de remplir un dossier complet au téléphone. Il faut recueillir ce qui permet d'organiser la suite."
        },
        {
          "t": "p",
          "text": "**Promettre un rendez-vous sans vérifier l'agenda.** Une demande de visite et un rendez-vous confirmé sont deux choses différentes."
        },
        {
          "t": "p",
          "text": "**Utiliser des données immobilières non vérifiées.** Un bien vendu ou retiré ne doit pas être présenté comme disponible par défaut."
        },
        {
          "t": "p",
          "text": "**Oublier les exceptions.** Un transfert impossible, une API indisponible ou une demande sensible doivent avoir un parcours de repli."
        },
        {
          "t": "p",
          "text": "**Confondre automatisation et appels sortants.** Le sujet de cet article est l'accueil des **appels entrants**. Les confirmations et rappels peuvent être envoyés par message, sans transformer le service en prospection téléphonique automatisée."
        }
      ]
    },
    {
      "id": "questions-frequentes-sur-l-automatisation-des-appels-immobil",
      "h2": "Questions fréquentes sur l'automatisation des appels immobiliers",
      "blocks": [
        {
          "t": "h3",
          "text": "Peut-on automatiser tous les appels entrants d'une agence immobilière ?"
        },
        {
          "t": "p",
          "text": "On peut automatiser leur prise en charge et une grande partie de leur traitement, mais toutes les demandes ne doivent pas être résolues sans humain. Le périmètre dépend des règles de l'agence, des données disponibles et des intégrations autorisées. Les exceptions doivent être transférées ou transmises à l'équipe."
        },
        {
          "t": "h3",
          "text": "Est-il possible de conserver le numéro actuel de l'agence ?"
        },
        {
          "t": "p",
          "text": "Oui, lorsque la configuration téléphonique le permet, un renvoi d'appel peut diriger les appels du numéro existant vers le standard IA. Il faut tester le fonctionnement exact avec l'opérateur et l'organisation de l'agence."
        },
        {
          "t": "h3",
          "text": "L'IA peut-elle réserver directement des visites et des estimations ?"
        },
        {
          "t": "p",
          "text": "Oui, si les agendas sont connectés, les droits accordés et les règles de réservation définies. Elle peut aussi modifier ou annuler un rendez-vous lorsque le scénario le prévoit. Sinon, elle recueille une demande à confirmer."
        },
        {
          "t": "h3",
          "text": "Peut-elle répondre à une question sur une annonce immobilière ?"
        },
        {
          "t": "p",
          "text": "Oui, lorsqu'elle a accès à des données fiables sur le bien : logiciel immobilier, site, flux autorisé ou base de connaissances. Si l'information manque ou n'est pas à jour, elle doit demander une précision ou transmettre la question."
        },
        {
          "t": "h3",
          "text": "Peut-on envoyer automatiquement un SMS ou un e-mail après un appel ?"
        },
        {
          "t": "p",
          "text": "Oui. Une confirmation, un rappel, un compte rendu ou une notification peuvent être déclenchés selon le parcours prévu. Les réponses SMS et certains échanges WhatsApp peuvent aussi être traités lorsque les connexions et autorisations nécessaires sont en place."
        },
        {
          "t": "h3",
          "text": "Combien de temps faut-il pour mettre en place un standard IA ?"
        },
        {
          "t": "p",
          "text": "Cela dépend des scénarios, du nombre de collaborateurs, des données et des intégrations à réaliser. Pour une installation standard Rushh, le délai annoncé est de **cinq jours ouvrés après réception des éléments nécessaires** ; les développements particuliers sont évalués séparément."
        },
        {
          "t": "h3",
          "text": "Combien coûte l'automatisation des appels entrants avec Rushh ?"
        },
        {
          "t": "p",
          "text": "Le tarif dépend notamment du volume d'appels, des scénarios, des connexions et de l'organisation à couvrir. Rushh propose une **tarification sur devis**, incluant la conception, l'installation et le suivi du service selon le périmètre convenu."
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
