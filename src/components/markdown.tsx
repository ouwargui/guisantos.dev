'use client';

import React from 'react';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  markdown: string;
};

export function Markdown({markdown}: Props) {
  return (
    <ReactMarkdown
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className ?? '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dracula}
              language={match[1]}
              PreTag="div"
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
