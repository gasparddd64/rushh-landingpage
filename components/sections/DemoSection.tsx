"use client";

import { useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@/components/icons";

const TOTAL = 69;

const transcript = [
  { t: 2, who: "rushh", text: "Agence des Batignolles, bonjour, je vous écoute." },
  { t: 6, who: "user", name: "Gaspard", text: "Bonjour, je vois une maison sur votre site, à Aix-en-Provence." },
  { t: 14, who: "rushh", text: "Bien sûr. Vous cherchez plutôt à acheter ou à louer ?" },
  { t: 22, who: "user", name: "Gaspard", text: "À acheter. Je suis acquéreur, plutôt une maison 4 pièces." },
  { t: 30, who: "rushh", text: "Parfait. Quel est votre budget approximatif pour ce projet ?" },
  { t: 36, who: "user", name: "Gaspard", text: "Autour de 670 000 €, je peux monter un peu si nécessaire." },
  { t: 44, who: "rushh", text: "Très bien. Je vous propose un rendez-vous avec un de nos agents jeudi à 14h ?" },
  { t: 52, who: "user", name: "Gaspard", text: "Jeudi 14h c'est parfait." },
  { t: 60, who: "rushh", text: "C'est noté. Vous recevrez la confirmation par SMS dans une minute." },
];

const fields = [
  { t: 6, key: "type", label: "Type", value: "Acheteur" },
  { t: 14, key: "bien", label: "Bien", value: "Maison" },
  { t: 30, key: "zone", label: "Zone", value: "Aix-en-Provence" },
  { t: 36, key: "budget", label: "Budget", value: "670 000 €" },
];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export function DemoSection() {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [counts, setCounts] = useState({ received: 0, qualified: 0, sent: 0 });

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setTime((t) => {
        if (t >= TOTAL) { setPlaying(false); return TOTAL; }
        return t + 0.5;
      });
    }, 250);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (time >= 2 && counts.received < 1) setCounts({ received: 1, qualified: 0, sent: 0 });
    if (time >= 36 && counts.qualified < 1) setCounts({ received: 1, qualified: 1, sent: 0 });
    if (time >= 60 && counts.sent < 1) setCounts({ received: 1, qualified: 1, sent: 1 });
  }, [time, counts]);

  const visibleMsgs = transcript.filter((m) => m.t <= time);
  const filledKeys = new Set(fields.filter((f) => f.t <= time).map((f) => f.key));

  const getFieldValue = (key: string) => {
    const f = fields.find((x) => x.key === key);
    return f && f.t <= time ? f.value : "—";
  };

  const reset = () => {
    setPlaying(false);
    setTime(0);
    setCounts({ received: 0, qualified: 0, sent: 0 });
  };

  return (
    <section className="hidden md:block section-pad" id="demo">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Démo live</span>
          <h2 className="section-title">Écoutez Rushh sur un vrai appel.</h2>
          <p className="section-sub">Un prospect appelle pour acheter une maison. Rushh décroche, qualifie, transmet la fiche. En moins de 2 minutes.</p>
        </div>

        <div className="demo-frame">
          <div className="demo-toolbar">
            <div className="demo-dots">
              <span className="demo-dot live"></span>
              <span className="demo-dot"></span>
              <span className="demo-dot"></span>
            </div>
            <div className="demo-toolbar-title">Appel entrant · Prospect acheteur — Maison 3 pièces</div>
            <div className="demo-toolbar-meta">{fmt(time)} / 01:09</div>
          </div>

          <div className="demo-body">
            <div className="demo-left">
              <div className="demo-section-title">Lecture de l&apos;appel</div>
              <div className="demo-call-info">
                <div className="caller-avatar" style={{ background: "linear-gradient(135deg, oklch(0.65 0.14 30), oklch(0.55 0.16 20))" }}>GA</div>
                <div className="caller-info">
                  <div className="caller-name">Gaspard Aubert</div>
                  <div className="caller-num">+33 6 81 22 47 09 · Aix-en-Provence</div>
                </div>
              </div>

              <div className="demo-progress">
                <div className="demo-progress-fill" style={{ width: `${(time / TOTAL) * 100}%` }} />
              </div>
              <div className="demo-time-row">
                <span>{fmt(time)}</span>
                <span>01:09</span>
              </div>

              <div className="demo-controls">
                <button
                  className={`demo-play ${playing ? "playing" : ""}`}
                  onClick={() => { if (time >= TOTAL) reset(); setPlaying((p) => !p); }}
                >
                  {playing ? <PauseIcon size={16} /> : <PlayIcon size={14} />}
                </button>
                <button className="demo-control-btn" onClick={reset}>
                  Reprendre du début
                </button>
              </div>

              <div className="demo-section-title">
                Transcription en direct {playing && <span style={{ color: "var(--good)", marginLeft: 8 }}>● Live</span>}
              </div>
              <div className="transcript-box">
                {visibleMsgs.length === 0 && (
                  <div style={{ color: "var(--muted)", fontSize: 13, padding: "24px 0", textAlign: "center" }}>
                    Cliquez sur ▶︎ pour écouter
                  </div>
                )}
                {visibleMsgs.map((m, i) => (
                  <div key={i} className={`transcript-msg ${m.who}`}>
                    <div className={`msg-avatar ${m.who}`}>
                      {m.who === "rushh" ? "R" : (m.name || "U").slice(0, 1)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="msg-bubble">{m.text}</div>
                      <span className="msg-time">{m.who === "rushh" ? "Rushh" : m.name || "Prospect"} · {fmt(m.t)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="demo-right">
              <div className="demo-section-title">Fiche générée automatiquement</div>
              <div className="demo-fields">
                {["type", "bien", "zone", "budget"].map((key) => (
                  <div key={key} className={`demo-field ${filledKeys.has(key) ? "filled" : ""}`}>
                    <div className="demo-field-label">{fields.find((f) => f.key === key)!.label}</div>
                    <div className="demo-field-value">{getFieldValue(key)}</div>
                  </div>
                ))}
              </div>

              <div className="demo-section-title" style={{ marginTop: "auto" }}>Compteurs en temps réel</div>
              <div className="demo-counters">
                <div className="demo-counter">
                  <div className="demo-counter-num">{counts.received}</div>
                  <div className="demo-counter-label">Reçus</div>
                </div>
                <div className="demo-counter">
                  <div className="demo-counter-num">{counts.qualified}</div>
                  <div className="demo-counter-label">Qualifiés</div>
                </div>
                <div className="demo-counter">
                  <div className="demo-counter-num">{counts.sent}</div>
                  <div className="demo-counter-label">Fiches envoyées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
