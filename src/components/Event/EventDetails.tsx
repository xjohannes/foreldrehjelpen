import React, { ReactElement } from 'react';
import WorkTeam from '../WorkTeam';
import type EventProps from './EventTypes';
import { User } from '../../commonTypes/commonTypes';

const EventDetails = (props: EventProps): ReactElement => {
  const userCurrent: User = {
    name: 'Hanne'
  };
  const { title } = props;
  return (
    <>
      <article>
        <header>
          <h2>{title}</h2>
        </header>
        <span className="previousTeam">
          <WorkTeam leader={userCurrent} members={[userCurrent]} />
        </span>
        <span className="myTeam">
          <WorkTeam leader={userCurrent} members={[userCurrent]} />
        </span>
        <span className="nextTeam">
          <WorkTeam leader={userCurrent} members={[userCurrent]} />
        </span>
      </article>
    </>
  );
};

export default EventDetails;
