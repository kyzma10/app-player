import React, {Component} from 'react';
import TrackItem from '../../components/TrackList/TrackItem/index';

class TrackItemContainer extends Component {

    render() {
        return (
            <TrackItem
                elem={this.props.elem}
                idx={this.props.idx}
                track={this.props.track}
                playTrack={this.props.playTrack}
                deleteTrack={this.props.deleteTrack}
                activeTrack={this.props.activeTrack}
                checkOfItem={this.checkOfItem}
            />
        );
    }

    checkOfItem = (id1, id2) => {

        if(id1 === id2)
            return true;

        return false;
    }
}

export default TrackItemContainer;
