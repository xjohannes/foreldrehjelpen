import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Event } from '../../components/Event';
import type { EventType } from '../../commonTypes/commonTypes';
import styles from './menu.module.css';
import { globalContext } from '../../store/globalStore';
import { getUser } from '../../httpClients/userClient';
import { getEvent } from '../../httpClients/eventClient';
import { SET_USER } from '../../commonTypes/Actions/comonActions';

const translateLocale = (locale: string) => {
  switch (locale) {
    case 'no':
      return 'nb';
    case 'nb_NO':
      return 'nb';
    case 'nn':
      return 'nn';
    case 'nn_NO':
      return 'nn';
    case 'en':
      return 'en';
    default:
      return locale;
  }
};
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
      <a href="sms:1-408-555-5555">1-408-555-5555</a>
      {events.map((event, index) => {
        const key = index;
        return (
          <Event
            key={event.id}
            id={event.id}
            name={event.name}
            startTime={event.startTime}
            users={event.users}
            messages={event.messages}
            place={event.place}
            assignment={event.assignment}
            duration={event.duration}
            locale={translateLocale(user?.locale || 'nb')}
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
