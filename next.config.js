/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  trailingSlash: true,
  optimizeFonts: true,
}

module.exports = nextConfig 