import {NotFoundDetails} from '@/components/not-found-details';
import React from 'react';

export default function NotFound() {
  return (
    <NotFoundDetails
      description="The post you are looking for does not exist."
      href="/blog"
      buttonText="Go back to posts"
    />
  );
}
