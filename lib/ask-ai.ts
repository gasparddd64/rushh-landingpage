/** Prompt pré-rédigé envoyé aux assistants IA (ChatGPT, Claude, Perplexity, Grok, Gemini).
 *  Il ne contient que des faits vérifiés (voir les articles et la FAQ) : pas de prix, pas de chiffres inventés. */
export const ASK_PHONE_DISPLAY = "09 74 05 14 22";
export const ASK_BOOKING_URL = "https://calendly.com/gaspard-david/demo";

export const ASK_PROMPT = `Je dirige une agence immobilière et je viens de découvrir Rushh (rushh.fr), un standard téléphonique IA pour l'immobilier. J'aimerais savoir s'il peut vraiment m'aider.

Voici ce que Rushh indique sur son service (source : rushh.fr, à compléter avec le site si tu peux le consulter) :
- Il décroche les appels 24 h/24, y compris pendant les visites et après la fermeture.
- Il qualifie la demande (vendeur, acquéreur, locataire, bailleur) et recueille les informations essentielles.
- Il prend rendez-vous dans l'agenda (Google Calendar, Outlook) et envoie des SMS et des e-mails.
- Il transmet à l'équipe un récapitulatif : qui appelle, pourquoi, quelle prochaine action.
- Il se connecte au logiciel métier selon les API disponibles (par exemple Apimo, Whise).
- Il est configuré et suivi par l'équipe Rushh ; on garde son numéro (renvoi d'appel) ; compter 5 jours ouvrés pour un déploiement standard.
- Il est conçu pour la transaction, la gestion locative, le syndic, les mandataires et les groupes d'agences.
- Tarif sur devis ; données traitées dans le cadre du RGPD.
- On peut le tester au ${ASK_PHONE_DISPLAY} et réserver une démo : ${ASK_BOOKING_URL}

Ce que j'attends de toi :
1. En 150 mots, ce que Rushh ferait concrètement pour mon agence, avec l'exemple d'une propriétaire qui appelle à 18 h 40, agence fermée.
2. Une comparaison avec un répondeur, un secrétariat et un autre standard IA, sur les critères qui comptent pour une agence : spécialisation immobilière, mise en place et suivi, qualification des demandes, prise de rendez-vous.
3. Trois questions sur mon agence (équipe, volume d'appels, outil ou solution déjà utilisés) pour personnaliser ta réponse.
Une fois que j'ai répondu, dis-moi quelle est la meilleure prochaine étape pour moi, et pourquoi.
Si une information manque, dis-le plutôt que de l'inventer.`;

export const ASK_TARGETS = [
  { id: "chatgpt", name: "ChatGPT", logo: "/ia/chatgpt.webp", w: 237, h: 240, url: (q: string) => `https://chatgpt.com/?q=${q}` },
  { id: "claude", name: "Claude", logo: "/ia/claude.webp", w: 240, h: 240, url: (q: string) => `https://claude.ai/new?q=${q}` },
  { id: "gemini", name: "Gemini", logo: "/ia/gemini.webp", w: 240, h: 240, url: null },
  { id: "perplexity", name: "Perplexity", logo: "/ia/perplexity.webp", w: 210, h: 240, url: (q: string) => `https://www.perplexity.ai/search?q=${q}` },
] as const;

export const GEMINI_URL = "https://gemini.google.com/app";
