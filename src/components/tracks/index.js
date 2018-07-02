import React from 'react';
import TrackPanel from '../track-panel';
import TrackList from '../track-list';

import './style.css';

const Tracks = ({
                    elem,
                    duration,
                    currentTime,
                    tracks,
                    activeTrack,
                    playTrack,
                    prevTrack,
                    nextTrack,
                    loopTrack,
                    shuffleTracks,
                    pauseTrack,
                    on
                }) => {
    return (
        <div className="tracks">
            <TrackPanel
                elem={elem}
                duration={duration}
                currentTime={currentTime}
                activeTrack={activeTrack}
                prevTrack={prevTrack}
                nextTrack={nextTrack}
                loopTrack={loopTrack}
                shuffleTracks={shuffleTracks}
                pauseTrack={pauseTrack}
                on={on}
                playTrack={playTrack}
            />
            <TrackList
                elem={elem}
                activeTrack={activeTrack}
                tracks={tracks}
                playTrack={playTrack}
            />
        </div>
    );
};

export default Tracks;
