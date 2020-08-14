import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GalleryItem from './galleryitem';

import './gallery.css';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query getItems {
      allCockpitItems {
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
  `);

  const {
    allCockpitItems: { nodes: items },
  } = data;
  console.log(items);

  const numOfPages = 5;
  const curPage = 3;

  return (
    <>
      <div className='gallery'>
        {items.map(item => <GalleryItem key={item.id} name={item.Name.value} description={item.Description} price={item.Price.value} image={item.Image.value}/>)}
      </div>
      <div className='numOfPages'>
        {[...Array(numOfPages).keys()].map(n => <div key={n} className={curPage===n+1 ? 'big' : ''}>{n+1}</div>)}
      </div>
    </>
  );
};

export default Gallery;