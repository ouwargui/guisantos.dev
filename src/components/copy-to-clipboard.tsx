'use client';

import clsx from 'clsx';
import {useState} from 'react';

type Props = {
  content: string;
};

export function CopyToClipboard(props: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      className={clsx(
        'group hover:bg-white rounded-md p-1 flex gap-2 items-center justify-center transition-all',
        copied && 'bg-white cursor-default',
      )}
      onClick={() => {
        handleCopy(String(props.content));
      }}
      disabled={copied}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      {copied ? (
        <ClipboardCheckmarkIcon copied={copied} />
      ) : (
        <ClipboardIcon copied={copied} />
      )}
      <span
        className={clsx(
          'text-white group-hover:text-zinc-900 transition-all',
          copied && 'text-zinc-900',
        )}
      >
        {copied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  );
}

type ClipboardIconProps = {
  copied: boolean;
};

function ClipboardIcon(props: ClipboardIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={clsx(
        'w-4 h-4 fill-black stroke-white group-hover:fill-white group-hover:stroke-zinc-900 transition-all',
        props.copied && 'fill-white stroke-zinc-900',
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
      />
    </svg>
  );
}

function ClipboardCheckmarkIcon(props: ClipboardIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={clsx(
        'w-4 h-4 fill-black stroke-white group-hover:fill-white group-hover:stroke-zinc-900 transition-all',
        props.copied && 'fill-white stroke-zinc-900',
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
