'use client';
import {useSearchParams} from 'next/navigation';
import {searchPostsByName} from '@/utils/posts.client';
import type {Post} from '@/utils/posts.server';
import {Card} from './card';
import {Hyperlink} from './hyperlink';

export function PostsList(props: {posts: Post[]}) {
  const search = useSearchParams();
  const posts = searchPostsByName(search.get('search') ?? '', props.posts);

  return posts.map((post) => (
    <Hyperlink type="NextLink" key={post.slug} href={`/blog/${post.slug}`}>
      <Card title={post.title} description={post.excerpt} date={post.date} />
    </Hyperlink>
  ));
}
