import React, {Component} from 'react';
import TrackItem from '../../components/track-list/track-item/index';

class TrackItemContainer extends Component {

    render() {
        return (
            <TrackItem
                elem={this.props.elem}
                idx={this.props.idx}
                track={this.props.track}
                playTrack={this.props.playTrack}
            />
        );
    }
}

export default TrackItemContainer;
