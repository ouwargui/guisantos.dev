'use client';

import React, {useState} from 'react';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Tooltip} from 'react-tooltip';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  markdown: string;
};

export function Markdown({markdown}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <ReactMarkdown
      components={{
        pre({children, ...props}) {
          return (
            <pre {...props} className="overflow-visible">
              {children}
            </pre>
          );
        },
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className ?? '');
          return !inline && match ? (
            <div className="relative">
              <div className="absolute right-0 top-0 group flex flex-col items-center">
                <button
                  className="mr-2 mt-2 text-white"
                  onClick={() => {
                    handleCopy(String(children));
                  }}
                  data-tooltip-id="copy-tooltip"
                  data-tooltip-content={
                    copied ? 'Copied!' : 'Copy to clipboard'
                  }
                  data-tooltip-place="top"
                  aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </button>
                <Tooltip
                  id="copy-tooltip"
                  style={{backgroundColor: 'white', color: 'rgb(24 24 27)'}}
                />
              </div>
              <SyntaxHighlighter {...props} style={dracula} language={match[1]}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
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
