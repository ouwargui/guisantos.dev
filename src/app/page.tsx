import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-4 flex flex-1 flex-col">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-5xl font-semibold text-white self-center">
          🙋🏻‍♂️ Hello, world!
        </h1>
        <p className="text-white text-center text-md lg:text-base">
          I&apos;m Guilherme, a software engineer from Brazil.
        </p>
      </section>
      <section className="flex justify-between items-center flex-col-reverse md:flex-row">
        <p>
          I&apos;m currently working at IBM as a Software Engineer. I have a
          bachelor&apos;s degree in Computer Science from the Universidade
          Anhembi Morumbi.
        </p>
        <Image
          src="https://github.com/ouwargui.png"
          width={225}
          height={300}
          alt="Picture of the author"
          className="rounded-full"
        />
      </section>
    </main>
  );
}
