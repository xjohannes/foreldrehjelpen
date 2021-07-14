import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogIn from '../LogIn';
import LogOut from '../LogOut';

const AuthenticationButton = (): ReactElement => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogOut /> : <LogIn />;
};

export default AuthenticationButton;
