import React from 'react';
import TiLoop from 'react-icons/lib/ti/arrow-loop';

const TracksLoop = ({id, elem, loop, isLoop}) => {
    return (
            <TiLoop onClick={()=> loop(id, elem)} size={30} color={isLoop ? 'green' : ''}/>
    );
};

export default TracksLoop;
