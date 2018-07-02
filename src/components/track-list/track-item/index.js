import React from 'react';
import './style.css';

const TrackItem = ({
                       elem,
                       track,
                       playTrack,
                       idx
                   }) => {
    return (
        <li
            className="track-item"
            id={track.album.id}
            onClick={() => playTrack(track.id, elem)}
        >
            {idx+1}. {track.artist.name}: {track.album.title}
        </li>
    );
};

export default TrackItem;
