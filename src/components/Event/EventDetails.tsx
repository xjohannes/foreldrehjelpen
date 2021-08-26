import React, { ReactElement } from 'react';
import WorkTeam from '../WorkTeam';
import { EventType } from '../../commonTypes/commonTypes';

interface EventDetailsProps extends EventType {
  showTaskTitle: boolean;
}
const EventDetails = (props: EventDetailsProps): ReactElement => {
  const { name, showTaskTitle, users } = props;

  return (
    <>
      <article>
        {showTaskTitle && (
          <header>
            <h3>{name}</h3>
          </header>
        )}
        <WorkTeam teamMembers={users} />
      </article>
    </>
  );
};

export default EventDetails;
