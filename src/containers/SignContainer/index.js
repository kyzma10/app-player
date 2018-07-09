import React, {Component} from 'react';
import Sign from '../../components/Sign';

class SignContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'test@com.ua',
            password: 12345678
        }
    }

    render() {
        return (
            <Sign
                email={this.state.email}
                password={this.state.password}
                handleSubmit={this.handleSubmit}
            />
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }
}

export default SignContainer;
