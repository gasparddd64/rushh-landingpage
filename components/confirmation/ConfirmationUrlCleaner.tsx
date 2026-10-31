"use client";

import { useEffect } from "react";
import { sanitizeAnalyticsUrl } from "@/lib/attribution";

/**
 * L'adresse de retour de Calendly contient nom, e-mail, etc. Elles servent uniquement à l'affichage, déjà rendu côté
 * serveur : on les retire de la barre d'adresse (et donc de l'historique) dès la page affichée. Ne reste que les UTM.
 * Le suivi autorisé n'est pas touché : les valeurs utiles sont passées en props par le serveur.
 */
export function ConfirmationUrlCleaner() {
  useEffect(() => {
    const clean = new URL(sanitizeAnalyticsUrl(window.location.href));
    const next = `${clean.pathname}${clean.search}`;
    if (next !== `${window.location.pathname}${window.location.search}`) {
      window.history.replaceState(window.history.state, "", next);
    }
  }, []);

  return null;
}
