import React from 'react';
import TiMinus from 'react-icons/lib/ti/minus-outline';
import './style.css';

const TrackItem = ({elem, track, playTrack, idx, deleteTrack, activeTrack, checkOfItem}) => {
    return (
        <li
            className={checkOfItem(track.id, activeTrack[0].id) ? 'track-item track-item-active' : 'track-item'}
            id={track.album.id}
        >
            <span onClick={() => playTrack(track.id, elem)}>
                {idx+1}. {track.artist.name}: {track.album.title}
            </span>
            <span className="track-delete" onClick={() => deleteTrack(track.id)}>
                <TiMinus size={24} />
            </span>
        </li>
    );
};

export default TrackItem;
