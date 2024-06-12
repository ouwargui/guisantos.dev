import '@/app/globals.css';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import type {Metadata, Viewport} from 'next';

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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
