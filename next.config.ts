import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LewisWilliamFootNext",
  assetPrefix: "/LewisWilliamFootNext/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
