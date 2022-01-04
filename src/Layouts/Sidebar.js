import React from 'react';
import '../styles/SideBar.css';
import { Accordion, Button } from 'react-bootstrap';
import icon_search from "../Images/icon_search.png";
import itme_1 from "../Images/itme_1.png";
import { } from 'react-bootstrap-icons';

const Sidebar = () => {
    return (
        <>
            <div className="main-body">
                <div className="side-bar">
                    <div className='part_one'>
                        <h6>Result Details:</h6>
                        <div className="search_box">
                            <input type="text" className="form-control" name="" value="" placeholder="Search" />
                            <img src={icon_search} className="icon_search" alt="" />
                        </div>
                        <div className='Accordion-wrapar'>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>People <span className='number'>(10)</span></Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>
                                            <li> <img src={itme_1} alt='' /></li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Celebrities <span>(4)</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Objects and Activities <span>(15)</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Moderated Labels <span>(14)</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Cars <span>(4)</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='part_two'> <Button className='btn_download'>  Download Response  </Button></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
