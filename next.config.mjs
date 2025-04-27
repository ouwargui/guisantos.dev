import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx', 'md'],
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

const withMdx = createMDX();

export default withMdx(nextConfig);
