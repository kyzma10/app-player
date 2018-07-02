import React from 'react';
import TrackItemContainer from '../../containers/track-item-container';

import './style.css';

const TrackList = ({
                       elem,
                       tracks,
                       activeTrack,
                       playTrack
                   }) => {
    return (
        <div className="track-head">
            <h2>&#9836; {activeTrack.length > 0 ? activeTrack[0].artist.name : null}</h2>
            <ul className="track-list">
                {tracks.map((track, idx) => <TrackItemContainer
                    key={track.id}
                    idx={idx}
                    track={track}
                    playTrack={playTrack}
                    elem={elem}
                />)}
            </ul>
        </div>
    );
};

export default TrackList;
