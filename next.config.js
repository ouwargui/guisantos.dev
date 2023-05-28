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
};

module.exports = nextConfig;
