import React from "react";
import "./VideoLive.scss";


class VideoLive extends React.Component {


    render() {
        return (
            <video className="video-container" muted>
                {/*<video className="video-container" controls muted> */}
                <source src="http://localhost:9000/video" type="video/mp4"></source>
            </video>
        );
    }

}


export default VideoLive;
