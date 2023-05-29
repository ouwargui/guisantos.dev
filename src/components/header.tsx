import React from 'react';

export function Header() {
  return (
    <header className="w-full sticky z-50 top-0">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            guisantos.dev
          </span>
        </div>
        <div className="md:flex items-center gap-4 flex-shrink-0 text-white hidden">
          <a
            href="/"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            Home
          </a>
          <a
            href="/blog"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            Blog
          </a>
          <a
            href="/about"
            className="inline-block font-semibold text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white"
          >
            About
          </a>
        </div>
        <div className="md:hidden"></div>
      </nav>
    </header>
  );
}
