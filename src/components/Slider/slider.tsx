import React, { useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import leftArrow from './../../images/leftarrow.png';
import rightArrow from './../../images/rightarrow.png';

import './slider.scss';

const Slider = () => {
  const data = useStaticQuery(graphql`
    query getPhotos {
      allCockpitBackPhotos {
        nodes {
          source {
            value {
              url
            }
          }
        }
      }
    }
  `);

  const {
    allCockpitBackPhotos: { nodes: src },
  } = data;
  const photos = src.map(({ source }: any) => source.value.url);

  const [curUrl, setCurUrl] = useState(photos[0]);

  const prevPhoto = () => {
    const curIndex = photos.indexOf(curUrl);
    setCurUrl(curIndex > 0 ? photos[curIndex - 1] : photos.slice(-1)[0]);
  };
  const nextPhoto = useCallback(() => {
    const curIndex = photos.indexOf(curUrl);
    setCurUrl(curIndex < photos.length - 1 ? photos[curIndex + 1] : photos[0]);
  }, []);

  return (
    <div className="slider">
      <div className="imageContainer">
        {photos.map((url: any) => (
          <img
            key={url}
            className={url === curUrl ? 'active' : 'passive'}
            src={url}
          ></img>
        ))}
        <div className="arrowsContainer">
          <img className="leftarr" src={leftArrow} onClick={prevPhoto}></img>
          <img className="rightarr" src={rightArrow} onClick={nextPhoto}></img>
        </div>
      </div>
    </div>
  );
};

export default Slider;
