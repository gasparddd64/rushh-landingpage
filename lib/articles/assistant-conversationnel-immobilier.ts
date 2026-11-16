import type { Article } from "./types";
import { demoSection, p, section, statement, ul } from "./blocks";

export const assistantConversationnel: Article = {
  path: "/ressources/assistant-conversationnel-immobilier",
  bare: true,
  category: "guides",
  title: "Assistant conversationnel immobilier : quel canal choisir ?",
  description:
    "Chatbot, messagerie ou agent vocal : quel assistant conversationnel pour une agence immobilière, et quel canal capte un appel vendeur en direct.",
  shortTitle: "Chatbot, agent vocal ou standard IA ?",
  summary: "Chat du site, messageries ou téléphone : quel canal pour quelle demande.",
  h1: "Assistant conversationnel immobilier : chatbot, agent vocal ou standard téléphonique ?",
  answer:
    "Le bon assistant dépend du canal où vos clients vous contactent : le chat pour le site, les messageries pour le différé, le téléphone pour l'urgence.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("« Assistant conversationnel » recouvre des outils très différents : un chat sur un site, un robot de messagerie, un agent qui parle au téléphone."),
    p("Avant de choisir, regardez par où vos clients vous contactent vraiment."),
  ],
  sections: [
    section(
      "canaux",
      "Trois canaux, trois usages",
      ul([
        "Le chat du site : adapté au visiteur qui parcourt vos annonces et pose une question écrite.",
        "L'e-mail et les messageries : adaptés aux échanges différés, quand l'interlocuteur peut attendre.",
        "Le téléphone : le canal de l'urgence et du projet, quand la personne veut une réponse tout de suite.",
      ]),
      statement("Un propriétaire qui veut faire estimer son bien appelle plus souvent qu'il n'écrit."),
    ),
    section(
      "choix",
      "Comment choisir",
      p("Relevez où arrivent vos demandes importantes : appels, formulaires, messages. Le canal le plus fréquent et le plus sensible est celui à traiter en premier."),
      p("Un appel manqué se rattrape moins bien qu'un message en attente : voir comment [éviter les appels manqués](/ressources/appels-manques-immobilier)."),
    ),
    section(
      "rushh",
      "Ce que Rushh prend en charge",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier."),
      p(
        "Il est centré sur les appels entrants : il décroche, qualifie, propose un rendez-vous ou transfère l'appel. Selon les scénarios, il envoie aussi des SMS et des e-mails automatiques de confirmation. Ce n'est pas un chat pour votre site. Voir [l'offre Rushh](/offre) et [l'agent vocal IA immobilier](/ressources/agent-vocal-ia-immobilier).",
      ),
    ),
    demoSection("Commencez par le canal qui vous échappe le plus", "Découvrez comment Rushh prend en charge les appels entrants de votre agence."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Commencez par le canal qui vous échappe le plus", text: "", links: [] },
};
