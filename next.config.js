/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['videoapi-muybridge.vimeocdn.com'],
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://videoapi-muybridge.vimeocdn.com' : undefined,
}

module.exports = nextConfig
