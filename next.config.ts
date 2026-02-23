import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "ops-signal-landing";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  // Export as a fully static site so you can host it anywhere
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,

  images: {
    unoptimized: true,
  },

  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;
