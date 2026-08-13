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
  description:
    "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description:
      "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
    images: [{ url: "/logo-rushh-og.png", width: 512, height: 512 }],
  },
  twitter: {
    title: "Rushh — Le standard téléphonique des agences immobilières",
    description:
      "Rushh décroche chaque appel de votre agence immobilière, qualifie le prospect et transmet la fiche à votre équipe. Conçu, déployé et suivi pour vous.",
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
