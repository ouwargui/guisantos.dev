import {Header} from '@/components/header';
import './globals.css';
import {Red_Hat_Mono} from 'next/font/google';
import {Footer} from '@/components/footer';

const redHatMono = Red_Hat_Mono({subsets: ['latin']});

export const metadata = {
  title: 'Guilherme Santos - Software Engineer',
  description: "Guilherme's portfolio and blog",
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
      </body>
    </html>
  );
}
