import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

interface ReferenceLinkProps {
  readonly children: ReactNode;
  readonly href: string;
}

export const ReferenceLink = ({ children, href }: ReferenceLinkProps): ReactNode => {
  const activePlugin = useActivePlugin();
  const basePath = activePlugin?.pluginData?.path ?? '/';

  const resolvedHref = href.includes(':')
    ? href
    : `${basePath === '/' ? '' : basePath}/${href}`;

  return (
    <Link
      className="reference-link"
      to={resolvedHref}
    >
      {children}
      <span>{href.split('#')[0]}</span>
    </Link>
  );
};
