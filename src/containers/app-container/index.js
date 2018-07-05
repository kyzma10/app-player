import React, { Component } from 'react';
import App from '../../components/app';
import {connect} from 'react-redux';
import {getPlayList} from '../../action'

import axios from 'axios';
import Url from '../../utils/urls';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            activeTrack: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.status !== nextProps.status) {
            this.setState({
                state: nextProps.status
            });
        }
    }

    componentDidMount() {
        this.props.getPlayList();
        // axios({
        //     method: 'get',
        //     url: Url
        // })
        //     .then(response => this.setState({
        //         tracks: response.data.data,
        //         activeTrack: [response.data.data[0]]
        //     }))
        //     .catch(error => console.log(error));
    }

    render() {
        console.log(this.props);
    return (
            <App
                tracks={this.state.tracks}
                activeTrack={this.state.activeTrack}
                playSelectTrack={this.playSelectTrack}
                prevTrack={this.prevTrack}
                nextTrack={this.nextTrack}
                loopTrack={this.loopTrack}
                shuffleTracks={this.shuffleTracks}
            />
    );
  }

    playSelectTrack = (id) => {
        this.setState({
            activeTrack: this.state.tracks.filter(item => item.id === id)
        });
    };

    prevTrack = (id) => {
        let index = -1;
        const len = this.state.tracks.length;
        this.state.tracks.map((item, idx) => {
            if (item.id === id){
                if(idx === 0)
                    index = len;
                else
                    index = idx -1;
            }
            return index;
        });

        if (index !== -1 && len > 0) {
            this.setState({activeTrack: [this.state.tracks[index % len]]})
        }
    };

    nextTrack = (id) => {
        let index = -1;
        const len = this.state.tracks.length;
        this.state.tracks.map((item, idx) => {
            if (item.id === id)
                index = idx +1;
            return index;
        });

        if (index !== -1 && len > 0) {
            this.setState({activeTrack: [this.state.tracks[index % len]]})
        }
    };

    loopTrack = (el) => {
        el.loop ? el.loop = false : el.loop = true;
    };

    shuffleTracks = () => {
        let array = [...this.state.tracks];
        let ctr = array.length;
        let index = 0;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            [array[ctr], array[index]] = [array[index], array[ctr]];
        }
        this.setState({tracks: array});
    }
}

const mapStateToProps = store => {
    const {isLoading, trackList, error} = store;

    return {
        isLoading,
        trackList,
        error};
};


export default connect(mapStateToProps, {getPlayList})(AppContainer);
