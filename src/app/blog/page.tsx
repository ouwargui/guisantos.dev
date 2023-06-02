import {Card} from '@/components/card';
import Link from 'next/link';
import React from 'react';
import {getLastPosts} from '@/utils/posts';

export default async function Blog() {
  const posts = await getLastPosts(3, ['excerpt', 'date', 'slug', 'title']);

  return (
    <main className="flex flex-1 w-full justify-center md:max-w-screen-md lg:max-w-screen-lg py-8 px-4 text-white">
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
