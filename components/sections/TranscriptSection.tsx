"use client";

import { useEffect, useState } from "react";

type Speaker = "rushh" | "prospect";

interface Line {
  speaker: Speaker;
  text: string;
  delay: number; // ms after previous line
  action?: { label: string; color: string };
}

const transcript: Line[] = [
  {
    speaker: "rushh",
    text: "Bonsoir, vous êtes bien chez Immo Prestige Bordeaux. Je suis Rushh, l'agent vocal de l'agence. Comment puis-je vous aider ?",
    delay: 600,
  },
  {
    speaker: "prospect",
    text: "Bonsoir, je voulais avoir des informations sur l'appartement au 12 rue des Chartrons que vous avez mis en vente.",
    delay: 2200,
  },
  {
    speaker: "rushh",
    text: "Bien sûr. C'est un T4 de 94m² au 3ème étage, exposé sud. Pour vous aider au mieux, vous cherchez à acheter pour y habiter ou à titre d'investissement ?",
    delay: 2000,
  },
  {
    speaker: "prospect",
    text: "Pour y habiter. On est une famille de 4, on cherche quelque chose dans ce quartier.",
    delay: 2200,
  },
  {
    speaker: "rushh",
    text: "Très bien. Vous avez une fourchette de budget en tête ?",
    delay: 1400,
  },
  {
    speaker: "prospect",
    text: "On peut aller jusqu'à 450 000 euros, peut-être un peu plus si c'est vraiment bien.",
    delay: 2000,
  },
  {
    speaker: "rushh",
    text: "Parfait. Et vous êtes disponible en semaine pour une visite, ou plutôt le week-end ?",
    delay: 1600,
    action: { label: "Prospect qualifié ✓", color: "#10b981" },
  },
  {
    speaker: "prospect",
    text: "Le samedi matin ce serait idéal.",
    delay: 1400,
  },
  {
    speaker: "rushh",
    text: "Je vous réserve le samedi 14 juin à 10h avec Amélie, notre négociatrice en charge de ce bien. Votre nom et numéro de rappel ?",
    delay: 1800,
  },
  {
    speaker: "prospect",
    text: "Marc Lecomte, 06 78 43 21 90.",
    delay: 1600,
    action: { label: "RDV bloqué ✓", color: "#0047C6" },
  },
  {
    speaker: "rushh",
    text: "C'est noté, M. Lecomte. Vous recevrez une confirmation par SMS dans quelques instants. À samedi !",
    delay: 1800,
    action: { label: "Fiche envoyée à Amélie ✓", color: "#8b5cf6" },
  },
];

export function TranscriptSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [actions, setActions] = useState<{ label: string; color: string; id: number }[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let actionId = 0;

    async function run() {
      setRunning(true);
      setVisibleCount(0);
      setActions([]);

      for (let i = 0; i < transcript.length; i++) {
        if (cancelled) return;
        await new Promise<void>((r) => setTimeout(r, transcript[i].delay));
        if (cancelled) return;
        setVisibleCount(i + 1);
        if (transcript[i].action) {
          const id = actionId++;
          const action = transcript[i].action!;
          setActions((prev) => [...prev, { ...action, id }]);
          // Remove after 3.5s
          setTimeout(() => {
            setActions((prev) => prev.filter((a) => a.id !== id));
          }, 3500);
        }
      }
      // Restart after pause
      await new Promise<void>((r) => setTimeout(r, 4000));
      if (!cancelled) run();
    }

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <section
      style={{
        background: "var(--bg-soft)",
        padding: "96px 0",
        overflow: "hidden",
      }}
      id="rushh-en-action"
    >
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">Rushh en action</span>
          <h2 className="section-title">Un appel réel, en temps réel.</h2>
          <p className="section-sub" style={{ maxWidth: 500, margin: "0 auto" }}>
            Voici comment Rushh qualifie un prospect et bloque un RDV, sans que vous ayez à lever le petit doigt.
          </p>
        </div>

        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Floating action badges */}
          <div
            style={{
              position: "absolute",
              top: -20,
              right: -24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            {actions.map((a) => (
              <div
                key={a.id}
                style={{
                  background: "white",
                  border: `1.5px solid ${a.color}`,
                  borderRadius: 10,
                  padding: "6px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: a.color,
                  boxShadow: `0 4px 16px ${a.color}22`,
                  animation: "badgePop 0.3s ease-out",
                  whiteSpace: "nowrap",
                }}
              >
                {a.label}
              </div>
            ))}
          </div>

          {/* Phone chrome */}
          <div
            style={{
              background: "white",
              borderRadius: 20,
              border: "1px solid var(--line)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "var(--ink)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>Rushh — Immo Prestige Bordeaux</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  En cours • 05 17 94 85 49
                </div>
              </div>
              <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                {String(Math.floor((visibleCount * 2.1) / 60)).padStart(2, "0")}:{String(Math.floor((visibleCount * 2.1) % 60)).padStart(2, "0")}
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 380,
                maxHeight: 480,
                overflowY: "auto",
              }}
            >
              {transcript.slice(0, visibleCount).map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: line.speaker === "rushh" ? "row" : "row-reverse",
                    alignItems: "flex-end",
                    gap: 10,
                    animation: "msgSlide 0.35s ease-out",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: line.speaker === "rushh" ? "var(--accent)" : "#e7e9f3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: line.speaker === "rushh" ? "white" : "var(--muted)",
                      flexShrink: 0,
                    }}
                  >
                    {line.speaker === "rushh" ? "R" : "M"}
                  </div>

                  {/* Bubble */}
                  <div
                    style={{
                      maxWidth: "72%",
                      background: line.speaker === "rushh" ? "var(--accent)" : "var(--bg-soft)",
                      color: line.speaker === "rushh" ? "white" : "var(--ink)",
                      borderRadius: line.speaker === "rushh" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                      padding: "10px 14px",
                      fontSize: 14,
                      lineHeight: 1.55,
                    }}
                  >
                    {line.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {running && visibleCount < transcript.length && (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    R
                  </div>
                  <div
                    style={{
                      background: "var(--bg-soft)",
                      borderRadius: "16px 16px 16px 4px",
                      padding: "10px 16px",
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--muted-2)",
                          display: "block",
                          animation: `bounce 1.2s ${dot * 0.2}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                borderTop: "1px solid var(--line)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#fafbfc",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 36,
                  background: "var(--line)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  fontSize: 13,
                  color: "var(--muted-2)",
                }}
              >
                Écoute en cours…
              </div>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Summary card */}
          {visibleCount >= transcript.length && (
            <div
              style={{
                marginTop: 20,
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                gap: 20,
                alignItems: "center",
                boxShadow: "var(--shadow)",
                animation: "msgSlide 0.4s ease-out",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(16,185,129,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#10b981",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ink)" }}>Fiche envoyée à Amélie</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                  Marc Lecomte · Budget 450k · RDV sam. 14 juin 10h · T4 Chartrons
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                À l&apos;instant
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.85) translateY(-4px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes msgSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
