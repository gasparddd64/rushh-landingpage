import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Rushh",
  description: "Consultez les Conditions Générales de Vente de Rushh.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rushh.fr/cgv",
  },
};

type Block =
  | { type: "p"; text: string }
  | { type: "p-strong"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "p-email"; before: string; email: string };

type Article = {
  num: number;
  title: string;
  blocks: Block[];
};

const ARTICLES: Article[] = [
  {
    num: 1,
    title: "Identité du prestataire et objet",
    blocks: [
      { type: "p", text: "Les présentes Conditions Générales de Vente (« CGV ») régissent les relations contractuelles entre Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro 937 698 983, SIRET 937 698 983 00023, dont l’établissement est situé 13 Rue du Brise Lames, 64600 Anglet, ci-après « Rushh », et tout client agissant à des fins professionnelles, ci-après le « Client »." },
      { type: "p", text: "Rushh fournit au Client un standard téléphonique utilisant notamment des technologies d’intelligence artificielle, conçu et configuré selon le fonctionnement du Client et destiné notamment à assurer la réception d’appels entrants, la qualification de prospects, la prise de rendez-vous et la transmission d’informations au Client." },
      { type: "p", text: "Les présentes CGV, le devis ou bon de commande accepté par le Client et, lorsqu’il est applicable, l’accord relatif au traitement des données personnelles (« DPA »), constituent ensemble le contrat conclu entre les Parties." },
      { type: "p", text: "En cas de contradiction, le document particulier signé par les Parties prévaut sur les présentes CGV pour les seules stipulations auxquelles il déroge expressément." },
    ],
  },
  {
    num: 2,
    title: "Description du Service",
    blocks: [
      { type: "p", text: "Rushh conçoit, configure, déploie et maintient pour le Client un standard téléphonique personnalisé, pouvant notamment assurer :" },
      {
        type: "ul",
        items: [
          "la réception automatisée d’appels entrants ;",
          "la qualification des appelants et prospects ;",
          "la collecte des informations prévues dans le scénario défini avec le Client ;",
          "la prise de rendez-vous, sous réserve de la disponibilité et du bon fonctionnement des outils connectés ;",
          "la transmission de fiches prospects ;",
          "l’interconnexion, lorsque cela est techniquement possible, avec l’agenda, le CRM ou d’autres outils du Client ;",
          "le support relatif au fonctionnement du Service.",
        ],
      },
      { type: "p", text: "Le périmètre précis, les fonctionnalités, les volumes inclus et, le cas échéant, les prestations exclues sont déterminés dans le devis ou bon de commande." },
      { type: "p", text: "Le Service constitue un outil d’assistance et d’automatisation. Rushh ne garantit aucun nombre de prospects, de rendez-vous, de ventes, de mandats, de contrats ou de chiffre d’affaires." },
    ],
  },
  {
    num: 3,
    title: "Technologies et prestataires tiers",
    blocks: [
      { type: "p", text: "Le Client reconnaît que le Service repose en partie sur des technologies, infrastructures, services de télécommunication, modèles d’intelligence artificielle, API, logiciels et prestataires tiers." },
      { type: "p", text: "Rushh peut notamment recourir à des prestataires techniques spécialisés pour assurer tout ou partie du fonctionnement de l’infrastructure vocale et logicielle du Service." },
      { type: "p", text: "Rushh demeure responsable de l’exécution de ses propres obligations contractuelles." },
      { type: "p", text: "Certaines interruptions, dégradations ou limitations peuvent toutefois résulter d’événements affectant des services tiers ou les outils du Client et échappant au contrôle raisonnable de Rushh. Rushh met alors en œuvre les diligences raisonnables permettant de rétablir ou contourner le dysfonctionnement." },
      { type: "p", text: "Rushh pourra faire évoluer les composants techniques du Service, sous réserve de ne pas en réduire substantiellement les fonctionnalités essentielles convenues avec le Client." },
    ],
  },
  {
    num: 4,
    title: "Tarifs",
    blocks: [
      { type: "p", text: "Le Service comprend :" },
      {
        type: "ul",
        items: [
          "un prix de configuration initiale (« Setup »), dont le montant est précisé au devis ou au bon de commande ;",
          "un abonnement mensuel, dont le montant et les volumes ou usages compris sont précisés au devis ou au bon de commande ;",
          "le cas échéant, des options ou prestations supplémentaires expressément convenues entre les Parties.",
        ],
      },
      { type: "p", text: "Les prix sont exprimés hors taxes." },
      { type: "p", text: "Rushh bénéficie, à la date des présentes, de la franchise en base de TVA prévue à l’article 293 B du Code général des impôts." },
      { type: "p", text: "TVA non applicable — article 293 B du CGI." },
      { type: "p", text: "En cas de modification du régime fiscal de Rushh rendant la TVA applicable, celle-ci sera facturée au taux légal en vigueur sans que cette évolution constitue une modification du prix hors taxes convenu." },
    ],
  },
  {
    num: 5,
    title: "Facturation, dépassements et paiement",
    blocks: [
      { type: "p", text: "Le Setup est facturé à la signature du contrat et doit être réglé avant le commencement des travaux de déploiement, sauf stipulation contraire figurant au devis." },
      { type: "p", text: "L’abonnement est facturé mensuellement et par avance." },
      { type: "p", text: "Les dépassements ponctuels du volume inclus dans le forfait ne donnent pas lieu à une facturation automatique à la minute supplémentaire." },
      { type: "p", text: "En cas de dépassement durable ou récurrent du volume correspondant au forfait souscrit, Rushh pourra proposer au Client le passage au forfait correspondant à son niveau réel d’utilisation. Ce changement de forfait fera l’objet d’une information préalable du Client et, lorsqu’il entraîne une modification tarifaire, d’un accord écrit ou d’un avenant." },
      { type: "p", text: "Les options ou prestations complémentaires expressément demandées par le Client peuvent faire l’objet d’une facturation supplémentaire après accord de celui-ci." },
      { type: "p", text: "Tout retard de paiement entraîne, de plein droit et sans rappel préalable, à compter du jour suivant la date d’échéance figurant sur la facture, l’application de pénalités calculées au taux d’intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de dix (10) points de pourcentage. Le taux applicable est celui en vigueur au 1er janvier pour le premier semestre de l’année concernée et celui en vigueur au 1er juillet pour le second semestre." },
      { type: "p", text: "Tout professionnel en situation de retard de paiement est également redevable de plein droit d’une indemnité forfaitaire de quarante (40) euros pour frais de recouvrement. Lorsque les frais de recouvrement réellement engagés sont supérieurs à cette indemnité forfaitaire, Rushh pourra demander une indemnisation complémentaire sur justification." },
      { type: "p", text: "En cas de défaut de paiement persistant après mise en demeure, Rushh pourra suspendre tout ou partie du Service jusqu’à régularisation, sans que cette suspension imputable au Client ouvre droit à remboursement ou prolongation gratuite du contrat." },
    ],
  },
  {
    num: 6,
    title: "Setup initial",
    blocks: [
      { type: "p", text: "Le Setup rémunère notamment les travaux d’analyse, de conception conversationnelle, de paramétrage, d’intégration, de configuration, de tests et de préparation à la mise en production." },
      { type: "p", text: "Il constitue une prestation distincte de l’abonnement mensuel." },
      { type: "p", text: "Lorsque le Client annule le projet après le commencement de ces travaux, la fraction du Setup correspondant aux prestations déjà réalisées ou engagées demeure définitivement acquise à Rushh." },
      { type: "p", text: "Lorsque l’essentiel des travaux de configuration, d’intégration et de tests prévus a été réalisé, le Setup est intégralement acquis à Rushh, y compris lorsque la mise en production ne peut intervenir en raison d’un retard, d’une absence de validation ou d’un défaut de coopération du Client." },
      { type: "p", text: "Cette stipulation ne fait pas obstacle au remboursement de la partie correspondant à des prestations non réalisées lorsque l’abandon définitif du projet résulte exclusivement d’un manquement grave de Rushh non remédié dans un délai raisonnable après mise en demeure écrite du Client." },
    ],
  },
  {
    num: 7,
    title: "Déploiement et coopération du Client",
    blocks: [
      { type: "p", text: "Rushh vise une mise en service dans un délai de cinq (5) jours ouvrés à compter de la réception de l’ensemble des éléments nécessaires au projet." },
      { type: "p", text: "Ce délai constitue un objectif indicatif et non une obligation de résultat, sauf engagement écrit contraire figurant au devis." },
      { type: "p", text: "Le délai ne commence à courir qu’après réception notamment :" },
      {
        type: "ul",
        items: [
          "des informations nécessaires à la configuration ;",
          "des accès aux outils devant être connectés ;",
          "des instructions et règles métier nécessaires ;",
          "de la validation du scénario ou script proposé ;",
          "de tout autre élément raisonnablement nécessaire à la réalisation du projet.",
        ],
      },
      { type: "p", text: "Tout retard imputable au Client entraîne un décalage correspondant du calendrier de déploiement." },
      { type: "p", text: "Lorsque le Client demeure inactif pendant plus de trente (30) jours malgré une relance écrite, Rushh pourra considérer les travaux en attente comme suspendus." },
      { type: "p", text: "Les sommes correspondant aux prestations déjà réalisées demeurent dues." },
    ],
  },
  {
    num: 8,
    title: "Tests, recette et mise en service",
    blocks: [
      { type: "p", text: "Avant la mise en service, Rushh peut mettre à disposition du Client une version de test ou organiser une phase de recette." },
      { type: "p", text: "Le Client s’engage à vérifier notamment les principales règles conversationnelles, les informations communiquées par le standard téléphonique et les éventuelles intégrations." },
      { type: "p", text: "Sauf anomalie bloquante précisément signalée par écrit dans les cinq (5) jours ouvrés suivant la demande de validation, la configuration est réputée acceptée." },
      { type: "p", text: "Les anomalies mineures n’empêchant pas l’utilisation substantielle du Service ne font pas obstacle à sa mise en service et sont corrigées dans le cadre du support." },
      { type: "p", text: "La « Date de Mise en Service » correspond à la première date à laquelle le Service est activé pour traiter des appels réels du Client ou, si son activation est retardée exclusivement par le Client après validation technique, à la date à laquelle Rushh l’informe par écrit que le Service est prêt à être activé." },
    ],
  },
  {
    num: 9,
    title: "Durée et engagement initial",
    blocks: [
      { type: "p", text: "Le contrat est conclu pour une période initiale ferme de douze (12) mois à compter de la Date de Mise en Service." },
      { type: "p", text: "Cette durée minimale constitue un élément déterminant de l’équilibre économique et tarifaire du contrat." },
      { type: "p", text: "À l’issue de la période initiale, le contrat se poursuit pour des périodes mensuelles successives par tacite reconduction." },
      { type: "p", text: "Après la période initiale, chacune des Parties peut résilier le contrat moyennant un préavis de trente (30) jours notifié par écrit." },
      { type: "p-email", before: "La demande du Client peut notamment être adressée à : ", email: "gaspard.rushh@gmail.com" },
    ],
  },
  {
    num: 10,
    title: "Résiliation anticipée",
    blocks: [
      { type: "p", text: "Pendant la période initiale ferme, le Client ne bénéficie pas d’un droit discrétionnaire de résiliation sans conséquence financière, sauf accord écrit contraire de Rushh ou disposition légale impérative." },
      { type: "p", text: "Si Rushh accepte une résiliation anticipée demandée par le Client pour convenance personnelle et en l’absence de manquement de Rushh, le Client sera redevable d’une indemnité de résiliation correspondant à cinquante pour cent (50 %) des mensualités fixes restant à courir jusqu’au terme de la période initiale, dans la limite de six (6) mensualités." },
      { type: "p", text: "Les factures échues et autres prestations réalisées restent intégralement dues." },
      { type: "p", text: "Aucune indemnité de résiliation anticipée n’est due lorsque le Client résilie le contrat en raison d’un manquement grave de Rushh à une obligation essentielle qui demeure non corrigé trente (30) jours après réception d’une mise en demeure écrite suffisamment détaillée, sauf lorsqu’un délai différent est justifié par la nature du manquement." },
      { type: "p", text: "Réciproquement, Rushh pourra résilier le contrat en cas de manquement grave du Client non corrigé après mise en demeure, notamment en cas de défaut de paiement, d’utilisation illicite du Service ou de violation grave des obligations relatives aux données personnelles ou à la sécurité." },
    ],
  },
  {
    num: 11,
    title: "Obligations du Client",
    blocks: [
      { type: "p", text: "Le Client s’engage notamment à :" },
      {
        type: "ul",
        items: [
          "fournir des informations exactes, complètes et actualisées ;",
          "coopérer raisonnablement au déploiement et aux tests ;",
          "maintenir les accès et abonnements tiers nécessaires au fonctionnement des intégrations dont il a la charge ;",
          "vérifier les informations métier et instructions fournies au Service ;",
          "ne pas utiliser le Service à des fins illicites, frauduleuses ou trompeuses ;",
          "respecter l’ensemble des réglementations applicables à son activité et à l’utilisation du Service.",
        ],
      },
      { type: "p", text: "Le Client reste seul responsable des décisions commerciales, juridiques ou opérationnelles prises à la suite des informations recueillies par le Service ainsi que de la validation finale des rendez-vous, mandats, contrats ou engagements conclus avec ses prospects ou clients." },
    ],
  },
  {
    num: 12,
    title: "Intelligence artificielle et transparence envers les appelants",
    blocks: [
      { type: "p", text: "Le Client reconnaît que certaines réponses du Service sont produites ou assistées par des technologies d’intelligence artificielle et qu’elles peuvent exceptionnellement être inexactes, incomplètes ou inadaptées malgré les mesures de configuration mises en œuvre." },
      { type: "p", text: "Les Parties coopèrent afin de respecter les obligations réglementaires applicables aux systèmes d’intelligence artificielle." },
      { type: "p", text: "Lorsque la réglementation applicable l’exige, l’appelant est informé de manière claire qu’il interagit avec un système automatisé ou d’intelligence artificielle." },
      { type: "p", text: "Le Client s’engage à ne pas supprimer, désactiver ou contourner les mécanismes d’information nécessaires au respect de cette obligation." },
      { type: "p", text: "Le Client s’engage à ne pas demander à Rushh de configurer le Service de manière à usurper l’identité d’une personne réelle ou à tromper volontairement les appelants sur la nature automatisée de l’interaction." },
    ],
  },
  {
    num: 13,
    title: "Données personnelles",
    blocks: [
      { type: "p", text: "Pour les traitements de données personnelles réalisés par Rushh exclusivement pour le compte du Client dans le cadre de la gestion des appels et prospects, le Client agit en principe en qualité de responsable de traitement et Rushh en qualité de sous-traitant, sous réserve de la qualification juridique résultant des traitements effectivement mis en œuvre." },
      { type: "p", text: "Les traitements concernés font l’objet d’un accord de traitement de données conforme à l’article 28 du Règlement (UE) 2016/679 (« RGPD »), annexé ou incorporé au contrat." },
      { type: "p", text: "En cas de contradiction sur les questions de protection des données, le DPA prévaut sur les présentes CGV." },
      { type: "p", text: "Rushh pourra recourir aux sous-traitants ultérieurs identifiés selon les conditions prévues dans le DPA." },
      { type: "p", text: "Rushh traite par ailleurs, en qualité de responsable de traitement indépendant, les données nécessaires à sa propre gestion commerciale, contractuelle, comptable, au support, à la sécurité de ses systèmes et au respect de ses obligations légales." },
      { type: "p", text: "Le Client est notamment responsable de la détermination des finalités et bases légales applicables aux traitements qu’il demande à Rushh d’effectuer et de l’information des personnes concernées lorsque cette responsabilité lui incombe." },
      { type: "p", text: "Tout enregistrement des conversations téléphoniques, lorsqu’il est activé, doit faire l’objet d’un encadrement spécifique tenant compte de sa finalité, de sa base légale, de sa durée de conservation et de l’information des personnes concernées." },
    ],
  },
  {
    num: 14,
    title: "Confidentialité et sécurité",
    blocks: [
      { type: "p", text: "Chaque Partie s’engage à préserver la confidentialité des informations techniques, commerciales, financières ou opérationnelles non publiques obtenues dans le cadre du contrat." },
      { type: "p", text: "Cette obligation demeure applicable pendant toute la durée du contrat et pendant trois (3) ans après sa cessation, sans limitation de durée concernant les informations constituant un secret des affaires aussi longtemps qu’elles conservent cette qualité." },
      { type: "p", text: "Rushh met en œuvre des mesures techniques et organisationnelles raisonnables adaptées aux risques liés au Service et aux données traitées." },
      { type: "p", text: "Le Client s’engage également à protéger ses identifiants, clés API, comptes et accès et à informer Rushh sans délai en cas de compromission suspectée." },
    ],
  },
  {
    num: 15,
    title: "Disponibilité, maintenance et support",
    blocks: [
      { type: "p", text: "Rushh met en œuvre les moyens raisonnables nécessaires au maintien du Service." },
      { type: "p", text: "Sauf engagement de niveau de service (« SLA ») expressément souscrit dans le devis, aucune disponibilité de 100 %, absence totale d’interruption ou temps de réponse déterminé n’est garanti." },
      { type: "p", text: "Des opérations de maintenance programmées ou urgentes peuvent entraîner une indisponibilité temporaire." },
      { type: "p", text: "Lorsque cela est raisonnablement possible, Rushh informe préalablement le Client des opérations de maintenance susceptibles d’avoir un impact significatif." },
    ],
  },
  {
    num: 16,
    title: "Responsabilité",
    blocks: [
      { type: "p", text: "Chaque Partie répond des dommages directs et prévisibles résultant de ses manquements contractuels dans les conditions du droit commun, sous réserve des limitations prévues ci-dessous." },
      { type: "p", text: "Rushh ne garantit aucun résultat commercial et ne saurait notamment être tenu responsable du seul fait qu’un appel n’aboutisse pas à une prise de rendez-vous, à une vente, à la signature d’un mandat ou à tout autre résultat économique attendu par le Client." },
      { type: "p", text: "Sous réserve des dispositions légales impératives, Rushh ne répond pas des dommages indirects ou consécutifs tels que notamment perte de bénéfice, perte de marge, perte de chiffre d’affaires indirecte, atteinte à l’image ou perte de données dont le Client disposait d’une copie exploitable." },
      { type: "p", text: "La responsabilité globale cumulée de Rushh, toutes causes contractuelles confondues, est plafonnée au montant hors taxes payé ou payable par le Client au titre du contrat pendant les douze (12) mois précédant le fait générateur." },
      { type: "p", text: "Lorsque le fait générateur intervient moins de douze mois après la signature, le plafond correspond aux sommes payées ou payables depuis la signature jusqu’à la date du fait générateur." },
      { type: "p", text: "Ce plafond ne s’applique pas dans les hypothèses dans lesquelles la loi interdit une limitation de responsabilité, notamment en cas de faute dolosive ou lourde ou de dommage corporel imputable à Rushh." },
      { type: "p", text: "Rushh n’est pas responsable d’un dysfonctionnement exclusivement imputable :" },
      {
        type: "ul",
        items: [
          "aux systèmes, réseaux ou équipements du Client ;",
          "à des informations ou instructions erronées communiquées par le Client ;",
          "à une modification effectuée sans autorisation de Rushh ;",
          "à une indisponibilité d’un service tiers sur laquelle Rushh ne dispose d’aucun moyen raisonnable d’action immédiate ;",
          "à un cas de force majeure.",
        ],
      },
      { type: "p", text: "Aucune stipulation du présent article ne saurait avoir pour effet de priver de sa substance une obligation essentielle de Rushh." },
    ],
  },
  {
    num: 17,
    title: "Propriété intellectuelle",
    blocks: [
      { type: "p", text: "Rushh demeure titulaire de ses méthodes, savoir-faire, modèles, architectures, prompts génériques, outils, bibliothèques, configurations génériques et éléments techniques préexistants ou réutilisables." },
      { type: "p", text: "Sauf stipulation écrite contraire, les développements et configurations réalisés dans le cadre du Service restent la propriété de Rushh." },
      { type: "p", text: "Le Client bénéficie, pendant la durée du contrat, d’un droit personnel, non exclusif et non transférable d’utilisation des éléments nécessaires à l’exploitation du Service." },
      { type: "p", text: "Les données, fichiers, contenus, marques, informations métier et éléments préexistants fournis par le Client demeurent sa propriété ou celle de leurs titulaires respectifs." },
      { type: "p", text: "Le Client garantit disposer des droits nécessaires sur les contenus qu’il demande à Rushh d’utiliser." },
    ],
  },
  {
    num: 18,
    title: "Réversibilité et fin du contrat",
    blocks: [
      { type: "p", text: "À la cessation du contrat, l’accès au Service prend fin à la date effective de résiliation." },
      { type: "p", text: "Sur demande formulée avant la fin du contrat ou dans les trente (30) jours suivant celle-ci, Rushh met à disposition du Client, dans un format raisonnablement exploitable lorsque cela est techniquement possible, les fiches prospects et données du Client encore disponibles dans les systèmes sous le contrôle de Rushh." },
      { type: "p", text: "Les opérations particulières de migration, transformation ou réintégration dépassant un export standard pourront faire l’objet d’une facturation complémentaire après accord du Client." },
      { type: "p", text: "Les données personnelles sont ensuite supprimées ou restituées conformément au DPA, sous réserve des données devant être conservées pour satisfaire à une obligation légale ou assurer la constatation, l’exercice ou la défense de droits en justice." },
    ],
  },
  {
    num: 19,
    title: "Force majeure",
    blocks: [
      { type: "p", text: "Aucune Partie ne pourra être tenue responsable de l’inexécution d’une obligation lorsque celle-ci résulte d’un événement répondant aux conditions de la force majeure au sens de l’article 1218 du Code civil." },
      { type: "p", text: "La Partie concernée informe l’autre Partie dans les meilleurs délais raisonnablement possibles." },
      { type: "p", text: "L’exécution des obligations affectées est suspendue pendant la durée de l’empêchement." },
      { type: "p", text: "Si l’empêchement se prolonge pendant plus de trente (30) jours consécutifs et rend la poursuite du contrat substantiellement impossible, chaque Partie pourra mettre fin au contrat par notification écrite, sans indemnité de résiliation, sous réserve des prestations déjà réalisées et sommes déjà exigibles." },
    ],
  },
  {
    num: 20,
    title: "Suspension du Service",
    blocks: [
      { type: "p", text: "Rushh peut suspendre tout ou partie du Service lorsqu’une telle mesure est raisonnablement nécessaire notamment :" },
      {
        type: "ul",
        items: [
          "en cas de risque sérieux pour la sécurité des systèmes ou données ;",
          "en cas d’utilisation manifestement illicite ou frauduleuse ;",
          "en cas de demande d’une autorité compétente ;",
          "en cas de défaut de paiement persistant ;",
          "lorsque le maintien du Service pourrait engager la responsabilité de Rushh ou porter atteinte à un tiers.",
        ],
      },
      { type: "p", text: "Sauf urgence ou obligation légale contraire, Rushh informe préalablement le Client et lui permet de remédier au manquement dans un délai raisonnable." },
    ],
  },
  {
    num: 21,
    title: "Modification du Service et des tarifs",
    blocks: [
      { type: "p", text: "Les modifications substantielles du périmètre commandé par le Client font l’objet d’un devis complémentaire." },
      { type: "p", text: "Après la période initiale de douze mois, Rushh pourra modifier ses tarifs d’abonnement sous réserve d’en informer le Client au moins trente (30) jours avant leur entrée en vigueur." },
      { type: "p", text: "En cas de hausse tarifaire, le Client pourra résilier avant la date d’effet du nouveau tarif, sans indemnité, sous réserve du paiement des sommes déjà dues." },
      { type: "p", text: "Cette faculté ne s’applique pas aux variations de prix résultant directement d’un changement de volume, d’option ou de configuration demandé et accepté par le Client." },
    ],
  },
  {
    num: 22,
    title: "Preuve et communications",
    blocks: [
      { type: "p", text: "Les Parties reconnaissent la valeur probante des documents électroniques, courriels, journaux techniques, données de connexion et enregistrements informatiques établis et conservés dans des conditions permettant raisonnablement d’en garantir l’intégrité." },
      { type: "p", text: "Les notifications relatives à l’exécution courante du contrat peuvent être effectuées par courrier électronique." },
      { type: "p", text: "Les mises en demeure et notifications de résiliation pour manquement doivent permettre d’établir leur date d’envoi et de réception." },
    ],
  },
  {
    num: 23,
    title: "Divisibilité et absence de renonciation",
    blocks: [
      { type: "p", text: "Si une stipulation du contrat est déclarée nulle, inapplicable ou réputée non écrite, les autres stipulations demeurent applicables dans toute la mesure permise par la loi." },
      { type: "p", text: "Le fait pour une Partie de ne pas se prévaloir temporairement d’une stipulation ne constitue pas une renonciation à s’en prévaloir ultérieurement." },
    ],
  },
  {
    num: 24,
    title: "Règlement amiable des différends",
    blocks: [
      { type: "p", text: "En cas de différend relatif à l’exécution du contrat, les Parties s’efforcent de rechercher une solution amiable avant l’introduction d’une procédure judiciaire, sauf urgence, mesure conservatoire ou nécessité d’interrompre un délai de prescription." },
      { type: "p", text: "Aucune médiation de la consommation n’est prévue lorsque le Client contracte exclusivement en qualité de professionnel, sous réserve des dispositions impératives éventuellement applicables à certaines catégories de contrats conclus entre professionnels." },
    ],
  },
  {
    num: 25,
    title: "Droit applicable et juridiction compétente",
    blocks: [
      { type: "p", text: "Le contrat est régi par le droit français." },
      { type: "p", text: "Les Parties rechercheront prioritairement une solution amiable à tout différend." },
      { type: "p-strong", text: "LORSQUE LES PARTIES ONT TOUTES CONTRACTÉ EN QUALITÉ DE COMMERÇANT ET QUE LES CONDITIONS DE L’ARTICLE 48 DU CODE DE PROCÉDURE CIVILE SONT RÉUNIES, COMPÉTENCE TERRITORIALE EXCLUSIVE EST ATTRIBUÉE AU TRIBUNAL DE COMMERCE DE BAYONNE, Y COMPRIS EN CAS DE PLURALITÉ DE DÉFENDEURS OU D’APPEL EN GARANTIE." },
      { type: "p-strong", text: "DANS LES AUTRES CAS, LA JURIDICTION TERRITORIALEMENT ET MATÉRIELLEMENT COMPÉTENTE EST DÉTERMINÉE SELON LES RÈGLES DE DROIT COMMUN." },
    ],
  },
];

function ArticleBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "p-strong":
      return <p className="cgv-emphasis">{block.text}</p>;
    case "p-email":
      return (
        <p>
          {block.before}
          <a href={`mailto:${block.email}`}>{block.email}</a>.
        </p>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default function CGVPage() {
  return (
    <main className="cgv-page">
      <header className="nav">
        <div className="nav-inner" style={{ justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
            <span>Rushh</span>
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
          <p className="cgv-updated">Dernière mise à jour : 31 août 2026</p>
        </div>

        <div className="cgv-layout">
          <nav className="cgv-toc" aria-label="Sommaire">
            <span className="cgv-toc-label">Sommaire</span>
            <div className="cgv-toc-list">
              {ARTICLES.map((a) => (
                <a key={a.num} href={`#article-${a.num}`}>
                  {a.num}. {a.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="cgv-content">
            {ARTICLES.map((a) => (
              <section key={a.num} id={`article-${a.num}`} className="cgv-article">
                <h2>
                  Article {a.num} — {a.title}
                </h2>
                {a.blocks.map((block, i) => (
                  <ArticleBlock key={i} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
