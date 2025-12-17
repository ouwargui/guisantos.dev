import Image from 'next/image';
import {Card} from '@/components/card';
import {Hyperlink} from '@/components/hyperlink';
import {GithubIcon} from '@/icons/github';
import {LinkedinIcon} from '@/icons/linkedin';
import {XIcon} from '@/icons/x';
import {getLastPosts} from '@/utils/posts';

const projects = [
  {
    name: 'BetterAuthSwift',
    description: 'A Swift client for Better Auth.',
    href: 'https://github.com/ouwargui/BetterAuthSwift',
  },
  {
    name: 'Schedy',
    description: 'A macOS menubar app for managing your schedule.',
    href: 'https://github.com/ouwargui/schedy',
  },
  {
    name: 'This website',
    description: 'Source code for this website.',
    href: 'https://github.com/ouwargui/guisantos.dev',
  },
];

export default async function Home() {
  const posts = await getLastPosts(3, ['excerpt', 'date', 'slug', 'title']);

  return (
    <main className="relative p-8 flex flex-1 flex-col gap-16 md:max-w-screen-md lg:max-w-screen-lg text-foreground">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold self-center text-primary">
          🙋🏻‍♂️ hello, world!
        </h1>
        <h2 className="text-center text-base lg:text-lg">
          I&apos;m <span className="accent">Guilherme</span>, a software
          engineer from Brazil.
        </h2>
      </section>
      <section className="flex w-full gap-8 md:gap-8 justify-between items-center flex-col-reverse md:flex-row">
        <div className="text-base lg:text-lg flex flex-col gap-8">
          <p>
            I&apos;m a Software Engineer at Rocket Laywer. I have a
            bachelor&apos;s degree in Computer Science from the Universidade
            Anhembi Morumbi. I love to play videogames, watch sports, and code.
          </p>
          <p>
            I&apos;m a big fan of the React ecosystem and I&apos;m always trying
            to learn new things. I&apos;m starting to get into the world of open
            source and doing some contributions. I&apos;ll be posting some of my
            projects here. Stay tuned! 🤓
          </p>
        </div>
        <div className="w-40 md:w-[80rem] aspect-square relative rounded-full overflow-hidden">
          <Image
            src="https://github.com/ouwargui.png"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 260px, 330px"
            alt="Picture of the author"
            priority
          />
        </div>
      </section>
      <section className="flex gap-4 font-bold justify-center items-center">
        <Hyperlink
          type="anchor"
          href="https://github.com/ouwargui"
          icon={
            <GithubIcon className="w-6 h-6 text-foreground group-hover:opacity-80 transition-all duration-150" />
          }
        >
          Github
        </Hyperlink>
        <Hyperlink
          type="anchor"
          href="https://twitter.com/eoqguih"
          icon={
            <XIcon className="w-6 h-6 fill-foreground group-hover:opacity-80 transition-all duration-150" />
          }
        >
          Twitter
        </Hyperlink>
        <Hyperlink
          type="anchor"
          href="https://linkedin.com/in/guiksantos"
          icon={
            <LinkedinIcon className="w-6 h-6 text-foreground group-hover:opacity-80 transition-all duration-150" />
          }
        >
          LinkedIn
        </Hyperlink>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2 auto-rows-fr items-stretch">
          {projects.map((project, index) => (
            <Hyperlink
              type="anchor"
              className={''}
              href={project.href}
              key={index.toString()}
            >
              <Card title={project.name} description={project.description} />
            </Hyperlink>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Latest Posts</h2>
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Hyperlink
              type="NextLink"
              href={`/blog/${post.slug}`}
              key={index.toString()}
            >
              <Card
                title={post.title}
                description={post.excerpt}
                date={post.date}
              />
            </Hyperlink>
          ))}
        </div>
      </section>
    </main>
  );
}
