import {getLastPosts, searchPostsByName} from '@/utils/posts';
import {Card} from '@/components/card';
import Link from 'next/link';
import {NewsletterForm} from '@/components/newsletter-form';
import {NewsletterWelcomeEmailTemplate} from '@/components/newsletter-welcome-email-template';
import type {Post} from '@/utils/posts';
import React from 'react';
import {Resend} from 'resend';
import {Search} from '@/components/search';
import {prisma} from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  async function subscribeToNewsletter(formData: FormData) {
    'use server';

    const email = formData.get('email');
    if (!email) return;

    await prisma.newsletter.create({
      data: {
        email: email.toString(),
      },
    });

    await resend.emails.send({
      from: 'Guilherme Santos <me@guisantos.dev>',
      to: email.toString(),
      subject: 'Welcome to my newsletter!',
      react: NewsletterWelcomeEmailTemplate(),
    });
  }

  return (
    <main className="flex flex-col gap-8 flex-1 w-full justify-start md:max-w-screen-md lg:max-w-screen-lg p-8 text-white">
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
            <NewsletterForm />
          </form>
        </section>
      </main>
    </main>
  );
}
