import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "*",
    port: "",
    pathname: "/**",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns,
  },
};

export default nextConfig;
