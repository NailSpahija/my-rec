import React from "react";

class HeaderToolBox extends React.Component {

    state = {
        is_recording: false,
    };

    constructor(props) {
        super(props);
    }

    onStart = () => {
        this.setState({...this.state, is_recording: true});
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) curr_stopwatch.startTimer();
    };

    onStop = () => {
        this.setState({...this.state, is_recording: false});
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) curr_stopwatch.stopTimer();
    };

    onPause = () => {
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) {
            curr_stopwatch.pauseTimer();
            this.setState({...this.state, is_recording: false});
        }
    };


    render() {


        return (<div className="App-header-buttons">
            <button onClick={this.onStop} className="button-error" hidden={!this.state.is_recording}>Stop
            </button>
            <button onClick={this.onPause} className="button-warning"
                    hidden={!this.state.is_recording}>Pause
            </button>
            <button onClick={this.onStart} className="button-success" hidden={this.state.is_recording}>Rec
            </button>
        </div>);

    }

}

export default HeaderToolBox;