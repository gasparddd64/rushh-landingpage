import type { Article } from "./types";
import { demoSection, p, section, statement, ul } from "./blocks";

export const voixIaNaturelle: Article = {
  path: "/ressources/voix-ia-naturelle-agence-immobiliere",
  bare: true,
  category: "guides",
  title: "Voix IA naturelle au téléphone : éviter que l'appelant raccroche",
  description:
    "Une voix IA agréable ne suffit pas : temps de réponse, fluidité, transparence et passage à un humain. Les critères pour une agence immobilière.",
  shortTitle: "Voix IA naturelle : éviter les raccrochés",
  summary: "Temps de réponse, fluidité, transparence et relais humain : les critères à tester.",
  h1: "Une voix IA naturelle au téléphone : comment éviter qu'un propriétaire raccroche ?",
  answer:
    "Un appelant raccroche quand la réponse tarde, quand l'échange est rigide ou quand il se sent piégé : soignez le temps de réponse, la fluidité et la transparence.",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  intro: [
    p("Une voix agréable ne fait pas un bon standard. L'appelant juge d'abord ce qu'il vit : attend-il, est-il compris, avance-t-il ?"),
    p("Voici les critères à tester avant de confier vos appels à une IA."),
  ],
  sections: [
    section(
      "criteres",
      "Cinq critères à observer",
      ul([
        "Le temps de réponse : un silence trop long donne l'impression que la ligne est coupée.",
        "La fluidité : l'IA laisse-t-elle finir les phrases, gère-t-elle les hésitations ?",
        "La transparence : l'appelant sait qu'il parle à une IA, dès le début.",
        "La compréhension : un nom propre, une adresse, un accent sont-ils bien saisis ?",
        "Le relais : demander une personne doit être simple et rapide.",
      ]),
      statement("Une voix naturelle aide, mais ne remplace ni la clarté ni l'honnêteté sur ce qu'elle est."),
    ),
    section(
      "transparence",
      "Dire que c'est une IA",
      p("Informer l'appelant qu'il parle à une IA fait partie des bonnes pratiques et de ce qui est attendu par la réglementation : voir le guide [IA et RGPD](/ressources/standard-telephonique-ia-immobilier-rgpd). Une voix qui se fait passer pour humaine abîme la confiance."),
      p("Pour mettre ces critères à l'épreuve, utilisez les [huit appels scénarios](/ressources/test-agent-vocal-ia-immobilier)."),
    ),
    section(
      "rushh",
      "Ce que Rushh assume",
      p("Rushh est un standard téléphonique alimenté par intelligence artificielle, spécialisé dans l'immobilier. L'appelant parle à une IA, pas à une personne : c'est un choix assumé, avec un transfert en direct vers un collaborateur lorsque la règle le prévoit."),
      p("Notre équipe teste le standard avec votre agence et ajuste les réponses et les règles. Voir [l'offre Rushh](/offre)."),
    ),
    demoSection("Écoutez-le par vous-même", "Testez la voix et les réponses de Rushh sur des appels de votre agence."),
  ],
  sources: [],
  sourcesNote: "",
  related: [],
  cta: { title: "Écoutez-le par vous-même", text: "", links: [] },
};
