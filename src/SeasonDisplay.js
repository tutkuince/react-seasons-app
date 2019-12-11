import React from 'react';

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    return <div>Season Display</div>;
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;