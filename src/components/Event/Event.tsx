import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import localeNb from 'dayjs/locale/nb';
import styles from './event.module.css';
import { capitalizeFirstLetter } from '../../util';
import { EventType } from '../../commonTypes/commonTypes';

const Event = (props: EventType): ReactElement => {
  const { type, taskName, name, startTime, duration } = props;
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
          <h3>{type}</h3>
        </header>

        <div className={styles.infoWrapper}>
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
          {taskName && (
            <p>
              Sted:
              {` ${taskName}`}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default Event;
