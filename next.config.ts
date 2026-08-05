import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Limit spawned worker processes for CloudLinux LVE NPROC limits
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
  },
  outputFileTracingExcludes: {
    '*': ['**/*'],
  },
  webpack: (config) => {
    config.parallelism = 1;
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@tailwindcss/postcss'] = path.resolve(__dirname, 'node_modules/@tailwindcss/postcss');
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
