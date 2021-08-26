import React, { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '../../commonTypes/commonTypes';
import { getUser } from '../../httpClients/userClient';
import styles from './participant.module.css';

type ParticipantProps = {
  userId: string;
};
const Participant = ({ userId }: ParticipantProps): ReactElement => {
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(userId);
      setUser(userData);
    };
    fetchUser();
  }, [userId]);
  return (
    <div className={styles.participantWrapper}>
      <p className={styles.user}>{user.name}</p>
      <p className={styles.user}>
        Telefonnummer:
        {` ${user.phone}`}
      </p>
      <div className={styles.contactButtonsWrapper}>
        <button type="button" className={styles.contactButton}>
          <FontAwesomeIcon icon="phone" />
        </button>
        <button type="button" className={styles.contactButton}>
          <FontAwesomeIcon icon="sms" />
        </button>
      </div>
    </div>
  );
};

export default Participant;
