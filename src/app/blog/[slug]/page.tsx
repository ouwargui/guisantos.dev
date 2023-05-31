import {Markdown} from '@/components/markdown';
import React from 'react';
import fs from 'fs/promises';
import {join} from 'path';
import matter from 'gray-matter';

type Props = {
  params: {
    slug: string;
  };
};

const postsDirectory = join(process.cwd(), 'src', 'posts');

async function getPostBySlug<T>(slug: string, fields: string[]): Promise<T> {
  const file = await fs.readFile(join(postsDirectory, `${slug}.md`), 'utf8');
  const {data, content} = matter(file);

  const items: {[key: string]: unknown} = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as T;
}

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  timeToRead: number;
  author: {
    name: string;
  };
};

export default async function BlogPost({params}: Props) {
  const markdown = await getPostBySlug<Post>(params.slug, [
    'author',
    'content',
    'date',
    'slug',
    'title',
    'timeToRead',
  ]);

  return (
    <main className="flex flex-col gap-16 flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg py-8 px-4">
      <header className="flex flex-col text-sm md:text-base w-full gap-1">
        <h1 className="text-2xl md:text-3xl font-bold">{markdown.title}</h1>
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
