import React, { ReactElement } from 'react';
import Profile from '../components/Profile';
import Event from '../components/buttons/Event';
import styles from './home.module.css';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Menu = (): ReactElement => (
  <section>
    <header>
      <h1>Foreldrehjelpen - Meny</h1>
      <div className={styles.user}>
        <Profile />
      </div>
    </header>
    <nav>
      <div className={styles.eventItem}>
        <Event title={julemarked} />
      </div>
      <div className={styles.eventItem}>
        <Event title={syttendeMai} />
      </div>
    </nav>
  </section>
);

export default Menu;
