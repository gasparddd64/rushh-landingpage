"use client";

import { useState, useEffect } from "react";

/* ── Widget 01 — Appel décroché ── */
function Widget01() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s + 1) % 120), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sol-widget">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>+33 6 42 •• •• 09</span>
        </div>
        <span style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{m}:{s}</span>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)" }}>
        Taux de décroché <strong style={{ color: "var(--ink)" }}>100%</strong>
      </div>
    </div>
  );
}

/* ── Widget 02 — Besoin compris ── */
const BUBBLES = [
  { from: "caller", text: "Je cherche un 3 pièces dans le 17e…" },
  { from: "rushh",  text: "Vous avez un budget en tête ?" },
  { from: "caller", text: "Entre 500 et 600 000 €." },
];

function Widget02() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        for (let i = 1; i <= BUBBLES.length; i++) {
          await new Promise<void>((r) => setTimeout(r, 900));
          if (!cancelled) setShown(i);
        }
        await new Promise<void>((r) => setTimeout(r, 2500));
        if (!cancelled) setShown(0);
        await new Promise<void>((r) => setTimeout(r, 400));
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="sol-widget" style={{ display: "flex", flexDirection: "column", gap: 8, padding: "14px 14px" }}>
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: b.from === "rushh" ? "flex-end" : "flex-start",
            opacity: i < shown ? 1 : 0,
            transform: i < shown ? "translateY(0)" : "translateY(5px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div style={{
            padding: "9px 13px",
            borderRadius: b.from === "rushh" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
            background: b.from === "rushh" ? "#0047C6" : "white",
            color: b.from === "rushh" ? "white" : "var(--ink)",
            fontSize: 13,
            lineHeight: 1.45,
            maxWidth: "86%",
          }}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Widget 03 — Prospect qualifié ── */
function Widget03() {
  return (
    <div className="sol-widget">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
        {[
          { label: "SECTEUR",  value: "Paris 17e" },
          { label: "BUDGET",   value: "500 – 600 k€" },
          { label: "DÉLAI",    value: "3 à 6 mois" },
        ].map((f) => (
          <div key={f.label}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", marginBottom: 3 }}>{f.label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Widget 04 — Action engagée ── */
function Widget04() {
  return (
    <>
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        background: "white", border: "1px solid var(--line)",
        borderRadius: 12, padding: "12px 14px",
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8,
          background: "rgba(0,71,198,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0047C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Rendez-vous proposé — demain 14h</span>
      </div>
      <div className="sol-widget-note">Résumé envoyé à l&apos;agence en parallèle.</div>
    </>
  );
}

/* ── Widget 05 — Fiche transmise ── */
function Widget05() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        await new Promise<void>((r) => setTimeout(r, 1000));
        if (!cancelled) setSent(true);
        await new Promise<void>((r) => setTimeout(r, 3000));
        if (!cancelled) setSent(false);
        await new Promise<void>((r) => setTimeout(r, 600));
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "white", border: "1px solid var(--line)",
        borderRadius: 12, padding: "12px 16px",
      }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Marie Dubois</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>T3 — Paris 17e</div>
        </div>
        <div style={{
          fontSize: 13, fontWeight: 700,
          color: sent ? "#10b981" : "var(--muted)",
          transition: "color 0.4s ease",
        }}>
          {sent ? "✓ Transmise" : "En attente…"}
        </div>
      </div>
      <div className="sol-widget-note" style={{ opacity: sent ? 1 : 0, transition: "opacity 0.4s ease" }}>
        Reçue il y a quelques secondes
      </div>
    </>
  );
}

/* ── Steps data ── */
const STEPS = [
  {
    num: "01",
    title: "Appel décroché",
    desc: "Rushh répond à la première sonnerie, 24h/24, 7j/7.",
    widget: <Widget01 />,
  },
  {
    num: "02",
    title: "Besoin compris",
    desc: "Rushh identifie en quelques échanges la nature précise de la demande.",
    widget: <Widget02 />,
  },
  {
    num: "03",
    title: "Prospect qualifié",
    desc: "Les informations clés sont collectées une à une.",
    widget: <Widget03 />,
  },
  {
    num: "04",
    title: "Action engagée",
    desc: "Rushh propose un rendez-vous ou transmet un message.",
    widget: <Widget04 />,
  },
  {
    num: "05",
    title: "Fiche transmise",
    desc: "Votre équipe reçoit une fiche complète, prête à traiter.",
    widget: <Widget05 />,
  },
];

/* ── Connector arrow ── */
function ConnectorArrow({ fromRight }: { fromRight: boolean }) {
  return (
    <div className="sol-connector-wrap" aria-hidden>
      <svg viewBox="0 0 600 64" preserveAspectRatio="none" className="sol-connector-svg">
        <defs>
          <marker id={`arr-${fromRight ? "r" : "l"}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#c8d4ee" />
          </marker>
        </defs>
        {fromRight ? (
          <path d="M 500,4 C 500,40 100,24 100,60" fill="none" stroke="#c8d4ee" strokeWidth="1.5" strokeDasharray="6 5" markerEnd="url(#arr-r)" />
        ) : (
          <path d="M 100,4 C 100,40 500,24 500,60" fill="none" stroke="#c8d4ee" strokeWidth="1.5" strokeDasharray="6 5" markerEnd="url(#arr-l)" />
        )}
      </svg>
    </div>
  );
}

/* ── Main ── */
export function SolutionSection() {
  return (
    <section className="section-pad solution-section" id="solution">
      <div className="wrap">

        <div className="section-head">
          <span className="section-eyebrow">La réponse</span>
          <h2 className="section-title">Rushh, lui, n&apos;est jamais occupé.</h2>
          <p className="section-sub">
            Chaque appel est décroché, compris, qualifié, puis transmis à votre agence, prêt à être traité.
          </p>
        </div>

        <div className="sol-steps">
          {STEPS.map((s, i) => {
            const isRight = i % 2 === 1;
            return (
              <div key={i}>
                {i > 0 && <ConnectorArrow fromRight={i % 2 === 0} />}
                <div className={`sol-card-row sol-card-row--${isRight ? "right" : "left"}`}>
                  <div className="sol-card">
                    <div className="sol-card-dot" />
                    <div className="sol-card-num">{s.num}</div>
                    <h3 className="sol-card-title">{s.title}</h3>
                    <p className="sol-card-desc">{s.desc}</p>
                    {s.widget}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="sol-closing">
          Transaction, location ou gestion locative : le scénario s&apos;adapte au métier de votre agence, pas l&apos;inverse.
        </p>

      </div>
    </section>
  );
}
