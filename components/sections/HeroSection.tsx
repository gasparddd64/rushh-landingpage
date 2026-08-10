"use client";

import React, { useState, useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

/* ── City carousel (mobile) ── */
const cityRow1 = [
  { name: "Paris", src: "/city-paris-v2.jpg" },
  { name: "Lyon", src: "/city-lyon-v2.jpg" },
  { name: "Bordeaux", src: "/city-bordeaux-v2.jpg" },
  { name: "Marseille", src: "/city-marseille-v2.jpg" },
  { name: "Nice", src: "/city-nice-v2.jpg" },
  { name: "Toulouse", src: "/city-toulouse-v2.jpg" },
  { name: "Lille", src: "/city-lille-v2.jpg" },
  { name: "Strasbourg", src: "/city-strasbourg-v2.jpg" },
  { name: "Nantes", src: "/city-nantes-v2.jpg" },
  { name: "Biarritz", src: "/city-biarritz-v2.jpg" },
];

/* ── Utility ── */
function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

/* ── Icons ── */
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1"/>
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

/* ── Waveform ── */
function Waveform({ active }: { active: boolean }) {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: 40 }, () => 0.1 + Math.random() * 0.15)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => {
        const next = prev.slice(1);
        const amp = active
          ? 0.15 + Math.random() * 0.75
          : 0.06 + Math.random() * 0.16;
        next.push(Math.max(0.05, Math.min(1, amp)));
        return next;
      });
    }, 80);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, height: 22 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: 2,
            borderRadius: 1,
            background: "#c8d3e4",
            height: `${h * 100}%`,
            transition: "height 0.08s ease",
          }}
        />
      ))}
    </div>
  );
}

/* ── Chrono ── */
function Chrono() {
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setSecs(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return <>{m}:{s}</>;
}

/* ── Step marker ── */
type StepState = "pending" | "active" | "completed";

function StepMarker({ state, icon }: { state: StepState; icon: React.ReactNode }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background:
          state === "completed" ? "#2d4fd6"
          : state === "active" ? "#eef2fd"
          : "white",
        border:
          state === "pending" ? "1.5px solid #d4d8e4"
          : state === "active" ? "1.5px solid #2d4fd6"
          : "none",
        color:
          state === "completed" ? "white"
          : state === "active" ? "#2d4fd6"
          : "#b0bacf",
        transition: "background 0.4s ease, border-color 0.4s ease, color 0.4s ease",
        position: "relative",
        zIndex: 2,
      }}
    >
      {state === "completed" ? <IconCheck /> : icon}
    </div>
  );
}

/* ── Qualification fields ── */
const QUAL_FIELDS = [
  { label: "Type de bien", value: "T3" },
  { label: "Quartier", value: "Batignolles" },
  { label: "Budget", value: "420 000 €" },
];

/* ── Animation phases ──
 * 0 : step1 active, nothing filled
 * 1 : step1 done, progress 50%, step2 active, field0 appears
 * 2 : field1 appears
 * 3 : field2 appears
 * 4 : step2 done, progress 100%, step3 active, "Envoi en cours..."
 * 5 : "Transmise à l'agence ✓"
 */
type Phase = 0 | 1 | 2 | 3 | 4 | 5;

