"use client";

import { useState, useEffect } from "react";
import { PhoneIcon, CheckIcon, InboxIcon } from "@/components/icons";

function FeatureCardCall() {
  const [bars, setBars] = useState(() => Array.from({ length: 28 }, () => 0.2));
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => {
        const next = prev.slice(1);
        const wave = 0.4 + 0.5 * Math.abs(Math.sin(tick * 0.45)) + (Math.random() - 0.5) * 0.3;
        next.push(Math.max(0.15, Math.min(1, wave)));
        return next;
      });
      setTick((t) => t + 1);
    }, 130);
    return () => clearInterval(id);
  }, [tick]);

  const sec = String(Math.floor(tick / 8) % 60).padStart(2, "0");

  return (
    <div className="feature-card">
      <div className="feature-head">
        <h3 className="feature-title">Décroché<br />instantanément</h3>
        <div className="feature-head-icon"><PhoneIcon size={18} /></div>
      </div>
      <p className="feature-desc">Rushh répond dès la première sonnerie, 24 h/24 et 7 j/7. Aucun appel manqué, aucun prospect perdu.</p>

      <div className="feature-visual-card">
        <div className="vc-call-head">
          <div>
            <div className="vc-call-title"><span className="ddot"></span> Appel entrant</div>
            <div className="vc-call-num">+33 6 42 18 55 09</div>
          </div>
          <div className="vc-call-time">0:{sec}</div>
        </div>
        <div className="bargraph">
          {bars.map((h, i) => (
            <div key={i} className="bg-bar" style={{ height: `${h * 100}%` }} />
          ))}
        </div>
        <div className="vc-row">
          <span className="lbl">Temps de réponse</span>
          <span className="val">&lt; 1 s</span>
        </div>
        <div className="vc-mini-stats">
          <div className="vc-mini">
            <div className="lbl">Appels aujourd&apos;hui</div>
            <div className="val">12</div>
          </div>
          <div className="vc-mini">
            <div className="lbl">Taux de décroché</div>
            <div className="val" style={{ color: "var(--accent)" }}>100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const QUAL_FIELDS = [
  { label: "Nom", value: "Marie Dubois" },
  { label: "Budget", value: "420 000 €" },
  { label: "Type de bien", value: "Appartement 3P" },
  { label: "Quartier", value: "Batignolles" },
];

function FeatureCardQualif() {
  const [typed, setTyped] = useState(QUAL_FIELDS.map(() => 0));
  const [activeIdx, setActiveIdx] = useState(0);
  const [doneSet, setDoneSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        for (let i = 0; i < QUAL_FIELDS.length; i++) {
          if (cancelled) return;
          setActiveIdx(i);
          const target = QUAL_FIELDS[i].value;
          for (let c = 1; c <= target.length; c++) {
            if (cancelled) return;
            await new Promise<void>((r) => { timeoutId = setTimeout(r, 50 + Math.random() * 40); });
            setTyped((t) => { const n = [...t]; n[i] = c; return n; });
          }
          await new Promise<void>((r) => { timeoutId = setTimeout(r, 350); });
          if (cancelled) return;
          setDoneSet((prev) => new Set([...prev, i]));
          await new Promise<void>((r) => { timeoutId = setTimeout(r, 400); });
        }
        await new Promise<void>((r) => { timeoutId = setTimeout(r, 2200); });
        if (cancelled) return;
        setTyped(QUAL_FIELDS.map(() => 0));
        setDoneSet(new Set());
        await new Promise<void>((r) => { timeoutId = setTimeout(r, 400); });
      }
    }
    run();
    return () => { cancelled = true; clearTimeout(timeoutId); };
  }, []);

  return (
    <div className="feature-card">
      <div className="feature-head">
        <h3 className="feature-title">Qualification<br />complète</h3>
        <div className="feature-head-icon"><CheckIcon size={18} /></div>
      </div>
      <p className="feature-desc">Nom, budget, type de bien, délai, localisation : Rushh collecte tout ce dont vous avez besoin pour prioriser.</p>

      <div className="feature-visual-card" style={{ padding: 14, background: "var(--bg-soft)" }}>
        <div className="qf-list">
          {QUAL_FIELDS.map((f, i) => {
            const partial = f.value.slice(0, typed[i]);
            const isActive = activeIdx === i && !doneSet.has(i);
            const isDone = doneSet.has(i);
            return (
              <div key={i} className={`qf-row ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}>
                <div className="qf-text">
                  <div className="qf-lbl">{f.label}</div>
                  <div className="qf-val">
                    {partial}
                    {isActive && <span className="caret"></span>}
                    {!partial && !isActive && <span style={{ color: "var(--muted-2)", fontWeight: 400 }}>—</span>}
                  </div>
                </div>
                <div className="qf-check"><CheckIcon size={11} /></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FICHE_ROWS = [
  { label: "Téléphone", value: "06 42 18 55 09" },
  { label: "Budget", value: "420 000 €" },
  { label: "Type", value: "Appartement 3P" },
  { label: "Quartier", value: "Batignolles" },
  { label: "Délai", value: "3 mois" },
  { label: "Source", value: "Annonce SeLoger" },
];

function FeatureCardFiche() {
  const [shownCount, setShownCount] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        for (let i = 1; i <= FICHE_ROWS.length; i++) {
          if (cancelled) return;
          await new Promise<void>((r) => { timeoutId = setTimeout(r, 280); });
          setShownCount(i);
        }
        await new Promise<void>((r) => { timeoutId = setTimeout(r, 2400); });
        if (cancelled) return;
        setShownCount(0);
        await new Promise<void>((r) => { timeoutId = setTimeout(r, 400); });
      }
    }
    run();
    return () => { cancelled = true; clearTimeout(timeoutId); };
  }, []);

  return (
    <div className="feature-card">
      <div className="feature-head">
        <h3 className="feature-title">Fiche complète<br />transmise</h3>
        <div className="feature-head-icon"><InboxIcon size={18} /></div>
      </div>
      <p className="feature-desc">Dès la fin de l&apos;appel, vous recevez une fiche récap structurée. Email, SMS ou CRM.</p>

      <div className="feature-visual-card">
        <div className="fp-card">
          <div className="fp-head">
            <div className="fp-avatar">
              <img src="/avatar-marie.jpg" alt="Marie Dubois" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div className="fp-name">Marie Dubois</div>
              <div className="fp-role">Acquéreur qualifié</div>
            </div>
            <span className="fp-status">Nouveau</span>
          </div>
          <div className="fp-rows">
            {FICHE_ROWS.map((r, i) => (
              <div key={i} className={`fp-row ${i < shownCount ? "in" : ""}`}>
                <span className="fp-lbl">{r.label}</span>
                <span className="fp-val">
                  {r.value}
                  <svg className="fp-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </span>
              </div>
            ))}
          </div>
          <div className="fp-foot">
            <span className="fp-time">Reçue il y a 2 min</span>
            <button className="fp-btn">Voir la fiche</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="section-pad" id="features">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Fonctionnalités</span>
          <h2 className="section-title">Tout ce dont votre agence Immo a besoin.</h2>
          <p className="section-sub">
            Rushh gère l&apos;intégralité de vos appels entrants. Chaque prospect qualifié, chaque info transmise. Vous ne changez rien à votre façon de travailler.
          </p>
        </div>

        <div className="features-grid">
          <FeatureCardCall />
          <FeatureCardQualif />
          <FeatureCardFiche />
        </div>
      </div>
    </section>
  );
}
