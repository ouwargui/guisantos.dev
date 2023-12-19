import Link, {type LinkProps} from 'next/link';
import React, {AnchorHTMLAttributes, ReactNode} from 'react';

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: 'anchor';
}

type NextLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps;

interface NextLinkProps extends NextLink {
  type: 'NextLink';
  children: ReactNode;
}

type Props = AProps | NextLinkProps;

export function Hyperlink(props: Props) {
  if (props.type === 'anchor') {
    return (
      <a className="accent underline" target="_blank" {...props}>
        {props.children}
      </a>
    );
  } else {
    return <Link {...props}>{props.children}</Link>;
  }
}
