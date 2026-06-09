"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";

const faqItems = [
  {
    q: "Qu'est-ce qu'un agent vocal IA pour agence immobilière ?",
    a: "Un agent vocal IA pour agence immobilière est un système qui décroche automatiquement vos appels entrants 24h/24, 7j/7. Il dialogue naturellement avec vos prospects, collecte leurs informations clés (budget, type de bien, localisation) et vous transmet une fiche qualifiée en temps réel — sans aucune intervention humaine.",
  },
  {
    q: "Est-ce que mes prospects savent qu'ils parlent à une IA ?",
    a: "Oui — Rushh se présente naturellement dès le début de l'appel. La transparence est essentielle, et nos clients constatent que ça ne nuit pas du tout à la qualité de la conversation, au contraire.",
  },
  {
    q: "Est-ce que je dois changer mes outils ?",
    a: "Non. Rushh s'intègre à votre numéro existant, votre calendrier (Google, Outlook, iCal), et votre CRM. Aucune migration, aucune nouvelle app à installer.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "48h en moyenne. Un appel de découverte de 20 minutes, configuration de votre script sur mesure, tests, mise en ligne. Vous validez à chaque étape.",
  },
  {
    q: "Est-ce que c'est conforme RGPD ?",
    a: "Entièrement. Données hébergées en France, traitement strictement encadré, durée de conservation configurable, droit à l'effacement intégré. Notre DPO est à votre disposition.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le prix dépend de votre volume d'appels et du périmètre que vous souhaitez couvrir. Un seul mandat sauvé couvre généralement plusieurs mois d'abonnement. Demandez une démo pour un devis personnalisé.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-soft-section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions fréquentes.</h2>
        </div>
        <div className="faq-wrap">
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="faq-icon"><PlusIcon size={14} /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
