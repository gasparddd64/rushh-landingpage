"use client";

import { useState, useEffect } from "react";

/* ══════════════════════════════════════════════
   SHARED WIDGETS
═══════════════════════════════════════════════ */

/* Widget: live call timer */
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
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
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

/* Widget: animated chat bubbles */
const BUBBLES = [
  { from: "caller", text: "Je cherche un 3 pièces dans le 17e…" },
  { from: "rushh",  text: "Vous avez un budget en tête ?" },
  { from: "caller", text: "Entre 500 et 600 000 €." },
];

function useBubbleAnimation() {
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
  return shown;
}

function Widget02() {
  const shown = useBubbleAnimation();
  return (
    <div className="sol-widget" style={{ display: "flex", flexDirection: "column", gap: 8, padding: "14px 14px" }}>
      {BUBBLES.map((b, i) => (
        <div key={i} style={{ display: "flex", justifyContent: b.from === "rushh" ? "flex-end" : "flex-start", opacity: i < shown ? 1 : 0, transform: i < shown ? "translateY(0)" : "translateY(5px)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
          <div style={{ padding: "9px 13px", borderRadius: b.from === "rushh" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", background: b.from === "rushh" ? "#0047C6" : "white", color: b.from === "rushh" ? "white" : "var(--ink)", fontSize: 13, lineHeight: 1.45, maxWidth: "86%", border: b.from === "caller" ? "1px solid var(--line)" : "none" }}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Widget: qualification table */
function Widget03() {
  return (
    <div className="sol-widget">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
        {[
          { label: "SECTEUR", value: "Paris 17e" },
          { label: "BUDGET",  value: "500 – 600 k€" },
          { label: "DÉLAI",   value: "3 à 6 mois" },
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

/* Widget: action / RDV */
function Widget04() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: "12px 14px" }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(0,71,198,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0047C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Rendez-vous proposé — demain 14h</span>
      </div>
      <div className="sol-widget-note">Résumé envoyé à l&apos;agence en parallèle.</div>
    </>
  );
}

/* Widget: fiche transmise (neutral version for mobile step card) */
function Widget05Neutral() {
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: "12px 16px" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Marie Dubois</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>T3 — Paris 17e</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: sent ? "#10b981" : "var(--muted)", transition: "color 0.4s ease" }}>
          {sent ? "✓ Transmise" : "En attente…"}
        </div>
      </div>
      <div className="sol-widget-note" style={{ opacity: sent ? 1 : 0, transition: "opacity 0.4s ease" }}>
        Reçue il y a quelques secondes
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   DESKTOP GRID — 2×2
═══════════════════════════════════════════════ */

function IconChat() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function IconList() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
}
function IconCalendarD() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}
function IconFile() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>;
}

function WidgetChatDesktop() {
  const shown = useBubbleAnimation();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {BUBBLES.map((b, i) => (
        <div key={i} style={{ display: "flex", justifyContent: b.from === "rushh" ? "flex-end" : "flex-start", opacity: i < shown ? 1 : 0, transform: i < shown ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
          <div style={{ padding: "8px 12px", borderRadius: b.from === "rushh" ? "12px 12px 3px 12px" : "12px 12px 12px 3px", background: b.from === "rushh" ? "#0047C6" : "white", color: b.from === "rushh" ? "white" : "var(--ink)", fontSize: 12.5, lineHeight: 1.45, maxWidth: "88%", border: b.from === "caller" ? "1px solid var(--line)" : "none" }}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function WidgetTableDesktop() {
  const rows = [{ label: "SECTEUR", value: "Paris 17e" }, { label: "BUDGET", value: "500 – 600 k€" }, { label: "DÉLAI", value: "3 à 6 mois" }];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {rows.map((r) => (
        <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.07em" }}>{r.label}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function WidgetActionDesktop() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 12px" }}>
        <div style={{ width: 30, height: 30, borderRadius: 7, background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--accent)" }}>
          <IconCalendarD />
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>Rendez-vous proposé — demain 14h</span>
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>Résumé envoyé à l&apos;agence en parallèle.</div>
    </div>
  );
}

function WidgetFicheDesktop() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        await new Promise<void>((r) => setTimeout(r, 1200));
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
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 10, padding: "11px 14px" }}>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: "white" }}>Marie Dubois</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>T3 — Paris 17e</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: sent ? "#86efac" : "rgba(255,255,255,0.45)", transition: "color 0.4s ease" }}>
          {sent ? "✓ Transmise" : "En attente…"}
        </div>
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", opacity: sent ? 1 : 0, transition: "opacity 0.4s ease" }}>
        Reçue il y a quelques secondes
      </div>
    </div>
  );
}

const DESKTOP_CARDS = [
  { icon: <IconChat />,      title: "Besoin compris",    desc: "Rushh identifie en quelques échanges la nature précise de la demande.",    widget: <WidgetChatDesktop />,   featured: false },
  { icon: <IconList />,      title: "Prospect qualifié", desc: "Les informations clés sont collectées une à une.",                          widget: <WidgetTableDesktop />,  featured: false },
  { icon: <IconCalendarD />, title: "Action engagée",    desc: "Rushh propose un rendez-vous ou transmet un message.",                       widget: <WidgetActionDesktop />, featured: false },
  { icon: <IconFile />,      title: "Fiche transmise",   desc: "Votre équipe reçoit une fiche complète, prête à traiter.",                  widget: <WidgetFicheDesktop />,  featured: true  },
];

/* ══════════════════════════════════════════════
   MOBILE — step cards (original layout)
═══════════════════════════════════════════════ */

const MOBILE_STEPS = [
  { num: "01", title: "Appel décroché",    desc: "Rushh répond à la première sonnerie, 24h/24, 7j/7.",                        widget: <Widget01 /> },
  { num: "02", title: "Besoin compris",    desc: "Rushh identifie en quelques échanges la nature précise de la demande.",     widget: <Widget02 /> },
  { num: "03", title: "Prospect qualifié", desc: "Les informations clés sont collectées une à une.",                          widget: <Widget03 /> },
  { num: "04", title: "Action engagée",    desc: "Rushh propose un rendez-vous ou transmet un message.",                      widget: <Widget04 /> },
  { num: "05", title: "Fiche transmise",   desc: "Votre équipe reçoit une fiche complète, prête à traiter.",                  widget: <Widget05Neutral /> },
];

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

/* ══════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════ */

export function SolutionSection() {
  return (
    <section className="section-pad solution-section" id="solution">
      <div className="wrap">

        <div className="section-head">
          <span className="section-eyebrow">La réponse</span>
          <h2 className="section-title">Rushh, lui, n&apos;est jamais occupé.</h2>
          <p className="section-sub" style={{ maxWidth: 580 }}>
            Décroché à la première sonnerie, chaque appel est compris, qualifié, puis transmis à votre agence, prêt à être traité.
          </p>
        </div>

        {/* ── Desktop: 2×2 grid ── */}
        <div className="sol-grid">
          {DESKTOP_CARDS.map((card, i) => (
            <div key={i} className={`sol-tile${card.featured ? " sol-tile--featured" : ""}`}>
              <div className={`sol-tile-icon${card.featured ? " sol-tile-icon--featured" : ""}`}>
                {card.icon}
              </div>
              <h3 className="sol-tile-title">{card.title}</h3>
              <p className="sol-tile-desc">{card.desc}</p>
              <div className="sol-tile-widget">{card.widget}</div>
            </div>
          ))}
        </div>

        {/* ── Mobile: original step cards ── */}
        <div className="sol-mobile">
          <div className="sol-steps-m">
            {MOBILE_STEPS.map((s, i) => (
              <div key={i}>
                {i > 0 && <ConnectorArrow fromRight={i % 2 === 0} />}
                <div className="sol-card-row">
                  <div className="sol-card">
                    <div className="sol-card-dot" />
                    <div className="sol-card-num">{s.num}</div>
                    <h3 className="sol-card-title">{s.title}</h3>
                    <p className="sol-card-desc">{s.desc}</p>
                    {s.widget}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="sol-closing">
          Transaction, location ou gestion locative : le scénario s&apos;adapte au métier de votre agence, pas l&apos;inverse.
        </p>

      </div>
    </section>
  );
}
