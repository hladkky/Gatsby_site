import React from 'react';
import { Link } from 'gatsby';

import './header.css';

const linkStyles = {
  fontSize: '24px',
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
};

const NavLink = ({ children, to }) => (
  <Link to={to} className="navLink">
    {children}
  </Link>
);

export default NavLink;
