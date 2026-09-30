"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ══════════════════════════════════════════════
   Petits éléments « écrits à la main »
═══════════════════════════════════════════════ */
function Arrow({ dir = "right" }: { dir?: "right" | "down" | "left" }) {
  if (dir === "down") {
    return (
      <svg className="pp-arrow pp-arrow--down" viewBox="0 0 24 46" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3c-4 11 3 22-1 37" />
        <path d="M4 33c3 3 6 6 7 9 3-3 6-6 9-10" />
      </svg>
    );
  }
  return (
    <svg className={`pp-arrow${dir === "left" ? " pp-arrow--left" : ""}`} viewBox="0 0 58 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 14c14-6 29 2 49-3" />
      <path d="M44 4c4 4 7 6 10 7-4 3-7 6-10 10" />
    </svg>
  );
}

function Check() {
  return (
    <svg className="pp-check" viewBox="0 0 26 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 13c3 2 5 5 7 8C13 13 18 7 23 3" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   Les 4 notes d'agent (une par scénario)
═══════════════════════════════════════════════ */
function NoteBesoin() {
  return (
    <div className="pp pp--l">
      <span className="pp-tape" />
      <p className="pp-title">Appel · Mme Lefèvre</p>
      <p className="pp-meta">06 12 •• •• 48 — 14h02</p>
      <ul className="pp-list">
        <li>veut visiter un <b>T3</b></li>
        <li>rue Victor Hugo</li>
        <li>achat (pas de location)</li>
      </ul>
      <div className="pp-flow">
        <span className="pp-box">Appel</span>
        <Arrow />
        <span className="pp-box">Besoin ?</span>
        <Arrow />
        <span className="pp-circle">Visite</span>
      </div>
    </div>
  );
}

function NoteInfos() {
  return (
    <div className="pp pp--r">
      <span className="pp-tape" />
      <span className="pp-sticky">4 / 5<br />infos ✔</span>
      <p className="pp-title">Fiche appel</p>
      <ul className="pp-checks">
        <li><Check /> Nom : Lefèvre</li>
        <li><Check /> Tél : 06 12 •• •• 48</li>
        <li><Check /> Bien : T3, rue V. Hugo</li>
        <li><Check /> Budget : 420 000 €</li>
        <li><span className="pp-empty" /> Dispo : jeudi ?</li>
      </ul>
      <div className="pp-flow pp-flow--end">
        <Arrow dir="left" />
        <span className="pp-note">encore à demander</span>
      </div>
    </div>
  );
}

function NoteAction() {
  return (
    <div className="pp pp--l">
      <span className="pp-tape" />
      <p className="pp-title">Demande de visite</p>
      <div className="pp-tree">
        <div className="pp-row">
          <span className="pp-box">Urgent ?</span>
          <span className="pp-note">oui</span>
          <Arrow />
          <span className="pp-box pp-box--red">Transfert</span>
        </div>
        <div className="pp-row pp-row--down">
          <span className="pp-note">non</span>
          <Arrow dir="down" />
        </div>
        <div className="pp-row">
          <span className="pp-circle pp-circle--green">RDV jeu. 14h30</span>
        </div>
        <p className="pp-small">sinon → message à l&apos;équipe</p>
      </div>
    </div>
  );
}

function NoteEquipe() {
  return (
    <div className="pp pp--r">
      <span className="pp-tape" />
      <p className="pp-title">Pour Julien →</p>
      <ul className="pp-list pp-list--dash">
        <li>Mme Lefèvre, T3 V. Hugo</li>
        <li>visite jeu. 14h30 <Check /></li>
        <li>budget 420 k€</li>
      </ul>
      <div className="pp-flow">
        <span className="pp-circle pp-circle--red">à rappeler</span>
        <Arrow />
        <span className="pp-note">avant jeudi</span>
      </div>
      <span className="pp-stamp">Fiche transmise</span>
    </div>
  );
}

const SCENARIOS: { title: string; desc: string; visual: ReactNode }[] = [
  {
    title: "Besoin compris",
    desc: "Rushh identifie la raison de l'appel et comprend la situation avant de transmettre.",
    visual: <NoteBesoin />,
  },
  {
    title: "Informations recueillies",
    desc: "Les éléments utiles à votre équipe sont collectés au fil de l'échange.",
    visual: <NoteInfos />,
  },
  {
    title: "Action adaptée",
    desc: "Rendez-vous, transfert ou message : Rushh applique les règles de votre agence.",
    visual: <NoteAction />,
  },
  {
    title: "Équipe informée",
    desc: "Votre équipe reçoit le contexte utile pour reprendre la demande, sans tout redemander.",
    visual: <NoteEquipe />,
  },
];

/* ══════════════════════════════════════════════
   Les 3 situations du quotidien (texte seul, une par étape)
═══════════════════════════════════════════════ */
const MOMENTS = ["En visite", "Déjà en ligne", "Après la fermeture"];

/* ══════════════════════════════════════════════
   Mise en scène au scroll — UN roulement de molette = UNE étape
   étape 0  « En visite » (apparaît à l'arrivée)
   étape 1  + « Déjà en ligne »
   étape 2  + « Après la fermeture »
   étape 3  « L'appel trouve une réponse. » remplace les trois lignes
   étape 4  il dézoome à sa place, le reste apparaît, la 1ʳᵉ carte remonte
═══════════════════════════════════════════════ */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));

