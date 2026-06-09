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
  title: "Agent vocal IA pour agences immobilières | Rushh",
  description:
    "Rushh décroche 100% de vos appels 24h/24, qualifie vos prospects et envoie la fiche à vos négos. Données hébergées en France. Testez en 90 secondes.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Agent vocal IA pour agences immobilières | Rushh",
    description:
      "Rushh décroche 100% de vos appels 24h/24, qualifie vos prospects et envoie la fiche à vos négos. Données hébergées en France. Testez en 90 secondes.",
    images: [{ url: "/logo-rushh-og.png", width: 512, height: 512 }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rushh",
  url: "https://rushh.fr",
  telephone: "+33-5-17-94-85-49",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayonne",
    addressCountry: "FR",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un agent vocal IA pour agence immobilière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un agent vocal IA pour agence immobilière est un système qui décroche automatiquement vos appels entrants 24h/24, 7j/7. Il dialogue naturellement avec vos prospects, collecte leurs informations clés (budget, type de bien, localisation) et vous transmet une fiche qualifiée en temps réel, sans aucune intervention humaine.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que mes prospects savent qu'ils parlent à une IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui — Rushh se présente naturellement dès le début de l'appel. La transparence est essentielle, et nos clients constatent que ça ne nuit pas du tout à la qualité de la conversation, au contraire.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que je dois changer mes outils ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Rushh s'intègre à votre numéro existant, votre calendrier (Google, Outlook, iCal), et votre CRM. Aucune migration, aucune nouvelle app à installer.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps pour être opérationnel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "48h en moyenne. Un appel de découverte de 20 minutes, configuration de votre script sur mesure, tests, mise en ligne. Vous validez à chaque étape.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que c'est conforme RGPD ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entièrement. Données hébergées en France, traitement strictement encadré, durée de conservation configurable, droit à l'effacement intégré. Notre DPO est à votre disposition.",
      },
    },
    {
      "@type": "Question",
      name: "Combien ça coûte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix dépend de votre volume d'appels et du périmètre que vous souhaitez couvrir. Un seul mandat sauvé couvre généralement plusieurs mois d'abonnement. Demandez une démo pour un devis personnalisé.",
      },
    },
  ],
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
