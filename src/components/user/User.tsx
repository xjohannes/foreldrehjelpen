import React, { ReactElement } from 'react';
import Avatar from 'react-avatar';
import LogOut from '../buttons/LogOut/LogOut';
import styles from './user.module.css';

const User = (): ReactElement => (
  <nav>
    <div className={styles.avatar}>
      <Avatar googleId="118096717852922241760" size="60" />
    </div>
    <LogOut />
  </nav>
);

export default User;
