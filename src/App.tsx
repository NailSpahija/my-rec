import React, {RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from "./components/StopWatch/StopWatch";
import HeaderToolBox from "./components/HeaderToolBox/HeaderToolBox";

class App extends React.Component {
    stopWatch: RefObject<Stopwatch>;

    constructor(props: Object) {
        super(props);
        this.stopWatch = React.createRef();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div className="App">
                <header className="App-header">
                    <HeaderToolBox stopwatchRef={this.stopWatch}/>

                </header>
                <nav className="App-nav-bar">

                </nav>
                <body className="App-body">
                <Stopwatch ref={this.stopWatch} />

                </body>
            </div>
        );
    }

}

export default App;
