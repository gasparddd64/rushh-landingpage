"use client";

import { DemoCTA } from "@/components/ui/demo-cta";

const TOOLS = [
  { name: "Google Calendar", logo: "/logo-gcal.png" },
  { name: "Outlook",         logo: "/logo-outlook.png" },
  { name: "Hektor",          logo: "/logo-hektor.png" },
  { name: "Apimo",           logo: "/logo-apimo.png" },
  { name: "Whise",           logo: "/logo-whise.png" },
];

export function IntegrationsSection() {
  return (
    <section className="section-pad integ-section">
      <div className="wrap">
        <div className="integ-card">
          {/* Header — centered */}
          <div className="integ-head">
            <h2 className="integ-title">Compatible avec vos outils.</h2>
            <p className="integ-sub">
              Rushh s&apos;intègre à votre environnement pour s&apos;inscrire dans votre fonctionnement.
            </p>
          </div>

          {/* Capsule of logo bubbles — static, no autoplay */}
          <div className="integ-capsule">
            <div className="integ-row">
              {TOOLS.map((t, i) => (
                <div key={i} className="integ-logo-bubble" title={t.name}>
                  <img src={t.logo} alt={t.name} className="integ-logo-img" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="integ-cta">
            <DemoCTA label="Voir toutes les intégrations" />
          </div>
        </div>
      </div>
    </section>
  );
}
