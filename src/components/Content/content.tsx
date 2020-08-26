import React from 'react';
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

  return (
    <main>
      <div className="path">/path/</div>
      <ul className="listofclasses">
        {items.map(({Class: {value}}) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
      <Gallery />
      <About />
    </main>
  );
};

export default Content;
