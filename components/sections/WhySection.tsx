"use client";

import { useRef, useEffect, useState } from "react";
import { SparklesIcon, LightningIcon } from "@/components/icons";
import { DemoCTA } from "@/components/ui/demo-cta";

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

const ITEMS = [
  {
    icon: <SparklesIcon size={20} />,
    title: "Conçu pour votre agence",
    desc: "Chaque script est écrit pour votre façon de travailler, pas l'inverse. Transaction, location, gestion : Rushh s'adapte à vos métiers, pas le contraire.",
  },
  {
    icon: <LightningIcon size={20} />,
    title: "Déployé pour vous",
    desc: "Aucune configuration technique de votre côté. Rushh se connecte à votre agenda et vos outils existants, mis en service en 5 jours ouvrés.",
  },
  {
    icon: <IconShield />,
    title: "Accompagné dans le temps",
    desc: "Le script évolue avec votre activité. Un ajustement, une correction, une nouvelle règle : ça se fait avec vous, pas en autonomie sur une interface.",
  },
];

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  // Refs to avoid stale closures in event handlers
  const s = useRef({ active: 0, locked: false, cooldown: false, done: false });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function lock() {
      if (s.current.locked || s.current.done) return;
      s.current.locked = true;
      // Prevent scroll without layout shift
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollbarW + "px";
    }

    function unlock() {
      s.current.locked = false;
      s.current.done = true;
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    function advance() {
      if (s.current.cooldown) return;
      s.current.cooldown = true;

      const next = s.current.active + 1;
      s.current.active = next;
      setActiveIdx(next);

      setTimeout(() => {
        s.current.cooldown = false;
        if (s.current.active >= ITEMS.length - 1) {
          unlock();
        }
      }, 650);
    }

    // Lock when section reaches top of viewport
    const handleScroll = () => {
      if (s.current.done) return;
      const rect = section.getBoundingClientRect();
      // Section top is between -50 and +100px from viewport top → lock
      if (rect.top <= 60 && rect.top >= -section.offsetHeight * 0.3) {
        lock();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!s.current.locked) return;
      if (e.deltaY < 20) return;
      e.preventDefault();
      advance();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad" id="why" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="wrap" style={{ width: "100%" }}>
        <div className="why-grid" style={{ alignItems: "center" }}>

          {/* Left column — unchanged */}
          <div>
            <span className="section-eyebrow" style={{ marginBottom: 24 }}>Pourquoi Rushh ?</span>
            <h2 className="section-title" style={{ textAlign: "left", margin: "16px 0 20px", maxWidth: 520 }}>
              Ce que votre agence gagne dès le premier appel.
            </h2>
            <p className="section-sub" style={{ textAlign: "left", margin: "0 0 36px", maxWidth: 460 }}>
              Conçu exclusivement pour l&apos;immobilier. Opérationnel dès la première semaine.
            </p>
            <div style={{ display: "flex", gap: 48, alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap" as const }}>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>100%</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />décrochés</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>0</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />manqués</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>5j</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Pour être<br />opérationnel</div>
              </div>
            </div>
            <DemoCTA />
          </div>

          {/* Right column — scroll-driven card stack */}
          <div className="why-side">
            <div className="why-card-stack">
              {ITEMS.map((item, i) => {
                const offset = i - activeIdx;
                const isPast = offset < 0;
                return (
                  <div
                    key={i}
                    className="why-card"
                    style={{
                      transform: isPast
                        ? "translateY(-120%) scale(0.95)"
                        : `translateY(${offset * 20}px) scale(${1 - offset * 0.035})`,
                      opacity: isPast ? 0 : 1,
                      zIndex: ITEMS.length - offset,
                      boxShadow: offset === 0
                        ? "0 8px 32px rgba(0,0,80,0.10), 0 2px 8px rgba(0,0,0,0.06)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div className="why-card-icon">{item.icon}</div>
                    <div className="why-card-title">{item.title}</div>
                    <p className="why-card-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
