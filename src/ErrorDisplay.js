import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div className="ui error message">
            <div className="header">
                There were some errors with your submission
            </div>
            <ul className="list">
                <li>{props.message}</li>
            </ul>
        </div>
    );
};

export default ErrorDisplay;