"use client";

import { useState, useEffect } from "react";

/* ── Visual 1 — Incoming call ── */
function VisualCall() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s + 1) % 120), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
          Appel entrant
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 3 }}>+33 6 42 •• •• 09</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>Décroché</span>
            </div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 300, color: "var(--accent)", letterSpacing: "0.04em", fontVariantNumeric: "tabular-nums" }}>
            {mm}:{ss}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { label: "Temps de réponse", value: "< 1 s" },
            { label: "Taux de décroché", value: "100 %" },
          ].map((k) => (
            <div key={k.label} style={{ background: "var(--bg-soft)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--accent)" }}>{k.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Visual 2 — Conversation ── */
const BUBBLES = [
  { from: "caller", text: "Bonjour, je cherche un 3 pièces dans le 17e…" },
  { from: "rushh", text: "Bien sûr. Vous avez un budget en tête ?" },
  { from: "caller", text: "Entre 500 et 600 000 €." },
  { from: "rushh", text: "Parfait. Et pour quand envisagez-vous d'acheter ?" },
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
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>
          Conversation en cours
        </div>
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
          <div style={{ fontSize: 10, fontWeight: 600, color: "#10b981", background: "rgba(16,185,129,0.08)", padding: "3px 8px", borderRadius: 6 }}>
            {filled}/{QFIELDS.length} champs
          </div>
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
function IconCalendar() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  );
}

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

  const actions = [
    { icon: <IconCalendar />, label: "Rendez-vous proposé", sub: "Demain 14h — Agenda synchronisé", active: step >= 1 },
    { icon: <IconMail />, label: "Message transmis", sub: "Résumé envoyé à l'agence", active: step >= 2 },
  ];

  return (
    <div className="sol-visual">
      <div className="sol-visual-card">
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>
          Action déclenchée
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {actions.map((a, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid",
              borderColor: a.active ? "var(--accent)" : "var(--line)",
              background: a.active ? "rgba(0,71,198,0.04)" : "var(--bg-soft)",
              opacity: a.active ? 1 : 0.35,
              transition: "all 0.4s ease",
              color: a.active ? "var(--accent)" : "var(--muted)",
            }}>
              {a.icon}
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink)" }}>{a.label}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{a.sub}</div>
              </div>
              {a.active && (
                <div style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
              )}
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
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "var(--bg-soft)", border: "1px solid var(--line)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "var(--ink)", flexShrink: 0,
          }}>
            MD
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>Marie Dubois</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Acquéreur qualifié</div>
          </div>
          <div style={{
            marginLeft: "auto", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
            background: visible ? "rgba(16,185,129,0.1)" : "var(--bg-soft)",
            color: visible ? "#10b981" : "var(--muted)",
            border: "1px solid",
            borderColor: visible ? "rgba(16,185,129,0.2)" : "var(--line)",
            transition: "all 0.4s ease",
            whiteSpace: "nowrap",
          }}>
            {visible ? "Transmise" : "En attente"}
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

/* ── Connector arrow SVG ── */
function ConnectorArrow({ fromRight }: { fromRight: boolean }) {
  return (
    <div className="sol-connector-wrap" aria-hidden>
      <svg viewBox="0 0 600 64" preserveAspectRatio="none" className="sol-connector-svg">
        <defs>
          <marker id={`arrow-${fromRight ? "r" : "l"}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#c8d4ee" />
          </marker>
        </defs>
        {fromRight ? (
          <path d="M 500,4 C 500,40 100,24 100,60" fill="none" stroke="#c8d4ee" strokeWidth="1.5" strokeDasharray="6 5" markerEnd="url(#arrow-r)" />
        ) : (
          <path d="M 100,4 C 100,40 500,24 500,60" fill="none" stroke="#c8d4ee" strokeWidth="1.5" strokeDasharray="6 5" markerEnd="url(#arrow-l)" />
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
              <div key={i}>
                {i > 0 && <ConnectorArrow fromRight={i % 2 === 0} />}
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
