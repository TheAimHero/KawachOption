import React from 'react';

import styles from './Tabs.module.css';

export default function Tabs(props) {
  const { children } = props;

  return <div className={styles.tabContainer}>{children}</div>;
}
