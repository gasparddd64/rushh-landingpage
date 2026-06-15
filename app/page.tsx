import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { WhySection } from "@/components/sections/WhySection";
import { StepsSection } from "@/components/sections/StepsSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PartenairesSection } from "@/components/sections/PartenairesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <WhySection />
      <StepsSection />
      <CalculatorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <PartenairesSection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
