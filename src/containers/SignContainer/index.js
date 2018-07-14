import React, {Component} from 'react';
import Sign from '../../components/Sign';
import {connect} from 'react-redux';
import {auth} from '../../actions/authAction';
import {Redirect} from 'react-router-dom';
import routes from "../../utils/routes";

class SignContainer extends Component {

    render() {
        return (
            this.props.isAuthenticated ?
                <Redirect to={routes.tracks}/> :
                <Sign onSubmit={this.handleSubmit}/>
        );
    }

    handleSubmit = (val) => {
        this.props.auth(val);
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    auth: (val) => dispatch(auth(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer);
