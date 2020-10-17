import React from "react";
import {IconButton} from '@material-ui/core';
import {Mic, MicOff, Videocam, VideocamOff} from '@material-ui/icons';
import './RecordingToolBox.scss';


class RecordingToolBox extends React.Component {

    state = {
        mic: false,
        camera: false,
    };

    onClickMic = () => {
        this.setState({...this.state, mic: !this.state.mic});
    };

    onClickCam = () => {
        this.setState({...this.state, camera: !this.state.camera});
    };


    render(): React.ReactElement<React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="Recording-toolbox">
                <IconButton onClick={this.onClickMic} color="secondary">
                    {this.state.mic ?
                        <Mic color="secondary"/> : <MicOff color="secondary"/>}
                </IconButton>
                <IconButton onClick={this.onClickCam} color="secondary">
                    {this.state.camera ?
                        <Videocam color="secondary"/> : <VideocamOff color="secondary"/>}
                </IconButton>
                {/*<button className="button-success">Rec Type</button>*/}
            </div>
        );
    }
}

export default RecordingToolBox;
