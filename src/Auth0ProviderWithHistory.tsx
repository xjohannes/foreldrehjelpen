import React, { ReactElement, ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

interface Auth0ProviderProps {
  children: ReactNode;
}

interface AppState {
  returnTo?: string;
}
const Auth0ProviderWithHistory = ({
  children
}: Auth0ProviderProps): ReactElement => {
  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/menu`}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
