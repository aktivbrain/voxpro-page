/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.voxpro.app'],
    unoptimized: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
