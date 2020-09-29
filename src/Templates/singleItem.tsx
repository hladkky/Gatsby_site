import React from 'react';
import { graphql } from 'gatsby';
import { IMainItem } from './CommonTypes';
import './singleItem.scss';

const SingleItem: React.FC<IMainItem> = ({
  data: {
    allCockpitItems: {
      nodes: [curItem],
    },
  },
}) => {
  return (
    <div className="itemPage">
      <img src={curItem.Image.value.childImageSharp.fluid.src}></img>
      <div className="itemInfo">
        <h1>{curItem.Name.value}</h1>
        <h2>{curItem.Price.value}</h2>
        <p>
          {curItem.Description
            ? curItem.Description.value
            : 'The item has no description'}
        </p>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query SingleItemQuery($id: String!) {
    allCockpitItems(filter: { id: { eq: $id } }) {
      nodes {
        Name {
          value
        }
        Description {
          value
        }
        Price {
          value
        }
        Image {
          value {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default SingleItem;
