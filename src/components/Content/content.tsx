import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './content.scss';
import About from './../About/about';
import Gallery from './../Gallery/gallery';

const Content = () => {
  
  const data = useStaticQuery(graphql`
    query getGoods {
      allCockpitGoods {
        nodes {
          Class {
            value
          }
        }
      }
    }`
  );

  const {
    allCockpitGoods: { nodes: items },
  } = data;

  return (
    <main>
      <div className="path">/path/</div>
      <ul className="listofclasses">
        {items.map((item: any) => {
          return <li key={item.Class.value}>{item.Class.value}</li>;
        })}
      </ul>
      <Gallery />
      <About />
    </main>
  );
};

export default Content;
