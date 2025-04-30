/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Deepak test registry',
    description: 'deepak test registry desc.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/laterBaseUrlRepo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
