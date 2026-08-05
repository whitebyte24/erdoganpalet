import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    '*': ['**/*'],
  },
  webpack: (config) => {
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
