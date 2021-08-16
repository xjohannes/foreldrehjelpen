import React, { SVGProps, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';
import { navStateType } from '../../commonTypes/commonTypes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
// eslint-disable-next-line react/prop-types
const NavBar: React.FC<Props> = ({ children }) => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarNav}>{children}</ul>
  </nav>
);
interface ItemProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  icon: SVGProps<SVGSVGElement>;
  navStateObj?: navStateType;
}
export const NavItem = ({ icon, children, navStateObj }: ItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={styles.navItem}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <button
        type="button"
        className={styles.iconButton}
        onClick={() => navStateObj && navStateObj.toggleNavState()}
      >
        {icon}
      </button>
      {navStateObj && navStateObj.open && children}
    </li>
  );
};

NavItem.defaultProps = {
  navStateObj: {
    open: false,
    toggleNavState: () => false
  }
};

interface DropdownMenuProps {
  navStateObj: navStateType;
}

export const DropdownMenu = ({ navStateObj }: DropdownMenuProps) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<number>();

  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  interface IconProps {
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: SVGProps<SVGSVGElement>;
    goToMenu?: string;
    goToPage?: string;
  }
  const DropdownItem = ({
    leftIcon,
    rightIcon,
    goToMenu,
    goToPage,
    children
  }: IconProps) => (
    <>
      <Link to={`/${goToPage}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <button
          type="button"
          className={styles.menuItem}
          onClick={() => {
            if (goToMenu) {
              setActiveMenu(goToMenu);
            } else if (navStateObj) {
              navStateObj.toggleNavState();
            }
          }}
        >
          <span className={styles.iconButton}>{leftIcon}</span>
          {children}
          <span className={styles.iconRight}>{rightIcon}</span>
        </button>
      </Link>
    </>
  );
  DropdownItem.defaultProps = {
    children: [],
    leftIcon: <></>,
    rightIcon: <></>,
    goToMenu: '',
    goToPage: ''
  };
  return (
    <div className={styles.dropdown} style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: styles.menuPrimaryEnter,
          enterActive: styles.menuPrimaryEnterActive,
          exit: styles.menuPrimaryExit,
          exitActive: styles.menuPrimaryExitActive
        }}
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem rightIcon={<FontAwesomeIcon icon="window-close" />}>
            Lukk meny
          </DropdownItem>
          <DropdownItem
            goToPage="trafikkvakt"
            leftIcon={<FontAwesomeIcon icon="child" />}
          >
            Trafikkvakt
          </DropdownItem>
          <DropdownItem
            goToMenu="julemarked"
            leftIcon={<FontAwesomeIcon icon="socks" />}
            rightIcon={<FontAwesomeIcon icon="caret-right" />}
          >
            Julemarked
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'julemarked'}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: styles.menuSecondaryEnter,
          enterActive: styles.menuSecondaryEnterActive,
          exit: styles.menuSecondaryExit,
          exitActive: styles.menuSecondaryExitActive
        }}
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon={<FontAwesomeIcon icon="caret-left" />}
          >
            Hovedmeny
          </DropdownItem>
          <DropdownItem
            goToPage="julemarked"
            leftIcon={<FontAwesomeIcon icon="socks" />}
          >
            Mine Julemarkedoppgaver
          </DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NavBar;
