import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WhySection } from "@/components/sections/WhySection";
import { CompareSection } from "@/components/sections/CompareSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";

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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelle différence entre le Standard Rushh et un standard téléphonique ou une permanence téléphonique classique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un standard classique fait patienter ou redirige l'appel. Le Standard Rushh, lui, comprend la demande, qualifie le prospect et transmet une fiche prête à traiter, sans plateau d'appel ni script générique, avec un déploiement adapté à votre agence en 5 jours.",
      },
    },
    {
      "@type": "Question",
      "name": "Est-ce que le Standard Rushh remplace mon équipe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le Standard Rushh intervient lorsque votre équipe ne peut pas prendre en charge un appel, ou sur les situations que vous choisissez de lui confier. Vous définissez également les cas dans lesquels l'appel doit être transmis à un collaborateur.",
      },
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si un client veut parler à quelqu'un de l'agence ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous définissez vos règles. Selon la situation, le Standard Rushh peut transmettre l'appel, recueillir les informations nécessaires ou organiser la suite avec votre équipe.",
      },
    },
    {
      "@type": "Question",
      "name": "Est-ce à nous de configurer et maintenir le système ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C'est justement la différence entre le Standard Rushh et un logiciel classique. Nous concevons, configurons, testons et faisons évoluer votre standard téléphonique avec vous.",
      },
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour déployer le Standard Rushh ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mise en production cible est réalisée sous 5 jours ouvrés après réception de l'ensemble des éléments nécessaires au déploiement.",
      },
    },
  ],
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
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <CompareSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
