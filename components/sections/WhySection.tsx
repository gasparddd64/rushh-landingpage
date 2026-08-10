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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Mutable state in ref to avoid stale closures
    const s = { hijacking: false, cooldown: false, active: 0 };

    const onWheel = (e: WheelEvent) => {
      if (!s.hijacking) return;
      e.preventDefault();
      if (s.cooldown) return;

      if (e.deltaY > 5) {
        // scroll down → next card
        if (s.active < ITEMS.length - 1) {
          s.cooldown = true;
          s.active++;
          setActiveIdx(s.active);
          setTimeout(() => {
            s.cooldown = false;
            // All cards shown → release scroll
            if (s.active >= ITEMS.length - 1) stopHijack();
          }, 650);
        }
      } else if (e.deltaY < -5) {
        // scroll up → previous card or release upward
        if (s.active > 0) {
          s.cooldown = true;
          s.active--;
          setActiveIdx(s.active);
          setTimeout(() => { s.cooldown = false; }, 650);
        } else {
          stopHijack();
        }
      }
    };

    function startHijack() {
      if (s.hijacking) return;
      s.hijacking = true;
      window.addEventListener("wheel", onWheel, { passive: false });
    }

    function stopHijack() {
      s.hijacking = false;
      window.removeEventListener("wheel", onWheel);
    }

    const onScroll = () => {
      if (s.hijacking) return;
      const rect = section.getBoundingClientRect();
      // Hijack when section top lands near the top of the viewport
      const atTop = rect.top <= 40 && rect.top >= -60;
      if (atTop && s.active < ITEMS.length - 1) {
        startHijack();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      stopHijack();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad" id="why">
      <div className="wrap">
        <div className="why-grid" style={{ alignItems: "center" }}>

          {/* Left — unchanged */}
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

          {/* Right — scroll-hijacked card stack */}
          <div className="why-side">
            <div style={{ position: "relative", height: 300, overflow: "visible" }}>
              {ITEMS.map((item, i) => {
                const offset = i - activeIdx;
                const isPast = offset < 0;
                return (
                  <div
                    key={i}
                    className="why-card"
                    style={{
                      zIndex: 30 - i,
                      transform: isPast
                        ? "translateY(-60px) scale(0.95)"
                        : `translateY(${offset * 26}px) scale(${1 - offset * 0.04})`,
                      opacity: isPast ? 0 : offset === 0 ? 1 : 0.7 - offset * 0.2,
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
