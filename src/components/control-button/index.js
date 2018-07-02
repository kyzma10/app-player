import React from 'react';
import FaPlay from 'react-icons/lib/fa/play-circle';
import FaPause from 'react-icons/lib/fa/pause-circle';

import './style.css';

const ControlButton = ({
                           id,
                           elem,
                           active,
                           on,
                           playOn,
                           playOf
                       }) => {
    return (
        <div className="control-button">
            {active === false && on === false ? <FaPlay onClick={() => playOn(id, elem)} size={68}/> : <FaPause onClick={() => playOf(elem)} size={68}/>}
        </div>
    );
};

export default ControlButton;
