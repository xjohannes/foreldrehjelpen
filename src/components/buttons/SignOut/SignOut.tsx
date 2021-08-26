import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from '../../NavBar';

const SignOut = (): ReactElement => {
  const { logout } = useAuth0();
  return (
    <NavItem
      icon={
        <FontAwesomeIcon
          icon="sign-out-alt"
          onClick={() => logout({ returnTo: window.location.origin })}
        />
      }
    />
  );
};

export default SignOut;
