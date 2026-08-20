import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { parseConfirmationParams, type SearchParamsInput } from "@/lib/confirmation";
import { BookingAnalytics } from "@/components/confirmation/BookingAnalytics";

export const metadata: Metadata = {
  title: "Confirmation de rendez-vous | Rushh",
  description: "Votre démonstration Rushh est confirmée.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.rushh.fr/confirmation",
  },
};

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<SearchParamsInput>;
}) {
  const params = await searchParams;
  const data = parseConfirmationParams(params);

  const title = data.firstName ? `C’est réservé, ${data.firstName}.` : "C’est réservé.";
  const bookingDate =
    data.dateLabel && data.timeLabel
      ? `${data.dateLabel} à ${data.timeLabel}`
      : data.dateLabel;
  const cardDateLabel = data.dateLabel
    ? data.dateLabel.charAt(0).toUpperCase() + data.dateLabel.slice(1)
    : undefined;

  return (
    <main className="conf-page">
      <div className="conf-bg" aria-hidden="true" />
      <svg className="conf-arc" viewBox="0 0 1200 620" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
        <defs>
          <linearGradient id="confArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0047C6" stopOpacity="0" />
            <stop offset="50%" stopColor="#0047C6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0047C6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="600" cy="600" r="520" fill="none" stroke="url(#confArcGradient)" strokeWidth="1.5" />
      </svg>

      <div className="conf-topbar">
        <a href="/" className="conf-brand" aria-label="Rushh — retour à l'accueil">
          <img src="/logo-rushh-icon.png" alt="" className="conf-brand-logo" />
          <span>Rushh</span>
        </a>
      </div>

      <div className="conf-content">
        <div className="conf-badge">
          <span className="conf-badge-dot" />
          Rendez-vous confirmé
        </div>

        <h1 className="conf-title">{title}</h1>

        <p className="conf-subtitle">Votre démonstration Rushh est confirmée.</p>

        {cardDateLabel && (
          <div className="conf-card">
            <Calendar aria-hidden="true" />
            <span className="conf-card-date">{cardDateLabel}</span>
            {data.timeLabel && (
              <>
                <span className="conf-card-sep" aria-hidden="true" />
                <span className="conf-card-time">{data.timeLabel}</span>
              </>
            )}
          </div>
        )}

        <p className="conf-body">Vous recevrez toutes les informations du rendez-vous par e-mail.</p>

        <span className="conf-divider" aria-hidden="true" />

        <p className="conf-tease">Gardez votre téléphone à portée de main.</p>

        <p className="conf-signature">
          À très vite,
          <br />
          Gaspard
        </p>
      </div>

      <div className="conf-footer">
        <a href="/" className="conf-back">
          rushh.fr
        </a>
      </div>

      {data.hasBookingSignal && (
        <BookingAnalytics
          eventType={data.eventTypeName}
          bookingDate={bookingDate}
          utmSource={data.utmSource}
          utmMedium={data.utmMedium}
          utmCampaign={data.utmCampaign}
        />
      )}
    </main>
  );
}
