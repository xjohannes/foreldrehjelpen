import React, { ReactElement, useState, useEffect, useContext } from 'react';
import Event from '../../components/Event';
import styles from './menu.module.css';
import { globalContext } from '../../store/globalStore';
import { getUser } from '../../httpClients/userClient';
import { getEvent } from '../../httpClients/eventClient';
import { User } from '../../commonTypes/commonTypes';
import { SET_USER } from '../../commonTypes/Actions/comonActions';

const julemarked = 'Julemarked';
const syttendeMai = 'SyttendeMai';
const Menu = (user: User): ReactElement => {
  const [events, setEvents] = useState([]);
  const { dispatch } = useContext(globalContext);
  useEffect(() => {
    const fetchUser = async () => {
      const userAwaited = await getUser(user.name);
      dispatch({ type: SET_USER, payload: userAwaited });
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchEvent = async () => {
      setEvents(await getEvent(234));
    };
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

Menu.defaultProps = {
  user: {
    name: 'Jane Doe',
    imgUrl: 'No imgUrl'
  }
};

export default Menu;
