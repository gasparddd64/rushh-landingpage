import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { RgpdBand } from "@/components/sections/RgpdBand";
import { RelaySection } from "@/components/sections/RelaySection";
import { MetiersSection } from "@/components/sections/MetiersSection";
import { ToolsOrbitSection } from "@/components/sections/ToolsOrbitSection";
import { ChiffresSection } from "@/components/sections/ChiffresSection";
import { CompareSection } from "@/components/sections/CompareSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/faq";
import "./landing-flow.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rushh",
  "url": "https://www.rushh.fr",
  "logo": "https://www.rushh.fr/logo-rushh.png",
  "description": "Standard téléphonique conçu et déployé pour les agences immobilières françaises.",
  "email": "hello@rushh.fr",
  "telephone": "+33517948549",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 Rue du Brise Lames",
    "addressLocality": "Anglet",
    "postalCode": "64600",
    "addressCountry": "FR",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "hello@rushh.fr",
      "telephone": "+33517948549",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French"],
    },
  ],
  "sameAs": [
    "https://www.linkedin.com/in/gaspardv/",
    "https://www.instagram.com/rushh.fr",
    "https://www.youtube.com/@rushh",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rushh",
  "url": "https://www.rushh.fr",
  "logo": "https://www.rushh.fr/logo-rushh.png",
  "description": "Standard téléphonique conçu et déployé pour les agences immobilières françaises.",
  "email": "hello@rushh.fr",
  "telephone": "+33517948549",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 Rue du Brise Lames",
    "addressLocality": "Anglet",
    "postalCode": "64600",
    "addressCountry": "FR",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "hello@rushh.fr",
      "telephone": "+33517948549",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French"],
    },
  ],
  "areaServed": "FR",
  "priceRange": "€€€",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Agent vocal IA pour agence immobilière",
  "serviceType": "Agent vocal IA immobilier",
  "description": "Agent vocal IA qui décroche, qualifie et transmet les appels d'une agence immobilière 24 h/24 : prospection, prise de rendez-vous, gestion locative.",
  "provider": {
    "@type": "Organization",
    "name": "Rushh",
    "url": "https://www.rushh.fr",
  },
  "areaServed": {
    "@type": "Country",
    "name": "France",
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Agences immobilières",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <HeroSection />
      <div className="lf">
        <TrustStrip />
        <RelaySection />
        <MetiersSection />
        <ToolsOrbitSection />
        <ChiffresSection />
        <RgpdBand />
        <FAQSection />
        <CompareSection />
      </div>
      <TestimonialsSection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
