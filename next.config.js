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
    serverActions: {
      allowedForwardedHosts: [
        'solid-lamp-xvr9w6jvp7qh64g4-3000.app.github.dev',
        'localhost:3000',
      ],
      allowedOrigins: [
        'solid-lamp-xvr9w6jvp7qh64g4-3000.app.github.dev',
        'localhost:3000',
      ],
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
