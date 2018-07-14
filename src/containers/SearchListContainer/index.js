import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchList from '../../components/SearchList';
import {findTrackAdded} from '../../actions/tracksAction';

class SearchListContainer extends Component {
    render() {
        const {searchList} = this.props;
        return (
            <SearchList searchList={searchList} trackAdded={this.props.trackAdded}/>
        );
    }
}

const mapStateToProps = state => ({
    searchList: state.tracks.searchList
});

const mapDispatchToProps = dispatch => ({
    trackAdded: (id) => dispatch(findTrackAdded(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchListContainer);
