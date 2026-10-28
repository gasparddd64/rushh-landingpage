import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { RelaySection } from "@/components/sections/RelaySection";
import { MetiersSection } from "@/components/sections/MetiersSection";
import { ToolsOrbitSection } from "@/components/sections/ToolsOrbitSection";
import { ChiffresSection } from "@/components/sections/ChiffresSection";
import { CompareSection } from "@/components/sections/CompareSection";
import { DemoLineSection } from "@/components/sections/DemoLineSection";
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
    "https://www.instagram.com/rushh.immo/",
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
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Agent vocal IA pour agence immobilière",
  "serviceType": "Agent vocal IA immobilier",
  "description": "Standard téléphonique alimenté par intelligence artificielle pour les professionnels de l'immobilier, prenant en charge les appels entrants selon les règles du client.",
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
        <RelaySection />
        <MetiersSection />
        <ToolsOrbitSection />
        <ChiffresSection />
        <DemoLineSection />
        <FAQSection />
        <CompareSection />
      </div>
      <TestimonialsSection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
