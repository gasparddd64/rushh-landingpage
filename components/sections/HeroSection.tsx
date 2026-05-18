"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, CheckCircle2, Clock, LayoutDashboard, PhoneCall, Users, Calendar, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

/* Mini SVG line chart */
function MiniChart({ color = "#10b981" }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" style={{ width: "100%", height: 50, marginTop: 8 }}>
      <path
        d="M0 45 C20 42, 30 38, 45 35 S70 20, 90 28 S120 40, 140 22 S165 15, 180 18 S195 25, 200 20"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0 45 C20 42, 30 38, 45 35 S70 20, 90 28 S120 40, 140 22 S165 15, 180 18 S195 25, 200 20 V60 H0 Z"
        fill={`url(#chartGrad)`}
      />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power3.out" });
  }, []);

  return (
    <section ref={heroRef} className="hero-v2">
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
          <div className="bw-chrome">
            <div className="bw-chrome-left">
              <div className="bw-dots">
                <span style={{ background: "#ff5f57" }} />
                <span style={{ background: "#febc2e" }} />
                <span style={{ background: "#28c840" }} />
              </div>
              <div className="bw-nav-arrows">
                {/* Window controls */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
              </div>
              <div className="bw-arrows">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
            <div className="bw-url">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#999" stroke="none"><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 2a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9z"/><path d="M12 6v6l4 2" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              <span>app.rushh.fr/dashboard</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="az-dash">
            {/* Sidebar */}
            <div className="az-sidebar">
              <div className="az-sidebar-top">
                <div className="az-logo">
                  <img src="/logo-rushh.png" alt="Rushh" style={{ width: 26, height: 26, objectFit: "contain" }} />
                  <span>Rushh</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              </div>

              {/* User card */}
              <div className="az-user-card">
                <div className="az-user-avatar">T</div>
                <div className="az-user-info">
                  <div className="az-user-name">Thomas Durand</div>
                  <div className="az-user-role">Agent immobilier</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
              </div>

              {/* Nav */}
              <nav className="az-nav">
                <div className="az-nav-item active"><LayoutDashboard size={16} /><span>Dashboard</span></div>
                <div className="az-nav-item"><PhoneCall size={16} /><span>Appels</span></div>
                <div className="az-nav-item"><Users size={16} /><span>Prospects</span></div>
                <div className="az-nav-item"><Calendar size={16} /><span>Agenda</span></div>
                <div className="az-nav-item"><BarChart3 size={16} /><span>Rapports</span></div>
              </nav>

              {/* Promo card */}
              <div className="az-promo">
                <div className="az-promo-close">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#999"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="az-promo-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047C6" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <p className="az-promo-title">Passez à Rushh Pro</p>
                <p className="az-promo-desc">Déverrouillez toutes les fonctionnalités !</p>
                <button className="az-promo-btn">Découvrir</button>
              </div>
            </div>

            {/* Main content */}
            <div className="az-main">
              <div className="az-main-header">
                <h3 className="az-welcome">Bienvenue, Thomas</h3>
                <p className="az-welcome-sub">Gérez vos appels, prospects et biens en un clic.</p>
              </div>

              {/* Overview */}
              <h4 className="az-section-title">Overview</h4>
              <div className="az-overview-grid">
                <div className="az-overview-card">
                  <div className="az-overview-label">Appels traités</div>
                  <div className="az-overview-row">
                    <span className="az-overview-num">3 369</span>
                    <span className="az-overview-badge">+22%</span>
                  </div>
                  <div className="az-overview-sub">81 de plus ce mois</div>
                  <MiniChart color="#10b981" />
                </div>
                <div className="az-overview-card">
                  <div className="az-overview-label">Prospects qualifiés</div>
                  <div className="az-overview-row">
                    <span className="az-overview-num">196</span>
                    <span className="az-overview-badge">+50%</span>
                  </div>
                  <div className="az-overview-sub">98 de plus ce mois</div>
                  <MiniChart color="#10b981" />
                </div>
              </div>

              {/* Properties */}
              <h4 className="az-section-title">Biens</h4>
              <div className="az-props-grid">
                <div className="az-prop-card">
                  <div className="az-prop-img" style={{ background: "linear-gradient(135deg, #c8d8e8 0%, #a8c0d8 100%)" }}>
                    <div className="az-prop-img-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a9ab8" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
                    </div>
                  </div>
                  <div className="az-prop-info">
                    <div className="az-prop-name">Villa Monceau</div>
                    <span className="az-prop-badge-rent">Loué</span>
                  </div>
                  <div className="az-prop-addr">12 Rue Monceau, Paris 8e</div>
                </div>
                <div className="az-prop-card">
                  <div className="az-prop-img" style={{ background: "linear-gradient(135deg, #d4dce8 0%, #b8c8d8 100%)" }}>
                    <div className="az-prop-img-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a9ab8" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
                    </div>
                  </div>
                  <div className="az-prop-info">
                    <div className="az-prop-name">Apt Rivoli</div>
                  </div>
                  <div className="az-prop-addr">45 Rue de Rivoli, Paris 1er</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
