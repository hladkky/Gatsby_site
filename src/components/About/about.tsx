import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './about.scss';

const About = () => {

  const data = useStaticQuery(graphql`
    query getAbout {
      allCockpitAbout {
        nodes {
          Text {
            value
          }
        }
      }
    }`
  );

  const {
    allCockpitAbout: { nodes: items },
  } = data;

  return (
    <div className="about">
      <div className="aboutDivider"></div>
      {items.map((item: any) => <p key={item.Text.value}>{item.Text.value}</p>)}
    </div>
  );
};

export default About;
