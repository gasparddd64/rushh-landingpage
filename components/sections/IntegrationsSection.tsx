"use client";

const TOOLS = [
  { name: "Google Calendar", logo: "/logo-gcal.png" },
  { name: "Outlook",         logo: "/logo-outlook.png" },
  { name: "Hektor",          logo: "/logo-hektor.png" },
  { name: "Apimo",           logo: "/logo-apimo.png" },
  { name: "Whise",           logo: "/logo-whise.png" },
];

// 4 copies → translate -25% = exactly one set, always seamless
const ITEMS = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS];

export function IntegrationsSection() {
  return (
    <section className="section-pad integ-section">
      <div className="wrap">
        <div className="integ-card">

          {/* Header */}
          <div className="integ-header">
            <h2 className="integ-title">Compatible avec vos outils.</h2>
            <p className="integ-sub">
              Rushh se connecte à votre agenda et vos outils existants — aucun changement de votre côté.
            </p>
          </div>

          {/* Divider */}
          <div className="integ-divider" />

          {/* Marquee */}
          <div className="integ-marquee-wrap">
            <div className="integ-marquee">
              {ITEMS.map((t, i) => (
                <div key={i} className="integ-logo-card">
                  <img src={t.logo} alt={t.name} className="integ-logo-img" />
                  <div className="integ-logo-name">{t.name}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="integ-note">Et bien d&apos;autres, selon la compatibilité technique de votre outil.</p>
        </div>
      </div>
    </section>
  );
}
