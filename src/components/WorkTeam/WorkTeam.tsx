import React, { ReactElement } from 'react';
import Participant from '../Participant';

type WorkTeamProps = {
  teamMembers: string[];
};
const WorkTeam = ({ teamMembers }: WorkTeamProps): ReactElement => {
  return (
    <>
      {teamMembers.map((userId, index) => {
        const key = index;
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Participant key={key} userId={userId} />;
      })}
    </>
  );
};

export default WorkTeam;
