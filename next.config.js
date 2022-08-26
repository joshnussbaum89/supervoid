/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['videoapi-muybridge.vimeocdn.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
