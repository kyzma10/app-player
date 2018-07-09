import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiLock from 'react-icons/lib/ti/lock-closed-outline';
// import PropTypes from 'prop-types';
import girlBg from '../../assets/img/girl-bg.jpg';
import {Field, reduxForm} from 'redux-form';
import CustomField from '../CustomField';
import './style.css';
import {required} from "../../utils/validate";

let Sign = ({ handleSubmit }) => {
    console.log(this.props);
    return (
        <div className="sign-bg">
            <div className="sign-content">
                <div className="sign-img">
                    <img src={girlBg} alt="img"/>
                </div>
                <div className="sign-form">
                    <form className="sign-form__items" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <Field
                                name="email"
                                component={CustomField}
                                type="email"
                                validate={required}
                            />
                            <TiMail />
                        </div>
                        <div className="form-control">
                            <Field name="password" component="input" type="password"/>
                            <TiLock />
                        </div>
                        <button type="submit" className="btn-sign">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Sign.displayName = 'Sign';
//
// Sign.propTypes = {
//     email: PropTypes.string.isRequired,
//     password: PropTypes.number.isRequired,
//     handleSubmit: PropTypes.func
// };
//
// Sign.defaultProps = {
//     email: '',
//     password: null
// };
const validate = values => {
    const errors = {};
    if(!values.email) {
        errors.email= 'Required';
    }
    return errors;
};

Sign = reduxForm({
    form: 'sign'
})(Sign);
export default Sign;
