import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
