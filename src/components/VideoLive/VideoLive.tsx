import React from "react";


class VideoLive extends React.Component {


    render() {
        return (
            <video controls muted>
                <source src="http://localhost:9000/video" type="video/mp4"></source>
            </video>
        );
    }

}


export default VideoLive;
