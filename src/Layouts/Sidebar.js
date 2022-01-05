import React from 'react';
import '../styles/SideBar.css';
import { Accordion, Button } from 'react-bootstrap';
import icon_search from "../Images/icon_search.png";
import itme_1 from "../Images/itme_1.png";
import { } from 'react-bootstrap-icons';
var data = {
    "person": 100,
    "dining table": 2,
    "potted plant": 3,
    "car": 2,
    "All": 76,
}
let objKeys = Object.keys(data);
console.log(objKeys);
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
                                {
                                    objKeys.map((d, i, a) => {
                                        return (
                                            <Accordion.Item eventKey={i}>
                                    <Accordion.Header>{d.charAt(0).toUpperCase() + d.slice(1)}<span className='number'>({data[d]})</span></Accordion.Header>
                                    <Accordion.Body>
                                        {/* <ul>
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

                                        </ul> */}
                                    </Accordion.Body>
                                </Accordion.Item>
                                        )
                                    })
                                }
                                

                                {/* <Accordion.Item eventKey="1">
                                    <Accordion.Header>Dining table <span>({data['dining table']})</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Potted plant <span>({data['potted plant']})</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Cars<span>({data.car})</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item> */}
                                {/* <Accordion.Item eventKey="3">
                                    <Accordion.Header>Cars <span>(4)</span></Accordion.Header>
                                    <Accordion.Body>

                                    </Accordion.Body>
                                </Accordion.Item> */}
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
