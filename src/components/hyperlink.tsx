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

type Props = {
  icon?: ReactNode;
} & (AProps | NextLinkProps);

export function Hyperlink(props: Props) {
  if (props.icon) {
    if (props.type === 'anchor') {
      return (
        <a
          className="accent flex gap-2 items-center justify-center group"
          target="_blank"
          {...props}
        >
          {props.icon}
          <span className="anchor group-hover:anchor-hover">
            {props.children}
          </span>
        </a>
      );
    }

    return (
      <Link
        className="accent flex gap-2 items-center justify-center"
        {...props}
      >
        {props.icon}
        <span className="anchor group-hover:anchor-hover">
          {props.children}
        </span>
      </Link>
    );
  }

  if (props.type === 'anchor') {
    return (
      <a
        target="_blank"
        className="anchor hover:anchor-hover accent"
        {...props}
      >
        {props.children}
      </a>
    );
  }

  return <Link {...props}>{props.children}</Link>;
}
