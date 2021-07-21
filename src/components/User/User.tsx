import React, { ReactElement } from 'react';
import Avatar from 'react-avatar';
import SignOut from '../SignOut/SignOut';
import styles from './user.module.css';

type User = {
  name: string;
  email: string;
};
type UserProps = {
  user: User;
};

const User = (props: UserProps): ReactElement => {
  const { user } = props;
  console.log('USER ', user);
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
