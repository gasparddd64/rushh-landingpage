"use client";

import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { TestezCTA } from "@/components/ui/testez-cta";
import { ASK_PROMPT, ASK_TARGETS, GEMINI_URL } from "@/lib/ask-ai";
import "@/app/ask-ai.css";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/** « Demandez à votre IA » : un clic envoie un prompt déjà rédigé à ChatGPT, Claude, Perplexity, Grok ou Gemini. */
export function AskAISection() {
  const [copied, setCopied] = useState(false);
  const q = encodeURIComponent(ASK_PROMPT);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ASK_PROMPT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
      return true;
    } catch {
      return false;
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

        <div className="ai-row" role="group" aria-label="Poser la question à une IA">
          {ASK_TARGETS.map((t) => (
            <a key={t.id} className="ai-btn" href={t.url(q)} target="_blank" rel="noopener noreferrer">
              <span>Demander à {t.name}</span>
              <Arrow />
            </a>
          ))}
          <button type="button" className="ai-btn" onClick={openGemini}>
            <span>Demander à Gemini</span>
            <Arrow />
          </button>
        </div>
        <p className="ai-note" aria-live="polite">
          {copied ? "Prompt copié : collez-le dans Gemini (Ctrl/Cmd + V)." : "Pour Gemini, le prompt est copié : il ne reste qu’à le coller."}
        </p>

        <details className="ai-details">
          <summary>Voir le prompt</summary>
          <pre className="ai-prompt">{ASK_PROMPT}</pre>
          <button type="button" className="ai-copy" onClick={copy}>
            {copied ? "Copié ✓" : "Copier le prompt"}
          </button>
        </details>

        <div className="ai-cta">
          <TestezCTA />
          <DemoCTA />
        </div>
      </div>
    </section>
  );
}
