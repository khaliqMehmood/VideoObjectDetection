import React from "react";
import Slider from "react-slick"; 
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4 
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className='card-item'>
        <h1 className="text_blue">47</h1>
        <p>All Results</p>
      </div>
      <div className='card-item'>
        <h1 className="lit_blue">10</h1>
        <p>People</p>
      </div>
      <div className='card-item'>
        <h1 className="lit_green">4</h1>
        <p>Celebrities</p>
      </div>
      <div className='card-item'>
        <h1 className="orange">15</h1>
        <p>Objects & Activities</p>
      </div>
      <div className='card-item'>
        <h1 className="pink">14</h1>
        <p>Moderated Labels</p>
      </div>
      <div className='card-item'>
        <h1 className="text-red">47</h1>
        <p>Cars</p>
      </div>
      <div className='card-item'>
        <h1 className="text_blue">47</h1>
        <p>All Results</p>
      </div>
      <div className='card-item'>
        <h1 className="lit_blue">10</h1>
        <p>People</p>
      </div>
      <div className='card-item'>
        <h1 className="lit_green">4</h1>
        <p>Celebrities</p>
      </div>
      <div className='card-item'>
        <h1 className="orange">15</h1>
        <p>Objects & Activities</p>
      </div>
      <div className='card-item'>
        <h1 className="pink">14</h1>
        <p>Moderated Labels</p>
      </div>
      <div className='card-item'>
        <h1 className="text-red">47</h1>
        <p>Cars</p>
      </div>


    </Slider>
  );
}
