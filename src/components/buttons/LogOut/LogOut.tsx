import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const LogOut = (): ReactElement => {
  return <Link to="LogOut">Logg ut</Link>;
};

export default LogOut;
