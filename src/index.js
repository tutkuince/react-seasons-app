import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // State must be initialized when a component is created. (constructor)
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to this.state
        this.state = {
            lat: null
        };

        // Getting the current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            positionError => console.log(positionError)
        );
    }

    // React says we have to define render.
    render() {
        return (
            <h2>Latitude: {this.state.lat}</h2>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));