import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IMainAbout } from './CommonTypes';
import './about.scss';

const About = () => {
  const data = useStaticQuery(graphql`
    query getAbout {
      data: allCockpitAbout {
        nodes {
          Text {
            value
          }
        }
      }
    }
  `);

  const {
    data: { nodes: items },
  }: IMainAbout = data;

  return (
    <>
      <div className="aboutDivider"></div>
      <div className="about">
        {items.map(({ Text: { value } }) => (
          <p key={value}>{value}</p>
        ))}
      </div>
    </>
  );
};

export default About;
