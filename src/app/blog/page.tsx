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

  async function subscribeToNewsletter() {
    'use server';
  }

  return (
    <main className="flex flex-col gap-8 flex-1 w-full justify-start md:max-w-screen-md lg:max-w-screen-lg py-8 px-4 text-white">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Blog posts
        </h1>
        <Search />
      </header>
      <main className="flex flex-col gap-20 md:gap-40">
        <section className="flex flex-col gap-4">
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
        </section>
        <section className="flex w-full md:w-1/2 bg-zinc-800 flex-col gap-4 p-4 rounded-xl text-sm md:text-base">
          <h2 className="text-white font-semibold text-lg">
            Don&apos;t miss out!
          </h2>
          <p className="text-zinc-400 text-justify">
            Sign up for my newsletter and I&apos;ll send you an email every time
            I publish a new article.
          </p>
          <form
            className="flex justify-start items-center"
            action={subscribeToNewsletter}
          >
            <input
              className="bg-zinc-800 text-white p-2 rounded-s-xl border-y border-l border-white outline-none w-full"
              type="email"
              placeholder="Email address"
            />
            <button
              className="bg-white font-medium text-zinc-950 p-2 rounded-e-xl border-y border-r border-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </main>
  );
}
