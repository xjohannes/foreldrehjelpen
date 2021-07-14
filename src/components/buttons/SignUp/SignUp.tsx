import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogInButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup'
        })
      }
    >
      Registrer ny bruker
    </button>
  );
};

export default LogInButton;
