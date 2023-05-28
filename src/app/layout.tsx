import './globals.css';
import {Red_Hat_Mono} from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}
