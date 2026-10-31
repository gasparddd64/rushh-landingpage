"use client";

import { useEffect } from "react";
import { trackConfirmationReturn } from "@/lib/analytics";
import { cleanFreeText, cleanUtmValue } from "@/lib/attribution";

interface BookingAnalyticsProps {
  bookingRef: string;
  eventType?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

/**
 * Rendu uniquement si l'URL porte une référence Calendly. Envoie `demo_booking_return` (retour depuis Calendly),
 * pas `demo_booked` : une URL ne prouve pas une réservation. Une fois par référence, avec consentement seulement,
 * sans donnée personnelle (ni nom, ni e-mail, ni la référence elle-même).
 */
export function BookingAnalytics({ bookingRef, eventType, utmSource, utmMedium, utmCampaign }: BookingAnalyticsProps) {
  useEffect(() => {
    // GA4 se charge après la lecture du consentement : on réessaie brièvement avant d'abandonner.
    let tries = 0;
    const id = window.setInterval(() => {
      tries += 1;
      const sent = trackConfirmationReturn(bookingRef, {
        event_type: cleanFreeText(eventType),
        calendly_utm_source: cleanUtmValue(utmSource),
        calendly_utm_medium: cleanUtmValue(utmMedium),
        calendly_utm_campaign: cleanUtmValue(utmCampaign),
      });
      if (sent || tries >= 20) window.clearInterval(id);
    }, 250);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
