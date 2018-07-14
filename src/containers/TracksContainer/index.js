import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tracks from '../../components/Tracks';
import {
    shuffleTracks,
    prevTrack,
    nextTrack,
    currentTrack,
    findTracks,
    deleteTrack,
    clearSearchList } from '../../actions/tracksAction';
import PropTypes from 'prop-types';

class TracksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            findAuthor: '',
            elem: '',
            isActive: false,
            currentTime: 0,
            duration: 100,
            endOfSong: false
        };
    }

    componentDidMount() {
        const el = document.getElementById('player');
        this.setState({
            elem: el
        })
    }

    render() {
        return (
            <Tracks
                elem={this.state.elem}
                currentTime={this.state.currentTime}
                duration={this.state.duration}
                tracks={this.props.tracks}
                activeTrack={this.props.activeTrack}
                playTrack={this.playTrack}
                prevTrack={this.props.prevTrack}
                nextTrack={this.props.nextTrack}
                shuffleTracks={this.props.shuffleTracks}
                pauseTrack={this.pauseTrack}
                isActive={this.state.isActive}
                isOpen={this.state.isOpen}
                togglePopup={this.togglePopup}
                deleteTrack={this.props.deleteTrack}
                endOfSong={this.state.endOfSong}
            />
        );
    }

    playTrack = (id, elem) => {
        this.props.currentTrack(id);
        setTimeout(() => {
            elem.play();
            this.setState({
                isActive: true,
                endOfSong: false
            });
            let interval = setInterval(
                () => {
                    let currentTime = Math.floor(elem.currentTime);
                    let duration = Math.floor(elem.duration);
                    this.setState({
                        currentTime: currentTime,
                        duration: duration
                    });
                    if(currentTime === duration || this.state.isActive === false) {
                        clearInterval(interval);
                        if(currentTime === duration) {
                            this.setState({
                                isActive: false,
                                endOfSong: true
                            });
                        }
                    }
                }, 500)
        }, 1500);
    };

    pauseTrack = (elem) => {
        elem.pause();
        this.setState({
            isActive: false
        });
    };

    togglePopup = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen}
        });

        if(this.state.isOpen === false) {
            this.props.clearSearch()
        }
    };

}

TracksContainer.displayName = 'TrackContainer';

TracksContainer.propTypes = {
    prevTrack: PropTypes.func,
    nextTrack: PropTypes.func,
    shuffleTracks: PropTypes.func,
    currentTrack: PropTypes.func,
    findTracks: PropTypes.func,
};

const mapStateToProps = state => ({
    isLoop: state.tracks.isLoop
});

const mapDispatchToProps = dispatch => ({
    prevTrack: (id) => dispatch(prevTrack(id)),
    nextTrack: (id) => dispatch(nextTrack(id)),
    shuffleTracks: () => dispatch(shuffleTracks()),
    currentTrack: (id) => dispatch(currentTrack(id)),
    findTracks: (val) => dispatch(findTracks(val)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    clearSearch: () => dispatch(clearSearchList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksContainer);
