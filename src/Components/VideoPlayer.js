import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: "http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6#.mp4",
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
        console.log(document.getElementsByTagName("video")[0].play());

    }
    render() {
        return (

            <>
                <div className="vedio_wraper ">
                    <div className="card">
                        <div className="bar_movment" id="bar_movment" onMouseDown={() => { this.MoveProgressBar() }}>
                            <span></span>
                        </div>
                        <div class="vedio_bar">
                            <span class="box_1"></span>
                            <span class="box_2"></span>
                            <span class="box_3"></span>
                            <span class="box_4"></span>
                            <span class="box_5"> </span> </div>
                        <div className="vedio">
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
<div
    tabindex="0"
    class="vjs-progress-holder vjs-slider vjs-slider-horizontal"
    role="slider"
    aria-valuenow="58.97"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Progress Bar"
    aria-valuetext="0:08 of 0:15"
>
    <div
        class="vjs-load-progress"
        style="width: 100%;"
    >
        <span class="vjs-control-text">
            <span>Loaded</span>: <span class="vjs-control-text-loaded-percentage">100.00%</span>
        </span>
        <div style="left: 0%; width: 100%;"></div>
    </div>
    <div class="vjs-mouse-display" style="left: 341px;">
        <div class="vjs-time-tooltip" aria-hidden="true" style="right: -17.7246px;">0:08</div>
    </div>
    <div class="vjs-play-progress vjs-slider-bar" aria-hidden="true" style="width: 58.97%;">
        <div class="vjs-time-tooltip" aria-hidden="true" style="right: -17.7246px;">0:08</div>
    </div>
</div>