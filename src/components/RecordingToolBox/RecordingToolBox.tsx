import React from "react";
import {IconButton} from '@material-ui/core';
import {Mic, CameraRounded} from '@material-ui/icons';
import './RecordingToolBox.scss';


class RecordingToolBox extends React.Component {


    render(): React.ReactElement<React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="Recording-toolbox">
                <IconButton> <Mic color="secondary"/> </IconButton>
                <IconButton> <CameraRounded color="secondary"/> </IconButton>
                {/*<button className="button-success">Rec Type</button>*/}
            </div>
        );
    }
}

export default RecordingToolBox;
