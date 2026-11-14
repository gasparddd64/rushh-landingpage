import type { Article } from "./types";

/** Texte du lot SEO/GEO n° 2 (article 11) : à reproduire tel quel, voir `bare` dans types.ts. */
export const smsConfirmationVisite: Article = {
  "path": "/ressources/sms-confirmation-visite-immobiliere",
  "bare": true,
  "category": "guides",
  "cover": {
    "src": "/ressources/sms-confirmation-visite-immobiliere.png",
    "width": 1600,
    "height": 840,
    "alt": "Illustration : les messages SMS d'une visite immobilière, de la confirmation au rappel, au report et à l'annulation, envoyés au bon moment."
  },
  "title": "SMS de confirmation de visite immobilière : modèles | Rushh",
  "description": "Modèles de SMS pour confirmer une visite, rappeler, reporter ou annuler un rendez-vous, et méthode pour les automatiser sans information erronée.",
  "shortTitle": "SMS de confirmation de visite immobilière",
  "summary": "Huit modèles de SMS et une méthode pour les automatiser sans doublon ni information erronée.",
  "h1": "SMS de confirmation de visite immobilière : modèles et méthode pour les automatiser",
  "answer": "Un SMS de confirmation de visite immobilière doit indiquer le bien ou le lieu de rendez-vous, la date, l'heure, l'identité de l'agence et un moyen clair de signaler un empêchement. Il doit être envoyé uniquement après validation réelle du créneau.",
  "datePublished": "2026-11-14",
  "dateModified": "2026-11-14",
  "intro": [
    {
      "t": "p",
      "text": "Un acquéreur réserve une visite pour jeudi. Le négociateur l'a bien notée dans son agenda, mais le client a retenu « jeudi après-midi » sans être certain de l'heure. Un SMS de confirmation évite une partie de ces ambiguïtés, à condition qu'il soit exact, lisible et envoyé au bon moment."
    },
    {
      "t": "p",
      "text": "Pour une agence, **automatiser les SMS de confirmation de visite immobilière** ne consiste pas à multiplier les messages. Il s'agit de relier un événement réel — rendez-vous créé, modifié, annulé ou à rappeler — à une communication utile pour le client et pour l'équipe."
    },
    {
      "t": "p",
      "text": "Voici des modèles prêts à adapter et une méthode pour éviter les confirmations contradictoires."
    }
  ],
  "sections": [
    {
      "id": "que-doit-contenir-un-sms-de-confirmation-de-visite",
      "h2": "Que doit contenir un SMS de confirmation de visite ?",
      "blocks": [
        {
          "t": "p",
          "text": "Un bon message répond à cinq questions :"
        },
        {
          "t": "ol",
          "items": [
            "**Qui écrit ?** Le nom de l'agence ou du professionnel.",
            "**Quel rendez-vous ?** Visite, estimation ou échange.",
            "**Quand ?** Date, heure et, si nécessaire, fuseau horaire.",
            "**Où ?** Adresse ou point de rendez-vous validé, sans divulguer inutilement des informations privées.",
            "**Que faire en cas d'empêchement ?** Répondre au message si ce canal est réellement suivi, ou utiliser un moyen de contact indiqué."
          ]
        },
        {
          "t": "p",
          "text": "La clarté compte davantage que le ton commercial. Un SMS de confirmation n'a pas besoin de présenter l'agence, de proposer d'autres biens ou de contenir plusieurs appels à l'action."
        }
      ]
    },
    {
      "id": "8-modeles-de-sms-immobiliers-a-adapter",
      "h2": "8 modèles de SMS immobiliers à adapter",
      "blocks": [
        {
          "t": "p",
          "text": "Les textes entre crochets sont des variables à remplacer par des données **vérifiées**. Ces messages sont des exemples fictifs."
        },
        {
          "t": "h3",
          "text": "1. Confirmation de visite d'appartement"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], votre visite de l'appartement [référence ou adresse autorisée] est confirmée le [jour] à [heure]. Rendez-vous [lieu]. [Agence]. Pour un empêchement : [contact]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** après réservation effective du créneau et confirmation que le bien peut être visité."
        },
        {
          "t": "p",
          "text": "**Attention :** si l'adresse exacte ne doit être communiquée qu'après une vérification particulière, utilisez un point de rendez-vous autorisé plutôt que de l'insérer automatiquement."
        },
        {
          "t": "h3",
          "text": "2. Confirmation de visite de maison"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], nous confirmons votre visite de la maison [référence] le [jour] à [heure]. Point de rencontre : [lieu validé]. À bientôt, [Agence]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** lorsque le lieu et l'horaire sont validés par le négociateur ou son agenda."
        },
        {
          "t": "h3",
          "text": "3. Confirmation de rendez-vous d'estimation vendeur"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], votre rendez-vous d'estimation avec [Agence / conseiller] est confirmé le [jour] à [heure], à [adresse du bien si approprié]. Pour toute modification : [contact]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** après accord sur un rendez-vous d'estimation. Ne promettez pas dans le SMS une valeur de bien ou un résultat commercial."
        },
        {
          "t": "h3",
          "text": "4. Rappel de visite"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Rappel [Agence] : votre visite de [bien/référence] est prévue demain à [heure], au [lieu]. Si vous ne pouvez plus venir, merci de nous prévenir via [canal suivi]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** à un délai de rappel défini par l'agence, uniquement si le rendez-vous est toujours actif."
        },
        {
          "t": "h3",
          "text": "5. Confirmation d'un changement d'horaire"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], votre visite de [bien/référence] est désormais prévue le [nouveau jour] à [nouvelle heure]. L'ancien créneau est annulé. [Agence]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** après modification effective du rendez-vous, avec l'accord requis."
        },
        {
          "t": "h3",
          "text": "6. Annulation de visite par l'agence"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], la visite prévue le [jour] à [heure] pour [bien/référence] ne pourra pas avoir lieu. Nous sommes désolés. [Agence] vous propose de reprendre contact via [canal suivi]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** après validation de l'annulation. Ne laissez pas un ancien rappel automatique partir après ce message."
        },
        {
          "t": "h3",
          "text": "7. Demande de confirmation, sans rendez-vous encore réservé"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], nous avons bien reçu votre demande de visite pour [bien/référence]. Le créneau n'est pas encore confirmé. [Agence] revient vers vous via [canal prévu]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** si la demande est enregistrée mais que l'agenda, le bien ou le négociateur n'a pas encore validé la réservation."
        },
        {
          "t": "p",
          "text": "**Point crucial :** ne remplacez pas « demande reçue » par « visite confirmée ». Ces deux statuts ne sont pas équivalents."
        },
        {
          "t": "h3",
          "text": "8. Après un rendez-vous manqué"
        },
        {
          "t": "callout",
          "kind": "example",
          "text": "Bonjour [Prénom], nous n'avons pas pu réaliser la visite prévue aujourd'hui pour [bien/référence]. Si vous souhaitez reprogrammer un créneau, contactez [Agence] via [canal suivi]."
        },
        {
          "t": "p",
          "text": "**Quand l'utiliser :** seulement après vérification du statut réel. Une absence peut aussi provenir d'une erreur d'horaire, d'adresse ou de transmission côté agence."
        }
      ]
    },
    {
      "id": "quel-est-le-meilleur-moment-pour-envoyer-chaque-message",
      "h2": "Quel est le meilleur moment pour envoyer chaque message ?",
      "blocks": [
        {
          "t": "p",
          "text": "Il n'existe pas d'horaire universel. Le bon déclencheur est **l'état réel du rendez-vous**."
        },
        {
          "t": "table",
          "caption": "",
          "head": [
            "Événement",
            "Message possible",
            "Vérification indispensable"
          ],
          "rows": [
            [
              "Création confirmée",
              "SMS de confirmation",
              "Créneau enregistré et bien disponible"
            ],
            [
              "Création en attente",
              "Accusé de réception, pas confirmation",
              "Statut « à confirmer » clairement indiqué"
            ],
            [
              "Rappel programmé",
              "SMS de rappel",
              "Rendez-vous toujours actif"
            ],
            [
              "Déplacement validé",
              "Nouveau SMS avec date/heure",
              "Ancien créneau annulé ou remplacé"
            ],
            [
              "Annulation",
              "SMS d'annulation",
              "Suppression des rappels futurs"
            ],
            [
              "Absence constatée",
              "Message de reprogrammation",
              "Vérification humaine ou événement fiable"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Un rappel envoyé automatiquement pour une visite annulée est plus dommageable qu'une absence de rappel : il donne au client une information fausse et peut le déplacer inutilement."
        }
      ]
    },
    {
      "id": "comment-automatiser-les-sms-sans-creer-de-doublons",
      "h2": "Comment automatiser les SMS sans créer de doublons",
      "blocks": [
        {
          "t": "h3",
          "text": "1. Utiliser une seule source fiable pour le statut"
        },
        {
          "t": "p",
          "text": "L'automatisation doit savoir si le rendez-vous est **demandé**, **confirmé**, **modifié**, **annulé** ou **terminé**. Si plusieurs outils peuvent modifier l'agenda, il faut définir quelle source fait autorité et comment les changements sont synchronisés."
        },
        {
          "t": "h3",
          "text": "2. Séparer les événements"
        },
        {
          "t": "p",
          "text": "La confirmation n'est pas un rappel ; une modification n'est pas une nouvelle réservation ; une demande de visite n'est pas une visite acceptée. Chaque événement doit avoir son modèle et ses conditions."
        },
        {
          "t": "h3",
          "text": "3. Vérifier le destinataire"
        },
        {
          "t": "p",
          "text": "Un numéro transmis par la téléphonie peut être disponible automatiquement, mais il faut vérifier qu'il est exploitable pour l'envoi et qu'il correspond bien au contact concerné lorsque le contexte l'exige. En cas d'incertitude, ne pas envoyer d'informations sur un dossier à un numéro non vérifié."
        },
        {
          "t": "h3",
          "text": "4. Prévoir un comportement en cas d'échec"
        },
        {
          "t": "p",
          "text": "Le SMS peut ne pas être délivré, arriver tard ou être lu après un changement. Une confirmation importante ne doit pas reposer sur l'hypothèse que chaque message sera reçu instantanément. Prévoyez un suivi de statut et un canal de repli adapté."
        },
        {
          "t": "h3",
          "text": "5. Gérer les réponses si elles sont activées"
        },
        {
          "t": "p",
          "text": "Si le message indique « répondez à ce SMS », il faut qu'un dispositif traite réellement les réponses. Sinon, mieux vaut donner un moyen de contact suivi. Les réponses peuvent déclencher une demande de report, mais un nouveau créneau ne doit pas être annoncé comme réservé sans validation."
        }
      ]
    },
    {
      "id": "exemple-de-l-appel-entrant-au-sms-de-visite",
      "h2": "Exemple : de l'appel entrant au SMS de visite",
      "blocks": [
        {
          "t": "p",
          "text": "**Scénario fictif :** un acquéreur appelle l'agence pour un appartement référencé [A123]."
        },
        {
          "t": "ol",
          "items": [
            "Le standard accueille l'appel et identifie le bien.",
            "Il vérifie les informations accessibles et les règles de visite.",
            "Il consulte les disponibilités autorisées du négociateur.",
            "L'acquéreur choisit un créneau réellement disponible.",
            "Le rendez-vous est enregistré et son statut devient « confirmé ».",
            "Un SMS de confirmation est envoyé avec la date, l'heure et le lieu validé.",
            "Si la visite est déplacée, le système met à jour l'événement et évite l'envoi de l'ancien rappel."
          ]
        },
        {
          "t": "p",
          "text": "Ce parcours exige une configuration cohérente des agendas, des événements et des modèles de messages. Ce n'est pas un simple envoi automatique déclenché par la présence d'un numéro."
        },
        {
          "t": "p",
          "text": "Pour comprendre la réservation elle-même, consultez [comment une IA prend des rendez-vous immobiliers](/ressources/prise-rendez-vous-ia-immobilier). Le présent article traite spécifiquement **la communication après réservation**."
        }
      ]
    },
    {
      "id": "les-erreurs-les-plus-frequentes-dans-les-sms-immobiliers",
      "h2": "Les erreurs les plus fréquentes dans les SMS immobiliers",
      "blocks": [
        {
          "t": "p",
          "text": "**Une adresse inexacte ou trop détaillée.** Vérifiez le lieu de rendez-vous et les consignes de confidentialité."
        },
        {
          "t": "p",
          "text": "**Une date sans jour de semaine.** « 14/11 à 15 h » peut être moins lisible que « samedi 14 novembre à 15 h », à condition que la date soit calculée correctement."
        },
        {
          "t": "p",
          "text": "**Un créneau annoncé avant confirmation.** La demande d'un client ne vaut pas réservation."
        },
        {
          "t": "p",
          "text": "**Un rappel envoyé après annulation.** Le système doit tenir compte du statut actuel, pas seulement d'un ancien déclencheur."
        },
        {
          "t": "p",
          "text": "**Un SMS auquel personne ne répond.** N'invitez pas le client à répondre si le canal n'est pas suivi."
        },
        {
          "t": "p",
          "text": "**Des informations commerciales ajoutées par défaut.** Une confirmation de rendez-vous doit rester centrée sur le service demandé. Les messages promotionnels relèvent d'autres règles et ne doivent pas être confondus avec une notification transactionnelle."
        }
      ]
    },
    {
      "id": "quelles-precautions-pour-les-donnees-personnelles-et-les-sms",
      "h2": "Quelles précautions pour les données personnelles et les SMS ?",
      "blocks": [
        {
          "t": "p",
          "text": "Une agence manipule des coordonnées et des informations liées à des projets immobiliers. Les SMS doivent donc être limités aux données nécessaires : date, heure, objet, lieu autorisé et contact de l'agence. Évitez d'inclure des informations financières, des documents personnels ou des détails confidentiels du dossier."
        },
        {
          "t": "p",
          "text": "La base juridique, l'information des personnes, les modalités d'opposition et les obligations applicables dépendent du type de message et de son usage. **Une confirmation liée à un rendez-vous demandé ne doit pas être transformée discrètement en campagne de prospection.** Faites vérifier vos pratiques de protection des données et vos modèles par les personnes compétentes avant mise en production."
        }
      ]
    },
    {
      "id": "comment-rushh-peut-automatiser-ces-confirmations",
      "h2": "Comment Rushh peut automatiser ces confirmations",
      "blocks": [
        {
          "t": "p",
          "text": "Rushh prend en charge les **appels entrants** des agences immobilières et peut, selon la configuration, réserver des rendez-vous dans des agendas connectés puis envoyer des confirmations et rappels par SMS ou e-mail."
        },
        {
          "t": "p",
          "text": "Son équipe définit les scénarios, les événements déclencheurs, les modèles de messages et les règles de suivi. Les échanges SMS et les modifications de rendez-vous peuvent être prévus selon le périmètre technique et les autorisations disponibles. Les intégrations Google Calendar, Outlook et les connexions métiers sont étudiées dans le cadre du projet."
        },
        {
          "t": "p",
          "text": "Le principe reste simple : **un SMS doit refléter un rendez-vous réel, pas seulement une conversation téléphonique**."
        },
        {
          "t": "p",
          "text": "Les messages envoyés par Rushh sont liés à un rendez-vous ou à un appel entrant : confirmations, rappels et informations pratiques. Il ne s'agit pas de SMS de prospection commerciale, et les appels sortants automatisés ne font pas partie de l'offre de base."
        },
        {
          "t": "p",
          "text": "Pour aller plus loin : [agendas Google Calendar et Outlook pour un standard IA](/ressources/standard-ia-google-agenda-outlook-immobilier) et [standard téléphonique IA et RGPD](/ressources/standard-telephonique-ia-immobilier-rgpd)."
        }
      ]
    },
    {
      "id": "faq-sms-de-visite-immobiliere",
      "h2": "FAQ — SMS de visite immobilière",
      "blocks": [
        {
          "t": "h3",
          "text": "Quel SMS envoyer pour confirmer une visite immobilière ?"
        },
        {
          "t": "p",
          "text": "Indiquez le nom de l'agence, le bien ou sa référence, la date, l'heure, le lieu de rendez-vous validé et un moyen de signaler un empêchement. N'envoyez la confirmation qu'après réservation réelle."
        },
        {
          "t": "h3",
          "text": "Peut-on envoyer automatiquement un rappel la veille ?"
        },
        {
          "t": "p",
          "text": "Oui, si le rendez-vous est toujours actif et si le rappel est configuré pour éviter les annulations et changements d'horaire. Le délai de rappel doit être adapté à l'organisation de l'agence."
        },
        {
          "t": "h3",
          "text": "Peut-on confirmer une estimation immobilière par SMS ?"
        },
        {
          "t": "p",
          "text": "Oui, avec un modèle distinct précisant qu'il s'agit d'un rendez-vous d'estimation, la date, l'heure et le lieu convenu. Ne promettez pas une valeur de bien ou un résultat."
        },
        {
          "t": "h3",
          "text": "Que faire si le client répond « je ne peux plus venir » ?"
        },
        {
          "t": "p",
          "text": "Si les réponses SMS sont réellement prises en charge, elles peuvent déclencher une procédure de report ou de transmission. Le nouveau rendez-vous ne doit être confirmé qu'après vérification du créneau."
        },
        {
          "t": "h3",
          "text": "Les SMS de confirmation sont-ils des SMS publicitaires ?"
        },
        {
          "t": "p",
          "text": "Un message purement destiné à confirmer une prestation demandée n'a pas la même finalité qu'une publicité. Les obligations exactes dépendent du contenu et du contexte ; il faut éviter de mélanger les deux usages et vérifier la conformité applicable. Chez Rushh, les messages envoyés sont liés à un rendez-vous ou à un appel entrant, et non à une prospection commerciale."
        }
      ]
    },
    {
      "id": "confirmer-les-rendez-vous-sans-ajouter-une-tache-a-l-equipe",
      "h2": "Confirmer les rendez-vous sans ajouter une tâche à l'équipe",
      "blocks": [
        {
          "t": "p",
          "text": "Avec Rushh, l'accueil téléphonique, la prise de rendez-vous et les confirmations peuvent s'inscrire dans un même parcours géré par l'équipe Rushh. Le dispositif est personnalisé pour votre agence, avec une tarification **sur devis**."
        },
        {
          "t": "button",
          "label": "Tester le standard",
          "href": "/demonstrations"
        },
        {
          "t": "p",
          "text": "[Découvrir l'offre](/offre)"
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
