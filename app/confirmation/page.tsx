import type { Metadata } from "next";
import Link from "next/link";
import { DemoCTA } from "@/components/ui/demo-cta";
import { Nav } from "@/components/sections/Nav";
import { parseConfirmationParams, type SearchParamsInput } from "@/lib/confirmation";
import { BookingAnalytics } from "@/components/confirmation/BookingAnalytics";
import { ConfirmationUrlCleaner } from "@/components/confirmation/ConfirmationUrlCleaner";

export const metadata: Metadata = {
  title: "Votre démonstration | Rushh",
  description: "Consultez votre e-mail Calendly pour retrouver les détails de votre réservation.",
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

      <Nav />

      <div className="conf-content">
        <div className="conf-badge">
          <span className="conf-badge-dot" />
          Votre démonstration
        </div>

        <h1 className="conf-title">Votre démonstration Rushh</h1>

        <p className="conf-subtitle">Consultez votre e-mail Calendly pour retrouver les détails de votre réservation.</p>

        <p className="conf-body">Si vous avez réservé, votre e-mail Calendly fait foi. Sinon, choisissez un créneau pour découvrir Rushh.</p>
        <DemoCTA label="Réserver une démo" />

        <span className="conf-divider" aria-hidden="true" />

        <p className="conf-tease">Gardez votre téléphone à portée de main.</p>

        <p className="conf-signature">
          À très vite,
          <br />
          Gaspard
        </p>
      </div>

      <div className="conf-footer">
        <Link href="/" className="conf-back">
          rushh.fr
        </Link>
      </div>

      <ConfirmationUrlCleaner />

      {data.bookingRef && (
        <BookingAnalytics
          bookingRef={data.bookingRef}
          eventType={data.eventTypeName}
          utmSource={data.utmSource}
          utmMedium={data.utmMedium}
          utmCampaign={data.utmCampaign}
        />
      )}
    </main>
  );
}
