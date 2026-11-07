"use client";

import { useState } from "react";
import { ASK_PROMPT, ASK_TARGETS, GEMINI_URL } from "@/lib/ask-ai";
import "@/app/ask-ai.css";

/** Bande discrète : choisir son assistant habituel pour se faire présenter Rushh (prompt déjà rédigé). */
export function AskAISection() {
  const [copied, setCopied] = useState(false);
  const q = encodeURIComponent(ASK_PROMPT);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ASK_PROMPT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      /* pas de presse-papiers : le texte reste lisible dans « Voir la question » */
    }
  };

  const openGemini = async () => {
    await copy();
    window.open(GEMINI_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="ai" aria-labelledby="ai-title">
      <div className="lf-wrap">
        <div className="ai-panel">
          <div className="ai-copy-block">
            <h2 id="ai-title" className="ai-title">
              Plutôt que de lire, posez la question.
            </h2>
            <p className="ai-text">
              Ouvrez votre assistant habituel : il vous présente Rushh à partir de notre fiche, puis répond à vos
              questions sur votre agence.
            </p>
            <details className="ai-details">
              <summary>Voir la question envoyée</summary>
              <pre className="ai-prompt">{ASK_PROMPT}</pre>
              <button type="button" className="ai-copy" onClick={copy}>
                {copied ? "Copié ✓" : "Copier le texte"}
              </button>
            </details>
          </div>

          <ul className="ai-row" aria-label="Choisir un assistant">
            {ASK_TARGETS.map((t) => {
              const inner = (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ai-logo" src={t.logo} width={t.w} height={t.h} alt="" loading="lazy" decoding="async" />
                  <span className="ai-name">{t.name}</span>
                </>
              );
              return (
                <li key={t.id}>
                  {t.url ? (
                    <a className="ai-card" href={t.url(q)} target="_blank" rel="noopener noreferrer" aria-label={`Demander à ${t.name}`}>
                      {inner}
                    </a>
                  ) : (
                    <button type="button" className="ai-card" onClick={openGemini} aria-label={`Demander à ${t.name} (le texte est copié, à coller)`}>
                      {inner}
                      <span className="ai-copied" aria-live="polite">{copied ? "Texte copié, à coller" : ""}</span>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
