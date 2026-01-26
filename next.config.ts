import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/LewisWilliamFootNext" : "",
  assetPrefix: isProd ? "/LewisWilliamFootNext/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
