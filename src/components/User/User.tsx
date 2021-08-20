import React, { ReactElement } from 'react';
import Avatar from 'react-avatar';
import SignOut from '../buttons/SignOut/SignOut';
import styles from './user.module.css';
import type { User } from '../../commonTypes/commonTypes';

type UserProps = {
  user: User;
};

const User = ({ user }: UserProps): ReactElement => {
  return (
    <nav>
      <div className={styles.avatar}>
        <Avatar googleId="118096717852922241760" size="60" />
      </div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <SignOut />
    </nav>
  );
};

export default User;
