import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOut = (): ReactElement => {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-danger btn-block"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logg ut
    </button>
  );
};

export default LogOut;
