"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { TestezCTA } from "@/components/ui/testez-cta";

const SCENARIOS = [
  {
    title: "Besoin compris",
    tag: "Capté",
    points: [
      { lead: "Estimation, visite, location ou gestion :", text: "Rushh identifie rapidement pourquoi votre client appelle." },
      { lead: "Vendeur, acquéreur, locataire ou propriétaire bailleur :", text: "chaque demande est prise en charge selon son contexte." },
    ],
    img: "/scenario-1.webp",
    alt: "Post-it jaune collé sur un écran d'ordinateur : Mme Lefèvre, visite T3, Victor Hugo, budget OK",
  },
  {
    title: "Les bonnes informations recueillies",
    tag: "Organisé",
    points: [
      { lead: "Projet immobilier, bien concerné, disponibilités, urgence :", text: "Rushh pose les questions utiles." },
      { lead: "Votre équipe retrouve une demande claire et complète,", text: "sans avoir à tout redemander." },
    ],
    img: "/scenario-2.webp",
    alt: "Post-it jaune posé sur un agenda : M. Bernard, rappel demain, achat maison, budget à voir",
  },
  {
    title: "La bonne action, au bon moment",
    tag: "Traité",
    points: [
      { lead: "Proposer un rendez-vous, transférer un appel ou transmettre un message :", text: "Rushh agit selon vos consignes." },
      { lead: "Et si votre agenda est connecté,", text: "vos rendez-vous peuvent être organisés directement." },
    ],
    img: "/scenario-3.webp",
    alt: "Post-it jaune sur un téléphone de bureau d'agence : Mme Martin, vendeuse, rappel demain, pour Sarah",
  },
  {
    title: "Vous savez qui rappeler, et pourquoi",
    tag: "Transmis",
    points: [
      { lead: "Un propriétaire souhaite vendre ? Un acquéreur attend une visite ?", text: "Vous retrouvez le motif, les coordonnées et les informations recueillies." },
      { lead: "Votre équipe sait exactement", text: "quelle suite donner à chaque appel." },
    ],
    img: "/scenario-4.webp",
    alt: "Post-it jaune posé près d'un téléphone : M. Martin, achat résidence principale, T4 ou T5, Bordeaux, budget environ 650 000 euros",
  },
]

// Décalage d'épinglage entre deux cartes (doit rester égal au --i * 26px du CSS)
const PIN_STEP = 26;

export function RelaySection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Épinglage : une carte plus haute que l'écran se cale plus haut, pour qu'on puisse en lire toute la fin avant que la suivante la recouvre.
  useEffect(() => {
    const pin = () => {
      const base = window.innerWidth <= 768 ? 84 : 92;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const wanted = base + i * PIN_STEP;
        const fit = window.innerHeight - el.offsetHeight - 14;
        el.style.top = `${Math.max(8, Math.min(wanted, fit))}px`;
      });
    };
    pin();
    const ro = new ResizeObserver(pin);
    itemRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", pin);
    document.fonts?.ready.then(pin);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", pin);
    };
  }, []);

  return (
    <section id="relais" className="rs-section" data-no-reveal aria-labelledby="relais-title">
      <div className="lf-wrap">
        <div className="rs-head">
          <span className="lf-pill">Le relais Rushh</span>
          <h2 id="relais-title" className="lf-h2 rs-h2">
            Vos équipes sont occupées.<br />Rushh prend le relais.
          </h2>
          <p className="lf-sub rs-sub">
            Demande d&apos;estimation, visite à organiser, urgence locative… Rushh répond à vos clients, pose les bonnes questions et fait avancer chaque demande selon votre organisation.
          </p>
        </div>
      </div>

      {/* Les quatre cartes */}
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
                >
                  <div className="rl-visual">
                    <img src={s.img} alt={s.alt} loading="lazy" />
                    <span className="rl-chip">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                      {s.tag}
                    </span>
                  </div>
                  <div className="rl-content">
                    <span className="rl-stepnum">0{i + 1}</span>
                    <h3 className="rl-title">{s.title}</h3>
                    <ul className="rl-points">
                      {s.points.map((pt) => (
                        <li key={pt.lead} className="rl-point">
                          <svg className="rl-badge" width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                            <path className="rl-badge-bg" d="M12 2.2c.7 0 1.4.2 2 .6l5.6 3.2c1.2.7 2 2 2 3.4v5.2c0 1.4-.8 2.7-2 3.4L14 21.2c-1.2.7-2.8.7-4 0L4.4 18c-1.2-.7-2-2-2-3.4V9.4c0-1.4.8-2.7 2-3.4L10 2.8c.6-.4 1.3-.6 2-.6z" />
                            <rect className="rl-badge-dot" x="9.3" y="9.3" width="5.4" height="5.4" rx="1.4" transform="rotate(45 12 12)" />
                          </svg>
                          <span>
                            <b>{pt.lead}</b> {pt.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {i === 0 ? <TestezCTA /> : i === SCENARIOS.length - 1 ? <DemoCTA label="Réserver une démo" /> : null}
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
