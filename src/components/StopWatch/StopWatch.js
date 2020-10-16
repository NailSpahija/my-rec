import React, {Component} from "react";
import "./StopWatch.scss";


class Stopwatch extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };


    pauseTimer = () => {
        if (!this.state.timerOn) return;


    };

    startTimer = () => {
        if (this.state.timerOn) return;

        this.setState({
            ...this.state,
            timerOn: true,
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
        this.setState({...this.state, timerOn: false});
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            ...this.state,
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

        if (this.props.status) {
            this.startTimer()
        }

        let time_f = this.get_time();
        let cl_nm = 'Stopwatch-display ' + (!this.state.timerOn ? 'Stopwatch-hide' : '');

        return (
            <div className="Stopwatch">
                <div className={cl_nm}>
                    {time_f[0]} : {time_f[1]} : {time_f[2]} : {time_f[3]}
                </div>
            </div>
        );
    }
}

export default Stopwatch;