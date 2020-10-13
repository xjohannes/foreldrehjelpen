import React, { ReactElement } from 'react';
import User from '../components/user/User';
import Event from '../components/buttons/Event';
import styles from './home.module.css';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Home = (): ReactElement => (
  <section>
    <header>
      <h1>Foreldrehjelpen</h1>
      <div className={styles.user}>
        <User />
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

export default Home;
