import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { FooterSection } from "@/components/sections/FooterSection";

const baseMetadata: Metadata = {
  title: "Conditions Générales de Vente | Rushh",
  description: "Conditions Générales de Vente de Rushh, version du 3 novembre 2026 : prestations, tarifs, durée, données, responsabilité.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rushh.fr/cgv",
  },
};

export const metadata: Metadata = withSocial(baseMetadata, "/cgv");

type Block =
  | { type: "p"; text: string }
  | { type: "p-strong"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

type Article = {
  num: number;
  title: string;
  /** Intitulé du chapitre qui s'ouvre avec cet article. */
  chapter?: string;
  blocks: Block[];
};

const VERSION = "3 novembre 2026";

const ARTICLES: Article[] = [
  {
    "num": 1,
    "title": "Identification du Prestataire et champ d'application",
    "blocks": [
      {
        "type": "p",
        "text": "Les présentes Conditions Générales de Vente (« CGV ») régissent les relations contractuelles entre :"
      },
      {
        "type": "p",
        "text": "Gaspard DAVID, entrepreneur individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au Registre du commerce et des sociétés de Bayonne sous le numéro 937 698 983, SIRET 937 698 983 00023, dont l'établissement est situé au 13 rue du Brise-Lames, 64600 Anglet, France, joignable à l'adresse électronique [hello@rushh.fr](mailto:hello@rushh.fr), ci-après dénommé « Rushh » ou le « Prestataire » ;"
      },
      {
        "type": "p",
        "text": "Et toute personne physique ou morale agissant à des fins professionnelles dans le secteur immobilier, établie en France et souscrivant aux prestations de Rushh, ci-après dénommée le « Client »."
      },
      {
        "type": "p",
        "text": "Les présentes CGV s'appliquent exclusivement aux relations entre professionnels. Elles ne sont pas destinées aux consommateurs."
      },
      {
        "type": "p",
        "text": "Elles ont pour objet de définir les conditions générales de conception, de configuration, de déploiement, d'exploitation et de maintenance des solutions de gestion téléphonique et d'automatisation proposées par Rushh."
      },
      {
        "type": "p",
        "text": "Elles s'appliquent sous réserve des dispositions légales impératives éventuellement applicables à certaines catégories de professionnels."
      },
      {
        "type": "p",
        "text": "Les présentes CGV s'appliquent aux nouveaux contrats dans lesquels elles sont intégrées ou expressément acceptées. Leur publication ou leur modification ne modifie pas rétroactivement les contrats antérieurement conclus."
      }
    ],
    "chapter": "CHAPITRE I — DISPOSITIONS GÉNÉRALES"
  },
  {
    "num": 2,
    "title": "Définitions",
    "blocks": [
      {
        "type": "p",
        "text": "Pour l'application des présentes CGV, les termes suivants ont la signification indiquée ci-dessous."
      },
      {
        "type": "p",
        "text": "**Contrat** : ensemble constitué du contrat commercial signé, des présentes CGV, des annexes applicables et des éventuels avenants acceptés par les Parties."
      },
      {
        "type": "p",
        "text": "**Service** : ensemble des prestations technologiques expressément convenues, comprenant notamment la gestion automatisée d'appels téléphoniques et les fonctionnalités d'automatisation associées."
      },
      {
        "type": "p",
        "text": "**Setup** : prestations initiales d'analyse, de conception, de configuration, de paramétrage, d'intégration et de préparation du Service."
      },
      {
        "type": "p",
        "text": "**Mise en Service** : activation effective du Service permettant de recevoir et traiter les appels réels du Client dans les conditions convenues."
      },
      {
        "type": "p",
        "text": "**Date de Début Contractuel** : date déterminée conformément à l'article 11, à compter de laquelle commencent l'engagement initial et la facturation récurrente."
      },
      {
        "type": "p",
        "text": "**Période de Facturation** : période mensuelle commençant à la Date de Début Contractuel, puis à ses dates anniversaires mensuelles."
      },
      {
        "type": "p",
        "text": "**Minute Consommée** : unité servant à mesurer la durée des communications effectivement prises en charge par l'infrastructure de Rushh, conformément à l'article 16."
      },
      {
        "type": "p",
        "text": "**Anomalie** : dysfonctionnement suffisamment documenté constituant un écart par rapport à une fonctionnalité expressément prévue au Contrat."
      },
      {
        "type": "p",
        "text": "**Anomalie Bloquante** : anomalie empêchant substantiellement l'utilisation d'une fonctionnalité essentielle du Service."
      },
      {
        "type": "p",
        "text": "**Données du Client** : données, contenus et informations traités dans le cadre du Service pour le compte du Client, sous réserve des droits applicables à ces éléments."
      },
      {
        "type": "p",
        "text": "**Jour ouvré** : jour du lundi au vendredi, à l'exclusion des jours fériés légaux en France."
      }
    ]
  },
  {
    "num": 3,
    "title": "Formation du Contrat et hiérarchie contractuelle",
    "blocks": [
      {
        "type": "p",
        "text": "Le Contrat est conclu par signature électronique ou par tout autre procédé d'acceptation exprès permettant d'en conserver une preuve fiable."
      },
      {
        "type": "p",
        "text": "Le signataire du Client déclare être dûment habilité à engager la personne physique ou morale qu'il représente."
      },
      {
        "type": "p",
        "text": "Le Contrat particulier précise notamment :"
      },
      {
        "type": "ul",
        "items": [
          "L'identité des Parties ;",
          "Le périmètre des prestations commandées ;",
          "Les fonctionnalités et intégrations prévues ;",
          "Le montant du Setup, lorsqu'il est applicable ;",
          "Le montant de l'abonnement mensuel ;",
          "Le volume de minutes incluses ;",
          "Le délai contractuel de déploiement ;",
          "Les éventuelles options ou conditions particulières."
        ]
      },
      {
        "type": "p",
        "text": "Les présentes CGV sont communiquées au Client avant la conclusion du Contrat, sur un support permettant leur consultation et leur conservation."
      },
      {
        "type": "p",
        "text": "Le Client reconnaît en avoir pris connaissance et les accepter dans le cadre de la signature du Contrat."
      },
      {
        "type": "p",
        "text": "Lorsque les prestations impliquent un traitement de données personnelles pour le compte du Client, les Parties concluent également, avant la mise en œuvre des traitements concernés, un accord de traitement des données conforme à la réglementation applicable."
      },
      {
        "type": "p",
        "text": "En cas de contradiction entre les documents contractuels :"
      },
      {
        "type": "ol",
        "items": [
          "Les stipulations particulières expressément acceptées dans le Contrat prévalent sur les présentes CGV pour les seuls points auxquels elles dérogent explicitement.",
          "L'accord de traitement des données personnelles (« DPA ») prévaut pour les questions relevant de son objet, sous réserve des dispositions légales impératives applicables.",
          "Les présentes CGV s'appliquent aux questions non réglées par les dispositions particulières prioritaires."
        ]
      },
      {
        "type": "p",
        "text": "Les engagements commerciaux spécifiques doivent figurer dans le Contrat ou faire l'objet d'un accord écrit permettant d'en établir le contenu et l'acceptation."
      }
    ]
  },
  {
    "num": 4,
    "title": "Objet et périmètre des prestations",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh conçoit, configure, déploie et assure l'exploitation et la maintenance de solutions technologiques personnalisées."
      },
      {
        "type": "p",
        "text": "Selon les prestations souscrites, le Service peut notamment comprendre :"
      },
      {
        "type": "ul",
        "items": [
          "La réception automatisée d'appels entrants ;",
          "L'accueil conversationnel des appelants ;",
          "L'identification et la qualification de leurs demandes ;",
          "La collecte d'informations et de coordonnées ;",
          "La prise, la modification ou l'annulation de rendez-vous ;",
          "La transmission de fiches prospects, messages ou comptes rendus ;",
          "Le transfert d'appels vers des interlocuteurs désignés ;",
          "L'interconnexion avec des agendas, CRM ou autres outils professionnels ;",
          "L'accès à la plateforme Rushh et aux services associés ;",
          "Des automatisations complémentaires expressément convenues."
        ]
      },
      {
        "type": "p",
        "text": "La prise de rendez-vous peut être comprise dans le prix de l'offre, sans être obligatoirement activée si le Client ne souhaite pas utiliser cette fonctionnalité. Sa non-activation volontaire n'entraîne pas automatiquement une réduction du prix convenu."
      },
      {
        "type": "p",
        "text": "Les fonctionnalités effectivement activées, les intégrations et les éventuelles exclusions sont déterminées dans le Contrat."
      },
      {
        "type": "p",
        "text": "Sauf accord écrit contraire, les appels sortants, nouvelles intégrations et prestations supplémentaires non expressément prévues ne sont pas compris dans le Service initialement souscrit."
      },
      {
        "type": "p",
        "text": "Rushh intervient en qualité de prestataire de services indépendant."
      },
      {
        "type": "p",
        "text": "Le Service constitue une solution d'assistance et d'automatisation. Il ne constitue pas une garantie de performance commerciale."
      },
      {
        "type": "p",
        "text": "Rushh ne garantit notamment aucun nombre déterminé d'appels, de prospects, de rendez-vous, de mandats, de ventes, de locations ou de chiffre d'affaires."
      }
    ]
  },
  {
    "num": 5,
    "title": "Obligations des Parties",
    "blocks": [
      {
        "type": "h3",
        "text": "5.1 — Obligations de Rushh"
      },
      {
        "type": "p",
        "text": "Rushh s'engage à :"
      },
      {
        "type": "ul",
        "items": [
          "Concevoir et configurer le Service conformément au périmètre contractuellement convenu ;",
          "Mettre en œuvre les moyens techniques et organisationnels adaptés à son fonctionnement ;",
          "Réaliser les tests et opérations de préparation convenus ;",
          "Assurer les prestations de maintenance prévues ;",
          "Prendre en charge les anomalies relevant de ses obligations ;",
          "Préserver la confidentialité des informations dans les conditions du Contrat."
        ]
      },
      {
        "type": "p",
        "text": "Rushh demeure responsable de l'exécution de ses propres obligations contractuelles."
      },
      {
        "type": "h3",
        "text": "5.2 — Obligations du Client"
      },
      {
        "type": "p",
        "text": "Le Client s'engage à :"
      },
      {
        "type": "ul",
        "items": [
          "Fournir des informations exactes, complètes et actualisées ;",
          "Communiquer les instructions et règles métier nécessaires ;",
          "Mettre à disposition les accès et autorisations techniques requis ;",
          "Coopérer aux opérations de configuration et de validation ;",
          "Vérifier les informations métier et les instructions utilisées par le Service ;",
          "Maintenir les abonnements et licences des outils tiers dont il a la charge ;",
          "Informer Rushh de toute modification susceptible d'affecter le fonctionnement du Service ;",
          "Respecter la réglementation applicable à son activité."
        ]
      },
      {
        "type": "p",
        "text": "Lorsque les scripts ou scénarios sont préparés par Rushh, leur contenu métier et les actions autorisées sont validés conjointement avec le Client."
      },
      {
        "type": "p",
        "text": "Le Client demeure responsable de ses décisions commerciales et de la conclusion de ses mandats, ventes, locations et autres engagements, sous réserve des obligations propres de Rushh."
      },
      {
        "type": "p",
        "text": "Le Client s'interdit toute utilisation illicite, frauduleuse ou trompeuse du Service."
      },
      {
        "type": "p",
        "text": "Il ne peut revendre, mutualiser ou mettre le Service à disposition d'un tiers en dehors du périmètre contractuellement autorisé sans accord écrit préalable de Rushh."
      }
    ]
  },
  {
    "num": 6,
    "title": "Intelligence artificielle et limites fonctionnelles",
    "blocks": [
      {
        "type": "p",
        "text": "Le Client reconnaît que le Service utilise des technologies d'intelligence artificielle permettant de produire des réponses et interactions automatisées."
      },
      {
        "type": "p",
        "text": "Malgré les opérations de conception, de configuration, de tests et de maintenance, ces technologies peuvent produire des réponses inexactes, incomplètes ou inadaptées."
      },
      {
        "type": "p",
        "text": "Rushh s'engage à exécuter les prestations convenues et à corriger les non-conformités relevant de ses obligations dans les conditions du Contrat."
      },
      {
        "type": "p",
        "text": "Les fonctionnalités et actions du Service sont limitées au périmètre expressément autorisé."
      },
      {
        "type": "p",
        "text": "Le Service ne peut prendre d'engagement juridique, financier ou commercial au nom du Client que dans les limites d'une autorisation écrite suffisamment précise et sous réserve des habilitations éventuellement nécessaires."
      },
      {
        "type": "p",
        "text": "Lorsque la nature d'une action l'exige, un mandat ou une autorisation juridiquement appropriée doit être établi."
      },
      {
        "type": "p",
        "text": "L'appelant est informé du caractère automatisé de l'interaction ou de l'utilisation de l'intelligence artificielle conformément aux obligations réglementaires applicables."
      },
      {
        "type": "p",
        "text": "Le Client s'engage à ne pas supprimer ni contourner les mécanismes d'information nécessaires."
      }
    ]
  },
  {
    "num": 7,
    "title": "Technologies et prestataires tiers",
    "blocks": [
      {
        "type": "p",
        "text": "Le fonctionnement du Service repose notamment sur des infrastructures informatiques, systèmes de télécommunication, logiciels, interfaces techniques et technologies d'intelligence artificielle."
      },
      {
        "type": "p",
        "text": "Certaines de ces technologies peuvent être exploitées par des prestataires tiers."
      },
      {
        "type": "p",
        "text": "Rushh peut modifier ou remplacer des composants techniques, sous réserve de préserver les fonctionnalités essentielles convenues et de respecter ses obligations légales et contractuelles."
      },
      {
        "type": "p",
        "text": "Rushh demeure responsable de l'exécution de ses propres obligations."
      },
      {
        "type": "p",
        "text": "Lorsqu'une interruption ou une dégradation résulte d'un événement affectant un service tiers, Rushh met en œuvre les diligences raisonnables relevant de son contrôle, notamment le diagnostic, les démarches auprès du prestataire concerné et la recherche d'une solution de contournement lorsqu'elle est techniquement réalisable."
      },
      {
        "type": "p",
        "text": "Le recours à des prestataires tiers ne constitue pas une exonération générale de responsabilité pour Rushh."
      },
      {
        "type": "p",
        "text": "Le recours à des sous-traitants intervenant dans le traitement de données personnelles est encadré conformément aux dispositions contractuelles et réglementaires applicables."
      }
    ]
  },
  {
    "num": 8,
    "title": "Configuration initiale et Setup",
    "blocks": [
      {
        "type": "p",
        "text": "Lorsque le Contrat prévoit des frais de Setup, leur montant est expressément indiqué dans les conditions particulières."
      },
      {
        "type": "p",
        "text": "Le Setup rémunère notamment :"
      },
      {
        "type": "ul",
        "items": [
          "L'analyse des besoins ;",
          "La préparation des scénarios conversationnels ;",
          "La configuration et le paramétrage ;",
          "Les intégrations initiales prévues ;",
          "Les tests et corrections préparatoires ;",
          "La préparation à la mise en production."
        ]
      },
      {
        "type": "p",
        "text": "Sauf stipulation contraire, le Setup est facturé à la signature et les travaux débutent après réception de son paiement et des éléments nécessaires au projet."
      },
      {
        "type": "p",
        "text": "Lorsque le Setup est offert ou compris dans une offre commerciale, cette condition est précisée dans le Contrat."
      },
      {
        "type": "p",
        "text": "La signature du Contrat engage les Parties dans les conditions convenues."
      },
      {
        "type": "p",
        "text": "L'abandon du projet à l'initiative du Client après signature ne constitue pas automatiquement une cause de résiliation sans conséquence financière."
      },
      {
        "type": "p",
        "text": "En cas d'abandon ou de rupture avant la mise en service, les sommes éventuellement dues sont déterminées en fonction de la cause de la rupture, des prestations effectivement réalisées, des frais légitimement engagés et des obligations contractuelles applicables."
      },
      {
        "type": "p",
        "text": "Aucune stipulation du présent article ne prive le Client des droits légaux dont il peut bénéficier, notamment en cas de manquement imputable à Rushh."
      }
    ],
    "chapter": "CHAPITRE II — CONFIGURATION, DÉPLOIEMENT ET FONCTIONNEMENT"
  },
  {
    "num": 9,
    "title": "Délais de déploiement",
    "blocks": [
      {
        "type": "p",
        "text": "Le délai de déploiement est fixé individuellement dans le Contrat."
      },
      {
        "type": "p",
        "text": "Lorsqu'un délai ferme est convenu, il commence à courir, sauf stipulation particulière, lorsque les conditions suivantes sont réunies :"
      },
      {
        "type": "ul",
        "items": [
          "Signature du Contrat ;",
          "Paiement du Setup exigible ;",
          "Transmission des informations nécessaires ;",
          "Mise à disposition des accès requis ;",
          "Communication des instructions métier indispensables ;",
          "Réalisation des autres prérequis identifiés par écrit."
        ]
      },
      {
        "type": "p",
        "text": "Tout retard imputable au Client entraîne un décalage du calendrier dans la mesure où il affecte effectivement les travaux."
      },
      {
        "type": "p",
        "text": "Lorsque le Client ne transmet pas les éléments nécessaires malgré une relance écrite, Rushh peut suspendre les travaux concernés jusqu'à la régularisation de la situation."
      },
      {
        "type": "p",
        "text": "Si cette absence de coopération persiste pendant plus de trente (30) jours calendaires après une relance suffisamment précise, les Parties examinent les conditions de poursuite du projet, sans préjudice des sommes correspondant aux prestations déjà réalisées et des recours contractuels applicables."
      },
      {
        "type": "p",
        "text": "Rushh informe le Client des difficultés susceptibles de compromettre le délai convenu et des mesures envisagées."
      },
      {
        "type": "p",
        "text": "En cas de dépassement imputable à Rushh, le Client conserve les recours prévus au Contrat et par le droit applicable, compte tenu notamment de l'importance du retard et des possibilités de remédiation."
      }
    ]
  },
  {
    "num": 10,
    "title": "Tests et validation",
    "blocks": [
      {
        "type": "p",
        "text": "Avant l'activation opérationnelle, Rushh organise une phase de tests portant sur les principales fonctionnalités convenues."
      },
      {
        "type": "p",
        "text": "Le Client est invité à vérifier notamment :"
      },
      {
        "type": "ul",
        "items": [
          "Les règles conversationnelles ;",
          "Les informations communiquées aux appelants ;",
          "La qualification des demandes ;",
          "Les fonctionnalités de rendez-vous lorsqu'elles sont activées ;",
          "Les transferts, notifications et intégrations convenus."
        ]
      },
      {
        "type": "p",
        "text": "Le Client dispose de cinq (5) jours ouvrés à compter de la demande écrite de validation pour communiquer ses observations."
      },
      {
        "type": "p",
        "text": "La validation du Service est constatée par écrit, notamment par courrier électronique."
      },
      {
        "type": "p",
        "text": "Les anomalies bloquantes documentées et relevant des obligations de Rushh sont corrigées avant la validation définitive."
      },
      {
        "type": "p",
        "text": "Les anomalies mineures n'empêchant pas substantiellement l'exploitation du Service peuvent être consignées et corrigées dans le cadre de la maintenance."
      },
      {
        "type": "p",
        "text": "En l'absence de réponse, Rushh peut adresser une relance écrite."
      },
      {
        "type": "p",
        "text": "Le silence du Client ne vaut pas, à lui seul, validation définitive de toutes les fonctionnalités."
      },
      {
        "type": "p",
        "text": "Les conséquences d'un blocage exclusivement imputable au Client sont déterminées conformément à l'article 11."
      }
    ]
  },
  {
    "num": 11,
    "title": "Mise en Service et début de l'abonnement",
    "blocks": [
      {
        "type": "p",
        "text": "La Date de Mise en Service correspond à la date à laquelle le Service est effectivement activé et opérationnel pour recevoir et traiter les appels réels du Client selon la configuration convenue."
      },
      {
        "type": "p",
        "text": "La réception d'un premier appel réel n'est pas nécessaire pour constater cette activation."
      },
      {
        "type": "p",
        "text": "Rushh confirme la Date de Mise en Service au Client par écrit."
      },
      {
        "type": "p",
        "text": "Sauf stipulation particulière, cette date constitue la Date de Début Contractuel."
      },
      {
        "type": "p",
        "text": "Elle marque le commencement de l'engagement initial de douze (12) mois et de la première Période de Facturation."
      },
      {
        "type": "p",
        "text": "Après validation écrite des tests, Rushh peut demander le paiement de la première mensualité avant l'activation opérationnelle du Service."
      },
      {
        "type": "p",
        "text": "Cette mensualité couvre la première période d'abonnement à compter de la Date de Début Contractuel. Elle ne rémunère pas rétroactivement une période de configuration antérieure."
      },
      {
        "type": "p",
        "text": "Lorsque le Service est techniquement prêt mais que son activation est empêchée exclusivement par un défaut de coopération du Client, Rushh peut notifier par écrit la disponibilité technique du Service et les actions restant à accomplir."
      },
      {
        "type": "p",
        "text": "Si le blocage persiste pendant quinze (15) jours calendaires à compter de la réception de cette notification, malgré une relance écrite, Rushh peut fixer une Date de Début Contractuel à l'expiration de ce délai, sous réserve que les fonctionnalités essentielles convenues soient effectivement prêtes à fonctionner et qu'aucune anomalie bloquante imputable à Rushh ne justifie le refus d'activation."
      },
      {
        "type": "p",
        "text": "Rushh informe expressément le Client de la date retenue et des conséquences sur la facturation et l'engagement."
      },
      {
        "type": "p",
        "text": "Cette faculté ne peut être exercée lorsque le Service n'est pas techniquement prêt ou lorsque le blocage résulte d'un manquement de Rushh."
      }
    ]
  },
  {
    "num": 12,
    "title": "Disponibilité, maintenance et support",
    "blocks": [
      {
        "type": "p",
        "text": "Le Service est conçu pour fonctionner vingt-quatre heures sur vingt-quatre et sept jours sur sept, selon la configuration et les plages d'utilisation choisies par le Client."
      },
      {
        "type": "p",
        "text": "Cette disponibilité théorique ne constitue pas une garantie d'absence totale d'interruption."
      },
      {
        "type": "p",
        "text": "Le support humain Rushh est assuré du lundi au vendredi, de 9 h à 20 h, heure de Paris, hors jours fériés légaux en France."
      },
      {
        "type": "p",
        "text": "Les demandes de support sont adressées à :"
      },
      {
        "type": "p",
        "text": "[hello@rushh.fr](mailto:hello@rushh.fr)"
      },
      {
        "type": "p",
        "text": "Rushh engage la prise en charge et le diagnostic initial des incidents correctement signalés dans un délai maximal de vingt-quatre (24) heures cumulées d'ouverture du support à compter de la réception du signalement."
      },
      {
        "type": "p",
        "text": "Le décompte de ce délai est suspendu en dehors des horaires d'ouverture du support."
      },
      {
        "type": "p",
        "text": "Cet engagement constitue un délai de prise en charge et non une garantie de résolution dans le même délai."
      },
      {
        "type": "p",
        "text": "Les incidents empêchant totalement le traitement des appels ou affectant substantiellement une fonctionnalité essentielle sont traités prioritairement."
      },
      {
        "type": "p",
        "text": "Les incidents signalés en dehors des horaires de support ne donnent pas lieu à une garantie d'intervention humaine immédiate."
      },
      {
        "type": "p",
        "text": "Des opérations de maintenance programmées ou urgentes peuvent temporairement affecter le Service."
      },
      {
        "type": "p",
        "text": "Lorsque cela est raisonnablement possible, Rushh informe préalablement le Client des opérations susceptibles de provoquer une interruption significative."
      }
    ]
  },
  {
    "num": 13,
    "title": "Garantie de démarrage et correction des anomalies",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh accorde au Client une garantie de démarrage d'une durée de quatorze (14) jours calendaires à compter de la Date de Mise en Service effective."
      },
      {
        "type": "p",
        "text": "Cette garantie porte sur le fonctionnement des fonctionnalités essentielles expressément prévues au Contrat."
      },
      {
        "type": "p",
        "text": "Elle ne constitue pas une garantie de résultats commerciaux."
      },
      {
        "type": "p",
        "text": "En cas de dysfonctionnement technique avéré empêchant l'exécution d'une fonctionnalité essentielle et relevant des obligations de Rushh, le Prestataire met en œuvre, sans frais supplémentaires, les corrections nécessaires dans un délai raisonnable."
      },
      {
        "type": "p",
        "text": "L'obligation de correction des non-conformités relevant de Rushh demeure applicable pendant toute la durée du Contrat, y compris après la période de garantie de démarrage."
      },
      {
        "type": "p",
        "text": "Lorsque, pendant cette période de quatorze jours, une indisponibilité totale du Service est constatée et directement imputable à un manquement de Rushh, le Client peut bénéficier d'un avoir d'abonnement proportionnel à la durée de cette indisponibilité, sans préjudice de ses droits légaux."
      },
      {
        "type": "p",
        "text": "Cette garantie ne s'applique pas aux appels non redirigés vers le Service en raison d'une absence ou d'une mauvaise configuration de la redirection relevant exclusivement du Client."
      },
      {
        "type": "p",
        "text": "Elle ne garantit ni la signature de mandats, ni la réalisation de ventes, ni la conclusion de locations, ni l'obtention d'un chiffre d'affaires déterminé."
      },
      {
        "type": "p",
        "text": "Les demandes d'amélioration ou d'évolution ne correspondant pas à une non-conformité des fonctionnalités convenues ne relèvent pas automatiquement de cette garantie."
      },
      {
        "type": "p",
        "text": "En cas de manquement grave et persistant à une obligation essentielle, les recours prévus à l'article 21 et par le droit applicable demeurent ouverts."
      }
    ]
  },
  {
    "num": 14,
    "title": "Ajustements et prestations complémentaires",
    "blocks": [
      {
        "type": "p",
        "text": "Les corrections nécessaires pour remédier aux anomalies relevant des obligations contractuelles de Rushh sont comprises dans les prestations de maintenance."
      },
      {
        "type": "p",
        "text": "Les ajustements mineurs de configuration raisonnablement nécessaires à la bonne exploitation du Service sont également compris, dans la limite du périmètre contractuellement convenu."
      },
      {
        "type": "p",
        "text": "Peuvent notamment relever de ces ajustements les modifications ponctuelles de formulations, d'informations métier ou de règles conversationnelles simples."
      },
      {
        "type": "p",
        "text": "Les nouvelles fonctionnalités, intégrations supplémentaires, modifications importantes du fonctionnement du Service et refontes significatives constituent des prestations complémentaires."
      },
      {
        "type": "p",
        "text": "Ces prestations font l'objet d'une proposition spécifique et, lorsqu'elles entraînent un coût supplémentaire, d'un accord écrit préalable du Client."
      },
      {
        "type": "p",
        "text": "L'absence de réalisation d'une évolution non comprise dans le périmètre contractuel ne constitue pas, à elle seule, une non-conformité du Service."
      }
    ]
  },
  {
    "num": 15,
    "title": "Tarifs et fiscalité",
    "blocks": [
      {
        "type": "p",
        "text": "Les tarifs applicables sont fixés dans le Contrat commercial."
      },
      {
        "type": "p",
        "text": "Ils comprennent, selon les prestations souscrites :"
      },
      {
        "type": "ul",
        "items": [
          "Les éventuels frais de Setup ;",
          "L'abonnement mensuel ;",
          "Le volume de minutes d'appel inclus ;",
          "Les éventuelles options ou prestations complémentaires."
        ]
      },
      {
        "type": "p",
        "text": "Les prix sont exprimés en euros hors taxes."
      },
      {
        "type": "p",
        "text": "À la date des présentes, Rushh bénéficie de la franchise en base de TVA prévue à l'article 293 B du Code général des impôts."
      },
      {
        "type": "p",
        "text": "TVA non applicable — article 293 B du CGI."
      },
      {
        "type": "p",
        "text": "En cas d'évolution du régime fiscal de Rushh rendant la TVA applicable, celle-ci sera facturée conformément aux dispositions légales en vigueur, sans modification du prix hors taxes convenu."
      },
      {
        "type": "p",
        "text": "Les tarifs fixes sont maintenus pendant la période initiale ferme de douze (12) mois, sauf accord écrit des Parties ou disposition légale applicable."
      }
    ],
    "chapter": "CHAPITRE III — TARIFS, CONSOMMATION ET PAIEMENT"
  },
  {
    "num": 16,
    "title": "Forfaits et décompte des minutes",
    "blocks": [
      {
        "type": "p",
        "text": "L'abonnement comprend un volume mensuel de minutes d'appel déterminé dans le Contrat."
      },
      {
        "type": "p",
        "text": "La consommation correspond à la durée totale des communications effectivement prises en charge par l'infrastructure Rushh au cours de la Période de Facturation."
      },
      {
        "type": "p",
        "text": "La durée d'une communication est mesurée depuis sa prise en charge par l'infrastructure Rushh jusqu'à la fin de cette prise en charge."
      },
      {
        "type": "p",
        "text": "Les communications transférées sont décomptées pour la durée pendant laquelle l'infrastructure Rushh continue effectivement à les prendre en charge."
      },
      {
        "type": "p",
        "text": "Les durées des différents appels sont additionnées, puis exprimées en minutes pour établir la consommation mensuelle."
      },
      {
        "type": "p",
        "text": "Les fractions de minute sont comptabilisées proportionnellement à leur durée réelle."
      },
      {
        "type": "p",
        "text": "Les appels ne sont pas systématiquement arrondis individuellement à la minute supérieure."
      },
      {
        "type": "p",
        "text": "Une même durée de communication n'est pas comptabilisée deux fois du seul fait d'un transfert interne ou de l'utilisation simultanée de plusieurs composants techniques."
      },
      {
        "type": "p",
        "text": "Le volume inclus est renouvelé au début de chaque nouvelle Période de Facturation."
      },
      {
        "type": "p",
        "text": "Les minutes incluses non consommées ne sont pas reportées sur la période mensuelle suivante."
      },
      {
        "type": "p",
        "text": "Elles ne donnent lieu à aucun remboursement, avoir ou compensation, sauf stipulation particulière expresse ou droit légal applicable."
      }
    ]
  },
  {
    "num": 17,
    "title": "Dépassements de consommation",
    "blocks": [
      {
        "type": "p",
        "text": "Lorsque la consommation mensuelle dépasse le volume de minutes inclus dans le Contrat, les minutes supplémentaires sont facturées au tarif de :"
      },
      {
        "type": "p",
        "text": "1,00 € hors taxes par minute supplémentaire."
      },
      {
        "type": "p",
        "text": "Le montant est calculé proportionnellement à la durée supplémentaire effectivement consommée."
      },
      {
        "type": "p",
        "text": "À titre d'exemple, un dépassement de cinq minutes et trente secondes correspond à 5,5 minutes supplémentaires, soit 5,50 € hors taxes."
      },
      {
        "type": "p",
        "text": "Les dépassements sont facturés à terme échu, lors de la facture suivante."
      },
      {
        "type": "p",
        "text": "Le dépassement du forfait n'entraîne pas automatiquement le passage à une formule d'abonnement supérieure."
      },
      {
        "type": "p",
        "text": "Sauf plafond de consommation expressément convenu, le Service continue de traiter les appels au-delà du volume inclus, les minutes supplémentaires étant facturées au tarif contractuel."
      },
      {
        "type": "p",
        "text": "Rushh adresse au Client des notifications d'information par courrier électronique lorsque la consommation atteint environ 80 % puis 100 % du volume mensuel inclus."
      },
      {
        "type": "p",
        "text": "Ces notifications sont établies à partir des données techniques de consommation disponibles et peuvent présenter un décalage lié au traitement ou à la transmission des informations."
      },
      {
        "type": "p",
        "text": "L'absence ou la réception tardive d'une notification ne supprime pas automatiquement les sommes dues au titre des communications effectivement réalisées, sans préjudice des recours du Client en cas de manquement de Rushh à ses obligations."
      },
      {
        "type": "p",
        "text": "Les factures ou relevés associés indiquent le volume inclus, la consommation totale, les éventuelles minutes supplémentaires et leur montant."
      },
      {
        "type": "p",
        "text": "Sur demande raisonnable du Client, Rushh peut communiquer un relevé technique exploitable des communications comptabilisées, dans le respect des règles de protection des données personnelles."
      }
    ]
  },
  {
    "num": 18,
    "title": "Facturation et modalités de paiement",
    "blocks": [
      {
        "type": "p",
        "text": "L'abonnement est facturé mensuellement et par avance."
      },
      {
        "type": "p",
        "text": "La première période commence à la Date de Début Contractuel définie à l'article 11."
      },
      {
        "type": "p",
        "text": "Les périodes suivantes commencent à chaque date anniversaire mensuelle."
      },
      {
        "type": "p",
        "text": "Lorsque le jour correspondant à la Date de Début Contractuel n'existe pas dans un mois donné, la date anniversaire de ce mois est fixée à son dernier jour."
      },
      {
        "type": "p",
        "text": "Les dépassements de minutes sont facturés à terme échu."
      },
      {
        "type": "p",
        "text": "Les prestations complémentaires sont facturées conformément aux conditions acceptées par les Parties."
      },
      {
        "type": "p",
        "text": "Le règlement peut être effectué par virement bancaire, prélèvement SEPA, paiement récurrent par carte bancaire ou tout autre moyen expressément accepté par Rushh et prévu au Contrat."
      },
      {
        "type": "p",
        "text": "Les moyens de paiement effectivement proposés sont précisés lors de la conclusion du Contrat."
      },
      {
        "type": "p",
        "text": "La mise en place d'un prélèvement SEPA suppose la fourniture d'un mandat valable et le respect des procédures applicables."
      },
      {
        "type": "p",
        "text": "Le Client s'engage à respecter les échéances de paiement et à communiquer les informations nécessaires au bon fonctionnement du moyen de règlement choisi."
      },
      {
        "type": "p",
        "text": "En cas de fin de Contrat prenant légalement ou contractuellement effet au cours d'une période mensuelle, les sommes correspondant à la période non due font l'objet d'une régularisation au prorata, sous réserve des autres créances et indemnités légalement exigibles."
      }
    ]
  },
  {
    "num": 19,
    "title": "Retards de paiement",
    "blocks": [
      {
        "type": "p",
        "text": "Toute facture non réglée à son échéance entraîne, de plein droit et sans rappel préalable, l'application des pénalités de retard prévues par les dispositions applicables du Code de commerce."
      },
      {
        "type": "p",
        "text": "Le taux des pénalités est fixé au taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de dix (10) points de pourcentage, selon les modalités légales de détermination du taux applicable."
      },
      {
        "type": "p",
        "text": "Tout professionnel en situation de retard de paiement est également redevable, lorsque les dispositions correspondantes lui sont applicables, d'une indemnité forfaitaire de quarante (40) euros pour frais de recouvrement."
      },
      {
        "type": "p",
        "text": "Lorsque les frais de recouvrement réellement engagés excèdent cette indemnité, une indemnisation complémentaire peut être demandée sur justification, conformément à la loi."
      },
      {
        "type": "p",
        "text": "En cas d'impayé persistant, Rushh peut adresser une mise en demeure écrite demandant la régularisation sous sept (7) jours calendaires à compter de sa réception."
      },
      {
        "type": "p",
        "text": "À défaut de régularisation dans ce délai, Rushh peut suspendre le Service conformément à l'article 23."
      },
      {
        "type": "p",
        "text": "La suspension ne constitue pas automatiquement une résiliation du Contrat."
      },
      {
        "type": "p",
        "text": "Les sommes contractuellement dues demeurent exigibles dans les limites du droit applicable."
      }
    ]
  },
  {
    "num": 20,
    "title": "Durée et engagement initial",
    "blocks": [
      {
        "type": "p",
        "text": "Le Contrat est conclu dès sa signature par les Parties."
      },
      {
        "type": "p",
        "text": "Il prévoit une période initiale ferme d'engagement de douze (12) mois à compter de la Date de Début Contractuel déterminée conformément à l'article 11."
      },
      {
        "type": "p",
        "text": "Cette période initiale constitue un élément déterminant de l'équilibre économique et tarifaire du Contrat."
      },
      {
        "type": "p",
        "text": "Pendant cette période, le Client ne dispose pas d'un droit général de résiliation anticipée pour simple convenance, sous réserve des droits légaux applicables et des exceptions expressément prévues au Contrat."
      },
      {
        "type": "p",
        "text": "À l'issue de la période initiale ferme, le Contrat se poursuit par périodes mensuelles successives, sans nouvel engagement ferme annuel."
      },
      {
        "type": "p",
        "text": "Après la période initiale, chaque Partie peut mettre fin au Contrat moyennant un préavis écrit de trente (30) jours calendaires."
      },
      {
        "type": "p",
        "text": "Le préavis court à compter de la réception de la notification."
      },
      {
        "type": "p",
        "text": "Une demande de résiliation peut être adressée avant la fin de la période initiale pour éviter la poursuite du Contrat au-delà de son terme."
      },
      {
        "type": "p",
        "text": "Sauf cause de résiliation anticipée légalement ou contractuellement applicable, la résiliation ne peut prendre effet avant l'expiration de la période initiale ferme."
      }
    ],
    "chapter": "CHAPITRE IV — DURÉE, RÉSILIATION ET FIN DU CONTRAT"
  },
  {
    "num": 21,
    "title": "Résiliation anticipée et manquement grave",
    "blocks": [
      {
        "type": "p",
        "text": "Pendant la période initiale ferme, le Client ne peut mettre fin unilatéralement au Contrat pour simple convenance sans respecter ses obligations contractuelles, sous réserve des dispositions impératives applicables."
      },
      {
        "type": "p",
        "text": "Rushh peut accepter exceptionnellement une résiliation anticipée pour convenance dans le cadre d'un accord écrit précisant sa date d'effet et ses éventuelles conséquences financières."
      },
      {
        "type": "p",
        "text": "Une demande de résiliation anticipée non acceptée ne libère pas, à elle seule, le Client de ses obligations."
      },
      {
        "type": "p",
        "text": "En cas de manquement grave d'une Partie à une obligation essentielle, l'autre Partie peut adresser une mise en demeure écrite décrivant précisément le manquement et demandant sa correction."
      },
      {
        "type": "p",
        "text": "Sauf urgence, impossibilité de remédier au manquement ou disposition légale imposant une autre solution, un délai de trente (30) jours calendaires à compter de la réception de la mise en demeure est accordé pour y remédier."
      },
      {
        "type": "p",
        "text": "Si le manquement grave persiste, la Partie lésée peut exercer les recours prévus par le Contrat et le droit applicable, y compris la résiliation lorsque ses conditions sont réunies."
      },
      {
        "type": "p",
        "text": "Les anomalies mineures, les demandes d'amélioration non comprises dans le Contrat ou l'absence de résultats commerciaux attendus ne constituent pas, à elles seules, des manquements graves justifiant une résiliation anticipée."
      },
      {
        "type": "p",
        "text": "La résiliation fondée sur un manquement grave imputable à Rushh n'entraîne aucune indemnité de résiliation pour convenance au profit du Prestataire."
      },
      {
        "type": "p",
        "text": "Les sommes correspondant aux prestations régulièrement réalisées et aux obligations légalement exigibles restent dues."
      }
    ]
  },
  {
    "num": 22,
    "title": "Modification du Service et des tarifs",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh peut faire évoluer les composants techniques du Service pour en assurer la maintenance, la sécurité et l'amélioration."
      },
      {
        "type": "p",
        "text": "Ces évolutions ne doivent pas réduire substantiellement les fonctionnalités essentielles contractuellement convenues sans accord du Client ou sans mécanisme contractuel légalement applicable."
      },
      {
        "type": "p",
        "text": "Toute modification substantielle du périmètre demandée par le Client peut donner lieu à un accord complémentaire et à une adaptation tarifaire."
      },
      {
        "type": "p",
        "text": "Pendant la période initiale de douze (12) mois, les tarifs fixes demeurent ceux convenus au Contrat, sauf accord écrit exprès ou exception légalement applicable."
      },
      {
        "type": "p",
        "text": "Après la période initiale, Rushh peut modifier les tarifs récurrents sous réserve d'en informer le Client au moins trente (30) jours calendaires avant leur entrée en vigueur."
      },
      {
        "type": "p",
        "text": "En cas de hausse tarifaire, le Client peut résilier le Contrat avant la date d'application du nouveau tarif, sans indemnité liée à cette résiliation, sous réserve du paiement des sommes déjà dues."
      },
      {
        "type": "p",
        "text": "Les options et changements de formule expressément acceptés suivent les conditions particulières convenues."
      }
    ]
  },
  {
    "num": 23,
    "title": "Suspension du Service",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh peut suspendre tout ou partie du Service lorsqu'une telle mesure est nécessaire et proportionnée, notamment :"
      },
      {
        "type": "ul",
        "items": [
          "En cas de défaut de paiement persistant après mise en demeure ;",
          "En cas d'utilisation manifestement illicite ou frauduleuse ;",
          "En cas de risque sérieux pour la sécurité des systèmes ou des données ;",
          "En cas d'injonction légalement applicable d'une autorité compétente ;",
          "Lorsque la poursuite du Service présente un risque grave pour des tiers ou pour l'intégrité des systèmes."
        ]
      },
      {
        "type": "p",
        "text": "Sauf urgence ou interdiction légale, Rushh informe préalablement le Client des motifs de la suspension et des mesures nécessaires pour y remédier."
      },
      {
        "type": "p",
        "text": "La suspension est limitée à ce qui est nécessaire au regard de sa cause."
      },
      {
        "type": "p",
        "text": "Lorsque les conditions ayant justifié la suspension cessent, Rushh procède au rétablissement du Service dans un délai raisonnable, sous réserve des contraintes techniques et contractuelles."
      },
      {
        "type": "p",
        "text": "La suspension ne constitue pas automatiquement une résiliation du Contrat et n'efface pas les obligations contractuelles valablement exigibles."
      }
    ]
  },
  {
    "num": 24,
    "title": "Conséquences de la fin du Contrat",
    "blocks": [
      {
        "type": "p",
        "text": "À la date effective de fin du Contrat, l'accès et l'exploitation du Service cessent, sauf accord particulier prévoyant une transition."
      },
      {
        "type": "p",
        "text": "Les factures échues, consommations effectuées et autres sommes légalement dues restent exigibles."
      },
      {
        "type": "p",
        "text": "Les éventuelles sommes payées pour des périodes non dues font l'objet d'une régularisation lorsque celle-ci est applicable."
      },
      {
        "type": "p",
        "text": "La cessation du Contrat n'entraîne aucun transfert automatique des technologies, logiciels, prompts, configurations internes ou méthodes appartenant à Rushh."
      },
      {
        "type": "p",
        "text": "Les conditions de restitution et de suppression des données sont définies conformément à l'article 29 et à l'accord de traitement des données applicable."
      },
      {
        "type": "p",
        "text": "Les obligations destinées à survivre à la fin du Contrat demeurent applicables dans les conditions prévues."
      }
    ]
  },
  {
    "num": 25,
    "title": "Numéros téléphoniques et transferts",
    "blocks": [
      {
        "type": "p",
        "text": "Le Service peut fonctionner à partir d'un numéro déjà utilisé par le Client ou d'un numéro mis à disposition dans le cadre de la prestation."
      },
      {
        "type": "p",
        "text": "Lorsque le Client utilise son propre numéro, il conserve les droits dont il dispose auprès de son opérateur et demeure responsable des abonnements et conditions de redirection qui lui incombent."
      },
      {
        "type": "p",
        "text": "Lorsque Rushh met à disposition un numéro téléphonique, les coûts ordinaires liés à sa mise à disposition et à son utilisation dans le périmètre convenu sont compris dans le prix de l'offre, sauf stipulation particulière expresse."
      },
      {
        "type": "p",
        "text": "Les frais relatifs à des usages spécifiques ou à des destinations particulières doivent être indiqués dans le Contrat lorsqu'ils ne sont pas compris dans le prix convenu."
      },
      {
        "type": "p",
        "text": "Les droits d'utilisation, de conservation et de transfert des numéros dépendent notamment de leur titulaire effectif, des conditions de l'opérateur et de la réglementation applicable."
      },
      {
        "type": "p",
        "text": "Aucune disposition des présentes CGV ne prive le Client des droits de portabilité légalement applicables."
      },
      {
        "type": "p",
        "text": "Les transferts d'appels vers un interlocuteur humain sont réalisés lorsque cette fonctionnalité est prévue et techniquement disponible."
      },
      {
        "type": "p",
        "text": "Les communications transférées sont prises en compte dans la consommation de minutes pendant la durée où l'infrastructure Rushh continue effectivement à les prendre en charge."
      }
    ],
    "chapter": "CHAPITRE V — TÉLÉPHONIE, DONNÉES ET CONFIDENTIALITÉ"
  },
  {
    "num": 26,
    "title": "Protection des données personnelles",
    "blocks": [
      {
        "type": "p",
        "text": "Les Parties s'engagent à respecter la réglementation applicable à la protection des données personnelles, notamment le règlement (UE) 2016/679 du 27 avril 2016 (« RGPD ») et la loi Informatique et Libertés modifiée."
      },
      {
        "type": "p",
        "text": "Pour les traitements réalisés exclusivement pour le compte du Client et selon ses instructions dans le cadre de la fourniture du Service, le Client agit en principe en qualité de responsable de traitement et Rushh en qualité de sous-traitant, sous réserve de la qualification résultant des opérations réellement effectuées."
      },
      {
        "type": "p",
        "text": "Lorsque Rushh intervient en qualité de sous-traitant, les traitements concernés doivent être encadrés, préalablement à leur mise en œuvre, par un accord contractuel conforme à l'article 28 du RGPD."
      },
      {
        "type": "p",
        "text": "Cet accord peut être annexé au Contrat ou intégré à celui-ci, sans obligation de publication sur le site internet de Rushh."
      },
      {
        "type": "p",
        "text": "Il précise notamment les obligations respectives des Parties, les catégories de données, les finalités, les personnes concernées, les durées de conservation, les mesures de sécurité, les sous-traitants ultérieurs, les éventuels transferts internationaux et les modalités de restitution ou de suppression."
      },
      {
        "type": "p",
        "text": "Rushh peut recourir à des sous-traitants techniques dans les conditions prévues par cet accord."
      },
      {
        "type": "p",
        "text": "Le Client demeure responsable des finalités et des bases légales des traitements qu'il détermine, ainsi que de l'information des personnes concernées lorsque cette obligation lui incombe."
      },
      {
        "type": "p",
        "text": "Rushh demeure responsable de ses propres obligations légales et contractuelles."
      },
      {
        "type": "p",
        "text": "Rushh peut également traiter certaines données en qualité de responsable de traitement indépendant pour ses propres opérations de gestion commerciale, contractuelle, comptable, d'assistance, de sécurité et de respect de ses obligations légales."
      }
    ]
  },
  {
    "num": 27,
    "title": "Enregistrements audio, transcriptions et conservation",
    "blocks": [
      {
        "type": "p",
        "text": "Le Service peut permettre l'enregistrement audio des conversations, leur transcription et la génération de résumés."
      },
      {
        "type": "p",
        "text": "L'activation de ces fonctionnalités est déterminée selon la configuration et les instructions documentées convenues avec le Client, dans le respect des obligations applicables."
      },
      {
        "type": "p",
        "text": "Lorsque les enregistrements audio sont activés, leur durée standard de conservation est de trente (30) jours, sous réserve de la nécessité de cette conservation et des conditions prévues par le DPA."
      },
      {
        "type": "p",
        "text": "La durée standard de conservation des transcriptions est également de trente (30) jours lorsqu'elles sont conservées, sous réserve des modalités particulières convenues et des obligations applicables."
      },
      {
        "type": "p",
        "text": "Les résumés et fiches prospects peuvent être soumis à des durées distinctes, déterminées selon leur finalité et les instructions documentées du Client."
      },
      {
        "type": "p",
        "text": "Une durée différente peut être définie sur instruction documentée du Client lorsqu'elle est justifiée, conforme au droit applicable et techniquement réalisable."
      },
      {
        "type": "p",
        "text": "À l'expiration des durées applicables, les données sont supprimées ou traitées conformément au DPA, sous réserve des obligations légales de conservation et des modalités documentées de suppression des sauvegardes."
      },
      {
        "type": "p",
        "text": "Les enregistrements et transcriptions peuvent être utilisés dans le cadre de l'exécution du Contrat pour analyser les incidents, corriger les anomalies et améliorer le paramétrage de l'agent du Client concerné, dans les limites des instructions et finalités autorisées."
      },
      {
        "type": "p",
        "text": "Toute utilisation pour des finalités propres distinctes, notamment l'entraînement ou l'amélioration de systèmes génériques, nécessite un fondement juridique et un encadrement appropriés."
      },
      {
        "type": "p",
        "text": "L'information des appelants concernant les traitements et les éventuels enregistrements est assurée conformément aux obligations respectives des Parties."
      }
    ]
  },
  {
    "num": 28,
    "title": "Confidentialité et sécurité",
    "blocks": [
      {
        "type": "p",
        "text": "Chaque Partie s'engage à préserver la confidentialité des informations non publiques obtenues à l'occasion de l'exécution du Contrat."
      },
      {
        "type": "p",
        "text": "Cette obligation concerne notamment les informations commerciales, financières, techniques, organisationnelles, les données de clientèle et les savoir-faire."
      },
      {
        "type": "p",
        "text": "Elle ne s'applique pas aux informations qui :"
      },
      {
        "type": "ul",
        "items": [
          "Sont devenues publiques sans manquement ;",
          "Étaient légitimement connues de la Partie réceptrice ;",
          "Ont été obtenues licitement auprès d'un tiers non soumis à une obligation de confidentialité ;",
          "Doivent être divulguées en application d'une obligation légale ou d'une décision d'une autorité compétente."
        ]
      },
      {
        "type": "p",
        "text": "Les informations confidentielles peuvent être communiquées aux personnes et prestataires habilités dans la mesure nécessaire à l'exécution du Contrat, sous réserve d'obligations appropriées de confidentialité."
      },
      {
        "type": "p",
        "text": "Cette obligation demeure applicable pendant toute la durée du Contrat et pendant trois (3) ans après sa cessation."
      },
      {
        "type": "p",
        "text": "Les informations constituant un secret des affaires demeurent protégées aussi longtemps qu'elles remplissent les conditions légales correspondantes."
      },
      {
        "type": "p",
        "text": "Rushh met en œuvre des mesures techniques et organisationnelles adaptées aux risques liés au Service et aux données traitées."
      },
      {
        "type": "p",
        "text": "Le Client s'engage à protéger les identifiants, comptes et accès relevant de sa responsabilité."
      },
      {
        "type": "p",
        "text": "Les incidents de sécurité et violations de données personnelles font l'objet des notifications et mesures de coopération prévues par le droit applicable et, le cas échéant, par le DPA."
      }
    ]
  },
  {
    "num": 29,
    "title": "Restitution et suppression des données",
    "blocks": [
      {
        "type": "p",
        "text": "À la cessation du Contrat, le Client peut demander la restitution des données qui lui reviennent et qui sont encore disponibles dans les systèmes placés sous le contrôle de Rushh."
      },
      {
        "type": "p",
        "text": "Cette demande peut être formulée avant la fin du Contrat ou dans un délai de trente (30) jours suivant sa cessation."
      },
      {
        "type": "p",
        "text": "Rushh met à disposition les données techniquement exportables dans un format électronique raisonnablement exploitable et couramment utilisé, sous réserve des droits des personnes concernées et des obligations applicables."
      },
      {
        "type": "p",
        "text": "L'export standard est réalisé sans facturation complémentaire."
      },
      {
        "type": "p",
        "text": "Selon les données effectivement conservées et les fonctionnalités utilisées, la restitution peut comprendre les fiches prospects, les informations recueillies, les résumés, les transcriptions et les enregistrements audio encore disponibles."
      },
      {
        "type": "p",
        "text": "La possibilité de demander un export pendant trente jours après la fin du Contrat ne constitue pas une obligation de conserver chaque donnée au-delà de sa durée de conservation normalement applicable."
      },
      {
        "type": "p",
        "text": "Le Client est invité à demander les informations nécessaires avant leur suppression."
      },
      {
        "type": "p",
        "text": "La restitution n'inclut pas les logiciels, prompts internes, méthodes, architectures, configurations propriétaires ni les autres éléments techniques appartenant à Rushh."
      },
      {
        "type": "p",
        "text": "Les opérations particulières de migration ou de réintégration dépassant l'export standard peuvent faire l'objet d'un accord complémentaire."
      },
      {
        "type": "p",
        "text": "Les données personnelles sont ensuite restituées ou supprimées conformément aux instructions légalement applicables et au DPA, sous réserve des obligations de conservation prévues par la loi."
      }
    ]
  },
  {
    "num": 30,
    "title": "Propriété intellectuelle",
    "blocks": [
      {
        "type": "p",
        "text": "Rushh conserve les droits qu'il détient sur ses technologies, méthodes, savoir-faire, logiciels, outils, bibliothèques, architectures, prompts, configurations génériques et éléments techniques réutilisables."
      },
      {
        "type": "p",
        "text": "Sauf cession écrite expresse, les configurations et développements réalisés dans le cadre du Service demeurent la propriété de Rushh, sous réserve des droits préexistants du Client et des tiers."
      },
      {
        "type": "p",
        "text": "Le Client bénéficie, pendant la durée du Contrat, d'un droit personnel, non exclusif et non transférable d'utilisation des éléments nécessaires à l'exploitation du Service dans le périmètre souscrit."
      },
      {
        "type": "p",
        "text": "Le Client ne peut reproduire, diffuser, revendre, transférer ou exploiter les éléments protégés appartenant à Rushh en dehors des autorisations contractuelles ou légales applicables."
      },
      {
        "type": "p",
        "text": "Les données, marques, contenus et documents fournis par le Client demeurent soumis aux droits de leurs titulaires respectifs."
      },
      {
        "type": "p",
        "text": "Le Client garantit disposer des droits nécessaires sur les éléments qu'il communique à Rushh pour l'exécution du Service."
      },
      {
        "type": "p",
        "text": "Aucune stipulation du Contrat n'opère un transfert automatique de propriété intellectuelle au profit du Client."
      }
    ],
    "chapter": "CHAPITRE VI — PROPRIÉTÉ INTELLECTUELLE, RESPONSABILITÉ ET LITIGES"
  },
  {
    "num": 31,
    "title": "Responsabilité",
    "blocks": [
      {
        "type": "p",
        "text": "Chaque Partie répond des conséquences de ses manquements contractuels dans les conditions prévues par le droit applicable."
      },
      {
        "type": "p",
        "text": "Rushh ne garantit aucun résultat commercial déterminé, notamment en matière de rendez-vous, de prospects, de mandats, de transactions ou de chiffre d'affaires."
      },
      {
        "type": "p",
        "text": "Le seul fait qu'un appel n'aboutisse pas à un résultat commercial ne constitue pas, en lui-même, un manquement de Rushh."
      },
      {
        "type": "p",
        "text": "Sous réserve des dispositions légales impératives, Rushh ne répond pas des préjudices indirects résultant d'un manquement contractuel."
      },
      {
        "type": "p",
        "text": "La qualification d'un préjudice direct ou indirect dépend de sa nature et des circonstances. Une perte commerciale ne saurait être considérée comme indirecte du seul fait de sa dénomination."
      },
      {
        "type": "p",
        "text": "Rushh ne saurait être tenu responsable d'un dysfonctionnement exclusivement imputable à des informations erronées fournies par le Client, à une intervention non autorisée ou à un système extérieur, lorsque ce dysfonctionnement ne résulte d'aucun manquement de Rushh à ses propres obligations."
      },
      {
        "type": "p",
        "text": "Dans les limites permises par la loi, la responsabilité contractuelle globale cumulée de Rushh est plafonnée :"
      },
      {
        "type": "ul",
        "items": [
          "Pour les faits générateurs intervenant pendant les douze premiers mois : au montant total hors taxes des mensualités fixes convenues pour la période initiale de douze mois, augmenté des frais de Setup contractuellement dus ;",
          "Pour les faits générateurs intervenant ultérieurement : au montant hors taxes payé ou payable par le Client au titre des douze mois précédant le fait générateur."
        ]
      },
      {
        "type": "p",
        "text": "Ces plafonds ne s'appliquent pas lorsque la loi interdit une limitation de responsabilité, notamment en cas de faute dolosive ou lourde, de dommage corporel imputable à Rushh ou dans les autres situations impérativement exclues d'une telle limitation."
      },
      {
        "type": "p",
        "text": "Aucune stipulation ne saurait avoir pour effet de priver de sa substance une obligation essentielle de Rushh."
      },
      {
        "type": "p",
        "text": "Les obligations relatives aux données personnelles et les responsabilités correspondantes demeurent soumises aux dispositions impératives applicables."
      }
    ]
  },
  {
    "num": 32,
    "title": "Force majeure, communications et litiges",
    "blocks": [
      {
        "type": "h3",
        "text": "32.1 — Force majeure"
      },
      {
        "type": "p",
        "text": "Aucune Partie ne peut être tenue responsable de l'inexécution d'une obligation lorsque celle-ci résulte d'un événement répondant aux conditions de la force majeure au sens de l'article 1218 du Code civil."
      },
      {
        "type": "p",
        "text": "Une panne, une cyberattaque ou une défaillance d'un prestataire tiers ne constitue pas automatiquement un cas de force majeure."
      },
      {
        "type": "p",
        "text": "L'événement doit satisfaire aux conditions légales applicables."
      },
      {
        "type": "p",
        "text": "La Partie empêchée informe l'autre Partie dans les meilleurs délais raisonnablement possibles."
      },
      {
        "type": "p",
        "text": "L'exécution des obligations affectées est suspendue dans les conditions prévues par la loi."
      },
      {
        "type": "p",
        "text": "Lorsque l'empêchement se prolonge pendant plus de trente (30) jours consécutifs et rend la poursuite du Contrat substantiellement impossible, chaque Partie peut exercer les droits de résiliation applicables."
      },
      {
        "type": "h3",
        "text": "32.2 — Communications et preuve"
      },
      {
        "type": "p",
        "text": "Les Parties reconnaissent la valeur probante des documents électroniques, signatures électroniques, courriels, journaux techniques et autres éléments conservés dans des conditions permettant raisonnablement d'en établir la fiabilité et l'intégrité."
      },
      {
        "type": "p",
        "text": "Les communications relatives à l'exécution courante du Contrat peuvent être effectuées par courrier électronique."
      },
      {
        "type": "p",
        "text": "Les mises en demeure, notifications de résiliation et communications produisant des conséquences juridiques importantes doivent être transmises par un moyen permettant d'établir leur contenu et leur réception."
      },
      {
        "type": "p",
        "text": "L'adresse de contact contractuel de Rushh est :"
      },
      {
        "type": "p",
        "text": "[hello@rushh.fr](mailto:hello@rushh.fr)"
      },
      {
        "type": "h3",
        "text": "32.3 — Divisibilité et absence de renonciation"
      },
      {
        "type": "p",
        "text": "Si une stipulation du Contrat est déclarée nulle, inapplicable ou réputée non écrite, les autres stipulations demeurent applicables dans les limites permises par la loi."
      },
      {
        "type": "p",
        "text": "Le fait pour une Partie de ne pas se prévaloir temporairement d'une stipulation ne constitue pas une renonciation définitive à l'exercer."
      },
      {
        "type": "h3",
        "text": "32.4 — Règlement amiable"
      },
      {
        "type": "p",
        "text": "En cas de différend relatif à la validité, à l'interprétation, à l'exécution ou à la cessation du Contrat, les Parties s'efforcent de rechercher une solution amiable."
      },
      {
        "type": "p",
        "text": "Cette démarche n'empêche pas les recours urgents, les mesures conservatoires ni les actions nécessaires à la préservation des droits et délais légaux."
      },
      {
        "type": "h3",
        "text": "32.5 — Droit applicable et juridiction compétente"
      },
      {
        "type": "p",
        "text": "Le Contrat est soumis au droit français."
      },
      {
        "type": "p-strong",
        "text": "LORSQUE LES PARTIES ONT TOUTES CONTRACTÉ EN QUALITÉ DE COMMERÇANT ET QUE LES CONDITIONS DE L'ARTICLE 48 DU CODE DE PROCÉDURE CIVILE SONT RÉUNIES, COMPÉTENCE TERRITORIALE EXCLUSIVE EST ATTRIBUÉE AU TRIBUNAL DE COMMERCE DE BAYONNE, SOUS RÉSERVE DES DISPOSITIONS IMPÉRATIVES APPLICABLES."
      },
      {
        "type": "p",
        "text": "Dans les autres cas, la juridiction territorialement et matériellement compétente est déterminée conformément aux règles de droit commun."
      }
    ]
  }
];

