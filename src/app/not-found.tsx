import {NotFoundDetails} from '@/components/not-found-details';
import React from 'react';

export default function NotFound() {
  return (
    <NotFoundDetails
      description="The page you are looking for does not exist."
      href="/"
      buttonText="Go back to home"
    />
  );
}
