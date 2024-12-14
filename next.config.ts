import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // fetching images over HTTPS
        hostname: "cdn.imagin.studio", // The domain you want to allow
        port: "", // Optional, leave empty for default ports
        pathname: "/**", // Allows any path on the domain
      },
    ],
  },
};

export default nextConfig;
