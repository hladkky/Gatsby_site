import React, { useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import About from './../About/about';
import Gallery from './../Gallery/gallery';
import { IMainContent } from './CommonTypes';

import './content.scss';

const Content = () => {
  const data = useStaticQuery(graphql`
    query getGoods {
      data: allCockpitGoods {
        nodes {
          Class {
            value
          }
        }
      }
    }
  `);

  const {
    data: { nodes: items },
  }: IMainContent = data;

  const [curPath, setCurPath] = useState([]);
  const changeCurPath = useCallback(
    list => {
      return list.join('/') + '/';
    },
    [curPath],
  );

  return (
    <main>
      <div className="path">{changeCurPath(curPath)}</div>
      <div className="goods">
        <ul className="listofclasses">
          {items.map(({ Class: { value } }) => {
            return (
              <li
                key={value}
                className={value === curPath[0] ? 'item curPath' : 'item'}
                onClick={() => setCurPath([value])}
              >
                {value}
              </li>
            );
          })}
        </ul>
        <Gallery />
      </div>
      <About />
    </main>
  );
};

export default Content;
