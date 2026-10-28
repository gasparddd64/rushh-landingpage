"use client";

import { useEffect } from "react";

/* Les accordéons <details> sont fermés dans le HTML initial (tout le texte y est présent).
   Sur grand écran ils sont affichés à plat : le CSS force l'affichage et ce composant les
   ouvre aussi, pour les navigateurs qui ne gèrent pas encore ::details-content. */
export function OfferAccordions() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const sync = () => {
      document.querySelectorAll<HTMLDetailsElement>("details.of-acc").forEach((d) => {
        d.open = mq.matches;
      });
    };
    if (mq.matches) sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return null;
}
