import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SignIn from '../SignIn';
import SignOut from '../SignOut';

const AuthButton = (): ReactElement => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <SignOut /> : <SignIn />;
};

export default AuthButton;
