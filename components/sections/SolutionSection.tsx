"use client";

import { useState, useEffect } from "react";

/* ── Visual 1 — Incoming call ── */
function VisualCall() {
  const [bars, setBars] = useState(() => Array.from({ length: 24 }, () => 0.15 + Math.random() * 0.2));
  const [tick, setTick] = useState(0);
  const sec = String(Math.floor(tick / 8) % 60).padStart(2, "0");

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => {
        const next = prev.slice(1);
        next.push(Math.max(0.1, Math.min(1, 0.35 + 0.55 * Math.abs(Math.sin(tick * 0.4)) + (Math.random() - 0.5) * 0.3)));
        return next;
      });
      setTick((t) => t + 1);
    }, 130);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 3 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
              Appel entrant
            </div>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono), monospace", color: "var(--muted)" }}>+33 6 42 •• •• 09</div>
          </div>
          <div style={{ fontSize: 13, fontFamily: "var(--font-mono), monospace", color: "var(--accent)", fontWeight: 600 }}>0:{sec}</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 52, marginBottom: 14 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 2, minHeight: 3, height: `${h * 100}%`, background: "linear-gradient(180deg, #0047C6, #6ea3f7)", transition: "height 0.13s ease" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { l: "Temps de réponse", v: "< 1 s", c: "var(--accent)" },
            { l: "Taux de décroché", v: "100%", c: "#10b981" },
          ].map((k) => (
            <div key={k.l} style={{ background: "var(--bg-soft)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 3 }}>{k.l}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: k.c, letterSpacing: "-0.01em" }}>{k.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Visual 2 — Conversation bubbles ── */
const BUBBLES = [
  { from: "caller", text: "Bonjour, je cherche un 3 pièces dans le 17e…" },
  { from: "rushh", text: "Bien sûr. Vous avez un budget approximatif en tête ?" },
  { from: "caller", text: "Entre 500 et 600 000 €." },
  { from: "rushh", text: "Parfait. Et vous envisagez d'acheter pour quand ?" },
];

function VisualConversation() {
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
    <div className="sol-visual">
      <div className="sol-visual-card" style={{ padding: "18px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>Conversation en cours</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {BUBBLES.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: b.from === "rushh" ? "flex-end" : "flex-start",
                opacity: i < shown ? 1 : 0,
                transform: i < shown ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div style={{
                maxWidth: "82%",
                padding: "8px 12px",
                borderRadius: b.from === "rushh" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background: b.from === "rushh" ? "#0047C6" : "var(--bg-soft)",
                color: b.from === "rushh" ? "white" : "var(--ink)",
                fontSize: 12.5,
                lineHeight: 1.5,
              }}>
                {b.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Visual 3 — Qualification fields ── */
const QFIELDS = [
  { label: "Type de projet", value: "Achat — T3" },
  { label: "Secteur", value: "Paris 17e" },
  { label: "Budget", value: "500 – 600 k€" },
  { label: "Délai", value: "3 à 6 mois" },
];

function VisualQualif() {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        for (let i = 1; i <= QFIELDS.length; i++) {
          await new Promise<void>((r) => setTimeout(r, 700));
          if (!cancelled) setFilled(i);
        }
        await new Promise<void>((r) => setTimeout(r, 2200));
        if (!cancelled) setFilled(0);
        await new Promise<void>((r) => setTimeout(r, 400));
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}>Fiche de qualification</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#10b981", background: "rgba(16,185,129,0.08)", padding: "3px 8px", borderRadius: 6 }}>{filled}/{QFIELDS.length} champs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {QFIELDS.map((f, i) => (
            <div key={f.label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "9px 12px",
              borderRadius: 10,
              border: "1px solid",
              borderColor: i < filled ? "var(--accent)" : "var(--line)",
              background: i < filled ? "rgba(0,71,198,0.03)" : "var(--bg-soft)",
              transition: "all 0.35s ease",
            }}>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{f.label}</span>
              <span style={{
                fontSize: 13, fontWeight: 600, color: "var(--ink)",
                opacity: i < filled ? 1 : 0,
                transform: i < filled ? "translateX(0)" : "translateX(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}>{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Visual 4 — Action notification ── */
function VisualAction() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        await new Promise<void>((r) => setTimeout(r, 1000));
        if (!cancelled) setStep(1);
        await new Promise<void>((r) => setTimeout(r, 900));
        if (!cancelled) setStep(2);
        await new Promise<void>((r) => setTimeout(r, 2400));
        if (!cancelled) setStep(0);
        await new Promise<void>((r) => setTimeout(r, 500));
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>Action déclenchée</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: "📅", label: "Rendez-vous proposé", sub: "Demain 14h — Agenda synchronisé", active: step >= 1 },
            { icon: "✉️", label: "Message transmis", sub: "Résumé envoyé à l'agence", active: step >= 2 },
          ].map((a, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid",
              borderColor: a.active ? "var(--accent)" : "var(--line)",
              background: a.active ? "rgba(0,71,198,0.04)" : "var(--bg-soft)",
              opacity: a.active ? 1 : 0.35,
              transition: "all 0.4s ease",
            }}>
              <span style={{ fontSize: 18 }}>{a.icon}</span>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink)" }}>{a.label}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{a.sub}</div>
              </div>
              {a.active && <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Visual 5 — Fiche transmise ── */
function VisualFiche() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        await new Promise<void>((r) => setTimeout(r, 800));
        if (!cancelled) setVisible(true);
        await new Promise<void>((r) => setTimeout(r, 3000));
        if (!cancelled) setVisible(false);
        await new Promise<void>((r) => setTimeout(r, 600));
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #e8c4a0, #d4a07a)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--ink)" }}>Marie Dubois</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Acquéreur qualifié</div>
          </div>
          <div style={{
            marginLeft: "auto", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
            background: visible ? "rgba(16,185,129,0.1)" : "var(--bg-soft)",
            color: visible ? "#10b981" : "var(--muted)",
            transition: "all 0.4s ease",
          }}>
            {visible ? "✓ Transmise" : "En attente"}
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {[
            { l: "Téléphone", v: "06 42 18 55 09" },
            { l: "Budget", v: "500 – 600 k€" },
            { l: "Recherche", v: "T3 — Paris 17e" },
            { l: "Délai", v: "3 à 6 mois" },
          ].map((r, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid var(--line)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(4px)",
              transition: `opacity 0.3s ease ${i * 80}ms, transform 0.3s ease ${i * 80}ms`,
            }}>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{r.l}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}>{r.v}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, textAlign: "center",
          fontSize: 11, color: visible ? "#10b981" : "var(--muted)",
          fontWeight: 600, transition: "color 0.4s ease",
        }}>
          {visible ? "Reçue il y a quelques secondes" : "En attente de qualification…"}
        </div>
      </div>
    </div>
  );
}

/* ── Steps data ── */
const STEPS = [
  {
    num: "01",
    title: "Appel décroché",
    desc: "Rushh répond à la première sonnerie, 24h/24, 7j/7. Aucun appel ne tombe dans le vide.",
    bullets: ["Moins d'une sonnerie", "Disponible la nuit et le week-end", "Aucun coût de mise en attente"],
    visual: <VisualCall />,
  },
  {
    num: "02",
    title: "Besoin compris",
    desc: "Rushh engage la conversation naturellement et identifie en quelques échanges la nature précise de la demande.",
    bullets: ["Achat, location, vente ou gestion", "Ton adapté à votre agence", "Aucun script robotique"],
    visual: <VisualConversation />,
  },
  {
    num: "03",
    title: "Prospect qualifié",
    desc: "Les informations clés sont collectées une à une : projet, budget, secteur, délai.",
    bullets: ["Qualification structurée", "Adapté à vos critères métier", "Données prêtes à l'emploi"],
    visual: <VisualQualif />,
  },
  {
    num: "04",
    title: "Action engagée",
    desc: "Selon la nature de l'appel, Rushh propose un rendez-vous, transmet un message ou signale une urgence.",
    bullets: ["Synchronisé à votre agenda", "Alertes en temps réel", "Escalade si nécessaire"],
    visual: <VisualAction />,
  },
  {
    num: "05",
    title: "Fiche transmise",
    desc: "Dès la fin de l'appel, votre équipe reçoit une fiche complète, structurée, prête à être traitée.",
    bullets: ["Email, SMS ou CRM", "Résumé + données clés", "Aucune ressaisie manuelle"],
    visual: <VisualFiche />,
  },
];

/* ── Main ── */
export function SolutionSection() {
  return (
    <section className="section-pad solution-section" id="solution">
      <div className="wrap">

        {/* Header */}
        <div className="section-head">
          <span className="section-eyebrow">La réponse</span>
          <h2 className="section-title">Rushh, lui, n&apos;est jamais occupé.</h2>
          <p className="section-sub">
            Chaque appel est décroché, compris, qualifié, puis transmis à votre agence, prêt à être traité.
          </p>
        </div>

        {/* Steps */}
        <div className="sol-steps">
          {STEPS.map((s, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={i} className="sol-step-row">
                {/* Connector */}
                {i > 0 && <div className="sol-connector" aria-hidden />}

                <div className={`sol-step ${isEven ? "sol-step--reverse" : ""}`}>
                  {/* Text side */}
                  <div className="sol-text">
                    <div className="sol-badge">{s.num}</div>
                    <h3 className="sol-title">{s.title}</h3>
                    <p className="sol-desc">{s.desc}</p>
                    <ul className="sol-bullets">
                      {s.bullets.map((b) => (
                        <li key={b} className="sol-bullet">
                          <span className="sol-bullet-dot" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual side */}
                  <div className="sol-visual-wrap">
                    {s.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <p className="sol-closing">
          Transaction, location ou gestion locative : le scénario s&apos;adapte au métier de votre agence, pas l&apos;inverse.
        </p>

      </div>
    </section>
  );
}
