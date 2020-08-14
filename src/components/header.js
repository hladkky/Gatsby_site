import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import NavLink from './navLink';

import './header.css';

const Header = ({ siteTitle }) => {

  const Naming = 'Company\nName';

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
          <NavLink to="/home">Главная</NavLink>
          <div className="divider"></div>
          <NavLink to="/catalog">Каталог</NavLink>
          <div className="divider"></div>
          <NavLink to="/delivery&payment">Доставка и оплата</NavLink>
          <div className="divider"></div>
          <NavLink to="/pricelist">Прайс-лист</NavLink>
          <div className="divider"></div>
          <NavLink to="/contacts">Контакты</NavLink>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
