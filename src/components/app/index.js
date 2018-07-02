import React from 'react';
import TrackContainer from '../../containers/tracks-container';
import './style.css';

const App = ({
                 tracks,
                 activeTrack,
                 playSelectTrack,
                 prevTrack,
                 nextTrack,
                 loopTrack,
                 shuffleTracks
             }) => {
    return (
        <div >
            {tracks.length > 0 ? (
                <div className="app">
                    <audio id="player" src={activeTrack[0] ? activeTrack[0].preview : null}>
                    </audio>
                    <TrackContainer
                        tracks={tracks}
                        activeTrack={activeTrack}
                        playSelectTrack={playSelectTrack}
                        prevTrack={prevTrack}
                        nextTrack={nextTrack}
                        loopTrack={loopTrack}
                        shuffleTracks={shuffleTracks}
                    />
                </div>) : (
                <div className="loader">
                    <img src="img/ajax-loader.gif" alt="load"/>
                </div>)}
        </div>
    );
};

export default App;