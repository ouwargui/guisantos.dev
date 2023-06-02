import {Markdown} from '@/components/markdown';
import React from 'react';
import {getPostBySlug} from '@/utils/posts';
import {notFound} from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

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
    <main className="flex flex-col gap-16 flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg py-8 px-4">
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
      <article className="w-full prose prose-sm prose-p:text-justify md:prose-base !max-w-full prose-h1:text-center prose-strong:accent prose-a:accent prose-invert">
        <Markdown markdown={markdown.content} />
      </article>
    </main>
  );
}
