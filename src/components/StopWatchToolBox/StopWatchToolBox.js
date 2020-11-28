import React from "react";

class StopWatchToolBox extends React.Component {

    REC_STATUS = 'REC';
    PAUSED_STATUS = 'PAUSED';
    STOPPED_STATUS = 'STOPPED';

    state = {
        status: this.STOPPED_STATUS,
    };

    onStart = () => {
        this.setState({...this.state, status: this.REC_STATUS});
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) curr_stopwatch.startTimer();
        this.props.onStart();
    };

    onStop = () => {
        this.setState({...this.state, status: this.STOPPED_STATUS});
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) curr_stopwatch.stopTimer();
        this.props.onStop();
    };

    onPause = () => {
        const curr_stopwatch = this.props.stopwatchRef.current;
        if (curr_stopwatch) {
            curr_stopwatch.pauseTimer();
            this.setState({...this.state, status: this.PAUSED_STATUS});
            this.props.onPause();
        }
    };


    render() {

        let header_btn = (
            <button onClick={this.onStart} className="button-success">Rec</button>
        );

        if (this.state.status === this.PAUSED_STATUS) {
            header_btn = (<>
                <button onClick={this.onStop} className="button-error">Stop</button>
                <button onClick={this.onStart} className="button-success">Rec</button>
            </>);
        }

        if (this.state.status === this.REC_STATUS) {
            header_btn = (<>
                <button onClick={this.onStop} className="button-error">Stop</button>
                <button onClick={this.onPause} className="button-warning">Pause</button>
            </>);
        }

        return (
            <div className="App-header-buttons">
                {header_btn}
            </div>
        );

    }

}

export default StopWatchToolBox;
