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
  description: "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description: "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
    url: "https://www.rushh.fr",
    siteName: "Rushh",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description: "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
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
