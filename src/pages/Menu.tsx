import React, { ReactElement } from 'react';
import Event from '../components/Event';
import styles from './home.module.css';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Menu = (): ReactElement => (
  <section>
    <header>
      <h2>Foreldrehjelpen - Meny</h2>
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
