import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { MENTIONS } from "@/lib/legal/mentions";

const baseMetadata: Metadata = {
  title: MENTIONS.metaTitle,
  description: MENTIONS.metaDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: `https://www.rushh.fr/mentions-legales` },
};

export const metadata: Metadata = withSocial(baseMetadata, MENTIONS.path);

export default function Page() {
  return <LegalDocument doc={MENTIONS} />;
}
