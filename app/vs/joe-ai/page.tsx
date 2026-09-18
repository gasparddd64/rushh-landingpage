import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JoeAIVsContent } from "@/components/vs/JoeAIVsContent";

export const metadata: Metadata = {
  title: "Rushh vs Joe AI : Standard téléphonique sur-mesure ou plateforme multicanale ?",
  description: "Comparatif entre Rushh, le Standard téléphonique sur-mesure pour l'immobilier, et Joe AI, plateforme multicanale standardisée par métier.",
  alternates: {
    canonical: "https://www.rushh.fr/vs/joe-ai",
  },
};

export default function JoeAIVsPage() {
  return (
    <>
      <Nav />
      <JoeAIVsContent />
      <FooterSection />
      <ScrollReveal />
    </>
  );
}
