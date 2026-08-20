"use client";

import { useEffect } from "react";

interface BookingAnalyticsProps {
  eventType?: string;
  bookingDate?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function BookingAnalytics({
  eventType,
  bookingDate,
  utmSource,
  utmMedium,
  utmCampaign,
}: BookingAnalyticsProps) {
  useEffect(() => {
    const payload = {
      event_type: eventType,
      booking_date: bookingDate,
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
    };

    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({ event: "demo_booked", ...payload });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "demo_booked", payload);
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "demo_booked", payload);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
