import React from 'react';
import NavLink from './navLink';

import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="navFooter">
      <NavLink to="/home">Главная</NavLink>
      <NavLink to="/catalog">Каталог</NavLink>
      <NavLink to="/delivery&payment">Доставка и оплата</NavLink>
      <NavLink to="/pricelist">Прайс-лист</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </div>
    <p className="companyC">
      © 2012–2013 ЗАО «Компания»
      <br />
      info@name.ru
    </p>
  </div>
);

export default Footer;
