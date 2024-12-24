/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/Portfolio' : '',
  assetPrefix: isProduction ? '/Portfolio' : '',
  trailingSlash: true,
  optimizeFonts: true,
}

module.exports = nextConfig 