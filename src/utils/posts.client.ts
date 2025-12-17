import type {Post} from './posts.server';

export function searchPostsByName(name: string, post: Post[]) {
  return post.filter((post) =>
    post.title.toLowerCase().includes(name.toLowerCase()),
  );
}
