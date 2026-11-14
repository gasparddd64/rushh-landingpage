import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { LossSection } from "@/components/sections/LossSection";
import { EndingsSection } from "@/components/sections/EndingsSection";
import { RelaySection } from "@/components/sections/RelaySection";
import { AskAISection } from "@/components/sections/AskAISection";
import { MetiersSection } from "@/components/sections/MetiersSection";
import { ToolsOrbitSection } from "@/components/sections/ToolsOrbitSection";
import { ChiffresSection } from "@/components/sections/ChiffresSection";
import { TerrainSection } from "@/components/sections/TerrainSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/faq";
import { BRAND_NAME, BRAND_SHORT, ORG_ID, SITE, WEBSITE_ID, orgRef } from "@/lib/brand";
import "./landing-flow.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  "name": BRAND_NAME,
  "alternateName": BRAND_SHORT,
  "url": SITE,
  "logo": "https://www.rushh.fr/logo-rushh-og.png",
  "description": "Agence spécialisée dans l'externalisation des appels entrants immobiliers : standard téléphonique IA conçu, configuré, testé et suivi par l'équipe Rushh pour les agences immobilières françaises.",
  "email": "hello@rushh.fr",
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
  "@id": ORG_ID,
  "name": BRAND_NAME,
  "alternateName": BRAND_SHORT,
  "url": SITE,
  "logo": "https://www.rushh.fr/logo-rushh-og.png",
  "description": "Agence spécialisée dans l'externalisation des appels entrants immobiliers : standard téléphonique IA conçu, configuré, testé et suivi par l'équipe Rushh pour les agences immobilières françaises.",
  "email": "hello@rushh.fr",
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
  "name": "Standard téléphonique IA pour agence immobilière",
  "serviceType": "Standard téléphonique IA immobilier",
  "description": "Externalisation des appels entrants pour les professionnels de l'immobilier : un standard téléphonique alimenté par intelligence artificielle (une IA décroche, pas une secrétaire humaine), conçu, configuré, testé, surveillé et optimisé par l'équipe Rushh, qui prend en charge les appels selon les règles du client.",
  "provider": orgRef,
  "areaServed": {
    "@type": "Country",
    "name": "France",
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Agences immobilières",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "name": BRAND_NAME,
  "alternateName": BRAND_SHORT,
  "url": SITE,
  "inLanguage": "fr-FR",
  "publisher": orgRef,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
      <Nav variant="hero" />
      <HeroSection />
      <div className="lf">
        <LossSection />
        <EndingsSection />
        <RelaySection />
        <AskAISection />
        <MetiersSection />
        <ToolsOrbitSection />
        <ChiffresSection />
        <TerrainSection />
        <FAQSection />
      </div>
      <TestimonialsSection />
      <BlogSection />
      <CtaBandSection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
