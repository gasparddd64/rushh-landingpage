"use client";

import { useEffect } from "react";

/**
 * Lance l'échange « client / Rushh » du hero, une seule fois et très vite.
 * Il démarre tout seul peu après l'arrivée, ou dès la première tentative de défilement ;
 * pendant environ 1 s, le défilement est retenu pour que le visiteur voie le début de l'échange, puis il est libéré.
 */
const LOCK_MS = 1100;
const AUTO_MS = 500;

export function HeroTalk() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hz");
    if (!hero) return;
    // Téléphone : pas de bulles, donc ni échange ni retenue du défilement
    if (window.matchMedia("(max-width: 760px)").matches) return;
    let locked = false;
    let started = false;
    let unlockTimer = 0;
    let autoTimer = 0;

    const block = (e: Event) => {
      if (locked) e.preventDefault();
    };
    const blockKeys = (e: KeyboardEvent) => {
      if (locked && [" ", "ArrowDown", "PageDown", "End", "ArrowUp", "PageUp", "Home"].includes(e.key)) e.preventDefault();
    };

    const start = (withLock: boolean) => {
      if (started) return;
      started = true;
      hero.dataset.play = "1";
      if (withLock) {
        locked = true;
        unlockTimer = window.setTimeout(() => {
          locked = false;
        }, LOCK_MS);
      }
    };

    const onIntent = (e: Event) => {
      if (started) return;
      if (window.scrollY > 8) {
        started = true; // déjà descendu : on n'impose rien
        hero.dataset.play = "1";
        return;
      }
      e.preventDefault();
      start(true);
    };

    autoTimer = window.setTimeout(() => {
      if (!started) {
        locked = false;
        start(false);
      }
    }, AUTO_MS);

    window.addEventListener("wheel", onIntent, { passive: false });
    window.addEventListener("touchmove", onIntent, { passive: false });
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", blockKeys);
    return () => {
      window.clearTimeout(unlockTimer);
      window.clearTimeout(autoTimer);
      window.removeEventListener("wheel", onIntent);
      window.removeEventListener("touchmove", onIntent);
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}
