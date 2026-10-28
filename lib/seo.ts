import type { Metadata } from "next";

const SITE = "https://www.rushh.fr";

/** Ajoute Open Graph / Twitter propres à la page (sans quoi la page hérite de l'URL et du titre de l'accueil). */
export function withSocial(base: Metadata, path: string): Metadata {
  const title = typeof base.title === "string" ? base.title : "Rushh";
  const description = base.description ?? "";
  const url = `${SITE}${path}`;
  const images = [{ url: `${SITE}/logo-rushh-og.png`, width: 365, height: 365, alt: "Rushh" }];
  return {
    ...base,
    openGraph: { title, description, url, siteName: "Rushh", locale: "fr_FR", type: "website", images },
    twitter: { card: "summary", title, description, images: images.map((i) => i.url) },
  };
}
