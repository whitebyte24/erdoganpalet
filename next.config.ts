import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
