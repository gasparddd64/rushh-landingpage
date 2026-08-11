"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-section hero-section--clean">
      <div className="hero-clean-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-clean-content"
        >
          <span className="hero-clean-eyebrow">Standard téléphonique · Agences immobilières</span>
          <h1 className="hero-clean-title">
            Vos clients appellent.<br />
            Vous ne pouvez pas<br />
            toujours répondre.
          </h1>
          <p className="hero-clean-sub">
            En visite, en rendez-vous ou déjà en ligne, votre équipe ne peut pas être disponible à chaque appel. Rushh prend le relais quand vous ne pouvez pas.
          </p>
          <button
            onClick={() => window.open("https://calendly.com/gaspardv/rushh", "_blank")}
            className="hero-clean-cta"
          >
            Réserver une démonstration
          </button>
        </motion.div>
      </div>
    </section>
  );
}
