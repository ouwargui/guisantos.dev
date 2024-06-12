import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {Red_Hat_Mono} from 'next/font/google';

const redHatMono = Red_Hat_Mono({subsets: ['latin']});

export default function V1Layout({children}: {children: React.ReactNode}) {
  return (
    <div
      className={`${redHatMono.className} bg-gradient-to-b from-zinc-800 to-zinc-950 overflow-x-hidden mx-auto min-h-screen min-w-[100vw] flex flex-col items-center justify-between`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
