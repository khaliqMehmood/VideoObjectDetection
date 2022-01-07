import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import video1 from '../Images/video.mp4';
class VideoApp extends Component {
    person = {
        time: [
            [
                0.3,
                0.3
            ],
            [
                0.4782608695652174,
                0.5217391304347826
            ],
            [
                0.5217391304347826,
                0.5652173913043478
            ],
            [
                0.6956521739130435,
                0.7391304347826086
            ],
            [
                0.7391304347826086,
                0.782608695652174
            ],
            [
                0.8695652173913043,
                0.9130434782608695
            ],
            [
                1,
                1.0434782608695652
            ],
            [
                1.173913043478261,
                1.2173913043478262
            ],
            [
                1.391304347826087,
                1.434782608695652
            ],
            [
                1.4782608695652173,
                1.5217391304347827
            ]
        ]
    };
     Link = () => {
     console.log("hello jee")
      };

    player = {}
    state = {
        video: {
            // src: "http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6#.mp4",
            src: {video1},
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
        let durationInPercantage = (duration / 15) * 100;
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
        document.getElementsByTagName("video")[0].play()
    }
    render() {
        return (
            <>
                <div className="vedio_wraper ">
                    <div className="card">
                        <div className="bar_movment" id="bar_movment" onMouseDown={() => { this.MoveProgressBar() }}>
                            <span>0.0</span>
                        </div>
                        <div className="vedio_bar" id="Don" type="range" min="0" max="100" >
                            {/* {   
                            this.person.time.map(data=> {
                                return (
                                    <span className="box_1"> {data[0]} {data[1]} </span>
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
