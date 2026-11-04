"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("section:not(.hero-x):not([data-no-reveal])").forEach((el) => {
      el.classList.add("reveal");
      obs.observe(el);
    });

    // Révélation de textes (transitions.dev « texts reveal ») : pill, titre et sous-titre
    // montent l'un après l'autre, flous puis nets, quand l'en-tête entre à l'écran.
    const heads = document.querySelectorAll<HTMLElement>(
      ".lf-head--center, .lf-head--split, .orb-copy, .fq-left",
    );
    const headObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-shown");
          headObs.unobserve(e.target);
        });
      },
      { threshold: 0.25 },
    );
    heads.forEach((head) => {
      if (head.closest(".rs-stage")) return;
      head
        .querySelectorAll<HTMLElement>(".lf-pill, .lf-h2, .lf-sub, .orb-note, .fq-cta")
        .forEach((el, i) => {
          el.classList.add("t-stagger-line");
          el.style.setProperty("--ti", String(i));
        });
      head.classList.add("t-stagger");
      headObs.observe(head);
    });

    return () => {
      obs.disconnect();
      headObs.disconnect();
    };
  }, []);

  return null;
}
