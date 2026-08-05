import type { NextConfig } from "next";
import path from "path";

// Restrict Rust / Tokio / Rayon / Libuv / Jest-Worker threadpool sizes to 1 for CloudLinux LVE NPROC thread limits
process.env.TOKIO_WORKER_THREADS = "1";
process.env.RAYON_NUM_THREADS = "1";
process.env.UV_THREADPOOL_SIZE = "1";
process.env.SWC_NUM_WORKERS = "1";
process.env.NEXT_PRIVATE_BUILD_WORKER = "0";
process.env.NEXT_CPU_COUNT = "1";
process.env.NEXT_MAX_WORKERS = "1";

const nextConfig: NextConfig = {
  // Limit spawned worker processes for CloudLinux LVE NPROC limits
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
    workerThreads: true,
  },
  outputFileTracingExcludes: {
    '*': ['**/*'],
  },
  webpack: (config) => {
    config.parallelism = 1;
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['tailwindcss'] = path.resolve(__dirname, 'node_modules/tailwindcss');
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
