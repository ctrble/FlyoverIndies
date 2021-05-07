import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import navData from 'data/nav';

import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      {navData.pages.map((item) => (
        <li key={uuidv4()}>
          <Link href={item.path}>
            <a className={styles.nav__link}>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
