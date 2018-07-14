import React from 'react';
import TiLoop from 'react-icons/lib/ti/arrow-loop';

const TracksLoop = ({isLoop, loopTracks}) => {
    return (
            <TiLoop onClick={loopTracks} size={30} color={isLoop ? '#b75c01' : ''}/>
    );
};

export default TracksLoop;
