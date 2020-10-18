import React, {RefObject} from 'react';
import logo from './logo.svg';
import './App.css';

import Stopwatch from "./components/StopWatch/StopWatch";
import StopWatchToolBox from "./components/StopWatchToolBox/StopWatchToolBox";
import VideoLive from "./components/VideoLive/VideoLive";
import RecordingToolBox from "./components/RecordingToolBox/RecordingToolBox";


class App extends React.Component {
    stopWatch: RefObject<Stopwatch>;

    constructor(props: Object) {
        super(props);
        this.stopWatch = React.createRef();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {


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
                    <StopWatchToolBox stopwatchRef={this.stopWatch}/>
                    <RecordingToolBox />

                </header>

                <body className="App-body">
                    <VideoLive/>
                    
                </body>
            </div>
        );
    }

}

export default App;
