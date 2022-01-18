import React, { useState } from 'react';
import '../styles/SideBar.css';
import { Accordion, Button } from 'react-bootstrap';
import icon_search from "../Images/icon_search.png";
import itme_1 from "../Images/itme_1.png";
import { } from 'react-bootstrap-icons';
import Data from "../local-json/data.json";

const Sidebar = () => {

    let objKeys = Object.keys(Data.objects_count);
    let allFrames = Data.objects_loc;
    const myFunction = () => {

    }
    return (
        <>
            <div className="main-body">
                <div className="side-bar">
                    <div className='part_one'>

                        <h6>Result Details:</h6>
                        <div className="search_box">
                            <input type="text" className="form-control" name="" placeholder="Search" />
                            <img src={icon_search} type="submit" onKeyUp={myFunction} className="icon_search" alt="" />
                        </div>

                        <div className='Accordion-wrapar'>
                            <Accordion defaultActiveKey="0" flush>
                                {
                                    objKeys.map((d, i, a) => {
                                        if (d != "all" && d != "All" && d != "ALL") {
                                            return (
                                                <Accordion.Item eventKey={i}>
                                                    <Accordion.Header>{d.charAt(0).toUpperCase() + d.slice(1)}<span className='number'>({Data.objects_count[d]})</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        {
                                                            allFrames[d].frames.map((d, i, a) => {
                                                            
                                                                return (
                                                                    <ul>
                                                                        <li> <img src= {d} alt=''/></li>
                                                                    </ul>
                                                                )

                                                            })
                                                        }
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        }
                                    })
                                }
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
