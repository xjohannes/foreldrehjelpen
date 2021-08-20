import React, { ReactElement } from 'react';
import type { Team } from '../../commonTypes/commonTypes';
import Participant from '../Participant';

const WorkTeam = ({ leader, members }: Team): ReactElement => {
  return (
    <>
      <header>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Participant {...leader} />
      </header>
      {members.map((member, index) => {
        const key = index;
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Participant key={key} {...member} />;
      })}
    </>
  );
};

export default WorkTeam;
