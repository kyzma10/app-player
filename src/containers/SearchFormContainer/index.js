import React, {Component} from 'react';
import SearchForm from '../../components/SearchForm/index';
import {connect} from 'react-redux';
import {findTracks} from '../../actions/tracksAction';

class SearchFormContainer extends Component {
    render() {
        return (
            <SearchForm onSubmit={this.handleSubmit}/>
        );
    }

    handleSubmit = (val) => {
        this.props.findTracks(val.search)
    }
}

const mapStateToProps = dispatch => ({
    findTracks: (val) => dispatch(findTracks(val))
});

export default connect(null, mapStateToProps)(SearchFormContainer);
