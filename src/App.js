import React, {Ref, RefObject} from 'react';
// import logo from './logo.svg';
import './App.css';
import Stopwatch from "./components/StopWatch/StopWatch";
import StopWatchToolBox from "./components/StopWatchToolBox/StopWatchToolBox";
import VideoLive from "./components/VideoLive/VideoLive";
import RecordingToolBox from "./components/RecordingToolBox/RecordingToolBox";

const ScreenRecord = require('./tools/record.class');


class App extends React.Component {
    // stopWatch: RefObject<Stopwatch>;
    // recorder: RefObject<Object>;

    constructor(props) {
        super(props);
        this.stopWatch = React.createRef();
        this.recorder = new ScreenRecord();
    }

    onStart() {
        this.recorder.startRecording();
    }

    onPause() {

    }

    onStop() {
        this.recorder.stopRecording();
    }

    render() {


        let app_info = (
            <div className="App-header-logo">
                {/* <img className="App-icon" src={logo} alt="MyRec Icon"/> */}
                <span>MyRec</span>
            </div>
        );

        return (
            <div className="App">
                <header className="App-header">
                    <Stopwatch ref={this.stopWatch} appInfo={app_info}/>
                    <StopWatchToolBox
                        onStart={this.onStart}
                        onStop={this.onStop}
                        onPause={this.onPause}
                        stopwatchRef={this.stopWatch}/>
                    <RecordingToolBox/>

                </header>

                <body className="App-body">
                <VideoLive/>

                </body>
            </div>
        );
    }

}

export default App;
