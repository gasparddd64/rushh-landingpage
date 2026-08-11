const TOOLS = [
  { name: "Google Calendar", abbr: "GCal", color: "#4285F4" },
  { name: "Outlook",         abbr: "OL",   color: "#0078D4" },
  { name: "Hektor",          abbr: "HK",   color: "#E85D26" },
  { name: "Apimo",           abbr: "AP",   color: "#1A56DB" },
  { name: "Whise",           abbr: "WH",   color: "#2A9D8F" },
];

export function IntegrationsSection() {
  return (
    <section className="section-pad integ-section">
      <div className="wrap">
        <div className="integ-card">
          {/* Header row */}
          <div className="integ-header">
            <h2 className="integ-title">Compatible avec vos outils.</h2>
            <p className="integ-sub">
              Rushh se connecte à votre agenda et vos outils existants — aucun changement de votre côté.
            </p>
          </div>

          <div className="integ-divider" />

          {/* Logos row */}
          <div className="integ-logos">
            {TOOLS.map((t) => (
              <div key={t.name} className="integ-logo-card">
                <div className="integ-logo-icon" style={{ background: t.color + "18", color: t.color }}>
                  <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.abbr}</span>
                </div>
                <div className="integ-logo-name">{t.name}</div>
              </div>
            ))}
          </div>

          <p className="integ-note">Et bien d&apos;autres, selon la compatibilité technique de votre outil.</p>
        </div>
      </div>
    </section>
  );
}
