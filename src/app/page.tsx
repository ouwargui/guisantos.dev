import {Card} from '@/components/card';
import {Hyperlink} from '@/components/hyperlink';
import Image from 'next/image';
import Link from 'next/link';
import {getLastPosts} from '@/utils/posts';

const projects = [
  {
    name: 'Personal Website',
    description:
      'Source code for this website! Made with NextJS app router and TailwindCSS',
    href: 'https://github.com/ouwargui/guisantos.dev',
  },
  {
    name: 'Sigma Audiobooks',
    description:
      'An Expo + React Native + trpc monorepo with a server and an app for audiobooks',
    href: 'https://github.com/ouwargui/sigma-audiobooks-monorepo',
  },
];

export default async function Home() {
  const posts = await getLastPosts(3, ['excerpt', 'date', 'slug', 'title']);

  return (
    <main className="relative px-4 flex flex-1 flex-col gap-16 py-8 md:max-w-screen-md lg:max-w-screen-lg text-white">
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
            play videogames, watch sports, and code.
          </p>
          <p>
            I&apos;m a big fan of the React ecosystem and I&apos;m always trying
            to learn new things. I&apos;m starting to get into the world of open
            source and doing some contributions. I&apos;ll be posting some of my
            projects here. Stay tuned! 🤓
          </p>
          <div className="flex gap-4 font-bold justify-center items-center">
            <Hyperlink href="https://github.com/ouwargui">🐙 Github</Hyperlink>
            <Hyperlink href="https://twitter.com/eoqguih">🐦 Twitter</Hyperlink>
            <Hyperlink href="https://linkedin.com/in/guiksantos">
              💼 LinkedIn
            </Hyperlink>
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
        <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.href}
              key={index.toString()}
            >
              <Card title={project.name} description={project.description} />
            </a>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Latest Posts</h2>
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index.toString()}>
              <Card
                title={post.title}
                description={post.excerpt}
                date={post.date}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
