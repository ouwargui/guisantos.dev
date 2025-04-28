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
      type="button"
      className="grid size-8 place-items-center cursor-pointer bg-muted hover:bg-secondary/15 rounded transition-colors"
      onClick={() => {
        handleCopy(String(props.content));
      }}
      disabled={copied}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      <ClipboardCheckmarkIcon
        className={clsx(
          'absolute size-5 transform transition-all',
          copied
            ? 'opacity-100 scale-100 animate-[show_1.25s_.15s_forwards]'
            : 'opacity-0 scale-50 animate-[hide_1.25s_forwards]',
        )}
      />
      <ClipboardIcon
        className={clsx(
          'absolute size-5 transform transition-all',
          copied
            ? 'opacity-0 scale-50 animate-[hide_1.25s_forwards]'
            : 'opacity-100 scale-100 animate-[show_1.25s_.15s_forwards]',
        )}
      />
    </button>
  );
}

function ClipboardIcon(props: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
      aria-label="Clipboard icon"
    >
      <title>Copy to the clipboard</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
      />
    </svg>
  );
}

function ClipboardCheckmarkIcon(props: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
      aria-label="Checkmark icon"
    >
      <title>Code copied</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
