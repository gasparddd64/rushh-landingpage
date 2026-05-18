"use client";

import { Phone, TrendingUp, Clock, Inbox, Shield, Sparkles } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="section-pad" id="benefits" style={{ background: "white" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Bénéfices</span>
          <h2 className="section-title">Ce que ça change concrètement pour votre agence.</h2>
          <p className="section-sub">Moins d&apos;interruptions, plus de mandats, zéro appel manqué.</p>
        </div>

        <div className="bento-grid">
          {/* Row 1: 2 cards */}
          <div className="bento-card bento-dark">
            <div className="bento-card-top">
              <div className="bento-icon-dark"><Phone size={20} /></div>
              <span className="bento-badge-dark">N°1</span>
            </div>
            <h3 className="bento-title-dark">Zéro appel manqué</h3>
            <p className="bento-desc-dark">Chaque appel décroché instantanément, même quand vous êtes en visite.</p>
            <div className="bento-metric-row">
              <div className="bento-metric">
                <span className="bento-metric-num">100%</span>
                <span className="bento-metric-label">Appels décrochés</span>
              </div>
              <div className="bento-metric">
                <span className="bento-metric-num">&lt;1s</span>
                <span className="bento-metric-label">Temps de réponse</span>
              </div>
            </div>
          </div>

          <div className="bento-card bento-light">
            <div className="bento-icon-light"><TrendingUp size={20} /></div>
            <h3 className="bento-title-light">Plus de mandats</h3>
            <p className="bento-desc-light">Un appel raté peut coûter un mandat. Rushh élimine ce risque définitivement.</p>
            <div className="bento-bar-chart">
              <div className="bento-bar-group">
                <span className="bento-bar-label">Avant</span>
                <div className="bento-bar-track">
                  <div className="bento-bar-fill bento-bar-before" style={{ width: "45%" }} />
                </div>
              </div>
              <div className="bento-bar-group">
                <span className="bento-bar-label">Après</span>
                <div className="bento-bar-track">
                  <div className="bento-bar-fill bento-bar-after" style={{ width: "92%" }} />
                </div>
              </div>
            </div>
            <p className="bento-bar-caption">Taux de captation prospects</p>
          </div>

          {/* Row 2: 3 cards */}
          <div className="bento-card bento-light bento-sm">
            <div className="bento-icon-light"><Clock size={20} /></div>
            <h3 className="bento-title-light">Gain de temps</h3>
            <p className="bento-desc-light">Fini les interruptions en visite et les rappels dans le vide.</p>
            <div className="bento-big-stat">
              <span className="bento-big-num">2h</span>
              <span className="bento-big-unit">/jour économisées</span>
            </div>
          </div>

          <div className="bento-card bento-light bento-sm">
            <div className="bento-icon-light"><Inbox size={20} /></div>
            <h3 className="bento-title-light">Toujours informé</h3>
            <p className="bento-desc-light">Fiche récap après chaque appel avec les infos clés du prospect.</p>
            <div className="bento-fiche-preview">
              <div className="bento-fiche-row">
                <span className="bento-fiche-dot bento-fiche-dot-green" />
                <span>Acquéreur · 3P · Paris 8e</span>
              </div>
              <div className="bento-fiche-row">
                <span className="bento-fiche-dot bento-fiche-dot-blue" />
                <span>Budget : 650K€ · Visite souhaitée</span>
              </div>
            </div>
          </div>

          <div className="bento-card bento-light bento-sm">
            <div className="bento-icon-light"><Shield size={20} /></div>
            <h3 className="bento-title-light">Sécurisé & sans friction</h3>
            <p className="bento-desc-light">RGPD natif. Aucun outil à changer. Rushh s&apos;intègre à votre workflow existant.</p>
            <div className="bento-tags">
              <span className="bento-tag">🔒 RGPD</span>
              <span className="bento-tag">⚡ Plug & play</span>
              <span className="bento-tag">🔄 CRM compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
