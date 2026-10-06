"use client";

import { useState } from "react";
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
          </div>

          <div className="fq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="lf-card fq-item t-acc" data-open={isOpen}>
                  <button
                    type="button"
                    className="fq-q t-acc-head"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="t-acc-chevron" aria-hidden>
                      <svg viewBox="0 0 16 16"><path d="M4 6.5L8 10.5L12 6.5" /></svg>
                    </span>
                  </button>
                  <div className="t-acc-panel" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <div className="t-acc-panel-inner">
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