/** Rend **gras** et [texte](url) ; rien d'autre n'est interprété. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>);
    else out.push(<a key={k++} href={m[3]}>{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function ArticleBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{inline(block.text)}</p>;
    case "p-strong":
      return <p className="cgv-emphasis">{block.text}</p>;
    case "h3":
      return <h3 className="cgv-sub">{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ol>
      );
  }
}

export default function CGVPage() {
  return (
    <main className="cgv-page">
      <header className="nav">
        <div className="nav-inner" style={{ justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh immo" className="brand-logo" />
            <span>Rushh<span className="brand-immo">immo</span></span>
          </Link>
          <Link href="/" className="nav-link cgv-back-link">
            ← Retour au site
          </Link>
        </div>
      </header>

      <div className="wrap">
        <div className="cgv-hero">
          <span className="section-eyebrow">Légal</span>
          <h1 className="cgv-h1">
            Conditions Générales
            <br />
            de Vente
          </h1>
          <p className="cgv-updated">Version du {VERSION}</p>
        </div>

        <div className="cgv-layout">
          <nav className="cgv-toc" aria-label="Sommaire">
            <span className="cgv-toc-label">Sommaire</span>
            <div className="cgv-toc-list">
              {ARTICLES.map((a) => (
                <Fragment key={a.num}>
                  {a.chapter && <span className="cgv-toc-chapter">{a.chapter}</span>}
                  <a href={`#article-${a.num}`}>
                    {a.num}. {a.title}
                  </a>
                </Fragment>
              ))}
            </div>
          </nav>

          <div className="cgv-content">
            {ARTICLES.map((a) => (
              <Fragment key={a.num}>
                {a.chapter && <p className="cgv-chapter">{a.chapter}</p>}
                <section id={`article-${a.num}`} className="cgv-article">
                  <h2>
                    Article {a.num} — {a.title}
                  </h2>
                  {a.blocks.map((block, i) => (
                    <ArticleBlock key={i} block={block} />
                  ))}
                </section>
              </Fragment>
            ))}
            <p className="cgv-closing">
              Les présentes CGV s&apos;appliquent aux nouveaux contrats professionnels qui les intègrent. Elles ne modifient pas rétroactivement les contrats antérieurement conclus.
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
