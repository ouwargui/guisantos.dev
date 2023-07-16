import React, {AnchorHTMLAttributes} from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Hyperlink(props: Props) {
  return (
    <a
      className="accent hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
}
