import {Header} from '@/components/header';

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-between">
      <Header />
      <main className="px-4 flex flex-1">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white self-center">
            🙋🏻‍♂️ Hello, world!
          </h1>
          <p className="text-white text-center">
            I&apos;m Guilherme Santos, a software engineer from Brazil.
          </p>
        </div>
      </main>
      <footer>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-white text-center">
            This website is a work in progress.
          </p>
        </div>
      </footer>
    </div>
  );
}
