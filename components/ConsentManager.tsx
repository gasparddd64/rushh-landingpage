"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_KEY,
  OPEN_CONSENT_EVENT,
  disableAnalytics,
  loadAnalytics,
  parseConsent,
  writeConsent,
} from "@/lib/consent";
import "@/app/consent.css";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CONSENT_CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CONSENT_CHANGE_EVENT, cb);
  };
}
// "" = aucun choix enregistré ; null côté serveur = pas encore hydraté (rien n'est affiché ni chargé)
function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY) ?? "";
  } catch {
    return "";
  }
}
const getServerSnapshot = (): string | null => null;

export function ConsentManager() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [reopen, setReopen] = useState(false);
  const firstBtn = useRef<HTMLButtonElement>(null);

  const hydrated = raw !== null;
  const saved = hydrated ? parseConsent(raw || null) : null;
  const open = hydrated && (!saved || reopen);

  // GA4 n'est chargé que si un consentement valide est enregistré ; un refus coupe tout et supprime les cookies.
  useEffect(() => {
    if (!hydrated) return;
    if (saved?.analytics) loadAnalytics();
    else if (saved) disableAnalytics();
  }, [hydrated, saved?.analytics, saved?.at]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onOpen = () => setReopen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && reopen) firstBtn.current?.focus();
  }, [open, reopen]);

  if (!open) return null;

  const choose = (analytics: boolean) => {
    writeConsent(analytics);
    setReopen(false);
  };

  return (
    <div className="cm" role="dialog" aria-modal="false" aria-labelledby="cm-title" aria-describedby="cm-text">
      <p id="cm-title" className="cm-title">Statistiques de fréquentation</p>
      <p id="cm-text" className="cm-text">
        Nous utilisons Google Analytics pour mesurer l&apos;audience du site, uniquement avec votre accord.
        {saved && <> Choix actuel : statistiques {saved.analytics ? "acceptées" : "refusées"}.</>}{" "}
        <Link href="/privacy#cookies">En savoir plus</Link>
      </p>
      <div className="cm-actions">
        <button ref={firstBtn} type="button" className="cm-btn" onClick={() => choose(true)}>
          Accepter les statistiques
        </button>
        <button type="button" className="cm-btn" onClick={() => choose(false)}>
          Refuser les statistiques
        </button>
      </div>
    </div>
  );
}
