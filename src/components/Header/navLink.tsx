import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

const NavLink = ({ children, to }: any) => (
  <Link to={to} className="navLink">
    {children}
  </Link>
);

export default NavLink;
