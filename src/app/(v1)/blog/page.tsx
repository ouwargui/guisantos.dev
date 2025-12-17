import {Suspense} from 'react';
import {Resend} from 'resend';
import {NewsletterForm} from '@/components/newsletter-form';
import {NewsletterWelcomeEmailTemplate} from '@/components/newsletter-welcome-email-template';
import {PostsList} from '@/components/posts-list';
import {Search} from '@/components/search';
import {db} from '@/lib/db';
import {newsletter} from '@/lib/schema';
import type {Post} from '@/utils/posts.server';
import {getLastPosts} from '@/utils/posts.server';

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_POST_FIELDS: (keyof Post)[] = [
  'excerpt',
  'date',
  'slug',
  'title',
];

export default async function Blog() {
  const posts = await getLastPosts(100, DEFAULT_POST_FIELDS);

  async function subscribeToNewsletter(formData: FormData) {
    'use server';

    const email = formData.get('email');
    if (!email) return;

    const formattedEmail = email.toString().trim().toLowerCase();

    await db.insert(newsletter).values({
      email: formattedEmail,
    });

    await resend.emails.send({
      from: 'Guilherme Santos <me@guisantos.dev>',
      to: formattedEmail,
      subject: 'Welcome to my newsletter!',
      react: NewsletterWelcomeEmailTemplate(),
    });
  }

  return (
    <main className="flex flex-col gap-8 flex-1 w-full justify-start md:max-w-screen-md lg:max-w-screen-lg p-8 text-foreground">
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
