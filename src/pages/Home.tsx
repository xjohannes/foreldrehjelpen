import React, { ReactElement } from 'react';
import SignIn from '../components/SignIn';
import styles from './home.module.css';

const Home = (): ReactElement => (
  <div className={`${styles.container} ${styles.wrapper}`}>
    <header>
      <h1>Foreldrehjelpen</h1>
    </header>
    <main>
      <h2>- En app for organisering av foreldrearbeid</h2>
      <p>
        Foreldrehejlpen organiserer de oppgavene du har påtatt deg for barnet
        ditt på skolen. Her får du listet opp når din neste vakt er, om det er
        julemarkedsvakt eller trafikkvakt, foreldremøte eller annet.
      </p>
    </main>
    <SignIn />
  </div>
);

export default Home;
