import {NotFoundDetails} from '@/components/not-found-details';

export default function NotFound() {
  return (
    <>
      <title>Post not found | Guilherme Santos - Software Engineer</title>
      <NotFoundDetails
        description="The post you are looking for does not exist."
        href="/blog"
        buttonText="Go back to posts"
      />
    </>
  );
}
