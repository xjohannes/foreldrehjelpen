import React, { ReactElement } from 'react';
import stylesNav from '../NavBar/navBar.module.css';
import { User } from '../../commonTypes/commonTypes';

type AvatarProps = {
  user?: User;
};

const Avatar = (props: AvatarProps): ReactElement => {
  const { user } = props;
  return (
    <>
      <div className={stylesNav.navItem}>
        <img
          src={user?.picture}
          alt={user?.name}
          className={stylesNav.iconButton}
        />
      </div>
    </>
  );
};

Avatar.defaultProps = {
  user: {
    name: 'Jane Doe',
    picture: 'No picture avatar'
  }
};

export default Avatar;
