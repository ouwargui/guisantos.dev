'use client';

import React, {ReactNode, useState} from 'react';
import {ClipboardTooltip} from './clipboard-tooltip';
import {Hyperlink} from './hyperlink';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  markdown: string;
};

export function Markdown({markdown}: Props) {
  const getCodeContent = (children: ReactNode & ReactNode[]) => {
    try {
      // @ts-expect-error TODO: end my life
      return children[0]['props']['children'][0];
    } catch (e) {
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
              <ClipboardTooltip content={getCodeContent(children)} />
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
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
