import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; 
// import userData from "../local-json/data.json";
// import axios from "axios";
export default function SimpleSlider() {
  var data = {
    "All": 76,
    "person": 50,
    "dining table": 2,
    "potted plant": 3,
    "car": 2,
  }
let objKeys = Object.keys(data);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    // console.log(data)


  return (
    <Slider {...settings}>
      { 
        objKeys.map((d,i,a) => {
          return (
            <div className='card-item'>
              <h1 className="text_blue">{data[d]}</h1>
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
