import Link from 'next/link';
import React from 'react';

type Props = {
  description: string;
  href: string;
  buttonText: string;
};

export function NotFoundDetails(props: Props) {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-zinc-200 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-zinc-400 mb-8">{props.description}</p>
      <Link
        href={props.href}
        className="hover:bg-white text-white hover:text-zinc-900 border border-white font-semibold py-2 px-4 rounded"
      >
        {props.buttonText}
      </Link>
    </div>
  );
}
