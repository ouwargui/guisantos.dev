import clsx from 'clsx';
import {toJsxRuntime} from 'hast-util-to-jsx-runtime';
import {Fragment} from 'react';
import {jsx, jsxs} from 'react/jsx-runtime';
import {codeToHast} from 'shiki';
import {CopyToClipboard} from '../copy-to-clipboard';

type PropsWithTextChildren = {
  children: string;
};

interface BlockProps extends PropsWithTextChildren {
  inline: false;
  language: string;
  fileName?: string;
  showLineNumbers?: boolean;
  showShellSign?: boolean;
}

interface InlineProps extends PropsWithTextChildren {
  inline: true;
}

type Props = BlockProps | InlineProps;

export function Code(props: Props) {
  return props.inline ? <InlineCode {...props} /> : <BlockCode {...props} />;
}

function InlineCode(props: InlineProps) {
  return (
    <code className="font-semibold text-foreground bg-muted p-1 rounded-sm">
      {props.children}
    </code>
  );
}

async function BlockCode(props: BlockProps) {
  const html = await codeToHast(props.children, {
    lang: props.language,
    theme: 'tokyo-night',
  });

  const showLineNumbers = props.showLineNumbers ?? true;
  const showShellSign = props.showShellSign ?? false;

  const out = toJsxRuntime(html, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => {
        return (
          <pre
            {...props}
            className={clsx('p-2 max-h-96 overflow-scroll', {
              'with-line-numbers': !showShellSign && showLineNumbers,
              'with-shell': showShellSign,
            })}
          />
        );
      },
      code: (props) => <code {...props} className="text-sm" />,
    },
  });

  return (
    <div className="rounded overflow-hidden">
      <div className="bg-muted flex justify-between items-center py-2 px-4 text-secondary text-sm">
        <span>{props.fileName ?? props.language}</span>
        <CopyToClipboard content={props.children} />
      </div>
      {out}
    </div>
  );
}
