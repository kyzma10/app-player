import React, { Component } from 'react';
import App from '../../components/App';
import {connect} from 'react-redux';
import {getPlayList} from '../../actions/tracksAction';
import ErrorBoundary from '../../containers/ErrorBoundary';

class AppContainer extends Component {

    componentDidMount() {
        this.props.getPlayList();
    }

    render() {
        const {trackList, activeTrack, isLoading} = this.props;
    return (
        <ErrorBoundary>
            <App
                tracks={trackList}
                activeTrack={activeTrack}
                isLoading={isLoading}
            />
        </ErrorBoundary>
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