/* ── CallTimeline ── */
function CallTimeline() {
  const [phase, setPhase] = useState<Phase>(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        setPhase(0);
        setVisible(true);

        await delay(950);
        if (cancelled) return;
        setPhase(1);

        await delay(680);
        if (cancelled) return;
        setPhase(2);

        await delay(680);
        if (cancelled) return;
        setPhase(3);

        await delay(850);
        if (cancelled) return;
        setPhase(4);

        await delay(1100);
        if (cancelled) return;
        setPhase(5);

        await delay(2800);
        if (cancelled) return;

        setVisible(false);
        await delay(550);
        if (cancelled) return;
      }
    }

    run();
    return () => { cancelled = true; };
  }, []);

  /* Derived */
  const step1: StepState = phase >= 1 ? "completed" : "active";
  const step2: StepState = phase >= 4 ? "completed" : phase >= 1 ? "active" : "pending";
  const step3: StepState = phase >= 5 ? "completed" : phase >= 4 ? "active" : "pending";
  const progressPct = phase === 0 ? 0 : phase <= 3 ? 50 : 100;

  const step3Label =
    phase >= 5 ? "Transmise à l'agence"
    : phase >= 4 ? "Envoi en cours..."
    : "En attente de qualification.";

  const eyebrowStyle: React.CSSProperties = {
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: "0.09em",
    color: "#2d4fd6",
    textTransform: "uppercase",
    marginBottom: 4,
  };

  const stepTitleStyle: React.CSSProperties = {
    fontSize: 13.5,
    fontWeight: 600,
    color: "#1a1f36",
    letterSpacing: "-0.01em",
    marginBottom: 7,
  };

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{
        background: "white",
        borderRadius: 14,
        border: "1px solid #e4e8f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.07)",
        overflow: "hidden",
        maxWidth: 860,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ padding: "16px 22px 13px", borderBottom: "1px solid #f0f2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 11 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2d4fd6", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1f36", letterSpacing: "-0.01em" }}>
                Appel en cours
              </span>
            </div>
            <div style={{ fontSize: 11, color: "#8b9ab4", fontFamily: "'SF Mono', 'Fira Mono', monospace", letterSpacing: "0.04em" }}>
              +33 6 42 •• •• 18
            </div>
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#1a1f36", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
            <Chrono />
          </div>
        </div>
        <Waveform active={phase >= 1 && phase <= 3} />
      </div>

      {/* Body */}
      <div style={{ padding: "22px 22px 26px" }}>

        {/* Progress track */}
        <div style={{ position: "relative", height: 32, marginBottom: 16 }}>
          {/* Background track */}
          <div style={{
            position: "absolute", top: "50%", left: 16, right: 16,
            height: 2, background: "#e4e8f0",
            transform: "translateY(-50%)", borderRadius: 1,
          }} />
          {/* Fill */}
          <div style={{
            position: "absolute", top: "50%", left: 16,
            height: 2, background: "#2d4fd6",
            transform: "translateY(-50%)", borderRadius: 1,
            width: `calc((100% - 32px) * ${progressPct} / 100)`,
            transition: "width 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
          }} />
          {/* Markers */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%", position: "relative", zIndex: 2 }}>
            <StepMarker state={step1} icon={<IconPhone />} />
            <StepMarker state={step2} icon={<IconClipboard />} />
            <StepMarker state={step3} icon={<IconSend />} />
          </div>
        </div>

        {/* Step content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>

          {/* Step 1 */}
          <div>
            <div style={eyebrowStyle}>Étape 1</div>
            <div style={stepTitleStyle}>Appel entrant</div>
            <div style={{ fontSize: 12, color: "#6b7a99", lineHeight: 1.55 }}>
              Décroché en moins d'une sonnerie.
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ opacity: step2 === "pending" ? 0.28 : 1, transition: "opacity 0.4s ease" }}>
            <div style={eyebrowStyle}>Étape 2</div>
            <div style={stepTitleStyle}>Qualification</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {QUAL_FIELDS.map((f, i) => (
                <div
                  key={f.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "4px 0",
                    borderBottom: i < QUAL_FIELDS.length - 1 ? "1px solid #f0f2f7" : "none",
                    opacity: phase >= i + 1 ? 1 : 0,
                    transform: phase >= i + 1 ? "translateY(0)" : "translateY(3px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <span style={{ fontSize: 11, color: "#8b9ab4" }}>{f.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1f36" }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ opacity: step3 === "pending" ? 0.28 : 1, transition: "opacity 0.4s ease" }}>
            <div style={eyebrowStyle}>Étape 3</div>
            <div style={stepTitleStyle}>Fiche transmise</div>
            <div style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 12,
              color: phase >= 5 ? "#2d4fd6" : "#6b7a99",
              fontWeight: phase >= 5 ? 600 : 400,
              transition: "color 0.3s ease",
            }}>
              {phase >= 5 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2d4fd6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
              {step3Label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-full" aria-hidden />
      <div className="hero-bg-overlay" aria-hidden />

      <AuroraBackground showRadialGradient style={{ padding: "120px 24px 40px" }}>
        <div className="hero-inner">
          <h1 className="hero-title hero-desktop-only">
            Chaque appel reçoit<br />
            une vraie réponse.
          </h1>
          <p className="hero-subtitle hero-subtitle-desktop hero-desktop-only">
            Rushh décroche, qualifie le prospect et transmet la fiche à votre agence — sans jamais laisser un appel sans réponse.
          </p>

          <h1 className="hero-title hero-mobile-only">
            Chaque appel reçoit<br />
            une vraie réponse.
          </h1>
          <p className="hero-subtitle hero-mobile-only" style={{ textAlign: "center" }}>
            Rushh décroche, qualifie le prospect et transmet la fiche à votre agence — sans jamais laisser un appel sans réponse.
          </p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.75 }}
            className="hero-ctas"
          >
            <button
              onClick={() => { document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }}
              className="hero-btn-phone hero-cta-equal"
            >
              Voir comment ça marche
            </button>
            <button
              onClick={() => window.open("https://calendly.com/gaspardv/rushh", "_blank")}
              className="hero-btn-demo hero-cta-equal"
            >
              Réserver ma démo
            </button>
          </motion.div>

          {/* Mobile city carousel */}
          <div className="hero-city-carousel">
            <div className="hero-city-track hero-city-track-1">
              {[...cityRow1, ...cityRow1].map((c, i) => (
                <div key={i} className="hero-city-card">
                  <img src={c.src} alt={c.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
