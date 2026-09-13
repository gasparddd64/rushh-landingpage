"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ── Icons ── */
function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="8" y1="6" x2="8" y2="6.01" />
      <line x1="12" y1="6" x2="12" y2="6.01" />
      <line x1="16" y1="6" x2="16" y2="6.01" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
      <line x1="10" y1="22" x2="10" y2="18" />
      <line x1="14" y1="22" x2="14" y2="18" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5L19 11" />
      <path d="M17.5 5.5L21 9" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 17l-1.5-1.5a2.12 2.12 0 010-3l3-3a2.12 2.12 0 013 0l.5.5" />
      <path d="M14 14l2 2" />
      <path d="M17 11l2 2" />
      <path d="M2 12l4-4 3.5 3.5" />
      <path d="M22 12l-4-4-3.5 3.5" />
    </svg>
  );
}
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const METIERS = [
  {
    name: "Syndic",
    icon: <IconBuilding />,
    img: "/city-bordeaux-v2.jpg",
    tag: "Syndic",
    title: "Un standard dédié à la copropriété",
    desc: "Copropriétaires et prestataires sont accueillis avec le bon niveau d'information, sans mobiliser votre équipe sur les demandes courantes.",
    points: [
      "Réponses aux questions courantes",
      "Suivi des interventions prestataires",
      "Transmission aux bons interlocuteurs",
    ],
  },
  {
    name: "Gérance",
    icon: <IconKey />,
    img: "/city-lyon-v2.jpg",
    tag: "Gérance",
    title: "Vos locataires ne tombent plus sur répondeur",
    desc: "Sinistre, panne ou question administrative : Rushh comprend la demande, applique vos procédures et alerte votre équipe en cas d'urgence.",
    points: [
      "Déclaration de sinistre guidée",
      "Application de vos procédures",
      "Alerte immédiate si urgence",
    ],
  },
  {
    name: "Transaction",
    icon: <IconHandshake />,
    img: "/hero-building-left.jpg",
    tag: "Transaction",
    title: "Ne manquez plus jamais un acheteur",
    desc: "Rushh qualifie chaque appel reçu sur vos annonces, identifie le bien concerné et programme la visite selon vos disponibilités.",
    points: [
      "Identification du bien concerné",
      "Qualification du budget et du projet",
      "Prise de rendez-vous automatique",
    ],
  },
  {
    name: "Location",
    icon: <IconHome />,
    img: "/city-paris-v2.jpg",
    tag: "Location",
    title: "Un accueil parfait pour vos candidats locataires",
    desc: "Chaque appel sur un bien en location est pris en charge : les critères du candidat sont recueillis et la visite est planifiée sans effort pour votre équipe.",
    points: [
      "Qualification du dossier candidat",
      "Présentation des biens disponibles",
      "Planification des visites",
    ],
  },
];

export function WhySection() {
  const [active, setActive] = useState(0);
  const current = METIERS[active];

  return (
    <section className="section-pad metiers-section" id="why">
      <div className="wrap">
        <div className="metiers-head">
          <span className="section-eyebrow">Pensé pour l&apos;immobilier</span>
          <h2 className="section-title metiers-title">Un Standard pour tous vos métiers.</h2>
          <p className="section-sub">Rushh s&apos;adapte à chaque métier de votre agence et à sa façon de traiter les appels.</p>
        </div>

        <div className="metiers-shell">
          <div className="metiers-tabs" role="tablist">
            {METIERS.map((m, i) => (
              <button
                key={m.name}
                role="tab"
                aria-selected={active === i}
                className={`metiers-tab${active === i ? " metiers-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                {m.icon}
                {m.name}
              </button>
            ))}
          </div>

          <div className="metiers-panel">
            <div className="metiers-panel-image">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.img}
                  src={current.img}
                  alt={current.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            <div className="metiers-panel-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="metiers-tag">{current.tag}</span>
                  <h3 className="metiers-panel-title">{current.title}</h3>
                  <p className="metiers-panel-desc">{current.desc}</p>
                  <ul className="metiers-panel-points">
                    {current.points.map((p) => (
                      <li key={p}>
                        <IconCheck />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="metiers-panel-cta">
                    <DemoCTA label="Réserver un échange" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