// Positions des 5 étapes le long de la scène (fraction de la distance épinglée)
const STOPS = [0, 0.25, 0.5, 0.75, 1];
const STEP_MS = 950;
const GESTURE_GAP_MS = 160;

// Décalage d'épinglage entre deux cartes (doit rester égal au --i * 26px du CSS)
const PIN_STEP = 26;

export function RelaySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const moveRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scène épinglée : progression du scroll → variables CSS, et molette → étapes discrètes
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

    /* ── Pilotage par étapes ── */
    const stopY = (k: number) =>
      track.getBoundingClientRect().top + window.scrollY + STOPS[k] * distance();
    let animating = false;
    let animStart = 0;
    let lastInterceptTs = 0;
    // Garde-fou : si l'onglet a été mis en veille pendant un pas, on ne reste pas bloqué
    const isAnimating = () => {
      if (animating && performance.now() - animStart > STEP_MS + 800) animating = false;
      return animating;
    };

    const animateTo = (y1: number) => {
      const y0 = window.scrollY;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dur = reduce ? 0 : STEP_MS;
      if (dur === 0) {
        window.scrollTo(0, y1);
        lastInterceptTs = performance.now();
        return;
      }
      animating = true;
      const t0 = performance.now();
      animStart = t0;
      const tick = () => {
        const now = performance.now();
        const u = clamp01((now - t0) / dur);
        window.scrollTo(0, y0 + (y1 - y0) * easeInOutCubic(u));
        lastInterceptTs = now;
        if (u < 1) requestAnimationFrame(tick);
        else animating = false;
      };
      requestAnimationFrame(tick);
    };

    // Renvoie la position d'arrivée si le geste doit être intercepté, sinon null (scroll normal)
    const resolveTarget = (dir: 1 | -1, travel: number): number | null => {
      const y = window.scrollY;
      const eps = 2;
      const first = stopY(0);
      const last = stopY(STOPS.length - 1);
      if (y < first - eps) return dir > 0 && y + travel >= first ? first : null;
      if (y > last + eps) return dir < 0 && y - travel <= last ? last : null;
      if (dir > 0) {
        for (let k = 0; k < STOPS.length; k++) if (stopY(k) > y + eps) return stopY(k);
        return null;
      }
      for (let k = STOPS.length - 1; k >= 0; k--) if (stopY(k) < y - eps) return stopY(k);
      return null;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.deltaY === 0) return;
      const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      const dir: 1 | -1 = px > 0 ? 1 : -1;
      const now = performance.now();

      // Geste déjà pris en charge (ou inertie qui le prolonge) : on l'absorbe
      if (isAnimating() || now - lastInterceptTs < GESTURE_GAP_MS) {
        if (e.cancelable) e.preventDefault();
        lastInterceptTs = now;
        return;
      }
      const target = resolveTarget(dir, Math.abs(px));
      if (target === null) return;
      if (e.cancelable) e.preventDefault();
      lastInterceptTs = now;
      animateTo(target);
    };

    // Tactile : un balayage = une étape
    let touchY = 0;
    let touchState: "idle" | "taken" | "free" | "done" = "idle";
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
      touchState = "idle";
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchState === "free") return;
      const dy = touchY - e.touches[0].clientY;
      const dir: 1 | -1 = dy > 0 ? 1 : -1;
      if (touchState === "idle") {
        if (Math.abs(dy) < 1) return;
        touchState = resolveTarget(dir, window.innerHeight * 0.5) === null ? "free" : "taken";
        if (touchState === "free") return;
      }
      if (e.cancelable) e.preventDefault();
      if (touchState === "taken" && !isAnimating() && Math.abs(dy) > 28) {
        const target = resolveTarget(dir, window.innerHeight * 0.5);
        if (target !== null) animateTo(target);
        touchState = "done";
      }
    };

    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(el.tagName)) return;
      let dir: 1 | -1 | 0 = 0;
      let travel = 80;
      if (e.key === "ArrowDown") dir = 1;
      else if (e.key === "ArrowUp") dir = -1;
      else if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) { dir = 1; travel = window.innerHeight * 0.9; }
      else if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) { dir = -1; travel = window.innerHeight * 0.9; }
      if (!dir) return;
      if (isAnimating()) { e.preventDefault(); return; }
      const target = resolveTarget(dir, travel);
      if (target === null) return;
      e.preventDefault();
      animateTo(target);
    };

    measure();
    update();
    document.fonts?.ready.then(onResize);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Chaque carte se réduit légèrement quand la suivante vient la recouvrir.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)");
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
          {/* 1 · Les trois situations, une par roulement de molette */}
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
                  <div className="rl-visual" aria-hidden>
                    {s.visual}
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
