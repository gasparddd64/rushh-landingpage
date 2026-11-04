import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { CGV } from "@/lib/legal/cgv";

const baseMetadata: Metadata = {
  title: CGV.metaTitle,
  description: CGV.metaDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: `https://www.rushh.fr/cgv` },
};

export const metadata: Metadata = withSocial(baseMetadata, CGV.path);

export default function Page() {
  return <LegalDocument doc={CGV} />;
}
