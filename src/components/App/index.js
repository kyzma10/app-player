import React from 'react';
import TracksContainer from '../../containers/TracksContainer';
import PropTypes from 'prop-types';
import load from '../../assets/img/ajax-loader.gif';
import './style.css';

const App = ({ tracks, activeTrack, isLoading }) => {
    return (
        <div className="app-container">
            { isLoading && tracks.length > 0 ?
                <div className="app">
                    <audio
                        id="player"
                        src={
                            activeTrack[0] ? activeTrack[0].preview : null
                        }>
                    </audio>
                    <TracksContainer
                        tracks={tracks}
                        activeTrack={activeTrack}
                    />
                </div> :
                <div className="loader">
                    <img src={load} alt="load"/>
                </div>}
        </div>
    )
};

App.displayName = 'App';

App.propTypes = {
    tracks: PropTypes.array,
    activeTrack: PropTypes.array,
    isLoading: PropTypes.bool
};

export default App;
