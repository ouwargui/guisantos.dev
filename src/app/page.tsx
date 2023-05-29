import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: 'Personal Website',
    description:
      'Source code for this website! Made with NextJS app router and TailwindCSS',
    href: 'https://github.com/ouwargui/guisantos.dev',
  },
  {
    name: 'Sigma Audibooks',
    description:
      'A Expo + React Native + trpc monorepo with a server and a for audiobooks',
    href: 'https://github.com/ouwargui/sigma-audiobooks-monorepo',
  },
];

export default function Home() {
  return (
    <main className="relative px-4 flex flex-1 flex-col gap-16 py-8 md:max-w-screen-md lg:max-w-screen-lg">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-white self-center">
          🙋🏻‍♂️ Hello, world!
        </h1>
        <h2 className="text-white text-center text-sm md:text-base lg:text-lg">
          I&apos;m <span className="accent">Guilherme</span>, a software
          engineer from Brazil.
        </h2>
      </section>
      <section className="flex w-full gap-8 md:gap-8 justify-between items-center flex-col-reverse md:flex-row">
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
          <div className="flex gap-4 font-bold justify-center items-center accent">
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
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link href={project.href} key={index.toString()}>
              <div className="flex w-full h-full border border-white flex-col gap-2 p-4 rounded-xl text-sm hover:scale-95 focus:scale-95 transition-transform">
                <h2 className="font-semibold text-lg">{project.name}</h2>
                <span className="text-zinc-500 text-justify">
                  {project.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
