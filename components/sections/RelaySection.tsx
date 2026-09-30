"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ── Maquettes produit (décor) ── */
function Tick() {
  return (
    <span className="mk-tick">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function MockUnderstood() {
  return (
    <div className="mk">
      <div className="mk-top">
        <span className="mk-live"><i className="mk-dot" />Appel en cours</span>
        <span>00:42</span>
      </div>
      <div className="mk-row">
        <div className="mk-avatar">ML</div>
        <div>
          <div className="mk-name">Mme Lefèvre</div>
          <div className="mk-meta">06 12 •• •• 48</div>
        </div>
      </div>
      <div className="mk-bubble mk-bubble--ai">Agence Durand, bonjour. Comment puis-je vous aider ?</div>
      <div className="mk-bubble">Je vous appelle au sujet de l&apos;appartement rue Victor Hugo.</div>
      <div className="mk-chips">
        <span className="mk-chip mk-chip--accent">Demande de visite</span>
        <span className="mk-chip">T3 · Rue Victor Hugo</span>
      </div>
    </div>
  );
}

function MockCollected() {
  return (
    <div className="mk">
      <div className="mk-top">
        <span className="mk-title">Fiche d&apos;appel</span>
        <span>4 / 5</span>
      </div>
      <ul className="mk-list">
        <li className="mk-field"><span>Nom</span><b>Mme Lefèvre <Tick /></b></li>
        <li className="mk-field"><span>Téléphone</span><b>06 12 •• •• 48 <Tick /></b></li>
        <li className="mk-field"><span>Bien</span><b>T3 · Rue Victor Hugo <Tick /></b></li>
        <li className="mk-field"><span>Budget</span><b>420 000 € <Tick /></b></li>
        <li className="mk-field"><span>Disponibilités</span><b>En cours <span className="mk-tick mk-tick--pending" /></b></li>
      </ul>
      <div className="mk-progress"><i /></div>
    </div>
  );
}

function MockAction() {
  return (
    <div className="mk">
      <div className="mk-top">
        <span className="mk-title">Règle appliquée</span>
        <span>Demande de visite</span>
      </div>
      <div className="mk-option mk-option--on">
        <b>Rendez-vous</b>
        <span>Jeu. 14h30 · Visite confirmée dans l&apos;agenda</span>
      </div>
      <div className="mk-option">
        <b>Transfert</b>
        <span>Si la demande est urgente</span>
      </div>
      <div className="mk-option">
        <b>Message</b>
        <span>Note laissée à l&apos;équipe</span>
      </div>
    </div>
  );
}

function MockTeam() {
  return (
    <div className="mk">
      <div className="mk-notif">
        <img src="/logo-rushh-icon.png" alt="" />
        <b>Nouvelle fiche</b>
        <time>il y a 2 min</time>
      </div>
      <div className="mk-bubble">
        Mme Lefèvre souhaite visiter le T3 rue Victor Hugo jeudi à 14h30. Budget 420 000 €. Visite confirmée.
      </div>
      <div className="mk-chips">
        <span className="mk-chip mk-chip--accent">Acheteur</span>
        <span className="mk-chip">Rappel conseillé</span>
      </div>
      <div className="mk-actions">
        <span className="mk-btn">Rappeler</span>
        <span className="mk-btn mk-btn--accent">Ouvrir la fiche</span>
      </div>
    </div>
  );
}

/* ── Scénarios ── */
const SCENARIOS: { title: string; desc: string; visual: ReactNode }[] = [
  {
    title: "Besoin compris",
    desc: "Rushh identifie la raison de l'appel et comprend la situation avant de transmettre.",
    visual: <MockUnderstood />,
  },
  {
    title: "Informations recueillies",
    desc: "Les éléments utiles à votre équipe sont collectés au fil de l'échange.",
    visual: <MockCollected />,
  },
  {
    title: "Action adaptée",
    desc: "Rendez-vous, transfert ou message : Rushh applique les règles de votre agence.",
    visual: <MockAction />,
  },
  {
    title: "Équipe informée",
    desc: "Votre équipe reçoit le contexte utile pour reprendre la demande, sans tout redemander.",
    visual: <MockTeam />,
  },
];

// Décalage d'épinglage entre deux cartes (doit rester égal au --i * 18px du CSS)
const PIN_STEP = 18;

export function RelaySection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section id="relais" aria-labelledby="relais-title">
      <div className="lf-wrap">
        <div className="lf-head--center">
          <span className="lf-pill">Le relais Rushh</span>
          <h2 id="relais-title" className="lf-h2">L&apos;appel trouve une réponse.</h2>
          <p className="lf-sub">
            La demande est comprise, les informations utiles sont recueillies et votre équipe sait quoi reprendre.
          </p>
        </div>

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
                <div className={`rl-visual rl-visual--${i + 1}`} aria-hidden>
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
    </section>
  );
}
