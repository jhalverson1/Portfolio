/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  distDir: 'dist',
}

module.exports = nextConfig 