import React, {Component} from 'react';
import TracksLoop from '../../components/TracksLoop';

class TracksLoopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoop: false
        }
    }


    shouldComponentUpdate(nextProps, nextState) {

        if(nextState.isLoop === this.state.isLoop) {
            if(nextProps.endOfSong === this.props.endOfSong)
                return false;
        }

        return true;
    }


    componentDidUpdate() {

        let el = document.getElementById('player');

        if(this.state.isLoop){
            if(this.props.endOfSong) {
                this.props.nextTrack(this.props.activeTrack[0].id);

                setTimeout(()=>{
                    this.props.playTrack(this.props.activeTrack[0].id, el)
                }, 1000)
            }
        }
    }


    render() {
        return (
            <TracksLoop
                isLoop={this.state.isLoop}
                loopTracks={this.loop}
            />
        );
    }

    loop = () => {
        this.setState((prevState) => {
            return { isLoop: !prevState.isLoop}
        });
    }
}

export default TracksLoopContainer;
