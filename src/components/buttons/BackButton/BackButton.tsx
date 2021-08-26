import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import stylesNav from '../../NavBar/navBar.module.css';

const BackButton = (): ReactElement => {
  return (
    <li className={stylesNav.navItem}>
      <Link to="/menu" className={stylesNav.iconButton}>
        <button type="button">
          <FontAwesomeIcon icon="caret-left" />
        </button>
      </Link>
    </li>
  );
};

export default BackButton;
