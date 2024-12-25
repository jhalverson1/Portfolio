/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/Portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS === 'true' ? '/Portfolio/' : '',
  distDir: 'out',
  trailingSlash: true,
  optimizeFonts: true,
}

module.exports = nextConfig 