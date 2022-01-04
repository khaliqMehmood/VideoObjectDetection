import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
var x = 1; 
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
    //   playVideo = () => {
    //     this.video.play()
    //   };
    
    MoveProgressBar() {
      console.log(x);
      console.log(x);
      console.log("kha");
      console.log("kha");      
      console.log("kha");
    if(x)
    {
        x=0;
        document.getElementsByTagName("video")[0].play()
        
    }
    else
    {
        x=1;
        document.getElementsByTagName("video")[0].pause()   
       
    }

        //    let vid=document.getElementsByClassName("video-js vjs-big-play-centered video-player-1641233961395-dimensions vjs-controls-enabled vjs-workinghover vjs-v7 vjs-has-started vjs-paused vjs-user-inactive");
        // if(video.paused){
        //     video.play();
        // }
        // else{
        //     video.pause();
        // }
        // var vid = document.getElementById("bar_movment");
        // function playVid() {
        //     x.play();
        //   }
          
        //   function pauseVid() {
        //     x.pause();
        //   }
        
    }
    render() {
        // var vid = document.getElementById("bar_movment");
        // function playVid() {
        //     vid.play();
        //   }
        //   function pauseVid() {
        //     vid.pause();
        //   }
        return (
            // <div>
            //     <div className="Video-Tag">
            //         <span className="blue-color">{this.onVideoSeeked.bind(this)}</span>
            //     </div>
            //     <VideoPlayer
            //         src={this.state.video.src}
            // controls={true}
            // src={this.state.video.src}
            // poster={this.state.video.poster}
            // width="720"
            // height="420"
            // onReady={this.onPlayerReady.bind(this)}
            // onPlay={this.onVideoPlay.bind(this)}
            // onPause={this.onVideoPause.bind(this)}
            // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
            // onSeeking={this.onVideoSeeking.bind(this)}
            // onSeeked={this.onVideoSeeked.bind(this)}
            // onEnd={this.onVideoEnd.bind(this)}
            //     />
            // </div>
            <>
                <div className="vedio_wraper ">
                    <div className="card">
                        <div className="bar_movment" id="bar_movment" onClick={()=>{this.MoveProgressBar()}}>
                            <span></span>
                        </div>
                        <div class="vedio_bar"  >
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