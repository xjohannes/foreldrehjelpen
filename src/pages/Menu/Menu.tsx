import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Event } from '../../components/Event';
import type { EventType } from '../../commonTypes/commonTypes';
import styles from './menu.module.css';
import { globalContext } from '../../store/globalStore';
import { getUser } from '../../httpClients/userClient';
import { getAllEventsForUser } from '../../httpClients/eventClient';
import { SET_USER } from '../../commonTypes/Actions/comonActions';
import { sortEvents } from '../../util/helperFunctions';

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
      const eventsFromServer = await getAllEventsForUser(userId);
      sortEvents(eventsFromServer);
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
      {events.map((event) => {
        return (
          <Event
            key={event.id}
            id={event.id}
            type={event.type}
            taskName={event.taskName}
            name={event.name}
            startTime={event.startTime}
            users={event.users}
            messages={event.messages}
            place={event.place}
            duration={event.duration}
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
