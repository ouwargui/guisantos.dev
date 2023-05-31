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

async function getPostBySlug(slug: string, fields?: string[]) {
  const file = await fs.readFile(join(postsDirectory, `${slug}.md`), 'utf8');
  const {data, content} = matter(file);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  if (!fields) {
    return {
      ...data,
      content,
    };
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export default async function BlogPost({params}: Props) {
  const markdown = await getPostBySlug(params.slug);

  return (
    <main className="flex flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg py-8 px-4">
      <article className="w-full prose prose-sm prose-p:text-justify md:prose-base !max-w-full prose-h1:text-center prose-strong:accent prose-a:accent prose-invert">
        <Markdown markdown={markdown['content']} />
      </article>
    </main>
  );
}
