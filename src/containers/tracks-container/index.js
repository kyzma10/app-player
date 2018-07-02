import React, {Component} from 'react';
import Tracks from '../../components/tracks';

class TracksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: '',
            on: false,
            currentTime: 0,
            duration: 100
        }
    }

    componentDidMount() {
        const el = document.getElementById('player');
        this.setState({
            elem: el
        });
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
                loopTrack={this.props.loopTrack}
                shuffleTracks={this.props.shuffleTracks}
                pauseTrack={this.pauseTrack}
                on={this.state.on}
            />
        );
    }

    playTrack = (id, elem) => {
        this.props.playSelectTrack(id);
        setTimeout(() => {
            elem.play();
            this.setState({
                on: true
            });
            let interval = setInterval(
                () => {
                    let currentTime = Math.floor(elem.currentTime);
                    let duration = Math.floor(elem.duration);
                    this.setState({
                        currentTime: currentTime,
                        duration: duration
                    });
                    if(currentTime === duration || !this.state.on) {
                        clearInterval(interval);
                        this.setState({
                            on: false
                        });
                    }
                }, 500)
        }, 1500);
    };

    pauseTrack = (elem) => {
        elem.pause();
        this.setState({
            on: false
        });
    }
}

export default TracksContainer;
