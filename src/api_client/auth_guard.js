import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from '../utils/routes';

export const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {


    class Authentication extends Component {

        handleRender = props =>

            this.props.isAuthenticated ?

                <ComposedComponent {...props} {...rest} /> :

                <Redirect to={routes.sign} />;

        render() {
            return (
                <Route {...rest} render={this.handleRender}/>
            )
        }
    }


    const mapStateToProps = state => ({

        isAuthenticated: state.auth.isAuthenticated

    });


    const AuthenticationContainer = connect(mapStateToProps)(Authentication);

    return <AuthenticationContainer/>;

};