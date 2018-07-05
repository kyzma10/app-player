import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiLock from 'react-icons/lib/ti/lock-closed-outline';
import PropTypes from 'prop-types';
import './style.css';

const Sign = ({email, password, handleSubmit}) => {
    return (
        <div className="sign-bg">
            <div className="sign-content">
                <div className="sign-img">
                    <img src="/img/girl-bg.jpg" alt="img"/>
                </div>
                <div className="sign-form">
                    <form className="sign-form__items" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-control">
                            <input type="email" className="form-control" defaultValue={email}/>
                            <TiMail />
                        </div>
                        <div className="form-control">
                            <input type="password" className="form-control" defaultValue={password}/>
                            <TiLock />
                        </div>
                        <button type="submit" className="btn-sign">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Sign.displayName = 'Sign';

Sign.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func
};

Sign.defaultProps = {
    email: '',
    password: null
};

export default Sign;
