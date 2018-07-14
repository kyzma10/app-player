import React from 'react';
import TrackItemContainer from '../../containers/TrackItemContainer';
import Modal from '../Modal';
import FaSearch from 'react-icons/lib/fa/search';
import FaClose from 'react-icons/lib/fa/close';
import PropTypes from 'prop-types';

import './style.css';

const TrackList = ({elem, tracks, activeTrack, playTrack, isOpen, togglePopup,
                       deleteTrack,}) => {
    return (
        <div className="track-head">
            <div className="track-button-control">
                {isOpen
                    ? <FaClose onClick={togglePopup} size={30}/>
                    : <FaSearch onClick={togglePopup} size={30}/>}
            </div>
            <h2>&#9836;
                { activeTrack.length > 0
                ? activeTrack[0].artist.name
                : null }
            </h2>
            {isOpen
                ? <Modal />
                : null}
            <ul className="track-list">
                {tracks.map((track, idx) => <TrackItemContainer
                    key={track.id}
                    idx={idx}
                    track={track}
                    playTrack={playTrack}
                    elem={elem}
                    deleteTrack={deleteTrack}
                    activeTrack={activeTrack}
                />)}
            </ul>
        </div>
    );
};

TrackList.displayName = 'TrackList';

TrackList.propTypes = {
    elem: PropTypes.any,
    tracks: PropTypes.array,
    activeTrack: PropTypes.array,
    playTrack: PropTypes.func,
    isOpen: PropTypes.bool,
    togglePopup: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default TrackList;
