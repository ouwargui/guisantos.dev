'use client';

import type {ReactNode} from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from './copy-to-clipboard';
import {Hyperlink} from './hyperlink';

type Props = {
  markdown: string;
};

export function Markdown({markdown}: Props) {
  const getCodeContent = (children: ReactNode & ReactNode[]) => {
    try {
      // @ts-expect-error TODO: end my life
      return children[0].props.children[0];
    } catch (_e) {
      return '';
    }
  };

  return (
    <ReactMarkdown
      components={{
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
              <CopyToClipboard content={getCodeContent(children)} />
            </div>
            {children}
          </pre>
        ),
        code: ({node, inline, className, children, ...props}) => {
          const match = /language-(\w+)/.exec(className ?? '');
          return !inline && match ? (
            // @ts-expect-error React 19 WIP types
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
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
