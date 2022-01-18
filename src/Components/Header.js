import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import logo from "../Images/Logo.png";
import navbar_icon from "../Images/navbar-icon.svg";
import navbar_close_icon from "../Images/navbar-close-icon.svg";

const Header = () => {

  return (
    <>
      <div className='header-wraper'>
        <header id="header" class="">
          <img src={logo} alt='' />
          <Button className='btn_togaller'>
            <img src={navbar_icon} alt="navbar_icon" className='navbar_icon' />
            <img src={navbar_close_icon} alt="navbar_icon" className='navbar_close_icon' />
          </Button>
        </header>
        <div className="header-footer">
          <h4>Video Analysis:<span>This service analyzes video and detacts objects, activities, people, celebrities, and more in videos and live streams.</span></h4>
        </div>
      </div>
    </>
  )
}

export default Header