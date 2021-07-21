import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './event.module.css';

type EventProps = {
  title: string;
  time: string;
  place: string;
  assignment: string;
};
const Event = (props: EventProps): ReactElement => {
  const { title, time, place, assignment } = props;
  return (
    <Link to={`/${title}`}>
      <article>
        <h3>{title}</h3>
        <span className={styles.infWrapper}>
          <p>
            Tid:
            {time}
          </p>
          <p>
            Sted:
            {place}
          </p>
          <p>
            Oppgave:
            {assignment}
          </p>
        </span>
      </article>
    </Link>
  );
};

export default Event;
