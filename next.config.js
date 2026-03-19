/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

/**
 * @type {import('next').NextConfig}
 */
// @ts-ignore
const config = withPWA({
  reactStrictMode: true,
  output: "export", // Forces static HTML export for GitHub Pages
  basePath: "/portfolio", // Matches the GitHub Pages repo name
  images: {
    unoptimized: true // Mandatory because Next.js Image Optimization server doesn't exist on GitHub Pages!
  }
});

export default config;