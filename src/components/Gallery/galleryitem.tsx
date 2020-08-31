import React from 'react';
import { Link } from 'gatsby';

import './gallery.scss';
import busket from './../../images/addtobasket_mini.png';
import { IItemInfo } from './CommonTypes';

const GalleryItem: React.FC<IItemInfo> = ({
  name,
  description,
  price,
  image,
  path
}) => {
  const desc = description ? description.value : ' ';

  return (
    <div className="galleryItem">
      <img className="itemPhoto" src={image} />
      <h6><Link to={path}>{name}</Link></h6>
      <div className="priceAndBusket">
        <h3>{price}</h3>
        <img src={busket}></img>
      </div>
      <p className="description">{desc}</p>
    </div>
  );
};

export default GalleryItem;
