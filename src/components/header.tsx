import React from 'react';

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            guisantos.dev
          </span>
        </div>
        <div className="flex items-center flex-shrink-0 text-white">
          <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Home
          </span>
        </div>
        <div className="lg:hidden"></div>
      </nav>
    </header>
  );
}
