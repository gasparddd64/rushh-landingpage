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
   Les 3 situations du quotidien
═══════════════════════════════════════════════ */
const MOMENTS = [
  {
    title: "En visite",
    desc: "Votre attention est avec le client en face de vous.",
    img: "/problem-en-visite.webp",
  },
  {
    title: "Déjà en ligne",
    desc: "Votre équipe échange déjà. Un autre appel arrive.",
    img: "/problem-deja-en-ligne.webp",
  },
  {
    title: "Après la fermeture",
    desc: "Vos clients continuent de vous appeler après vos horaires.",
    img: "/problem-apres-fermeture.webp",
  },
];

/* ══════════════════════════════════════════════
   Mise en scène au scroll
   0 → 46 %   les 3 situations apparaissent une à une
   52 → 72 %  « L'appel trouve une réponse. » surgit au centre et « sonne »
   72 → 92 %  il dézoome à sa place, le reste apparaît autour
   dernier tiers : la 1ʳᵉ carte remonte (chevauchement CSS de la pile)
═══════════════════════════════════════════════ */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));

// Décalage d'épinglage entre deux cartes (doit rester égal au --i * 26px du CSS)
const PIN_STEP = 26;

export function RelaySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const moveRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scène épinglée : on convertit la progression du scroll en variables CSS
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const header = headerRef.current;
    const move = moveRef.current;
    if (!track || !stage || !header || !move) return;

    let dist = 1;
    let raf = 0;

    const measure = () => {
      const stageH = stage.clientHeight;
      dist = Math.max(1, track.offsetHeight - stageH);
      const centerY = header.offsetTop + move.offsetTop + move.offsetHeight / 2;
      // centre visuel de la scène (la barre de navigation occupe le haut)
      stage.style.setProperty("--dy", `${(stageH + 64) / 2 - centerY}px`);
      const scale = (window.innerWidth * 0.9) / Math.max(1, move.offsetWidth);
      stage.style.setProperty("--S", String(Math.min(2.5, Math.max(1.2, scale))));
    };

    const update = () => {
      raf = 0;
      const p = clamp01(-track.getBoundingClientRect().top / dist);
      const set = (k: string, v: number) => stage.style.setProperty(k, v.toFixed(4));
      set("--intro", seg(p, 0, 0.05));
      set("--s1", seg(p, 0.05, 0.13));
      set("--s2", seg(p, 0.18, 0.26));
      set("--s3", seg(p, 0.31, 0.39));
      set("--out", seg(p, 0.46, 0.55));
      set("--ring", seg(p, 0.52, 0.6));
      const z = seg(p, 0.72, 0.9);
      set("--z", z);
      stage.style.setProperty("--mix", `${((1 - z) * 100).toFixed(1)}%`);
      set("--hdr", seg(p, 0.8, 0.92));
      stage.dataset.ring = p > 0.6 && p < 0.73 ? "on" : "off";
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
        <div className="rs-stage" ref={stageRef} data-ring="off">
          {/* 1 · Les trois situations */}
          <div className="rs-steps">
            <div className="rs-steps-head">
              <span className="lf-pill">Le quotidien d&apos;une agence</span>
              <h2 className="lf-h2 rs-steps-title">
                Vous êtes avec vos clients. Les appels, eux, <em>n&apos;attendent pas</em>.
              </h2>
            </div>
            <ol className="rs-steps-list">
              {MOMENTS.map((m, i) => (
                <li key={m.title} className="rs-step" style={{ "--sv": `var(--s${i + 1})` } as CSSProperties}>
                  <picture className="rs-step-img">
                    <img src={m.img} alt="" loading="lazy" />
                  </picture>
                  <div className="rs-step-body">
                    <span className="rs-step-num">0{i + 1}</span>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
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
