import React from 'react';
import TrackControl from './TrackControl';
import './style.css';

const TrackPanel = ({
                        activeTrack,
                        elem,
                        duration,
                        currentTime,
                        prevTrack,
                        nextTrack,
                        onOfPlay,
                        shuffleTracks,
                        pauseTrack,
                        isActive,
                        playTrack,
                        endOfSong}) => {
    return (
        <div className="track-panel">
            <div className="current-image">
                {
                    activeTrack.length > 0
                        ? <img src={activeTrack[0].album.cover_big} alt={activeTrack.id}/>
                        : null
                }
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
                shuffleTracks={shuffleTracks}
                pauseTrack={pauseTrack}
                isActive={isActive}
                endOfSong={endOfSong}
            />
        </div>
    );
};

export default TrackPanel;
