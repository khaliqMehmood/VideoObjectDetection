import React from 'react'
import {Form, FormControl, Accordion,Button } from 'react-bootstrap'
import Icon from "../Images/icon_search.png"
import { } from 'react-bootstrap-icons';
const Body = () => {
    return (
        <>
                      <div className="bodyHeading"><p>Choose a sample or upload your own</p></div>
                        <div className="bodyContent"><p>Upload time is based on your bandwisth and video size.</p></div>
                        <Form className="d-flex URL-proceed">
                            <FormControl
                                placeholder="Add URL"
                                className="me-2"
                            />
                            <div className="proceed">
                                <b>proceed</b>
                            </div>
                        </Form>
                        <div class="drag-area">
                            <header>Drag & Drop to Upload your File</header> 
                            <span>OR</span>
                            <br></br>
                            <Button>Browse File</Button>
                            <input type="file" hidden/>
                        </div>
        </>
    )
}
export default Body
