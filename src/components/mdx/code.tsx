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

  const out = toJsxRuntime(html, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => {
        return (
          <pre
            {...props}
            className="p-2 with-line-numbers max-h-96 overflow-scroll"
          />
        );
      },
      code: (props) => <code {...props} />,
    },
  });

  return (
    <div className="rounded overflow-hidden">
      <div className="bg-muted flex justify-between py-2 px-4">
        <span className="text-primary">{props.fileName ?? props.language}</span>
        <CopyToClipboard content={props.children} />
      </div>
      {out}
    </div>
  );
}
