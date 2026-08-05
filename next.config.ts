import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    '*': ['**/*'],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
