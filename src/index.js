import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            positionError => console.log(positionError)
        );

        return (
            <h2>Latitude: </h2>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));