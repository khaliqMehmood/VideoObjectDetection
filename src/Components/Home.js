import React from 'react'
import { Col, Row} from 'react-bootstrap'
import { } from 'react-bootstrap-icons';
import SimpleSlider from './Slider';
import VideoApp from './VideoPlayer';
import Sidebar from '../Layouts/Sidebar';
import Body from './Body';
const Home = () => {
    return (
        <>
            <div>
                <Row>
                    <Col md={3}>
                        <Sidebar/>
                    </Col>
                    <Col md={9} className="mainsection">
                          <Body/>
                        <SimpleSlider/>
                        <VideoApp/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Home;




