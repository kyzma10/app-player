import React, { Component } from 'react';
import App from '../../components/App';
import {connect} from 'react-redux';
import {getPlayList} from '../../actions/tracksAction';

class AppContainer extends Component {

    componentDidMount() {
        this.props.getPlayList();
    }

    render() {
    return (
            <App
                tracks={this.props.trackList}
                activeTrack={this.props.activeTrack}
            />
    )
  }
}

const mapStateToProps = store => {
    const {isLoading, trackList, activeTrack, error} = store.tracks;

    return {
        isLoading,
        trackList,
        activeTrack,
        error };
};

const mapDispatchToProps = dispatch => ({
    getPlayList: ()=> dispatch(getPlayList())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
