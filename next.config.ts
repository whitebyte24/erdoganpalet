import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Expand tracing root so symlinked node_modules in nodevenv (/home/user/nodevenv/...) is valid
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
