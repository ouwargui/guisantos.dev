import fs from 'node:fs/promises';
import {join} from 'node:path';
import type {MDXContent} from 'mdx/types';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: MDXContent;
  timeToRead: number;
  author: {
    name: string;
  };
};

const POSTS_DIRECTORY = join(process.cwd(), 'src', 'posts');

function isPostDefined(post?: Post): post is Post {
  return post !== undefined;
}

function sortByDate(a: Post, b: Post): number {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateB.getTime() - dateA.getTime();
}

export async function getLastPosts(
  limit: number,
  fields: Array<keyof Post>,
): Promise<Post[]> {
  const files = await fs.readdir(POSTS_DIRECTORY);
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const post = getPostBySlug(slug, fields);
    if (post) {
      return post;
    }
  });

  const allPosts = await Promise.all(posts);
  const postsFiltered = allPosts.filter(isPostDefined).sort(sortByDate);
  return postsFiltered.slice(0, limit);
}

export async function getPostBySlug(
  slug: string,
  fields: Array<keyof Post>,
): Promise<Post | undefined> {
  try {
    const {default: Post, metadata} = await import(`@/posts/${slug}.mdx`);

    const items: {[key: string]: unknown} = {};

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = slug;
      }

      if (field === 'content') {
        items[field] = Post;
      }

      if (metadata[field]) {
        items[field] = metadata[field];
      }
    });

    return items as Post;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function searchPostsByName(
  name: string | string[],
  fields: Array<keyof Post>,
): Promise<Post[]> {
  const postName = Array.isArray(name) ? name[0] : name;
  const files = await fs.readdir(POSTS_DIRECTORY);
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const post = getPostBySlug(slug, fields);
    if (post) {
      return post;
    }
  });

  const allPosts = await Promise.all(posts);
  const postsFiltered = allPosts.filter(isPostDefined).sort(sortByDate);
  return postsFiltered.filter((post) =>
    post.title.toLowerCase().includes(postName.toLowerCase()),
  );
}
