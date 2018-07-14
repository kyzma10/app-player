import React from 'react';
import TrackPanel from '../TrackPanel';
import TrackList from '../TrackList';

import './style.css';

const Tracks = ({
                    elem, duration,
                    currentTime,
                    tracks,
                    activeTrack,
                    playTrack,
                    prevTrack,
                    nextTrack,
                    shuffleTracks,
                    pauseTrack,
                    isActive,
                    isOpen,
                    togglePopup,
                    deleteTrack,
                    clearSearch,
                    endOfSong}) => {
    return (
        <div className="tracks">
            <TrackPanel
                elem={elem}
                duration={duration}
                currentTime={currentTime}
                activeTrack={activeTrack}
                prevTrack={prevTrack}
                nextTrack={nextTrack}
                shuffleTracks={shuffleTracks}
                pauseTrack={pauseTrack}
                isActive={isActive}
                playTrack={playTrack}
                endOfSong={endOfSong}
            />
            <TrackList
                elem={elem}
                activeTrack={activeTrack}
                tracks={tracks}
                playTrack={playTrack}
                isOpen={isOpen}
                togglePopup={togglePopup}
                deleteTrack={deleteTrack}
                clearSearch={clearSearch}
            />
        </div>
    );
};

export default Tracks;
