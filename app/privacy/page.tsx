import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PRIVACY } from "@/lib/legal/privacy";

const baseMetadata: Metadata = {
  title: PRIVACY.metaTitle,
  description: PRIVACY.metaDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: `https://www.rushh.fr/privacy` },
};

export const metadata: Metadata = withSocial(baseMetadata, PRIVACY.path);

export default function Page() {
  return <LegalDocument doc={PRIVACY} />;
}
