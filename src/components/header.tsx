'use client';

import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {usePathname} from 'next/navigation';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
];

export function Header() {
  const pathname = usePathname();

  const getActiveLinkClass = (href: string) => {
    if (href === '/') {
      return pathname === href ? 'bg-white text-zinc-900' : '';
    }

    return pathname.startsWith(href) ? 'bg-white text-zinc-900' : '';
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="w-full sticky z-10 top-0 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight">
              guisantos.dev
            </span>
          </Link>
        </div>
        <div className="md:flex items-center gap-4 flex-shrink-0 hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-block relative font-semibold text-base px-4 py-2 leading-none rounded text-white hover:text-white/50 transition-colors"
            >
              {isActiveLink(link.href) && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white rounded"
                />
              )}
              <span className="relative z-10 mix-blend-exclusion">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        <Menu as="div" className="relative inline-block text-left md:hidden">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-opacity-80">
              Menu
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-800 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                {links.map((link) => (
                  <Menu.Item key={link.href}>
                    {({active}) => (
                      <Link
                        href={link.href}
                        className={`${
                          active ? 'bg-zinc-900 text-white' : 'text-zinc-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-zinc-900 hover:text-white`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
