import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
