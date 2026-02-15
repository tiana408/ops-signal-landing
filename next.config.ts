import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "ops-signal-landing";

const nextConfig: NextConfig = {
  // Export as a fully static site so you can host it anywhere
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
