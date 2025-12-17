import type {MDXComponents} from 'mdx/types';
import Link from 'next/link';
import {CopyToClipboard} from '@/components/copy-to-clipboard';
import {Hyperlink} from '@/components/hyperlink';
import {Code} from '@/components/mdx/code';
import {stringToKebabCase} from './utils/string';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({children}) => {
      const kebabCaseText = stringToKebabCase(children);
      return (
        <h2
          id={kebabCaseText}
          className="text-xl md:text-2xl font-bold text-foreground mt-6"
        >
          <Link href={`#${kebabCaseText}`}>{children}</Link>
        </h2>
      );
    },
    a: ({children, ...props}) => (
      <Hyperlink {...props} type="anchor">
        {children}
      </Hyperlink>
    ),
    p: ({children}) => (
      <p className="text-base text-foreground leading-8">{children}</p>
    ),
    strong: ({children}) => <strong className="font-black">{children}</strong>,
    pre: ({children}) => (
      <pre className="overflow-visible">
        <div className="flex justify-between mb-2">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <CopyToClipboard
            content={children?.[0]?.props?.children?.[0] ?? ''}
          />
        </div>
        {children}
      </pre>
    ),
    code: Code,
    ...components,
  };
}
