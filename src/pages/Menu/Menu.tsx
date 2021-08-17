import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Event from '../../components/Event';
import type { EventType } from '../../commonTypes/commonTypes';
import styles from './menu.module.css';
import { globalContext } from '../../store/globalStore';
import { getUser } from '../../httpClients/userClient';
import { getEvent } from '../../httpClients/eventClient';
import { SET_USER } from '../../commonTypes/Actions/comonActions';

const Menu = (): ReactElement => {
  const { user } = useAuth0();
  const userId = user?.sub && user.sub.split('|')[1];
  const [events, setEvents] = useState<EventType[]>([]);
  const { dispatch } = useContext(globalContext);
  useEffect(() => {
    const fetchUser = async () => {
      const userAwaited = await getUser(userId);
      dispatch({ type: SET_USER, payload: userAwaited });
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchEvent = async () => {
      const eventsFromServer = await getEvent(userId);
      setEvents(eventsFromServer);
    };
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h2>Dine kommende oppgaver:</h2>
      </header>
      {events.map((event, index) => {
        const key = index;
        return (
          <Event
            key={key}
            title={event.title}
            time={event.time}
            place={event.place}
            assignment={event.assignment}
          />
        );
      })}
    </>
  );
};

Menu.defaultProps = {
  user: {
    name: 'Jane Doe',
    picture: 'No picture url'
  }
};

export default Menu;
