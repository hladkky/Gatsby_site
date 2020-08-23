import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from './../Header/navLink';

import './footer.scss';

const Footer = () => {

  const data = useStaticQuery(graphql`
    query getFooter {
      allCockpitFooter {
        nodes {
          Text {
            value
          }
        }
      }
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
    allCockpitFooter: { nodes: footerText },
  } = data;
  const {
    allCockpitMenu: { nodes: menuItems },
  } = data;

  return (
    <div className="footer">
      <div className="navFooter">
        <NavLink to="/home">{menuItems[0].Name.value}</NavLink>
        <NavLink to="/catalog">{menuItems[1].Name.value}</NavLink>
        <NavLink to="/delivery&payment">{menuItems[2].Name.value}</NavLink>
        <NavLink to="/pricelist">{menuItems[3].Name.value}</NavLink>
        <NavLink to="/contacts">{menuItems[4].Name.value}</NavLink>
      </div>
      {footerText.map((item: any) => <p className='companyC' key={item.Text.value}>{item.Text.value}</p>)}
    </div>
  );
};

export default Footer;
