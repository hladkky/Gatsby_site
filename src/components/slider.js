import React from 'react';
import leftArrow from './../images/leftarrow.png';
import rightArrow from './../images/rightarrow.png';
import main from './../images/main.png';

import './slider.css';

const Slider = (/*{ photos }*/) => (
  <div className="slider">
    <img className="leftarr" src={leftArrow}></img>
    {/* photos */}
    <img className="main" src={main}></img>
    <img className="rightarr" src={rightArrow}></img>
  </div>
);

export default Slider;
