import React from "react";
import Slider from "react-slick";
import Larki from "../Images/Larki.png"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 6
  };
  return (
    <Slider {...settings}>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
      <div>
      <img src={Larki} className='img-fluid shadow-4' alt='...' />
      </div>
    </Slider>
  );
}
