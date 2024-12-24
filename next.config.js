/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  distDir: 'dist',
  trailingSlash: true,
  optimizeFonts: true,
  images: {
    unoptimized: true,
    domains: ['jhalverson1.github.io'],
  },
}

module.exports = nextConfig 