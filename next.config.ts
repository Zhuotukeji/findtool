import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
