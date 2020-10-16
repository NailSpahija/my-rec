import React, {Component} from "react";
import "./StopWatch.scss";


class Stopwatch extends Component {

    START_STATUS = 'RUNNING';
    STOP_STATUS = 'STOP';
    PAUSE_STATUS = 'PAUSE';

    state = {
        status: this.STOP_STATUS,
        timerStart: 0,
        timerTime: 0
    };

    isTimerStopped = () => {
        return this.state.status === this.STOP_STATUS;
    };

    isTimerPaused = () => {
        return this.state.status === this.PAUSE_STATUS;
    };

    isTimerRunning = () => {
        return this.state.status === this.START_STATUS;
    };

    pauseTimer = () => {
        if (this.isTimerStopped()) return;
        clearInterval(this.timer);
        this.setState({...this.state, status: this.PAUSE_STATUS});
    };

    startTimer = () => {
        if (this.isTimerRunning()) return;

        this.setState({
            ...this.state,
            status: this.START_STATUS,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({...this.state, status: this.STOP_STATUS});
        this.resetTimer()
    };

    resetTimer = () => {
        this.setState({
            ...this.state,
            status: this.STOP_STATUS,
            timerStart: 0,
            timerTime: 0
        });
    };

    get_time = () => {
        const {timerTime} = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return [hours, minutes, seconds, centiseconds];
    };

    render() {

        let time_f = this.get_time();
        // let cl_nm = 'Stopwatch-display ' + (this.isTimerStopped() ? 'Stopwatch-hide' : '');
        let flp = 'Stopwatch ' + (this.isTimerStopped() ? 'is-flipped' : '');
        // Stopwatch
        return (
            <div className="Stopwatch-scene">
                <div className={flp}>
                    <div className="Stopwatch-front"/>
                    <div className="Stopwatch-back">
                        {time_f[0]} : {time_f[1]} : {time_f[2]} : {time_f[3]}
                    </div>
                    {/*<div className={cl_nm}></div>*/}
                </div>
            </div>
        );
    }
}

export default Stopwatch;