import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from './navLink';
import {IMainMenu} from './CommonTypes';

import './header.scss';

const Header = () => {
  const Naming = 'Company\nName';

  const data = useStaticQuery(graphql`
    query getMenu {
      data: allCockpitMenu {
        nodes {
          Name {
            value
          }
        }
      }
    }
  `);

  const {
    data: { nodes: items },
  }: IMainMenu = data;

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
          {items.map(({Name: {value: name}}) => (
            <Fragment key={name}>
              <NavLink to={'/'+name}>{name}</NavLink>
              {name !== items[items.length-1].Name.value && <div className={'divider'}></div>}
            </Fragment>))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
