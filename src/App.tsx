import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home, Menu, Trafikkvakt, Julemarked, Syttendemai } from './pages';

import PrivateRoute from './components/routes/PrivateRoute';
import Logout from './components/buttons/LogOut';
import LogInButton from './components/buttons/LogIn';
import NavigationBar from './components/NavigationBar';

function App(): ReactElement {
  return (
    <div>
      <NavigationBar />
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Meny</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <PrivateRoute path="/trafikkvakt" component={Trafikkvakt} />
            <PrivateRoute path="/julemarked" component={Julemarked} />
            <PrivateRoute path="/syttendemai" component={Syttendemai} />
            <PrivateRoute path="/menu" component={Menu} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
