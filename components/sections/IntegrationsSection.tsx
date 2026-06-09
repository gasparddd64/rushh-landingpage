const integrations = [
  { name: "Apimo", abbr: "AP" },
  { name: "Hektor", abbr: "HK" },
  { name: "Netty", abbr: "NT" },
  { name: "Whise", abbr: "WH" },
  { name: "Google Calendar", abbr: "GC" },
  { name: "Outlook", abbr: "OL" },
];

export function IntegrationsSection() {
  return (
    <section
      style={{
        padding: "52px 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "white",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Compatible avec
          </span>

          <div
            style={{
              width: 1,
              height: 24,
              background: "var(--line)",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {integrations.map((intg) => (
              <div
                key={intg.name}
                title={intg.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--bg-soft)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "7px 14px",
                  cursor: "default",
                  transition: "border-color 0.2s",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "0.03em",
                    flexShrink: 0,
                  }}
                >
                  {intg.abbr}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--ink-2)",
                  }}
                >
                  {intg.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
