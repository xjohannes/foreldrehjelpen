import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '../../commonTypes/commonTypes';

const Participant = ({ name, phone }: User): ReactElement => {
  return (
    <>
      <p>{name}</p>
      <p>{phone}</p>
      <div>
        <button type="button">
          <FontAwesomeIcon icon="phone" />
        </button>
        <button type="button">
          <FontAwesomeIcon icon="sms" />
        </button>
      </div>
    </>
  );
};

export default Participant;
