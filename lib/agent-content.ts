/**
 * Shared data + pure logic for agent-facing (Markdown) content negotiation.
 * Kept dependency-free so it can run in `proxy.ts` and be unit-tested directly.
 */

import { ARTICLES } from "./articles";
import { articleToMarkdown } from "./articles/markdown";
import { CATALOGUE_TITLE, catalogueToMarkdown } from "./articles/catalogue-markdown";
import * as mandataires from "./solutions/mandataires-immobiliers";
import * as gestionLocative from "./solutions/gestion-locative";
import { CGV } from "./legal/cgv";
import { MENTIONS } from "./legal/mentions";
import { PRIVACY } from "./legal/privacy";
import { FAQ_ITEMS } from "./faq";
import { legalToMarkdown } from "./legal/markdown";
import { DEMO_LISTEN, MULTI, OFFRE, SYNDICS, TRANSACTION, premiumToMd } from "./solutions/premium";
import { offreCompareToMd } from "./offre-compare";

export const SITE_URL = "https://www.rushh.fr";

export interface MarkdownPage {
  title: string;
  markdown: string;
}

const FAQ: Array<{ q: string; a: string }> = FAQ_ITEMS;

const FAQ_MARKDOWN = FAQ.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n");

export const MARKDOWN_PAGES: Record<string, MarkdownPage> = {
  "/": {
    title: "Rushh immo — Standard téléphonique IA pour agence immobilière",
    markdown: `# Rushh — Standard téléphonique IA pour agence immobilière

Rushh conçoit et déploie un standard téléphonique IA sur-mesure pour les agences immobilières : il décroche, qualifie et transmet les appels entrants 24 h/24, avec un déploiement adapté à l’agence. La mise en service est organisée avec vous après validation du périmètre technique et réception des éléments nécessaires.

## Chaque appel compte pour votre agence

Rushh prend le relais quand l'équipe de l'agence n'est pas disponible. Chaque appel est compris et traité selon les règles définies par l'agence : besoin compris, informations recueillies, action adaptée (rendez-vous, transfert ou message), équipe informée avec le contexte utile pour reprendre la demande.

## Intégrations

Rushh connecte vos agendas et réalise des connexions personnalisées avec vos logiciels immobiliers, comme Apimo ou Whise, lorsque les API et les autorisations nécessaires sont disponibles. Voir [/integrations](${SITE_URL}/integrations) pour le détail des intégrations disponibles.

## Ce que disent les agences

Des directrices d'agence, responsables location et agents indépendants utilisent le Standard Rushh pour ne plus perdre d'appels pendant les visites, après la fermeture de l'agence, ou pour disposer d'un historique clair de chaque appel.

## FAQ

${FAQ_MARKDOWN}

## En savoir plus

- [À propos](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Mentions légales](${SITE_URL}/mentions-legales)
- [Confidentialité](${SITE_URL}/privacy)
- [Qu'est-ce que Rushh ?](${SITE_URL}/ressources/rushh-standard-telephonique-ia-immobilier)
- [Intégrations](${SITE_URL}/integrations)
- [Conditions Générales de Vente](${SITE_URL}/cgv)
- [Guide pour agents IA (llms.txt)](${SITE_URL}/llms.txt)
- [Plan du site](${SITE_URL}/sitemap.xml)

Contact : hello@rushh.fr
`,
  },
  "/about": {
    title: "À propos | Rushh",
    markdown: `# À propos de Rushh

Rushh conçoit et déploie le Standard téléphonique IA pensé pour l'immobilier : un standard qui décroche, qualifie et transmet les appels entrants d'une agence immobilière, 24 h/24.

## Qui édite Rushh

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), exerçant sous le nom commercial « Rushh », immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023). L'établissement est situé 13 Rue du Brise Lames, 64600 Anglet, France.

## Notre mission

Les agences immobilières perdent des appels pendant les visites, après la fermeture, ou lorsque l'équipe est occupée. Rushh a été conçu pour que chaque appel entrant soit pris en charge selon les règles propres à chaque agence : qualification du besoin, prise de rendez-vous, transfert vers le bon interlocuteur ou transmission d'une fiche prête à traiter.

## Pour qui

Le Standard Rushh est pensé pour les métiers de l'immobilier : transaction, gérance locative et syndic de copropriété. Il s'intègre aux outils déjà utilisés par l'agence (Google Calendar, Outlook, Apimo, Whise) sans changer les habitudes de l'équipe.

## Respect du RGPD

Les informations recueillies pendant les appels sont utilisées uniquement pour traiter les demandes de l'agence cliente, dans le cadre qu'elle définit. Voir la politique de confidentialité : ${SITE_URL}/privacy

## Contact

- Email : hello@rushh.fr
- Adresse : 13 Rue du Brise Lames, 64600 Anglet, France
`,
  },
  "/contact": {
    title: "Contact | Rushh",
    markdown: `# Contact Rushh

Une question sur le Standard Rushh, une démo à organiser, ou un point sur un déploiement en cours : voici comment joindre l'équipe.

## Coordonnées

- Email : hello@rushh.fr
- Adresse : 13 Rue du Brise Lames, 64600 Anglet, France

## Réserver un échange

Pour réserver une démonstration du Standard Rushh, utilisez le bouton « Réserver une démo » de la page d'accueil (${SITE_URL}/), ou écrivez directement à hello@rushh.fr en précisant le nom de l'agence et le métier concerné (transaction, gérance, syndic).

## Éditeur

Rushh est édité par Gaspard David, Entrepreneur Individuel (EI), immatriculé au RCS de Bayonne sous le numéro 937 698 983 (SIRET 937 698 983 00023).

## Autres ressources

- [À propos](${SITE_URL}/about)
- [Intégrations](${SITE_URL}/integrations)
- [Conditions Générales de Vente](${SITE_URL}/cgv)
- [Mentions légales](${SITE_URL}/mentions-legales)
- [Confidentialité](${SITE_URL}/privacy)
`,
  },
  "/offre": {
    title: "L'offre Rushh immo : standard téléphonique IA pour l'immobilier",
    markdown: `# L'offre Rushh : un standard téléphonique IA qui prend vos appels, fixe vos rendez-vous et libère vos équipes.

Rushh répond aux appels entrants de votre agence 24h/24, qualifie les demandes et fixe des rendez-vous sur vos agendas connectés. Notre équipe conçoit, installe et fait fonctionner votre standard pour vous.

Vous vous concentrez sur vos clients. Rushh s'occupe du téléphone.

Standard téléphonique alimenté par intelligence artificielle · Externalisation des appels entrants · Proposition personnalisée.

- Moins d'appels laissés sans réponse : visite, rendez-vous, agence fermée, Rushh prend l'appel.
- Moins d'interruptions pour vos équipes : votre équipe ne décroche que ce qui mérite un humain.
- Davantage d'opportunités traitées : chaque demande est qualifiée et classée, prête à être traitée.

## Ce que Rushh prend en charge

Du premier mot de l'appelant à la transmission à votre équipe, selon les règles validées avec vous :

1. **Appel entrant** : un vendeur, un acquéreur, un locataire, un copropriétaire ou un prestataire appelle.
2. **Rushh comprend** : le Standard décroche et identifie la demande dès les premiers mots.
3. **Qualifie et agit** : rendez-vous, transfert ou transmission, selon les règles validées avec vous.
4. **Votre équipe retrouve la demande** : qualifiée, résumée, avec son statut et sa prochaine étape.

Fonctionnalités :

- **Appels entrants 24 h/24, 7 j/7** : réponse directe ou renvoi d'appel, selon l'organisation de votre agence.
- **Qualification** : vendeur, acquéreur, locataire, bailleur ou prestataire.
- **Rendez-vous** : pris sur vos agendas connectés, selon vos règles.
- **Transfert d'appel** : en direct vers un collaborateur, lorsque son intervention est nécessaire.
- **SMS et e-mails automatiques** : confirmations et informations, selon les scénarios configurés ; WhatsApp et autres workflows selon les accès et les API.
- **Plateforme métier** : opportunités classées par catégorie, avec coordonnées, résumé, statut et suivi.
- **Connexions personnalisées** : aux outils disposant d'une API accessible, avec les autorisations nécessaires ; connexions Apimo et Whise opérationnelles.
- **Voix et langues** : voix personnalisable, clonage vocal et échanges en français, anglais et espagnol, ainsi que d'autres langues, selon la configuration.

Les fonctionnalités activées dépendent de votre organisation et de vos outils. Rushh traite les appels entrants : les appels sortants automatisés ne font pas partie de l'offre de base.

## Une prestation entièrement prise en charge

Vous n'avez aucun logiciel à configurer : tout est assuré par l'équipe Rushh.

- De votre côté : nous expliquer comment vous travaillez ; valider le fonctionnement avant le déploiement.
- Du côté de Rushh : les scénarios d'appel conçus pour votre agence ; les connexions à vos outils ; la maintenance, le suivi et les ajustements.

${offreCompareToMd()}
## Ce qui s'adapte à votre organisation

Le Standard suit votre façon de travailler, pas l'inverse.

- **Vos règles** : qui reçoit quelle demande, quand transférer, quand alerter votre équipe.
- **Vos métiers** : transaction, gérance, syndic, location : chaque métier a ses propres situations.
- **Votre structure** : une agence ou plusieurs, avec leurs services et leurs interlocuteurs.
- **Vos outils** : Rushh se connecte de façon personnalisée aux outils disposant d'une API accessible, avec les autorisations nécessaires ; voir [Intégrations](${SITE_URL}/integrations).

## Comment se déroule la mise en place

1. **Analyse et configuration** : nous étudions votre fonctionnement et construisons les scénarios qui correspondent à votre organisation.
2. **Tests** : nous testons les appels avant tout déploiement.
3. **Validation** : vous validez le fonctionnement.
4. **Déploiement et suivi** : le Standard prend en charge vos appels ; nous suivons son fonctionnement et ajustons dans le temps.

## Ce que reçoit votre équipe

- Une demande qualifiée : motif, coordonnées, résumé et statut.
- Orientée vers la bonne personne, selon vos règles.

${premiumToMd(OFFRE, { phone: false })}
## Demander une démonstration

Lors d'une démonstration, nous regardons votre fonctionnement et nous vous montrons comment Rushh s'adapterait à votre organisation. Vous recevez ensuite une proposition personnalisée, établie selon votre organisation et le périmètre retenu.

Réserver une démo : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

Pour aller plus loin : [Intégrations](${SITE_URL}/integrations) · [Comparatif des standards IA](${SITE_URL}/comparatif/standards-telephoniques-ia-immobilier) · [Rushh vs Joe AI](${SITE_URL}/vs/joe-ai) · [Accueil](${SITE_URL}/)
`,
  },
  "/integrations": {
    title: "Intégrations CRM immobiliers et API | Rushh immo",
    markdown: `# Intégrations & ressources techniques — Rushh

Rushh réalise des connexions personnalisées avec vos logiciels immobiliers lorsque les API et les autorisations nécessaires sont disponibles.

## Intégrations disponibles

- **Google Calendar** — synchronisation des rendez-vous pris par le Standard Rushh.
- **Outlook** — synchronisation des rendez-vous pris par le Standard Rushh.
- **Apimo** — connexion personnalisée à Apimo : lecture et transmission des informations convenues selon les accès API et les autorisations disponibles.
- **Whise** — connexion personnalisée à Whise : lecture et transmission des informations convenues selon les accès API et les autorisations disponibles.

Un outil qui ne figure pas dans cette liste ? L'équipe Rushh étudie l'interconnexion possible lors de l'échange de mise en place.

## Quand utiliser Rushh

- Une agence immobilière (transaction, gérance locative, syndic) souhaite ne plus perdre d'appels pendant les visites ou après la fermeture de l'agence.
- Une agence a besoin d'un standard qui qualifie les appelants et transmette une fiche prête à traiter, plutôt qu'un simple renvoi ou une messagerie.
- Une agence veut connecter la prise de rendez-vous téléphonique à son agenda (Google Calendar, Outlook) et à son logiciel métier (Apimo, Whise).

## Ressources

- [À propos](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Guide pour agents IA (llms.txt)](${SITE_URL}/llms.txt)
- [Plan du site](${SITE_URL}/sitemap.xml)
`,
  },
  "/demonstrations": {
    title: "Démonstration : testez le Standard Rushh par téléphone | Rushh",
    markdown: `# Et si vous testiez le Standard Rushh vous-même ?

Découvrez comment Rushh prend en charge un appel immobilier. Appelez notre ligne de démonstration et écoutez une IA répondre au téléphone d'une agence immobilière : jouez le rôle d'un vendeur ou d'un acquéreur, et jugez la voix, la rapidité et la façon dont l'appel est conduit.

**Ligne de démonstration : 01 76 63 57 09** (tel:+33176635709)

La ligne simule une agence immobilière fictive Rushh, située à Paris.

## ${DEMO_LISTEN.title}

${DEMO_LISTEN.sub}

${DEMO_LISTEN.items.map((i) => `- **${i.title}** : ${i.text}`).join("\n")}

${DEMO_LISTEN.closing}

## Quelques phrases pour démarrer l'appel

Ce sont des suggestions pour tester la conversation, et non des promesses de résultats.

- **Vous êtes vendeur** : « Bonjour, je souhaite faire estimer mon appartement à Paris. »
- **Vous êtes acquéreur** : « Je recherche un T3 à Paris avec un budget de 450 000 €. »
- **Vous souhaitez visiter** : « Bonjour, j'aimerais organiser une visite pour un appartement. »
- **Vous avez une demande particulière** : « Est-ce que vous pouvez transmettre un message à votre équipe ? »

Démonstration sur une agence fictive. Les réponses et les actions dépendent de la configuration de la ligne.

## Vous souhaitez découvrir Rushh adapté à votre agence ?

Tarification sur devis. Réserver une démo personnalisée : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Transaction immobilière](${SITE_URL}/solutions/transaction-immobiliere) · [Comparer avec d'autres solutions](${SITE_URL}/comparatif/standards-telephoniques-ia-immobilier) · [Rushh ou Joe AI](${SITE_URL}/vs/joe-ai)
`,
  },
  "/solutions/transaction-immobiliere": {
    title: "Standard téléphonique IA pour la transaction immobilière | Rushh",
    markdown: `# Standard téléphonique IA pour les appels vendeurs et acquéreurs

**Vous êtes en visite. Vos prochaines opportunités continuent d'appeler.**

${TRANSACTION.lead} Standard téléphonique alimenté par intelligence artificielle. Tarification sur devis.

Réserver une démo : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

## Pendant que l'équipe est sur le terrain

- **Moins d'opportunités sans réponse** : quand vos négociateurs sont en visite ou en rendez-vous, Rushh décroche et recueille la demande.
- **Des demandes déjà renseignées** : projet de vente ou d'achat, bien concerné, critères : chaque demande arrive avec ses informations.
- **Des négociateurs moins interrompus** : votre équipe reprend l'échange au bon moment, avec le contexte, selon les règles que vous définissez.

## De l'appel au négociateur

1. **Appel entrant** : un vendeur ou un acquéreur appelle pendant que l'équipe est indisponible.
2. **Compréhension** : le Standard décroche et identifie la nature de la demande.
3. **Collecte** : il recueille les informations utiles à votre équipe.
4. **Action selon vos règles** : orientation, transfert ou prise de rendez-vous, selon ce que vous avez validé.
5. **Négociateur** : il reçoit la demande avec son contexte et reprend l'échange.

## Un vendeur, un acquéreur : ce que le Standard recueille

Ces scénarios sont des exemples fictifs, présentés à titre d'illustration.

### Scénario vendeur (exemple fictif)

« Bonjour, je souhaite faire estimer mon appartement à Paris. »

- Projet : Vente d'un appartement
- Localisation du bien : Paris
- Type de bien : Appartement
- Estimation : Souhaitée
- Prochaine étape : Selon vos règles

### Scénario acquéreur (exemple fictif)

« Je recherche un T3 à Paris avec un budget de 450 000 €. »

- Annonce concernée : À préciser par l'appelant
- Critères : T3, Paris
- Projet d'achat : Budget indiqué : 450 000 €
- Visite : À qualifier
- Prochaines étapes : Selon vos règles

Exemples illustratifs : les informations recueillies et les actions dépendent des règles définies avec vous. Aucun mandat ni rendez-vous n'est garanti. Pour entendre un appel réel, essayez la [ligne de démonstration](${SITE_URL}/demonstrations).

## Transmission au négociateur et reprise humaine

- Une demande prête à traiter : le motif, les informations recueillies et le contexte.
- Une transmission vers la bonne personne, selon vos règles.
- Une reprise humaine dès qu'un échange humain est nécessaire.

Le Standard est un outil d'assistance, sans promesse de résultat commercial.

${premiumToMd(TRANSACTION)}
## Questions fréquentes sur la transaction

### Le Standard prend-il des rendez-vous de visite ?

Selon les règles et les connexions validées avec vous, oui. Sans connexion à votre agenda, il recueille la demande de visite et la transmet à votre équipe.

### Le Standard remplace-t-il mes négociateurs ?

Non. Il prend le relais quand votre équipe ne peut pas répondre. Les situations que vous choisissez de réserver à un humain lui sont transmises.

### Quelles informations mon équipe reçoit-elle ?

Le motif de l'appel, les informations recueillies pendant l'échange et le contexte utile pour reprendre la demande, selon les règles définies avec vous.

### Que se passe-t-il si l'appelant veut parler à une personne ?

Selon vos règles, le Standard transfère l'appel ou transmet la demande à la bonne personne pour une reprise humaine.

### Rushh garantit-il des mandats ou des rendez-vous ?

Non. Le Standard est un outil d'assistance : il ne promet aucun résultat commercial, aucun mandat et aucun rendez-vous.

### Combien de temps faut-il pour le mettre en service ?

La mise en service est organisée avec vous après validation du périmètre technique et réception des éléments nécessaires. La tarification se fait sur devis.

## Votre équipe est en visite. Rushh prend les appels.

Tarification sur devis. Réserver une démo personnalisée : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Ligne de démonstration](${SITE_URL}/demonstrations) · [Intégrations](${SITE_URL}/integrations) · [Mandataires immobiliers](${SITE_URL}/solutions/mandataires-immobiliers) · [Réseaux et groupes d'agences](${SITE_URL}/solutions/multi-sites)
`,
  },
  "/solutions/syndics": {
    title: "Standard téléphonique IA pour syndics de copropriété | Rushh",
    markdown: `# Standard téléphonique IA pour syndics de copropriété

**Les appels continuent quand vos gestionnaires sont occupés.**

${SYNDICS.lead} Standard téléphonique alimenté par intelligence artificielle. Tarification sur devis.

Réserver une démo : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

## Les difficultés de la réception téléphonique en syndic

- **Des gestionnaires interrompus** : chaque appel qui arrive pendant un rendez-vous, une assemblée ou un dossier en cours casse le rythme de travail.
- **Des appelants très différents** : copropriétaires, occupants, membres du conseil syndical, prestataires.
- **Des motifs à trier** : administratif, charges, travaux, parties communes, assemblée générale.

## Identifier la copropriété et le demandeur

Le Standard demande qui appelle et pour quelle copropriété. Sans connexion validée avec vos données, il s'appuie sur ce que l'appelant indique.

- **Qui appelle ?** Copropriétaire, Occupant, Conseil syndical, Prestataire.
- **Quelle copropriété ?** Celle que l'appelant indique. Un rapprochement avec vos fichiers suppose une connexion à étudier.
- **Quel motif ?** Le Standard pose les questions utiles pour cerner la demande, selon vos règles.
- **Quelle suite ?** Orientation, transfert ou message au gestionnaire, selon ce que vous avez validé.

## Qualifier les motifs d'appel

Exemples de catégories, à adapter à votre cabinet : demande administrative ou de document ; question sur les charges ; incident dans les parties communes ; travaux et prestataires ; assemblée générale ; autre demande.

## Règles de priorité et d'orientation

Vous décidez qui reçoit quelle demande, quels motifs sont prioritaires et quand alerter votre équipe. Les règles sont testées avec vous avant la mise en service.

Exemple illustratif :

- Demande de document → Transmise au gestionnaire concerné
- Question sur les charges → Orientée vers la personne ou le service que vous désignez
- Incident dans les parties communes → Marqué prioritaire, avec alerte au gestionnaire si vous le décidez
- Appel d'un prestataire → Orienté vers le gestionnaire qui suit le dossier

Exemples de répartition à adapter et à tester avec votre cabinet selon les règles validées ensemble.

## Transmission au gestionnaire

- Le motif de l'appel et son niveau de priorité selon vos règles.
- La copropriété et le demandeur, tels que l'appelant les a indiqués.
- Les informations recueillies pendant l'échange.
- Une transmission vers le gestionnaire, ou vers la personne que vous désignez.

## Limites et reprise humaine

Le Standard prend le premier niveau. Dès qu'un échange humain est nécessaire, la demande est transmise à votre équipe.

Ce qu'il peut faire : décrocher et comprendre la demande ; recueillir les informations utiles ; orienter ou transmettre selon vos règles ; passer le relais à un humain.

Ses limites :
- Il ne réalise aucun diagnostic technique.
- Il ne gère pas seul une urgence et ne remplace pas les services d'urgence.
- Il n'accède à des données de copropriété que par une connexion validée avec vous.
- Il n'applique que les règles validées et testées avec vous.

Cette page décrit une organisation possible, à étudier avec vous. Elle ne présente aucune référence client ni résultat chiffré. Voir aussi [L'offre Rushh](${SITE_URL}/offre).

${premiumToMd(SYNDICS)}
## Étudions l'organisation téléphonique de votre cabinet

Tarification sur devis. Réserver une démo personnalisée : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Intégrations](${SITE_URL}/integrations) · [Gestion locative](${SITE_URL}/solutions/gestion-locative) · [Réseaux et groupes d'agences](${SITE_URL}/solutions/multi-sites)
`,
  },
  [mandataires.PATH]: { title: mandataires.TITLE, markdown: mandataires.toMarkdown() },
  [gestionLocative.PATH]: { title: gestionLocative.TITLE, markdown: gestionLocative.toMarkdown() },
  "/solutions/multi-sites": {
    title: "Standard téléphonique IA multi-agences pour l'immobilier | Rushh",
    markdown: `# Un standard téléphonique IA adapté aux réseaux et groupes d'agences immobilières

**Une même exigence d'accueil, des réalités différentes d'une agence à l'autre.**

${MULTI.lead} Standard téléphonique alimenté par intelligence artificielle. Tarification sur devis.

Réserver une démo : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

## Ce qui complique l'accueil téléphonique à plusieurs agences

- **Des pratiques d'accueil différentes** : d'une agence à l'autre, la façon de décrocher et de qualifier un appel peut varier.
- **Des appels mal orientés** : sans règle commune, une demande peut atteindre la mauvaise agence ou le mauvais service.
- **Des règles difficiles à faire évoluer** : modifier une consigne partout en même temps suppose de la formaliser une fois, puis de l'appliquer.

## Règles communes au groupe, adaptations par agence

### Règles communes au groupe

- La façon d'accueillir et de comprendre une demande
- Les informations à recueillir selon le motif
- Les situations à transmettre à un humain
- La manière de transmettre les demandes aux équipes

### Adaptations par agence et service

- **Par agence.** Horaires, interlocuteurs et règles locales propres à chaque site.
- **Par service.** Transaction, gérance, syndic, location : chaque service a ses propres situations.
- **Par équipe.** Qui reçoit quelle demande, et à quel moment votre équipe doit être alertée.

Ce qui est commun et ce qui est local est défini avec vous, puis validé avant la mise en service.

## Orienter chaque demande vers la bonne agence

Le Standard applique d'abord les règles du groupe, puis celles de l'agence concernée. Exemple illustratif :

1. **Appel entrant** : un appelant contacte une agence du groupe.
2. **Identification de la demande** : le Standard comprend le motif et recueille les informations utiles.
3. **Règles validées** : les règles communes puis les adaptations de l'agence concernée s'appliquent.
4. **Agence ou interlocuteur** : la demande est orientée vers l'agence, le service ou la personne concernée.

## Méthode de déploiement

Vous nous expliquez votre organisation, l'équipe Rushh s'occupe du reste.

1. **Cartographier** : nous recensons vos agences, services et interlocuteurs.
2. **Définir les règles communes** : nous formalisons avec vous ce qui vaut pour tout le groupe.
3. **Paramétrer les adaptations** : nous ajoutons les spécificités de chaque agence et de chaque service.
4. **Tester** : nous testons les appels avant toute mise en service.
5. **Valider et déployer** : vous validez, puis le Standard prend en charge les appels selon le périmètre convenu.

La mise en service est organisée avec vous après validation du périmètre technique et réception des éléments nécessaires. Pour plusieurs agences, le périmètre et le calendrier sont définis avec vous lors du devis. Voir [L'offre Rushh](${SITE_URL}/offre).

## Tests, suivi et exceptions

- Des tests avant toute mise en service, sur des appels représentatifs de vos agences.
- Un suivi dans le temps assuré par l'équipe Rushh.
- Des exceptions traitées par une règle spécifique ou par une reprise humaine.

À savoir : cette page décrit une méthode et une organisation possibles, à étudier avec vous. Elle ne présente aucune référence client ni résultat chiffré.

${premiumToMd(MULTI)}
## Étudions les règles de votre réseau

Tarification sur devis. Réserver une démo personnalisée : [https://calendly.com/gaspard-david/demo](https://calendly.com/gaspard-david/demo)

Pour aller plus loin : [L'offre Rushh](${SITE_URL}/offre) · [Intégrations](${SITE_URL}/integrations) · [Transaction immobilière](${SITE_URL}/solutions/transaction-immobiliere)
`,
  },
  "/confirmation": {
    title: "Votre démonstration | Rushh",
    markdown: `# Votre démonstration Rushh

Si vous avez réservé, consultez votre e-mail Calendly pour retrouver les détails de votre réservation. Sinon, [réservez une démo](https://calendly.com/gaspard-david/demo).

Retour à l'accueil : ${SITE_URL}/
`,
  },
};

