import React, { ReactElement } from 'react';
import stylesNav from '../NavBar/navBar.module.css';

type AvatarProps = {
  picture: string;
  name: string;
};

const Avatar = (props: AvatarProps): ReactElement => {
  const { picture, name } = props;
  return (
    <>
      <div className={stylesNav.navItem}>
        <img src={picture} alt={name} className={stylesNav.iconButton} />
      </div>
    </>
  );
};

export default Avatar;
