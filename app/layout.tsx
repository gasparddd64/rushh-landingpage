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
  title: "Rushh — Le standard téléphonique des agences immobilières",
  description: "Plus aucun appel sans réponse. Rushh décroche, qualifie et transmet la fiche à votre équipe — conçu et déployé pour votre agence en 5 jours.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description: "Plus aucun appel sans réponse. Rushh décroche, qualifie et transmet la fiche à votre équipe — conçu et déployé pour votre agence en 5 jours.",
    url: "https://www.rushh.fr",
    siteName: "Rushh",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description: "Plus aucun appel sans réponse. Rushh décroche, qualifie et transmet la fiche à votre équipe — conçu et déployé pour votre agence en 5 jours.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
