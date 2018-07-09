import React from 'react';
import FaPlay from 'react-icons/lib/fa/play-circle';
import FaPause from 'react-icons/lib/fa/pause-circle';

import './style.css';

const ControlButton = ({id, elem, isActive, playOn, playOf}) => {
    return (
        <div className="control-button">
            {
                isActive === false
                    ? <FaPlay onClick={() => playOn(id, elem)} size={68}/>
                    : <FaPause onClick={() => playOf(elem)} size={68}/>
            }
        </div>
    );
};

export default ControlButton;
