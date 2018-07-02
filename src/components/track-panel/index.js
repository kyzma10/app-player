import React from 'react';
import TrackControl from './track-control';
import './style.css';

const TrackPanel = ({
                        activeTrack,
                        elem,
                        duration,
                        currentTime,
                        prevTrack,
                        nextTrack,
                        onOfPlay,
                        loopTrack,
                        shuffleTracks,
                        pauseTrack,
                        on,
                        playTrack
                    }) => {
    return (
        <div className="track-panel">
            <div className="current-image">
                {activeTrack.length > 0 ? <img src={activeTrack[0].album.cover_big} alt={activeTrack.id}/>:null}
            </div>
            <TrackControl
                activeTrack={activeTrack}
                elem={elem}
                currentTime={currentTime}
                duration={duration}
                playTrack={playTrack}
                prevTrack={prevTrack}
                nextTrack={nextTrack}
                onOfPlay={onOfPlay}
                loopTrack={loopTrack}
                shuffleTracks={shuffleTracks}
                pauseTrack={pauseTrack}
                on={on}
            />
        </div>
    );
};

export default TrackPanel;
