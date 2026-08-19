"use client";

import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

const FAQ = [
  {
    q: "Est-ce que Rushh remplace mon équipe ?",
    a: "Non. Rushh intervient lorsque votre équipe ne peut pas prendre en charge un appel, ou sur les situations que vous choisissez de lui confier. Vous définissez également les cas dans lesquels l'appel doit être transmis à un collaborateur.",
    cta: false,
  },
  {
    q: "Mes clients vont-ils avoir l'impression de parler à un robot ?",
    a: "C'est précisément pour cette raison que nous préférons vous faire entendre Rushh plutôt que vous demander de nous croire. Chaque déploiement est travaillé pour offrir des échanges naturels et adaptés à votre agence.",
    cta: true,
  },
  {
    q: "Que se passe-t-il si un client veut parler à quelqu'un de l'agence ?",
    a: "Vous définissez vos règles. Selon la situation, Rushh peut transmettre l'appel, recueillir les informations nécessaires ou organiser la suite avec votre équipe.",
    cta: false,
  },
  {
    q: "Dois-je changer mon numéro de téléphone ?",
    a: "Pas nécessairement. Nous étudions votre installation actuelle et définissons avec vous la configuration adaptée avant le déploiement.",
    cta: false,
  },
  {
    q: "Est-ce à nous de configurer et maintenir le système ?",
    a: "Non. C'est justement la différence entre Rushh et un logiciel classique. Nous concevons, configurons, testons et faisons évoluer votre standard téléphonique avec vous.",
    cta: false,
  },
  {
    q: "Combien de temps faut-il pour déployer Rushh ?",
    a: "La mise en production cible est réalisée sous 5 jours ouvrés après réception de l'ensemble des éléments nécessaires au déploiement.",
    cta: false,
  },
  {
    q: "Combien ça coûte ?",
    a: "Le tarif dépend du volume d'appels de votre agence et de la configuration retenue. Nous en discutons lors de la démonstration, après avoir compris votre fonctionnement.",
    cta: false,
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="section-pad faq-section" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          {/* Left: heading */}
          <div className="faq-heading">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="faq-title">Questions fréquentes.</h2>
            <p className="faq-intro">
              Ce que les directeurs d'agence nous posent avant de réserver une démonstration.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="faq-wrap">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                  <button
                    className="faq-q"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-chevron" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-a" aria-hidden={!isOpen}>
                    <div className="faq-a-inner">
                      <p>{item.a}</p>
                      {item.cta && (
                        <div className="faq-cta">
                          <DemoCTA />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
