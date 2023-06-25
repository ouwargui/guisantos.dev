import {NotFoundDetails} from '@/components/not-found-details';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <title>Page not found | Guilherme Santos - Software Engineer</title>
      <NotFoundDetails
        description="The page you are looking for does not exist."
        href="/"
        buttonText="Go back to home"
      />
    </>
  );
}
