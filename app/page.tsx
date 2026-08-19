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
    "https://www.linkedin.com/company/rushh",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Est-ce que Rushh remplace mon équipe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Rushh intervient lorsque votre équipe ne peut pas prendre en charge un appel, ou sur les situations que vous choisissez de lui confier. Vous définissez également les cas dans lesquels l'appel doit être transmis à un collaborateur.",
      },
    },
    {
      "@type": "Question",
      "name": "Mes clients vont-ils avoir l'impression de parler à un robot ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est précisément pour cette raison que nous préférons vous faire entendre Rushh plutôt que vous demander de nous croire. Chaque déploiement est travaillé pour offrir des échanges naturels et adaptés à votre agence.",
      },
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si un client veut parler à quelqu'un de l'agence ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous définissez vos règles. Selon la situation, Rushh peut transmettre l'appel, recueillir les informations nécessaires ou organiser la suite avec votre équipe.",
      },
    },
    {
      "@type": "Question",
      "name": "Dois-je changer mon numéro de téléphone ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas nécessairement. Nous étudions votre installation actuelle et définissons avec vous la configuration adaptée avant le déploiement.",
      },
    },
    {
      "@type": "Question",
      "name": "Est-ce à nous de configurer et maintenir le système ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. C'est justement la différence entre Rushh et un logiciel classique. Nous concevons, configurons, testons et faisons évoluer votre standard téléphonique avec vous.",
      },
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour déployer Rushh ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mise en production cible est réalisée sous 5 jours ouvrés après réception de l'ensemble des éléments nécessaires au déploiement.",
      },
    },
    {
      "@type": "Question",
      "name": "Combien ça coûte ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif dépend du volume d'appels de votre agence et de la configuration retenue. Nous en discutons lors de la démonstration, après avoir compris votre fonctionnement.",
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
