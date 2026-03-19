/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import("./src/env.js");
import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: process.env.GITHUB_ACTIONS ? "/portfolio/" : "/",
  sw: "service-worker.js",
});

/**
 * @type {import('next').NextConfig}
 */
// @ts-ignore
const config = withPWA({
  reactStrictMode: true,
  output: "export", // Forces static HTML export for GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "", // Automatically applies the repo prefix only during GitHub Actions deployments!
  images: {
    unoptimized: true // Mandatory because Next.js Image Optimization server doesn't exist on GitHub Pages!
  }
});

export default config;