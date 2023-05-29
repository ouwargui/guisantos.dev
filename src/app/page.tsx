import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative px-4 flex flex-1 flex-col">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-5xl font-semibold text-white self-center">
          🙋🏻‍♂️ Hello, world!
        </h1>
        <p className="text-white text-center text-md lg:text-base">
          I&apos;m Guilherme, a software engineer from Brazil.
        </p>
      </section>
      <div className="h-8" />
      <section className="flex w-full gap-8 md:gap-8 md:max-w-screen-md justify-between items-center flex-col-reverse md:flex-row px-6">
        <p className="text-justify">
          I&apos;m currently working at IBM as a Software Engineer. I have a
          bachelor&apos;s degree in Computer Science from the Universidade
          Anhembi Morumbi.
        </p>
        <div className="w-40 md:w-96 aspect-square relative rounded-full overflow-hidden">
          <Image
            src="https://github.com/ouwargui.png"
            fill
            alt="Picture of the author"
          />
        </div>
      </section>
    </main>
  );
}
