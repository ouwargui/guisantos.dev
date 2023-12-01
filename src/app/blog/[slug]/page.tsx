import {Markdown} from '@/components/markdown';
import {Metadata} from 'next';
import React from 'react';
import {getPostBySlug} from '@/utils/posts';
import {notFound} from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
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

export default async function BlogPost({params}: Props) {
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
    <main className="flex flex-col gap-16 flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg p-8">
      <header className="flex flex-col text-sm md:text-base w-full gap-1">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {markdown.title}
        </h1>
        <div className="flex gap-2 text-zinc-400">
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
      <article className="w-full prose prose-sm prose-p:text-justify md:prose-base !max-w-full prose-h1:text-center prose-strong:accent prose-a:accent prose-code:text-xs prose-code:md:text-sm prose-invert">
        <Markdown markdown={markdown.content} />
      </article>
    </main>
  );
}
