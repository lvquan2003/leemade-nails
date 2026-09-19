// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const repository =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "leemade-nails";

const basePath =
  isGitHubPages && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;