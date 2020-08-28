import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GalleryItem from './galleryitem';

import { IMainItem, IItemInfo } from './CommonTypes';
import './gallery.scss';

const GALLERY_ITEMS_QUERY = graphql`
  query getItems {
    data: allCockpitItems {
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
          value
        }
        id
      }
    }
  }
`;

const Gallery = () => {
  const {
    data: { nodes: items },
  }: IMainItem = useStaticQuery(GALLERY_ITEMS_QUERY);

  const [curPage, setCurPage] = useState(1);
  const numOfPages = 5;

  return (
    <div className="gallery">
      <div className="items">
        {items.map(
          ({
            Name: { value: name },
            Description,
            Price: { value: price },
            Image: { value: image },
            id,
          }) => (
            <GalleryItem
              key={id}
              name={name}
              description={Description}
              price={price}
              image={image}
            />
          ),
        )}
      </div>
      <div className="numOfPages">
        {[...Array(numOfPages).keys()].map(n => (
          <div key={n}
               className={curPage === n + 1 ? 'big' : ''}
               onClick={() => setCurPage(n+1)}>
            {n + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
