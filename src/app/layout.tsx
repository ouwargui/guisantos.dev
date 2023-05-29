import './globals.css';
import {Analytics} from '@vercel/analytics/react';
import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {Metadata} from 'next';
import {Red_Hat_Mono} from 'next/font/google';

const redHatMono = Red_Hat_Mono({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Guilherme Santos - Software Engineer',
  description: "Guilherme's portfolio and blog",
  themeColor: '#27272a',
  colorScheme: 'dark',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${redHatMono.className} bg-gradient-to-b from-zinc-800 to-zinc-950`}
      >
        <div className="container mx-auto min-h-screen flex flex-col items-center justify-between">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
