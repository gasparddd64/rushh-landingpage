import { Nav } from "@/components/sections/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WhySection } from "@/components/sections/WhySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
