import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

interface ReferenceLinkProps {
  readonly children: ReactNode;
  readonly href: string;
}

export const ReferenceLink = ({ children, href }: ReferenceLinkProps): ReactNode => (
  <Link
    className="reference-link"
    to={href.includes(':') ? href : `/${href}`}
  >
    {children}
    <span>{href.split('#')[0]}</span>
  </Link>
);
