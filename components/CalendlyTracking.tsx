// rushh.fr - réservation Calendly détectée DEPUIS le site (widget intégré uniquement).
// Un lien vers calendly.com ouvre un autre site : aucun message n'arrive ici, la réservation y est mesurée
// par la page /confirmation (redirection Calendly) et par les UTM. Aucun événement n'est supposé.
"use client";

import { useEffect } from "react";
import { trackBookingOnce } from "@/lib/analytics";

export function CalendlyTracking() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event !== "calendly.event_scheduled") return;
      trackBookingOnce({ booking_source: "calendly_embed", page_path: window.location.pathname });
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
