import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header className="w-screen sticky z-10 top-0 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            guisantos.dev
          </span>
        </div>
        <div className="md:flex items-center gap-4 flex-shrink-0 text-white hidden">
          <Link
            href="/"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            About
          </Link>
        </div>
        <div className="md:hidden"></div>
      </nav>
    </header>
  );
}
