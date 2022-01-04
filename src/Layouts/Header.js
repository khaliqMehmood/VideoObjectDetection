import React from 'react'
import '../App.css';
import Logo from "../Images/Logo.png"
import { Row,Col } from 'react-bootstrap';
const Header = () => {
    return (
        <>
     <div > 
  <Row className="Header">
    <Col className="HeaderLogo"><img src={Logo} alt=""/></Col>
  </Row>
        </div>
        <div>
        <Row className="">
    <Col className="maincontent" ><span className="HeadingContent">Video Analysis:</span><span className="HeadingContent2">This service analyzes video and detacts objects, activities, people, celebrities, and more in videos and live streams.</span> </Col>
  </Row>
  </div>
    </>
    )
}

export default Header
