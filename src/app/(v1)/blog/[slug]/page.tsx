import {ReadProgress} from '@/components/read-progress';
import {getAllSlugs, getLastPosts, getPostBySlug} from '@/utils/posts';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const markdown = await getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'timeToRead',
    'date',
    'author',
  ]);

  if (!markdown) {
    return {};
  }

  const formattedDate = new Date(markdown.date).toLocaleDateString('en-US', {
    dateStyle: 'long',
  });

  return {
    title: markdown.title,
    description: markdown.excerpt,
    creator: markdown.author.name,
    publisher: markdown.author.name,
    authors: [{name: markdown.author.name}],
    openGraph: {
      title: markdown.title,
      description: markdown.excerpt,
      url: `https://guisantos.dev/blog/${params.slug}`,
      siteName: 'Guilherme Santos - Software Engineer',
      type: 'article',
      locale: 'en_US',
      authors: [markdown.author.name],
      publishedTime: new Date(markdown.date).toISOString(),
      images: [
        {
          url: `https://guisantos.dev/api/og?title=${markdown.title}&date=${formattedDate}&width=1200&height=630`,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: {
      follow: true,
      index: true,
      nocache: false,
    },
    twitter: {
      card: 'summary_large_image',
      title: markdown.title,
      description: markdown.excerpt,
      creator: '@eoqguih',
      images: [
        {
          url: `https://guisantos.dev/api/og?title=${markdown.title}&date=${formattedDate}&width=1200&height=630`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const markdown = await getPostBySlug(params.slug, [
    'author',
    'content',
    'date',
    'slug',
    'title',
    'timeToRead',
  ]);

  if (!markdown) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10 flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg p-8">
      <ReadProgress />
      <header className="flex flex-col text-sm md:text-base w-full gap-1">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          {markdown.title}
        </h1>
        <div className="flex gap-2 text-foreground">
          <span>
            Published on&nbsp;
            {new Date(markdown.date).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}
          </span>
          <span>&bull;</span>
          <span>{markdown.timeToRead} min read</span>
        </div>
      </header>
      <article className="w-full !max-w-full flex flex-col gap-4">
        <markdown.content />
      </article>
    </main>
  );
}
