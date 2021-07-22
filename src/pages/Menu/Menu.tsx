import React, { ReactElement } from 'react';
import Event from '../../components/Event';
import styles from './menu.module.css';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Menu = (): ReactElement => {
  return (
    <>
      <header className={styles.header}>
        <h2>Dine kommende oppgaver:</h2>
      </header>
      <Event
        title={julemarked}
        time=" Lørdag, 21.02.2021, kl 12.30"
        place=" Cafeen"
        assignment=" Selge godteri"
      />
      <Event
        title={syttendeMai}
        time=" Mandag 17.05.2022, kl 15.00"
        place=" Storskolen"
        assignment=" Lotteri"
      />
    </>
  );
};

export default Menu;
