import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from '../../NavBar';

const SignIn = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();
  return (
    <NavItem
      icon={
        <FontAwesomeIcon
          icon="sign-in-alt"
          onClick={() => loginWithRedirect()}
        />
      }
    />
  );
};

export default SignIn;
