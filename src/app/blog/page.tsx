import {getLastPosts, searchPostsByName} from '@/utils/posts';
import {Card} from '@/components/card';
import Link from 'next/link';
import type {Post} from '@/utils/posts';
import React from 'react';
import {Search} from '@/components/search';

type Props = {
  searchParams: {[key: string]: string | string[] | undefined};
};

const DEFAULT_POST_FIELDS: (keyof Post)[] = [
  'excerpt',
  'date',
  'slug',
  'title',
];

export default async function Blog({searchParams}: Props) {
  const {search} = searchParams;

  const posts = search
    ? await searchPostsByName(search, DEFAULT_POST_FIELDS)
    : await getLastPosts(3, DEFAULT_POST_FIELDS);

  return (
    <main className="flex flex-col gap-8 flex-1 w-full justify-start md:max-w-screen-md lg:max-w-screen-lg py-8 px-4 text-white">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Blog posts
        </h1>
        <Search />
      </header>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            className="flex flex-col"
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <Card
              title={post.title}
              description={post.excerpt}
              date={post.date}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
