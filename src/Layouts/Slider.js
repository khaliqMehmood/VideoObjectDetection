import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import Data from "../local-json/data.json";
import Videoplayer from "./VideoPlayer"
// import axios from "axios";
export default function SimpleSlider() {
  const [data, setData] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
let objKeys = Object.keys(Data.objects_count);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
  useEffect(()=>{

  },[refreshKey]);
  // console.log("you are a", data);
  const select = (SelectedThing) =>{
    // setData(SelectedThing);
    // setRefreshKey((oldKey) => oldKey + 1);
  console.log("You are a", SelectedThing);
  }
  let randomColors = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }
  return (
    <>
    <Slider {...settings}>
      { 
        objKeys.map((d,i,a) => {
          return (
            <div className='card-item' type='submit' onClick={() => select(d)}>
              <h1 style={{ color: randomColors() }} >{Data.objects_count[d]}</h1>
              <p>{d.charAt(0).toUpperCase() + d.slice(1)}</p>
            </div>    
          )
        })
      }    
    </Slider>
    </>
  );
}
