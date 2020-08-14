import React from 'react';

import './gallery.css';
import busket from './../images/addtobasket_mini.png';

const GalleryItem = ({name, description, price, image}) => {
  
  const startImgUrl = 'http://dncapp.website:4040/';
  const desc = description ? description.value : ' ';

  console.log(image);

  return (
    <div className='galleryItem'>
      <img className='itemPhoto' src={startImgUrl+image}/>
      <h6>{name}</h6>
      <div className='priceAndBusket'>
        <h3>{price}</h3>
        <img src={busket}></img>
      </div>
    </div>
  );
};

export default GalleryItem;