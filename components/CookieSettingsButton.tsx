"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

export function CookieSettingsButton() {
  return (
    <button type="button" className="footer-cookie-btn" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      Gérer les cookies
    </button>
  );
}
