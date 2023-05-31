import fs from 'fs/promises';
import {join} from 'path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  timeToRead: number;
  author: {
    name: string;
  };
};

const postsDirectory = join(process.cwd(), 'src', 'posts');

export async function getLastPosts(
  limit: number,
  fields: Array<keyof Post>,
): Promise<Post[]> {
  const files = await fs.readdir(postsDirectory);
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    return getPostBySlug(slug, fields);
  });

  const allPosts = await Promise.all(posts);
  return allPosts.slice(0, limit);
}

export async function getPostBySlug(
  slug: string,
  fields: Array<keyof Post>,
): Promise<Post> {
  const file = await fs.readFile(join(postsDirectory, `${slug}.md`), 'utf8');
  const {data, content} = matter(file);

  const items: {[key: string]: unknown} = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as Post;
}
