import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import SignContainer from './containers/SignContainer';
import routes from './utils/routes';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux';
import {PrivateRoute} from './api_client/auth_guard';

const store = createStore(reducers, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path={routes.tracks} component={AppContainer}/>
                <Route path={routes.sign} component={SignContainer}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();