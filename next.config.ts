import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site so you can host it anywhere
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
