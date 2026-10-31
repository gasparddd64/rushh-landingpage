"use client";

import { useEffect } from "react";
import { classifyHref, cleanLabel, currentInboundUtm, rememberInboundUtm, trackEvent } from "@/lib/analytics";
import { withAttribution } from "@/lib/attribution";
import { CONSENT_CHANGE_EVENT } from "@/lib/consent";

/**
 * Un seul écouteur de clics pour tout le site : clic sur « Réserver une démo » (lien Calendly) et clic sur le
 * numéro de démonstration. Aucun composant à modifier, donc aucun risque de doublon par bouton.
 * - Les UTM entrants sont transmis à Calendly tels quels ; sans UTM, la source est marquée « inconnue »
 *   (voir lib/attribution.ts). Une source mémorisée pour la session exige le consentement.
 * - L'événement GA4 n'est envoyé qu'avec consentement (voir lib/analytics.ts).
 */
export function ConversionTracking() {
  useEffect(() => {
    function onActivate(e: MouseEvent) {
      if (e.type === "auxclick" && e.button !== 1) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const kind = classifyHref(a.getAttribute("href"));
      if (!kind) return;
      const path = window.location.pathname;
      if (kind === "demo_cta_click") {
        a.setAttribute("href", withAttribution(a.href, path, currentInboundUtm()));
      }
      trackEvent(kind, {
        page_path: path,
        cta_text: cleanLabel(a.getAttribute("aria-label") || a.textContent),
        link_url: kind === "demo_cta_click" ? "calendly_demo" : "demo_phone",
      });
    }
    rememberInboundUtm();
    window.addEventListener(CONSENT_CHANGE_EVENT, rememberInboundUtm);
    document.addEventListener("click", onActivate, true);
    document.addEventListener("auxclick", onActivate, true);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, rememberInboundUtm);
      document.removeEventListener("click", onActivate, true);
      document.removeEventListener("auxclick", onActivate, true);
    };
  }, []);

  return null;
}
