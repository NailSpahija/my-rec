import React, {RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from "./components/StopWatch/StopWatch";

class App extends React.Component {
    stopWatch: RefObject<Stopwatch>;

    state = {
        is_recording: false,
    };

    constructor(props: Object) {
        super(props);
        this.stopWatch = React.createRef();
    }

    onStart = () => {
        this.setState({...this.state, is_recording: true});
        const curr_stopwatch = this.stopWatch.current;
        if (curr_stopwatch) curr_stopwatch.startTimer();
    };


    onStop = () => {
        this.setState({...this.state, is_recording: false});
        const curr_stopwatch = this.stopWatch.current;
        if (curr_stopwatch) curr_stopwatch.stopTimer();
    };

    onPause = () => {
        const curr_stopwatch = this.stopWatch.current;
        if (curr_stopwatch) curr_stopwatch.pauseTimer();
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-header-buttons">
                        <button onClick={this.onStop} className="button-error" hidden={!this.state.is_recording}>Stop
                        </button>
                        <button onClick={this.onPause} className="button-warning"
                                hidden={!this.state.is_recording}>Pause
                        </button>
                        <button onClick={this.onStart} className="button-success" hidden={this.state.is_recording}>Rec
                        </button>
                    </div>

                </header>
                <nav className="App-nav-bar">

                </nav>
                <body className="App-body">
                <Stopwatch ref={this.stopWatch} status={this.state.is_recording}/>

                </body>
            </div>
        );
    }

}

export default App;
