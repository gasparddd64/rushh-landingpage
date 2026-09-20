// rushh.fr - tracking des réservations Calendly dans GA4 (G-0EZB9K3J95)
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CalendlyTracking() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      const evt = e.data?.event;
      if (evt === "calendly.event_scheduled") {
        window.gtag?.("event", "calendly_booking", {
          event_category: "conversion",
          event_label: "calendly_widget",
        });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
