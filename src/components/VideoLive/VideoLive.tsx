import React from "react";
import "./VideoLive.scss";


class VideoLive extends React.Component {


    render() {
        return (
            <video className="video-container" muted>
                <source src="http://localhost:9000/" type="video/mp4"></source>
            </video>
        );
    }

}


export default VideoLive;
