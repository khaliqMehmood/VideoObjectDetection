import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { } from 'react-bootstrap-icons';
import SimpleSlider from './Slider';
import VideoApp from './VideoPlayer';
import Sidebar from '../Layouts/Sidebar';
import Body from './Body';
const Home = () => {
    return (
        <>
            <div className="main-body">
                <div>
                    <Sidebar />
                </div>
                <div className="main-content">
                    <div className='title'>
                        <h1>Choose a sample or upload your own </h1>
                        <p>Upload time is based on your bandwisth and video size.</p>
                    </div>
                    <div className='Add-URL'>
                        <input type="text" className="form-control" name="" value="" placeholder="Add URL" />
                        <span>Proceed</span>
                    </div>
                    <div className='drag_drop'>
                        <h1>Drag & Drop to upload your file</h1>
                        <h6>OR</h6>
                        <div class="upload-btn-wrapper">
                            <button class="btn">Upload a file</button>
                            <input type="file" name="myfile" />
                        </div>
                    </div>
                    <div className='result-slider'>
                        <h1>Results</h1>
                        <p>Here are the results we found sorted by category. The marks on the timeline show where we found results that are selected.</p>
                
                         <SimpleSlider />  
                        <VideoApp />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;




