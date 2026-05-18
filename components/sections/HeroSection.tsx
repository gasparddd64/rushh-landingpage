"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, CheckCircle2, Clock, LayoutDashboard, PhoneCall, Users, Calendar, BarChart3, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

/* ── Dashboard data ── */
const calls = [
  { obj: "Acquéreur 3P Paris 8e", type: "Acquéreur", phone: "06 42 18 55 09" },
  { obj: "Vendeur T4 Lyon 6e", type: "Vendeur", phone: "07 81 34 22 67" },
  { obj: "Locataire Studio Bordeaux", type: "Locataire", phone: "06 93 47 81 15" },
  { obj: "Propriétaire Maison Nantes", type: "Propriétaire", phone: "06 12 58 90 33" },
  { obj: "Acquéreur 2P Marseille 7e", type: "Acquéreur", phone: "07 65 22 41 08" },
];

const typeBadge: Record<string, { bg: string }> = {
  Acquéreur: { bg: "rgba(0,71,198,0.08)" },
  Vendeur: { bg: "rgba(124,58,237,0.08)" },
  Locataire: { bg: "rgba(16,185,129,0.08)" },
  Propriétaire: { bg: "rgba(245,158,11,0.08)" },
};

const barHeights = [40, 65, 50, 80, 60, 90, 55, 75, 45, 85, 70, 95];

function WaveformBars({ active }: { active: number }) {
  const h = [60, 80, 50, 90, 70, 100, 45, 75, 55, 85, 65, 95, 50, 70, 90, 60];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, height: 24 }}>
      {h.map((height, i) => {
        const dist = Math.min(Math.abs(i - active), Math.abs(i - active + 16), Math.abs(i - active - 16));
        const isActive = dist < 5;
        return (
          <div key={i} style={{ width: 3, borderRadius: 2, height: `${height}%`, background: "white", opacity: isActive ? 1 - dist * 0.15 : 0.3, transition: "opacity 0.15s" }} />
        );
      })}
    </div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [waveActive, setWaveActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWaveActive((w) => (w + 1) % 16), 140);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power3.out" });
  }, []);

  return (
    <section ref={heroRef} className="hero-v2">
      {/* Gradient bg */}
      <div className="hero-v2-gradient" aria-hidden />

      <div className="hero-v2-wrap">
        {/* Left: text */}
        <motion.div
          className="hero-v2-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-v2-title">
            Le standard<br />
            intelligent pour<br />
            agences immobilières.
          </h1>
          <p className="hero-v2-subtitle">
            Répondez à chaque appel immobilier avec Rushh,<br />
            votre agent IA disponible 24h/24.
          </p>
          <div className="hero-v2-ctas">
            <button
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              className="hero-v2-btn-primary"
            >
              Réserver une démo
            </button>
            <button
              onClick={() => { window.location.href = "tel:0517948549"; }}
              className="hero-v2-btn-secondary"
            >
              <Phone size={16} />
              Appeler notre IA
            </button>
          </div>
          <div className="hero-v2-trust">
            <span className="hero-v2-trust-item">
              <CheckCircle2 size={15} />
              Sans engagement
            </span>
            <span className="hero-v2-trust-item">
              <Clock size={15} />
              Démo en 2 minutes
            </span>
          </div>
        </motion.div>

        {/* Right: browser + dashboard */}
        <motion.div
          className="hero-v2-browser"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          {/* Browser chrome */}
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="browser-dot" style={{ background: "#ff5f57" }} />
              <span className="browser-dot" style={{ background: "#febc2e" }} />
              <span className="browser-dot" style={{ background: "#28c840" }} />
            </div>
            <div className="browser-url">
              <span>app.rushh.fr/dashboard</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="browser-body">
            <div className="dash-v2">
              {/* Sidebar */}
              <div className="dash-v2-sidebar">
                <div className="dash-v2-logo">
                  <img src="/logo-rushh.png" alt="Rushh" style={{ width: 24, height: 24, objectFit: "contain" }} />
                  <span>Rushh</span>
                </div>
                <div className="dash-v2-user">
                  <div className="dash-v2-avatar">A</div>
                  <div>
                    <div className="dash-v2-user-name">Mon agence</div>
                    <div className="dash-v2-user-role">Admin</div>
                  </div>
                </div>
                <nav className="dash-v2-nav">
                  <div className="dash-v2-nav-item active"><LayoutDashboard size={14} /><span>Dashboard</span></div>
                  <div className="dash-v2-nav-item"><PhoneCall size={14} /><span>Appels</span></div>
                  <div className="dash-v2-nav-item"><Users size={14} /><span>Prospects</span></div>
                  <div className="dash-v2-nav-item"><Calendar size={14} /><span>Agenda</span></div>
                  <div className="dash-v2-nav-item"><BarChart3 size={14} /><span>Rapports</span></div>
                </nav>
              </div>

              {/* Main area */}
              <div className="dash-v2-main">
                <div className="dash-v2-header">
                  <div>
                    <h3 className="dash-v2-welcome">Bienvenue, Thomas</h3>
                    <p className="dash-v2-welcome-sub">Gérez vos appels et prospects en un clic.</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="dash-v2-stats">
                  <div className="dash-v2-stat-card">
                    <span className="dash-v2-stat-label">Appels traités</span>
                    <div className="dash-v2-stat-row">
                      <span className="dash-v2-stat-num">1 284</span>
                      <span className="dash-v2-stat-badge">+22%</span>
                    </div>
                    <span className="dash-v2-stat-sub">81 de plus ce mois</span>
                  </div>
                  <div className="dash-v2-stat-card">
                    <span className="dash-v2-stat-label">Prospects qualifiés</span>
                    <div className="dash-v2-stat-row">
                      <span className="dash-v2-stat-num">196</span>
                      <span className="dash-v2-stat-badge">+50%</span>
                    </div>
                    <span className="dash-v2-stat-sub">98 de plus ce mois</span>
                  </div>
                </div>

                {/* Table */}
                <div className="dash-v2-table-wrap">
                  <div className="dash-v2-table-header">
                    <h4>Derniers appels</h4>
                    <div className="dash-v2-search"><Search size={12} /><span>Rechercher…</span></div>
                  </div>
                  <div className="dash-v2-table">
                    <div className="dash-v2-table-head"><span>Objet</span><span>Type</span><span>Téléphone</span></div>
                    {calls.map((c, i) => (
                      <div className="dash-v2-table-row" key={i}>
                        <span>{c.obj}</span>
                        <span><span className="dash-v2-badge" style={{ background: typeBadge[c.type].bg }}>{c.type}</span></span>
                        <span className="dash-v2-phone">{c.phone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
