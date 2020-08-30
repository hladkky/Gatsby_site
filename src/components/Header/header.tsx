import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavLink from './navLink';
import { IMainHeader } from './CommonTypes';

import './header.scss';

const Header = () => {
  const Naming = 'Company\nName';

  const data = useStaticQuery(graphql`
    query getMenu {
      dataMenu: allCockpitMenu {
        nodes {
          Name {
            value
          }
        }
      }
      dataPhones: allCockpitPhone {
        nodes {
          Number {
            value
          }
        }
      }
    }
  `);

  const {
    dataMenu: { nodes: items },
    dataPhones: { nodes: phones },
  }: IMainHeader = data;

  return (
    <header>
      <div className="top">
        <div className="logoWithName">
          <div className="logo"></div>
          <div className="companyName">
            <div className="name">{Naming}</div>
            <div className="companySlogan">самая клевая компания</div>
          </div>
        </div>
        <div className="phoneNumbers">
          {phones.map(({ Number: { value: num } }) => (
            <div key={num} className="phoneNumber">
              <a href={`tel:${num}`}>{num}</a>
            </div>
          ))}
          <div className="backConnect">
            <span>Обратная связь</span>
          </div>
        </div>
      </div>
      <nav>
        <div className="navHeader">
          {items.map(({ Name: { value: name } }) => (
            <Fragment key={name}>
              <NavLink to={'/' + name}>{name}</NavLink>
              {name !== items[items.length - 1].Name.value && (
                <div className="divider"></div>
              )}
            </Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
