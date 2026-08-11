import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushh — Le standard téléphonique pour les agences immobilières",
  description:
    "Rushh prend en charge vos appels entrants quand votre équipe n'est pas disponible. Conçu exclusivement pour les agences immobilières. Mise en production cible sous 5 jours ouvrés.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rushh — Le standard téléphonique pour les agences immobilières",
    description:
      "Rushh prend en charge vos appels entrants quand votre équipe n'est pas disponible. Conçu exclusivement pour les agences immobilières.",
    images: [{ url: "/logo-rushh-og.png", width: 512, height: 512 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushh — Le standard téléphonique pour les agences immobilières",
    description:
      "Rushh prend en charge vos appels entrants quand votre équipe n'est pas disponible.",
  },
  alternates: {
    canonical: "https://rushh.fr",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
