"use client";

import { useEffect, useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

interface Item {
  id: string;
  label: string;
}

/**
 * Navigation de lecture : sommaire latéral fixe (desktop, section active surlignée) et barre basse (mobile) avec
 * « Sommaire » et « Démo ». Les liens sont rendus côté serveur ; le JavaScript ne fait qu'indiquer la section active
 * et afficher la barre après le début de l'article.
 */
export function ReadingNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [dock, setDock] = useState(false);
  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-90px 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));

    // la barre basse se retire quand le bloc Rushh / l'invitation de fin est à l'écran
    const end = document.querySelector(".rx-answer, .res-cta");
    let endVisible = false;
    const endIo = end
      ? new IntersectionObserver(([e]) => {
          endVisible = e.isIntersecting;
          setDock(window.scrollY > 520 && !endVisible);
        })
      : null;
    if (end && endIo) endIo.observe(end);
    const onScroll = () => setDock(window.scrollY > 520 && !endVisible);
    window.addEventListener("scroll", onScroll, { passive: true });

    // la barre basse s'efface tant que le bandeau de consentement est affiché
    const watchBanner = () => setBanner(!!document.querySelector(".cm"));
    watchBanner();
    const mo = new MutationObserver(watchBanner);
    mo.observe(document.body, { childList: true, subtree: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      mo.disconnect();
      document.removeEventListener("keydown", onKey);
      io.disconnect();
      endIo?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <>
      <nav className="res-rail" aria-label="Sommaire de l'article">
        <p className="res-rail-title">Dans ce guide</p>
        <ol>
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}>{i.label}</a>
            </li>
          ))}
        </ol>
        <div className="res-rail-cta">
          <p>Voir Rushh sur vos propres appels</p>
          <DemoCTA label="Réserver une démo" showArrow={false} />
        </div>
      </nav>

      <div className={`res-dock${dock && !banner ? " is-on" : ""}${open ? " is-open" : ""}`}>
        {open && (
          <nav id="res-dock-sheet" className="res-dock-sheet" aria-label="Sommaire de l'article">
            <ol>
              {items.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined} onClick={() => setOpen(false)}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="res-dock-bar">
          <button type="button" className="res-dock-toc" aria-expanded={open} aria-controls="res-dock-sheet" onClick={() => setOpen((o) => !o)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden><path d="M4 7h16M4 12h16M4 17h10" /></svg>
            Sommaire
          </button>
          <DemoCTA label="Réserver une démo" showArrow={false} />
        </div>
      </div>
    </>
  );
}
