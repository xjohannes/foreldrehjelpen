import React, { SVGProps, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navBar.module.css';

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
}
export const NavItem = ({ icon, children }: ItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={styles.navItem}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

interface IconProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  leftIcon?: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  rightIcon?: SVGProps<SVGSVGElement>;
  // eslint-disable-next-line react/require-default-props
  goToMenu?: string;
}
export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<number>();
  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = ({
    leftIcon,
    rightIcon,
    goToMenu,
    children
  }: IconProps) => (
    <a
      href="#"
      className={styles.menuItem}
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className={styles.iconButton}>{leftIcon}</span>
      {children}
      <span className={styles.iconRight}>{rightIcon}</span>
    </a>
  );

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
          <DropdownItem leftIcon={<FontAwesomeIcon icon="child" />}>
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
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
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
