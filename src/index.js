import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // State must be initialized when a component is created. (constructor)
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to this.state
        this.state = {
            lat: null,
            errorMessage: ''
        };

        // Getting the current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    // React says we have to define render.
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));