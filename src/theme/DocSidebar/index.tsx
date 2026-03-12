import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarType>;

function TopicSwitcher(): React.ReactElement | null {
  const {pathname} = useLocation();
  const isDjdao = pathname.startsWith('/djdao');
  const isGamo2 = pathname.startsWith('/gamo2');

  if (!isDjdao && !isGamo2) {
    return null;
  }

  return (
    <div className={styles.topicSwitcher}>
      <Link
        to="/djdao"
        className={`${styles.topicTab} ${isDjdao ? styles.active : ''}`}
      >
        DJDAO
      </Link>
      <Link
        to="/gamo2"
        className={`${styles.topicTab} ${isGamo2 ? styles.active : ''}`}
      >
        GAMO2
      </Link>
    </div>
  );
}

export default function DocSidebarWrapper(props: Props): React.ReactElement {
  return (
    <>
      <TopicSwitcher />
      <DocSidebar {...props} />
    </>
  );
}
