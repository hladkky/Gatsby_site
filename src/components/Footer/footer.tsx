import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from './../Header/navLink';
import { IMainFooter } from './CommonTypes';
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
    }
  `);

  const {
    allCockpitFooter: { nodes: footerText },
    allCockpitMenu: { nodes: menuItems },
  }: IMainFooter = data;

  return (
    <div className="footer">
      <div className="companyInfo">
        {footerText.map(({ Text: { value } }) => (
          <p className="companyC" key={value}>
            {value}
          </p>
        ))}
      </div>
      <div className="navFooter">
        {menuItems.map(({ Name: { value } }) => (
              <NavLink to={'/' + value}>{value}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
