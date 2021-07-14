import React, { ReactElement } from 'react';
import AuthenticationButton from '../buttons/AuthenticationButton';

const AuthNav = (): ReactElement => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;
