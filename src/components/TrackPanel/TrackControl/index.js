import React from 'react';

import FaBackward from 'react-icons/lib/fa/backward';
import FaForward from 'react-icons/lib/fa/forward';

import TiShuffle from 'react-icons/lib/ti/arrow-shuffle';
import ControlButtonContainer from '../../../containers/ControlButtonContainer';
import TracksLoopContainer from '../../../containers/TracksLoopContainer';
import Progress from '../Progress';

import './style.css';

const TrackControl = ({
                          activeTrack,
                          elem,
                          duration,
                          currentTime,
                          playTrack,
                          prevTrack,
                          nextTrack,
                          shuffleTracks,
                          pauseTrack,
                          isActive
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
                    <ControlButtonContainer
                        id={id}
                        elem={elem}
                        playTrack={playTrack}
                        pauseTrack={pauseTrack}
                        isActive={isActive}
                    />
                </div>
                <div className="control__item">
                    <FaForward onClick={() => nextTrack(id)} size={30} />
                </div>
                <div className="control__item">
                    <TracksLoopContainer
                        id={id}
                        elem={elem}
                        playTrack={playTrack}
                        nextTrack={nextTrack}
                    />
                </div>
            </div>

        </div>
    );
};

export default TrackControl;