for (const doc of [CGV, PRIVACY, MENTIONS]) {
  MARKDOWN_PAGES[doc.path] = { title: doc.metaTitle, markdown: legalToMarkdown(doc) };
}

MARKDOWN_PAGES["/ressources"] = { title: CATALOGUE_TITLE, markdown: catalogueToMarkdown() };

// Guides /ressources/* : le Markdown est généré depuis les mêmes données que la page rendue.
for (const article of ARTICLES) {
  MARKDOWN_PAGES[article.path] = { title: article.title, markdown: articleToMarkdown(article) };
}

/** Real routes that intentionally have no Markdown representation. None for now. */
export const KNOWN_NON_MARKDOWN_ROUTES: string[] = [];

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

/**
 * Parses an `Accept` header and decides whether the client is asking for a
 * Markdown representation of the page (rather than, or ahead of, HTML).
 */
export function wantsMarkdown(acceptHeader: string | null | undefined): boolean {
  if (!acceptHeader) return false;
  const accept = acceptHeader.toLowerCase();
  if (!accept.includes("text/markdown")) return false;

  const markdownQ = extractQuality(accept, "text/markdown") ?? 1;
  const htmlQ = extractQuality(accept, "text/html");

  // No explicit HTML preference, or Markdown is at least as preferred as HTML.
  if (htmlQ === null) return true;
  return markdownQ >= htmlQ;
}

function extractQuality(accept: string, mediaType: string): number | null {
  const entry = accept
    .split(",")
    .map((part) => part.trim())
    .find((part) => part.startsWith(mediaType));
  if (!entry) return null;
  const match = entry.match(/q=([0-9.]+)/);
  return match ? parseFloat(match[1]) : 1;
}

export function getMarkdownPage(pathname: string): MarkdownPage | null {
  return MARKDOWN_PAGES[normalizePathname(pathname)] ?? null;
}

export function isKnownRoute(pathname: string): boolean {
  const normalized = normalizePathname(pathname);
  if (normalized in MARKDOWN_PAGES) return true;
  return KNOWN_NON_MARKDOWN_ROUTES.includes(normalized);
}

export function build404Markdown(pathname: string): string {
  return `# 404 — Page introuvable

La page \`${pathname}\` n'existe pas sur ${SITE_URL}.

Ressources utiles :
- Accueil : ${SITE_URL}/
- Plan du site : ${SITE_URL}/sitemap.xml
- Guide pour agents IA : ${SITE_URL}/llms.txt
`;
}
