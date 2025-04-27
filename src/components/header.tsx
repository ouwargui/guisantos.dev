'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {usePathname} from 'next/navigation';
import {Fragment} from 'react';
import {Hyperlink} from './hyperlink';

const links = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/about',
  //   label: 'about',
  // },
];

export function Header() {
  const pathname = usePathname();

  const getActiveLinkClass = (href: string) => {
    if (href === '/') {
      return pathname === href ? 'text-primary' : '';
    }

    return pathname.startsWith(href) ? 'text-primary' : '';
  };

  return (
    <header className="w-full sticky z-10 top-0 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center flex-shrink-0 text-primary mr-6">
          <Hyperlink type="NextLink" href="/">
            <span className="font-semibold text-xl tracking-tight">
              guisantos.dev
            </span>
          </Hyperlink>
        </div>
        <div className="md:flex items-center gap-4 flex-shrink-0 text-foreground hidden">
          {links.map((link) => (
            <Hyperlink
              type="NextLink"
              key={link.href}
              href={link.href}
              className={`${getActiveLinkClass(
                link.href,
              )} inline-block font-semibold text-base px-4 py-2 leading-none text-foreground hover:text-secondary transition-colors`}
            >
              {link.label}
            </Hyperlink>
          ))}
        </div>
        <Menu as="div" className="relative inline-block text-left md:hidden">
          <div>
            <MenuButton className="inline-flex w-full justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-secondary hover:bg-opacity-80">
              Menu
            </MenuButton>
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
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-primary rounded-md bg-muted shadow-lg ring-opacity-5 focus:outline-none">
              <div className="p-1">
                {links.map((link) => (
                  <MenuItem key={link.href}>
                    {({close}) => (
                      <Hyperlink
                        onClick={close}
                        type="NextLink"
                        href={link.href}
                        className={`${getActiveLinkClass(
                          link.href,
                        )} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-secondary hover:text-foreground`}
                      >
                        {link.label}
                      </Hyperlink>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
