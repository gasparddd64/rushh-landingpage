"use client";

import { useRef, useEffect, useState, type MouseEvent } from "react";
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
    desc: "Chaque script est écrit pour votre façon de travailler. Transaction, location, gestion : Rushh s'adapte à vos métiers, pas le contraire.",
  },
  {
    icon: <LightningIcon size={20} />,
    title: "Déployé pour vous",
    desc: "Aucune configuration technique de votre côté. Rushh se connecte à votre agenda et vos outils, mis en service en 5 jours ouvrés.",
  },
  {
    icon: <IconShield />,
    title: "Accompagné dans le temps",
    desc: "Le script évolue avec votre activité. Un ajustement, une correction, une nouvelle règle : ça se fait avec vous.",
  },
];

function WhyTile({ icon, title, desc, visible }: { icon: React.ReactNode; title: string; desc: string; visible: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  };
  return (
    <div
      ref={ref}
      className="why-tile"
      onMouseMove={onMove}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="why-tile-head">
        <div className="why-tile-icon" style={{ background: "var(--accent-soft)", color: "var(--accent)", width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center" }}>
          {icon}
        </div>
        <div className="why-tile-title">{title}</div>
      </div>
      <p className="why-tile-desc">{desc}</p>
    </div>
  );
}

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Start with 1 tile visible
  const [shown, setShown] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (scrolledIn < 0) { setShown(1); return; }
      const progress = Math.min(1, scrolledIn / scrollable);
      // progress 0→0.33 → 1 tile, 0.33→0.66 → 2 tiles, 0.66→1 → 3 tiles
      const count = Math.min(ITEMS.length, Math.floor(progress * ITEMS.length) + 1);
      setShown(count);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // 300vh gives 200vh of scroll room so the sticky panel stays while tiles reveal
    <section ref={sectionRef} id="why" style={{ height: "300vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ width: "100%" }}>
          <div className="why-grid" style={{ alignItems: "flex-start" }}>

            {/* Left */}
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

            {/* Right — tiles revealed on scroll */}
            <div className="why-side">
              {ITEMS.map((item, i) => (
                <WhyTile
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  visible={i < shown}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
