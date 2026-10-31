import type { Metadata } from "next";
import { BRAND_NAME } from "./brand";

const SITE = "https://www.rushh.fr";

/** Ajoute Open Graph / Twitter propres à la page (sans quoi la page hérite de l'URL et du titre de l'accueil). */
export function withSocial(base: Metadata, path: string): Metadata {
  const title = typeof base.title === "string" ? base.title : BRAND_NAME;
  const description = base.description ?? "";
  const url = `${SITE}${path}`;
  const images = [{ url: `${SITE}/logo-rushh-og.png`, width: 365, height: 365, alt: BRAND_NAME }];
  return {
    ...base,
    openGraph: { title, description, url, siteName: BRAND_NAME, locale: "fr_FR", type: "website", images },
    twitter: { card: "summary", title, description, images: images.map((i) => i.url) },
  };
}
