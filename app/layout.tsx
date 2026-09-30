import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { CalendlyTracking } from "@/components/CalendlyTracking";

const inter = Plus_Jakarta_Sans({
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

// Écriture manuscrite des maquettes « notes d'agent » (section Le relais Rushh)
const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent vocal IA pour agence immobilière | Rushh",
  description: "Le Standard Rushh est l'agent vocal IA pour agence immobilière : il décroche, qualifie et transmet chaque appel 24 h/24, conçu et déployé pour votre agence en 5 jours.",
  keywords: [
    "agent vocal agence immo",
    "agent vocal IA agence immobilière",
    "agent vocal immobilier",
    "assistant vocal IA immobilier",
    "standard téléphonique IA immobilier",
    "standard téléphonique agence immobilière",
    "permanence téléphonique immobilier",
    "permanence téléphonique agence immobilière",
    "secrétaire vocale IA immobilier",
    "logiciel agent vocal immobilier",
    "IA vocale pour agence immobilière",
    "call center IA immobilier",
  ],
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Agent vocal IA pour agence immobilière | Rushh",
    description: "Le Standard Rushh est l'agent vocal IA pour agence immobilière : il décroche, qualifie et transmet chaque appel 24 h/24, conçu et déployé pour votre agence en 5 jours.",
    url: "https://www.rushh.fr",
    siteName: "Rushh",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.rushh.fr/logo-rushh-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent vocal IA pour agence immobilière | Rushh",
    description: "Le Standard Rushh est l'agent vocal IA pour agence immobilière : il décroche, qualifie et transmet chaque appel 24 h/24, conçu et déployé pour votre agence en 5 jours.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${hand.variable}`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0EZB9K3J95" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0EZB9K3J95');
            `,
          }}
        />
      </head>
      <body>
        <CalendlyTracking />
        {children}
      </body>
    </html>
  );
}
