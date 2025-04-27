/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/ouwargui.png',
      },
    ],
  },
  experimental: {
    reactCompiler: {compilationMode: 'all'},
    serverActions: {
      allowedForwardedHosts: ['localhost:3000'],
      allowedOrigins: ['localhost:3000'],
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
