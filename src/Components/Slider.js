import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import Data from "../local-json/data.json";
// import axios from "axios";
export default function SimpleSlider() {
console.log(Data);
let objKeys = Object.keys(Data.objects_count);
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
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
  // const [data,setData]=useState([]);
    // const [data, setdata] = useState(userData);
    // useEffect(() => {
    //   axios
    //   .get("./data.json")
    //   .catch(err=>console.log(err))
    // },[]);


  return (
    <Slider {...settings}>
      { 
        objKeys.map((d,i,a) => {
          return (
            <div className='card-item'>
              <h1 className="text_blue">{Data.objects_count[d]}</h1>
              <p>{d.charAt(0).toUpperCase() + d.slice(1)}</p>
            </div>    
          )
        })
      }    
      
      {/* <div className='card-item'>
        <h1 className="text_blue">{data.All}</h1>
        <p>All Results</p>
      </div>
      <div className='card-item'>
        <h1 className="text_blue">{data.person}</h1>
        <p>Person</p>
      </div>
      <div className='card-item'>
        <h1 className="text_blue">{data['dining table']}</h1>
        <p>Dining table</p>
      </div>
      <div className='card-item'>
        <h1 className="text_blue">{data['potted plant']}</h1>
        <p>Potted plant</p>
      </div>
      <div className='card-item'>
        <h1 className="text_blue">{data.car}</h1>
        <p>Car</p>
      </div> */}
      
      {/* <div className='card-item'>
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
      </div> */}
    </Slider>
  );
}
