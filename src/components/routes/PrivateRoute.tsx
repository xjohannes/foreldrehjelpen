import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any>>;
}
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth0();
  const render = (props: any) =>
    // eslint-disable-next-line react/jsx-props-no-spreading
    isAuthenticated ? <Component {...props} /> : null;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
