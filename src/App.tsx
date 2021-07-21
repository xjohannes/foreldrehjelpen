import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faSignInAlt,
  faSignOutAlt,
  faCog,
  faSocks,
  faChild,
  faHandHolding,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Home, Menu, Trafikkvakt, Julemarked, Syttendemai } from './pages';

import PrivateRoute from './components/routes/PrivateRoute';
import { NavBar, NavItem, DropdownMenu } from './components/NavBar';
import AuthButton from './components/Auth';
import Avatar from './components/Avatar';
import styles from './App.module.css';

function App(): ReactElement {
  const { isAuthenticated, user } = useAuth0();
  library.add(
    faBell,
    faCaretDown,
    faCaretLeft,
    faCaretRight,
    faSignOutAlt,
    faSignInAlt,
    faCog,
    faSocks,
    faChild,
    faHandHolding,
    faUser
  );
  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <h1>Foreldrehjelpen</h1>
        </header>
        <NavBar>
          <AuthButton />
          {isAuthenticated && (
            <NavItem
              icon={<Avatar picture={user.picture} name={user.name} />}
            />
          )}
          {isAuthenticated && (
            <NavItem icon={<FontAwesomeIcon icon="caret-down" />}>
              <DropdownMenu />
            </NavItem>
          )}
        </NavBar>
      </div>

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
    </>
  );
}

export default App;
