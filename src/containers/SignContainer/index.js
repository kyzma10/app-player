import React, {Component} from 'react';
import Sign from '../../components/Sign';
import {connect} from 'react-redux';
import {auth} from "../../actions/authAction";

class SignContainer extends Component {

    render() {
        return (
            <Sign
                onSubmit={this.handleSubmit}
            />
        );
    }

    handleSubmit = (val) => {
        console.log('submit', val);
        this.props.auth(val);
    }
}

const mapDispatchToProps = dispatch => ({
    auth: () => dispatch(auth())
});

export default connect(null, mapDispatchToProps)(SignContainer);
