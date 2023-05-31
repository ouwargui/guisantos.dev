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

export default function Blog() {
  return (
    <main className="flex flex-1 w-full justify-center md:max-w-screen-md lg:max-w-screen-lg py-8 px-4">
      <article className="prose prose-h1:text-center prose-strong:accent prose-a:accent prose-invert">
        <Markdown markdown={markdown} />
      </article>
    </main>
  );
}
