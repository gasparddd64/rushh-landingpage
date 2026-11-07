"use client";

import { useState } from "react";
import { ASK_PROMPT, ASK_TARGETS, GEMINI_URL } from "@/lib/ask-ai";
import "@/app/ask-ai.css";

/** « Demandez à votre IA » : un clic envoie un prompt déjà rédigé à ChatGPT, Claude, Gemini ou Perplexity. */
export function AskAISection() {
  const [copied, setCopied] = useState(false);
  const q = encodeURIComponent(ASK_PROMPT);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ASK_PROMPT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      /* pas de presse-papiers : le prompt reste lisible ci-dessous */
    }
  };

  const openGemini = async () => {
    await copy();
    window.open(GEMINI_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="ai" aria-labelledby="ai-title">
      <div className="lf-wrap">
        <div className="lf-head--center ai-head">
          <span className="lf-pill">Demandez à votre IA</span>
          <h2 id="ai-title" className="lf-h2">
            Pas le temps de lire&nbsp;? Demandez à votre IA.
          </h2>
          <p className="lf-sub ai-lead">
            Un clic, et votre assistant vous explique Rushh, le compare à vos alternatives et vous dit quoi faire. Le
            prompt est déjà rédigé.
          </p>
        </div>

        <ul className="ai-row" aria-label="Poser la question à une IA">
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
                  <button type="button" className="ai-card" onClick={openGemini} aria-label={`Demander à ${t.name} (le prompt est copié, à coller)`}>
                    {inner}
                    <span className="ai-copied" aria-live="polite">{copied ? "Prompt copié, à coller" : ""}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        <details className="ai-details">
          <summary>Voir le prompt</summary>
          <pre className="ai-prompt">{ASK_PROMPT}</pre>
          <button type="button" className="ai-copy" onClick={copy}>
            {copied ? "Copié ✓" : "Copier le prompt"}
          </button>
        </details>
      </div>
    </section>
  );
}
