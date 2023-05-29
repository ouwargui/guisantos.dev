import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative px-4 flex flex-1 flex-col">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-white self-center">
          🙋🏻‍♂️ Hello, world!
        </h1>
        <h2 className="text-white text-center text-sm md:text-base lg:text-lg">
          I&apos;m <strong>Guilherme</strong>, a software engineer from Brazil.
        </h2>
      </section>
      <div className="h-8" />
      <section className="flex w-full gap-8 md:gap-8 md:max-w-screen-md lg:max-w-screen-lg justify-between items-center flex-col-reverse md:flex-row px-6">
        <div className="text-justify text-sm md:text-base lg:text-lg flex flex-col gap-8">
          <p>
            I&apos;m a Software Engineer at IBM. I have a bachelor&apos;s degree
            in Computer Science from the Universidade Anhembi Morumbi. I love to
            play videogames, watch sports and code.
          </p>
          <p>
            I&apos;m a big fan of the React ecosystem and I&apos;m always trying
            to learn new things. I&apos;m starting to get into the world of open
            source and doing some contributions. I&apos;ll be posting some of my
            projects here. Stay tuned! 🤓
          </p>
          <div className="flex gap-4 font-semibold justify-center items-center">
            <span className="hover:underline">
              <Link target="_blank" href="https://github.com/ouwargui">
                🐙 Github
              </Link>
            </span>
            <span className="hover:underline">
              <Link target="_blank" href="https://twitter.com/eoqguih">
                🐦 Twitter
              </Link>
            </span>
            <span className="hover:underline">
              <Link target="_blank" href="https://linkedin.com/in/guiksantos">
                💼 LinkedIn
              </Link>
            </span>
          </div>
        </div>
        <div className="w-40 md:w-[80rem] aspect-square relative rounded-full overflow-hidden">
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
