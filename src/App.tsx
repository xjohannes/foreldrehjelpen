import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';

import PrivateRoute from './components/routes/PrivateRoute';
import Logout from './components/LogOut';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
