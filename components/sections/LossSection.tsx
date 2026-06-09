"use client";

const scenarios = [
  {
    time: "Samedi, 18h04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="1" y1="1" x2="23" y2="23" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "L'acquéreur chaud qui ne rappelle pas",
    story: "Un acquéreur potentiel appelle un samedi à 18h. Vous êtes en visite. Il tombe sur votre messagerie. Il raccroche, cherche le numéro de l'agence d'à côté, et rappelle. Vous, vous ne saurez jamais qu'il a appelé.",
    loss: "Mandat perdu",
    lossColor: "#ef4444",
  },
  {
    time: "Ce matin, 9h47",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Le vendeur qui choisit le premier qui répond",
    story: "Un propriétaire prêt à signer un mandat contacte 3 agences simultanément. La règle est simple : le premier qui décroche emporte la mise. Vous étiez le deuxième à rappeler.",
    loss: "Commission perdue",
    lossColor: "#f59e0b",
  },
  {
    time: "Chaque jour, sans exception",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "40 minutes perdues à qualifier du vent",
    story: "Appels sans suite, relances inutiles, prospects hors zone ou hors budget. Vous passez 40 minutes par jour à des conversations qui ne donnent rien. Du temps que vous n'avez pas.",
    loss: "3h30 par semaine",
    lossColor: "#6b7090",
  },
];

export function LossSection() {
  return (
    <section
      style={{
        background: "var(--ink)",
        padding: "96px 0",
      }}
      id="loss"
    >
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <span
            className="section-eyebrow"
            style={{ color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.12)" }}
          >
            Ce que vous perdez chaque jour
          </span>
          <h2
            className="section-title"
            style={{ color: "white", marginTop: 12 }}
          >
            Pendant que vous ne décrochez pas.
          </h2>
          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto" }}
          >
            Chaque appel manqué est une opportunité donnée à la concurrence. Voici ce que ça coûte vraiment.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {scenarios.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "border-color 0.2s",
              }}
            >
              {/* Time badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  width: "fit-content",
                }}
              >
                {s.time}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>

              {/* Story */}
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {s.story}
              </p>

              {/* Loss badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 16,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: s.lossColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: s.lossColor,
                  }}
                >
                  {s.loss}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div
          style={{
            marginTop: 52,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)" }}>
            Rushh règle les trois en même temps.
          </p>
          <button
            onClick={() => window.open("https://calendly.com/gaspardv/rushh", "_blank")}
            style={{
              background: "var(--accent)",
              color: "white",
              border: "none",
              borderRadius: 12,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            Réserver une démo
          </button>
        </div>
      </div>
    </section>
  );
}
