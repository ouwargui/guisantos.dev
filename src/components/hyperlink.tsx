import Link, {type LinkProps} from 'next/link';
import type {AnchorHTMLAttributes, ReactNode} from 'react';

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: 'anchor';
}

type NextLink = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
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
          {...props}
          className={
            props.className ??
            'accent flex gap-2 items-center justify-center group'
          }
          href={props.href}
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
        {...props}
        className={
          props.className ?? 'accent flex gap-2 items-center justify-center'
        }
        href={props.href}
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
        {...props}
        className={props.className ?? 'anchor hover:anchor-hover accent'}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link {...props} className={props.className} href={props.href}>
      {props.children}
    </Link>
  );
}
