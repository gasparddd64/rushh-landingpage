import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BRAND_NAME } from "@/lib/brand";
import { CalendlyTracking } from "@/components/CalendlyTracking";
import { ConversionTracking } from "@/components/ConversionTracking";
import { AnnouncementBar } from "@/components/ui/announcement-bar";

const inter = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Standard téléphonique IA pour agence immobilière | Rushh immo",
  description: "Rushh : l'IA qui répond au téléphone pour votre agence immobilière. Standard téléphonique alimenté par IA 24 h/24, configuré et suivi par notre équipe.",
  keywords: [
    "standard téléphonique IA agence immobilière",
    "standard téléphonique IA immobilier",
    "standard téléphonique immo",
    "assistant téléphonique IA immobilier",
    "standard téléphonique agence immobilière",
    "permanence téléphonique immobilier",
    "permanence téléphonique agence immobilière",
    "secrétaire vocale IA immobilier",
    "standard téléphonique IA pour agence",
    "IA vocale pour agence immobilière",
    "call center IA immobilier",
  ],
  // Google exige des icônes carrées en multiples de 48 px : 48, 96, 192 (le favicon.ico à la racine vient de app/favicon.ico)
  icons: {
    icon: [
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Standard téléphonique IA pour agence immobilière | Rushh immo",
    description: "Rushh : l'IA qui répond au téléphone pour votre agence immobilière. Standard téléphonique alimenté par IA 24 h/24, configuré et suivi par notre équipe.",
    url: "https://www.rushh.fr",
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard téléphonique IA pour agence immobilière | Rushh immo",
    description: "Rushh : l'IA qui répond au téléphone pour votre agence immobilière. Standard téléphonique alimenté par IA 24 h/24, configuré et suivi par notre équipe.",
  },
  alternates: {
    canonical: "https://www.rushh.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={inter.variable}
    >
      <body>
        <CalendlyTracking />
        <ConversionTracking />
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
