import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import video1 from '../Images/video.mp4';
import Data from "../local-json/data.json";
var allTime = Data.objects_loc;
var objKeys = Object.keys(Data.objects_loc);
class VideoApp extends Component {

    player = {}
    state = {
        video: {
            src: "http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6#.mp4",
            // src: { video1 },
            poster: "https://i.imgur.com/dG5rl3u.jpeg",
            type: 'video/mp4'
        }
    }
    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        this.player = player;
    }
    onVideoPlay(duration) {
        console.log("Video played at: ", duration);
    }
    onVideoPause(duration) {
        console.log("Video paused at: ", duration);
    }
    onVideoTimeUpdate(duration) {
        let intervalInSeconds = Math.floor(duration);
        let beautifySeconds = `0:${intervalInSeconds}`;
        let durationInPercantage = (duration / 39) * 100;
        let barElement = document.getElementById("bar_movment");
        barElement.style.left = durationInPercantage + '%';
        barElement.children[0].textContent = beautifySeconds;
        console.log(intervalInSeconds);
        console.log("Time updated: ", duration);
    }
    onVideoSeeking(duration) {
        console.log("Video seeking: ", duration);
    }
    onVideoSeeked(from, to) {
        console.log(`Video seeked from ${from} to ${to}`);
    }
    onVideoEnd() {
        console.log("Video ended");
    }
    pauseVideo = () => {
        this.video.pause();
    };
    MoveProgressBar(value) {
        document.getElementsByTagName("video")[0].play();

    }

    componentDidMount(){
        console.log("kjfkdjfkldjklfjdklfjld");
        console.log(allTime);

        for (const key in allTime) {
            console.log("key", key);
            if (Object.hasOwnProperty.call(allTime, key)) {
                const objectMesh = allTime[key];
                const timespan = objectMesh.time;
                for (let x = 0; x <= timespan.length; x++) {
                    let time = timespan[x];
                    console.log("timespan", time);
                }
                
            }
        }
    }
    render() {
        return (
            <>
                {console.log(objKeys)}
                <div className="vedio_wraper ">
                    <div className="card">
                        <div className="bar_movment" id="bar_movment" onMouseDown={() => { this.MoveProgressBar() }}>
                            <span>0.0</span>
                        </div>
                        <div className="vedio_bar" id="Don" type="range" min="0" max="100" >

                            {/* {
                                objKeys.map((d, i, a) => {
                                    return(
                                        allTime[d].time.map((d, i, a) => {

                                            return (
                                                <span className="box_3">abc</span>
                                            )

                                        })
                                    )
                                    
                                })
                            } */}
                            <span className="box_1"> </span>
                            <span className="box_2"> </span>
                            <span className="box_3"> </span>
                            <span className="box_4"> </span>
                            <span className="box_5"> </span>
                        </div>

                        <div className="vedio">
                            <div class="div1 tooltip">
                                <a class="tooltiptext"
                                    href='http://www.youtube.com/'>TV</a>
                            </div>
                            <VideoPlayer id="myvideo"
                                src={this.state.video.src}
                                controls={true}
                                src={this.state.video.src}
                                poster={this.state.video.poster}
                                width="720"
                                height="420"
                                onReady={this.onPlayerReady.bind(this)}
                                onPlay={this.onVideoPlay.bind(this)}
                                onPause={this.onVideoPause.bind(this)}
                                onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                                onSeeking={this.onVideoSeeking.bind(this)}
                                onSeeked={this.onVideoSeeked.bind(this)}
                                onEnd={this.onVideoEnd.bind(this)}>
                            </VideoPlayer>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default VideoApp;
