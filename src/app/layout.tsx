import './globals.css';
import type {Metadata, Viewport} from 'next';
import {Analytics} from '@vercel/analytics/react';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {Red_Hat_Mono} from 'next/font/google';

const redHatMono = Red_Hat_Mono({subsets: ['latin']});

export const viewport: Viewport = {
  themeColor: '27272a',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: {
    default: 'Guilherme Santos - Software Engineer',
    template: '%s | Guilherme Santos - Software Engineer',
  },
  metadataBase: new URL('https://guisantos.dev'),
  description: "Guilherme's portfolio and blog",
  creator: 'Guilherme Santos',
  publisher: 'Guilherme Santos',
  openGraph: {
    title: 'Guilherme Santos - Software Engineer',
    description: "Guilherme's portfolio and blog",
    url: 'https://guisantos.dev',
    siteName: 'Guilherme Santos - Software Engineer',
    type: 'website',
    locale: 'en_US',
    images: ['https://github.com/ouwargui.png'],
  },
  robots: {
    follow: true,
    index: true,
    nocache: false,
  },
  twitter: {
    card: 'summary',
    title: 'Guilherme Santos - Software Engineer',
    description: "Guilherme's portfolio and blog",
    creator: '@eoqguih',
    images: ['https://github.com/ouwargui.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${redHatMono.className} bg-gradient-to-b from-zinc-800 to-zinc-950 overflow-x-hidden`}
      >
        <div className="mx-auto min-h-screen min-w-[100vw] flex flex-col items-center justify-between">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
