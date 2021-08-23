import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import localeNb from 'dayjs/locale/nb';
import styles from './event.module.css';
import { capitalizeFirstLetter } from '../../util';
import { EventWithLocale } from './EventTypes';

const Event = (props: EventWithLocale): ReactElement => {
  const { name, startTime, place, assignment, duration } = props;
  dayjs.locale(localeNb);
  const capitalizedDate = capitalizeFirstLetter(
    dayjs(startTime).format('dddd, D. MMMM YYYY')
  );

  const linkState = {
    pathname: `${name}`,
    state: props
  };
  return (
    <Link to={linkState}>
      <article>
        <header>
          <h3>{name}</h3>
        </header>

        <span className={styles.infWrapper}>
          <p>
            Dato:
            {` ${capitalizedDate} `}
          </p>
          <p>
            Oppmøte:
            {` ${dayjs(startTime).subtract(5, 'minute').format('H:mm')}`}
          </p>
          <p>
            Vakta avsluttes:
            {duration.value &&
              ` ${dayjs(startTime)
                .add(duration.value, duration.timeUnits)
                .format('H:mm')}`}
          </p>
          <p>
            Sted:
            {` ${place}`}
          </p>
          <p>
            Oppgave:
            {` ${assignment}`}
          </p>
        </span>
      </article>
    </Link>
  );
};

export default Event;
