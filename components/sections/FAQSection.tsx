"use client";

import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { FAQ_ITEMS } from "@/lib/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="lf-wrap">
        <div className="fq-layout">
          <div className="fq-left">
            <span className="lf-pill">FAQ</span>
            <h2 id="faq-title" className="lf-h2">Questions fréquentes.</h2>
            <p className="lf-sub">
              Ce que les directeurs d&apos;agence nous posent avant de réserver une démonstration.
            </p>
            <div className="lf-card fq-cta">
              <p>Parlons de votre agence.</p>
              <DemoCTA label="Réserver une démo" showArrow={false} />
            </div>
          </div>

          <div className="fq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="lf-card fq-item" data-open={isOpen}>
                  <button
                    type="button"
                    className="fq-q"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="fq-icon" aria-hidden />
                  </button>
                  <div className="fq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <div>
                      <p>{item.a}</p>
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
