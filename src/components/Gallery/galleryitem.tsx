import React from 'react';

import './gallery.scss';
import busket from './../../images/addtobasket_mini.png';
import { IItemInfo } from './CommonTypes';

const GalleryItem: React.FC<IItemInfo> = ({
  name,
  description,
  price,
  image,
}) => {
  const startImgUrl = 'http://dncapp.website:4040/';
  const desc = description ? description.value : ' ';

  return (
    <div className="galleryItem">
      <img className="itemPhoto" src={startImgUrl + image} />
      <h6>{name}</h6>
      <div className="priceAndBusket">
        <h3>{price}</h3>
        <img src={busket}></img>
      </div>
      <p className="description">{desc}</p>
    </div>
  );
};

export default GalleryItem;
