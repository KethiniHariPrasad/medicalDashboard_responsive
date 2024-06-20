import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import SliderContent from './SliderContent';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <ArrowCircleLeftIcon className="slick-prev" sx={{ fontSize: '2rem' }} />
    ),
    nextArrow: (
      <ArrowCircleRightIcon className="slick-next" sx={{ fontSize: '2rem' }} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="sliderDiv">
          <SliderContent />
        </div>
        <div className="sliderDiv">
          <SliderContent />
        </div>
        <div className="sliderDiv">
          <SliderContent />
        </div>
        <div className="sliderDiv">
          <SliderContent />
        </div>
        <div className="sliderDiv">
          <SliderContent />
        </div>
        <div className="sliderDiv">
          <SliderContent />
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
