import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https", // Protocol for the URL (https for GitHub)
        hostname: "avatars.githubusercontent.com", // Hostname for GitHub avatars
        port: "", // Leave as an empty string if there's no specific port
        pathname: "/u/**", // Use wildcard pattern to allow all images under /u
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    //   ppr: "incremental",
    // },
    // devIndicators: {
    //   appIsrStatus: true,
    //   buildActivity: true,
    //   buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
