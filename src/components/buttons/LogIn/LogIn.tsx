import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogInButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Logg inn
    </button>
  );
};

export default LogInButton;
