import {Suspense} from 'react';
import {NewsletterForm} from '@/components/newsletter-form';
import {PostsList} from '@/components/posts-list';
import {Search} from '@/components/search';
import type {Post} from '@/utils/posts.server';
import {getLastPosts} from '@/utils/posts.server';

const DEFAULT_POST_FIELDS: (keyof Post)[] = [
  'excerpt',
  'date',
  'slug',
  'title',
];

export default async function Blog() {
  const posts = await getLastPosts(100, DEFAULT_POST_FIELDS);

  return (
    <main className="flex flex-col gap-8 flex-1 w-full justify-start md:max-w-3xl lg:max-w-5xl p-8 text-foreground">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Blog posts
        </h1>
        <Suspense>
          <Search />
        </Suspense>
      </header>
      <main className="flex flex-col gap-20 md:gap-40">
        <section className="flex flex-col gap-4">
          <Suspense>
            <PostsList posts={posts} />
          </Suspense>
        </section>
        <section className="flex w-full md:w-1/2 bg-muted flex-col gap-4 p-4 rounded-xl text-sm md:text-base">
          <h2 className="text-secondary font-semibold text-lg">
            Don&apos;t miss out!
          </h2>
          <p className="text-foreground">
            Sign up for my newsletter and I&apos;ll send you an email every time
            I publish a new article.
          </p>
          <NewsletterForm />
        </section>
      </main>
    </main>
  );
}
