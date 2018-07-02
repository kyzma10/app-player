import React from 'react';
import './style.css';

const Progress = ({duration, currentTime}) => {
    return (
        <div className="track-progress">
            <progress
                value={currentTime ? currentTime : 0}
                max={duration ? duration : 100}>
            </progress>
        </div>
    );
};

export default Progress;
