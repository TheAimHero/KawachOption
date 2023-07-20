import React from 'react';

import styles from './Navbar.module.css';

export default function Navbar(props) {
  const { active, setActive } = props;

  return (
    <nav className={styles.nav}>
      <p
        className={`${ active === 'txt' && styles.active } ${styles.navItem}`}
        onClick={() => {
          setActive('txt');
        }}
      >
        Text Options
      </p>
      <p
        className={`${ active === 'img' && styles.active } ${styles.navItem}`}
        onClick={() => {
          setActive('img');
        }}
      >
        Image Options
      </p>
      <p
        className={`${ active === 'site' && styles.active } ${styles.navItem}`}
        onClick={() => {
          setActive('site');
        }}
      >
        Site Options
      </p>
    </nav>
  );
}
