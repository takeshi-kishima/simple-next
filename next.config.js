/** @type {import('next').NextConfig} */
const prefixPath = `${process.env.NEXT_PUBLIC_BASE}`;
const nextConfig = {
  output: "export",
  basePath: prefixPath,
  assetPrefix: prefixPath,
};

module.exports = nextConfig;
