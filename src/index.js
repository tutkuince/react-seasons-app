import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // This is the only time we do direct assignment to this.state
    state = { lat: null, errorMessage: '' };

    // after all the elements of the page is rendered correctly, this method is called
    componentDidMount() {
        // Getting the current position
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    // React says we have to define render.
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request!"/>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));