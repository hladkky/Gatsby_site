import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from './navLink';

import './header.scss';

const Header = () => {
  const Naming = 'Company\nName';

  const data = useStaticQuery(graphql`
    query getMenu {
      allCockpitMenu {
        nodes {
          Name {
            value
          }
        }
      }
    }`
  );

  const {
    allCockpitMenu: { nodes: items },
  } = data;

  return (
    <header>
      <div className="logoWithName">
        <div className="logo"></div>
        <div className="companyName">
          <div className="name">{Naming}</div>
          <div className="companySlogan">самая клевая компания</div>
        </div>
      </div>
      <nav>
        <div className="navHeader">
          <NavLink to="/home">{items[0].Name.value}</NavLink>
          <div className="divider"></div>
          <NavLink to="/catalog">{items[1].Name.value}</NavLink>
          <div className="divider"></div>
          <NavLink to="/delivery&payment">{items[2].Name.value}</NavLink>
          <div className="divider"></div>
          <NavLink to="/pricelist">{items[3].Name.value}</NavLink>
          <div className="divider"></div>
          <NavLink to="/contacts">{items[4].Name.value}</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
