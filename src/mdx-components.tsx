import {CopyToClipboard} from '@/components/copy-to-clipboard';
import {Hyperlink} from '@/components/hyperlink';
import type {MDXComponents} from 'mdx/types';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({children, ...props}) => (
      <Hyperlink {...props} type="anchor">
        {children}
      </Hyperlink>
    ),
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
    code: ({node, inline, className, children, ...props}) => {
      const match = /language-(\w+)/.exec(className ?? '');
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={dracula}
          language={match[1]}
          showLineNumbers
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
    ...components,
  };
}
