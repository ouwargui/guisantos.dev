import {Post, getLastPosts} from '@/utils/posts';
import {Markdown} from '@/components/markdown';
import React from 'react';

const markdown = `
  # My first post  
  ## Hello, world!
  This is my first post. I would like to say hello to the world and welcome you to my blog.
  ~~~ts
  const a: number = 1;
  ~~~
  Thank **you** for reading.
  > This is a quote.
  - This is a list.  
  [This is a link](https://www.google.com)  
`;

export default async function Blog() {
  const posts = await getLastPosts(3, ['excerpt', 'date', 'slug', 'title']);

  return (
    <main className="flex flex-1 w-full justify-center md:max-w-screen-md lg:max-w-screen-lg py-8 px-4">
      {posts.map((post) => (
        <div key={post.slug}>
          <span>{post.title}</span>
          <span>{post.excerpt}</span>
          <span>{post.date}</span>
        </div>
      ))}
    </main>
  );
}
