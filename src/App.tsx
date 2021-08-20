import React, { ReactElement, useState } from 'react';
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
  faUser,
  faWindowClose,
  faSms,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OpUnitType } from 'dayjs';
import { Home, Trafikkvakt, Julemarked, Syttendemai } from './pages';
import Menu from './pages/Menu';

import PrivateRoute from './components/routes/PrivateRoute';
import { NavBar, NavItem, DropdownMenu } from './components/NavBar';
import AuthButton from './components/buttons/Auth';
import Avatar from './components/Avatar';
import BackButton from './components/buttons/BackButton';
import PageTitle from './components/PageTitle';
import styles from './App.module.css';

function App(): ReactElement {
  const { isAuthenticated, user } = useAuth0();
  const [navState, setNavState] = useState(false);
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
    faUser,
    faWindowClose,
    faPhone,
    faSms
  );
  const toggleNavState = () => {
    setNavState(!navState);
    return navState;
  };
  const navStateObj = {
    open: navState,
    toggleNavState
  };
  return (
    <>
      <header className={styles.headerWrapper}>
        <BackButton />
        <PageTitle title="Foreldrehjelpen" />
        <NavBar>
          <AuthButton />
          {isAuthenticated && <NavItem icon={<Avatar user={user} />} />}
          {isAuthenticated && (
            <NavItem
              navStateObj={navStateObj}
              icon={<FontAwesomeIcon icon="caret-down" />}
            >
              <DropdownMenu navStateObj={navStateObj} />
            </NavItem>
          )}
        </NavBar>
      </header>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <PrivateRoute path="/trafikkvakt/" component={Trafikkvakt} />
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
