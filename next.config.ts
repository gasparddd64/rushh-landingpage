import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En-têtes de sécurité sans risque pour le site, Calendly, Tally et les statistiques :
  // le Referer reste envoyé (origine seule vers les autres sites) et aucun contenu n'est bloqué.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/onboarding",
        destination: "https://tally.so/r/D46M2Z",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
