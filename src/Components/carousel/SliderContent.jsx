import React from 'react';
import './carousel.css';
import heart from '../../assets/carouselImages/heart.png';

export default function SliderContent(props) {
  return (
    <div className="slideContent">
      <div>
        <img
          className="carouselImage"
          src={heart}
          alt="heart"
          width={70}
          height={70}
        />
      </div>
      <div>
        <b>Heart Tests Basic</b>
      </div>
    </div>
  );
}
