import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-zinc-200 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-zinc-400 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="hover:bg-white text-white hover:text-zinc-900 border border-white font-semibold py-2 px-4 rounded"
      >
        Go back to home
      </Link>
    </div>
  );
}
