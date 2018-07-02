import React from 'react';

import FaBackward from 'react-icons/lib/fa/backward';
import FaForward from 'react-icons/lib/fa/forward';
import TiLoop from 'react-icons/lib/ti/arrow-loop';
import TiShuffle from 'react-icons/lib/ti/arrow-shuffle';
import ControlButtonContainer from '../../../containers/control-button-container';
import Progress from '../progress';

import './style.css';

const TrackControl = ({
                          activeTrack,
                          elem,
                          duration,
                          currentTime,
                          playTrack,
                          prevTrack,
                          nextTrack,
                          loopTrack,
                          shuffleTracks,
                          pauseTrack,
                          on
                      }) => {

    const id = activeTrack[0] ? activeTrack[0].id : null;

    return (
        <div >
            <Progress duration={duration} currentTime={currentTime}/>
            <div className="control">
                <div className="control__item">
                    <TiShuffle onClick={() => shuffleTracks()} size={30} />
                </div>
                <div className="control__item">
                    <FaBackward onClick={() => prevTrack(id)} size={30} />
                </div>
                <div className="control__item">
                    <ControlButtonContainer id={id} elem={elem} playTrack={playTrack} pauseTrack={pauseTrack} on={on}/>
                </div>
                <div className="control__item">
                    <FaForward onClick={() => nextTrack(id)} size={30} />
                </div>
                <div className="control__item">
                    <TiLoop onClick={() => loopTrack(elem)} size={30} />
                </div>
            </div>

        </div>
    );
};

export default TrackControl;
