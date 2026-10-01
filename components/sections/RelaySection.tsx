"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

const SCENARIOS = [
  {
    title: "Besoin compris",
    desc: "Rushh identifie la raison de l'appel et comprend la situation avant de transmettre.",
    img: "/scenario-1.webp",
    alt: "Post-it jaune collé sur un écran d'ordinateur : Mme Lefèvre, visite T3, Victor Hugo, budget OK",
  },
  {
    title: "Informations recueillies",
    desc: "Les éléments utiles à votre équipe sont collectés au fil de l'échange.",
    img: "/scenario-2.webp",
    alt: "Post-it jaune posé sur un agenda : M. Bernard, rappel demain, achat maison, budget à voir",
  },
  {
    title: "Action adaptée",
    desc: "Rendez-vous, transfert ou message : Rushh applique les règles de votre agence.",
    img: "/scenario-3.webp",
    alt: "Post-it jaune sur un téléphone de bureau d'agence : Mme Martin, vendeuse, rappel demain, pour Sarah",
  },
  {
    title: "Équipe informée",
    desc: "Votre équipe reçoit le contexte utile pour reprendre la demande, sans tout redemander.",
    img: "/scenario-4.webp",
    alt: "Post-it jaune posé près d'un téléphone : M. Martin, achat résidence principale, T4 ou T5, Bordeaux, budget environ 650 000 euros",
  },
]

/* ══════════════════════════════════════════════
   Les 3 situations du quotidien (texte seul, une par étape)
═══════════════════════════════════════════════ */
const MOMENTS = ["En visite", "Déjà en ligne", "Après la fermeture"];

/* ══════════════════════════════════════════════
   Mise en scène au scroll — le défilement normal pilote la scène (aucun blocage :
   on peut scroller vite ou lentement, au doigt comme à la molette)
   étape 0  « En visite » (apparaît à l'arrivée)
   étape 1  + « Déjà en ligne »
   étape 2  + « Après la fermeture »
   étape 3  « L'appel trouve une réponse. » remplace les trois lignes
   étape 4  il dézoome à sa place, le reste apparaît, la 1ʳᵉ carte remonte
═══════════════════════════════════════════════ */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));

// Positions des 5 étapes le long de la scène (chacune se déroule en continu avec le scroll) (fraction de la distance épinglée)
const STOPS = [0, 0.25, 0.5, 0.75, 1];

// Décalage d'épinglage entre deux cartes (doit rester égal au --i * 26px du CSS)
const PIN_STEP = 26;

export function RelaySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const moveRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scène épinglée : progression du scroll → variables CSS
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const header = headerRef.current;
    const move = moveRef.current;
    if (!track || !stage || !header || !move) return;

    let raf = 0;
    // Toujours relu à la volée : la mise en page peut bouger (polices, images, redimensionnement)
    const distance = () => Math.max(1, track.offsetHeight - stage.clientHeight);

    const measure = () => {
      const stageH = stage.clientHeight;
      const centerY = header.offsetTop + move.offsetTop + move.offsetHeight / 2;
      // centre visuel de la scène (la barre de navigation occupe le haut)
      stage.style.setProperty("--dy", `${(stageH + 64) / 2 - centerY}px`);
      const scale = (window.innerWidth * 0.9) / Math.max(1, move.offsetWidth);
      stage.style.setProperty("--S", String(Math.min(2.5, Math.max(1.2, scale))));
    };

    const update = () => {
      raf = 0;
      const top = track.getBoundingClientRect().top;
      const p = clamp01(-top / distance());
      const set = (k: string, v: number) => stage.style.setProperty(k, v.toFixed(4));
      // « En visite » se révèle pendant que la scène entre à l'écran
      set("--s1", ease(clamp01(1 - top / (window.innerHeight * 0.55))));
      set("--s2", seg(p, STOPS[0], STOPS[1]));
      set("--s3", seg(p, STOPS[1], STOPS[2]));
      const swap = seg(p, STOPS[2], STOPS[3]);
      set("--out", swap);
      set("--ring", swap);
      const z = seg(p, STOPS[3], STOPS[4]);
      set("--z", z);
      stage.style.setProperty("--mix", `${((1 - z) * 100).toFixed(1)}%`);
      set("--hdr", seg(p, 0.83, 0.97));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    document.fonts?.ready.then(onResize);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Chaque carte se réduit légèrement quand la suivante vient la recouvrir.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let raf = 0;

    const update = () => {
      raf = 0;
      const items = itemRefs.current;
      const cards = cardRefs.current;
      for (let i = 0; i < items.length - 1; i++) {
        const cur = items[i];
        const next = items[i + 1];
        const card = cards[i];
        if (!cur || !next || !card) continue;
        if (!mq.matches) {
          card.style.transform = "";
          continue;
        }
        const overlap = cur.getBoundingClientRect().bottom - next.getBoundingClientRect().top;
        const range = cur.offsetHeight - PIN_STEP;
        const p = Math.min(1, Math.max(0, overlap / range));
        card.style.transform = p > 0 ? `scale(${1 - 0.05 * p})` : "";
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mq.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mq.removeEventListener("change", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="relais" className="rs-section" data-no-reveal aria-labelledby="relais-title">
      <div className="rs-track" ref={trackRef}>
        <div className="rs-stage" ref={stageRef}>
          {/* 1 · Les trois situations, qui apparaissent l'une après l'autre au scroll */}
          <div className="rs-lines">
            {MOMENTS.map((m, i) => (
              <p key={m} className={`rs-line rs-line--${i + 1}`}>{m}</p>
            ))}
          </div>

          {/* 2 · L'appel trouve une réponse : surgit au centre, sonne, dézoome */}
          <div className="rs-header" ref={headerRef}>
            <span className="lf-pill rs-pill">Le relais Rushh</span>
            <div className="rs-h2-move" ref={moveRef}>
              <h2 id="relais-title" className="lf-h2 rs-h2">
                L&apos;appel trouve<br />une réponse.
              </h2>
            </div>
            <p className="lf-sub rs-sub">
              La demande est comprise, les informations utiles sont recueillies et votre équipe sait quoi reprendre.
            </p>
          </div>
        </div>
      </div>

      {/* 3 · Les quatre cartes (la première remonte sous le titre) */}
      <div className="rs-stackwrap">
        <div className="lf-wrap">
          <div className="rl-stack">
            {SCENARIOS.map((s, i) => (
              <div
                key={s.title}
                className="rl-item"
                ref={(el) => { itemRefs.current[i] = el; }}
                style={{ "--i": i } as CSSProperties}
              >
                <div
                  className={`lf-card rl-card${i % 2 === 1 ? " rl-card--flip" : ""}`}
                  ref={(el) => { cardRefs.current[i] = el; }}
                >
                  <div className="rl-visual">
                    <img src={s.img} alt={s.alt} loading="lazy" />
                  </div>
                  <div className="rl-content">
                    <span className="rl-num">0{i + 1} / 04</span>
                    <h3 className="rl-title">{s.title}</h3>
                    <p className="rl-desc">{s.desc}</p>
                    <DemoCTA label="Réserver une démo" showArrow={false} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
