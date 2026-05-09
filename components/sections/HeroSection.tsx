"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, LayoutDashboard, PhoneCall, Users, Calendar, BarChart3, Search, SlidersHorizontal } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ── AnimatedGroup ── */
const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimatedGroup({ children, className, variants }: {
  children: ReactNode; className?: string;
  variants?: { container?: Variants; item?: Variants };
}) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={cn(className)}>
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

/* ── Dashboard data ── */
const calls = [
  { obj: "Acquéreur 3P Paris 8e", type: "Acquéreur", phone: "06 42 18 55 09" },
  { obj: "Vendeur T4 Lyon 6e", type: "Vendeur", phone: "07 81 34 22 67" },
  { obj: "Locataire Studio Bordeaux", type: "Locataire", phone: "06 93 47 81 15" },
  { obj: "Propriétaire Maison Nantes", type: "Propriétaire", phone: "06 12 58 90 33" },
  { obj: "Acquéreur 2P Marseille 7e", type: "Acquéreur", phone: "07 65 22 41 08" },
  { obj: "Locataire T2 Toulouse", type: "Locataire", phone: "06 78 33 19 52" },
  { obj: "Propriétaire Villa Nice", type: "Propriétaire", phone: "07 44 61 87 20" },
];

const typeBadge: Record<string, { bg: string }> = {
  Acquéreur: { bg: "rgba(0,0,255,0.08)" },
  Vendeur: { bg: "rgba(124,58,237,0.08)" },
  Locataire: { bg: "rgba(16,185,129,0.08)" },
  Propriétaire: { bg: "rgba(245,158,11,0.08)" },
};

const barHeights = [40, 65, 50, 80, 60, 90, 55, 75, 45, 85, 70, 95];

function WaveformBars({ active }: { active: number }) {
  const h = [60, 80, 50, 90, 70, 100, 45, 75, 55, 85, 65, 95, 50, 70, 90, 60];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, height: 24 }}>
      {h.map((height, i) => {
        const dist = Math.min(Math.abs(i - active), Math.abs(i - active + 16), Math.abs(i - active - 16));
        const isActive = dist < 5;
        return (
          <div key={i} style={{ width: 3, borderRadius: 2, height: `${height}%`, background: "white", opacity: isActive ? 1 - dist * 0.15 : 0.3, transition: "opacity 0.15s" }} />
        );
      })}
    </div>
  );
}

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 } },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [waveActive, setWaveActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWaveActive((w) => (w + 1) % 16), 140);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" });
  }, []);

  return (
    <section ref={heroRef} style={{ overflow: "hidden", textAlign: "center" }}>
      {/* Aurora hero area */}
      <AuroraBackground showRadialGradient style={{ padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "clamp(40px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: "#1a1a2e",
            marginBottom: 20,
          }}>
            Votre agence décroche.{" "}
            <span style={{ color: "#0000FF" }}>Même quand</span> vous ne pouvez pas.
          </h1>

          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#6b7280",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}>
            Plus besoin de jongler entre vos visites et votre téléphone. Rushh répond, qualifie, et transmet la fiche prospect 24&nbsp;h/24.
          </p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.75 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}
          >
            <button
              onClick={() => { window.location.href = "tel:0517948549"; }}
              className="hero-btn-phone"
            >
              <Phone size={18} />
              Appeler notre IA
            </button>

            <ButtonColorful
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              label="Réserver une démo"
            />
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Dashboard */}
      <AnimatedGroup
        variants={{
          container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
          ...transitionVariants,
        }}
      >
        <div className="hero-dash-container">
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 10,
            background: "linear-gradient(to bottom, transparent 55%, white 100%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "relative", maxWidth: 1100, margin: "0 auto",
            overflow: "hidden", borderRadius: "20px 20px 0 0",
            border: "1px solid rgba(0,0,0,0.08)", borderBottom: "none",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <div className="dash-shell" style={{ borderRadius: "20px 20px 0 0", border: "none", boxShadow: "none", minHeight: 420 }}>
              {/* Sidebar */}
              <div className="dash-sidebar">
                <div className="dash-sidebar-logo">
                  <img src="/logo-rushh.png" alt="Rushh" style={{ width: 32, height: 32, objectFit: "contain" }} />
                  <span className="dash-logo-text">Rushh</span>
                </div>
                <nav className="dash-nav">
                  <div className="dash-nav-item active"><LayoutDashboard size={15} /><span>Tableau de bord</span></div>
                  <div className="dash-nav-item"><PhoneCall size={15} /><span>Mes appels</span></div>
                  <div className="dash-nav-item"><Users size={15} /><span>Prospects</span></div>
                  <div className="dash-nav-item"><Calendar size={15} /><span>Agenda</span></div>
                  <div className="dash-nav-item"><BarChart3 size={15} /><span>Analyses</span></div>
                </nav>
                <div className="dash-sidebar-user">
                  <div className="dash-user-avatar">A</div>
                  <span className="dash-user-name">Mon agence</span>
                </div>
              </div>

              {/* Main */}
              <div className="dash-main">
                <div className="dash-main-header">
                  <h3 className="dash-main-title">Mes derniers appels</h3>
                  <div className="dash-main-actions">
                    <div className="dash-search"><Search size={13} /><span>Rechercher…</span></div>
                    <div className="dash-filter"><SlidersHorizontal size={13} /></div>
                  </div>
                </div>
                <div className="dash-table">
                  <div className="dash-table-head"><span>Objet</span><span>Type</span><span>Téléphone</span></div>
                  {calls.map((c, i) => (
                    <div className="dash-table-row" key={i}>
                      <span className="dash-cell-obj">{c.obj}</span>
                      <span><span className="dash-badge" style={{ background: typeBadge[c.type].bg, color: "#000" }}>{c.type}</span></span>
                      <span className="dash-cell-phone">{c.phone}</span>
                    </div>
                  ))}
                </div>
                <div className="dash-tabs">
                  <span className="dash-tab active">Tout</span>
                  <span className="dash-tab">Prospects</span>
                  <span className="dash-tab">Clients</span>
                </div>
              </div>

              {/* Right panel */}
              <div className="dash-panel">
                <div className="dash-agent-card">
                  <div className="dash-agent-info">
                    <p className="dash-agent-label">Agent vocal</p>
                    <p className="dash-agent-name">Thomas</p>
                    <p className="dash-agent-phone">05 17 94 85 49</p>
                  </div>
                  <WaveformBars active={waveActive} />
                  <button className="dash-agent-btn">Appel test</button>
                </div>
                <div className="dash-stats-card">
                  <div className="dash-stat-row">
                    <div className="dash-stat-block"><span className="dash-stat-val">1 284</span><span className="dash-stat-label">Appels traités</span></div>
                    <div className="dash-stat-block"><span className="dash-stat-val accent">+11%</span><span className="dash-stat-label">Cette semaine</span></div>
                  </div>
                  <div className="dash-stat-row">
                    <div className="dash-stat-block"><span className="dash-stat-val">2m 34s</span><span className="dash-stat-label">Durée moyenne</span></div>
                    <div className="dash-stat-block"><span className="dash-stat-val">3 312</span><span className="dash-stat-label">Minutes totales</span></div>
                  </div>
                </div>
                <div className="dash-chart-card">
                  <p className="dash-chart-title">Appels / semaine</p>
                  <div className="dash-chart-bars">
                    {barHeights.map((h, i) => (<div key={i} className="dash-chart-bar" style={{ height: `${h}%` }} />))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGroup>
    </section>
  );
}
