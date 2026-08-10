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

    const onScroll = () => {
      const sectionH = section.offsetHeight;
      const vh = window.innerHeight;
      const scrollable = sectionH - vh;
      if (scrollable <= 0) return;

      const scrolledIn = -section.getBoundingClientRect().top;
      if (scrolledIn < 0) {
        // Above section — reset to first card
        setActiveIdx(0);
        return;
      }
      const progress = Math.min(1, scrolledIn / scrollable);
      // 3 cards = 2 transitions at 33% and 66%
      const idx = Math.min(ITEMS.length - 1, Math.floor(progress * ITEMS.length));
      setActiveIdx(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Don't call onScroll on mount — keep activeIdx=0 (all 3 cards visible)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="why" style={{ height: `${ITEMS.length * 100}vh` }}>
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "white",
      }}>
        <div className="wrap" style={{ width: "100%" }}>
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

            {/* Right — card stack */}
            <div className="why-side">
              {/* overflow:visible so peeking cards aren't clipped */}
              <div style={{ position: "relative", height: 280, overflow: "visible" }}>
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
                          ? "translateY(-40px) scale(0.96)"
                          : `translateY(${offset * 24}px) scale(${1 - offset * 0.04})`,
                        opacity: isPast ? 0 : 1,
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
      </div>
    </section>
  );
}
