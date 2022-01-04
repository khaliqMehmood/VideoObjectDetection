import React from 'react'
import { Col, Row, Form, FormControl, Accordion,Button } from 'react-bootstrap'
import Icon from "../Images/icon_search.png"
import { } from 'react-bootstrap-icons';
import Slider from 'react-slick';
const Sidebar = () => {
    return (
        <>
          <div>
                            <p className="ResultDetail">Result Details:</p>
                        </div>
                        <Form className="d-flex leftsearchbar">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <div className="SearchImage">
                                <img src={Icon} />
                            </div>

                        </Form>
                        <Accordion className="Acordian-Images">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>people (10)</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
        </>
    )
}

export default Sidebar
