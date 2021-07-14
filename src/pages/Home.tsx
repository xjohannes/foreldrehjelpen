import React, { ReactElement } from 'react';
import Profile from '../components/Profile';
import Event from '../components/buttons/Event';
import styles from './home.module.css';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Home = (): ReactElement => (
  <section>
    <header>
      <h1>Foreldrehjelpen - Home</h1>
      <div className={styles.user}>
        <Profile />
      </div>
    </header>
  </section>
);

export default Home;
